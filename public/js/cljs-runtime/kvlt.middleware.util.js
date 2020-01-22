goog.provide('kvlt.middleware.util');
goog.require('cljs.core');
goog.require('kvlt.platform.util');
goog.require('cats.labs.promise');
goog.require('clojure.string');
goog.require('cats.core');
goog.require('taoensso.timbre');
goog.require('goog.crypt.base64');
kvlt.middleware.util.__GT_content_type = (function kvlt$middleware$util$__GT_content_type(var_args){
var G__46610 = arguments.length;
switch (G__46610) {
case 1:
return kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1 = (function (t){
if((t instanceof cljs.core.Keyword)){
var major = (function (){var or__4185__auto__ = cljs.core.namespace(t);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"application","application",551185447);
}
})();
return [cljs.core.name(major),"/",cljs.core.name(t)].join('');
} else {
return t;
}
}));

(kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$2 = (function (t,charset){
var G__46621 = kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(charset)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46621),"; charset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(charset)].join('');
} else {
return G__46621;
}
}));

(kvlt.middleware.util.__GT_content_type.cljs$lang$maxFixedArity = 2);

kvlt.middleware.util.spec__GT_fn = (function kvlt$middleware$util$spec__GT_fn(spec){
if((spec == null)){
return cljs.core.identity;
} else {
if(cljs.core.coll_QMARK_(spec)){
var vec__46633 = spec;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46633,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46633,(1),null);
return (function (p1__46623_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__46623_SHARP_,k,f);
});
} else {
return spec;

}
}
});
kvlt.middleware.util.clean_req = (function kvlt$middleware$util$clean_req(r){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword("kvlt.middleware","request","kvlt.middleware/request",-1063165256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("kvlt.middleware","response","kvlt.middleware/response",963961299),new cljs.core.Keyword("kvlt","trace","kvlt/trace",-1086193122)], 0));
});
kvlt.middleware.util.wrap_before = (function kvlt$middleware$util$wrap_before(f){
var map__46654 = cljs.core.meta(f);
var map__46654__$1 = (((((!((map__46654 == null))))?(((((map__46654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46654):map__46654);
var has = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46654__$1,new cljs.core.Keyword(null,"has","has",1466247447));
var removing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46654__$1,new cljs.core.Keyword(null,"removing","removing",1104822312));
var f__$1 = (cljs.core.truth_(has)?(function (p__46659){
var map__46661 = p__46659;
var map__46661__$1 = (((((!((map__46661 == null))))?(((((map__46661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46661):map__46661);
var req = map__46661__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46661__$1,has);
var G__46667 = req;
if(cljs.core.truth_(v)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46667) : f.call(null,G__46667));
} else {
return G__46667;
}
}):f);
if(cljs.core.truth_(removing)){
return (function (req){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(req) : f__$1.call(null,req)),removing);
});
} else {
return f__$1;
}
});
kvlt.middleware.util.__GT_mw = (function kvlt$middleware$util$__GT_mw(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46857 = arguments.length;
var i__4790__auto___46858 = (0);
while(true){
if((i__4790__auto___46858 < len__4789__auto___46857)){
args__4795__auto__.push((arguments[i__4790__auto___46858]));

var G__46859 = (i__4790__auto___46858 + (1));
i__4790__auto___46858 = G__46859;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic = (function (helpful_name,before,p__46685){
var vec__46686 = p__46685;
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46686,(0),null);
var after__$1 = kvlt.middleware.util.spec__GT_fn(after);
var before__$1 = kvlt.middleware.util.wrap_before(kvlt.middleware.util.spec__GT_fn(before));
return (function (issue_BANG_){
return (function (p__46691){
var map__46692 = p__46691;
var map__46692__$1 = (((((!((map__46692 == null))))?(((((map__46692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46692):map__46692);
var req = map__46692__$1;
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46692__$1,new cljs.core.Keyword("kvlt","trace","kvlt/trace",-1086193122));
var req__$1 = (before__$1.cljs$core$IFn$_invoke$arity$1 ? before__$1.cljs$core$IFn$_invoke$arity$1(req) : before__$1.call(null,req));
var req__$2 = (function (){var G__46696 = req__$1;
if(cljs.core.truth_(trace)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46696,new cljs.core.Keyword("kvlt.middleware","request","kvlt.middleware/request",-1063165256),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpful_name,kvlt.middleware.util.clean_req(req__$1)], null));
} else {
return G__46696;
}
})();
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((issue_BANG_.cljs$core$IFn$_invoke$arity$1 ? issue_BANG_.cljs$core$IFn$_invoke$arity$1(req__$2) : issue_BANG_.call(null,req__$2)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.return$,after__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.return$,(function (p1__46674_SHARP_){
var G__46699 = p1__46674_SHARP_;
if(cljs.core.truth_(trace)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46699,new cljs.core.Keyword("kvlt.middleware","response","kvlt.middleware/response",963961299),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpful_name,kvlt.middleware.util.clean_req(req__$2)], null));
} else {
return G__46699;
}
}))], 0));
});
});
}));

(kvlt.middleware.util.__GT_mw.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kvlt.middleware.util.__GT_mw.cljs$lang$applyTo = (function (seq46675){
var G__46676 = cljs.core.first(seq46675);
var seq46675__$1 = cljs.core.next(seq46675);
var G__46677 = cljs.core.first(seq46675__$1);
var seq46675__$2 = cljs.core.next(seq46675__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46676,G__46677,seq46675__$2);
}));

kvlt.middleware.util.url_decode = (function kvlt$middleware$util$url_decode(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46867 = arguments.length;
var i__4790__auto___46868 = (0);
while(true){
if((i__4790__auto___46868 < len__4789__auto___46867)){
args__4795__auto__.push((arguments[i__4790__auto___46868]));

var G__46870 = (i__4790__auto___46868 + (1));
i__4790__auto___46868 = G__46870;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(kvlt.middleware.util.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__46716){
var vec__46717 = p__46716;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46717,(0),null);
var encoding__$1 = (function (){var or__4185__auto__ = encoding;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "UTF-8";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("UTF-8",encoding__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.middleware.util",null,82,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url-decode ignoring encoding",encoding__$1], null);
}),null)),null,-60910473);
} else {
}

return decodeURIComponent(encoded);
}));

