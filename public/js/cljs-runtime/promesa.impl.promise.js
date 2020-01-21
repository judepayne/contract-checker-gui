goog.provide('promesa.impl.promise');
goog.require('cljs.core');
goog.require('org.bluebird');
goog.require('promesa.impl.proto');
promesa.impl.promise.Promise = Promise.noConflict();
promesa.impl.promise.Promise.config(({"cancellation": true, "warnings": false}));
promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$_cancel$arity$1 = (function (it){
var it__$1 = this;
return it__$1.cancel();
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isCancelled();
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__38222_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38222_SHARP_) : cb.call(null,p1__38222_SHARP_));
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__38223_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38223_SHARP_) : cb.call(null,p1__38223_SHARP_));
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(((function (it__$1){
return (function (p1__38224_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38224_SHARP_) : cb.call(null,p1__38224_SHARP_));
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.reason();
} else {
return it__$1.value();
}
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_pending_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isPending();
});
goog.object.set(promesa.impl.proto.IPromise,"_",true);

var G__38245_38296 = promesa.impl.proto._map;
var G__38246_38297 = "_";
var G__38247_38298 = ((function (G__38245_38296,G__38246_38297){
return (function (it,cb){
return promesa.impl.proto._map((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__38245_38296,G__38246_38297))
;
goog.object.set(G__38245_38296,G__38246_38297,G__38247_38298);

var G__38248_38299 = promesa.impl.proto._bind;
var G__38249_38300 = "_";
var G__38250_38301 = ((function (G__38248_38299,G__38249_38300){
return (function (it,cb){
return promesa.impl.proto._bind((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__38248_38299,G__38249_38300))
;
goog.object.set(G__38248_38299,G__38249_38300,G__38250_38301);

var G__38251_38305 = promesa.impl.proto._catch;
var G__38252_38306 = "_";
var G__38253_38307 = ((function (G__38251_38305,G__38252_38306){
return (function (it,cb){
return promesa.impl.proto._catch((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__38251_38305,G__38252_38306))
;
goog.object.set(G__38251_38305,G__38252_38306,G__38253_38307);
promesa.impl.promise.resolved = (function promesa$impl$promise$resolved(v){
return promesa.impl.promise.Promise.resolve(v);
});
promesa.impl.promise.rejected = (function promesa$impl$promise$rejected(v){
return promesa.impl.promise.Promise.reject(v);
});
goog.object.set(promesa.impl.proto.IPromiseFactory,"function",true);

var G__38258_38313 = promesa.impl.proto._promise;
var G__38259_38314 = "function";
var G__38260_38315 = ((function (G__38258_38313,G__38259_38314){
return (function (func){
return (new promesa.impl.promise.Promise(func));
});})(G__38258_38313,G__38259_38314))
;
goog.object.set(G__38258_38313,G__38259_38314,G__38260_38315);

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

Error.prototype.promesa$impl$proto$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$impl$proto$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.promise.rejected(e__$1);
});

goog.object.set(promesa.impl.proto.IPromiseFactory,"object",true);

var G__38273_38318 = promesa.impl.proto._promise;
var G__38274_38319 = "object";
var G__38275_38320 = ((function (G__38273_38318,G__38274_38319){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38273_38318,G__38274_38319))
;
goog.object.set(G__38273_38318,G__38274_38319,G__38275_38320);

goog.object.set(promesa.impl.proto.IPromiseFactory,"number",true);

var G__38276_38321 = promesa.impl.proto._promise;
var G__38277_38322 = "number";
var G__38278_38323 = ((function (G__38276_38321,G__38277_38322){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38276_38321,G__38277_38322))
;
goog.object.set(G__38276_38321,G__38277_38322,G__38278_38323);

goog.object.set(promesa.impl.proto.IPromiseFactory,"boolean",true);

var G__38279_38324 = promesa.impl.proto._promise;
var G__38280_38325 = "boolean";
var G__38281_38326 = ((function (G__38279_38324,G__38280_38325){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38279_38324,G__38280_38325))
;
goog.object.set(G__38279_38324,G__38280_38325,G__38281_38326);

goog.object.set(promesa.impl.proto.IPromiseFactory,"string",true);

var G__38282_38328 = promesa.impl.proto._promise;
var G__38283_38329 = "string";
var G__38284_38330 = ((function (G__38282_38328,G__38283_38329){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38282_38328,G__38283_38329))
;
goog.object.set(G__38282_38328,G__38283_38329,G__38284_38330);

goog.object.set(promesa.impl.proto.IPromiseFactory,"null",true);

var G__38285_38331 = promesa.impl.proto._promise;
var G__38286_38332 = "null";
var G__38287_38333 = ((function (G__38285_38331,G__38286_38332){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38285_38331,G__38286_38332))
;
goog.object.set(G__38285_38331,G__38286_38332,G__38287_38333);
promesa.impl.promise.promise__GT_str = (function promesa$impl$promise$promise__GT_str(p){
return ["#<Promise[",(cljs.core.truth_(promesa.impl.proto._pending_QMARK_(p))?"~":(cljs.core.truth_(promesa.impl.proto._rejected_QMARK_(p))?["error=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract(p))].join(''):["value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract(p))].join('')
)),"]>"].join('');
});
promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise.promise__GT_str(p__$1));
});

//# sourceMappingURL=promesa.impl.promise.js.map
