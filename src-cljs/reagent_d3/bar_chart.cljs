(ns reagent-d3.bar-chart
  (:require [d3 :as d3]
            [reagent.core :as reagent]))

(defonce chart-state
  (reagent/atom [2 10 13 19 21 25 22 18 15 13 11 12 15 20 18 17 16 18 23 25]))

(def width 600)
(def height 250)
(def bar-padding 1)

(defn draw [state]
  (let [svg (d3/select ".bar-chart__chart")
        data (clj->js state)
        x-scale (-> (d3/scaleBand)
                    (.domain (d3/range (count data)))
                    (.rangeRound #js [0 width])
                    (.paddingInner 0.05))
        y-scale (-> (d3/scaleLinear)
                    (.domain #js [0 (d3/max data)])
                    (.range #js [0 height]))]
    ;; create bars
    (-> svg
        (.selectAll "rect")
        (.data data)
        (.enter)
        (.append "rect")
        (.attr "x" (fn [d i] (x-scale i)))
        (.attr "y" (fn [d] (- height (y-scale d))))
        (.attr "width" (.bandwidth x-scale))
        (.attr "height" (fn [d] (y-scale d)))
        (.attr "fill" (fn [d] (str "rgb(0,0," (* d 10) ")"))))
    ;; create labels
    (-> svg
        (.selectAll "text")
        (.data data)
        (.enter)
        (.append "text")
        (.text (fn [d] d))
        (.attr "text-anchor" "middle")
        (.attr "x" (fn [d i] (+ (x-scale i) (/ (.bandwidth x-scale) 2))))
        (.attr "y" (fn [d]
                     (let [bar-height (y-scale d)]
                       (if (> bar-height 20)
                         (-> height (- bar-height) (+ 14))
                         (-> height (- bar-height) (- 7))))))
        (.attr "font-size" "11px")
        (.attr "fill" (fn [d] (if (> (y-scale d) 20) "white" "black"))))))

(defn re-draw [state]
  (let [svg (d3/select ".bar-chart__chart")
        data (clj->js state)
        x-scale (-> (d3/scaleBand)
                    (.domain (d3/range (count data)))
                    (.rangeRound #js [0 width])
                    (.paddingInner 0.05))
        y-scale (-> (d3/scaleLinear)
                    (.domain #js [0 (d3/max data)])
                    (.range #js [0 height]))]
    ;; re-draw bars
    (-> svg
        (.selectAll "rect")
        (.data data)
        (.transition)
        (.duration 1000)
        (.attr "y" (fn [d] (- height (y-scale d))))
        (.attr "height" (fn [d] (y-scale d)))
        (.attr "fill" (fn [d] (str "rgb(0,0," (* d 10) ")"))))
    ;; create labels
    (-> svg
        (.selectAll "text")
        (.data data)
        (.transition)
        (.duration 1000)
        (.attr "text-anchor" "middle")
        (.text (fn [d] d))
        (.attr "x" (fn [d i] (+ (x-scale i) (/ (.bandwidth x-scale) 2))))
        (.attr "y" (fn [d]
                     (let [bar-height (y-scale d)]
                       (if (> bar-height 20)
                         (-> height (- bar-height) (+ 14))
                         (-> height (- bar-height) (- 7))))))
        (.attr "fill" (fn [d] (if (> (y-scale d) 20) "white" "black"))))))



(defn bar-chart [state]
  (reagent/create-class {:display-name "bar chart"
                         :component-did-mount (fn [this]
                                                (draw state))
                         :component-did-update (fn [this]
                                                 (let [[_ new-state] (reagent/argv this)]
                                                   (re-draw new-state)))
                         :reagent-render (fn []
                                           [:svg.bar-chart__chart
                                            {:height height
                                             :width width}])}))

(defn randomize! [ratom]
  (let [new-data (take 20 (repeatedly #(rand-int 25)))]
    (reset! ratom new-data)))

(defn button [ratom]
  [:button.bar-chart__button
   {:on-click #(randomize! ratom)}
   "Randomize!"])

(defn view []
  [:div.bar-chart
   [:div.bar-chart__title
    [:h2 "Bar chart"]]
   [button chart-state]
   [bar-chart @chart-state]])
