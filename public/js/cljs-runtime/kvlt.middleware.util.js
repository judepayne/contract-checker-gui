goog.provide('kvlt.middleware.util');
goog.require('cljs.core');
goog.require('kvlt.platform.util');
goog.require('cats.labs.promise');
goog.require('clojure.string');
goog.require('cats.core');
goog.require('taoensso.timbre');
goog.require('goog.crypt.base64');
kvlt.middleware.util.__GT_content_type = (function kvlt$middleware$util$__GT_content_type(var_args){
var G__46435 = arguments.length;
switch (G__46435) {
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

kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1 = (function (t){
if((t instanceof cljs.core.Keyword)){
var major = (function (){var or__4131__auto__ = cljs.core.namespace(t);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"application","application",551185447);
}
})();
return [cljs.core.name(major),"/",cljs.core.name(t)].join('');
} else {
return t;
}
});

kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$2 = (function (t,charset){
var G__46443 = kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(charset)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46443),"; charset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(charset)].join('');
} else {
return G__46443;
}
});

kvlt.middleware.util.__GT_content_type.cljs$lang$maxFixedArity = 2;

kvlt.middleware.util.spec__GT_fn = (function kvlt$middleware$util$spec__GT_fn(spec){
if((spec == null)){
return cljs.core.identity;
} else {
if(cljs.core.coll_QMARK_(spec)){
var vec__46451 = spec;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46451,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46451,(1),null);
return ((function (vec__46451,k,f){
return (function (p1__46447_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__46447_SHARP_,k,f);
});
;})(vec__46451,k,f))
} else {
return spec;

}
}
});
kvlt.middleware.util.clean_req = (function kvlt$middleware$util$clean_req(r){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(r,new cljs.core.Keyword("kvlt.middleware","request","kvlt.middleware/request",-1063165256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("kvlt.middleware","response","kvlt.middleware/response",963961299),new cljs.core.Keyword("kvlt","trace","kvlt/trace",-1086193122)], 0));
});
kvlt.middleware.util.wrap_before = (function kvlt$middleware$util$wrap_before(f){
var map__46460 = cljs.core.meta(f);
var map__46460__$1 = (((((!((map__46460 == null))))?(((((map__46460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46460):map__46460);
var has = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46460__$1,new cljs.core.Keyword(null,"has","has",1466247447));
var removing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46460__$1,new cljs.core.Keyword(null,"removing","removing",1104822312));
var f__$1 = (cljs.core.truth_(has)?((function (map__46460,map__46460__$1,has,removing){
return (function (p__46463){
var map__46464 = p__46463;
var map__46464__$1 = (((((!((map__46464 == null))))?(((((map__46464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46464):map__46464);
var req = map__46464__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46464__$1,has);
var G__46469 = req;
if(cljs.core.truth_(v)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46469) : f.call(null,G__46469));
} else {
return G__46469;
}
});})(map__46460,map__46460__$1,has,removing))
:f);
if(cljs.core.truth_(removing)){
return ((function (map__46460,map__46460__$1,has,removing,f__$1){
return (function (req){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(req) : f__$1.call(null,req)),removing);
});
;})(map__46460,map__46460__$1,has,removing,f__$1))
} else {
return f__$1;
}
});
kvlt.middleware.util.__GT_mw = (function kvlt$middleware$util$__GT_mw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46771 = arguments.length;
var i__4731__auto___46772 = (0);
while(true){
if((i__4731__auto___46772 < len__4730__auto___46771)){
args__4736__auto__.push((arguments[i__4731__auto___46772]));

var G__46773 = (i__4731__auto___46772 + (1));
i__4731__auto___46772 = G__46773;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic = (function (helpful_name,before,p__46481){
var vec__46482 = p__46481;
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46482,(0),null);
var after__$1 = kvlt.middleware.util.spec__GT_fn(after);
var before__$1 = kvlt.middleware.util.wrap_before(kvlt.middleware.util.spec__GT_fn(before));
return ((function (after__$1,before__$1,vec__46482,after){
return (function (issue_BANG_){
return ((function (after__$1,before__$1,vec__46482,after){
return (function (p__46485){
var map__46486 = p__46485;
var map__46486__$1 = (((((!((map__46486 == null))))?(((((map__46486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46486):map__46486);
var req = map__46486__$1;
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46486__$1,new cljs.core.Keyword("kvlt","trace","kvlt/trace",-1086193122));
var req__$1 = (before__$1.cljs$core$IFn$_invoke$arity$1 ? before__$1.cljs$core$IFn$_invoke$arity$1(req) : before__$1.call(null,req));
var req__$2 = (function (){var G__46488 = req__$1;
if(cljs.core.truth_(trace)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46488,new cljs.core.Keyword("kvlt.middleware","request","kvlt.middleware/request",-1063165256),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpful_name,kvlt.middleware.util.clean_req(req__$1)], null));
} else {
return G__46488;
}
})();
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((issue_BANG_.cljs$core$IFn$_invoke$arity$1 ? issue_BANG_.cljs$core$IFn$_invoke$arity$1(req__$2) : issue_BANG_.call(null,req__$2)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.return$,after__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.return$,((function (req__$1,req__$2,map__46486,map__46486__$1,req,trace,after__$1,before__$1,vec__46482,after){
return (function (p1__46475_SHARP_){
var G__46489 = p1__46475_SHARP_;
if(cljs.core.truth_(trace)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__46489,new cljs.core.Keyword("kvlt.middleware","response","kvlt.middleware/response",963961299),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpful_name,kvlt.middleware.util.clean_req(req__$2)], null));
} else {
return G__46489;
}
});})(req__$1,req__$2,map__46486,map__46486__$1,req,trace,after__$1,before__$1,vec__46482,after))
)], 0));
});
;})(after__$1,before__$1,vec__46482,after))
});
;})(after__$1,before__$1,vec__46482,after))
});

kvlt.middleware.util.__GT_mw.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.middleware.util.__GT_mw.cljs$lang$applyTo = (function (seq46476){
var G__46477 = cljs.core.first(seq46476);
var seq46476__$1 = cljs.core.next(seq46476);
var G__46479 = cljs.core.first(seq46476__$1);
var seq46476__$2 = cljs.core.next(seq46476__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46477,G__46479,seq46476__$2);
});

kvlt.middleware.util.url_decode = (function kvlt$middleware$util$url_decode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46805 = arguments.length;
var i__4731__auto___46807 = (0);
while(true){
if((i__4731__auto___46807 < len__4730__auto___46805)){
args__4736__auto__.push((arguments[i__4731__auto___46807]));

var G__46808 = (i__4731__auto___46807 + (1));
i__4731__auto___46807 = G__46808;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.util.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__46505){
var vec__46506 = p__46505;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46506,(0),null);
var encoding__$1 = (function (){var or__4131__auto__ = encoding;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "UTF-8";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("UTF-8",encoding__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.middleware.util",null,82,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (encoding__$1,vec__46506,encoding){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url-decode ignoring encoding",encoding__$1], null);
});})(encoding__$1,vec__46506,encoding))
,null)),null,-467500852);
} else {
}

