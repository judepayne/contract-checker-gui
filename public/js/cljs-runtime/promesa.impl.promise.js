goog.provide('promesa.impl.promise');
goog.require('cljs.core');
goog.require('org.bluebird');
goog.require('promesa.impl.proto');
promesa.impl.promise.Promise = Promise.noConflict();
promesa.impl.promise.Promise.config(({"cancellation": true, "warnings": false}));
(promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$_cancel$arity$1 = (function (it){
var it__$1 = this;
return it__$1.cancel();
}));

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isCancelled();
}));

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then((function (p1__38605_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38605_SHARP_) : cb.call(null,p1__38605_SHARP_));
}));
}));

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then((function (p1__38606_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38606_SHARP_) : cb.call(null,p1__38606_SHARP_));
}));
}));

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch((function (p1__38607_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38607_SHARP_) : cb.call(null,p1__38607_SHARP_));
}));
}));

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.reason();
} else {
return it__$1.value();
}
}));

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
}));

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
}));

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_pending_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isPending();
}));
goog.object.set(promesa.impl.proto.IPromise,"_",true);

var G__38615_38647 = promesa.impl.proto._map;
var G__38616_38648 = "_";
var G__38617_38649 = (function (it,cb){
return promesa.impl.proto._map((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});
goog.object.set(G__38615_38647,G__38616_38648,G__38617_38649);

var G__38621_38650 = promesa.impl.proto._bind;
var G__38622_38651 = "_";
var G__38623_38652 = (function (it,cb){
return promesa.impl.proto._bind((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});
goog.object.set(G__38621_38650,G__38622_38651,G__38623_38652);

var G__38624_38653 = promesa.impl.proto._catch;
var G__38625_38654 = "_";
var G__38626_38655 = (function (it,cb){
return promesa.impl.proto._catch((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});
goog.object.set(G__38624_38653,G__38625_38654,G__38626_38655);
promesa.impl.promise.resolved = (function promesa$impl$promise$resolved(v){
return promesa.impl.promise.Promise.resolve(v);
});
promesa.impl.promise.rejected = (function promesa$impl$promise$rejected(v){
return promesa.impl.promise.Promise.reject(v);
});
goog.object.set(promesa.impl.proto.IPromiseFactory,"function",true);

var G__38629_38656 = promesa.impl.proto._promise;
var G__38630_38657 = "function";
var G__38631_38658 = (function (func){
return (new promesa.impl.promise.Promise(func));
});
goog.object.set(G__38629_38656,G__38630_38657,G__38631_38658);

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(Error.prototype.promesa$impl$proto$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$impl$proto$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.promise.rejected(e__$1);
}));

goog.object.set(promesa.impl.proto.IPromiseFactory,"object",true);

var G__38632_38659 = promesa.impl.proto._promise;
var G__38633_38660 = "object";
var G__38634_38661 = (function (v){
return promesa.impl.promise.resolved(v);
});
goog.object.set(G__38632_38659,G__38633_38660,G__38634_38661);

goog.object.set(promesa.impl.proto.IPromiseFactory,"number",true);

var G__38635_38662 = promesa.impl.proto._promise;
var G__38636_38663 = "number";
var G__38637_38664 = (function (v){
return promesa.impl.promise.resolved(v);
});
goog.object.set(G__38635_38662,G__38636_38663,G__38637_38664);

goog.object.set(promesa.impl.proto.IPromiseFactory,"boolean",true);

var G__38638_38665 = promesa.impl.proto._promise;
var G__38639_38666 = "boolean";
var G__38640_38667 = (function (v){
return promesa.impl.promise.resolved(v);
});
goog.object.set(G__38638_38665,G__38639_38666,G__38640_38667);

goog.object.set(promesa.impl.proto.IPromiseFactory,"string",true);

var G__38641_38668 = promesa.impl.proto._promise;
var G__38642_38669 = "string";
var G__38643_38670 = (function (v){
return promesa.impl.promise.resolved(v);
});
goog.object.set(G__38641_38668,G__38642_38669,G__38643_38670);

goog.object.set(promesa.impl.proto.IPromiseFactory,"null",true);

var G__38644_38671 = promesa.impl.proto._promise;
var G__38645_38672 = "null";
var G__38646_38673 = (function (v){
return promesa.impl.promise.resolved(v);
});
goog.object.set(G__38644_38671,G__38645_38672,G__38646_38673);
promesa.impl.promise.promise__GT_str = (function promesa$impl$promise$promise__GT_str(p){
return ["#<Promise[",(cljs.core.truth_(promesa.impl.proto._pending_QMARK_(p))?"~":(cljs.core.truth_(promesa.impl.proto._rejected_QMARK_(p))?["error=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract(p))].join(''):["value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract(p))].join('')
)),"]>"].join('');
});
(promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.promise.js.map
