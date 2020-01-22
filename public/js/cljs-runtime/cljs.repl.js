goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35838){
var map__35839 = p__35838;
var map__35839__$1 = (((((!((map__35839 == null))))?(((((map__35839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35839):map__35839);
var m = map__35839__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35839__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
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
var seq__35844_36078 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35845_36079 = null;
var count__35846_36080 = (0);
var i__35847_36081 = (0);
while(true){
if((i__35847_36081 < count__35846_36080)){
var f_36085 = chunk__35845_36079.cljs$core$IIndexed$_nth$arity$2(null,i__35847_36081);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36085], 0));


var G__36086 = seq__35844_36078;
var G__36087 = chunk__35845_36079;
var G__36088 = count__35846_36080;
var G__36089 = (i__35847_36081 + (1));
seq__35844_36078 = G__36086;
chunk__35845_36079 = G__36087;
count__35846_36080 = G__36088;
i__35847_36081 = G__36089;
continue;
} else {
var temp__5735__auto___36090 = cljs.core.seq(seq__35844_36078);
if(temp__5735__auto___36090){
var seq__35844_36091__$1 = temp__5735__auto___36090;
if(cljs.core.chunked_seq_QMARK_(seq__35844_36091__$1)){
var c__4609__auto___36092 = cljs.core.chunk_first(seq__35844_36091__$1);
var G__36093 = cljs.core.chunk_rest(seq__35844_36091__$1);
var G__36094 = c__4609__auto___36092;
var G__36095 = cljs.core.count(c__4609__auto___36092);
var G__36096 = (0);
seq__35844_36078 = G__36093;
chunk__35845_36079 = G__36094;
count__35846_36080 = G__36095;
i__35847_36081 = G__36096;
continue;
} else {
var f_36097 = cljs.core.first(seq__35844_36091__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36097], 0));


var G__36098 = cljs.core.next(seq__35844_36091__$1);
var G__36099 = null;
var G__36100 = (0);
var G__36101 = (0);
seq__35844_36078 = G__36098;
chunk__35845_36079 = G__36099;
count__35846_36080 = G__36100;
i__35847_36081 = G__36101;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36102 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36102], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36102)))?cljs.core.second(arglists_36102):arglists_36102)], 0));
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
var seq__35849_36111 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35850_36112 = null;
var count__35851_36113 = (0);
var i__35852_36114 = (0);
while(true){
if((i__35852_36114 < count__35851_36113)){
var vec__35864_36115 = chunk__35850_36112.cljs$core$IIndexed$_nth$arity$2(null,i__35852_36114);
var name_36116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35864_36115,(0),null);
var map__35867_36117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35864_36115,(1),null);
var map__35867_36118__$1 = (((((!((map__35867_36117 == null))))?(((((map__35867_36117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35867_36117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35867_36117):map__35867_36117);
var doc_36119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867_36118__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867_36118__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36116], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36120], 0));

if(cljs.core.truth_(doc_36119)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36119], 0));
} else {
}


var G__36126 = seq__35849_36111;
var G__36127 = chunk__35850_36112;
var G__36128 = count__35851_36113;
var G__36129 = (i__35852_36114 + (1));
seq__35849_36111 = G__36126;
chunk__35850_36112 = G__36127;
count__35851_36113 = G__36128;
i__35852_36114 = G__36129;
continue;
} else {
var temp__5735__auto___36131 = cljs.core.seq(seq__35849_36111);
if(temp__5735__auto___36131){
var seq__35849_36132__$1 = temp__5735__auto___36131;
if(cljs.core.chunked_seq_QMARK_(seq__35849_36132__$1)){
var c__4609__auto___36135 = cljs.core.chunk_first(seq__35849_36132__$1);
var G__36136 = cljs.core.chunk_rest(seq__35849_36132__$1);
var G__36137 = c__4609__auto___36135;
var G__36138 = cljs.core.count(c__4609__auto___36135);
var G__36139 = (0);
seq__35849_36111 = G__36136;
chunk__35850_36112 = G__36137;
count__35851_36113 = G__36138;
i__35852_36114 = G__36139;
continue;
} else {
var vec__35869_36140 = cljs.core.first(seq__35849_36132__$1);
var name_36141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35869_36140,(0),null);
var map__35872_36142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35869_36140,(1),null);
var map__35872_36143__$1 = (((((!((map__35872_36142 == null))))?(((((map__35872_36142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35872_36142.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35872_36142):map__35872_36142);
var doc_36144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35872_36143__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35872_36143__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36141], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36145], 0));

if(cljs.core.truth_(doc_36144)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36144], 0));
} else {
}


var G__36229 = cljs.core.next(seq__35849_36132__$1);
var G__36230 = null;
var G__36231 = (0);
var G__36232 = (0);
seq__35849_36111 = G__36229;
chunk__35850_36112 = G__36230;
count__35851_36113 = G__36231;
i__35852_36114 = G__36232;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35874 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35875 = null;
var count__35876 = (0);
var i__35877 = (0);
while(true){
if((i__35877 < count__35876)){
var role = chunk__35875.cljs$core$IIndexed$_nth$arity$2(null,i__35877);
var temp__5735__auto___36233__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36233__$1)){
var spec_36234 = temp__5735__auto___36233__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36234)], 0));
} else {
}


