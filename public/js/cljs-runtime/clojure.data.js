goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__30601){
var vec__30602 = p__30601;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30602,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30602,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__30605 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30605,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__30611 = arguments.length;
switch (G__30611) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__30637_30770 = clojure.data.equality_partition;
var G__30638_30771 = "null";
var G__30639_30772 = ((function (G__30637_30770,G__30638_30771){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30637_30770,G__30638_30771))
;
goog.object.set(G__30637_30770,G__30638_30771,G__30639_30772);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__30642_30776 = clojure.data.equality_partition;
var G__30643_30777 = "string";
var G__30644_30778 = ((function (G__30642_30776,G__30643_30777){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30642_30776,G__30643_30777))
;
goog.object.set(G__30642_30776,G__30643_30777,G__30644_30778);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__30646_30781 = clojure.data.equality_partition;
var G__30647_30782 = "number";
var G__30648_30783 = ((function (G__30646_30781,G__30647_30782){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30646_30781,G__30647_30782))
;
goog.object.set(G__30646_30781,G__30647_30782,G__30648_30783);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__30649_30786 = clojure.data.equality_partition;
var G__30650_30787 = "array";
var G__30651_30788 = ((function (G__30649_30786,G__30650_30787){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__30649_30786,G__30650_30787))
;
goog.object.set(G__30649_30786,G__30650_30787,G__30651_30788);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__30658_30794 = clojure.data.equality_partition;
var G__30659_30795 = "function";
var G__30660_30796 = ((function (G__30658_30794,G__30659_30795){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30658_30794,G__30659_30795))
;
goog.object.set(G__30658_30794,G__30659_30795,G__30660_30796);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__30662_30797 = clojure.data.equality_partition;
var G__30663_30798 = "boolean";
var G__30664_30799 = ((function (G__30662_30797,G__30663_30798){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30662_30797,G__30663_30798))
;
goog.object.set(G__30662_30797,G__30663_30798,G__30664_30799);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__30667_30800 = clojure.data.equality_partition;
var G__30668_30801 = "_";
var G__30669_30802 = ((function (G__30667_30800,G__30668_30801){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__30667_30800,G__30668_30801))
;
goog.object.set(G__30667_30800,G__30668_30801,G__30669_30802);
goog.object.set(clojure.data.Diff,"null",true);

var G__30694_30805 = clojure.data.diff_similar;
var G__30695_30806 = "null";
var G__30696_30807 = ((function (G__30694_30805,G__30695_30806){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30694_30805,G__30695_30806))
;
goog.object.set(G__30694_30805,G__30695_30806,G__30696_30807);

goog.object.set(clojure.data.Diff,"string",true);

var G__30700_30808 = clojure.data.diff_similar;
var G__30701_30809 = "string";
var G__30702_30810 = ((function (G__30700_30808,G__30701_30809){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30700_30808,G__30701_30809))
;
goog.object.set(G__30700_30808,G__30701_30809,G__30702_30810);

goog.object.set(clojure.data.Diff,"number",true);

var G__30704_30815 = clojure.data.diff_similar;
var G__30705_30816 = "number";
var G__30706_30817 = ((function (G__30704_30815,G__30705_30816){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30704_30815,G__30705_30816))
;
goog.object.set(G__30704_30815,G__30705_30816,G__30706_30817);

goog.object.set(clojure.data.Diff,"array",true);

var G__30710_30818 = clojure.data.diff_similar;
var G__30711_30819 = "array";
var G__30712_30820 = ((function (G__30710_30818,G__30711_30819){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__30710_30818,G__30711_30819))
;
goog.object.set(G__30710_30818,G__30711_30819,G__30712_30820);

goog.object.set(clojure.data.Diff,"function",true);

var G__30713_30822 = clojure.data.diff_similar;
var G__30714_30823 = "function";
var G__30715_30824 = ((function (G__30713_30822,G__30714_30823){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30713_30822,G__30714_30823))
;
goog.object.set(G__30713_30822,G__30714_30823,G__30715_30824);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__30719_30826 = clojure.data.diff_similar;
var G__30720_30827 = "boolean";
var G__30721_30828 = ((function (G__30719_30826,G__30720_30827){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30719_30826,G__30720_30827))
;
goog.object.set(G__30719_30826,G__30720_30827,G__30721_30828);

goog.object.set(clojure.data.Diff,"_",true);

var G__30722_30829 = clojure.data.diff_similar;
var G__30723_30830 = "_";
var G__30724_30831 = ((function (G__30722_30829,G__30723_30830){
return (function (a,b){
var fexpr__30726 = (function (){var G__30727 = clojure.data.equality_partition(a);
var G__30727__$1 = (((G__30727 instanceof cljs.core.Keyword))?G__30727.fqn:null);
switch (G__30727__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30727__$1)].join('')));

}
})();
return (fexpr__30726.cljs$core$IFn$_invoke$arity$2 ? fexpr__30726.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__30726.call(null,a,b));
});})(G__30722_30829,G__30723_30830))
;
goog.object.set(G__30722_30829,G__30723_30830,G__30724_30831);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
