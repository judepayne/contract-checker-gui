goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.impl.proto');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_(false);
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler38609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.impl.proto.ICancellable}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler38609 = (function (cur,done_QMARK_,cancelled,meta38610){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta38610 = meta38610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
(promesa.impl.scheduler.t_promesa$impl$scheduler38609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38611,meta38610__$1){
var self__ = this;
var _38611__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler38609(self__.cur,self__.done_QMARK_,self__.cancelled,meta38610__$1));
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38611){
var self__ = this;
var _38611__$1 = this;
return self__.meta38610;
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.done_QMARK_);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.prototype.promesa$impl$proto$ICancellable$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.prototype.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cancelled);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.prototype.promesa$impl$proto$ICancellable$_cancel$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_(self__.cancelled,true);

return clearTimeout(self__.cur);
}
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta38610","meta38610",670665495,null)], null);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.cljs$lang$type = true);

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler38609");

(promesa.impl.scheduler.t_promesa$impl$scheduler38609.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler38609");
}));

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler38609.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler38609 = (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler38609(cur__$1,done_QMARK___$1,cancelled__$1,meta38610){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler38609(cur__$1,done_QMARK___$1,cancelled__$1,meta38610));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler38609(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler38618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {promesa.impl.proto.IScheduler}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler38618 = (function (meta38619){
this.meta38619 = meta38619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.impl.scheduler.t_promesa$impl$scheduler38618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38620,meta38619__$1){
var self__ = this;
var _38620__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler38618(meta38619__$1));
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38620){
var self__ = this;
var _38620__$1 = this;
return self__.meta38619;
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38618.prototype.promesa$impl$proto$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.scheduler.t_promesa$impl$scheduler38618.prototype.promesa$impl$proto$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_(false);
var task = (function (){
try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {cljs.core.vreset_BANG_(done_QMARK_,true);
}});
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task(cur,done_QMARK_);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38619","meta38619",-1111480296,null)], null);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler38618.cljs$lang$type = true);

(promesa.impl.scheduler.t_promesa$impl$scheduler38618.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler38618");

(promesa.impl.scheduler.t_promesa$impl$scheduler38618.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler38618");
}));

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler38618.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler38618 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler38618(meta38619){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler38618(meta38619));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler38618(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._PLUS_scheduler_PLUS_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler();
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.impl.proto._schedule(cljs.core.deref(promesa.impl.scheduler._PLUS_scheduler_PLUS_),ms,func);
});

//# sourceMappingURL=promesa.impl.scheduler.js.map