var G__36235 = seq__35874;
var G__36236 = chunk__35875;
var G__36237 = count__35876;
var G__36238 = (i__35877 + (1));
seq__35874 = G__36235;
chunk__35875 = G__36236;
count__35876 = G__36237;
i__35877 = G__36238;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__35874);
if(temp__5735__auto____$1){
var seq__35874__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35874__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35874__$1);
var G__36239 = cljs.core.chunk_rest(seq__35874__$1);
var G__36240 = c__4609__auto__;
var G__36241 = cljs.core.count(c__4609__auto__);
var G__36242 = (0);
seq__35874 = G__36239;
chunk__35875 = G__36240;
count__35876 = G__36241;
i__35877 = G__36242;
continue;
} else {
var role = cljs.core.first(seq__35874__$1);
var temp__5735__auto___36243__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36243__$2)){
var spec_36244 = temp__5735__auto___36243__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36244)], 0));
} else {
}


var G__36245 = cljs.core.next(seq__35874__$1);
var G__36246 = null;
var G__36247 = (0);
var G__36248 = (0);
seq__35874 = G__36245;
chunk__35875 = G__36246;
count__35876 = G__36247;
i__35877 = G__36248;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
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
var G__36254 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36255 = cljs.core.ex_cause(t);
via = G__36254;
t = G__36255;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
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
var map__35885 = datafied_throwable;
var map__35885__$1 = (((((!((map__35885 == null))))?(((((map__35885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35885):map__35885);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35885__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35885__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35885__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35886 = cljs.core.last(via);
var map__35886__$1 = (((((!((map__35886 == null))))?(((((map__35886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35886):map__35886);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35886__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35886__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35886__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35887 = data;
var map__35887__$1 = (((((!((map__35887 == null))))?(((((map__35887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35887):map__35887);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35887__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35887__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35887__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35888 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35888__$1 = (((((!((map__35888 == null))))?(((((map__35888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35888):map__35888);
var top_data = map__35888__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35888__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35895 = phase;
var G__35895__$1 = (((G__35895 instanceof cljs.core.Keyword))?G__35895.fqn:null);
switch (G__35895__$1) {
case "read-source":
var map__35896 = data;
var map__35896__$1 = (((((!((map__35896 == null))))?(((((map__35896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35896):map__35896);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35896__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35896__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35898 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35898__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35898,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35898);
var G__35898__$2 = (cljs.core.truth_((function (){var fexpr__35899 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35899.cljs$core$IFn$_invoke$arity$1 ? fexpr__35899.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35899.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35898__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35898__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35898__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35898__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35901 = top_data;
var G__35901__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35901,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35901);
var G__35901__$2 = (cljs.core.truth_((function (){var fexpr__35902 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35902.cljs$core$IFn$_invoke$arity$1 ? fexpr__35902.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35902.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35901__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35901__$1);
var G__35901__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35901__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35901__$2);
var G__35901__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35901__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35901__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35901__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35901__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35903 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35903,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35903,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35903,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35903,(3),null);
var G__35906 = top_data;
var G__35906__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35906,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35906);
var G__35906__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35906__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35906__$1);
var G__35906__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35906__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35906__$2);
var G__35906__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35906__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35906__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35906__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35906__$4;
}

break;
case "execution":
var vec__35907 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35884_SHARP_){
var or__4185__auto__ = (p1__35884_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__35911 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35911.cljs$core$IFn$_invoke$arity$1 ? fexpr__35911.cljs$core$IFn$_invoke$arity$1(p1__35884_SHARP_) : fexpr__35911.call(null,p1__35884_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__35912 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35912__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35912);
var G__35912__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35912__$1);
var G__35912__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35912__$2);
var G__35912__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35912__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35912__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35912__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35895__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35927){
var map__35928 = p__35927;
var map__35928__$1 = (((((!((map__35928 == null))))?(((((map__35928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35928):map__35928);
var triage_data = map__35928__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35928__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35965 = phase;
var G__35965__$1 = (((G__35965 instanceof cljs.core.Keyword))?G__35965.fqn:null);
switch (G__35965__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35966 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35967 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35968 = loc;
var G__35969 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35970_36399 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35971_36400 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35972_36401 = true;
var _STAR_print_fn_STAR__temp_val__35973_36402 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35972_36401);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35973_36402);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35921_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35921_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35971_36400);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35970_36399);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35966,G__35967,G__35968,G__35969) : format.call(null,G__35966,G__35967,G__35968,G__35969));

break;
case "macroexpansion":
var G__35995 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35996 = cause_type;
var G__35997 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35998 = loc;
var G__35999 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35995,G__35996,G__35997,G__35998,G__35999) : format.call(null,G__35995,G__35996,G__35997,G__35998,G__35999));

break;
case "compile-syntax-check":
var G__36000 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36001 = cause_type;
var G__36002 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36003 = loc;
var G__36004 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36000,G__36001,G__36002,G__36003,G__36004) : format.call(null,G__36000,G__36001,G__36002,G__36003,G__36004));

break;
case "compilation":
var G__36005 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36006 = cause_type;
var G__36007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36008 = loc;
var G__36009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36005,G__36006,G__36007,G__36008,G__36009) : format.call(null,G__36005,G__36006,G__36007,G__36008,G__36009));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36020 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36021 = symbol;
var G__36022 = loc;
var G__36023 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36030_36413 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36034_36414 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36038_36415 = true;
var _STAR_print_fn_STAR__temp_val__36039_36416 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36038_36415);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36039_36416);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35923_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35923_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36034_36414);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36030_36413);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36020,G__36021,G__36022,G__36023) : format.call(null,G__36020,G__36021,G__36022,G__36023));
} else {
var G__36049 = "Execution error%s at %s(%s).\n%s\n";
var G__36050 = cause_type;
var G__36051 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36052 = loc;
var G__36053 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36049,G__36050,G__36051,G__36052,G__36053) : format.call(null,G__36049,G__36050,G__36051,G__36052,G__36053));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35965__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
