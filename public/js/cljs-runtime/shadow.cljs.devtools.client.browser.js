goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35554 = arguments.length;
var i__4731__auto___35555 = (0);
while(true){
if((i__4731__auto___35555 < len__4730__auto___35554)){
args__4736__auto__.push((arguments[i__4731__auto___35555]));

var G__35556 = (i__4731__auto___35555 + (1));
i__4731__auto___35555 = G__35556;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35328){
var G__35329 = cljs.core.first(seq35328);
var seq35328__$1 = cljs.core.next(seq35328);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35329,seq35328__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35337){
var map__35338 = p__35337;
var map__35338__$1 = (((((!((map__35338 == null))))?(((((map__35338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35338):map__35338);
var src = map__35338__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35338__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35340 = cljs.core.seq(sources);
var chunk__35341 = null;
var count__35342 = (0);
var i__35343 = (0);
while(true){
if((i__35343 < count__35342)){
var map__35351 = chunk__35341.cljs$core$IIndexed$_nth$arity$2(null,i__35343);
var map__35351__$1 = (((((!((map__35351 == null))))?(((((map__35351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35351):map__35351);
var src = map__35351__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35351__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35564 = seq__35340;
var G__35565 = chunk__35341;
var G__35566 = count__35342;
var G__35567 = (i__35343 + (1));
seq__35340 = G__35564;
chunk__35341 = G__35565;
count__35342 = G__35566;
i__35343 = G__35567;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35340);
if(temp__5720__auto__){
var seq__35340__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35340__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35340__$1);
var G__35568 = cljs.core.chunk_rest(seq__35340__$1);
var G__35569 = c__4550__auto__;
var G__35570 = cljs.core.count(c__4550__auto__);
var G__35571 = (0);
seq__35340 = G__35568;
chunk__35341 = G__35569;
count__35342 = G__35570;
i__35343 = G__35571;
continue;
} else {
var map__35354 = cljs.core.first(seq__35340__$1);
var map__35354__$1 = (((((!((map__35354 == null))))?(((((map__35354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35354):map__35354);
var src = map__35354__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35354__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35354__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35354__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35354__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35572 = cljs.core.next(seq__35340__$1);
var G__35573 = null;
var G__35574 = (0);
var G__35575 = (0);
seq__35340 = G__35572;
chunk__35341 = G__35573;
count__35342 = G__35574;
i__35343 = G__35575;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35360 = cljs.core.seq(js_requires);
var chunk__35361 = null;
var count__35362 = (0);
var i__35363 = (0);
while(true){
if((i__35363 < count__35362)){
var js_ns = chunk__35361.cljs$core$IIndexed$_nth$arity$2(null,i__35363);
var require_str_35576 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35576);


var G__35580 = seq__35360;
var G__35581 = chunk__35361;
var G__35582 = count__35362;
var G__35583 = (i__35363 + (1));
seq__35360 = G__35580;
chunk__35361 = G__35581;
count__35362 = G__35582;
i__35363 = G__35583;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35360);
if(temp__5720__auto__){
var seq__35360__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35360__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35360__$1);
var G__35584 = cljs.core.chunk_rest(seq__35360__$1);
var G__35585 = c__4550__auto__;
var G__35586 = cljs.core.count(c__4550__auto__);
var G__35587 = (0);
seq__35360 = G__35584;
chunk__35361 = G__35585;
count__35362 = G__35586;
i__35363 = G__35587;
continue;
} else {
var js_ns = cljs.core.first(seq__35360__$1);
var require_str_35588 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35588);


var G__35589 = cljs.core.next(seq__35360__$1);
var G__35590 = null;
var G__35591 = (0);
var G__35592 = (0);
seq__35360 = G__35589;
chunk__35361 = G__35590;
count__35362 = G__35591;
i__35363 = G__35592;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35364 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35364) : callback.call(null,G__35364));
} else {
var G__35365 = shadow.cljs.devtools.client.env.files_url();
var G__35366 = ((function (G__35365){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35365))
;
var G__35367 = "POST";
var G__35368 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35369 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35365,G__35366,G__35367,G__35368,G__35369);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35371){
var map__35372 = p__35371;
var map__35372__$1 = (((((!((map__35372 == null))))?(((((map__35372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35372):map__35372);
var msg = map__35372__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35372__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35372__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35374 = info;
var map__35374__$1 = (((((!((map__35374 == null))))?(((((map__35374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35374):map__35374);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35374__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35374__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35374,map__35374__$1,sources,compiled,map__35372,map__35372__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35376(s__35377){
return (new cljs.core.LazySeq(null,((function (map__35374,map__35374__$1,sources,compiled,map__35372,map__35372__$1,msg,info,reload_info){
return (function (){
var s__35377__$1 = s__35377;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35377__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35382 = cljs.core.first(xs__6277__auto__);
var map__35382__$1 = (((((!((map__35382 == null))))?(((((map__35382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35382):map__35382);
var src = map__35382__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35382__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35377__$1,map__35382,map__35382__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35374,map__35374__$1,sources,compiled,map__35372,map__35372__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35376_$_iter__35378(s__35379){
return (new cljs.core.LazySeq(null,((function (s__35377__$1,map__35382,map__35382__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35374,map__35374__$1,sources,compiled,map__35372,map__35372__$1,msg,info,reload_info){
return (function (){
var s__35379__$1 = s__35379;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35379__$1);
if(temp__5720__auto____$1){
var s__35379__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35379__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35379__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35381 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35380 = (0);
while(true){
if((i__35380 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35380);
cljs.core.chunk_append(b__35381,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35598 = (i__35380 + (1));
i__35380 = G__35598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35381),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35376_$_iter__35378(cljs.core.chunk_rest(s__35379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35381),null);
}
} else {
var warning = cljs.core.first(s__35379__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35376_$_iter__35378(cljs.core.rest(s__35379__$2)));
}
} else {
return null;
}
break;
}
});})(s__35377__$1,map__35382,map__35382__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35374,map__35374__$1,sources,compiled,map__35372,map__35372__$1,msg,info,reload_info))
,null,null));
});})(s__35377__$1,map__35382,map__35382__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35374,map__35374__$1,sources,compiled,map__35372,map__35372__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35376(cljs.core.rest(s__35377__$1)));
} else {
var G__35599 = cljs.core.rest(s__35377__$1);
s__35377__$1 = G__35599;
continue;
}
} else {
var G__35600 = cljs.core.rest(s__35377__$1);
s__35377__$1 = G__35600;
continue;
}
} else {
return null;
}
break;
}
});})(map__35374,map__35374__$1,sources,compiled,map__35372,map__35372__$1,msg,info,reload_info))
,null,null));
});})(map__35374,map__35374__$1,sources,compiled,map__35372,map__35372__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35388_35601 = cljs.core.seq(warnings);
var chunk__35389_35602 = null;
var count__35390_35603 = (0);
var i__35391_35604 = (0);
while(true){
if((i__35391_35604 < count__35390_35603)){
var map__35402_35605 = chunk__35389_35602.cljs$core$IIndexed$_nth$arity$2(null,i__35391_35604);
var map__35402_35606__$1 = (((((!((map__35402_35605 == null))))?(((((map__35402_35605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35402_35605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35402_35605):map__35402_35605);
var w_35607 = map__35402_35606__$1;
var msg_35608__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402_35606__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402_35606__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402_35606__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35402_35606__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35611)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35609),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35610),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35608__$1)].join(''));


var G__35612 = seq__35388_35601;
var G__35613 = chunk__35389_35602;
var G__35614 = count__35390_35603;
var G__35615 = (i__35391_35604 + (1));
seq__35388_35601 = G__35612;
chunk__35389_35602 = G__35613;
count__35390_35603 = G__35614;
i__35391_35604 = G__35615;
continue;
} else {
var temp__5720__auto___35616 = cljs.core.seq(seq__35388_35601);
if(temp__5720__auto___35616){
var seq__35388_35617__$1 = temp__5720__auto___35616;
if(cljs.core.chunked_seq_QMARK_(seq__35388_35617__$1)){
var c__4550__auto___35618 = cljs.core.chunk_first(seq__35388_35617__$1);
var G__35619 = cljs.core.chunk_rest(seq__35388_35617__$1);
var G__35620 = c__4550__auto___35618;
var G__35621 = cljs.core.count(c__4550__auto___35618);
var G__35622 = (0);
seq__35388_35601 = G__35619;
chunk__35389_35602 = G__35620;
count__35390_35603 = G__35621;
i__35391_35604 = G__35622;
continue;
} else {
var map__35406_35623 = cljs.core.first(seq__35388_35617__$1);
var map__35406_35624__$1 = (((((!((map__35406_35623 == null))))?(((((map__35406_35623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35406_35623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35406_35623):map__35406_35623);
var w_35625 = map__35406_35624__$1;
var msg_35626__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35406_35624__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35406_35624__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35406_35624__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35406_35624__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35629)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35627),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35628),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35626__$1)].join(''));


var G__35632 = cljs.core.next(seq__35388_35617__$1);
var G__35633 = null;
var G__35634 = (0);
var G__35635 = (0);
seq__35388_35601 = G__35632;
chunk__35389_35602 = G__35633;
count__35390_35603 = G__35634;
i__35391_35604 = G__35635;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35374,map__35374__$1,sources,compiled,warnings,map__35372,map__35372__$1,msg,info,reload_info){
return (function (p__35412){
var map__35413 = p__35412;
var map__35413__$1 = (((((!((map__35413 == null))))?(((((map__35413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35413):map__35413);
var src = map__35413__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35413__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35413__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35374,map__35374__$1,sources,compiled,warnings,map__35372,map__35372__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35374,map__35374__$1,sources,compiled,warnings,map__35372,map__35372__$1,msg,info,reload_info){
return (function (p__35418){
var map__35421 = p__35418;
var map__35421__$1 = (((((!((map__35421 == null))))?(((((map__35421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35421):map__35421);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35421__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35374,map__35374__$1,sources,compiled,warnings,map__35372,map__35372__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35374,map__35374__$1,sources,compiled,warnings,map__35372,map__35372__$1,msg,info,reload_info){
return (function (p__35425){
var map__35426 = p__35425;
var map__35426__$1 = (((((!((map__35426 == null))))?(((((map__35426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35426):map__35426);
var rc = map__35426__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35426__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35374,map__35374__$1,sources,compiled,warnings,map__35372,map__35372__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35374,map__35374__$1,sources,compiled,warnings,map__35372,map__35372__$1,msg,info,reload_info){
return (function (p1__35370_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35370_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35374,map__35374__$1,sources,compiled,warnings,map__35372,map__35372__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35437){
var map__35438 = p__35437;
var map__35438__$1 = (((((!((map__35438 == null))))?(((((map__35438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35438):map__35438);
var msg = map__35438__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35438__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35441 = cljs.core.seq(updates);
var chunk__35443 = null;
var count__35444 = (0);
var i__35445 = (0);
while(true){
if((i__35445 < count__35444)){
var path = chunk__35443.cljs$core$IIndexed$_nth$arity$2(null,i__35445);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35481_35638 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35484_35639 = null;
var count__35485_35640 = (0);
var i__35486_35641 = (0);
while(true){
if((i__35486_35641 < count__35485_35640)){
var node_35642 = chunk__35484_35639.cljs$core$IIndexed$_nth$arity$2(null,i__35486_35641);
var path_match_35643 = shadow.cljs.devtools.client.browser.match_paths(node_35642.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35643)){
var new_link_35645 = (function (){var G__35495 = node_35642.cloneNode(true);
G__35495.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35643),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35495;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35643], 0));

goog.dom.insertSiblingAfter(new_link_35645,node_35642);

goog.dom.removeNode(node_35642);


var G__35646 = seq__35481_35638;
var G__35647 = chunk__35484_35639;
var G__35648 = count__35485_35640;
var G__35649 = (i__35486_35641 + (1));
seq__35481_35638 = G__35646;
chunk__35484_35639 = G__35647;
count__35485_35640 = G__35648;
i__35486_35641 = G__35649;
continue;
} else {
var G__35650 = seq__35481_35638;
var G__35651 = chunk__35484_35639;
var G__35652 = count__35485_35640;
var G__35653 = (i__35486_35641 + (1));
seq__35481_35638 = G__35650;
chunk__35484_35639 = G__35651;
count__35485_35640 = G__35652;
i__35486_35641 = G__35653;
continue;
}
} else {
var temp__5720__auto___35654 = cljs.core.seq(seq__35481_35638);
if(temp__5720__auto___35654){
var seq__35481_35655__$1 = temp__5720__auto___35654;
if(cljs.core.chunked_seq_QMARK_(seq__35481_35655__$1)){
var c__4550__auto___35656 = cljs.core.chunk_first(seq__35481_35655__$1);
var G__35657 = cljs.core.chunk_rest(seq__35481_35655__$1);
var G__35658 = c__4550__auto___35656;
var G__35659 = cljs.core.count(c__4550__auto___35656);
var G__35660 = (0);
seq__35481_35638 = G__35657;
chunk__35484_35639 = G__35658;
count__35485_35640 = G__35659;
i__35486_35641 = G__35660;
continue;
} else {
var node_35661 = cljs.core.first(seq__35481_35655__$1);
var path_match_35662 = shadow.cljs.devtools.client.browser.match_paths(node_35661.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35662)){
var new_link_35664 = (function (){var G__35498 = node_35661.cloneNode(true);
G__35498.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35662),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35498;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35662], 0));

goog.dom.insertSiblingAfter(new_link_35664,node_35661);

goog.dom.removeNode(node_35661);


var G__35665 = cljs.core.next(seq__35481_35655__$1);
var G__35666 = null;
var G__35667 = (0);
var G__35668 = (0);
seq__35481_35638 = G__35665;
chunk__35484_35639 = G__35666;
count__35485_35640 = G__35667;
i__35486_35641 = G__35668;
continue;
} else {
var G__35671 = cljs.core.next(seq__35481_35655__$1);
var G__35672 = null;
var G__35673 = (0);
var G__35674 = (0);
seq__35481_35638 = G__35671;
chunk__35484_35639 = G__35672;
count__35485_35640 = G__35673;
i__35486_35641 = G__35674;
continue;
}
}
} else {
}
}
break;
}


var G__35675 = seq__35441;
var G__35676 = chunk__35443;
var G__35677 = count__35444;
var G__35678 = (i__35445 + (1));
seq__35441 = G__35675;
chunk__35443 = G__35676;
count__35444 = G__35677;
i__35445 = G__35678;
continue;
} else {
var G__35679 = seq__35441;
var G__35680 = chunk__35443;
var G__35681 = count__35444;
var G__35682 = (i__35445 + (1));
seq__35441 = G__35679;
chunk__35443 = G__35680;
count__35444 = G__35681;
i__35445 = G__35682;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35441);
if(temp__5720__auto__){
var seq__35441__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35441__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35441__$1);
var G__35686 = cljs.core.chunk_rest(seq__35441__$1);
var G__35687 = c__4550__auto__;
var G__35688 = cljs.core.count(c__4550__auto__);
var G__35689 = (0);
seq__35441 = G__35686;
chunk__35443 = G__35687;
count__35444 = G__35688;
i__35445 = G__35689;
continue;
} else {
var path = cljs.core.first(seq__35441__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35501_35690 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35504_35691 = null;
var count__35505_35692 = (0);
var i__35506_35693 = (0);
while(true){
if((i__35506_35693 < count__35505_35692)){
var node_35694 = chunk__35504_35691.cljs$core$IIndexed$_nth$arity$2(null,i__35506_35693);
var path_match_35695 = shadow.cljs.devtools.client.browser.match_paths(node_35694.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35695)){
var new_link_35696 = (function (){var G__35511 = node_35694.cloneNode(true);
G__35511.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35695),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35511;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35695], 0));

goog.dom.insertSiblingAfter(new_link_35696,node_35694);

goog.dom.removeNode(node_35694);


var G__35697 = seq__35501_35690;
var G__35698 = chunk__35504_35691;
var G__35699 = count__35505_35692;
var G__35700 = (i__35506_35693 + (1));
seq__35501_35690 = G__35697;
chunk__35504_35691 = G__35698;
count__35505_35692 = G__35699;
i__35506_35693 = G__35700;
continue;
} else {
var G__35701 = seq__35501_35690;
var G__35702 = chunk__35504_35691;
var G__35703 = count__35505_35692;
var G__35704 = (i__35506_35693 + (1));
seq__35501_35690 = G__35701;
chunk__35504_35691 = G__35702;
count__35505_35692 = G__35703;
i__35506_35693 = G__35704;
continue;
}
} else {
var temp__5720__auto___35705__$1 = cljs.core.seq(seq__35501_35690);
if(temp__5720__auto___35705__$1){
var seq__35501_35706__$1 = temp__5720__auto___35705__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35501_35706__$1)){
var c__4550__auto___35707 = cljs.core.chunk_first(seq__35501_35706__$1);
var G__35708 = cljs.core.chunk_rest(seq__35501_35706__$1);
var G__35709 = c__4550__auto___35707;
var G__35710 = cljs.core.count(c__4550__auto___35707);
var G__35711 = (0);
seq__35501_35690 = G__35708;
chunk__35504_35691 = G__35709;
count__35505_35692 = G__35710;
i__35506_35693 = G__35711;
continue;
} else {
var node_35712 = cljs.core.first(seq__35501_35706__$1);
var path_match_35713 = shadow.cljs.devtools.client.browser.match_paths(node_35712.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35713)){
var new_link_35714 = (function (){var G__35512 = node_35712.cloneNode(true);
G__35512.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35713),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35512;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35713], 0));

goog.dom.insertSiblingAfter(new_link_35714,node_35712);

goog.dom.removeNode(node_35712);


var G__35715 = cljs.core.next(seq__35501_35706__$1);
var G__35716 = null;
var G__35717 = (0);
var G__35718 = (0);
seq__35501_35690 = G__35715;
chunk__35504_35691 = G__35716;
count__35505_35692 = G__35717;
i__35506_35693 = G__35718;
continue;
} else {
var G__35719 = cljs.core.next(seq__35501_35706__$1);
var G__35720 = null;
var G__35721 = (0);
var G__35722 = (0);
seq__35501_35690 = G__35719;
chunk__35504_35691 = G__35720;
count__35505_35692 = G__35721;
i__35506_35693 = G__35722;
continue;
}
}
} else {
}
}
break;
}


var G__35723 = cljs.core.next(seq__35441__$1);
var G__35724 = null;
var G__35725 = (0);
var G__35726 = (0);
seq__35441 = G__35723;
chunk__35443 = G__35724;
count__35444 = G__35725;
i__35445 = G__35726;
continue;
} else {
var G__35727 = cljs.core.next(seq__35441__$1);
var G__35728 = null;
var G__35729 = (0);
var G__35730 = (0);
seq__35441 = G__35727;
chunk__35443 = G__35728;
count__35444 = G__35729;
i__35445 = G__35730;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35513){
var map__35514 = p__35513;
var map__35514__$1 = (((((!((map__35514 == null))))?(((((map__35514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35514):map__35514);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35514__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35514__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35514,map__35514__$1,id,js){
return (function (){
return eval(js);
});})(map__35514,map__35514__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35518){
var map__35519 = p__35518;
var map__35519__$1 = (((((!((map__35519 == null))))?(((((map__35519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35519):map__35519);
var msg = map__35519__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35519__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35519__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35519__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35519__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35519,map__35519__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35521){
var map__35522 = p__35521;
var map__35522__$1 = (((((!((map__35522 == null))))?(((((map__35522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35522):map__35522);
var src = map__35522__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35519,map__35519__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35519,map__35519__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35519,map__35519__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35524){
var map__35525 = p__35524;
var map__35525__$1 = (((((!((map__35525 == null))))?(((((map__35525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35525):map__35525);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35525__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35525__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35525,map__35525__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35525,map__35525__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35527){
var map__35528 = p__35527;
var map__35528__$1 = (((((!((map__35528 == null))))?(((((map__35528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35528):map__35528);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35528__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35536){
var map__35537 = p__35536;
var map__35537__$1 = (((((!((map__35537 == null))))?(((((map__35537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35537):map__35537);
var msg = map__35537__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35537__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35539 = type;
var G__35539__$1 = (((G__35539 instanceof cljs.core.Keyword))?G__35539.fqn:null);
switch (G__35539__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35544 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35545 = ((function (G__35544){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35544))
;
var G__35546 = "POST";
var G__35547 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35548 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35544,G__35545,G__35546,G__35547,G__35548);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35550){var e = e35550;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___35746 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___35746)){
var s_35747 = temp__5720__auto___35746;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35747.onclose = ((function (s_35747,temp__5720__auto___35746){
return (function (e){
return null;
});})(s_35747,temp__5720__auto___35746))
;

s_35747.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
