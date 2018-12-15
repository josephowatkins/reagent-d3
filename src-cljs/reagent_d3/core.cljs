(ns reagent-d3.core
  (:require [reagent-d3.bar-chart :as bar-chart]
            [reagent.core :as reagent]))

(defn home []
  [:div.wrapper
   [:h1 "Data viz with Reagent and D3"]
   [bar-chart/view]])

(defn mount []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(mount)
