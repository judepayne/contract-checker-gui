goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__29422 = arguments.length;
switch (G__29422) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29425 = (function (f,blockable,meta29426){
this.f = f;
this.blockable = blockable;
this.meta29426 = meta29426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29427,meta29426__$1){
var self__ = this;
var _29427__$1 = this;
return (new cljs.core.async.t_cljs$core$async29425(self__.f,self__.blockable,meta29426__$1));
}));

(cljs.core.async.t_cljs$core$async29425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29427){
var self__ = this;
var _29427__$1 = this;
return self__.meta29426;
}));

(cljs.core.async.t_cljs$core$async29425.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29425.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29425.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async29425.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async29425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29426","meta29426",1063380621,null)], null);
}));

(cljs.core.async.t_cljs$core$async29425.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29425");

(cljs.core.async.t_cljs$core$async29425.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29425");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29425.
 */
cljs.core.async.__GT_t_cljs$core$async29425 = (function cljs$core$async$__GT_t_cljs$core$async29425(f__$1,blockable__$1,meta29426){
return (new cljs.core.async.t_cljs$core$async29425(f__$1,blockable__$1,meta29426));
});

}

return (new cljs.core.async.t_cljs$core$async29425(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29506 = arguments.length;
switch (G__29506) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29514 = arguments.length;
switch (G__29514) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29534 = arguments.length;
switch (G__29534) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32095 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32095) : fn1.call(null,val_32095));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32095) : fn1.call(null,val_32095));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29557 = arguments.length;
switch (G__29557) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32113 = n;
var x_32114 = (0);
while(true){
if((x_32114 < n__4666__auto___32113)){
(a[x_32114] = x_32114);

var G__32115 = (x_32114 + (1));
x_32114 = G__32115;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29575 = (function (flag,meta29576){
this.flag = flag;
this.meta29576 = meta29576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29577,meta29576__$1){
var self__ = this;
var _29577__$1 = this;
return (new cljs.core.async.t_cljs$core$async29575(self__.flag,meta29576__$1));
}));

(cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29577){
var self__ = this;
var _29577__$1 = this;
return self__.meta29576;
}));

(cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29576","meta29576",1012996552,null)], null);
}));

(cljs.core.async.t_cljs$core$async29575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29575");

(cljs.core.async.t_cljs$core$async29575.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29575.
 */
cljs.core.async.__GT_t_cljs$core$async29575 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29575(flag__$1,meta29576){
return (new cljs.core.async.t_cljs$core$async29575(flag__$1,meta29576));
});

}

return (new cljs.core.async.t_cljs$core$async29575(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29595 = (function (flag,cb,meta29596){
this.flag = flag;
this.cb = cb;
this.meta29596 = meta29596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29597,meta29596__$1){
var self__ = this;
var _29597__$1 = this;
return (new cljs.core.async.t_cljs$core$async29595(self__.flag,self__.cb,meta29596__$1));
}));

(cljs.core.async.t_cljs$core$async29595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29597){
var self__ = this;
var _29597__$1 = this;
return self__.meta29596;
}));

(cljs.core.async.t_cljs$core$async29595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29596","meta29596",-1124949293,null)], null);
}));

(cljs.core.async.t_cljs$core$async29595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29595");

(cljs.core.async.t_cljs$core$async29595.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29595.
 */
cljs.core.async.__GT_t_cljs$core$async29595 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29595(flag__$1,cb__$1,meta29596){
return (new cljs.core.async.t_cljs$core$async29595(flag__$1,cb__$1,meta29596));
});

}

