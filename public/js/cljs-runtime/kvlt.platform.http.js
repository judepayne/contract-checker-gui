goog.provide('kvlt.platform.http');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('clojure.string');
goog.require('kvlt.util');
goog.require('promesa.core');
goog.require('kvlt.platform.xhr');
goog.require('kvlt.middleware.util');
kvlt.platform.http.__GT_response = (function kvlt$platform$http$__GT_response(req,m){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(m,cljs.core.assoc,new cljs.core.Keyword("kvlt","request","kvlt/request",1769844894),req);
});
kvlt.platform.http.error__GT_map = (function kvlt$platform$http$error__GT_map(e){
var code = (function (){var or__4131__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.code);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),code,new cljs.core.Keyword(null,"error","error",-978969032),code,new cljs.core.Keyword(null,"message","message",-406056002),e.message,new cljs.core.Keyword(null,"status","status",-1997798413),(0)], null);
});
kvlt.platform.http.compose_url = (function kvlt$platform$http$compose_url(p__46599){
var map__46600 = p__46599;
var map__46600__$1 = (((((!((map__46600 == null))))?(((((map__46600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46600):map__46600);
var req = map__46600__$1;
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46600__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
var server_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46600__$1,new cljs.core.Keyword(null,"server-port","server-port",663745648));
return [cljs.core.name((function (){var G__46614 = new cljs.core.Keyword(null,"scheme","scheme",90199613);
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__46614) : req.call(null,G__46614));
})()),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__46615 = new cljs.core.Keyword(null,"server-name","server-name",-1012104295);
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__46615) : req.call(null,G__46615));
})()),(cljs.core.truth_(server_port)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(server_port)].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__46616 = new cljs.core.Keyword(null,"uri","uri",-774711847);
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__46616) : req.call(null,G__46616));
})()),(cljs.core.truth_(query_string)?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join(''):null)].join('');
});
kvlt.platform.http.req__GT_node = (function kvlt$platform$http$req__GT_node(p__46624){
var map__46625 = p__46624;
var map__46625__$1 = (((((!((map__46625 == null))))?(((((map__46625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46625):map__46625);
var req = map__46625__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,new cljs.core.Keyword("kvlt.platform","timeout","kvlt.platform/timeout",-642501720));
var insecure_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46625__$1,new cljs.core.Keyword("kvlt.platform","insecure?","kvlt.platform/insecure?",-167892337));
var G__46627 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),kvlt.platform.http.compose_url(req),new cljs.core.Keyword(null,"method","method",55703592),clojure.string.upper_case(cljs.core.name(new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(req))),new cljs.core.Keyword(null,"headers","headers",-835030129),(function (){var G__46633 = new cljs.core.Keyword(null,"headers","headers",-835030129);
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__46633) : req.call(null,G__46633));
})(),new cljs.core.Keyword(null,"encoding","encoding",1728578272),null,new cljs.core.Keyword(null,"gzip","gzip",1373113296),true], null);
var G__46627__$1 = (cljs.core.truth_(body)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46627,new cljs.core.Keyword(null,"body","body",-2049205669),body):G__46627);
var G__46627__$2 = (cljs.core.truth_(timeout)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46627__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout):G__46627__$1);
if(cljs.core.truth_(insecure_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46627__$2,new cljs.core.Keyword(null,"rejectUnauthorized","rejectUnauthorized",-358838576),false);
} else {
return G__46627__$2;
}
});
kvlt.platform.http.maybe_encode = (function kvlt$platform$http$maybe_encode(buffer,as,headers){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(as,new cljs.core.Keyword(null,"byte-array","byte-array",369158537))){
return buffer;
} else {
var cs = kvlt.middleware.util.charset(new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(headers));
return buffer.toString(cs);
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs")){
var request_BANG__46694 = require("request");
kvlt.platform.http.request_node_BANG_ = ((function (request_BANG__46694){
return (function kvlt$platform$http$request_node_BANG_(req){
return promesa.core.promise(((function (request_BANG__46694){
return (function (resolve,_){
var respond = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(resolve,((function (request_BANG__46694){
return (function (p1__46639_SHARP_){
return kvlt.platform.http.__GT_response(req,p1__46639_SHARP_);
});})(request_BANG__46694))
);
var G__46644 = cljs.core.clj__GT_js(kvlt.platform.http.req__GT_node(req));
var G__46645 = ((function (G__46644,respond,request_BANG__46694){
return (function (error,node_resp,buffer){
if(cljs.core.truth_(error)){
var G__46646 = kvlt.platform.http.error__GT_map(error);
return (respond.cljs$core$IFn$_invoke$arity$1 ? respond.cljs$core$IFn$_invoke$arity$1(G__46646) : respond.call(null,G__46646));
} else {
var headers = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node_resp.headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var resp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"status","status",-1997798413),node_resp.statusCode,new cljs.core.Keyword(null,"body","body",-2049205669),kvlt.platform.http.maybe_encode(buffer,(function (){var G__46648 = new cljs.core.Keyword(null,"as","as",1148689641);
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__46648) : req.call(null,G__46648));
})(),headers)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kvlt.platform.http",null,61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (headers,resp,G__46644,respond,request_BANG__46694){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received response\n",kvlt.util.pprint_str(resp)], null);
});})(headers,resp,G__46644,respond,request_BANG__46694))
,null)),null,-775999297);

return (respond.cljs$core$IFn$_invoke$arity$1 ? respond.cljs$core$IFn$_invoke$arity$1(resp) : respond.call(null,resp));
}
});})(G__46644,respond,request_BANG__46694))
;
return (request_BANG__46694.cljs$core$IFn$_invoke$arity$2 ? request_BANG__46694.cljs$core$IFn$_invoke$arity$2(G__46644,G__46645) : request_BANG__46694.call(null,G__46644,G__46645));
});})(request_BANG__46694))
);
});})(request_BANG__46694))
;
} else {
}
kvlt.platform.http.request_BANG_ = (function kvlt$platform$http$request_BANG_(req){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kvlt.platform.http",null,65,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Issuing request\n",kvlt.util.pprint_str(req)], null);
}),null)),null,707244195);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs")){
return kvlt.platform.http.request_node_BANG_(req);
} else {
return kvlt.platform.xhr.request_BANG_(req);
}
});

//# sourceMappingURL=kvlt.platform.http.js.map
