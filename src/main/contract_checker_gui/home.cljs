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


;; Useful for debugging into the Chrome console.
(def log (.-log js/console))


;; State
(def local-state
  (atom
   {:producer-schema ""
    :consumer-schema ""
    :svg "<div />"
    :errors nil}))

(def errors-str (reaction (str (:errors @local-state))))


(def aws-url "https://8ty9wnwd19.execute-api.eu-west-2.amazonaws.com/beta")

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
  (log (count ( :errors result)))
  (swap! local-state assoc :errors result))


(defn compare-contract []
  (->> (post aws-url (json-data))
       (p/map json->clj)
       (p/map put-result)
       (p/error (fn [error] (put-result (.-message error))))))


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


(defn Table-errors [errs]
  (log (pr-str errs))
  [:table
   [:thead
    [:tr
     [:th "Error No."]
     [:th "Error Rule"]
     [:th "Severity"]
     [:th "Path"]]]
   [:tbody
    (for [err errs]
        [:tr
       [:td]
       ^{:key (:rule err)} [:td (:rule err)]
       ^{:key (:severity err)} [:td (:severity err)]
       ^{:key (:path err)} [:td (clojure.string/join "\\" (:path err))]
       ])]])


(defn display-errors [state]
   (let [errors (:errors (:errors @state))]
    [Table-errors errors]))


(defn home-page []
  [:div.page
   [:div.wrapper
    [:div.site-banner.bnr "Contract checker"]
    [:div.btn [compare-button]]
    [producer-area local-state]
    [consumer-area local-state]
    [:div.buffer-area.tech-error "@gunjan: technical errors: json validation, lambda problems will go here. area will collapse/ expand as needed. do monday (or example on reagent website + in draw-graph)"]
    [:div.display-error [display-errors local-state]]
    ]])
