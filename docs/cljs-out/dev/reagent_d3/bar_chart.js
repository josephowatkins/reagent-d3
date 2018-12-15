// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent_d3.bar_chart');
goog.require('cljs.core');
goog.require('d3');
goog.require('reagent.core');
reagent_d3.bar_chart.global$module$d3 = goog.global["d3"];
if((typeof reagent_d3 !== 'undefined') && (typeof reagent_d3.bar_chart !== 'undefined') && (typeof reagent_d3.bar_chart.chart_state !== 'undefined')){
} else {
reagent_d3.bar_chart.chart_state = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(10),(13),(19),(21),(25),(22),(18),(15),(13),(11),(12),(15),(20),(18),(17),(16),(18),(23),(25)], null));
}
reagent_d3.bar_chart.width = (600);
reagent_d3.bar_chart.height = (250);
reagent_d3.bar_chart.bar_padding = (1);
reagent_d3.bar_chart.draw = (function reagent_d3$bar_chart$draw(state){
var svg = reagent_d3.bar_chart.global$module$d3.select.call(null,".bar-chart__chart");
var data = cljs.core.clj__GT_js.call(null,state);
var x_scale = reagent_d3.bar_chart.global$module$d3.scaleBand.call(null).domain(reagent_d3.bar_chart.global$module$d3.range.call(null,cljs.core.count.call(null,data))).rangeRound([(0),reagent_d3.bar_chart.width]).paddingInner(0.05);
var y_scale = reagent_d3.bar_chart.global$module$d3.scaleLinear.call(null).domain([(0),reagent_d3.bar_chart.global$module$d3.max.call(null,data)]).range([(0),reagent_d3.bar_chart.height]);
svg.selectAll("rect").data(data).enter().append("rect").attr("x",((function (svg,data,x_scale,y_scale){
return (function (d,i){
return x_scale.call(null,i);
});})(svg,data,x_scale,y_scale))
).attr("y",((function (svg,data,x_scale,y_scale){
return (function (d){
return (reagent_d3.bar_chart.height - y_scale.call(null,d));
});})(svg,data,x_scale,y_scale))
).attr("width",x_scale.bandwidth()).attr("height",((function (svg,data,x_scale,y_scale){
return (function (d){
return y_scale.call(null,d);
});})(svg,data,x_scale,y_scale))
).attr("fill",((function (svg,data,x_scale,y_scale){
return (function (d){
return ["rgb(0,0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((d * (10))),")"].join('');
});})(svg,data,x_scale,y_scale))
);

return svg.selectAll("text").data(data).enter().append("text").text(((function (svg,data,x_scale,y_scale){
return (function (d){
return d;
});})(svg,data,x_scale,y_scale))
).attr("text-anchor","middle").attr("x",((function (svg,data,x_scale,y_scale){
return (function (d,i){
return (x_scale.call(null,i) + (x_scale.bandwidth() / (2)));
});})(svg,data,x_scale,y_scale))
).attr("y",((function (svg,data,x_scale,y_scale){
return (function (d){
var bar_height = y_scale.call(null,d);
if((bar_height > (20))){
return ((reagent_d3.bar_chart.height - bar_height) + (14));
} else {
return ((reagent_d3.bar_chart.height - bar_height) - (7));
}
});})(svg,data,x_scale,y_scale))
).attr("font-size","11px").attr("fill",((function (svg,data,x_scale,y_scale){
return (function (d){
if((y_scale.call(null,d) > (20))){
return "white";
} else {
return "black";
}
});})(svg,data,x_scale,y_scale))
);
});
reagent_d3.bar_chart.re_draw = (function reagent_d3$bar_chart$re_draw(state){
var svg = reagent_d3.bar_chart.global$module$d3.select.call(null,".bar-chart__chart");
var data = cljs.core.clj__GT_js.call(null,state);
var x_scale = reagent_d3.bar_chart.global$module$d3.scaleBand.call(null).domain(reagent_d3.bar_chart.global$module$d3.range.call(null,cljs.core.count.call(null,data))).rangeRound([(0),reagent_d3.bar_chart.width]).paddingInner(0.05);
var y_scale = reagent_d3.bar_chart.global$module$d3.scaleLinear.call(null).domain([(0),reagent_d3.bar_chart.global$module$d3.max.call(null,data)]).range([(0),reagent_d3.bar_chart.height]);
svg.selectAll("rect").data(data).transition().duration((1000)).attr("y",((function (svg,data,x_scale,y_scale){
return (function (d){
return (reagent_d3.bar_chart.height - y_scale.call(null,d));
});})(svg,data,x_scale,y_scale))
).attr("height",((function (svg,data,x_scale,y_scale){
return (function (d){
return y_scale.call(null,d);
});})(svg,data,x_scale,y_scale))
).attr("fill",((function (svg,data,x_scale,y_scale){
return (function (d){
return ["rgb(0,0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((d * (10))),")"].join('');
});})(svg,data,x_scale,y_scale))
);

return svg.selectAll("text").data(data).transition().duration((1000)).attr("text-anchor","middle").text(((function (svg,data,x_scale,y_scale){
return (function (d){
return d;
});})(svg,data,x_scale,y_scale))
).attr("x",((function (svg,data,x_scale,y_scale){
return (function (d,i){
return (x_scale.call(null,i) + (x_scale.bandwidth() / (2)));
});})(svg,data,x_scale,y_scale))
).attr("y",((function (svg,data,x_scale,y_scale){
return (function (d){
var bar_height = y_scale.call(null,d);
if((bar_height > (20))){
return ((reagent_d3.bar_chart.height - bar_height) + (14));
} else {
return ((reagent_d3.bar_chart.height - bar_height) - (7));
}
});})(svg,data,x_scale,y_scale))
).attr("fill",((function (svg,data,x_scale,y_scale){
return (function (d){
if((y_scale.call(null,d) > (20))){
return "white";
} else {
return "black";
}
});})(svg,data,x_scale,y_scale))
);
});
reagent_d3.bar_chart.bar_chart = (function reagent_d3$bar_chart$bar_chart(state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"bar chart",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return reagent_d3.bar_chart.draw.call(null,state);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var vec__13917 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__13917,(0),null);
var new_state = cljs.core.nth.call(null,vec__13917,(1),null);
return reagent_d3.bar_chart.re_draw.call(null,new_state);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.bar-chart__chart","svg.bar-chart__chart",-560292511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),reagent_d3.bar_chart.height,new cljs.core.Keyword(null,"width","width",-384071477),reagent_d3.bar_chart.width], null)], null);
})], null));
});
reagent_d3.bar_chart.randomize_BANG_ = (function reagent_d3$bar_chart$randomize_BANG_(ratom){
var new_data = cljs.core.take.call(null,(20),cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_int.call(null,(25));
})));
return cljs.core.reset_BANG_.call(null,ratom,new_data);
});
reagent_d3.bar_chart.button = (function reagent_d3$bar_chart$button(ratom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bar-chart__button","button.bar-chart__button",679108139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent_d3.bar_chart.randomize_BANG_.call(null,ratom);
})], null),"Randomize!"], null);
});
reagent_d3.bar_chart.view = (function reagent_d3$bar_chart$view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar-chart","div.bar-chart",55017938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bar-chart__title","div.bar-chart__title",831750162),"Bar chart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_d3.bar_chart.button,reagent_d3.bar_chart.chart_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_d3.bar_chart.bar_chart,cljs.core.deref.call(null,reagent_d3.bar_chart.chart_state)], null)], null);
});

//# sourceMappingURL=bar_chart.js.map
