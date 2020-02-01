(ns contract-checker-gui.home
  (:require
   [reagent.core             :refer [atom cursor create-class dom-node force-update]]
   [reagent.ratom            :refer [reaction make-reaction]]
   [accountant.core          :as accountant]
   [kvlt.core                :as kvlt]
   [promesa.core             :as p]
   [promesa.async-cljs       :refer-macros [async]]
   [goog.dom                 :as dom] 
   [clojure.pprint           :as pp]
   [clojure.string           :as str]))

;; Config section - hard codings!

(def checker-url "https://8ty9wnwd19.execute-api.eu-west-2.amazonaws.com/beta")
(def visualize-url "https://nf45eg8r27.execute-api.eu-west-2.amazonaws.com/beta")


  ;; Useful
  ;; Useful for debugging into the Chrome console.

(def log (.-log js/console))


(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))



(defn json->clj
  [ds]
  (js->clj (.parse js/JSON ds) :keywordize-keys true))


(defn logger
  ([prefix res]
   (log (str prefix " " res))
   res)
  ([prefix transfm-fn res]
   (log (str prefix " " (transfm-fn)))
   res))


;; State
(def default-svg-text "<svg/>")


(def local-state
  (atom
   {:producer-schema ""
    :consumer-schema ""
    :svg default-svg-text
    :errors nil
    :sys-err ""}))


;; svg-pan-zoom section ------------
(defn get-svg-element []
  (let [svg (-> js/document (.getElementById "svg") (.-firstChild))]
    svg))


(defn reset-pan-zoom [] 
  (let [svg-element (get-svg-element)]
    (when (not (nil? svg-element))
      (js/svgPanZoom.
       svg-element
       #js {:controlIconsEnabled true}))))


(defn put-svg [data]
  (swap! local-state assoc :svg data))
;; end svg-pan-zoom section ------------


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
  (swap! local-state assoc :errors result)
  ;; @gunjan - this function *was* the last to be called in our chain in 'compare-contracts'
  ;; now we want to extend that chain, so alter this function to return the result (errors)
  ;; passed into it.
  result)


(defn put-error [err]
  (let [err (if (vector? err)
              (apply str err)
              err)]
    (swap! local-state assoc :sys-err err)))


(defn clear-errors []
  (swap! local-state assoc :sys-err ""))


(defn json-data [producer-schema consumer-schema]
  (str "{\"consumer\": " consumer-schema ",\"producer\": " producer-schema "}"))


(defn input-for-json-viz [error-paths]
  (str "{\"json\": " (:consumer-schema @local-state)
       ",\"options\": " (clj->json {:highlight-paths error-paths})
       "}"))


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
    (throw  ["Lambda error: " (:err result)])
    result))


;; @gunjan - new function to put the path from errors into a vector
(defn errors->json-viz-fmt [errors]
  ;; @gunjan - the vector of areas is under a key :errors, so first dig that out then
  ;; map the :path key (nb. a key is also a function) over the contents.
  (map :path (:errors errors)))


(defn clean-json [js]
  (-> js (str/replace "\n" "") (str/replace "\t" "")))


(defn compare-contract []
  (do
    (clear-errors)
    (->> (p/promise (lambda-input (:producer-schema @local-state) (:consumer-schema @local-state)))
         (p/map (partial post checker-url))
         (p/map json->clj)
         (p/map put-result)
         (p/map errors->json-viz-fmt)
         (p/map input-for-json-viz)
         (p/map (partial post visualize-url))
         (p/map put-svg)
         (p/error (fn [error] (put-error error))))))


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
    ;(viz-errors (@state :consumer-schema) errors)
    [table-errors errors]))


(defn sys-errors [state]
  [:div.buffer-area.tech-error
   (-> @state :sys-err)])

;; @gunjan - new component to display svg
(defn svg-div
  "svg component. slightly more complex as needs to reset the svg control
   each time the svg (value) changes."
  [state]

  (create-class
   {:component-did-mount
    (fn [this] )

    :component-did-update
    (fn [this old-argv]
      (reset-pan-zoom))

    :reagent-render
    (fn [_ _ _]
      [:div#svg 
       {:dangerouslySetInnerHTML {:__html (:svg @local-state)}}])}))



(defn home-page []
  [:div.page
   [:div.wrapper
    [:div.site-banner.bnr "Contract checker"]
    [:div.btn [compare-button]]
    [producer-area local-state]
    [consumer-area local-state]
    [sys-errors local-state]
    [:div.display-error [display-errors local-state]]
    [svg-div]]])
 
