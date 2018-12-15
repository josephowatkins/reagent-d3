// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18127){
var map__18128 = p__18127;
var map__18128__$1 = ((((!((map__18128 == null)))?(((((map__18128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18128):map__18128);
var m = map__18128__$1;
var n = cljs.core.get.call(null,map__18128__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18128__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18130_18152 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18131_18153 = null;
var count__18132_18154 = (0);
var i__18133_18155 = (0);
while(true){
if((i__18133_18155 < count__18132_18154)){
var f_18156 = cljs.core._nth.call(null,chunk__18131_18153,i__18133_18155);
cljs.core.println.call(null,"  ",f_18156);


var G__18157 = seq__18130_18152;
var G__18158 = chunk__18131_18153;
var G__18159 = count__18132_18154;
var G__18160 = (i__18133_18155 + (1));
seq__18130_18152 = G__18157;
chunk__18131_18153 = G__18158;
count__18132_18154 = G__18159;
i__18133_18155 = G__18160;
continue;
} else {
var temp__5457__auto___18161 = cljs.core.seq.call(null,seq__18130_18152);
if(temp__5457__auto___18161){
var seq__18130_18162__$1 = temp__5457__auto___18161;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18130_18162__$1)){
var c__4351__auto___18163 = cljs.core.chunk_first.call(null,seq__18130_18162__$1);
var G__18164 = cljs.core.chunk_rest.call(null,seq__18130_18162__$1);
var G__18165 = c__4351__auto___18163;
var G__18166 = cljs.core.count.call(null,c__4351__auto___18163);
var G__18167 = (0);
seq__18130_18152 = G__18164;
chunk__18131_18153 = G__18165;
count__18132_18154 = G__18166;
i__18133_18155 = G__18167;
continue;
} else {
var f_18168 = cljs.core.first.call(null,seq__18130_18162__$1);
cljs.core.println.call(null,"  ",f_18168);


var G__18169 = cljs.core.next.call(null,seq__18130_18162__$1);
var G__18170 = null;
var G__18171 = (0);
var G__18172 = (0);
seq__18130_18152 = G__18169;
chunk__18131_18153 = G__18170;
count__18132_18154 = G__18171;
i__18133_18155 = G__18172;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18173 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18173);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18173)))?cljs.core.second.call(null,arglists_18173):arglists_18173));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18134_18174 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18135_18175 = null;
var count__18136_18176 = (0);
var i__18137_18177 = (0);
while(true){
if((i__18137_18177 < count__18136_18176)){
var vec__18138_18178 = cljs.core._nth.call(null,chunk__18135_18175,i__18137_18177);
var name_18179 = cljs.core.nth.call(null,vec__18138_18178,(0),null);
var map__18141_18180 = cljs.core.nth.call(null,vec__18138_18178,(1),null);
var map__18141_18181__$1 = ((((!((map__18141_18180 == null)))?(((((map__18141_18180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18141_18180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18141_18180):map__18141_18180);
var doc_18182 = cljs.core.get.call(null,map__18141_18181__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18183 = cljs.core.get.call(null,map__18141_18181__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18179);

cljs.core.println.call(null," ",arglists_18183);

if(cljs.core.truth_(doc_18182)){
cljs.core.println.call(null," ",doc_18182);
} else {
}


var G__18184 = seq__18134_18174;
var G__18185 = chunk__18135_18175;
var G__18186 = count__18136_18176;
var G__18187 = (i__18137_18177 + (1));
seq__18134_18174 = G__18184;
chunk__18135_18175 = G__18185;
count__18136_18176 = G__18186;
i__18137_18177 = G__18187;
continue;
} else {
var temp__5457__auto___18188 = cljs.core.seq.call(null,seq__18134_18174);
if(temp__5457__auto___18188){
var seq__18134_18189__$1 = temp__5457__auto___18188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18134_18189__$1)){
var c__4351__auto___18190 = cljs.core.chunk_first.call(null,seq__18134_18189__$1);
var G__18191 = cljs.core.chunk_rest.call(null,seq__18134_18189__$1);
var G__18192 = c__4351__auto___18190;
var G__18193 = cljs.core.count.call(null,c__4351__auto___18190);
var G__18194 = (0);
seq__18134_18174 = G__18191;
chunk__18135_18175 = G__18192;
count__18136_18176 = G__18193;
i__18137_18177 = G__18194;
continue;
} else {
var vec__18143_18195 = cljs.core.first.call(null,seq__18134_18189__$1);
var name_18196 = cljs.core.nth.call(null,vec__18143_18195,(0),null);
var map__18146_18197 = cljs.core.nth.call(null,vec__18143_18195,(1),null);
var map__18146_18198__$1 = ((((!((map__18146_18197 == null)))?(((((map__18146_18197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18146_18197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18146_18197):map__18146_18197);
var doc_18199 = cljs.core.get.call(null,map__18146_18198__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18200 = cljs.core.get.call(null,map__18146_18198__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18196);

cljs.core.println.call(null," ",arglists_18200);

if(cljs.core.truth_(doc_18199)){
cljs.core.println.call(null," ",doc_18199);
} else {
}


var G__18201 = cljs.core.next.call(null,seq__18134_18189__$1);
var G__18202 = null;
var G__18203 = (0);
var G__18204 = (0);
seq__18134_18174 = G__18201;
chunk__18135_18175 = G__18202;
count__18136_18176 = G__18203;
i__18137_18177 = G__18204;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__18148 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18149 = null;
var count__18150 = (0);
var i__18151 = (0);
while(true){
if((i__18151 < count__18150)){
var role = cljs.core._nth.call(null,chunk__18149,i__18151);
var temp__5457__auto___18205__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18205__$1)){
var spec_18206 = temp__5457__auto___18205__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18206));
} else {
}


var G__18207 = seq__18148;
var G__18208 = chunk__18149;
var G__18209 = count__18150;
var G__18210 = (i__18151 + (1));
seq__18148 = G__18207;
chunk__18149 = G__18208;
count__18150 = G__18209;
i__18151 = G__18210;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18148);
if(temp__5457__auto____$1){
var seq__18148__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18148__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18148__$1);
var G__18211 = cljs.core.chunk_rest.call(null,seq__18148__$1);
var G__18212 = c__4351__auto__;
var G__18213 = cljs.core.count.call(null,c__4351__auto__);
var G__18214 = (0);
seq__18148 = G__18211;
chunk__18149 = G__18212;
count__18150 = G__18213;
i__18151 = G__18214;
continue;
} else {
var role = cljs.core.first.call(null,seq__18148__$1);
var temp__5457__auto___18215__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18215__$2)){
var spec_18216 = temp__5457__auto___18215__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18216));
} else {
}


var G__18217 = cljs.core.next.call(null,seq__18148__$1);
var G__18218 = null;
var G__18219 = (0);
var G__18220 = (0);
seq__18148 = G__18217;
chunk__18149 = G__18218;
count__18150 = G__18219;
i__18151 = G__18220;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
