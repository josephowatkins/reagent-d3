(ns reagent-d3.circular-bar-chart
  (:require [d3 :as d3]
            [reagent.core :as reagent]))

(def height 600)
(def width 600)

(defn generate-data [n min max]
  (let [mid (int (/ (+ min max) 2))]
    (take n (map vector
                 (repeatedly #(+ min (rand-int (- mid min))))
                 (repeatedly #(+ mid (rand-int (- (inc max) mid))))))))

(def chart-state
  (reagent/atom (generate-data 150 50 300)))

(def bar-width 10)

(defn draw [state]
  (let [svg (d3/select ".circular-bar-chart__chart")
        data (clj->js state)
        length-scale (-> (d3/scaleLinear)
                         (.domain #js [0 (d3/max data (fn [[_ max]] max))])
                         (.range #js [0 (/ height 2)]))
        degree-scale (-> (d3/scaleLinear)
                         (.domain #js [0 (count data)])
                         (.range #js [0 360]))]
    ;; draw the rect
    (-> svg
        (.selectAll "rect")
        (.data data)
        (.enter)
        (.append "rect")
        (.attr "x" (- (/ width 2) (/ bar-width 2)))
        (.attr "y" (fn [[min max]]
                     (- (/ height 2) (length-scale max))))
        (.attr "width" bar-width)
        (.attr "height" (fn [[min max]] (length-scale (- max min))))
        (.attr "transform" (fn [d i]
                             (str "rotate(" (degree-scale i) "," (/ width 2) "," (/ height 2) ")")))
        (.attr "fill" (fn [[min max]] (str "rgb(" (- max min) ",0,0)"))))))

(defn re-draw [state]
  (let [svg (d3/select ".circular-bar-chart__chart")
        data (clj->js state)
        length-scale (-> (d3/scaleLinear)
                         (.domain #js [0 (d3/max data (fn [[_ max]] max))])
                         (.range #js [0 (/ height 2)]))
        degree-scale (-> (d3/scaleLinear)
                         (.domain #js [0 (count data)])
                         (.range #js [0 360]))]
    ;; draw the rect
    (-> svg
        (.selectAll "rect")
        (.data data)
        (.transition)
        (.delay (fn [d i]
                  (* (/ i (count data)) 200)))
        (.duration 500)
        (.attr "x" (- (/ width 2) (/ bar-width 2)))
        (.attr "y" (fn [[min max]]
                     (- (/ height 2) (length-scale max))))
        (.attr "width" bar-width)
        (.attr "height" (fn [[min max]] (length-scale (- max min))))
        (.attr "transform" (fn [d i]
                             (str "rotate(" (degree-scale i) "," (/ width 2) "," (/ height 2) ")")))
        (.attr "fill" (fn [[min max]] (str "rgb(" (- max min) ",0,0)"))))))

(defn circular-bar-chart [state]
  (reagent/create-class {:display-name "weird pie"
                         :component-did-mount (fn [this]
                                                (draw state))
                         :component-did-update (fn [this]
                                                 (let [[_ new-state] (reagent/argv this)]
                                                   (re-draw new-state)))
                         :reagent-render (fn []
                                           [:svg.circular-bar-chart__chart
                                            {:height height
                                             :width width}])}))

(defn randomize! [ratom]
  (reset! ratom (generate-data 150 50 300)))

(defn button [ratom]
  [:button.bar-chart__button
   {:on-click #(randomize! ratom)}
   "Randomize!"])

(defn view []
  [:div.circular-bar-chart
   [:div.circular-bar-char__title
    [:h2 "Circular bar char"]]
   [button chart-state]
   [circular-bar-chart @chart-state]])
