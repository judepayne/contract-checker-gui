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
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34726 = arguments.length;
var i__4790__auto___34727 = (0);
while(true){
if((i__4790__auto___34727 < len__4789__auto___34726)){
args__4795__auto__.push((arguments[i__4790__auto___34727]));

var G__34729 = (i__4790__auto___34727 + (1));
i__4790__auto___34727 = G__34729;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq34350){
var G__34352 = cljs.core.first(seq34350);
var seq34350__$1 = cljs.core.next(seq34350);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34352,seq34350__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__34378){
var map__34379 = p__34378;
var map__34379__$1 = (((((!((map__34379 == null))))?(((((map__34379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34379):map__34379);
var src = map__34379__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34379__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34379__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__34381 = cljs.core.seq(sources);
var chunk__34382 = null;
var count__34383 = (0);
var i__34384 = (0);
while(true){
if((i__34384 < count__34383)){
var map__34394 = chunk__34382.cljs$core$IIndexed$_nth$arity$2(null,i__34384);
var map__34394__$1 = (((((!((map__34394 == null))))?(((((map__34394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34394):map__34394);
var src = map__34394__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34394__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34397){var e_34760 = e34397;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34760);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34760.message)].join('')));
}

var G__34765 = seq__34381;
var G__34766 = chunk__34382;
var G__34767 = count__34383;
var G__34768 = (i__34384 + (1));
seq__34381 = G__34765;
chunk__34382 = G__34766;
count__34383 = G__34767;
i__34384 = G__34768;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34381);
if(temp__5735__auto__){
var seq__34381__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34381__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34381__$1);
var G__34772 = cljs.core.chunk_rest(seq__34381__$1);
var G__34773 = c__4609__auto__;
var G__34774 = cljs.core.count(c__4609__auto__);
var G__34775 = (0);
seq__34381 = G__34772;
chunk__34382 = G__34773;
count__34383 = G__34774;
i__34384 = G__34775;
continue;
} else {
var map__34398 = cljs.core.first(seq__34381__$1);
var map__34398__$1 = (((((!((map__34398 == null))))?(((((map__34398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34398):map__34398);
var src = map__34398__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34398__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34398__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34398__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34398__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e34400){var e_34786 = e34400;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_34786);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_34786.message)].join('')));
}

var G__34791 = cljs.core.next(seq__34381__$1);
var G__34792 = null;
var G__34793 = (0);
var G__34794 = (0);
seq__34381 = G__34791;
chunk__34382 = G__34792;
count__34383 = G__34793;
i__34384 = G__34794;
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
var seq__34405 = cljs.core.seq(js_requires);
var chunk__34406 = null;
var count__34407 = (0);
var i__34408 = (0);
while(true){
if((i__34408 < count__34407)){
var js_ns = chunk__34406.cljs$core$IIndexed$_nth$arity$2(null,i__34408);
var require_str_34808 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34808);


var G__34810 = seq__34405;
var G__34811 = chunk__34406;
var G__34812 = count__34407;
var G__34813 = (i__34408 + (1));
seq__34405 = G__34810;
chunk__34406 = G__34811;
count__34407 = G__34812;
i__34408 = G__34813;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34405);
if(temp__5735__auto__){
var seq__34405__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34405__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34405__$1);
var G__34819 = cljs.core.chunk_rest(seq__34405__$1);
var G__34820 = c__4609__auto__;
var G__34821 = cljs.core.count(c__4609__auto__);
var G__34822 = (0);
seq__34405 = G__34819;
chunk__34406 = G__34820;
count__34407 = G__34821;
i__34408 = G__34822;
continue;
} else {
var js_ns = cljs.core.first(seq__34405__$1);
var require_str_34826 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_34826);


var G__34832 = cljs.core.next(seq__34405__$1);
var G__34833 = null;
var G__34834 = (0);
var G__34835 = (0);
seq__34405 = G__34832;
chunk__34406 = G__34833;
count__34407 = G__34834;
i__34408 = G__34835;
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
var G__34412 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__34412) : callback.call(null,G__34412));
} else {
var G__34413 = shadow.cljs.devtools.client.env.files_url();
var G__34414 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__34415 = "POST";
var G__34416 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__34417 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34413,G__34414,G__34415,G__34416,G__34417);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__34419){
var map__34420 = p__34419;
var map__34420__$1 = (((((!((map__34420 == null))))?(((((map__34420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34420):map__34420);
var msg = map__34420__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34420__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34420__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__34422 = info;
var map__34422__$1 = (((((!((map__34422 == null))))?(((((map__34422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34422):map__34422);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34422__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34422__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34424(s__34425){
return (new cljs.core.LazySeq(null,(function (){
var s__34425__$1 = s__34425;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34425__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__34432 = cljs.core.first(xs__6292__auto__);
var map__34432__$1 = (((((!((map__34432 == null))))?(((((map__34432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34432):map__34432);
var src = map__34432__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34432__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34432__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__34425__$1,map__34432,map__34432__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34422,map__34422__$1,sources,compiled,map__34420,map__34420__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34424_$_iter__34426(s__34427){
return (new cljs.core.LazySeq(null,((function (s__34425__$1,map__34432,map__34432__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34422,map__34422__$1,sources,compiled,map__34420,map__34420__$1,msg,info,reload_info){
return (function (){
var s__34427__$1 = s__34427;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34427__$1);
if(temp__5735__auto____$1){
var s__34427__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34427__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__34427__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__34429 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__34428 = (0);
while(true){
if((i__34428 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__34428);
cljs.core.chunk_append(b__34429,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__34881 = (i__34428 + (1));
i__34428 = G__34881;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34429),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34424_$_iter__34426(cljs.core.chunk_rest(s__34427__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34429),null);
}
} else {
var warning = cljs.core.first(s__34427__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34424_$_iter__34426(cljs.core.rest(s__34427__$2)));
}
} else {
return null;
}
break;
}
});})(s__34425__$1,map__34432,map__34432__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34422,map__34422__$1,sources,compiled,map__34420,map__34420__$1,msg,info,reload_info))
,null,null));
});})(s__34425__$1,map__34432,map__34432__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__34422,map__34422__$1,sources,compiled,map__34420,map__34420__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__34424(cljs.core.rest(s__34425__$1)));
} else {
var G__34887 = cljs.core.rest(s__34425__$1);
s__34425__$1 = G__34887;
continue;
}
} else {
var G__34888 = cljs.core.rest(s__34425__$1);
s__34425__$1 = G__34888;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__34438_34889 = cljs.core.seq(warnings);
var chunk__34439_34890 = null;
var count__34440_34891 = (0);
var i__34441_34892 = (0);
while(true){
if((i__34441_34892 < count__34440_34891)){
var map__34453_34895 = chunk__34439_34890.cljs$core$IIndexed$_nth$arity$2(null,i__34441_34892);
var map__34453_34896__$1 = (((((!((map__34453_34895 == null))))?(((((map__34453_34895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34453_34895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34453_34895):map__34453_34895);
var w_34897 = map__34453_34896__$1;
var msg_34898__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34453_34896__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34453_34896__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34453_34896__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34453_34896__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34901)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34899),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34900),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34898__$1)].join(''));


var G__34906 = seq__34438_34889;
var G__34907 = chunk__34439_34890;
var G__34908 = count__34440_34891;
var G__34909 = (i__34441_34892 + (1));
seq__34438_34889 = G__34906;
chunk__34439_34890 = G__34907;
count__34440_34891 = G__34908;
i__34441_34892 = G__34909;
continue;
} else {
var temp__5735__auto___34910 = cljs.core.seq(seq__34438_34889);
if(temp__5735__auto___34910){
var seq__34438_34911__$1 = temp__5735__auto___34910;
if(cljs.core.chunked_seq_QMARK_(seq__34438_34911__$1)){
var c__4609__auto___34913 = cljs.core.chunk_first(seq__34438_34911__$1);
var G__34915 = cljs.core.chunk_rest(seq__34438_34911__$1);
var G__34916 = c__4609__auto___34913;
var G__34917 = cljs.core.count(c__4609__auto___34913);
var G__34918 = (0);
seq__34438_34889 = G__34915;
chunk__34439_34890 = G__34916;
count__34440_34891 = G__34917;
i__34441_34892 = G__34918;
continue;
} else {
var map__34455_34919 = cljs.core.first(seq__34438_34911__$1);
var map__34455_34920__$1 = (((((!((map__34455_34919 == null))))?(((((map__34455_34919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34455_34919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34455_34919):map__34455_34919);
var w_34921 = map__34455_34920__$1;
var msg_34922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455_34920__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_34923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455_34920__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_34925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455_34920__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_34926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455_34920__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_34926)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_34923),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_34925),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_34922__$1)].join(''));


var G__34935 = cljs.core.next(seq__34438_34911__$1);
var G__34936 = null;
var G__34937 = (0);
var G__34938 = (0);
seq__34438_34889 = G__34935;
chunk__34439_34890 = G__34936;
count__34440_34891 = G__34937;
i__34441_34892 = G__34938;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34458){
var map__34460 = p__34458;
var map__34460__$1 = (((((!((map__34460 == null))))?(((((map__34460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34460):map__34460);
var src = map__34460__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34460__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34460__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34468){
var map__34469 = p__34468;
var map__34469__$1 = (((((!((map__34469 == null))))?(((((map__34469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34469):map__34469);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34469__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34474){
var map__34476 = p__34474;
var map__34476__$1 = (((((!((map__34476 == null))))?(((((map__34476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34476):map__34476);
var rc = map__34476__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34476__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__34418_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__34418_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__34487){
var map__34488 = p__34487;
var map__34488__$1 = (((((!((map__34488 == null))))?(((((map__34488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34488):map__34488);
var msg = map__34488__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34488__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__34493 = cljs.core.seq(updates);
var chunk__34495 = null;
var count__34496 = (0);
var i__34497 = (0);
while(true){
if((i__34497 < count__34496)){
var path = chunk__34495.cljs$core$IIndexed$_nth$arity$2(null,i__34497);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34552_34972 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34555_34973 = null;
var count__34556_34974 = (0);
var i__34557_34975 = (0);
while(true){
if((i__34557_34975 < count__34556_34974)){
var node_34978 = chunk__34555_34973.cljs$core$IIndexed$_nth$arity$2(null,i__34557_34975);
var path_match_34979 = shadow.cljs.devtools.client.browser.match_paths(node_34978.getAttribute("href"),path);
if(cljs.core.truth_(path_match_34979)){
var new_link_34981 = (function (){var G__34579 = node_34978.cloneNode(true);
G__34579.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_34979),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34579;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_34979], 0));

goog.dom.insertSiblingAfter(new_link_34981,node_34978);

goog.dom.removeNode(node_34978);


var G__34983 = seq__34552_34972;
var G__34984 = chunk__34555_34973;
var G__34985 = count__34556_34974;
var G__34986 = (i__34557_34975 + (1));
seq__34552_34972 = G__34983;
chunk__34555_34973 = G__34984;
count__34556_34974 = G__34985;
i__34557_34975 = G__34986;
continue;
} else {
var G__34987 = seq__34552_34972;
var G__34988 = chunk__34555_34973;
var G__34989 = count__34556_34974;
var G__34990 = (i__34557_34975 + (1));
seq__34552_34972 = G__34987;
chunk__34555_34973 = G__34988;
count__34556_34974 = G__34989;
i__34557_34975 = G__34990;
continue;
}
} else {
var temp__5735__auto___34991 = cljs.core.seq(seq__34552_34972);
if(temp__5735__auto___34991){
var seq__34552_34993__$1 = temp__5735__auto___34991;
if(cljs.core.chunked_seq_QMARK_(seq__34552_34993__$1)){
var c__4609__auto___34994 = cljs.core.chunk_first(seq__34552_34993__$1);
var G__34995 = cljs.core.chunk_rest(seq__34552_34993__$1);
var G__34996 = c__4609__auto___34994;
var G__34997 = cljs.core.count(c__4609__auto___34994);
var G__34998 = (0);
seq__34552_34972 = G__34995;
chunk__34555_34973 = G__34996;
count__34556_34974 = G__34997;
i__34557_34975 = G__34998;
continue;
} else {
var node_34999 = cljs.core.first(seq__34552_34993__$1);
var path_match_35000 = shadow.cljs.devtools.client.browser.match_paths(node_34999.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35000)){
var new_link_35002 = (function (){var G__34583 = node_34999.cloneNode(true);
G__34583.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34583;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35000], 0));

goog.dom.insertSiblingAfter(new_link_35002,node_34999);

goog.dom.removeNode(node_34999);


var G__35006 = cljs.core.next(seq__34552_34993__$1);
var G__35007 = null;
var G__35008 = (0);
var G__35009 = (0);
seq__34552_34972 = G__35006;
chunk__34555_34973 = G__35007;
count__34556_34974 = G__35008;
i__34557_34975 = G__35009;
continue;
} else {
var G__35010 = cljs.core.next(seq__34552_34993__$1);
var G__35011 = null;
var G__35012 = (0);
var G__35013 = (0);
seq__34552_34972 = G__35010;
chunk__34555_34973 = G__35011;
count__34556_34974 = G__35012;
i__34557_34975 = G__35013;
continue;
}
}
} else {
}
}
break;
}


var G__35014 = seq__34493;
var G__35015 = chunk__34495;
var G__35016 = count__34496;
var G__35017 = (i__34497 + (1));
seq__34493 = G__35014;
chunk__34495 = G__35015;
count__34496 = G__35016;
i__34497 = G__35017;
continue;
} else {
var G__35018 = seq__34493;
var G__35019 = chunk__34495;
var G__35020 = count__34496;
var G__35021 = (i__34497 + (1));
seq__34493 = G__35018;
chunk__34495 = G__35019;
count__34496 = G__35020;
i__34497 = G__35021;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34493);
if(temp__5735__auto__){
var seq__34493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34493__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34493__$1);
var G__35025 = cljs.core.chunk_rest(seq__34493__$1);
var G__35026 = c__4609__auto__;
var G__35027 = cljs.core.count(c__4609__auto__);
var G__35028 = (0);
seq__34493 = G__35025;
chunk__34495 = G__35026;
count__34496 = G__35027;
i__34497 = G__35028;
continue;
} else {
var path = cljs.core.first(seq__34493__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__34585_35033 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__34588_35034 = null;
var count__34589_35035 = (0);
var i__34590_35036 = (0);
while(true){
if((i__34590_35036 < count__34589_35035)){
var node_35037 = chunk__34588_35034.cljs$core$IIndexed$_nth$arity$2(null,i__34590_35036);
var path_match_35038 = shadow.cljs.devtools.client.browser.match_paths(node_35037.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35038)){
var new_link_35039 = (function (){var G__34596 = node_35037.cloneNode(true);
G__34596.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35038),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34596;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35038], 0));

goog.dom.insertSiblingAfter(new_link_35039,node_35037);

goog.dom.removeNode(node_35037);


var G__35040 = seq__34585_35033;
var G__35041 = chunk__34588_35034;
var G__35042 = count__34589_35035;
var G__35043 = (i__34590_35036 + (1));
seq__34585_35033 = G__35040;
chunk__34588_35034 = G__35041;
count__34589_35035 = G__35042;
i__34590_35036 = G__35043;
continue;
} else {
var G__35044 = seq__34585_35033;
var G__35045 = chunk__34588_35034;
var G__35046 = count__34589_35035;
var G__35047 = (i__34590_35036 + (1));
seq__34585_35033 = G__35044;
chunk__34588_35034 = G__35045;
count__34589_35035 = G__35046;
i__34590_35036 = G__35047;
continue;
}
} else {
var temp__5735__auto___35048__$1 = cljs.core.seq(seq__34585_35033);
if(temp__5735__auto___35048__$1){
var seq__34585_35049__$1 = temp__5735__auto___35048__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34585_35049__$1)){
var c__4609__auto___35050 = cljs.core.chunk_first(seq__34585_35049__$1);
var G__35051 = cljs.core.chunk_rest(seq__34585_35049__$1);
var G__35052 = c__4609__auto___35050;
var G__35053 = cljs.core.count(c__4609__auto___35050);
var G__35054 = (0);
seq__34585_35033 = G__35051;
chunk__34588_35034 = G__35052;
count__34589_35035 = G__35053;
i__34590_35036 = G__35054;
continue;
} else {
var node_35055 = cljs.core.first(seq__34585_35049__$1);
var path_match_35056 = shadow.cljs.devtools.client.browser.match_paths(node_35055.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35056)){
var new_link_35057 = (function (){var G__34597 = node_35055.cloneNode(true);
G__34597.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35056),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__34597;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35056], 0));

goog.dom.insertSiblingAfter(new_link_35057,node_35055);

goog.dom.removeNode(node_35055);


var G__35058 = cljs.core.next(seq__34585_35049__$1);
var G__35059 = null;
var G__35060 = (0);
var G__35061 = (0);
seq__34585_35033 = G__35058;
chunk__34588_35034 = G__35059;
count__34589_35035 = G__35060;
i__34590_35036 = G__35061;
continue;
} else {
var G__35062 = cljs.core.next(seq__34585_35049__$1);
var G__35063 = null;
var G__35064 = (0);
var G__35065 = (0);
seq__34585_35033 = G__35062;
chunk__34588_35034 = G__35063;
count__34589_35035 = G__35064;
i__34590_35036 = G__35065;
continue;
}
}
} else {
}
}
break;
}


var G__35066 = cljs.core.next(seq__34493__$1);
var G__35067 = null;
var G__35068 = (0);
var G__35069 = (0);
seq__34493 = G__35066;
chunk__34495 = G__35067;
count__34496 = G__35068;
i__34497 = G__35069;
continue;
} else {
var G__35070 = cljs.core.next(seq__34493__$1);
var G__35071 = null;
var G__35072 = (0);
var G__35073 = (0);
seq__34493 = G__35070;
chunk__34495 = G__35071;
count__34496 = G__35072;
i__34497 = G__35073;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__34613){
var map__34615 = p__34613;
var map__34615__$1 = (((((!((map__34615 == null))))?(((((map__34615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34615):map__34615);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34615__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__34621,done){
var map__34622 = p__34621;
var map__34622__$1 = (((((!((map__34622 == null))))?(((((map__34622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34622):map__34622);
var msg = map__34622__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34622__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34622__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34622__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34622__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__34627){
var map__34628 = p__34627;
var map__34628__$1 = (((((!((map__34628 == null))))?(((((map__34628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34628):map__34628);
var src = map__34628__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34628__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e34634){var e = e34634;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__34636,done){
var map__34638 = p__34636;
var map__34638__$1 = (((((!((map__34638 == null))))?(((((map__34638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34638):map__34638);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34638__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__34644){
var map__34645 = p__34644;
var map__34645__$1 = (((((!((map__34645 == null))))?(((((map__34645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34645):map__34645);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34645__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34645__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__34651,done){
var map__34652 = p__34651;
var map__34652__$1 = (((((!((map__34652 == null))))?(((((map__34652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34652):map__34652);
var msg = map__34652__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34652__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__34656_35101 = type;
var G__34656_35102__$1 = (((G__34656_35101 instanceof cljs.core.Keyword))?G__34656_35101.fqn:null);
switch (G__34656_35102__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__34661 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__34662 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__34663 = "POST";
var G__34664 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__34665 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__34661,G__34662,G__34663,G__34664,G__34665);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__34672 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__34671 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__34671.cljs$core$IFn$_invoke$arity$1 ? fexpr__34671.cljs$core$IFn$_invoke$arity$1(G__34672) : fexpr__34671.call(null,G__34672));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e34683){var e = e34683;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35110 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35110)){
var s_35111 = temp__5735__auto___35110;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_35111.onclose = (function (e){
return null;
}));

s_35111.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
