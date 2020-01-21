goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28035){
var map__28039 = p__28035;
var map__28039__$1 = (((((!((map__28039 == null))))?(((((map__28039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28039):map__28039);
var m = map__28039__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28039__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28039__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28042_28262 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28043_28263 = null;
var count__28044_28264 = (0);
var i__28045_28265 = (0);
while(true){
if((i__28045_28265 < count__28044_28264)){
var f_28266 = chunk__28043_28263.cljs$core$IIndexed$_nth$arity$2(null,i__28045_28265);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28266], 0));


var G__28267 = seq__28042_28262;
var G__28268 = chunk__28043_28263;
var G__28269 = count__28044_28264;
var G__28270 = (i__28045_28265 + (1));
seq__28042_28262 = G__28267;
chunk__28043_28263 = G__28268;
count__28044_28264 = G__28269;
i__28045_28265 = G__28270;
continue;
} else {
var temp__5720__auto___28271 = cljs.core.seq(seq__28042_28262);
if(temp__5720__auto___28271){
var seq__28042_28272__$1 = temp__5720__auto___28271;
if(cljs.core.chunked_seq_QMARK_(seq__28042_28272__$1)){
var c__4550__auto___28273 = cljs.core.chunk_first(seq__28042_28272__$1);
var G__28274 = cljs.core.chunk_rest(seq__28042_28272__$1);
var G__28275 = c__4550__auto___28273;
var G__28276 = cljs.core.count(c__4550__auto___28273);
var G__28277 = (0);
seq__28042_28262 = G__28274;
chunk__28043_28263 = G__28275;
count__28044_28264 = G__28276;
i__28045_28265 = G__28277;
continue;
} else {
var f_28278 = cljs.core.first(seq__28042_28272__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28278], 0));


var G__28279 = cljs.core.next(seq__28042_28272__$1);
var G__28280 = null;
var G__28281 = (0);
var G__28282 = (0);
seq__28042_28262 = G__28279;
chunk__28043_28263 = G__28280;
count__28044_28264 = G__28281;
i__28045_28265 = G__28282;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28283 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28283], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28283)))?cljs.core.second(arglists_28283):arglists_28283)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28049_28302 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28050_28303 = null;
var count__28051_28304 = (0);
var i__28052_28305 = (0);
while(true){
if((i__28052_28305 < count__28051_28304)){
var vec__28068_28307 = chunk__28050_28303.cljs$core$IIndexed$_nth$arity$2(null,i__28052_28305);
var name_28308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28307,(0),null);
var map__28071_28309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28307,(1),null);
var map__28071_28310__$1 = (((((!((map__28071_28309 == null))))?(((((map__28071_28309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28071_28309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28071_28309):map__28071_28309);
var doc_28311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071_28310__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071_28310__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28308], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28312], 0));

if(cljs.core.truth_(doc_28311)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28311], 0));
} else {
}


var G__28324 = seq__28049_28302;
var G__28325 = chunk__28050_28303;
var G__28326 = count__28051_28304;
var G__28327 = (i__28052_28305 + (1));
seq__28049_28302 = G__28324;
chunk__28050_28303 = G__28325;
count__28051_28304 = G__28326;
i__28052_28305 = G__28327;
continue;
} else {
var temp__5720__auto___28328 = cljs.core.seq(seq__28049_28302);
if(temp__5720__auto___28328){
var seq__28049_28331__$1 = temp__5720__auto___28328;
if(cljs.core.chunked_seq_QMARK_(seq__28049_28331__$1)){
var c__4550__auto___28332 = cljs.core.chunk_first(seq__28049_28331__$1);
var G__28333 = cljs.core.chunk_rest(seq__28049_28331__$1);
var G__28334 = c__4550__auto___28332;
var G__28335 = cljs.core.count(c__4550__auto___28332);
var G__28336 = (0);
seq__28049_28302 = G__28333;
chunk__28050_28303 = G__28334;
count__28051_28304 = G__28335;
i__28052_28305 = G__28336;
continue;
} else {
var vec__28075_28337 = cljs.core.first(seq__28049_28331__$1);
var name_28338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28075_28337,(0),null);
var map__28078_28339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28075_28337,(1),null);
var map__28078_28340__$1 = (((((!((map__28078_28339 == null))))?(((((map__28078_28339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28078_28339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28078_28339):map__28078_28339);
var doc_28341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28078_28340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28078_28340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28338], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28342], 0));

if(cljs.core.truth_(doc_28341)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28341], 0));
} else {
}


var G__28349 = cljs.core.next(seq__28049_28331__$1);
var G__28350 = null;
var G__28351 = (0);
var G__28352 = (0);
seq__28049_28302 = G__28349;
chunk__28050_28303 = G__28350;
count__28051_28304 = G__28351;
i__28052_28305 = G__28352;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__28090 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28091 = null;
var count__28092 = (0);
var i__28093 = (0);
while(true){
if((i__28093 < count__28092)){
var role = chunk__28091.cljs$core$IIndexed$_nth$arity$2(null,i__28093);
var temp__5720__auto___28364__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28364__$1)){
var spec_28365 = temp__5720__auto___28364__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28365)], 0));
} else {
}


