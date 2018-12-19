(ns reagent-d3.circular-bar-chart
  (:require [d3 :as d3]
            [reagent.core :as reagent]))

(def height 600)
(def width 600)

;; todo
;; make min and max configurable
;; properly scale the values
;; fix the ugly colours

(defn generate-data [n]
  (take n (map vector
                 (repeatedly #(+ 50 (rand-int 100)))
                 (repeatedly #(+ 150 (rand-int 150))))))

(def chart-state
  (reagent/atom (generate-data 360)))

(def bar-width 7)

(defn draw [state]
  (let [svg (d3/select ".circular-bar-chart__chart")
        data (clj->js state)]
    ;; draw the rect
    (-> svg
        (.selectAll "rect")
        (.data data)
        (.enter)
        (.append "rect")
        (.attr "x" (- (/ width 2) (/ bar-width 2)))
        (.attr "y" (fn [[min max]]
                     (- (/ height 2) max)))
        (.attr "width" bar-width)
        (.attr "height" (fn [[min max]] (- max min)))
        (.attr "transform" (fn [d i]
                             (str "rotate(" i "," (/ width 2) "," (/ height 2) ")")))
        (.attr "fill" (fn [[min max]] (str "rgb(" (- max min) ",0,0)"))))))

(defn re-draw [state]
  (let [svg (d3/select ".circular-bar-chart__chart")
        data (clj->js state)]
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
                     (- (/ height 2) max)))
        (.attr "width" bar-width)
        (.attr "height" (fn [[min max]] (- max min)))
        (.attr "transform" (fn [d i]
                             (str "rotate(" i "," (/ width 2) "," (/ height 2) ")")))
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
  (reset! ratom (generate-data 360)))

(defn button [ratom]
  [:button.bar-chart__button
   {:on-click #(randomize! ratom)}
   "Randomize!"])

(defn view []
  [:div.circular-bar-chart
   [:div.circular-bar-char__title
    [:h2 "Weird pie"]]
   [button chart-state]
   [circular-bar-chart @chart-state]])
