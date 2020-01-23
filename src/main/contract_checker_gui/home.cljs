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
  [:textarea.code
     {:id "producer-area"
      :placeholder "Paste the producer schema here"
      :value (:producer-schema @state)
      :rows 12
      :cols 50
      :on-change #(swap! state assoc :producer-schema (-> % .-target .-value) )}])

(defn consumer-area [state]
  [:textarea.code
     {:id "consumer-area"
      :placeholder "Paste the consumer schema here"
      :value (:consumer-schema @state)
      :rows 12
      :cols 50
      :on-change #(swap! state assoc :consumer-schema (-> % .-target .-value) )}])


(defn compare-button []
  [:button {:id "compare-button" 
            :onClick compare-contract}
   "Compare"])


(defn display-errors [state]
  [:textarea.display-error
   {
    :rows 12
    :columns 90
    :value @errors-str
    }]
)


(defn home-page []
  [:div.page
   [compare-button]
   [:div.wrapper
    [producer-area local-state]
    [consumer-area local-state]
    [display-errors local-state]
    ;[:p  :errors @local-state]
    ;[:p "Debug: @local-state"]
    ]
    ;(:errors @local-state)
     ])