var G__28366 = seq__28090;
var G__28367 = chunk__28091;
var G__28368 = count__28092;
var G__28369 = (i__28093 + (1));
seq__28090 = G__28366;
chunk__28091 = G__28367;
count__28092 = G__28368;
i__28093 = G__28369;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__28090);
if(temp__5720__auto____$1){
var seq__28090__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28090__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__28090__$1);
var G__28372 = cljs.core.chunk_rest(seq__28090__$1);
var G__28373 = c__4550__auto__;
var G__28374 = cljs.core.count(c__4550__auto__);
var G__28375 = (0);
seq__28090 = G__28372;
chunk__28091 = G__28373;
count__28092 = G__28374;
i__28093 = G__28375;
continue;
} else {
var role = cljs.core.first(seq__28090__$1);
var temp__5720__auto___28383__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28383__$2)){
var spec_28384 = temp__5720__auto___28383__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28384)], 0));
} else {
}


var G__28386 = cljs.core.next(seq__28090__$1);
var G__28387 = null;
var G__28388 = (0);
var G__28389 = (0);
seq__28090 = G__28386;
chunk__28091 = G__28387;
count__28092 = G__28388;
i__28093 = G__28389;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28408 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__28409 = cljs.core.ex_cause(t);
via = G__28408;
t = G__28409;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28129 = datafied_throwable;
var map__28129__$1 = (((((!((map__28129 == null))))?(((((map__28129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28129):map__28129);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28129__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28129__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28129__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28130 = cljs.core.last(via);
var map__28130__$1 = (((((!((map__28130 == null))))?(((((map__28130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28130):map__28130);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28130__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28130__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28130__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28131 = data;
var map__28131__$1 = (((((!((map__28131 == null))))?(((((map__28131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28131):map__28131);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28131__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28131__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28131__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28132 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__28132__$1 = (((((!((map__28132 == null))))?(((((map__28132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28132):map__28132);
var top_data = map__28132__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__28138 = phase;
var G__28138__$1 = (((G__28138 instanceof cljs.core.Keyword))?G__28138.fqn:null);
switch (G__28138__$1) {
case "read-source":
var map__28139 = data;
var map__28139__$1 = (((((!((map__28139 == null))))?(((((map__28139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28139):map__28139);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28139__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28139__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28143 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__28143__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28143,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28143);
var G__28143__$2 = (cljs.core.truth_((function (){var fexpr__28144 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28144.cljs$core$IFn$_invoke$arity$1 ? fexpr__28144.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28144.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28143__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28143__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28143__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28143__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28145 = top_data;
var G__28145__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28145,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28145);
var G__28145__$2 = (cljs.core.truth_((function (){var fexpr__28149 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28149.cljs$core$IFn$_invoke$arity$1 ? fexpr__28149.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28149.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28145__$1);
var G__28145__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28145__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28145__$2);
var G__28145__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28145__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28145__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28145__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28145__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28151 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28151,(3),null);
var G__28156 = top_data;
var G__28156__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28156,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28156);
var G__28156__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28156__$1);
var G__28156__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28156__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28156__$2);
var G__28156__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28156__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28156__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28156__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28156__$4;
}

break;
case "execution":
var vec__28162 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28162,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__28162,source__$1,method,file,line,G__28138,G__28138__$1,map__28129,map__28129__$1,via,trace,phase,map__28130,map__28130__$1,type,message,data,map__28131,map__28131__$1,problems,fn,caller,map__28132,map__28132__$1,top_data,source){
return (function (p1__28125_SHARP_){
var or__4131__auto__ = (p1__28125_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__28171 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28171.cljs$core$IFn$_invoke$arity$1 ? fexpr__28171.cljs$core$IFn$_invoke$arity$1(p1__28125_SHARP_) : fexpr__28171.call(null,p1__28125_SHARP_));
}
});})(vec__28162,source__$1,method,file,line,G__28138,G__28138__$1,map__28129,map__28129__$1,via,trace,phase,map__28130,map__28130__$1,type,message,data,map__28131,map__28131__$1,problems,fn,caller,map__28132,map__28132__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28175 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28175__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28175,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28175);
var G__28175__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28175__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28175__$1);
var G__28175__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28175__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28175__$2);
var G__28175__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28175__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28175__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28175__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28175__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28138__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28189){
var map__28190 = p__28189;
var map__28190__$1 = (((((!((map__28190 == null))))?(((((map__28190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28190):map__28190);
var triage_data = map__28190__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28190__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28201 = phase;
var G__28201__$1 = (((G__28201 instanceof cljs.core.Keyword))?G__28201.fqn:null);
switch (G__28201__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__28202 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__28203 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28204 = loc;
var G__28205 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28206_28584 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28207_28585 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28208_28586 = true;
var _STAR_print_fn_STAR__temp_val__28209_28587 = ((function (_STAR_print_newline_STAR__orig_val__28206_28584,_STAR_print_fn_STAR__orig_val__28207_28585,_STAR_print_newline_STAR__temp_val__28208_28586,sb__4661__auto__,G__28202,G__28203,G__28204,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28206_28584,_STAR_print_fn_STAR__orig_val__28207_28585,_STAR_print_newline_STAR__temp_val__28208_28586,sb__4661__auto__,G__28202,G__28203,G__28204,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28208_28586;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28209_28587;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28206_28584,_STAR_print_fn_STAR__orig_val__28207_28585,_STAR_print_newline_STAR__temp_val__28208_28586,_STAR_print_fn_STAR__temp_val__28209_28587,sb__4661__auto__,G__28202,G__28203,G__28204,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28206_28584,_STAR_print_fn_STAR__orig_val__28207_28585,_STAR_print_newline_STAR__temp_val__28208_28586,_STAR_print_fn_STAR__temp_val__28209_28587,sb__4661__auto__,G__28202,G__28203,G__28204,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28187_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28187_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28206_28584,_STAR_print_fn_STAR__orig_val__28207_28585,_STAR_print_newline_STAR__temp_val__28208_28586,_STAR_print_fn_STAR__temp_val__28209_28587,sb__4661__auto__,G__28202,G__28203,G__28204,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28206_28584,_STAR_print_fn_STAR__orig_val__28207_28585,_STAR_print_newline_STAR__temp_val__28208_28586,_STAR_print_fn_STAR__temp_val__28209_28587,sb__4661__auto__,G__28202,G__28203,G__28204,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28207_28585;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28206_28584;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28202,G__28203,G__28204,G__28205) : format.call(null,G__28202,G__28203,G__28204,G__28205));

break;
case "macroexpansion":
var G__28215 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__28216 = cause_type;
var G__28217 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28218 = loc;
var G__28219 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28215,G__28216,G__28217,G__28218,G__28219) : format.call(null,G__28215,G__28216,G__28217,G__28218,G__28219));

break;
case "compile-syntax-check":
var G__28222 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__28223 = cause_type;
var G__28224 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28225 = loc;
var G__28226 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28222,G__28223,G__28224,G__28225,G__28226) : format.call(null,G__28222,G__28223,G__28224,G__28225,G__28226));

break;
case "compilation":
var G__28227 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__28228 = cause_type;
var G__28229 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28230 = loc;
var G__28231 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28227,G__28228,G__28229,G__28230,G__28231) : format.call(null,G__28227,G__28228,G__28229,G__28230,G__28231));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__28232 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__28233 = symbol;
var G__28234 = loc;
var G__28235 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28236_28653 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28237_28654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28238_28655 = true;
var _STAR_print_fn_STAR__temp_val__28239_28656 = ((function (_STAR_print_newline_STAR__orig_val__28236_28653,_STAR_print_fn_STAR__orig_val__28237_28654,_STAR_print_newline_STAR__temp_val__28238_28655,sb__4661__auto__,G__28232,G__28233,G__28234,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28236_28653,_STAR_print_fn_STAR__orig_val__28237_28654,_STAR_print_newline_STAR__temp_val__28238_28655,sb__4661__auto__,G__28232,G__28233,G__28234,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28238_28655;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28239_28656;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28236_28653,_STAR_print_fn_STAR__orig_val__28237_28654,_STAR_print_newline_STAR__temp_val__28238_28655,_STAR_print_fn_STAR__temp_val__28239_28656,sb__4661__auto__,G__28232,G__28233,G__28234,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28236_28653,_STAR_print_fn_STAR__orig_val__28237_28654,_STAR_print_newline_STAR__temp_val__28238_28655,_STAR_print_fn_STAR__temp_val__28239_28656,sb__4661__auto__,G__28232,G__28233,G__28234,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28188_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28188_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28236_28653,_STAR_print_fn_STAR__orig_val__28237_28654,_STAR_print_newline_STAR__temp_val__28238_28655,_STAR_print_fn_STAR__temp_val__28239_28656,sb__4661__auto__,G__28232,G__28233,G__28234,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28236_28653,_STAR_print_fn_STAR__orig_val__28237_28654,_STAR_print_newline_STAR__temp_val__28238_28655,_STAR_print_fn_STAR__temp_val__28239_28656,sb__4661__auto__,G__28232,G__28233,G__28234,G__28201,G__28201__$1,loc,class_name,simple_class,cause_type,format,map__28190,map__28190__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28237_28654;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28236_28653;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28232,G__28233,G__28234,G__28235) : format.call(null,G__28232,G__28233,G__28234,G__28235));
} else {
var G__28240 = "Execution error%s at %s(%s).\n%s\n";
var G__28241 = cause_type;
var G__28242 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28243 = loc;
var G__28244 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28240,G__28241,G__28242,G__28243,G__28244) : format.call(null,G__28240,G__28241,G__28242,G__28243,G__28244));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28201__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
