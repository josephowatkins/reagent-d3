(defproject reagent-d3 "0.1.0"
  :dependencies [[org.clojure/clojure "1.9.0"]]

  :main reagent-d3.main

  :source-paths ["src" "src-cljs"]

  :profiles {:dev {:dependencies [[org.clojure/clojurescript "1.10.339"]
                                  [reagent "0.8.1"]
                                  [cljsjs/d3 "5.7.0-0"]
                                  [com.bhauman/figwheel-main "0.1.9"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]
                   :resource-paths ["target"]
                   :clean-targets ^{:protect false} ["target"]}}

  :aliases {"fig" ["trampoline" "run" "-m" "figwheel.main"]})
