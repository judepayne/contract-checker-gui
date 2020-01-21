goog.provide('kvlt.middleware.params');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('kvlt.middleware.util');
goog.require('kvlt.platform.util');
kvlt.middleware.params.query_string_PLUS_encoding = (function kvlt$middleware$params$query_string_PLUS_encoding(params,encoding){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__46592){
var vec__46593 = p__46592;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46593,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (vec__46593,k,v){
return (function (p1__46589_SHARP_,p2__46590_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic(cljs.core.name(p1__46589_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__46590_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)))].join('');
});})(vec__46593,k,v))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic(cljs.core.name(k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)))].join('')], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)));
});
kvlt.middleware.params.query_string = (function kvlt$middleware$params$query_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46700 = arguments.length;
var i__4731__auto___46701 = (0);
while(true){
if((i__4731__auto___46701 < len__4730__auto___46700)){
args__4736__auto__.push((arguments[i__4731__auto___46701]));

var G__46702 = (i__4731__auto___46701 + (1));
i__4731__auto___46701 = G__46702;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic = (function (params,p__46617){
var vec__46618 = p__46617;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46618,(0),null);
var encoding = kvlt.middleware.util.charset(content_type);
return kvlt.middleware.params.query_string_PLUS_encoding(params,encoding);
});

kvlt.middleware.params.query_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.params.query_string.cljs$lang$applyTo = (function (seq46605){
var G__46606 = cljs.core.first(seq46605);
var seq46605__$1 = cljs.core.next(seq46605);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46606,seq46605__$1);
});

/**
 * Rename request's `:query` key to `:query-params`
 */
kvlt.middleware.params.short_query = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"short-query","short-query",1146323267),cljs.core.with_meta((function (p__46628){
var map__46631 = p__46628;
var map__46631__$1 = (((((!((map__46631 == null))))?(((((map__46631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46631):map__46631);
var m = map__46631__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46631__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"query-params","query-params",900640534),query);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"query","query",-1288509510)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
/**
 * Given a request having a `:query-params` map, append to the URL's
 *   query (`:query-string`) its URL-encoded string representation. 
 */
kvlt.middleware.params.query = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"query","query",-1288509510),(function (p__46636){
var map__46637 = p__46636;
var map__46637__$1 = (((((!((map__46637 == null))))?(((((map__46637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46637):map__46637);
var req = map__46637__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46637__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46637__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"x-www-form-urlencoded","x-www-form-urlencoded",-297860611));
var G__46642 = req;
if(cljs.core.truth_(query_params)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46642,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((function (G__46642,map__46637,map__46637__$1,req,query_params,content_type){
return (function (old,new$){
if((!(cljs.core.empty_QMARK_(old)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(old),"&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new$)].join('');
} else {
return new$;
}
});})(G__46642,map__46637,map__46637__$1,req,query_params,content_type))
,kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic(query_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(content_type)], 0)));
} else {
return G__46642;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.params !== 'undefined') && (typeof kvlt.middleware.params.coerce_form_params !== 'undefined')){
} else {
/**
 * Turn a `:form-params` map into a string request body, dispatching
 *   on the qualified content type, as a namespaced
 *   keyword (e.g. `:application/edn`).
 * 
 *   The baseline implementation (for
 *   `:application/x-www-form-urlencoded`) looks at the request's
 *   `:form-param-encoding` to determine the character set of the output
 *   string, on platforms where this is supported.
 */
kvlt.middleware.params.coerce_form_params = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__46647 = cljs.core.get_global_hierarchy;
return (fexpr__46647.cljs$core$IFn$_invoke$arity$0 ? fexpr__46647.cljs$core$IFn$_invoke$arity$0() : fexpr__46647.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.middleware.params","coerce-form-params"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p__46649){
var map__46650 = p__46649;
var map__46650__$1 = (((((!((map__46650 == null))))?(((((map__46650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46650):map__46650);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46650__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(content_type));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.params.coerce_form_params.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("application","x-www-form-urlencoded","application/x-www-form-urlencoded",-1692717907),(function (p__46659){
var map__46660 = p__46659;
var map__46660__$1 = (((((!((map__46660 == null))))?(((((map__46660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46660):map__46660);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46660__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46660__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var form_param_encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46660__$1,new cljs.core.Keyword(null,"form-param-encoding","form-param-encoding",1350836033));
if(cljs.core.truth_(form_param_encoding)){
return kvlt.middleware.params.query_string_PLUS_encoding(form_params,form_param_encoding);
} else {
return kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic(form_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(content_type)], 0));
}
}));
kvlt.middleware.params.coerce_form_params.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("application","edn","application/edn",-63927515),(function (p__46666){
var map__46667 = p__46666;
var map__46667__$1 = (((((!((map__46667 == null))))?(((((map__46667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46667):map__46667);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46667__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_params], 0));
}));
kvlt.middleware.params.coerce_form_params.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("application","json","application/json",1747896298),(function (p__46669){
var map__46671 = p__46669;
var map__46671__$1 = (((((!((map__46671 == null))))?(((((map__46671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46671):map__46671);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46671__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
return kvlt.platform.util.encode_json(form_params);
}));
/**
 * Rename request's `:form` key to `:form-params`
 */
kvlt.middleware.params.short_form = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"short-form","short-form",-316565438),cljs.core.with_meta((function (p__46677){
var map__46679 = p__46677;
var map__46679__$1 = (((((!((map__46679 == null))))?(((((map__46679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46679):map__46679);
var m = map__46679__$1;
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46679__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"form-params","form-params",1884296467),form);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"form","form",-1624062471)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
/**
 * Given a request having a `:form-params` map and a method of `POST`,
 *   `PUT` or `PATCH`, use [[coerce-form-params]] to generate a request
 *   body.  If no content type is supplied, a default of
 *   `application/x-www-form-urlencoded` is associated with the request,
 *   and passed to [[coerce-form-params]].
 * 
 *   Assumes placement after [[kvlt.middleware/method]]
 */
kvlt.middleware.params.form = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"form","form",-1624062471),(function (p__46682){
var map__46683 = p__46682;
var map__46683__$1 = (((((!((map__46683 == null))))?(((((map__46683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46683):map__46683);
var req = map__46683__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46683__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46683__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"x-www-form-urlencoded","x-www-form-urlencoded",-297860611));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46683__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4120__auto__ = form_params;
if(cljs.core.truth_(and__4120__auto__)){
var fexpr__46693 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__46693.cljs$core$IFn$_invoke$arity$1 ? fexpr__46693.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__46693.call(null,request_method));
} else {
return and__4120__auto__;
}
})())){
var content_type__$1 = kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(content_type);
var req__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req__$1,new cljs.core.Keyword(null,"body","body",-2049205669),(kvlt.middleware.params.coerce_form_params.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.params.coerce_form_params.cljs$core$IFn$_invoke$arity$1(req__$1) : kvlt.middleware.params.coerce_form_params.call(null,req__$1)));
} else {
return req;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));

//# sourceMappingURL=kvlt.middleware.params.js.map