(kvlt.middleware.util.url_decode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kvlt.middleware.util.url_decode.cljs$lang$applyTo = (function (seq46709){
var G__46710 = cljs.core.first(seq46709);
var seq46709__$1 = cljs.core.next(seq46709);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46710,seq46709__$1);
}));

kvlt.middleware.util.url_encode = (function kvlt$middleware$util$url_encode(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46871 = arguments.length;
var i__4790__auto___46872 = (0);
while(true){
if((i__4790__auto___46872 < len__4789__auto___46871)){
args__4795__auto__.push((arguments[i__4790__auto___46872]));

var G__46873 = (i__4790__auto___46872 + (1));
i__4790__auto___46872 = G__46873;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__46730){
var vec__46731 = p__46730;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46731,(0),null);
var encoding__$1 = (function (){var or__4185__auto__ = encoding;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "UTF-8";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("UTF-8",encoding__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.middleware.util",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url-encode ignoring encoding",encoding__$1], null);
}),null)),null,-779417942);
} else {
}

return encodeURIComponent(unencoded);
}));

(kvlt.middleware.util.url_encode.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kvlt.middleware.util.url_encode.cljs$lang$applyTo = (function (seq46728){
var G__46729 = cljs.core.first(seq46728);
var seq46728__$1 = cljs.core.next(seq46728);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46729,seq46728__$1);
}));

/**
 * Takes a raw url path or query and url-encodes any illegal characters.
 *   Minimizes ambiguity by encoding space to %20.
 */
kvlt.middleware.util.url_encode_illegal_characters = (function kvlt$middleware$util$url_encode_illegal_characters(path_or_query){
if(cljs.core.truth_(path_or_query)){
return clojure.string.replace(clojure.string.replace(path_or_query," ","%20"),/[^a-zA-Z0-9\.\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:\@\\/\%\?]/,kvlt.middleware.util.url_encode);
} else {
return null;
}
});
/**
 * Parse `s` as an RFC 2616 media type.
 */
