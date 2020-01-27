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


;; Useful
;; Useful for debugging into the Chrome console.
(def log (.-log js/console))


(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))


(defn json->clj
  [ds]
  (js->clj (.parse js/JSON ds) :keywordize-keys true))


(defn logger [res]
  (log res)
  res)


;; State
(def local-state
  (atom
   {:producer-schema ""
    :consumer-schema ""
    :svg "<div />"
    :errors nil
    :sys-err ""}))

(def errors-str (reaction (str (:errors @local-state))))


(def error-paths (reaction (map :path (-> @local-state :errors :errors))))


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


(defn put-error [err]
  (swap! local-state assoc :sys-err err))


(defn clear-errors []
  (swap! local-state assoc :sys-err ""))


(defn json-data [producer-schema consumer-schema]
  (str "{\"consumer\": " consumer-schema ",\"producer\": " producer-schema "}"))


(defn parse-json
  "Returns parsed json or nil if it couldn't be parsed."
  [js]
  (try
    (let [parsed (json->clj js)] parsed)
    (catch :default e nil)))


(defn pre-parse-checks
  [schemas]
  (let [errors (reduce
                (fn [acc [schema-name schema]]
                  (if (= schema "") (conj acc [schema-name " must be specified."])
                      acc))
                []
                schemas)]
    (if (empty? errors)
      schemas
      (throw errors))))

;; (def js "{\"$id\": \"https://example.com/person.schema.json\"}")

(defn parse-checks
  [schemas]
  (let [parsed (map (fn [[schema-name schema]]
                      [schema-name (parse-json schema)])
                    schemas)
        errors (reduce
                (fn [acc [schema-name parsed-schema]]
                  (if (nil? parsed-schema)
                    (conj acc [schema-name " is not valid json."])
                    acc))
                []
                parsed)]
    (if (empty? errors)
      schemas
      (throw errors))))


(defn lambda-input [ps cs]
  (try
    (let [checked-schemas (-> [["producer schema" ps] ["consumer schema" cs]]
                              pre-parse-checks
                              parse-checks)
          input (apply json-data (map second checked-schemas))]
      input)
    (catch :default e
      (put-error (apply str (interpose " :  " (map #(apply str %) e)))))))


(defn check-lambda-error [result]
  (if (:err result)
    (throw (js/Error. ["Lambda error: " (:err result)]))
    result))


(defn compare-contract []
  (do
    (clear-errors)
    (->> (lambda-input (:producer-schema @local-state) (:consumer-schema @local-state))
         (post checker-url)
         (p/map json->clj)
         (p/map check-lambda-error)
         (p/map put-result)
         (p/error (fn [error] (put-error (.-message error)))))))


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
   (-> @state :sys-err)])


(defn home-page []
  [:div.page
   [:div.wrapper
    [:div.site-banner.bnr "Contract checker"]
    [:div.btn [compare-button]]
    [producer-area local-state]
    [consumer-area local-state]
    [sys-errors local-state]
    [:div.display-error [display-errors local-state]]]])
