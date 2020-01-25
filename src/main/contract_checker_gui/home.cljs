(ns contract-checker-gui.home
  (:require
   [reagent.core             :refer [atom cursor create-class dom-node force-update]]
   [reagent.ratom            :refer [reaction make-reaction]]
   [accountant.core          :as accountant]
   [kvlt.core                :as kvlt]
   [promesa.core             :as p]
   [promesa.async-cljs       :refer-macros [async]]
   [goog.dom                 :as dom] 
   [clojure.pprint           :as pp]))

;; Config section - hard codings!

(def checker-url "https://8ty9wnwd19.execute-api.eu-west-2.amazonaws.com/beta")
(def visualize-url "https://8ty9wnwd19.execute-api.eu-west-2.amazonaws.com/beta")


;; Useful for debugging into the Chrome console.
(def log (.-log js/console))


;; State
(def local-state
  (atom
   {:producer-schema ""
    :consumer-schema ""
    :svg "<div />"
    :errors nil
    :sys-err {:producer-schema-err ""
              :consumer-schema-err ""
              :lambda-err ""}}))

(def errors-str (reaction (str (:errors @local-state))))


(def error-paths (reaction (map :path (-> @local-state :errors :errors))))


(defn json-data [] (str "{\"consumer\": " 
                          (:consumer-schema @local-state)
                          ",\"producer\": "
                          (:producer-schema @local-state)
                          "}"))


(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))


(defn json->clj
  [ds]
  (js->clj (.parse js/JSON ds) :keywordize-keys true))


(defn logger [res]
  (log res)
  res)


(defn parse-json
  [js]
  (try
    (let [parsed (json->clj js)]
      parsed)
    (catch :default e
      nil)))


(defn post [url json-data]
  (p/alet [{:keys [status body]}
              (p/await (p/catch (kvlt/request! {:url url
                                                :method :post
                                                :body json-data
                                                :content-type :json
                                                :accept :json})
                           (fn [e] ((ex-data e) :type))))]
             body))


(defn put-result [result]
  (swap! local-state assoc :errors result))


(defn check-for-error [result]
  (if (:err result)
    (throw (js/Error. (:err result)))
    result))


(defn put-error [err]
  (swap! local-state assoc-in [:sys-err :lambda-err] err))


(defn schema-error [schema]
  (case schema
    :consumer (swap! local-state assoc-in [:sys-err :consumer-schema-err]
                     "Consumer schema is not valid json!")
    :producer (swap! local-state assoc-in [:sys-err :producer-schema-err]
                     "Producer schema is not valid json!")))


(defn clear-errors []
  (swap! local-state assoc-in [:sys-err :consumer-schema-err] "")
  (swap! local-state assoc-in [:sys-err :producer-schema-err] "")
  (swap! local-state assoc-in [:sys-err :lambda-err] ""))


(defn compare-contract []
  (let [cs (parse-json (:consumer-schema @local-state))
        ps (parse-json (:producer-schema @local-state))]
    (if (and (not (nil? cs)) (not (nil? ps)))
      (do
        (clear-errors)
        (->> (post checker-url (json-data))
             (p/map json->clj)
             (p/map check-for-error)
             (p/map put-result)
             (p/error (fn [error] (put-error (.-message error))))))
      (do
        (if (nil? ps) (schema-error :producer))
        (if (nil? cs) (schema-error :consumer))))))


(defn producer-area [state]
  [:textarea
     {:id "producer-area"
      :placeholder "Paste the producer schema here"
      :value (:producer-schema @state)
      :rows 12
      :cols 50
      :on-change #(swap! state assoc :producer-schema (-> % .-target .-value) )}])


(defn consumer-area [state]
  [:textarea
     {:id "consumer-area"
      :placeholder "Paste the consumer schema here"
      :value (:consumer-schema @state)
      :rows 12
      :cols 50
      :on-change #(swap! state assoc :consumer-schema (-> % .-target .-value) )}])


(defn compare-button []
  [:button
   {:id "compare-button" 
    :onClick compare-contract}
   "Compare"])


(defn table-errors [errs]
  [:table
   [:thead
    [:tr
     [:th "Error No."]
     [:th "Error Rule"]
     [:th "Severity"]
     [:th "Path"]]]
   [:tbody
    (for [[k v] errs]
      ^{:key k}
      [:tr 
       [:td k]
       [:td (:rule v)]
       [:td (:severity v)]
       [:td (clojure.string/join "/" (:path v))]])]])


(defn display-errors [state]
  (let [errors (zipmap (range 1 1000) (-> @state :errors :errors))]
    [table-errors errors]))


(defn sys-errors [state]
  [:div.buffer-area.tech-error
   (str (-> @local-state :sys-err :producer-schema-err) "  "
        (-> @local-state :sys-err :consumer-schema-err) "  "
        (-> @local-state :sys-err :lambda-err))])


(defn home-page []
  [:div.page
   [:div.wrapper
    [:div.site-banner.bnr "Contract checker"]
    [:div.btn [compare-button]]
    [producer-area local-state]
    [consumer-area local-state]
    [sys-errors local-state]
    [:div.display-error [display-errors local-state]]]])