kvlt.middleware.util.parse_content_type = (function kvlt$middleware$util$parse_content_type(s){
var temp__5733__auto__ = cljs.core.re_matches(/\s*(([^\/]+)\/([^ ;]+))\s*(\s*;.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(1))),new cljs.core.Keyword(null,"content-type-params","content-type-params",-199252295),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__46737){
var vec__46738 = p__46737;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46738,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46738,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k)),clojure.string.trim(v)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46736_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__46736_SHARP_,/=/);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.identity(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(4))),/\s*;\s*/))))], 0)))], null);
} else {
return null;
}
});
var pattern_46874 = /charset\s*=\s*([^\s]+)/i;
kvlt.middleware.util.charset = (function kvlt$middleware$util$charset(var_args){
var args__4795__auto__ = [];
var len__4789__auto___46875 = arguments.length;
var i__4790__auto___46876 = (0);
while(true){
if((i__4790__auto___46876 < len__4789__auto___46875)){
args__4795__auto__.push((arguments[i__4790__auto___46876]));

var G__46877 = (i__4790__auto___46876 + (1));
i__4790__auto___46876 = G__46877;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.charset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(kvlt.middleware.util.charset.cljs$core$IFn$_invoke$arity$variadic = (function (content_type,p__46743){
var vec__46744 = p__46743;
var map__46747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46744,(0),null);
var map__46747__$1 = (((((!((map__46747 == null))))?(((((map__46747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46747):map__46747);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46747__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var charset = (function (){var G__46749 = content_type;
var G__46749__$1 = (((G__46749 == null))?null:cljs.core.name(G__46749));
var G__46749__$2 = (((G__46749__$1 == null))?null:cljs.core.re_find(pattern_46874,G__46749__$1));
if((G__46749__$2 == null)){
return null;
} else {
return cljs.core.second(G__46749__$2);
}
})();
var or__4185__auto__ = charset;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = fallback;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return "UTF-8";
}
}
}));

(kvlt.middleware.util.charset.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kvlt.middleware.util.charset.cljs$lang$applyTo = (function (seq46741){
var G__46742 = cljs.core.first(seq46741);
var seq46741__$1 = cljs.core.next(seq46741);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46742,seq46741__$1);
}));

kvlt.middleware.util.string__GT_base64 = (function kvlt$middleware$util$string__GT_base64(x){
return goog.crypt.base64.encodeString(x);
});
kvlt.middleware.util.basic_auth = (function kvlt$middleware$util$basic_auth(v){
var vec__46750 = ((cljs.core.map_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46753 = new cljs.core.Keyword(null,"username","username",1605666410);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__46753) : v.call(null,G__46753));
})(),(function (){var G__46754 = new cljs.core.Keyword(null,"password","password",417022471);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__46754) : v.call(null,G__46754));
})()], null):v);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46750,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46750,(1),null);
return ["Basic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.string__GT_base64([cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)].join('')))].join('');
});
kvlt.middleware.util.parse_url = (function kvlt$middleware$util$parse_url(url){
var url__$1 = (new goog.Uri(url));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(url__$1.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),url__$1.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),(function (){var temp__5735__auto__ = url__$1.getPort();
if(cljs.core.truth_(temp__5735__auto__)){
var port = temp__5735__auto__;
if((port > (0))){
return port;
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"uri","uri",-774711847),(function (){var G__46755 = url__$1;
var G__46755__$1 = (((G__46755 == null))?null:G__46755.getPath());
if((G__46755__$1 == null)){
return null;
} else {
return kvlt.middleware.util.url_encode_illegal_characters(G__46755__$1);
}
})(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),(function (){var G__46756 = url__$1;
var G__46756__$1 = (((G__46756 == null))?null:G__46756.getQuery());
var G__46756__$2 = (((G__46756__$1 == null))?null:cljs.core.not_empty(G__46756__$1));
if((G__46756__$2 == null)){
return null;
} else {
return kvlt.middleware.util.url_encode_illegal_characters(G__46756__$2);
}
})(),new cljs.core.Keyword(null,"user-info","user-info",-1061909920),(function (){var G__46757 = url__$1;
var G__46757__$1 = (((G__46757 == null))?null:G__46757.getUserInfo());
var G__46757__$2 = (((G__46757__$1 == null))?null:cljs.core.not_empty(G__46757__$1));
if((G__46757__$2 == null)){
return null;
} else {
return kvlt.middleware.util.url_decode(G__46757__$2);
}
})()], null);
});

//# sourceMappingURL=kvlt.middleware.util.js.map