return (new cljs.core.async.t_cljs$core$async29595(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29608_SHARP_){
var G__29618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29608_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29618) : fret.call(null,G__29618));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29609_SHARP_){
var G__29619 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29609_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29619) : fret.call(null,G__29619));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32151 = (i + (1));
i = G__32151;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32163 = arguments.length;
var i__4790__auto___32164 = (0);
while(true){
if((i__4790__auto___32164 < len__4789__auto___32163)){
args__4795__auto__.push((arguments[i__4790__auto___32164]));

var G__32165 = (i__4790__auto___32164 + (1));
i__4790__auto___32164 = G__32165;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29627){
var map__29628 = p__29627;
var map__29628__$1 = (((((!((map__29628 == null))))?(((((map__29628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29628):map__29628);
var opts = map__29628__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29624){
var G__29625 = cljs.core.first(seq29624);
var seq29624__$1 = cljs.core.next(seq29624);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29625,seq29624__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29637 = arguments.length;
switch (G__29637) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29262__auto___32181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_29700){
var state_val_29701 = (state_29700[(1)]);
if((state_val_29701 === (7))){
var inst_29696 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29710_32184 = state_29700__$1;
(statearr_29710_32184[(2)] = inst_29696);

(statearr_29710_32184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (1))){
var state_29700__$1 = state_29700;
var statearr_29713_32187 = state_29700__$1;
(statearr_29713_32187[(2)] = null);

(statearr_29713_32187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (4))){
var inst_29664 = (state_29700[(7)]);
var inst_29664__$1 = (state_29700[(2)]);
var inst_29670 = (inst_29664__$1 == null);
var state_29700__$1 = (function (){var statearr_29718 = state_29700;
(statearr_29718[(7)] = inst_29664__$1);

return statearr_29718;
})();
if(cljs.core.truth_(inst_29670)){
var statearr_29719_32188 = state_29700__$1;
(statearr_29719_32188[(1)] = (5));

} else {
var statearr_29720_32189 = state_29700__$1;
(statearr_29720_32189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (13))){
var state_29700__$1 = state_29700;
var statearr_29721_32194 = state_29700__$1;
(statearr_29721_32194[(2)] = null);

(statearr_29721_32194[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (6))){
var inst_29664 = (state_29700[(7)]);
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29700__$1,(11),to,inst_29664);
} else {
if((state_val_29701 === (3))){
var inst_29698 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29700__$1,inst_29698);
} else {
if((state_val_29701 === (12))){
var state_29700__$1 = state_29700;
var statearr_29729_32208 = state_29700__$1;
(statearr_29729_32208[(2)] = null);

(statearr_29729_32208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (2))){
var state_29700__$1 = state_29700;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29700__$1,(4),from);
} else {
if((state_val_29701 === (11))){
var inst_29685 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
if(cljs.core.truth_(inst_29685)){
var statearr_29730_32217 = state_29700__$1;
(statearr_29730_32217[(1)] = (12));

} else {
var statearr_29731_32218 = state_29700__$1;
(statearr_29731_32218[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (9))){
var state_29700__$1 = state_29700;
var statearr_29732_32222 = state_29700__$1;
(statearr_29732_32222[(2)] = null);

(statearr_29732_32222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (5))){
var state_29700__$1 = state_29700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29734_32226 = state_29700__$1;
(statearr_29734_32226[(1)] = (8));

} else {
var statearr_29735_32231 = state_29700__$1;
(statearr_29735_32231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (14))){
var inst_29694 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29736_32232 = state_29700__$1;
(statearr_29736_32232[(2)] = inst_29694);

(statearr_29736_32232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (10))){
var inst_29682 = (state_29700[(2)]);
var state_29700__$1 = state_29700;
var statearr_29737_32239 = state_29700__$1;
(statearr_29737_32239[(2)] = inst_29682);

(statearr_29737_32239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29701 === (8))){
var inst_29676 = cljs.core.async.close_BANG_(to);
var state_29700__$1 = state_29700;
var statearr_29739_32246 = state_29700__$1;
(statearr_29739_32246[(2)] = inst_29676);

(statearr_29739_32246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_29741 = [null,null,null,null,null,null,null,null];
(statearr_29741[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_29741[(1)] = (1));

return statearr_29741;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_29700){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_29700);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e29742){if((e29742 instanceof Object)){
var ex__29029__auto__ = e29742;
var statearr_29743_32274 = state_29700;
(statearr_29743_32274[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32275 = state_29700;
state_29700 = G__32275;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_29700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_29700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_29744 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_29744[(6)] = c__29262__auto___32181);

return statearr_29744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29754){
var vec__29756 = p__29754;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29756,(1),null);
var job = vec__29756;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29262__auto___32280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_29764){
var state_val_29765 = (state_29764[(1)]);
if((state_val_29765 === (1))){
var state_29764__$1 = state_29764;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29764__$1,(2),res,v);
} else {
if((state_val_29765 === (2))){
var inst_29761 = (state_29764[(2)]);
var inst_29762 = cljs.core.async.close_BANG_(res);
var state_29764__$1 = (function (){var statearr_29767 = state_29764;
(statearr_29767[(7)] = inst_29761);

return statearr_29767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29764__$1,inst_29762);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0 = (function (){
var statearr_29769 = [null,null,null,null,null,null,null,null];
(statearr_29769[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__);

(statearr_29769[(1)] = (1));

return statearr_29769;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1 = (function (state_29764){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_29764);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e29770){if((e29770 instanceof Object)){
var ex__29029__auto__ = e29770;
var statearr_29771_32281 = state_29764;
(statearr_29771_32281[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32282 = state_29764;
state_29764 = G__32282;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = function(state_29764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1.call(this,state_29764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_29775 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_29775[(6)] = c__29262__auto___32280);

return statearr_29775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29778){
var vec__29780 = p__29778;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29780,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29780,(1),null);
var job = vec__29780;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32289 = n;
var __32290 = (0);
while(true){
if((__32290 < n__4666__auto___32289)){
var G__29785_32292 = type;
var G__29785_32293__$1 = (((G__29785_32292 instanceof cljs.core.Keyword))?G__29785_32292.fqn:null);
switch (G__29785_32293__$1) {
case "compute":
var c__29262__auto___32297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32290,c__29262__auto___32297,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async){
return (function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = ((function (__32290,c__29262__auto___32297,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async){
return (function (state_29798){
var state_val_29799 = (state_29798[(1)]);
if((state_val_29799 === (1))){
var state_29798__$1 = state_29798;
var statearr_29800_32303 = state_29798__$1;
(statearr_29800_32303[(2)] = null);

(statearr_29800_32303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (2))){
var state_29798__$1 = state_29798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29798__$1,(4),jobs);
} else {
if((state_val_29799 === (3))){
var inst_29796 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29798__$1,inst_29796);
} else {
if((state_val_29799 === (4))){
var inst_29788 = (state_29798[(2)]);
var inst_29789 = process(inst_29788);
var state_29798__$1 = state_29798;
if(cljs.core.truth_(inst_29789)){
var statearr_29801_32305 = state_29798__$1;
(statearr_29801_32305[(1)] = (5));

} else {
var statearr_29802_32306 = state_29798__$1;
(statearr_29802_32306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (5))){
var state_29798__$1 = state_29798;
var statearr_29805_32308 = state_29798__$1;
(statearr_29805_32308[(2)] = null);

(statearr_29805_32308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (6))){
var state_29798__$1 = state_29798;
var statearr_29807_32309 = state_29798__$1;
(statearr_29807_32309[(2)] = null);

(statearr_29807_32309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29799 === (7))){
var inst_29794 = (state_29798[(2)]);
var state_29798__$1 = state_29798;
var statearr_29808_32311 = state_29798__$1;
(statearr_29808_32311[(2)] = inst_29794);

(statearr_29808_32311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32290,c__29262__auto___32297,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async))
;
return ((function (__32290,switch__29025__auto__,c__29262__auto___32297,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0 = (function (){
var statearr_29811 = [null,null,null,null,null,null,null];
(statearr_29811[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__);

(statearr_29811[(1)] = (1));

return statearr_29811;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1 = (function (state_29798){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_29798);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e29815){if((e29815 instanceof Object)){
var ex__29029__auto__ = e29815;
var statearr_29816_32313 = state_29798;
(statearr_29816_32313[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29815;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32314 = state_29798;
state_29798 = G__32314;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = function(state_29798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1.call(this,state_29798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__;
})()
;})(__32290,switch__29025__auto__,c__29262__auto___32297,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async))
})();
var state__29264__auto__ = (function (){var statearr_29819 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_29819[(6)] = c__29262__auto___32297);

return statearr_29819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
});})(__32290,c__29262__auto___32297,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async))
);


break;
case "async":
var c__29262__auto___32318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32290,c__29262__auto___32318,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async){
return (function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = ((function (__32290,c__29262__auto___32318,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async){
return (function (state_29836){
var state_val_29837 = (state_29836[(1)]);
if((state_val_29837 === (1))){
var state_29836__$1 = state_29836;
var statearr_29842_32321 = state_29836__$1;
(statearr_29842_32321[(2)] = null);

(statearr_29842_32321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (2))){
var state_29836__$1 = state_29836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29836__$1,(4),jobs);
} else {
if((state_val_29837 === (3))){
var inst_29831 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29836__$1,inst_29831);
} else {
if((state_val_29837 === (4))){
var inst_29823 = (state_29836[(2)]);
var inst_29824 = async(inst_29823);
var state_29836__$1 = state_29836;
if(cljs.core.truth_(inst_29824)){
var statearr_29846_32324 = state_29836__$1;
(statearr_29846_32324[(1)] = (5));

} else {
var statearr_29848_32326 = state_29836__$1;
(statearr_29848_32326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (5))){
var state_29836__$1 = state_29836;
var statearr_29849_32328 = state_29836__$1;
(statearr_29849_32328[(2)] = null);

(statearr_29849_32328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (6))){
var state_29836__$1 = state_29836;
var statearr_29851_32329 = state_29836__$1;
(statearr_29851_32329[(2)] = null);

(statearr_29851_32329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (7))){
var inst_29829 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
var statearr_29853_32330 = state_29836__$1;
(statearr_29853_32330[(2)] = inst_29829);

(statearr_29853_32330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32290,c__29262__auto___32318,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async))
;
return ((function (__32290,switch__29025__auto__,c__29262__auto___32318,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0 = (function (){
var statearr_29855 = [null,null,null,null,null,null,null];
(statearr_29855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__);

(statearr_29855[(1)] = (1));

return statearr_29855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1 = (function (state_29836){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_29836);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e29856){if((e29856 instanceof Object)){
var ex__29029__auto__ = e29856;
var statearr_29857_32336 = state_29836;
(statearr_29857_32336[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29856;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32337 = state_29836;
state_29836 = G__32337;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = function(state_29836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1.call(this,state_29836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__;
})()
;})(__32290,switch__29025__auto__,c__29262__auto___32318,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async))
})();
var state__29264__auto__ = (function (){var statearr_29861 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_29861[(6)] = c__29262__auto___32318);

return statearr_29861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
});})(__32290,c__29262__auto___32318,G__29785_32292,G__29785_32293__$1,n__4666__auto___32289,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29785_32293__$1)].join('')));

}

var G__32338 = (__32290 + (1));
__32290 = G__32338;
continue;
} else {
}
break;
}

var c__29262__auto___32339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_29891){
var state_val_29892 = (state_29891[(1)]);
if((state_val_29892 === (7))){
var inst_29887 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29898_32341 = state_29891__$1;
(statearr_29898_32341[(2)] = inst_29887);

(statearr_29898_32341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (1))){
var state_29891__$1 = state_29891;
var statearr_29903_32343 = state_29891__$1;
(statearr_29903_32343[(2)] = null);

(statearr_29903_32343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (4))){
var inst_29872 = (state_29891[(7)]);
var inst_29872__$1 = (state_29891[(2)]);
var inst_29873 = (inst_29872__$1 == null);
var state_29891__$1 = (function (){var statearr_29904 = state_29891;
(statearr_29904[(7)] = inst_29872__$1);

return statearr_29904;
})();
if(cljs.core.truth_(inst_29873)){
var statearr_29905_32344 = state_29891__$1;
(statearr_29905_32344[(1)] = (5));

} else {
var statearr_29906_32345 = state_29891__$1;
(statearr_29906_32345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (6))){
var inst_29877 = (state_29891[(8)]);
var inst_29872 = (state_29891[(7)]);
var inst_29877__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29879 = [inst_29872,inst_29877__$1];
var inst_29880 = (new cljs.core.PersistentVector(null,2,(5),inst_29878,inst_29879,null));
var state_29891__$1 = (function (){var statearr_29907 = state_29891;
(statearr_29907[(8)] = inst_29877__$1);

return statearr_29907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29891__$1,(8),jobs,inst_29880);
} else {
if((state_val_29892 === (3))){
var inst_29889 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29891__$1,inst_29889);
} else {
if((state_val_29892 === (2))){
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29891__$1,(4),from);
} else {
if((state_val_29892 === (9))){
var inst_29884 = (state_29891[(2)]);
var state_29891__$1 = (function (){var statearr_29908 = state_29891;
(statearr_29908[(9)] = inst_29884);

return statearr_29908;
})();
var statearr_29909_32349 = state_29891__$1;
(statearr_29909_32349[(2)] = null);

(statearr_29909_32349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (5))){
var inst_29875 = cljs.core.async.close_BANG_(jobs);
var state_29891__$1 = state_29891;
var statearr_29910_32352 = state_29891__$1;
(statearr_29910_32352[(2)] = inst_29875);

(statearr_29910_32352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (8))){
var inst_29877 = (state_29891[(8)]);
var inst_29882 = (state_29891[(2)]);
var state_29891__$1 = (function (){var statearr_29911 = state_29891;
(statearr_29911[(10)] = inst_29882);

return statearr_29911;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29891__$1,(9),results,inst_29877);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0 = (function (){
var statearr_29916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29916[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__);

(statearr_29916[(1)] = (1));

return statearr_29916;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1 = (function (state_29891){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_29891);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e29921){if((e29921 instanceof Object)){
var ex__29029__auto__ = e29921;
var statearr_29922_32354 = state_29891;
(statearr_29922_32354[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32355 = state_29891;
state_29891 = G__32355;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = function(state_29891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1.call(this,state_29891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_29924 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_29924[(6)] = c__29262__auto___32339);

return statearr_29924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


var c__29262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_29974){
var state_val_29975 = (state_29974[(1)]);
if((state_val_29975 === (7))){
var inst_29967 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_29978_32359 = state_29974__$1;
(statearr_29978_32359[(2)] = inst_29967);

(statearr_29978_32359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (20))){
var state_29974__$1 = state_29974;
var statearr_29979_32361 = state_29974__$1;
(statearr_29979_32361[(2)] = null);

(statearr_29979_32361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (1))){
var state_29974__$1 = state_29974;
var statearr_29980_32362 = state_29974__$1;
(statearr_29980_32362[(2)] = null);

(statearr_29980_32362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (4))){
var inst_29931 = (state_29974[(7)]);
var inst_29931__$1 = (state_29974[(2)]);
var inst_29932 = (inst_29931__$1 == null);
var state_29974__$1 = (function (){var statearr_29981 = state_29974;
(statearr_29981[(7)] = inst_29931__$1);

return statearr_29981;
})();
if(cljs.core.truth_(inst_29932)){
var statearr_29982_32363 = state_29974__$1;
(statearr_29982_32363[(1)] = (5));

} else {
var statearr_29983_32364 = state_29974__$1;
(statearr_29983_32364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (15))){
var inst_29948 = (state_29974[(8)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29974__$1,(18),to,inst_29948);
} else {
if((state_val_29975 === (21))){
var inst_29962 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_29984_32365 = state_29974__$1;
(statearr_29984_32365[(2)] = inst_29962);

(statearr_29984_32365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (13))){
var inst_29964 = (state_29974[(2)]);
var state_29974__$1 = (function (){var statearr_29985 = state_29974;
(statearr_29985[(9)] = inst_29964);

return statearr_29985;
})();
var statearr_29986_32366 = state_29974__$1;
(statearr_29986_32366[(2)] = null);

(statearr_29986_32366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (6))){
var inst_29931 = (state_29974[(7)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29974__$1,(11),inst_29931);
} else {
if((state_val_29975 === (17))){
var inst_29957 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
if(cljs.core.truth_(inst_29957)){
var statearr_29989_32368 = state_29974__$1;
(statearr_29989_32368[(1)] = (19));

} else {
var statearr_29990_32370 = state_29974__$1;
(statearr_29990_32370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (3))){
var inst_29969 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29974__$1,inst_29969);
} else {
if((state_val_29975 === (12))){
var inst_29944 = (state_29974[(10)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29974__$1,(14),inst_29944);
} else {
if((state_val_29975 === (2))){
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29974__$1,(4),results);
} else {
if((state_val_29975 === (19))){
var state_29974__$1 = state_29974;
var statearr_29998_32373 = state_29974__$1;
(statearr_29998_32373[(2)] = null);

(statearr_29998_32373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (11))){
var inst_29944 = (state_29974[(2)]);
var state_29974__$1 = (function (){var statearr_29999 = state_29974;
(statearr_29999[(10)] = inst_29944);

return statearr_29999;
})();
var statearr_30000_32374 = state_29974__$1;
(statearr_30000_32374[(2)] = null);

(statearr_30000_32374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (9))){
var state_29974__$1 = state_29974;
var statearr_30002_32378 = state_29974__$1;
(statearr_30002_32378[(2)] = null);

(statearr_30002_32378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (5))){
var state_29974__$1 = state_29974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30004_32379 = state_29974__$1;
(statearr_30004_32379[(1)] = (8));

} else {
var statearr_30005_32380 = state_29974__$1;
(statearr_30005_32380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (14))){
var inst_29948 = (state_29974[(8)]);
var inst_29948__$1 = (state_29974[(2)]);
var inst_29950 = (inst_29948__$1 == null);
var inst_29951 = cljs.core.not(inst_29950);
var state_29974__$1 = (function (){var statearr_30007 = state_29974;
(statearr_30007[(8)] = inst_29948__$1);

return statearr_30007;
})();
if(inst_29951){
var statearr_30009_32383 = state_29974__$1;
(statearr_30009_32383[(1)] = (15));

} else {
var statearr_30010_32384 = state_29974__$1;
(statearr_30010_32384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (16))){
var state_29974__$1 = state_29974;
var statearr_30012_32385 = state_29974__$1;
(statearr_30012_32385[(2)] = false);

(statearr_30012_32385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (10))){
var inst_29938 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_30013_32386 = state_29974__$1;
(statearr_30013_32386[(2)] = inst_29938);

(statearr_30013_32386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (18))){
var inst_29954 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_30015_32389 = state_29974__$1;
(statearr_30015_32389[(2)] = inst_29954);

(statearr_30015_32389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (8))){
var inst_29935 = cljs.core.async.close_BANG_(to);
var state_29974__$1 = state_29974;
var statearr_30017_32390 = state_29974__$1;
(statearr_30017_32390[(2)] = inst_29935);

(statearr_30017_32390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0 = (function (){
var statearr_30022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30022[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__);

(statearr_30022[(1)] = (1));

return statearr_30022;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1 = (function (state_29974){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_29974);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e30023){if((e30023 instanceof Object)){
var ex__29029__auto__ = e30023;
var statearr_30025_32393 = state_29974;
(statearr_30025_32393[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32397 = state_29974;
state_29974 = G__32397;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__ = function(state_29974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1.call(this,state_29974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29026__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_30026 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_30026[(6)] = c__29262__auto__);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));

return c__29262__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30029 = arguments.length;
switch (G__30029) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30032 = arguments.length;
switch (G__30032) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30037 = arguments.length;
switch (G__30037) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29262__auto___32403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (7))){
var inst_30059 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30077_32404 = state_30067__$1;
(statearr_30077_32404[(2)] = inst_30059);

(statearr_30077_32404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (1))){
var state_30067__$1 = state_30067;
var statearr_30078_32405 = state_30067__$1;
(statearr_30078_32405[(2)] = null);

(statearr_30078_32405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (4))){
var inst_30040 = (state_30067[(7)]);
var inst_30040__$1 = (state_30067[(2)]);
var inst_30041 = (inst_30040__$1 == null);
var state_30067__$1 = (function (){var statearr_30079 = state_30067;
(statearr_30079[(7)] = inst_30040__$1);

return statearr_30079;
})();
if(cljs.core.truth_(inst_30041)){
var statearr_30080_32410 = state_30067__$1;
(statearr_30080_32410[(1)] = (5));

} else {
var statearr_30081_32411 = state_30067__$1;
(statearr_30081_32411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (13))){
var state_30067__$1 = state_30067;
var statearr_30085_32415 = state_30067__$1;
(statearr_30085_32415[(2)] = null);

(statearr_30085_32415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (6))){
var inst_30040 = (state_30067[(7)]);
var inst_30046 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30040) : p.call(null,inst_30040));
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30046)){
var statearr_30091_32416 = state_30067__$1;
(statearr_30091_32416[(1)] = (9));

} else {
var statearr_30092_32417 = state_30067__$1;
(statearr_30092_32417[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (3))){
var inst_30061 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30067__$1,inst_30061);
} else {
if((state_val_30068 === (12))){
var state_30067__$1 = state_30067;
var statearr_30097_32418 = state_30067__$1;
(statearr_30097_32418[(2)] = null);

(statearr_30097_32418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (2))){
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30067__$1,(4),ch);
} else {
if((state_val_30068 === (11))){
var inst_30040 = (state_30067[(7)]);
var inst_30050 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30067__$1,(8),inst_30050,inst_30040);
} else {
if((state_val_30068 === (9))){
var state_30067__$1 = state_30067;
var statearr_30104_32422 = state_30067__$1;
(statearr_30104_32422[(2)] = tc);

(statearr_30104_32422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (5))){
var inst_30043 = cljs.core.async.close_BANG_(tc);
var inst_30044 = cljs.core.async.close_BANG_(fc);
var state_30067__$1 = (function (){var statearr_30105 = state_30067;
(statearr_30105[(8)] = inst_30043);

return statearr_30105;
})();
var statearr_30106_32423 = state_30067__$1;
(statearr_30106_32423[(2)] = inst_30044);

(statearr_30106_32423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (14))){
var inst_30057 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30107_32427 = state_30067__$1;
(statearr_30107_32427[(2)] = inst_30057);

(statearr_30107_32427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (10))){
var state_30067__$1 = state_30067;
var statearr_30108_32428 = state_30067__$1;
(statearr_30108_32428[(2)] = fc);

(statearr_30108_32428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (8))){
var inst_30052 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30052)){
var statearr_30109_32429 = state_30067__$1;
(statearr_30109_32429[(1)] = (12));

} else {
var statearr_30110_32430 = state_30067__$1;
(statearr_30110_32430[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_30111 = [null,null,null,null,null,null,null,null,null];
(statearr_30111[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_30111[(1)] = (1));

return statearr_30111;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_30067){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_30067);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e30112){if((e30112 instanceof Object)){
var ex__29029__auto__ = e30112;
var statearr_30113_32434 = state_30067;
(statearr_30113_32434[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30112;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32435 = state_30067;
state_30067 = G__32435;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_30114 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_30114[(6)] = c__29262__auto___32403);

return statearr_30114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_30147){
var state_val_30148 = (state_30147[(1)]);
if((state_val_30148 === (7))){
var inst_30143 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
var statearr_30149_32438 = state_30147__$1;
(statearr_30149_32438[(2)] = inst_30143);

(statearr_30149_32438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (1))){
var inst_30123 = init;
var state_30147__$1 = (function (){var statearr_30152 = state_30147;
(statearr_30152[(7)] = inst_30123);

return statearr_30152;
})();
var statearr_30153_32439 = state_30147__$1;
(statearr_30153_32439[(2)] = null);

(statearr_30153_32439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (4))){
var inst_30126 = (state_30147[(8)]);
var inst_30126__$1 = (state_30147[(2)]);
var inst_30127 = (inst_30126__$1 == null);
var state_30147__$1 = (function (){var statearr_30154 = state_30147;
(statearr_30154[(8)] = inst_30126__$1);

return statearr_30154;
})();
if(cljs.core.truth_(inst_30127)){
var statearr_30155_32440 = state_30147__$1;
(statearr_30155_32440[(1)] = (5));

} else {
var statearr_30156_32441 = state_30147__$1;
(statearr_30156_32441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (6))){
var inst_30123 = (state_30147[(7)]);
var inst_30126 = (state_30147[(8)]);
var inst_30134 = (state_30147[(9)]);
var inst_30134__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30123,inst_30126) : f.call(null,inst_30123,inst_30126));
var inst_30135 = cljs.core.reduced_QMARK_(inst_30134__$1);
var state_30147__$1 = (function (){var statearr_30157 = state_30147;
(statearr_30157[(9)] = inst_30134__$1);

return statearr_30157;
})();
if(inst_30135){
var statearr_30158_32446 = state_30147__$1;
(statearr_30158_32446[(1)] = (8));

} else {
var statearr_30159_32447 = state_30147__$1;
(statearr_30159_32447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (3))){
var inst_30145 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30147__$1,inst_30145);
} else {
if((state_val_30148 === (2))){
var state_30147__$1 = state_30147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30147__$1,(4),ch);
} else {
if((state_val_30148 === (9))){
var inst_30134 = (state_30147[(9)]);
var inst_30123 = inst_30134;
var state_30147__$1 = (function (){var statearr_30161 = state_30147;
(statearr_30161[(7)] = inst_30123);

return statearr_30161;
})();
var statearr_30162_32451 = state_30147__$1;
(statearr_30162_32451[(2)] = null);

(statearr_30162_32451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (5))){
var inst_30123 = (state_30147[(7)]);
var state_30147__$1 = state_30147;
var statearr_30163_32452 = state_30147__$1;
(statearr_30163_32452[(2)] = inst_30123);

(statearr_30163_32452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (10))){
var inst_30141 = (state_30147[(2)]);
var state_30147__$1 = state_30147;
var statearr_30164_32457 = state_30147__$1;
(statearr_30164_32457[(2)] = inst_30141);

(statearr_30164_32457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30148 === (8))){
var inst_30134 = (state_30147[(9)]);
var inst_30137 = cljs.core.deref(inst_30134);
var state_30147__$1 = state_30147;
var statearr_30165_32458 = state_30147__$1;
(statearr_30165_32458[(2)] = inst_30137);

(statearr_30165_32458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29026__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29026__auto____0 = (function (){
var statearr_30171 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30171[(0)] = cljs$core$async$reduce_$_state_machine__29026__auto__);

(statearr_30171[(1)] = (1));

return statearr_30171;
});
var cljs$core$async$reduce_$_state_machine__29026__auto____1 = (function (state_30147){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_30147);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e30172){if((e30172 instanceof Object)){
var ex__29029__auto__ = e30172;
var statearr_30173_32462 = state_30147;
(statearr_30173_32462[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32463 = state_30147;
state_30147 = G__32463;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29026__auto__ = function(state_30147){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29026__auto____1.call(this,state_30147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29026__auto____0;
cljs$core$async$reduce_$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29026__auto____1;
return cljs$core$async$reduce_$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_30174 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_30174[(6)] = c__29262__auto__);

return statearr_30174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));

return c__29262__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_30180){
var state_val_30183 = (state_30180[(1)]);
if((state_val_30183 === (1))){
var inst_30175 = cljs.core.async.reduce(f__$1,init,ch);
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30180__$1,(2),inst_30175);
} else {
if((state_val_30183 === (2))){
var inst_30177 = (state_30180[(2)]);
var inst_30178 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30177) : f__$1.call(null,inst_30177));
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30180__$1,inst_30178);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29026__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29026__auto____0 = (function (){
var statearr_30185 = [null,null,null,null,null,null,null];
(statearr_30185[(0)] = cljs$core$async$transduce_$_state_machine__29026__auto__);

(statearr_30185[(1)] = (1));

return statearr_30185;
});
var cljs$core$async$transduce_$_state_machine__29026__auto____1 = (function (state_30180){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_30180);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e30186){if((e30186 instanceof Object)){
var ex__29029__auto__ = e30186;
var statearr_30187_32473 = state_30180;
(statearr_30187_32473[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32474 = state_30180;
state_30180 = G__32474;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29026__auto__ = function(state_30180){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29026__auto____1.call(this,state_30180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29026__auto____0;
cljs$core$async$transduce_$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29026__auto____1;
return cljs$core$async$transduce_$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_30197 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_30197[(6)] = c__29262__auto__);

return statearr_30197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));

return c__29262__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__30202 = arguments.length;
switch (G__30202) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_30235){
var state_val_30236 = (state_30235[(1)]);
if((state_val_30236 === (7))){
var inst_30217 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30238_32486 = state_30235__$1;
(statearr_30238_32486[(2)] = inst_30217);

(statearr_30238_32486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (1))){
var inst_30211 = cljs.core.seq(coll);
var inst_30212 = inst_30211;
var state_30235__$1 = (function (){var statearr_30239 = state_30235;
(statearr_30239[(7)] = inst_30212);

return statearr_30239;
})();
var statearr_30240_32490 = state_30235__$1;
(statearr_30240_32490[(2)] = null);

(statearr_30240_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (4))){
var inst_30212 = (state_30235[(7)]);
var inst_30215 = cljs.core.first(inst_30212);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30235__$1,(7),ch,inst_30215);
} else {
if((state_val_30236 === (13))){
var inst_30229 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30243_32494 = state_30235__$1;
(statearr_30243_32494[(2)] = inst_30229);

(statearr_30243_32494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (6))){
var inst_30220 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30220)){
var statearr_30244_32501 = state_30235__$1;
(statearr_30244_32501[(1)] = (8));

} else {
var statearr_30245_32502 = state_30235__$1;
(statearr_30245_32502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (3))){
var inst_30233 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30235__$1,inst_30233);
} else {
if((state_val_30236 === (12))){
var state_30235__$1 = state_30235;
var statearr_30246_32503 = state_30235__$1;
(statearr_30246_32503[(2)] = null);

(statearr_30246_32503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (2))){
var inst_30212 = (state_30235[(7)]);
var state_30235__$1 = state_30235;
if(cljs.core.truth_(inst_30212)){
var statearr_30247_32507 = state_30235__$1;
(statearr_30247_32507[(1)] = (4));

} else {
var statearr_30248_32511 = state_30235__$1;
(statearr_30248_32511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (11))){
var inst_30226 = cljs.core.async.close_BANG_(ch);
var state_30235__$1 = state_30235;
var statearr_30249_32512 = state_30235__$1;
(statearr_30249_32512[(2)] = inst_30226);

(statearr_30249_32512[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (9))){
var state_30235__$1 = state_30235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30250_32513 = state_30235__$1;
(statearr_30250_32513[(1)] = (11));

} else {
var statearr_30251_32514 = state_30235__$1;
(statearr_30251_32514[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (5))){
var inst_30212 = (state_30235[(7)]);
var state_30235__$1 = state_30235;
var statearr_30252_32515 = state_30235__$1;
(statearr_30252_32515[(2)] = inst_30212);

(statearr_30252_32515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (10))){
var inst_30231 = (state_30235[(2)]);
var state_30235__$1 = state_30235;
var statearr_30254_32517 = state_30235__$1;
(statearr_30254_32517[(2)] = inst_30231);

(statearr_30254_32517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30236 === (8))){
var inst_30212 = (state_30235[(7)]);
var inst_30222 = cljs.core.next(inst_30212);
var inst_30212__$1 = inst_30222;
var state_30235__$1 = (function (){var statearr_30255 = state_30235;
(statearr_30255[(7)] = inst_30212__$1);

return statearr_30255;
})();
var statearr_30257_32518 = state_30235__$1;
(statearr_30257_32518[(2)] = null);

(statearr_30257_32518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_30258 = [null,null,null,null,null,null,null,null];
(statearr_30258[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_30258[(1)] = (1));

return statearr_30258;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_30235){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_30235);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e30259){if((e30259 instanceof Object)){
var ex__29029__auto__ = e30259;
var statearr_30260_32519 = state_30235;
(statearr_30260_32519[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32520 = state_30235;
state_30235 = G__32520;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_30235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_30235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_30261 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_30261[(6)] = c__29262__auto__);

return statearr_30261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));

return c__29262__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30268 = (function (ch,cs,meta30269){
this.ch = ch;
this.cs = cs;
this.meta30269 = meta30269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30270,meta30269__$1){
var self__ = this;
var _30270__$1 = this;
return (new cljs.core.async.t_cljs$core$async30268(self__.ch,self__.cs,meta30269__$1));
}));

(cljs.core.async.t_cljs$core$async30268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30270){
var self__ = this;
var _30270__$1 = this;
return self__.meta30269;
}));

(cljs.core.async.t_cljs$core$async30268.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30268.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30268.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30268.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30268.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30269","meta30269",-128273198,null)], null);
}));

(cljs.core.async.t_cljs$core$async30268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30268");

(cljs.core.async.t_cljs$core$async30268.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30268.
 */
cljs.core.async.__GT_t_cljs$core$async30268 = (function cljs$core$async$mult_$___GT_t_cljs$core$async30268(ch__$1,cs__$1,meta30269){
return (new cljs.core.async.t_cljs$core$async30268(ch__$1,cs__$1,meta30269));
});

}

return (new cljs.core.async.t_cljs$core$async30268(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29262__auto___32530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_30439){
var state_val_30440 = (state_30439[(1)]);
if((state_val_30440 === (7))){
var inst_30428 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30441_32532 = state_30439__$1;
(statearr_30441_32532[(2)] = inst_30428);

(statearr_30441_32532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (20))){
var inst_30312 = (state_30439[(7)]);
var inst_30326 = cljs.core.first(inst_30312);
var inst_30327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30326,(0),null);
var inst_30328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30326,(1),null);
var state_30439__$1 = (function (){var statearr_30442 = state_30439;
(statearr_30442[(8)] = inst_30327);

return statearr_30442;
})();
if(cljs.core.truth_(inst_30328)){
var statearr_30443_32534 = state_30439__$1;
(statearr_30443_32534[(1)] = (22));

} else {
var statearr_30444_32535 = state_30439__$1;
(statearr_30444_32535[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (27))){
var inst_30281 = (state_30439[(9)]);
var inst_30358 = (state_30439[(10)]);
var inst_30360 = (state_30439[(11)]);
var inst_30366 = (state_30439[(12)]);
var inst_30366__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30358,inst_30360);
var inst_30367 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30366__$1,inst_30281,done);
var state_30439__$1 = (function (){var statearr_30445 = state_30439;
(statearr_30445[(12)] = inst_30366__$1);

return statearr_30445;
})();
if(cljs.core.truth_(inst_30367)){
var statearr_30446_32536 = state_30439__$1;
(statearr_30446_32536[(1)] = (30));

} else {
var statearr_30449_32537 = state_30439__$1;
(statearr_30449_32537[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (1))){
var state_30439__$1 = state_30439;
var statearr_30452_32538 = state_30439__$1;
(statearr_30452_32538[(2)] = null);

(statearr_30452_32538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (24))){
var inst_30312 = (state_30439[(7)]);
var inst_30333 = (state_30439[(2)]);
var inst_30334 = cljs.core.next(inst_30312);
var inst_30290 = inst_30334;
var inst_30291 = null;
var inst_30292 = (0);
var inst_30293 = (0);
var state_30439__$1 = (function (){var statearr_30455 = state_30439;
(statearr_30455[(13)] = inst_30293);

(statearr_30455[(14)] = inst_30333);

(statearr_30455[(15)] = inst_30292);

(statearr_30455[(16)] = inst_30290);

(statearr_30455[(17)] = inst_30291);

return statearr_30455;
})();
var statearr_30456_32539 = state_30439__$1;
(statearr_30456_32539[(2)] = null);

(statearr_30456_32539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (39))){
var state_30439__$1 = state_30439;
var statearr_30461_32540 = state_30439__$1;
(statearr_30461_32540[(2)] = null);

(statearr_30461_32540[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (4))){
var inst_30281 = (state_30439[(9)]);
var inst_30281__$1 = (state_30439[(2)]);
var inst_30282 = (inst_30281__$1 == null);
var state_30439__$1 = (function (){var statearr_30462 = state_30439;
(statearr_30462[(9)] = inst_30281__$1);

return statearr_30462;
})();
if(cljs.core.truth_(inst_30282)){
var statearr_30464_32542 = state_30439__$1;
(statearr_30464_32542[(1)] = (5));

} else {
var statearr_30465_32543 = state_30439__$1;
(statearr_30465_32543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (15))){
var inst_30293 = (state_30439[(13)]);
var inst_30292 = (state_30439[(15)]);
var inst_30290 = (state_30439[(16)]);
var inst_30291 = (state_30439[(17)]);
var inst_30308 = (state_30439[(2)]);
var inst_30309 = (inst_30293 + (1));
var tmp30457 = inst_30292;
var tmp30458 = inst_30290;
var tmp30459 = inst_30291;
var inst_30290__$1 = tmp30458;
var inst_30291__$1 = tmp30459;
var inst_30292__$1 = tmp30457;
var inst_30293__$1 = inst_30309;
var state_30439__$1 = (function (){var statearr_30466 = state_30439;
(statearr_30466[(13)] = inst_30293__$1);

(statearr_30466[(18)] = inst_30308);

(statearr_30466[(15)] = inst_30292__$1);

(statearr_30466[(16)] = inst_30290__$1);

(statearr_30466[(17)] = inst_30291__$1);

return statearr_30466;
})();
var statearr_30467_32547 = state_30439__$1;
(statearr_30467_32547[(2)] = null);

(statearr_30467_32547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (21))){
var inst_30337 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30471_32548 = state_30439__$1;
(statearr_30471_32548[(2)] = inst_30337);

(statearr_30471_32548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (31))){
var inst_30366 = (state_30439[(12)]);
var inst_30370 = done(null);
var inst_30371 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30366);
var state_30439__$1 = (function (){var statearr_30478 = state_30439;
(statearr_30478[(19)] = inst_30370);

return statearr_30478;
})();
var statearr_30479_32551 = state_30439__$1;
(statearr_30479_32551[(2)] = inst_30371);

(statearr_30479_32551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (32))){
var inst_30357 = (state_30439[(20)]);
var inst_30359 = (state_30439[(21)]);
var inst_30358 = (state_30439[(10)]);
var inst_30360 = (state_30439[(11)]);
var inst_30373 = (state_30439[(2)]);
var inst_30374 = (inst_30360 + (1));
var tmp30468 = inst_30357;
var tmp30469 = inst_30359;
var tmp30470 = inst_30358;
var inst_30357__$1 = tmp30468;
var inst_30358__$1 = tmp30470;
var inst_30359__$1 = tmp30469;
var inst_30360__$1 = inst_30374;
var state_30439__$1 = (function (){var statearr_30481 = state_30439;
(statearr_30481[(20)] = inst_30357__$1);

(statearr_30481[(21)] = inst_30359__$1);

(statearr_30481[(10)] = inst_30358__$1);

(statearr_30481[(11)] = inst_30360__$1);

(statearr_30481[(22)] = inst_30373);

return statearr_30481;
})();
var statearr_30482_32554 = state_30439__$1;
(statearr_30482_32554[(2)] = null);

(statearr_30482_32554[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (40))){
var inst_30396 = (state_30439[(23)]);
var inst_30401 = done(null);
var inst_30404 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30396);
var state_30439__$1 = (function (){var statearr_30483 = state_30439;
(statearr_30483[(24)] = inst_30401);

return statearr_30483;
})();
var statearr_30484_32562 = state_30439__$1;
(statearr_30484_32562[(2)] = inst_30404);

(statearr_30484_32562[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (33))){
var inst_30381 = (state_30439[(25)]);
var inst_30383 = cljs.core.chunked_seq_QMARK_(inst_30381);
var state_30439__$1 = state_30439;
if(inst_30383){
var statearr_30485_32563 = state_30439__$1;
(statearr_30485_32563[(1)] = (36));

} else {
var statearr_30486_32564 = state_30439__$1;
(statearr_30486_32564[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (13))){
var inst_30302 = (state_30439[(26)]);
var inst_30305 = cljs.core.async.close_BANG_(inst_30302);
var state_30439__$1 = state_30439;
var statearr_30493_32565 = state_30439__$1;
(statearr_30493_32565[(2)] = inst_30305);

(statearr_30493_32565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (22))){
var inst_30327 = (state_30439[(8)]);
var inst_30330 = cljs.core.async.close_BANG_(inst_30327);
var state_30439__$1 = state_30439;
var statearr_30494_32566 = state_30439__$1;
(statearr_30494_32566[(2)] = inst_30330);

(statearr_30494_32566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (36))){
var inst_30381 = (state_30439[(25)]);
var inst_30389 = cljs.core.chunk_first(inst_30381);
var inst_30390 = cljs.core.chunk_rest(inst_30381);
var inst_30391 = cljs.core.count(inst_30389);
var inst_30357 = inst_30390;
var inst_30358 = inst_30389;
var inst_30359 = inst_30391;
var inst_30360 = (0);
var state_30439__$1 = (function (){var statearr_30500 = state_30439;
(statearr_30500[(20)] = inst_30357);

(statearr_30500[(21)] = inst_30359);

(statearr_30500[(10)] = inst_30358);

(statearr_30500[(11)] = inst_30360);

return statearr_30500;
})();
var statearr_30505_32573 = state_30439__$1;
(statearr_30505_32573[(2)] = null);

(statearr_30505_32573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (41))){
var inst_30381 = (state_30439[(25)]);
var inst_30406 = (state_30439[(2)]);
var inst_30408 = cljs.core.next(inst_30381);
var inst_30357 = inst_30408;
var inst_30358 = null;
var inst_30359 = (0);
var inst_30360 = (0);
var state_30439__$1 = (function (){var statearr_30514 = state_30439;
(statearr_30514[(20)] = inst_30357);

(statearr_30514[(27)] = inst_30406);

(statearr_30514[(21)] = inst_30359);

(statearr_30514[(10)] = inst_30358);

(statearr_30514[(11)] = inst_30360);

return statearr_30514;
})();
var statearr_30515_32574 = state_30439__$1;
(statearr_30515_32574[(2)] = null);

(statearr_30515_32574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (43))){
var state_30439__$1 = state_30439;
var statearr_30520_32575 = state_30439__$1;
(statearr_30520_32575[(2)] = null);

(statearr_30520_32575[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (29))){
var inst_30416 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30521_32576 = state_30439__$1;
(statearr_30521_32576[(2)] = inst_30416);

(statearr_30521_32576[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (44))){
var inst_30425 = (state_30439[(2)]);
var state_30439__$1 = (function (){var statearr_30523 = state_30439;
(statearr_30523[(28)] = inst_30425);

return statearr_30523;
})();
var statearr_30524_32577 = state_30439__$1;
(statearr_30524_32577[(2)] = null);

(statearr_30524_32577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (6))){
var inst_30349 = (state_30439[(29)]);
var inst_30348 = cljs.core.deref(cs);
var inst_30349__$1 = cljs.core.keys(inst_30348);
var inst_30350 = cljs.core.count(inst_30349__$1);
var inst_30351 = cljs.core.reset_BANG_(dctr,inst_30350);
var inst_30356 = cljs.core.seq(inst_30349__$1);
var inst_30357 = inst_30356;
var inst_30358 = null;
var inst_30359 = (0);
var inst_30360 = (0);
var state_30439__$1 = (function (){var statearr_30525 = state_30439;
(statearr_30525[(30)] = inst_30351);

(statearr_30525[(20)] = inst_30357);

(statearr_30525[(21)] = inst_30359);

(statearr_30525[(10)] = inst_30358);

(statearr_30525[(11)] = inst_30360);

(statearr_30525[(29)] = inst_30349__$1);

return statearr_30525;
})();
var statearr_30526_32578 = state_30439__$1;
(statearr_30526_32578[(2)] = null);

(statearr_30526_32578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (28))){
var inst_30357 = (state_30439[(20)]);
var inst_30381 = (state_30439[(25)]);
var inst_30381__$1 = cljs.core.seq(inst_30357);
var state_30439__$1 = (function (){var statearr_30527 = state_30439;
(statearr_30527[(25)] = inst_30381__$1);

return statearr_30527;
})();
if(inst_30381__$1){
var statearr_30528_32585 = state_30439__$1;
(statearr_30528_32585[(1)] = (33));

} else {
var statearr_30529_32586 = state_30439__$1;
(statearr_30529_32586[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (25))){
var inst_30359 = (state_30439[(21)]);
var inst_30360 = (state_30439[(11)]);
var inst_30362 = (inst_30360 < inst_30359);
var inst_30363 = inst_30362;
var state_30439__$1 = state_30439;
if(cljs.core.truth_(inst_30363)){
var statearr_30530_32587 = state_30439__$1;
(statearr_30530_32587[(1)] = (27));

} else {
var statearr_30531_32588 = state_30439__$1;
(statearr_30531_32588[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (34))){
var state_30439__$1 = state_30439;
var statearr_30532_32589 = state_30439__$1;
(statearr_30532_32589[(2)] = null);

(statearr_30532_32589[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (17))){
var state_30439__$1 = state_30439;
var statearr_30533_32590 = state_30439__$1;
(statearr_30533_32590[(2)] = null);

(statearr_30533_32590[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (3))){
var inst_30430 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30439__$1,inst_30430);
} else {
if((state_val_30440 === (12))){
var inst_30342 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30534_32591 = state_30439__$1;
(statearr_30534_32591[(2)] = inst_30342);

(statearr_30534_32591[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (2))){
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30439__$1,(4),ch);
} else {
if((state_val_30440 === (23))){
var state_30439__$1 = state_30439;
var statearr_30535_32592 = state_30439__$1;
(statearr_30535_32592[(2)] = null);

(statearr_30535_32592[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (35))){
var inst_30414 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30536_32593 = state_30439__$1;
(statearr_30536_32593[(2)] = inst_30414);

(statearr_30536_32593[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (19))){
var inst_30312 = (state_30439[(7)]);
var inst_30317 = cljs.core.chunk_first(inst_30312);
var inst_30318 = cljs.core.chunk_rest(inst_30312);
var inst_30319 = cljs.core.count(inst_30317);
var inst_30290 = inst_30318;
var inst_30291 = inst_30317;
var inst_30292 = inst_30319;
var inst_30293 = (0);
var state_30439__$1 = (function (){var statearr_30538 = state_30439;
(statearr_30538[(13)] = inst_30293);

(statearr_30538[(15)] = inst_30292);

(statearr_30538[(16)] = inst_30290);

(statearr_30538[(17)] = inst_30291);

return statearr_30538;
})();
var statearr_30541_32594 = state_30439__$1;
(statearr_30541_32594[(2)] = null);

(statearr_30541_32594[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (11))){
var inst_30290 = (state_30439[(16)]);
var inst_30312 = (state_30439[(7)]);
var inst_30312__$1 = cljs.core.seq(inst_30290);
var state_30439__$1 = (function (){var statearr_30543 = state_30439;
(statearr_30543[(7)] = inst_30312__$1);

return statearr_30543;
})();
if(inst_30312__$1){
var statearr_30544_32601 = state_30439__$1;
(statearr_30544_32601[(1)] = (16));

} else {
var statearr_30545_32602 = state_30439__$1;
(statearr_30545_32602[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (9))){
var inst_30345 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30546_32603 = state_30439__$1;
(statearr_30546_32603[(2)] = inst_30345);

(statearr_30546_32603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (5))){
var inst_30288 = cljs.core.deref(cs);
var inst_30289 = cljs.core.seq(inst_30288);
var inst_30290 = inst_30289;
var inst_30291 = null;
var inst_30292 = (0);
var inst_30293 = (0);
var state_30439__$1 = (function (){var statearr_30547 = state_30439;
(statearr_30547[(13)] = inst_30293);

(statearr_30547[(15)] = inst_30292);

(statearr_30547[(16)] = inst_30290);

(statearr_30547[(17)] = inst_30291);

return statearr_30547;
})();
var statearr_30548_32604 = state_30439__$1;
(statearr_30548_32604[(2)] = null);

(statearr_30548_32604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (14))){
var state_30439__$1 = state_30439;
var statearr_30550_32605 = state_30439__$1;
(statearr_30550_32605[(2)] = null);

(statearr_30550_32605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (45))){
var inst_30422 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30555_32606 = state_30439__$1;
(statearr_30555_32606[(2)] = inst_30422);

(statearr_30555_32606[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (26))){
var inst_30349 = (state_30439[(29)]);
var inst_30418 = (state_30439[(2)]);
var inst_30419 = cljs.core.seq(inst_30349);
var state_30439__$1 = (function (){var statearr_30558 = state_30439;
(statearr_30558[(31)] = inst_30418);

return statearr_30558;
})();
if(inst_30419){
var statearr_30559_32607 = state_30439__$1;
(statearr_30559_32607[(1)] = (42));

} else {
var statearr_30560_32608 = state_30439__$1;
(statearr_30560_32608[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (16))){
var inst_30312 = (state_30439[(7)]);
var inst_30314 = cljs.core.chunked_seq_QMARK_(inst_30312);
var state_30439__$1 = state_30439;
if(inst_30314){
var statearr_30561_32609 = state_30439__$1;
(statearr_30561_32609[(1)] = (19));

} else {
var statearr_30562_32610 = state_30439__$1;
(statearr_30562_32610[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (38))){
var inst_30411 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30563_32611 = state_30439__$1;
(statearr_30563_32611[(2)] = inst_30411);

(statearr_30563_32611[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (30))){
var state_30439__$1 = state_30439;
var statearr_30564_32612 = state_30439__$1;
(statearr_30564_32612[(2)] = null);

(statearr_30564_32612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (10))){
var inst_30293 = (state_30439[(13)]);
var inst_30291 = (state_30439[(17)]);
var inst_30301 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30291,inst_30293);
var inst_30302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30301,(0),null);
var inst_30303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30301,(1),null);
var state_30439__$1 = (function (){var statearr_30565 = state_30439;
(statearr_30565[(26)] = inst_30302);

return statearr_30565;
})();
if(cljs.core.truth_(inst_30303)){
var statearr_30566_32619 = state_30439__$1;
(statearr_30566_32619[(1)] = (13));

} else {
var statearr_30567_32620 = state_30439__$1;
(statearr_30567_32620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (18))){
var inst_30340 = (state_30439[(2)]);
var state_30439__$1 = state_30439;
var statearr_30568_32621 = state_30439__$1;
(statearr_30568_32621[(2)] = inst_30340);

(statearr_30568_32621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (42))){
var state_30439__$1 = state_30439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30439__$1,(45),dchan);
} else {
if((state_val_30440 === (37))){
var inst_30281 = (state_30439[(9)]);
var inst_30381 = (state_30439[(25)]);
var inst_30396 = (state_30439[(23)]);
var inst_30396__$1 = cljs.core.first(inst_30381);
var inst_30397 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30396__$1,inst_30281,done);
var state_30439__$1 = (function (){var statearr_30569 = state_30439;
(statearr_30569[(23)] = inst_30396__$1);

return statearr_30569;
})();
if(cljs.core.truth_(inst_30397)){
var statearr_30570_32622 = state_30439__$1;
(statearr_30570_32622[(1)] = (39));

} else {
var statearr_30571_32623 = state_30439__$1;
(statearr_30571_32623[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30440 === (8))){
var inst_30293 = (state_30439[(13)]);
var inst_30292 = (state_30439[(15)]);
var inst_30295 = (inst_30293 < inst_30292);
var inst_30296 = inst_30295;
var state_30439__$1 = state_30439;
if(cljs.core.truth_(inst_30296)){
var statearr_30572_32624 = state_30439__$1;
(statearr_30572_32624[(1)] = (10));

} else {
var statearr_30576_32625 = state_30439__$1;
(statearr_30576_32625[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29026__auto__ = null;
var cljs$core$async$mult_$_state_machine__29026__auto____0 = (function (){
var statearr_30578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30578[(0)] = cljs$core$async$mult_$_state_machine__29026__auto__);

(statearr_30578[(1)] = (1));

return statearr_30578;
});
var cljs$core$async$mult_$_state_machine__29026__auto____1 = (function (state_30439){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_30439);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e30579){if((e30579 instanceof Object)){
var ex__29029__auto__ = e30579;
var statearr_30580_32626 = state_30439;
(statearr_30580_32626[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32628 = state_30439;
state_30439 = G__32628;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29026__auto__ = function(state_30439){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29026__auto____1.call(this,state_30439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29026__auto____0;
cljs$core$async$mult_$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29026__auto____1;
return cljs$core$async$mult_$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_30583 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_30583[(6)] = c__29262__auto___32530);

return statearr_30583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30590 = arguments.length;
switch (G__30590) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32637 = arguments.length;
var i__4790__auto___32638 = (0);
while(true){
if((i__4790__auto___32638 < len__4789__auto___32637)){
args__4795__auto__.push((arguments[i__4790__auto___32638]));

var G__32639 = (i__4790__auto___32638 + (1));
i__4790__auto___32638 = G__32639;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30626){
var map__30627 = p__30626;
var map__30627__$1 = (((((!((map__30627 == null))))?(((((map__30627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30627):map__30627);
var opts = map__30627__$1;
var statearr_30629_32640 = state;
(statearr_30629_32640[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30630_32643 = state;
(statearr_30630_32643[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30631_32646 = state;
(statearr_30631_32646[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30621){
var G__30622 = cljs.core.first(seq30621);
var seq30621__$1 = cljs.core.next(seq30621);
var G__30624 = cljs.core.first(seq30621__$1);
var seq30621__$2 = cljs.core.next(seq30621__$1);
var G__30625 = cljs.core.first(seq30621__$2);
var seq30621__$3 = cljs.core.next(seq30621__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30622,G__30624,G__30625,seq30621__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30641 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30642){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30642 = meta30642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30643,meta30642__$1){
var self__ = this;
var _30643__$1 = this;
return (new cljs.core.async.t_cljs$core$async30641(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30642__$1));
}));

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30643){
var self__ = this;
var _30643__$1 = this;
return self__.meta30642;
}));

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30641.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30642","meta30642",-823973381,null)], null);
}));

(cljs.core.async.t_cljs$core$async30641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30641");

(cljs.core.async.t_cljs$core$async30641.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30641.
 */
cljs.core.async.__GT_t_cljs$core$async30641 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30641(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30642){
return (new cljs.core.async.t_cljs$core$async30641(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30642));
});

}

return (new cljs.core.async.t_cljs$core$async30641(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29262__auto___32687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_30756){
var state_val_30757 = (state_30756[(1)]);
if((state_val_30757 === (7))){
var inst_30669 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30758_32688 = state_30756__$1;
(statearr_30758_32688[(2)] = inst_30669);

(statearr_30758_32688[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (20))){
var inst_30682 = (state_30756[(7)]);
var state_30756__$1 = state_30756;
var statearr_30762_32689 = state_30756__$1;
(statearr_30762_32689[(2)] = inst_30682);

(statearr_30762_32689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (27))){
var state_30756__$1 = state_30756;
var statearr_30763_32690 = state_30756__$1;
(statearr_30763_32690[(2)] = null);

(statearr_30763_32690[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (1))){
var inst_30654 = (state_30756[(8)]);
var inst_30654__$1 = calc_state();
var inst_30658 = (inst_30654__$1 == null);
var inst_30659 = cljs.core.not(inst_30658);
var state_30756__$1 = (function (){var statearr_30764 = state_30756;
(statearr_30764[(8)] = inst_30654__$1);

return statearr_30764;
})();
if(inst_30659){
var statearr_30765_32691 = state_30756__$1;
(statearr_30765_32691[(1)] = (2));

} else {
var statearr_30766_32692 = state_30756__$1;
(statearr_30766_32692[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (24))){
var inst_30707 = (state_30756[(9)]);
var inst_30730 = (state_30756[(10)]);
var inst_30716 = (state_30756[(11)]);
var inst_30730__$1 = (inst_30707.cljs$core$IFn$_invoke$arity$1 ? inst_30707.cljs$core$IFn$_invoke$arity$1(inst_30716) : inst_30707.call(null,inst_30716));
var state_30756__$1 = (function (){var statearr_30767 = state_30756;
(statearr_30767[(10)] = inst_30730__$1);

return statearr_30767;
})();
if(cljs.core.truth_(inst_30730__$1)){
var statearr_30768_32693 = state_30756__$1;
(statearr_30768_32693[(1)] = (29));

} else {
var statearr_30769_32694 = state_30756__$1;
(statearr_30769_32694[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (4))){
var inst_30672 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30672)){
var statearr_30770_32695 = state_30756__$1;
(statearr_30770_32695[(1)] = (8));

} else {
var statearr_30771_32696 = state_30756__$1;
(statearr_30771_32696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (15))){
var inst_30701 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30701)){
var statearr_30772_32698 = state_30756__$1;
(statearr_30772_32698[(1)] = (19));

} else {
var statearr_30773_32701 = state_30756__$1;
(statearr_30773_32701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (21))){
var inst_30706 = (state_30756[(12)]);
var inst_30706__$1 = (state_30756[(2)]);
var inst_30707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30706__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30706__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30706__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30756__$1 = (function (){var statearr_30774 = state_30756;
(statearr_30774[(9)] = inst_30707);

(statearr_30774[(12)] = inst_30706__$1);

(statearr_30774[(13)] = inst_30708);

return statearr_30774;
})();
return cljs.core.async.ioc_alts_BANG_(state_30756__$1,(22),inst_30709);
} else {
if((state_val_30757 === (31))){
var inst_30738 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30738)){
var statearr_30775_32703 = state_30756__$1;
(statearr_30775_32703[(1)] = (32));

} else {
var statearr_30776_32708 = state_30756__$1;
(statearr_30776_32708[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (32))){
var inst_30715 = (state_30756[(14)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30756__$1,(35),out,inst_30715);
} else {
if((state_val_30757 === (33))){
var inst_30706 = (state_30756[(12)]);
var inst_30682 = inst_30706;
var state_30756__$1 = (function (){var statearr_30777 = state_30756;
(statearr_30777[(7)] = inst_30682);

return statearr_30777;
})();
var statearr_30778_32709 = state_30756__$1;
(statearr_30778_32709[(2)] = null);

(statearr_30778_32709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (13))){
var inst_30682 = (state_30756[(7)]);
var inst_30690 = inst_30682.cljs$lang$protocol_mask$partition0$;
var inst_30691 = (inst_30690 & (64));
var inst_30692 = inst_30682.cljs$core$ISeq$;
var inst_30693 = (cljs.core.PROTOCOL_SENTINEL === inst_30692);
var inst_30694 = ((inst_30691) || (inst_30693));
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30694)){
var statearr_30779_32710 = state_30756__$1;
(statearr_30779_32710[(1)] = (16));

} else {
var statearr_30780_32711 = state_30756__$1;
(statearr_30780_32711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (22))){
var inst_30715 = (state_30756[(14)]);
var inst_30716 = (state_30756[(11)]);
var inst_30714 = (state_30756[(2)]);
var inst_30715__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30714,(0),null);
var inst_30716__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30714,(1),null);
var inst_30717 = (inst_30715__$1 == null);
var inst_30718 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30716__$1,change);
var inst_30719 = ((inst_30717) || (inst_30718));
var state_30756__$1 = (function (){var statearr_30781 = state_30756;
(statearr_30781[(14)] = inst_30715__$1);

(statearr_30781[(11)] = inst_30716__$1);

return statearr_30781;
})();
if(cljs.core.truth_(inst_30719)){
var statearr_30782_32713 = state_30756__$1;
(statearr_30782_32713[(1)] = (23));

} else {
var statearr_30783_32714 = state_30756__$1;
(statearr_30783_32714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (36))){
var inst_30706 = (state_30756[(12)]);
var inst_30682 = inst_30706;
var state_30756__$1 = (function (){var statearr_30786 = state_30756;
(statearr_30786[(7)] = inst_30682);

return statearr_30786;
})();
var statearr_30787_32715 = state_30756__$1;
(statearr_30787_32715[(2)] = null);

(statearr_30787_32715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (29))){
var inst_30730 = (state_30756[(10)]);
var state_30756__$1 = state_30756;
var statearr_30789_32716 = state_30756__$1;
(statearr_30789_32716[(2)] = inst_30730);

(statearr_30789_32716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (6))){
var state_30756__$1 = state_30756;
var statearr_30790_32717 = state_30756__$1;
(statearr_30790_32717[(2)] = false);

(statearr_30790_32717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (28))){
var inst_30726 = (state_30756[(2)]);
var inst_30727 = calc_state();
var inst_30682 = inst_30727;
var state_30756__$1 = (function (){var statearr_30791 = state_30756;
(statearr_30791[(15)] = inst_30726);

(statearr_30791[(7)] = inst_30682);

return statearr_30791;
})();
var statearr_30792_32725 = state_30756__$1;
(statearr_30792_32725[(2)] = null);

(statearr_30792_32725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (25))){
var inst_30752 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30793_32726 = state_30756__$1;
(statearr_30793_32726[(2)] = inst_30752);

(statearr_30793_32726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (34))){
var inst_30750 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30794_32727 = state_30756__$1;
(statearr_30794_32727[(2)] = inst_30750);

(statearr_30794_32727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (17))){
var state_30756__$1 = state_30756;
var statearr_30795_32728 = state_30756__$1;
(statearr_30795_32728[(2)] = false);

(statearr_30795_32728[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (3))){
var state_30756__$1 = state_30756;
var statearr_30796_32732 = state_30756__$1;
(statearr_30796_32732[(2)] = false);

(statearr_30796_32732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (12))){
var inst_30754 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30756__$1,inst_30754);
} else {
if((state_val_30757 === (2))){
var inst_30654 = (state_30756[(8)]);
var inst_30661 = inst_30654.cljs$lang$protocol_mask$partition0$;
var inst_30662 = (inst_30661 & (64));
var inst_30663 = inst_30654.cljs$core$ISeq$;
var inst_30664 = (cljs.core.PROTOCOL_SENTINEL === inst_30663);
var inst_30665 = ((inst_30662) || (inst_30664));
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30665)){
var statearr_30803_32736 = state_30756__$1;
(statearr_30803_32736[(1)] = (5));

} else {
var statearr_30804_32737 = state_30756__$1;
(statearr_30804_32737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (23))){
var inst_30715 = (state_30756[(14)]);
var inst_30721 = (inst_30715 == null);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30721)){
var statearr_30805_32738 = state_30756__$1;
(statearr_30805_32738[(1)] = (26));

} else {
var statearr_30806_32739 = state_30756__$1;
(statearr_30806_32739[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (35))){
var inst_30741 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
if(cljs.core.truth_(inst_30741)){
var statearr_30807_32740 = state_30756__$1;
(statearr_30807_32740[(1)] = (36));

} else {
var statearr_30808_32744 = state_30756__$1;
(statearr_30808_32744[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (19))){
var inst_30682 = (state_30756[(7)]);
var inst_30703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30682);
var state_30756__$1 = state_30756;
var statearr_30809_32745 = state_30756__$1;
(statearr_30809_32745[(2)] = inst_30703);

(statearr_30809_32745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (11))){
var inst_30682 = (state_30756[(7)]);
var inst_30687 = (inst_30682 == null);
var inst_30688 = cljs.core.not(inst_30687);
var state_30756__$1 = state_30756;
if(inst_30688){
var statearr_30810_32750 = state_30756__$1;
(statearr_30810_32750[(1)] = (13));

} else {
var statearr_30811_32751 = state_30756__$1;
(statearr_30811_32751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (9))){
var inst_30654 = (state_30756[(8)]);
var state_30756__$1 = state_30756;
var statearr_30813_32752 = state_30756__$1;
(statearr_30813_32752[(2)] = inst_30654);

(statearr_30813_32752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (5))){
var state_30756__$1 = state_30756;
var statearr_30814_32753 = state_30756__$1;
(statearr_30814_32753[(2)] = true);

(statearr_30814_32753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (14))){
var state_30756__$1 = state_30756;
var statearr_30815_32754 = state_30756__$1;
(statearr_30815_32754[(2)] = false);

(statearr_30815_32754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (26))){
var inst_30716 = (state_30756[(11)]);
var inst_30723 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30716);
var state_30756__$1 = state_30756;
var statearr_30816_32755 = state_30756__$1;
(statearr_30816_32755[(2)] = inst_30723);

(statearr_30816_32755[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (16))){
var state_30756__$1 = state_30756;
var statearr_30820_32756 = state_30756__$1;
(statearr_30820_32756[(2)] = true);

(statearr_30820_32756[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (38))){
var inst_30746 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30825_32757 = state_30756__$1;
(statearr_30825_32757[(2)] = inst_30746);

(statearr_30825_32757[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (30))){
var inst_30707 = (state_30756[(9)]);
var inst_30708 = (state_30756[(13)]);
var inst_30716 = (state_30756[(11)]);
var inst_30733 = cljs.core.empty_QMARK_(inst_30707);
var inst_30734 = (inst_30708.cljs$core$IFn$_invoke$arity$1 ? inst_30708.cljs$core$IFn$_invoke$arity$1(inst_30716) : inst_30708.call(null,inst_30716));
var inst_30735 = cljs.core.not(inst_30734);
var inst_30736 = ((inst_30733) && (inst_30735));
var state_30756__$1 = state_30756;
var statearr_30828_32760 = state_30756__$1;
(statearr_30828_32760[(2)] = inst_30736);

(statearr_30828_32760[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (10))){
var inst_30654 = (state_30756[(8)]);
var inst_30677 = (state_30756[(2)]);
var inst_30678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30677,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30677,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30677,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30682 = inst_30654;
var state_30756__$1 = (function (){var statearr_30834 = state_30756;
(statearr_30834[(16)] = inst_30678);

(statearr_30834[(7)] = inst_30682);

(statearr_30834[(17)] = inst_30681);

(statearr_30834[(18)] = inst_30680);

return statearr_30834;
})();
var statearr_30835_32763 = state_30756__$1;
(statearr_30835_32763[(2)] = null);

(statearr_30835_32763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (18))){
var inst_30698 = (state_30756[(2)]);
var state_30756__$1 = state_30756;
var statearr_30836_32764 = state_30756__$1;
(statearr_30836_32764[(2)] = inst_30698);

(statearr_30836_32764[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (37))){
var state_30756__$1 = state_30756;
var statearr_30837_32765 = state_30756__$1;
(statearr_30837_32765[(2)] = null);

(statearr_30837_32765[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30757 === (8))){
var inst_30654 = (state_30756[(8)]);
var inst_30674 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30654);
var state_30756__$1 = state_30756;
var statearr_30838_32768 = state_30756__$1;
(statearr_30838_32768[(2)] = inst_30674);

(statearr_30838_32768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29026__auto__ = null;
var cljs$core$async$mix_$_state_machine__29026__auto____0 = (function (){
var statearr_30839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30839[(0)] = cljs$core$async$mix_$_state_machine__29026__auto__);

(statearr_30839[(1)] = (1));

return statearr_30839;
});
var cljs$core$async$mix_$_state_machine__29026__auto____1 = (function (state_30756){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_30756);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e30840){if((e30840 instanceof Object)){
var ex__29029__auto__ = e30840;
var statearr_30841_32772 = state_30756;
(statearr_30841_32772[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32774 = state_30756;
state_30756 = G__32774;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29026__auto__ = function(state_30756){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29026__auto____1.call(this,state_30756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29026__auto____0;
cljs$core$async$mix_$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29026__auto____1;
return cljs$core$async$mix_$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_30844 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_30844[(6)] = c__29262__auto___32687);

return statearr_30844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30866 = arguments.length;
switch (G__30866) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30869 = arguments.length;
switch (G__30869) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30867_SHARP_){
if(cljs.core.truth_((p1__30867_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30867_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30867_SHARP_.call(null,topic)))){
return p1__30867_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30867_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30870 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30871){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30871 = meta30871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30872,meta30871__$1){
var self__ = this;
var _30872__$1 = this;
return (new cljs.core.async.t_cljs$core$async30870(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30871__$1));
}));

(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30872){
var self__ = this;
var _30872__$1 = this;
return self__.meta30871;
}));

(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30870.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30871","meta30871",-1957050125,null)], null);
}));

(cljs.core.async.t_cljs$core$async30870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30870");

(cljs.core.async.t_cljs$core$async30870.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30870.
 */
cljs.core.async.__GT_t_cljs$core$async30870 = (function cljs$core$async$__GT_t_cljs$core$async30870(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30871){
return (new cljs.core.async.t_cljs$core$async30870(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30871));
});

}

return (new cljs.core.async.t_cljs$core$async30870(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29262__auto___32793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_30995){
var state_val_30996 = (state_30995[(1)]);
if((state_val_30996 === (7))){
var inst_30971 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_30997_32794 = state_30995__$1;
(statearr_30997_32794[(2)] = inst_30971);

(statearr_30997_32794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (20))){
var state_30995__$1 = state_30995;
var statearr_30998_32795 = state_30995__$1;
(statearr_30998_32795[(2)] = null);

(statearr_30998_32795[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (1))){
var state_30995__$1 = state_30995;
var statearr_30999_32796 = state_30995__$1;
(statearr_30999_32796[(2)] = null);

(statearr_30999_32796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (24))){
var inst_30949 = (state_30995[(7)]);
var inst_30963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30949);
var state_30995__$1 = state_30995;
var statearr_31000_32797 = state_30995__$1;
(statearr_31000_32797[(2)] = inst_30963);

(statearr_31000_32797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (4))){
var inst_30890 = (state_30995[(8)]);
var inst_30890__$1 = (state_30995[(2)]);
var inst_30891 = (inst_30890__$1 == null);
var state_30995__$1 = (function (){var statearr_31001 = state_30995;
(statearr_31001[(8)] = inst_30890__$1);

return statearr_31001;
})();
if(cljs.core.truth_(inst_30891)){
var statearr_31004_32798 = state_30995__$1;
(statearr_31004_32798[(1)] = (5));

} else {
var statearr_31007_32799 = state_30995__$1;
(statearr_31007_32799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (15))){
var inst_30943 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31012_32800 = state_30995__$1;
(statearr_31012_32800[(2)] = inst_30943);

(statearr_31012_32800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (21))){
var inst_30968 = (state_30995[(2)]);
var state_30995__$1 = (function (){var statearr_31013 = state_30995;
(statearr_31013[(9)] = inst_30968);

return statearr_31013;
})();
var statearr_31019_32802 = state_30995__$1;
(statearr_31019_32802[(2)] = null);

(statearr_31019_32802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (13))){
var inst_30919 = (state_30995[(10)]);
var inst_30921 = cljs.core.chunked_seq_QMARK_(inst_30919);
var state_30995__$1 = state_30995;
if(inst_30921){
var statearr_31023_32803 = state_30995__$1;
(statearr_31023_32803[(1)] = (16));

} else {
var statearr_31026_32804 = state_30995__$1;
(statearr_31026_32804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (22))){
var inst_30960 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
if(cljs.core.truth_(inst_30960)){
var statearr_31028_32805 = state_30995__$1;
(statearr_31028_32805[(1)] = (23));

} else {
var statearr_31031_32806 = state_30995__$1;
(statearr_31031_32806[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (6))){
var inst_30890 = (state_30995[(8)]);
var inst_30951 = (state_30995[(11)]);
var inst_30949 = (state_30995[(7)]);
var inst_30949__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30890) : topic_fn.call(null,inst_30890));
var inst_30950 = cljs.core.deref(mults);
var inst_30951__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30950,inst_30949__$1);
var state_30995__$1 = (function (){var statearr_31035 = state_30995;
(statearr_31035[(11)] = inst_30951__$1);

(statearr_31035[(7)] = inst_30949__$1);

return statearr_31035;
})();
if(cljs.core.truth_(inst_30951__$1)){
var statearr_31037_32807 = state_30995__$1;
(statearr_31037_32807[(1)] = (19));

} else {
var statearr_31038_32808 = state_30995__$1;
(statearr_31038_32808[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (25))){
var inst_30965 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31039_32809 = state_30995__$1;
(statearr_31039_32809[(2)] = inst_30965);

(statearr_31039_32809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (17))){
var inst_30919 = (state_30995[(10)]);
var inst_30928 = cljs.core.first(inst_30919);
var inst_30931 = cljs.core.async.muxch_STAR_(inst_30928);
var inst_30932 = cljs.core.async.close_BANG_(inst_30931);
var inst_30933 = cljs.core.next(inst_30919);
var inst_30900 = inst_30933;
var inst_30901 = null;
var inst_30902 = (0);
var inst_30903 = (0);
var state_30995__$1 = (function (){var statearr_31043 = state_30995;
(statearr_31043[(12)] = inst_30900);

(statearr_31043[(13)] = inst_30901);

(statearr_31043[(14)] = inst_30902);

(statearr_31043[(15)] = inst_30903);

(statearr_31043[(16)] = inst_30932);

return statearr_31043;
})();
var statearr_31044_32817 = state_30995__$1;
(statearr_31044_32817[(2)] = null);

(statearr_31044_32817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (3))){
var inst_30992 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30995__$1,inst_30992);
} else {
if((state_val_30996 === (12))){
var inst_30945 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31049_32818 = state_30995__$1;
(statearr_31049_32818[(2)] = inst_30945);

(statearr_31049_32818[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (2))){
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30995__$1,(4),ch);
} else {
if((state_val_30996 === (23))){
var state_30995__$1 = state_30995;
var statearr_31050_32819 = state_30995__$1;
(statearr_31050_32819[(2)] = null);

(statearr_31050_32819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (19))){
var inst_30890 = (state_30995[(8)]);
var inst_30951 = (state_30995[(11)]);
var inst_30957 = cljs.core.async.muxch_STAR_(inst_30951);
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30995__$1,(22),inst_30957,inst_30890);
} else {
if((state_val_30996 === (11))){
var inst_30900 = (state_30995[(12)]);
var inst_30919 = (state_30995[(10)]);
var inst_30919__$1 = cljs.core.seq(inst_30900);
var state_30995__$1 = (function (){var statearr_31054 = state_30995;
(statearr_31054[(10)] = inst_30919__$1);

return statearr_31054;
})();
if(inst_30919__$1){
var statearr_31055_32820 = state_30995__$1;
(statearr_31055_32820[(1)] = (13));

} else {
var statearr_31056_32821 = state_30995__$1;
(statearr_31056_32821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (9))){
var inst_30947 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31059_32822 = state_30995__$1;
(statearr_31059_32822[(2)] = inst_30947);

(statearr_31059_32822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (5))){
var inst_30897 = cljs.core.deref(mults);
var inst_30898 = cljs.core.vals(inst_30897);
var inst_30899 = cljs.core.seq(inst_30898);
var inst_30900 = inst_30899;
var inst_30901 = null;
var inst_30902 = (0);
var inst_30903 = (0);
var state_30995__$1 = (function (){var statearr_31060 = state_30995;
(statearr_31060[(12)] = inst_30900);

(statearr_31060[(13)] = inst_30901);

(statearr_31060[(14)] = inst_30902);

(statearr_31060[(15)] = inst_30903);

return statearr_31060;
})();
var statearr_31062_32823 = state_30995__$1;
(statearr_31062_32823[(2)] = null);

(statearr_31062_32823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (14))){
var state_30995__$1 = state_30995;
var statearr_31068_32824 = state_30995__$1;
(statearr_31068_32824[(2)] = null);

(statearr_31068_32824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (16))){
var inst_30919 = (state_30995[(10)]);
var inst_30923 = cljs.core.chunk_first(inst_30919);
var inst_30924 = cljs.core.chunk_rest(inst_30919);
var inst_30925 = cljs.core.count(inst_30923);
var inst_30900 = inst_30924;
var inst_30901 = inst_30923;
var inst_30902 = inst_30925;
var inst_30903 = (0);
var state_30995__$1 = (function (){var statearr_31069 = state_30995;
(statearr_31069[(12)] = inst_30900);

(statearr_31069[(13)] = inst_30901);

(statearr_31069[(14)] = inst_30902);

(statearr_31069[(15)] = inst_30903);

return statearr_31069;
})();
var statearr_31070_32826 = state_30995__$1;
(statearr_31070_32826[(2)] = null);

(statearr_31070_32826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (10))){
var inst_30900 = (state_30995[(12)]);
var inst_30901 = (state_30995[(13)]);
var inst_30902 = (state_30995[(14)]);
var inst_30903 = (state_30995[(15)]);
var inst_30913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30901,inst_30903);
var inst_30914 = cljs.core.async.muxch_STAR_(inst_30913);
var inst_30915 = cljs.core.async.close_BANG_(inst_30914);
var inst_30916 = (inst_30903 + (1));
var tmp31064 = inst_30900;
var tmp31065 = inst_30901;
var tmp31066 = inst_30902;
var inst_30900__$1 = tmp31064;
var inst_30901__$1 = tmp31065;
var inst_30902__$1 = tmp31066;
var inst_30903__$1 = inst_30916;
var state_30995__$1 = (function (){var statearr_31073 = state_30995;
(statearr_31073[(17)] = inst_30915);

(statearr_31073[(12)] = inst_30900__$1);

(statearr_31073[(13)] = inst_30901__$1);

(statearr_31073[(14)] = inst_30902__$1);

(statearr_31073[(15)] = inst_30903__$1);

return statearr_31073;
})();
var statearr_31074_32828 = state_30995__$1;
(statearr_31074_32828[(2)] = null);

(statearr_31074_32828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (18))){
var inst_30936 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31075_32829 = state_30995__$1;
(statearr_31075_32829[(2)] = inst_30936);

(statearr_31075_32829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (8))){
var inst_30902 = (state_30995[(14)]);
var inst_30903 = (state_30995[(15)]);
var inst_30905 = (inst_30903 < inst_30902);
var inst_30906 = inst_30905;
var state_30995__$1 = state_30995;
if(cljs.core.truth_(inst_30906)){
var statearr_31076_32831 = state_30995__$1;
(statearr_31076_32831[(1)] = (10));

} else {
var statearr_31077_32832 = state_30995__$1;
(statearr_31077_32832[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_31079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31079[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_31079[(1)] = (1));

return statearr_31079;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_30995){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_30995);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e31081){if((e31081 instanceof Object)){
var ex__29029__auto__ = e31081;
var statearr_31082_32838 = state_30995;
(statearr_31082_32838[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31081;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32839 = state_30995;
state_30995 = G__32839;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_30995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_30995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_31083 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_31083[(6)] = c__29262__auto___32793);

return statearr_31083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31085 = arguments.length;
switch (G__31085) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31096 = arguments.length;
switch (G__31096) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31102 = arguments.length;
switch (G__31102) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29262__auto___32849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_31155){
var state_val_31156 = (state_31155[(1)]);
if((state_val_31156 === (7))){
var state_31155__$1 = state_31155;
var statearr_31163_32850 = state_31155__$1;
(statearr_31163_32850[(2)] = null);

(statearr_31163_32850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (1))){
var state_31155__$1 = state_31155;
var statearr_31168_32851 = state_31155__$1;
(statearr_31168_32851[(2)] = null);

(statearr_31168_32851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (4))){
var inst_31116 = (state_31155[(7)]);
var inst_31118 = (inst_31116 < cnt);
var state_31155__$1 = state_31155;
if(cljs.core.truth_(inst_31118)){
var statearr_31169_32852 = state_31155__$1;
(statearr_31169_32852[(1)] = (6));

} else {
var statearr_31170_32853 = state_31155__$1;
(statearr_31170_32853[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (15))){
var inst_31151 = (state_31155[(2)]);
var state_31155__$1 = state_31155;
var statearr_31171_32854 = state_31155__$1;
(statearr_31171_32854[(2)] = inst_31151);

(statearr_31171_32854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (13))){
var inst_31144 = cljs.core.async.close_BANG_(out);
var state_31155__$1 = state_31155;
var statearr_31172_32855 = state_31155__$1;
(statearr_31172_32855[(2)] = inst_31144);

(statearr_31172_32855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (6))){
var state_31155__$1 = state_31155;
var statearr_31173_32856 = state_31155__$1;
(statearr_31173_32856[(2)] = null);

(statearr_31173_32856[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (3))){
var inst_31153 = (state_31155[(2)]);
var state_31155__$1 = state_31155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31155__$1,inst_31153);
} else {
if((state_val_31156 === (12))){
var inst_31141 = (state_31155[(8)]);
var inst_31141__$1 = (state_31155[(2)]);
var inst_31142 = cljs.core.some(cljs.core.nil_QMARK_,inst_31141__$1);
var state_31155__$1 = (function (){var statearr_31186 = state_31155;
(statearr_31186[(8)] = inst_31141__$1);

return statearr_31186;
})();
if(cljs.core.truth_(inst_31142)){
var statearr_31187_32858 = state_31155__$1;
(statearr_31187_32858[(1)] = (13));

} else {
var statearr_31188_32859 = state_31155__$1;
(statearr_31188_32859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (2))){
var inst_31112 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31116 = (0);
var state_31155__$1 = (function (){var statearr_31189 = state_31155;
(statearr_31189[(7)] = inst_31116);

(statearr_31189[(9)] = inst_31112);

return statearr_31189;
})();
var statearr_31190_32860 = state_31155__$1;
(statearr_31190_32860[(2)] = null);

(statearr_31190_32860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (11))){
var inst_31116 = (state_31155[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31155,(10),Object,null,(9));
var inst_31128 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31116) : chs__$1.call(null,inst_31116));
var inst_31129 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31116) : done.call(null,inst_31116));
var inst_31130 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31128,inst_31129);
var state_31155__$1 = state_31155;
var statearr_31191_32861 = state_31155__$1;
(statearr_31191_32861[(2)] = inst_31130);


cljs.core.async.impl.ioc_helpers.process_exception(state_31155__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (9))){
var inst_31116 = (state_31155[(7)]);
var inst_31132 = (state_31155[(2)]);
var inst_31133 = (inst_31116 + (1));
var inst_31116__$1 = inst_31133;
var state_31155__$1 = (function (){var statearr_31192 = state_31155;
(statearr_31192[(7)] = inst_31116__$1);

(statearr_31192[(10)] = inst_31132);

return statearr_31192;
})();
var statearr_31193_32862 = state_31155__$1;
(statearr_31193_32862[(2)] = null);

(statearr_31193_32862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (5))){
var inst_31139 = (state_31155[(2)]);
var state_31155__$1 = (function (){var statearr_31194 = state_31155;
(statearr_31194[(11)] = inst_31139);

return statearr_31194;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31155__$1,(12),dchan);
} else {
if((state_val_31156 === (14))){
var inst_31141 = (state_31155[(8)]);
var inst_31146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31141);
var state_31155__$1 = state_31155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31155__$1,(16),out,inst_31146);
} else {
if((state_val_31156 === (16))){
var inst_31148 = (state_31155[(2)]);
var state_31155__$1 = (function (){var statearr_31196 = state_31155;
(statearr_31196[(12)] = inst_31148);

return statearr_31196;
})();
var statearr_31197_32863 = state_31155__$1;
(statearr_31197_32863[(2)] = null);

(statearr_31197_32863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (10))){
var inst_31122 = (state_31155[(2)]);
var inst_31124 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31155__$1 = (function (){var statearr_31198 = state_31155;
(statearr_31198[(13)] = inst_31122);

return statearr_31198;
})();
var statearr_31199_32864 = state_31155__$1;
(statearr_31199_32864[(2)] = inst_31124);


cljs.core.async.impl.ioc_helpers.process_exception(state_31155__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31156 === (8))){
var inst_31137 = (state_31155[(2)]);
var state_31155__$1 = state_31155;
var statearr_31200_32868 = state_31155__$1;
(statearr_31200_32868[(2)] = inst_31137);

(statearr_31200_32868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_31201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31201[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_31201[(1)] = (1));

return statearr_31201;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_31155){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_31155);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e31202){if((e31202 instanceof Object)){
var ex__29029__auto__ = e31202;
var statearr_31203_32873 = state_31155;
(statearr_31203_32873[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32874 = state_31155;
state_31155 = G__32874;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_31155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_31155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_31208 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_31208[(6)] = c__29262__auto___32849);

return statearr_31208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31214 = arguments.length;
switch (G__31214) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29262__auto___32876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_31252){
var state_val_31253 = (state_31252[(1)]);
if((state_val_31253 === (7))){
var inst_31232 = (state_31252[(7)]);
var inst_31231 = (state_31252[(8)]);
var inst_31231__$1 = (state_31252[(2)]);
var inst_31232__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31231__$1,(0),null);
var inst_31233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31231__$1,(1),null);
var inst_31234 = (inst_31232__$1 == null);
var state_31252__$1 = (function (){var statearr_31259 = state_31252;
(statearr_31259[(7)] = inst_31232__$1);

(statearr_31259[(8)] = inst_31231__$1);

(statearr_31259[(9)] = inst_31233);

return statearr_31259;
})();
if(cljs.core.truth_(inst_31234)){
var statearr_31260_32877 = state_31252__$1;
(statearr_31260_32877[(1)] = (8));

} else {
var statearr_31261_32878 = state_31252__$1;
(statearr_31261_32878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (1))){
var inst_31221 = cljs.core.vec(chs);
var inst_31222 = inst_31221;
var state_31252__$1 = (function (){var statearr_31262 = state_31252;
(statearr_31262[(10)] = inst_31222);

return statearr_31262;
})();
var statearr_31263_32879 = state_31252__$1;
(statearr_31263_32879[(2)] = null);

(statearr_31263_32879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (4))){
var inst_31222 = (state_31252[(10)]);
var state_31252__$1 = state_31252;
return cljs.core.async.ioc_alts_BANG_(state_31252__$1,(7),inst_31222);
} else {
if((state_val_31253 === (6))){
var inst_31248 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
var statearr_31269_32880 = state_31252__$1;
(statearr_31269_32880[(2)] = inst_31248);

(statearr_31269_32880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (3))){
var inst_31250 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31252__$1,inst_31250);
} else {
if((state_val_31253 === (2))){
var inst_31222 = (state_31252[(10)]);
var inst_31224 = cljs.core.count(inst_31222);
var inst_31225 = (inst_31224 > (0));
var state_31252__$1 = state_31252;
if(cljs.core.truth_(inst_31225)){
var statearr_31271_32882 = state_31252__$1;
(statearr_31271_32882[(1)] = (4));

} else {
var statearr_31272_32883 = state_31252__$1;
(statearr_31272_32883[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (11))){
var inst_31222 = (state_31252[(10)]);
var inst_31241 = (state_31252[(2)]);
var tmp31270 = inst_31222;
var inst_31222__$1 = tmp31270;
var state_31252__$1 = (function (){var statearr_31273 = state_31252;
(statearr_31273[(11)] = inst_31241);

(statearr_31273[(10)] = inst_31222__$1);

return statearr_31273;
})();
var statearr_31274_32884 = state_31252__$1;
(statearr_31274_32884[(2)] = null);

(statearr_31274_32884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (9))){
var inst_31232 = (state_31252[(7)]);
var state_31252__$1 = state_31252;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31252__$1,(11),out,inst_31232);
} else {
if((state_val_31253 === (5))){
var inst_31246 = cljs.core.async.close_BANG_(out);
var state_31252__$1 = state_31252;
var statearr_31287_32885 = state_31252__$1;
(statearr_31287_32885[(2)] = inst_31246);

(statearr_31287_32885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (10))){
var inst_31244 = (state_31252[(2)]);
var state_31252__$1 = state_31252;
var statearr_31288_32886 = state_31252__$1;
(statearr_31288_32886[(2)] = inst_31244);

(statearr_31288_32886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31253 === (8))){
var inst_31232 = (state_31252[(7)]);
var inst_31231 = (state_31252[(8)]);
var inst_31222 = (state_31252[(10)]);
var inst_31233 = (state_31252[(9)]);
var inst_31236 = (function (){var cs = inst_31222;
var vec__31227 = inst_31231;
var v = inst_31232;
var c = inst_31233;
return (function (p1__31211_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31211_SHARP_);
});
})();
var inst_31237 = cljs.core.filterv(inst_31236,inst_31222);
var inst_31222__$1 = inst_31237;
var state_31252__$1 = (function (){var statearr_31293 = state_31252;
(statearr_31293[(10)] = inst_31222__$1);

return statearr_31293;
})();
var statearr_31294_32888 = state_31252__$1;
(statearr_31294_32888[(2)] = null);

(statearr_31294_32888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_31295 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31295[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_31295[(1)] = (1));

return statearr_31295;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_31252){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_31252);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e31296){if((e31296 instanceof Object)){
var ex__29029__auto__ = e31296;
var statearr_31297_32889 = state_31252;
(statearr_31297_32889[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31296;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32890 = state_31252;
state_31252 = G__32890;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_31252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_31252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_31298 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_31298[(6)] = c__29262__auto___32876);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31301 = arguments.length;
switch (G__31301) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29262__auto___32892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_31330){
var state_val_31331 = (state_31330[(1)]);
if((state_val_31331 === (7))){
var inst_31310 = (state_31330[(7)]);
var inst_31310__$1 = (state_31330[(2)]);
var inst_31311 = (inst_31310__$1 == null);
var inst_31312 = cljs.core.not(inst_31311);
var state_31330__$1 = (function (){var statearr_31338 = state_31330;
(statearr_31338[(7)] = inst_31310__$1);

return statearr_31338;
})();
if(inst_31312){
var statearr_31339_32893 = state_31330__$1;
(statearr_31339_32893[(1)] = (8));

} else {
var statearr_31340_32894 = state_31330__$1;
(statearr_31340_32894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (1))){
var inst_31302 = (0);
var state_31330__$1 = (function (){var statearr_31344 = state_31330;
(statearr_31344[(8)] = inst_31302);

return statearr_31344;
})();
var statearr_31345_32895 = state_31330__$1;
(statearr_31345_32895[(2)] = null);

(statearr_31345_32895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (4))){
var state_31330__$1 = state_31330;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31330__$1,(7),ch);
} else {
if((state_val_31331 === (6))){
var inst_31325 = (state_31330[(2)]);
var state_31330__$1 = state_31330;
var statearr_31349_32896 = state_31330__$1;
(statearr_31349_32896[(2)] = inst_31325);

(statearr_31349_32896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (3))){
var inst_31327 = (state_31330[(2)]);
var inst_31328 = cljs.core.async.close_BANG_(out);
var state_31330__$1 = (function (){var statearr_31350 = state_31330;
(statearr_31350[(9)] = inst_31327);

return statearr_31350;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31330__$1,inst_31328);
} else {
if((state_val_31331 === (2))){
var inst_31302 = (state_31330[(8)]);
var inst_31307 = (inst_31302 < n);
var state_31330__$1 = state_31330;
if(cljs.core.truth_(inst_31307)){
var statearr_31352_32901 = state_31330__$1;
(statearr_31352_32901[(1)] = (4));

} else {
var statearr_31353_32902 = state_31330__$1;
(statearr_31353_32902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (11))){
var inst_31302 = (state_31330[(8)]);
var inst_31315 = (state_31330[(2)]);
var inst_31316 = (inst_31302 + (1));
var inst_31302__$1 = inst_31316;
var state_31330__$1 = (function (){var statearr_31354 = state_31330;
(statearr_31354[(8)] = inst_31302__$1);

(statearr_31354[(10)] = inst_31315);

return statearr_31354;
})();
var statearr_31355_32903 = state_31330__$1;
(statearr_31355_32903[(2)] = null);

(statearr_31355_32903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (9))){
var state_31330__$1 = state_31330;
var statearr_31356_32904 = state_31330__$1;
(statearr_31356_32904[(2)] = null);

(statearr_31356_32904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (5))){
var state_31330__$1 = state_31330;
var statearr_31358_32906 = state_31330__$1;
(statearr_31358_32906[(2)] = null);

(statearr_31358_32906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (10))){
var inst_31321 = (state_31330[(2)]);
var state_31330__$1 = state_31330;
var statearr_31360_32910 = state_31330__$1;
(statearr_31360_32910[(2)] = inst_31321);

(statearr_31360_32910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31331 === (8))){
var inst_31310 = (state_31330[(7)]);
var state_31330__$1 = state_31330;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31330__$1,(11),out,inst_31310);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_31361 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31361[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_31361[(1)] = (1));

return statearr_31361;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_31330){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_31330);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e31365){if((e31365 instanceof Object)){
var ex__29029__auto__ = e31365;
var statearr_31368_32912 = state_31330;
(statearr_31368_32912[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31365;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32914 = state_31330;
state_31330 = G__32914;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_31330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_31330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_31374 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_31374[(6)] = c__29262__auto___32892);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31387 = (function (f,ch,meta31388){
this.f = f;
this.ch = ch;
this.meta31388 = meta31388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31389,meta31388__$1){
var self__ = this;
var _31389__$1 = this;
return (new cljs.core.async.t_cljs$core$async31387(self__.f,self__.ch,meta31388__$1));
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31389){
var self__ = this;
var _31389__$1 = this;
return self__.meta31388;
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31394 = (function (f,ch,meta31388,_,fn1,meta31395){
this.f = f;
this.ch = ch;
this.meta31388 = meta31388;
this._ = _;
this.fn1 = fn1;
this.meta31395 = meta31395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31396,meta31395__$1){
var self__ = this;
var _31396__$1 = this;
return (new cljs.core.async.t_cljs$core$async31394(self__.f,self__.ch,self__.meta31388,self__._,self__.fn1,meta31395__$1));
}));

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31396){
var self__ = this;
var _31396__$1 = this;
return self__.meta31395;
}));

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31379_SHARP_){
var G__31399 = (((p1__31379_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31379_SHARP_) : self__.f.call(null,p1__31379_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31399) : f1.call(null,G__31399));
});
}));

(cljs.core.async.t_cljs$core$async31394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31388","meta31388",-1769290576,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31387","cljs.core.async/t_cljs$core$async31387",465092178,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31395","meta31395",-385901930,null)], null);
}));

(cljs.core.async.t_cljs$core$async31394.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31394.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31394");

(cljs.core.async.t_cljs$core$async31394.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31394");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31394.
 */
cljs.core.async.__GT_t_cljs$core$async31394 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31394(f__$1,ch__$1,meta31388__$1,___$2,fn1__$1,meta31395){
return (new cljs.core.async.t_cljs$core$async31394(f__$1,ch__$1,meta31388__$1,___$2,fn1__$1,meta31395));
});

}

return (new cljs.core.async.t_cljs$core$async31394(self__.f,self__.ch,self__.meta31388,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31402 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31402) : self__.f.call(null,G__31402));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31388","meta31388",-1769290576,null)], null);
}));

(cljs.core.async.t_cljs$core$async31387.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31387");

(cljs.core.async.t_cljs$core$async31387.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31387");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31387.
 */
cljs.core.async.__GT_t_cljs$core$async31387 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31387(f__$1,ch__$1,meta31388){
return (new cljs.core.async.t_cljs$core$async31387(f__$1,ch__$1,meta31388));
});

}

return (new cljs.core.async.t_cljs$core$async31387(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31405 = (function (f,ch,meta31406){
this.f = f;
this.ch = ch;
this.meta31406 = meta31406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31407,meta31406__$1){
var self__ = this;
var _31407__$1 = this;
return (new cljs.core.async.t_cljs$core$async31405(self__.f,self__.ch,meta31406__$1));
}));

(cljs.core.async.t_cljs$core$async31405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31407){
var self__ = this;
var _31407__$1 = this;
return self__.meta31406;
}));

(cljs.core.async.t_cljs$core$async31405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31406","meta31406",1891921378,null)], null);
}));

(cljs.core.async.t_cljs$core$async31405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31405");

(cljs.core.async.t_cljs$core$async31405.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31405.
 */
cljs.core.async.__GT_t_cljs$core$async31405 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31405(f__$1,ch__$1,meta31406){
return (new cljs.core.async.t_cljs$core$async31405(f__$1,ch__$1,meta31406));
});

}

return (new cljs.core.async.t_cljs$core$async31405(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31409 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31409 = (function (p,ch,meta31410){
this.p = p;
this.ch = ch;
this.meta31410 = meta31410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31411,meta31410__$1){
var self__ = this;
var _31411__$1 = this;
return (new cljs.core.async.t_cljs$core$async31409(self__.p,self__.ch,meta31410__$1));
}));

(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31411){
var self__ = this;
var _31411__$1 = this;
return self__.meta31410;
}));

(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31410","meta31410",1822578715,null)], null);
}));

(cljs.core.async.t_cljs$core$async31409.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31409");

(cljs.core.async.t_cljs$core$async31409.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31409");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31409.
 */
cljs.core.async.__GT_t_cljs$core$async31409 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31409(p__$1,ch__$1,meta31410){
return (new cljs.core.async.t_cljs$core$async31409(p__$1,ch__$1,meta31410));
});

}

return (new cljs.core.async.t_cljs$core$async31409(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31419 = arguments.length;
switch (G__31419) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29262__auto___32921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_31441){
var state_val_31442 = (state_31441[(1)]);
if((state_val_31442 === (7))){
var inst_31437 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31445_32923 = state_31441__$1;
(statearr_31445_32923[(2)] = inst_31437);

(statearr_31445_32923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (1))){
var state_31441__$1 = state_31441;
var statearr_31447_32924 = state_31441__$1;
(statearr_31447_32924[(2)] = null);

(statearr_31447_32924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (4))){
var inst_31423 = (state_31441[(7)]);
var inst_31423__$1 = (state_31441[(2)]);
var inst_31424 = (inst_31423__$1 == null);
var state_31441__$1 = (function (){var statearr_31448 = state_31441;
(statearr_31448[(7)] = inst_31423__$1);

return statearr_31448;
})();
if(cljs.core.truth_(inst_31424)){
var statearr_31449_32926 = state_31441__$1;
(statearr_31449_32926[(1)] = (5));

} else {
var statearr_31450_32927 = state_31441__$1;
(statearr_31450_32927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (6))){
var inst_31423 = (state_31441[(7)]);
var inst_31428 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31423) : p.call(null,inst_31423));
var state_31441__$1 = state_31441;
if(cljs.core.truth_(inst_31428)){
var statearr_31451_32928 = state_31441__$1;
(statearr_31451_32928[(1)] = (8));

} else {
var statearr_31452_32929 = state_31441__$1;
(statearr_31452_32929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (3))){
var inst_31439 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31441__$1,inst_31439);
} else {
if((state_val_31442 === (2))){
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31441__$1,(4),ch);
} else {
if((state_val_31442 === (11))){
var inst_31431 = (state_31441[(2)]);
var state_31441__$1 = state_31441;
var statearr_31454_32930 = state_31441__$1;
(statearr_31454_32930[(2)] = inst_31431);

(statearr_31454_32930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (9))){
var state_31441__$1 = state_31441;
var statearr_31456_32931 = state_31441__$1;
(statearr_31456_32931[(2)] = null);

(statearr_31456_32931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (5))){
var inst_31426 = cljs.core.async.close_BANG_(out);
var state_31441__$1 = state_31441;
var statearr_31457_32932 = state_31441__$1;
(statearr_31457_32932[(2)] = inst_31426);

(statearr_31457_32932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (10))){
var inst_31434 = (state_31441[(2)]);
var state_31441__$1 = (function (){var statearr_31458 = state_31441;
(statearr_31458[(8)] = inst_31434);

return statearr_31458;
})();
var statearr_31459_32936 = state_31441__$1;
(statearr_31459_32936[(2)] = null);

(statearr_31459_32936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31442 === (8))){
var inst_31423 = (state_31441[(7)]);
var state_31441__$1 = state_31441;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31441__$1,(11),out,inst_31423);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_31460 = [null,null,null,null,null,null,null,null,null];
(statearr_31460[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_31460[(1)] = (1));

return statearr_31460;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_31441){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_31441);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e31461){if((e31461 instanceof Object)){
var ex__29029__auto__ = e31461;
var statearr_31462_32941 = state_31441;
(statearr_31462_32941[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32945 = state_31441;
state_31441 = G__32945;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_31441){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_31441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_31463 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_31463[(6)] = c__29262__auto___32921);

return statearr_31463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31466 = arguments.length;
switch (G__31466) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_31535){
var state_val_31537 = (state_31535[(1)]);
if((state_val_31537 === (7))){
var inst_31530 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31541_32947 = state_31535__$1;
(statearr_31541_32947[(2)] = inst_31530);

(statearr_31541_32947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (20))){
var inst_31499 = (state_31535[(7)]);
var inst_31511 = (state_31535[(2)]);
var inst_31512 = cljs.core.next(inst_31499);
var inst_31484 = inst_31512;
var inst_31485 = null;
var inst_31486 = (0);
var inst_31487 = (0);
var state_31535__$1 = (function (){var statearr_31542 = state_31535;
(statearr_31542[(8)] = inst_31486);

(statearr_31542[(9)] = inst_31485);

(statearr_31542[(10)] = inst_31511);

(statearr_31542[(11)] = inst_31484);

(statearr_31542[(12)] = inst_31487);

return statearr_31542;
})();
var statearr_31543_32951 = state_31535__$1;
(statearr_31543_32951[(2)] = null);

(statearr_31543_32951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (1))){
var state_31535__$1 = state_31535;
var statearr_31544_32952 = state_31535__$1;
(statearr_31544_32952[(2)] = null);

(statearr_31544_32952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (4))){
var inst_31472 = (state_31535[(13)]);
var inst_31472__$1 = (state_31535[(2)]);
var inst_31474 = (inst_31472__$1 == null);
var state_31535__$1 = (function (){var statearr_31546 = state_31535;
(statearr_31546[(13)] = inst_31472__$1);

return statearr_31546;
})();
if(cljs.core.truth_(inst_31474)){
var statearr_31547_32953 = state_31535__$1;
(statearr_31547_32953[(1)] = (5));

} else {
var statearr_31548_32957 = state_31535__$1;
(statearr_31548_32957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (15))){
var state_31535__$1 = state_31535;
var statearr_31554_32958 = state_31535__$1;
(statearr_31554_32958[(2)] = null);

(statearr_31554_32958[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (21))){
var state_31535__$1 = state_31535;
var statearr_31559_32959 = state_31535__$1;
(statearr_31559_32959[(2)] = null);

(statearr_31559_32959[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (13))){
var inst_31486 = (state_31535[(8)]);
var inst_31485 = (state_31535[(9)]);
var inst_31484 = (state_31535[(11)]);
var inst_31487 = (state_31535[(12)]);
var inst_31495 = (state_31535[(2)]);
var inst_31496 = (inst_31487 + (1));
var tmp31551 = inst_31486;
var tmp31552 = inst_31485;
var tmp31553 = inst_31484;
var inst_31484__$1 = tmp31553;
var inst_31485__$1 = tmp31552;
var inst_31486__$1 = tmp31551;
var inst_31487__$1 = inst_31496;
var state_31535__$1 = (function (){var statearr_31561 = state_31535;
(statearr_31561[(8)] = inst_31486__$1);

(statearr_31561[(9)] = inst_31485__$1);

(statearr_31561[(11)] = inst_31484__$1);

(statearr_31561[(12)] = inst_31487__$1);

(statearr_31561[(14)] = inst_31495);

return statearr_31561;
})();
var statearr_31562_32960 = state_31535__$1;
(statearr_31562_32960[(2)] = null);

(statearr_31562_32960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (22))){
var state_31535__$1 = state_31535;
var statearr_31563_32961 = state_31535__$1;
(statearr_31563_32961[(2)] = null);

(statearr_31563_32961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (6))){
var inst_31472 = (state_31535[(13)]);
var inst_31482 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31472) : f.call(null,inst_31472));
var inst_31483 = cljs.core.seq(inst_31482);
var inst_31484 = inst_31483;
var inst_31485 = null;
var inst_31486 = (0);
var inst_31487 = (0);
var state_31535__$1 = (function (){var statearr_31564 = state_31535;
(statearr_31564[(8)] = inst_31486);

(statearr_31564[(9)] = inst_31485);

(statearr_31564[(11)] = inst_31484);

(statearr_31564[(12)] = inst_31487);

return statearr_31564;
})();
var statearr_31565_32965 = state_31535__$1;
(statearr_31565_32965[(2)] = null);

(statearr_31565_32965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (17))){
var inst_31499 = (state_31535[(7)]);
var inst_31503 = cljs.core.chunk_first(inst_31499);
var inst_31504 = cljs.core.chunk_rest(inst_31499);
var inst_31505 = cljs.core.count(inst_31503);
var inst_31484 = inst_31504;
var inst_31485 = inst_31503;
var inst_31486 = inst_31505;
var inst_31487 = (0);
var state_31535__$1 = (function (){var statearr_31567 = state_31535;
(statearr_31567[(8)] = inst_31486);

(statearr_31567[(9)] = inst_31485);

(statearr_31567[(11)] = inst_31484);

(statearr_31567[(12)] = inst_31487);

return statearr_31567;
})();
var statearr_31570_32966 = state_31535__$1;
(statearr_31570_32966[(2)] = null);

(statearr_31570_32966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (3))){
var inst_31532 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31535__$1,inst_31532);
} else {
if((state_val_31537 === (12))){
var inst_31520 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31573_32967 = state_31535__$1;
(statearr_31573_32967[(2)] = inst_31520);

(statearr_31573_32967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (2))){
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31535__$1,(4),in$);
} else {
if((state_val_31537 === (23))){
var inst_31528 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31575_32969 = state_31535__$1;
(statearr_31575_32969[(2)] = inst_31528);

(statearr_31575_32969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (19))){
var inst_31515 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31576_32970 = state_31535__$1;
(statearr_31576_32970[(2)] = inst_31515);

(statearr_31576_32970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (11))){
var inst_31484 = (state_31535[(11)]);
var inst_31499 = (state_31535[(7)]);
var inst_31499__$1 = cljs.core.seq(inst_31484);
var state_31535__$1 = (function (){var statearr_31582 = state_31535;
(statearr_31582[(7)] = inst_31499__$1);

return statearr_31582;
})();
if(inst_31499__$1){
var statearr_31583_32971 = state_31535__$1;
(statearr_31583_32971[(1)] = (14));

} else {
var statearr_31587_32972 = state_31535__$1;
(statearr_31587_32972[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (9))){
var inst_31522 = (state_31535[(2)]);
var inst_31523 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31535__$1 = (function (){var statearr_31591 = state_31535;
(statearr_31591[(15)] = inst_31522);

return statearr_31591;
})();
if(cljs.core.truth_(inst_31523)){
var statearr_31594_32982 = state_31535__$1;
(statearr_31594_32982[(1)] = (21));

} else {
var statearr_31595_32983 = state_31535__$1;
(statearr_31595_32983[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (5))){
var inst_31476 = cljs.core.async.close_BANG_(out);
var state_31535__$1 = state_31535;
var statearr_31596_32990 = state_31535__$1;
(statearr_31596_32990[(2)] = inst_31476);

(statearr_31596_32990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (14))){
var inst_31499 = (state_31535[(7)]);
var inst_31501 = cljs.core.chunked_seq_QMARK_(inst_31499);
var state_31535__$1 = state_31535;
if(inst_31501){
var statearr_31604_32991 = state_31535__$1;
(statearr_31604_32991[(1)] = (17));

} else {
var statearr_31608_32992 = state_31535__$1;
(statearr_31608_32992[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (16))){
var inst_31518 = (state_31535[(2)]);
var state_31535__$1 = state_31535;
var statearr_31612_32993 = state_31535__$1;
(statearr_31612_32993[(2)] = inst_31518);

(statearr_31612_32993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31537 === (10))){
var inst_31485 = (state_31535[(9)]);
var inst_31487 = (state_31535[(12)]);
var inst_31493 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31485,inst_31487);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31535__$1,(13),out,inst_31493);
} else {
if((state_val_31537 === (18))){
var inst_31499 = (state_31535[(7)]);
var inst_31508 = cljs.core.first(inst_31499);
var state_31535__$1 = state_31535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31535__$1,(20),out,inst_31508);
} else {
if((state_val_31537 === (8))){
var inst_31486 = (state_31535[(8)]);
var inst_31487 = (state_31535[(12)]);
var inst_31490 = (inst_31487 < inst_31486);
var inst_31491 = inst_31490;
var state_31535__$1 = state_31535;
if(cljs.core.truth_(inst_31491)){
var statearr_31616_32994 = state_31535__$1;
(statearr_31616_32994[(1)] = (10));

} else {
var statearr_31617_32995 = state_31535__$1;
(statearr_31617_32995[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29026__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29026__auto____0 = (function (){
var statearr_31618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31618[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29026__auto__);

(statearr_31618[(1)] = (1));

return statearr_31618;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29026__auto____1 = (function (state_31535){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_31535);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e31619){if((e31619 instanceof Object)){
var ex__29029__auto__ = e31619;
var statearr_31620_32996 = state_31535;
(statearr_31620_32996[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32997 = state_31535;
state_31535 = G__32997;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29026__auto__ = function(state_31535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29026__auto____1.call(this,state_31535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29026__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29026__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_31627 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_31627[(6)] = c__29262__auto__);

return statearr_31627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));

return c__29262__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31643 = arguments.length;
switch (G__31643) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31665 = arguments.length;
switch (G__31665) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31677 = arguments.length;
switch (G__31677) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29262__auto___33007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_31702){
var state_val_31703 = (state_31702[(1)]);
if((state_val_31703 === (7))){
var inst_31697 = (state_31702[(2)]);
var state_31702__$1 = state_31702;
var statearr_31704_33008 = state_31702__$1;
(statearr_31704_33008[(2)] = inst_31697);

(statearr_31704_33008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (1))){
var inst_31678 = null;
var state_31702__$1 = (function (){var statearr_31705 = state_31702;
(statearr_31705[(7)] = inst_31678);

return statearr_31705;
})();
var statearr_31706_33009 = state_31702__$1;
(statearr_31706_33009[(2)] = null);

(statearr_31706_33009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (4))){
var inst_31681 = (state_31702[(8)]);
var inst_31681__$1 = (state_31702[(2)]);
var inst_31682 = (inst_31681__$1 == null);
var inst_31683 = cljs.core.not(inst_31682);
var state_31702__$1 = (function (){var statearr_31713 = state_31702;
(statearr_31713[(8)] = inst_31681__$1);

return statearr_31713;
})();
if(inst_31683){
var statearr_31715_33016 = state_31702__$1;
(statearr_31715_33016[(1)] = (5));

} else {
var statearr_31717_33017 = state_31702__$1;
(statearr_31717_33017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (6))){
var state_31702__$1 = state_31702;
var statearr_31721_33018 = state_31702__$1;
(statearr_31721_33018[(2)] = null);

(statearr_31721_33018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (3))){
var inst_31699 = (state_31702[(2)]);
var inst_31700 = cljs.core.async.close_BANG_(out);
var state_31702__$1 = (function (){var statearr_31725 = state_31702;
(statearr_31725[(9)] = inst_31699);

return statearr_31725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31702__$1,inst_31700);
} else {
if((state_val_31703 === (2))){
var state_31702__$1 = state_31702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31702__$1,(4),ch);
} else {
if((state_val_31703 === (11))){
var inst_31681 = (state_31702[(8)]);
var inst_31691 = (state_31702[(2)]);
var inst_31678 = inst_31681;
var state_31702__$1 = (function (){var statearr_31741 = state_31702;
(statearr_31741[(10)] = inst_31691);

(statearr_31741[(7)] = inst_31678);

return statearr_31741;
})();
var statearr_31746_33019 = state_31702__$1;
(statearr_31746_33019[(2)] = null);

(statearr_31746_33019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (9))){
var inst_31681 = (state_31702[(8)]);
var state_31702__$1 = state_31702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31702__$1,(11),out,inst_31681);
} else {
if((state_val_31703 === (5))){
var inst_31678 = (state_31702[(7)]);
var inst_31681 = (state_31702[(8)]);
var inst_31685 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31681,inst_31678);
var state_31702__$1 = state_31702;
if(inst_31685){
var statearr_31754_33020 = state_31702__$1;
(statearr_31754_33020[(1)] = (8));

} else {
var statearr_31755_33021 = state_31702__$1;
(statearr_31755_33021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (10))){
var inst_31694 = (state_31702[(2)]);
var state_31702__$1 = state_31702;
var statearr_31758_33022 = state_31702__$1;
(statearr_31758_33022[(2)] = inst_31694);

(statearr_31758_33022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31703 === (8))){
var inst_31678 = (state_31702[(7)]);
var tmp31752 = inst_31678;
var inst_31678__$1 = tmp31752;
var state_31702__$1 = (function (){var statearr_31760 = state_31702;
(statearr_31760[(7)] = inst_31678__$1);

return statearr_31760;
})();
var statearr_31762_33029 = state_31702__$1;
(statearr_31762_33029[(2)] = null);

(statearr_31762_33029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_31764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31764[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_31764[(1)] = (1));

return statearr_31764;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_31702){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_31702);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e31769){if((e31769 instanceof Object)){
var ex__29029__auto__ = e31769;
var statearr_31771_33030 = state_31702;
(statearr_31771_33030[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33031 = state_31702;
state_31702 = G__33031;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_31702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_31702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_31772 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_31772[(6)] = c__29262__auto___33007);

return statearr_31772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31781 = arguments.length;
switch (G__31781) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29262__auto___33033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_31835){
var state_val_31836 = (state_31835[(1)]);
if((state_val_31836 === (7))){
var inst_31831 = (state_31835[(2)]);
var state_31835__$1 = state_31835;
var statearr_31844_33034 = state_31835__$1;
(statearr_31844_33034[(2)] = inst_31831);

(statearr_31844_33034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (1))){
var inst_31793 = (new Array(n));
var inst_31795 = inst_31793;
var inst_31796 = (0);
var state_31835__$1 = (function (){var statearr_31846 = state_31835;
(statearr_31846[(7)] = inst_31795);

(statearr_31846[(8)] = inst_31796);

return statearr_31846;
})();
var statearr_31848_33035 = state_31835__$1;
(statearr_31848_33035[(2)] = null);

(statearr_31848_33035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (4))){
var inst_31800 = (state_31835[(9)]);
var inst_31800__$1 = (state_31835[(2)]);
var inst_31803 = (inst_31800__$1 == null);
var inst_31804 = cljs.core.not(inst_31803);
var state_31835__$1 = (function (){var statearr_31854 = state_31835;
(statearr_31854[(9)] = inst_31800__$1);

return statearr_31854;
})();
if(inst_31804){
var statearr_31856_33036 = state_31835__$1;
(statearr_31856_33036[(1)] = (5));

} else {
var statearr_31857_33037 = state_31835__$1;
(statearr_31857_33037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (15))){
var inst_31825 = (state_31835[(2)]);
var state_31835__$1 = state_31835;
var statearr_31860_33041 = state_31835__$1;
(statearr_31860_33041[(2)] = inst_31825);

(statearr_31860_33041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (13))){
var state_31835__$1 = state_31835;
var statearr_31865_33042 = state_31835__$1;
(statearr_31865_33042[(2)] = null);

(statearr_31865_33042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (6))){
var inst_31796 = (state_31835[(8)]);
var inst_31821 = (inst_31796 > (0));
var state_31835__$1 = state_31835;
if(cljs.core.truth_(inst_31821)){
var statearr_31869_33043 = state_31835__$1;
(statearr_31869_33043[(1)] = (12));

} else {
var statearr_31870_33044 = state_31835__$1;
(statearr_31870_33044[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (3))){
var inst_31833 = (state_31835[(2)]);
var state_31835__$1 = state_31835;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31835__$1,inst_31833);
} else {
if((state_val_31836 === (12))){
var inst_31795 = (state_31835[(7)]);
var inst_31823 = cljs.core.vec(inst_31795);
var state_31835__$1 = state_31835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31835__$1,(15),out,inst_31823);
} else {
if((state_val_31836 === (2))){
var state_31835__$1 = state_31835;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31835__$1,(4),ch);
} else {
if((state_val_31836 === (11))){
var inst_31815 = (state_31835[(2)]);
var inst_31816 = (new Array(n));
var inst_31795 = inst_31816;
var inst_31796 = (0);
var state_31835__$1 = (function (){var statearr_31878 = state_31835;
(statearr_31878[(10)] = inst_31815);

(statearr_31878[(7)] = inst_31795);

(statearr_31878[(8)] = inst_31796);

return statearr_31878;
})();
var statearr_31879_33045 = state_31835__$1;
(statearr_31879_33045[(2)] = null);

(statearr_31879_33045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (9))){
var inst_31795 = (state_31835[(7)]);
var inst_31813 = cljs.core.vec(inst_31795);
var state_31835__$1 = state_31835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31835__$1,(11),out,inst_31813);
} else {
if((state_val_31836 === (5))){
var inst_31800 = (state_31835[(9)]);
var inst_31808 = (state_31835[(11)]);
var inst_31795 = (state_31835[(7)]);
var inst_31796 = (state_31835[(8)]);
var inst_31806 = (inst_31795[inst_31796] = inst_31800);
var inst_31808__$1 = (inst_31796 + (1));
var inst_31809 = (inst_31808__$1 < n);
var state_31835__$1 = (function (){var statearr_31888 = state_31835;
(statearr_31888[(11)] = inst_31808__$1);

(statearr_31888[(12)] = inst_31806);

return statearr_31888;
})();
if(cljs.core.truth_(inst_31809)){
var statearr_31889_33049 = state_31835__$1;
(statearr_31889_33049[(1)] = (8));

} else {
var statearr_31892_33050 = state_31835__$1;
(statearr_31892_33050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (14))){
var inst_31828 = (state_31835[(2)]);
var inst_31829 = cljs.core.async.close_BANG_(out);
var state_31835__$1 = (function (){var statearr_31899 = state_31835;
(statearr_31899[(13)] = inst_31828);

return statearr_31899;
})();
var statearr_31900_33051 = state_31835__$1;
(statearr_31900_33051[(2)] = inst_31829);

(statearr_31900_33051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (10))){
var inst_31819 = (state_31835[(2)]);
var state_31835__$1 = state_31835;
var statearr_31906_33052 = state_31835__$1;
(statearr_31906_33052[(2)] = inst_31819);

(statearr_31906_33052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31836 === (8))){
var inst_31808 = (state_31835[(11)]);
var inst_31795 = (state_31835[(7)]);
var tmp31897 = inst_31795;
var inst_31795__$1 = tmp31897;
var inst_31796 = inst_31808;
var state_31835__$1 = (function (){var statearr_31908 = state_31835;
(statearr_31908[(7)] = inst_31795__$1);

(statearr_31908[(8)] = inst_31796);

return statearr_31908;
})();
var statearr_31911_33055 = state_31835__$1;
(statearr_31911_33055[(2)] = null);

(statearr_31911_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_31913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31913[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_31913[(1)] = (1));

return statearr_31913;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_31835){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_31835);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e31916){if((e31916 instanceof Object)){
var ex__29029__auto__ = e31916;
var statearr_31917_33056 = state_31835;
(statearr_31917_33056[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33057 = state_31835;
state_31835 = G__33057;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_31835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_31835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_31918 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_31918[(6)] = c__29262__auto___33033);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31926 = arguments.length;
switch (G__31926) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29262__auto___33059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_31982){
var state_val_31983 = (state_31982[(1)]);
if((state_val_31983 === (7))){
var inst_31974 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
var statearr_31990_33060 = state_31982__$1;
(statearr_31990_33060[(2)] = inst_31974);

(statearr_31990_33060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (1))){
var inst_31935 = [];
var inst_31936 = inst_31935;
var inst_31937 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31982__$1 = (function (){var statearr_31991 = state_31982;
(statearr_31991[(7)] = inst_31937);

(statearr_31991[(8)] = inst_31936);

return statearr_31991;
})();
var statearr_31994_33061 = state_31982__$1;
(statearr_31994_33061[(2)] = null);

(statearr_31994_33061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (4))){
var inst_31940 = (state_31982[(9)]);
var inst_31940__$1 = (state_31982[(2)]);
var inst_31942 = (inst_31940__$1 == null);
var inst_31943 = cljs.core.not(inst_31942);
var state_31982__$1 = (function (){var statearr_31995 = state_31982;
(statearr_31995[(9)] = inst_31940__$1);

return statearr_31995;
})();
if(inst_31943){
var statearr_31996_33063 = state_31982__$1;
(statearr_31996_33063[(1)] = (5));

} else {
var statearr_32001_33064 = state_31982__$1;
(statearr_32001_33064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (15))){
var inst_31968 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
var statearr_32003_33066 = state_31982__$1;
(statearr_32003_33066[(2)] = inst_31968);

(statearr_32003_33066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (13))){
var state_31982__$1 = state_31982;
var statearr_32005_33067 = state_31982__$1;
(statearr_32005_33067[(2)] = null);

(statearr_32005_33067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (6))){
var inst_31936 = (state_31982[(8)]);
var inst_31963 = inst_31936.length;
var inst_31964 = (inst_31963 > (0));
var state_31982__$1 = state_31982;
if(cljs.core.truth_(inst_31964)){
var statearr_32008_33068 = state_31982__$1;
(statearr_32008_33068[(1)] = (12));

} else {
var statearr_32011_33069 = state_31982__$1;
(statearr_32011_33069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (3))){
var inst_31976 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31982__$1,inst_31976);
} else {
if((state_val_31983 === (12))){
var inst_31936 = (state_31982[(8)]);
var inst_31966 = cljs.core.vec(inst_31936);
var state_31982__$1 = state_31982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31982__$1,(15),out,inst_31966);
} else {
if((state_val_31983 === (2))){
var state_31982__$1 = state_31982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31982__$1,(4),ch);
} else {
if((state_val_31983 === (11))){
var inst_31940 = (state_31982[(9)]);
var inst_31946 = (state_31982[(10)]);
var inst_31956 = (state_31982[(2)]);
var inst_31957 = [];
var inst_31958 = inst_31957.push(inst_31940);
var inst_31936 = inst_31957;
var inst_31937 = inst_31946;
var state_31982__$1 = (function (){var statearr_32016 = state_31982;
(statearr_32016[(7)] = inst_31937);

(statearr_32016[(8)] = inst_31936);

(statearr_32016[(11)] = inst_31956);

(statearr_32016[(12)] = inst_31958);

return statearr_32016;
})();
var statearr_32019_33070 = state_31982__$1;
(statearr_32019_33070[(2)] = null);

(statearr_32019_33070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (9))){
var inst_31936 = (state_31982[(8)]);
var inst_31954 = cljs.core.vec(inst_31936);
var state_31982__$1 = state_31982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31982__$1,(11),out,inst_31954);
} else {
if((state_val_31983 === (5))){
var inst_31937 = (state_31982[(7)]);
var inst_31940 = (state_31982[(9)]);
var inst_31946 = (state_31982[(10)]);
var inst_31946__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31940) : f.call(null,inst_31940));
var inst_31947 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31946__$1,inst_31937);
var inst_31948 = cljs.core.keyword_identical_QMARK_(inst_31937,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31949 = ((inst_31947) || (inst_31948));
var state_31982__$1 = (function (){var statearr_32026 = state_31982;
(statearr_32026[(10)] = inst_31946__$1);

return statearr_32026;
})();
if(cljs.core.truth_(inst_31949)){
var statearr_32027_33080 = state_31982__$1;
(statearr_32027_33080[(1)] = (8));

} else {
var statearr_32028_33081 = state_31982__$1;
(statearr_32028_33081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (14))){
var inst_31971 = (state_31982[(2)]);
var inst_31972 = cljs.core.async.close_BANG_(out);
var state_31982__$1 = (function (){var statearr_32034 = state_31982;
(statearr_32034[(13)] = inst_31971);

return statearr_32034;
})();
var statearr_32035_33083 = state_31982__$1;
(statearr_32035_33083[(2)] = inst_31972);

(statearr_32035_33083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (10))){
var inst_31961 = (state_31982[(2)]);
var state_31982__$1 = state_31982;
var statearr_32036_33085 = state_31982__$1;
(statearr_32036_33085[(2)] = inst_31961);

(statearr_32036_33085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31983 === (8))){
var inst_31936 = (state_31982[(8)]);
var inst_31940 = (state_31982[(9)]);
var inst_31946 = (state_31982[(10)]);
var inst_31951 = inst_31936.push(inst_31940);
var tmp32033 = inst_31936;
var inst_31936__$1 = tmp32033;
var inst_31937 = inst_31946;
var state_31982__$1 = (function (){var statearr_32039 = state_31982;
(statearr_32039[(7)] = inst_31937);

(statearr_32039[(8)] = inst_31936__$1);

(statearr_32039[(14)] = inst_31951);

return statearr_32039;
})();
var statearr_32040_33089 = state_31982__$1;
(statearr_32040_33089[(2)] = null);

(statearr_32040_33089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29026__auto__ = null;
var cljs$core$async$state_machine__29026__auto____0 = (function (){
var statearr_32045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32045[(0)] = cljs$core$async$state_machine__29026__auto__);

(statearr_32045[(1)] = (1));

return statearr_32045;
});
var cljs$core$async$state_machine__29026__auto____1 = (function (state_31982){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_31982);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e32048){if((e32048 instanceof Object)){
var ex__29029__auto__ = e32048;
var statearr_32050_33090 = state_31982;
(statearr_32050_33090[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32048;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33091 = state_31982;
state_31982 = G__33091;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
cljs$core$async$state_machine__29026__auto__ = function(state_31982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29026__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29026__auto____1.call(this,state_31982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29026__auto____0;
cljs$core$async$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29026__auto____1;
return cljs$core$async$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_32057 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_32057[(6)] = c__29262__auto___33059);

return statearr_32057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
