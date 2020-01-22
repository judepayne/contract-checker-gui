(ns contract-checker-gui.home
  (:require
   [reagent.core             :refer [atom cursor create-class dom-node force-update]]
   [reagent.ratom            :refer [reaction make-reaction]]
   [accountant.core          :as accountant]
   [kvlt.core                :as kvlt]
   [promesa.core             :as p]
   [promesa.async-cljs       :refer-macros [async]]
   [goog.dom                 :as dom]))


;; Useful for debugging into the Chrome console.
(def log (.-log js/console))


;; State
(def local-state
  (atom
   {:producer-schema ""
    :consumer-schema ""
    :svg "<div />"
    :errors ""}))



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
  (log ds)
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
  (log result)
  (swap! local-state assoc :errors result))


(defn compare-contract []
  (->> (post aws-url (json-data))
       (p/map json->clj)
       (p/map put-result)
       (p/error (fn [error] (put-result (.-message error))))))


(defn compare-button []
  [:button {:id "compare-button" 
            :onClick compare-contract}
   "Compare Contracts"])


(defn display-errors []
  (fn [] [:p @local-state]))


(defn home-page []
  [:div.page
;   @local-state
   [:div.main
    [producer-area local-state]
    [consumer-area local-state]
    [compare-button]
    [display-errors]
    [:p "Debug: @local-state"]]
    (:errors @local-state)
     ])
