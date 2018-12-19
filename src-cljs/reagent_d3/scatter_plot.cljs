(ns reagent-d3.scatter-plot
  (:require [d3 :as d3]
            [reagent.core :as reagent]))

(def height 300)
(def width 600)
(def padding 30)

(def chart-state (reagent/atom [[5 20] [480 90] [250 50] [100 33] [330 95]
                                [410 12] [475 44] [25 67] [85 21] [220 88]
                                [600 150]]))

(defn draw [state]
  (let [svg (d3/select ".scatter-plot__chart")
        data (clj->js state)
        x-scale (-> (d3/scaleLinear)
                    (.domain #js [0 (d3/max data (fn [[x _]] x))])
                    (.range #js [padding (- width (* padding 2))]))
        y-scale (-> (d3/scaleLinear)
                    (.domain #js [0 (d3/max data (fn [[_ y]] y))])
                    (.range #js [(- height padding) padding]))
        a-scale (-> (d3/scaleSqrt)
                    (.domain #js [0 (d3/max data (fn [[_ y]] y))])
                    (.range #js [0 10]))
        x-axis (-> (d3/axisBottom)
                   (.scale x-scale)
                   (.ticks 5))
        y-axis (-> (d3/axisLeft)
                   (.scale y-scale)
                   (.ticks 5))]
    ;; draw the circles
    (-> svg
        (.selectAll "circle")
        (.data data)
        (.enter)
        (.append "circle")
        (.attr "cx" (fn [[x _]] (x-scale x)))
        (.attr "cy" (fn [[_ y]] (y-scale y)))
        (.attr "r"  (fn [[_ y]] (a-scale y))))
    ;; draw the text
    (-> svg
        (.selectAll "text")
        (.data data)
        (.enter)
        (.append "text")
        (.text (fn [[x y]] (str x "," y)))
        (.attr "x" (fn [[x _]] (x-scale x)))
        (.attr "y" (fn [[_ y]] (y-scale y)))
        (.attr "font-family" "sans-serif")
        (.attr "font-size" "11px")
        (.attr "fill" "red"))
    (-> svg
        (.append "g")
        (.attr "class" "axis")
        (.attr "transform" (str "translate(0," (- height padding) ")"))
        (.call x-axis))
    (-> svg
        (.append "g")
        (.attr "class" "axis")
        (.attr "transform" (str "translate(" padding ",0)"))
        (.call y-axis))))

(defn re-draw [state]
  (let [svg (d3/select ".scatter-plot__chart")
        data (clj->js state)
        x-scale (-> (d3/scaleLinear)
                    (.domain #js [0 (d3/max data (fn [[x _]] x))])
                    (.range #js [padding (- width (* padding 2))]))
        y-scale (-> (d3/scaleLinear)
                    (.domain #js [0 (d3/max data (fn [[_ y]] y))])
                    (.range #js [(- height padding) padding]))
        a-scale (-> (d3/scaleSqrt)
                    (.domain #js [0 (d3/max data (fn [[_ y]] y))])
                    (.range #js [0 10]))]
    ;; draw the circles
    (-> svg
        (.selectAll "circle")
        (.data data)
        (.transition)
        (.attr "cx" (fn [[x _]] (x-scale x)))
        (.attr "cy" (fn [[_ y]] (y-scale y)))
        (.attr "r"  (fn [[_ y]] (a-scale y))))
    ;; draw the text
    (-> svg
        (.selectAll "text")
        (.data data)
        (.transition)
        (.text (fn [[x y]] (str x "," y)))
        (.attr "x" (fn [[x _]] (x-scale x)))
        (.attr "y" (fn [[_ y]] (y-scale y)))
        (.attr "font-family" "sans-serif")
        (.attr "font-size" "11px")
        (.attr "fill" "red"))))

(defn scatter-plot [state]
  (reagent/create-class {:display-name "scatter plot"
                         :component-did-mount (fn [this]
                                                (draw state))
                         :component-did-update (fn [this]
                                                 (let [[_ new-state] (reagent/argv this)]
                                                   (re-draw new-state)))
                         :reagent-render (fn []
                                           [:svg.scatter-plot__chart
                                            {:height height
                                             :width width}])}))

(defn randomize! [ratom]
  (let [domain-max (max 50 (rand-int 1000))
        new-data (take 11 (map vector
                               (repeatedly #(rand-int domain-max))
                               (repeatedly #(rand-int domain-max))))]
    (reset! ratom new-data)))

(defn button [ratom]
  [:button.scatter-plot__button
   {:on-click #(randomize! ratom)}
   "Randomize!"])

(defn view []
  [:div.scatter-plot
   [:div.scatter-plot__title
    [:h2 "Scatter plot"]]
   [button chart-state]
   [scatter-plot @chart-state]])
