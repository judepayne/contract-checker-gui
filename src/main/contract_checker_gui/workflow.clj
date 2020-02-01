(ns contract-checker-gui.workflow)

(defn contains-all? [m & ks]
  (every? #(contains? m %) ks))


(defn workflow?
  [maybe-workflow]
  (contains-all? maybe-workflow :id :init :tasks :status))


(defmacro workflow
  "Creates a workflow (series of future computations) with an id from either
  a series of task forms or other (child) workflows and task forms."
  [id & workflows-and-tasks]
  `(let [ts# (list ~@workflows-and-tasks)
         parts# (group-by workflow? ts#)
         chdn# (get parts# true)
         tasks# (get parts# false)]
     (if (empty? chdn#)
       {:id ~id
        :init (delay (first ts#))
        :tasks (rest ts#)
        :status :pending}
       {:id ~id
        :init chdn#
        :tasks tasks#
        :status :pending})))
