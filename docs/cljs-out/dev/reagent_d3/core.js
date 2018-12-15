// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent_d3.core');
goog.require('cljs.core');
goog.require('reagent_d3.bar_chart');
goog.require('reagent.core');
reagent_d3.core.home = (function reagent_d3$core$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper","div.wrapper",-1768248555),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Data viz with Reagent and D3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_d3.bar_chart.view], null)], null);
});
reagent_d3.core.mount = (function reagent_d3$core$mount(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_d3.core.home], null),document.getElementById("app"));
});
reagent_d3.core.mount.call(null);

//# sourceMappingURL=core.js.map