return decodeURIComponent(encoded);
});

kvlt.middleware.util.url_decode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.url_decode.cljs$lang$applyTo = (function (seq46497){
var G__46498 = cljs.core.first(seq46497);
var seq46497__$1 = cljs.core.next(seq46497);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46498,seq46497__$1);
});

kvlt.middleware.util.url_encode = (function kvlt$middleware$util$url_encode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46812 = arguments.length;
var i__4731__auto___46813 = (0);
while(true){
if((i__4731__auto___46813 < len__4730__auto___46812)){
args__4736__auto__.push((arguments[i__4731__auto___46813]));

var G__46816 = (i__4731__auto___46813 + (1));
i__4731__auto___46813 = G__46816;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__46526){
var vec__46527 = p__46526;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46527,(0),null);
var encoding__$1 = (function (){var or__4131__auto__ = encoding;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "UTF-8";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("UTF-8",encoding__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.middleware.util",null,92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (encoding__$1,vec__46527,encoding){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url-encode ignoring encoding",encoding__$1], null);
});})(encoding__$1,vec__46527,encoding))
,null)),null,599187079);
} else {
}

return encodeURIComponent(unencoded);
});

kvlt.middleware.util.url_encode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.url_encode.cljs$lang$applyTo = (function (seq46518){
var G__46520 = cljs.core.first(seq46518);
var seq46518__$1 = cljs.core.next(seq46518);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46520,seq46518__$1);
});

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
var temp__5718__auto__ = cljs.core.re_matches(/\s*(([^\/]+)\/([^ ;]+))\s*(\s*;.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(1))),new cljs.core.Keyword(null,"content-type-params","content-type-params",-199252295),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (m,temp__5718__auto__){
return (function (p__46538){
var vec__46539 = p__46538;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46539,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k)),clojure.string.trim(v)], null);
});})(m,temp__5718__auto__))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (m,temp__5718__auto__){
return (function (p1__46534_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__46534_SHARP_,/=/);
});})(m,temp__5718__auto__))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.identity(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(4))),/\s*;\s*/))))], 0)))], null);
} else {
return null;
}
});
var pattern_46828 = /charset\s*=\s*([^\s]+)/i;
kvlt.middleware.util.charset = ((function (pattern_46828){
return (function kvlt$middleware$util$charset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46829 = arguments.length;
var i__4731__auto___46830 = (0);
while(true){
if((i__4731__auto___46830 < len__4730__auto___46829)){
args__4736__auto__.push((arguments[i__4731__auto___46830]));

var G__46831 = (i__4731__auto___46830 + (1));
i__4731__auto___46830 = G__46831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.charset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});})(pattern_46828))
;

kvlt.middleware.util.charset.cljs$core$IFn$_invoke$arity$variadic = ((function (pattern_46828){
return (function (content_type,p__46544){
var vec__46545 = p__46544;
var map__46548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46545,(0),null);
var map__46548__$1 = (((((!((map__46548 == null))))?(((((map__46548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46548):map__46548);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46548__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var charset = (function (){var G__46553 = content_type;
var G__46553__$1 = (((G__46553 == null))?null:cljs.core.name(G__46553));
var G__46553__$2 = (((G__46553__$1 == null))?null:cljs.core.re_find(pattern_46828,G__46553__$1));
if((G__46553__$2 == null)){
return null;
} else {
return cljs.core.second(G__46553__$2);
}
})();
var or__4131__auto__ = charset;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = fallback;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return "UTF-8";
}
}
});})(pattern_46828))
;

kvlt.middleware.util.charset.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.charset.cljs$lang$applyTo = ((function (pattern_46828){
return (function (seq46542){
var G__46543 = cljs.core.first(seq46542);
var seq46542__$1 = cljs.core.next(seq46542);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46543,seq46542__$1);
});})(pattern_46828))
;

kvlt.middleware.util.string__GT_base64 = (function kvlt$middleware$util$string__GT_base64(x){
return goog.crypt.base64.encodeString(x);
});
kvlt.middleware.util.basic_auth = (function kvlt$middleware$util$basic_auth(v){
var vec__46554 = ((cljs.core.map_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46557 = new cljs.core.Keyword(null,"username","username",1605666410);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__46557) : v.call(null,G__46557));
})(),(function (){var G__46558 = new cljs.core.Keyword(null,"password","password",417022471);
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__46558) : v.call(null,G__46558));
})()], null):v);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46554,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46554,(1),null);
return ["Basic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.string__GT_base64([cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)].join('')))].join('');
});
kvlt.middleware.util.parse_url = (function kvlt$middleware$util$parse_url(url){
var url__$1 = (new goog.Uri(url));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(url__$1.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),url__$1.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),(function (){var temp__5720__auto__ = url__$1.getPort();
if(cljs.core.truth_(temp__5720__auto__)){
var port = temp__5720__auto__;
if((port > (0))){
return port;
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"uri","uri",-774711847),(function (){var G__46566 = url__$1;
var G__46566__$1 = (((G__46566 == null))?null:G__46566.getPath());
if((G__46566__$1 == null)){
return null;
} else {
return kvlt.middleware.util.url_encode_illegal_characters(G__46566__$1);
}
})(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),(function (){var G__46567 = url__$1;
var G__46567__$1 = (((G__46567 == null))?null:G__46567.getQuery());
var G__46567__$2 = (((G__46567__$1 == null))?null:cljs.core.not_empty(G__46567__$1));
if((G__46567__$2 == null)){
return null;
} else {
return kvlt.middleware.util.url_encode_illegal_characters(G__46567__$2);
}
})(),new cljs.core.Keyword(null,"user-info","user-info",-1061909920),(function (){var G__46574 = url__$1;
var G__46574__$1 = (((G__46574 == null))?null:G__46574.getUserInfo());
var G__46574__$2 = (((G__46574__$1 == null))?null:cljs.core.not_empty(G__46574__$1));
if((G__46574__$2 == null)){
return null;
} else {
return kvlt.middleware.util.url_decode(G__46574__$2);
}
})()], null);
});

//# sourceMappingURL=kvlt.middleware.util.js.map
