(ns reagent-d3.core
  (:require [reagent-d3.bar-chart :as bar-chart]
            [reagent-d3.scatter-plot :as scatter-plot]
            [reagent.core :as reagent]))

(defn home []
  [:div.wrapper
   [:h1 "Data viz with Reagent and D3"]
   [bar-chart/view]
   [scatter-plot/view]])

(defn mount []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(mount)
