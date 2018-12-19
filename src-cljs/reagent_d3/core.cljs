(ns reagent-d3.core
  (:require [reagent-d3.bar-chart :as bar-chart]
            [reagent-d3.scatter-plot :as scatter-plot]
            [reagent-d3.circular-bar-chart :as circular-bar-chart]
            [reagent.core :as reagent]))

(defn home []
  [:div.wrapper
   [:h1 "Data viz with Reagent and D3"]
   [bar-chart/view]
   [scatter-plot/view]
   [circular-bar-chart/view]])

(defn mount []
  (reagent/render [home]
                  (.getElementById js/document "app")))

(mount)
