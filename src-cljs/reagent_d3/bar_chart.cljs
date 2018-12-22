(ns reagent-d3.bar-chart
  (:require [d3 :as d3]
            [reagent.core :as reagent]))

(def initial-state [7 10 13 19 21 25 22 18 15 13 11 12 15 20 18 17 16 18 23 25])

(defonce chart-state
  (reagent/atom initial-state))

(def width 600)
(def height 250)
(def bar-padding 1)
(def duration 750)

(defn draw [state]
  (let [svg (d3/select ".bar-chart__chart")
        data (clj->js state)
        x-scale (-> (d3/scaleBand)
                    (.domain (d3/range (count data)))
                    (.rangeRound #js [0 width])
                    (.paddingInner 0.05))
        y-scale (-> (d3/scaleLinear)
                    (.domain #js [0 (d3/max data)])
                    (.range #js [0 height]))
        label-y (fn [d] (let [bar-height (y-scale d)]
                          (if (> bar-height 20)
                            (-> height (- bar-height) (+ 14))
                            (-> height (- bar-height) (- 7)))))]
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
        (.attr "x" (fn [d i] (+ (x-scale i) (/ (.bandwidth x-scale) 2))))
        (.attr "y" label-y )
        (.attr "text-anchor" "middle")
        (.attr "font-size" "11px")
        (.attr "fill" (fn [d] (if (> (y-scale d) 20) "white" "black"))))))

(defn re-draw [state]
  (let [svg (d3/select ".bar-chart__chart")
        data (clj->js state)
        x-scale (-> (d3/scaleBand)
                    (.domain (d3/range (count data)))
                    (.rangeRound #js [0 width])
                    (.paddingInner 0.05))
        x-scale-extended (fn [n]
                           (let [[q r] ((juxt quot rem) n (count data))]
                             (+ (* width q) (x-scale r))))
        y-scale (-> (d3/scaleLinear)
                    (.domain #js [0 (d3/max data)])
                    (.range #js [0 height]))
        label-y (fn [d]
                  (let [bar-height (y-scale d)]
                    (if (> bar-height 20)
                      (-> height (- bar-height) (+ 14))
                      (-> height (- bar-height) (- 7)))))
        bars (-> svg
                 (.selectAll "rect")
                 (.data data))
        labels (-> svg
                   (.selectAll "text")
                   (.data data))]
    ;; re-draw bars
    (-> bars
        (.enter)
        (.append "rect")
        (.attr "x" width)
        (.attr "y" (fn [d] (- height (y-scale d))))
        (.attr "width" (.bandwidth x-scale))
        (.attr "height" (fn [d] (y-scale d)))
        (.attr "fill" (fn [d] (str "rgb(0,0," (* d 10) ")")))
        (.merge bars)
        (.transition)
        (.duration duration)
        (.attr "x" (fn [d i] (x-scale i)))
        (.attr "y" (fn [d] (- height (y-scale d))))
        (.attr "width" (.bandwidth x-scale))
        (.attr "height" (fn [d] (y-scale d)))
        (.attr "fill" (fn [d] (str "rgb(0,0," (* d 10) ")"))))
    ;; remove exiting bars
    (-> bars
        (.exit)
        (.transition)
        (.duration duration)
        (.attr "x" (fn [d i] (x-scale-extended i)))
        (.attr "width" (.bandwidth x-scale))
        (.remove))
    ;; re-draw labels
    (-> labels
        (.enter)
        (.append "text")
        (.text (fn [d] d))
        (.attr "x" (+ width (/ (.bandwidth x-scale) 2)))
        (.attr "y" label-y)
        (.attr "text-anchor" "middle")
        (.attr "font-size" "11px")
        (.attr "fill" (fn [d] (if (> (y-scale d) 20) "white" "black")))
        (.merge labels)
        (.transition)
        (.duration duration)
        (.text (fn [d] d))
        (.attr "x" (fn [d i] (+ (x-scale i) (/ (.bandwidth x-scale) 2))))
        (.attr "y" label-y)
        (.attr "fill" (fn [d] (if (> (y-scale d) 20) "white" "black"))))
    ;; remove exiting labels
    (-> labels
        (.exit)
        (.transition)
        (.duration duration)
        (.attr "x" (fn [d i] (+ (x-scale-extended i) (/ (.bandwidth x-scale) 2))))
        (.remove))))

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
(defn add-bar [ratom]
  [:button.bar-chart__add-item
   {:on-click #(swap! ratom conj (rand-int 25))}
   "+ bar"])

(defn randomize! [ratom]
  (swap! ratom (fn [state]
                 (vec (take (count state) (repeatedly #(rand-int 25)))))))

(defn randomize [ratom]
  [:button.bar-chart__button
   {:on-click #(randomize! ratom)}
   "randomize!"])

(defn reset [ratom]
  [:button.bar-chart__button
   {:on-click #(reset! ratom initial-state)}
   "reset"])

(defn view []
  [:div.bar-chart
   [:div.bar-chart__title
    [:h2 "Bar chart"]]
   [reset chart-state]
   [randomize chart-state]
   [add-bar chart-state]
   [bar-chart @chart-state]])
