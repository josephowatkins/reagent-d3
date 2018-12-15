(ns reagent-d3.core
  (:require [reagent.core :as reagent]))

(defn home []
  [:div.wrapper
   [:h1 "Data viz with Reagent and D3"]])

(defn mount []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(mount)
