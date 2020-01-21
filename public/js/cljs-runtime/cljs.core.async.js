goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30593 = arguments.length;
switch (G__30593) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30596 = (function (f,blockable,meta30597){
this.f = f;
this.blockable = blockable;
this.meta30597 = meta30597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30598,meta30597__$1){
var self__ = this;
var _30598__$1 = this;
return (new cljs.core.async.t_cljs$core$async30596(self__.f,self__.blockable,meta30597__$1));
});

cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30598){
var self__ = this;
var _30598__$1 = this;
return self__.meta30597;
});

cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30597","meta30597",-524898692,null)], null);
});

cljs.core.async.t_cljs$core$async30596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30596";

cljs.core.async.t_cljs$core$async30596.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30596");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30596.
 */
cljs.core.async.__GT_t_cljs$core$async30596 = (function cljs$core$async$__GT_t_cljs$core$async30596(f__$1,blockable__$1,meta30597){
return (new cljs.core.async.t_cljs$core$async30596(f__$1,blockable__$1,meta30597));
});

}

return (new cljs.core.async.t_cljs$core$async30596(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__30613 = arguments.length;
switch (G__30613) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30629 = arguments.length;
switch (G__30629) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__30635 = arguments.length;
switch (G__30635) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33156 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33156) : fn1.call(null,val_33156));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33156,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33156) : fn1.call(null,val_33156));
});})(val_33156,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__30655 = arguments.length;
switch (G__30655) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33173 = n;
var x_33174 = (0);
while(true){
if((x_33174 < n__4607__auto___33173)){
(a[x_33174] = (0));

var G__33175 = (x_33174 + (1));
x_33174 = G__33175;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__33177 = (i + (1));
i = G__33177;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30707 = (function (flag,meta30708){
this.flag = flag;
this.meta30708 = meta30708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30709,meta30708__$1){
var self__ = this;
var _30709__$1 = this;
return (new cljs.core.async.t_cljs$core$async30707(self__.flag,meta30708__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30709){
var self__ = this;
var _30709__$1 = this;
return self__.meta30708;
});})(flag))
;

cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30707.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30708","meta30708",1804482368,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30707.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30707";

cljs.core.async.t_cljs$core$async30707.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30707");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30707.
 */
cljs.core.async.__GT_t_cljs$core$async30707 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30707(flag__$1,meta30708){
return (new cljs.core.async.t_cljs$core$async30707(flag__$1,meta30708));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30707(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30732 = (function (flag,cb,meta30733){
this.flag = flag;
this.cb = cb;
this.meta30733 = meta30733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30734,meta30733__$1){
var self__ = this;
var _30734__$1 = this;
return (new cljs.core.async.t_cljs$core$async30732(self__.flag,self__.cb,meta30733__$1));
});

cljs.core.async.t_cljs$core$async30732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30734){
var self__ = this;
var _30734__$1 = this;
return self__.meta30733;
});

cljs.core.async.t_cljs$core$async30732.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30732.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30733","meta30733",428211823,null)], null);
});

cljs.core.async.t_cljs$core$async30732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30732";

cljs.core.async.t_cljs$core$async30732.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30732");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30732.
 */
cljs.core.async.__GT_t_cljs$core$async30732 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30732(flag__$1,cb__$1,meta30733){
return (new cljs.core.async.t_cljs$core$async30732(flag__$1,cb__$1,meta30733));
});

}

return (new cljs.core.async.t_cljs$core$async30732(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__30743_SHARP_){
var G__30754 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30743_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30754) : fret.call(null,G__30754));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30744_SHARP_){
var G__30755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30744_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30755) : fret.call(null,G__30755));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33200 = (i + (1));
i = G__33200;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___33204 = arguments.length;
var i__4731__auto___33206 = (0);
while(true){
if((i__4731__auto___33206 < len__4730__auto___33204)){
args__4736__auto__.push((arguments[i__4731__auto___33206]));

var G__33208 = (i__4731__auto___33206 + (1));
i__4731__auto___33206 = G__33208;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30784){
var map__30785 = p__30784;
var map__30785__$1 = (((((!((map__30785 == null))))?(((((map__30785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30785):map__30785);
var opts = map__30785__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30766){
var G__30767 = cljs.core.first(seq30766);
var seq30766__$1 = cljs.core.next(seq30766);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30767,seq30766__$1);
});

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
var G__30825 = arguments.length;
switch (G__30825) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30511__auto___33217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33217){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33217){
return (function (state_30869){
var state_val_30871 = (state_30869[(1)]);
if((state_val_30871 === (7))){
var inst_30864 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30887_33222 = state_30869__$1;
(statearr_30887_33222[(2)] = inst_30864);

(statearr_30887_33222[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (1))){
var state_30869__$1 = state_30869;
var statearr_30888_33230 = state_30869__$1;
(statearr_30888_33230[(2)] = null);

(statearr_30888_33230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (4))){
var inst_30842 = (state_30869[(7)]);
var inst_30842__$1 = (state_30869[(2)]);
var inst_30843 = (inst_30842__$1 == null);
var state_30869__$1 = (function (){var statearr_30894 = state_30869;
(statearr_30894[(7)] = inst_30842__$1);

return statearr_30894;
})();
if(cljs.core.truth_(inst_30843)){
var statearr_30895_33234 = state_30869__$1;
(statearr_30895_33234[(1)] = (5));

} else {
var statearr_30900_33235 = state_30869__$1;
(statearr_30900_33235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (13))){
var state_30869__$1 = state_30869;
var statearr_30901_33236 = state_30869__$1;
(statearr_30901_33236[(2)] = null);

(statearr_30901_33236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (6))){
var inst_30842 = (state_30869[(7)]);
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30869__$1,(11),to,inst_30842);
} else {
if((state_val_30871 === (3))){
var inst_30867 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30869__$1,inst_30867);
} else {
if((state_val_30871 === (12))){
var state_30869__$1 = state_30869;
var statearr_30907_33237 = state_30869__$1;
(statearr_30907_33237[(2)] = null);

(statearr_30907_33237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (2))){
var state_30869__$1 = state_30869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30869__$1,(4),from);
} else {
if((state_val_30871 === (11))){
var inst_30855 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
if(cljs.core.truth_(inst_30855)){
var statearr_30908_33238 = state_30869__$1;
(statearr_30908_33238[(1)] = (12));

} else {
var statearr_30909_33241 = state_30869__$1;
(statearr_30909_33241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (9))){
var state_30869__$1 = state_30869;
var statearr_30910_33242 = state_30869__$1;
(statearr_30910_33242[(2)] = null);

(statearr_30910_33242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (5))){
var state_30869__$1 = state_30869;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30911_33243 = state_30869__$1;
(statearr_30911_33243[(1)] = (8));

} else {
var statearr_30912_33246 = state_30869__$1;
(statearr_30912_33246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (14))){
var inst_30862 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30913_33247 = state_30869__$1;
(statearr_30913_33247[(2)] = inst_30862);

(statearr_30913_33247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (10))){
var inst_30851 = (state_30869[(2)]);
var state_30869__$1 = state_30869;
var statearr_30914_33248 = state_30869__$1;
(statearr_30914_33248[(2)] = inst_30851);

(statearr_30914_33248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30871 === (8))){
var inst_30848 = cljs.core.async.close_BANG_(to);
var state_30869__$1 = state_30869;
var statearr_30916_33249 = state_30869__$1;
(statearr_30916_33249[(2)] = inst_30848);

(statearr_30916_33249[(1)] = (10));


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
});})(c__30511__auto___33217))
;
return ((function (switch__30258__auto__,c__30511__auto___33217){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_30918 = [null,null,null,null,null,null,null,null];
(statearr_30918[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_30918[(1)] = (1));

return statearr_30918;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_30869){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_30869);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e30919){if((e30919 instanceof Object)){
var ex__30262__auto__ = e30919;
var statearr_30921_33256 = state_30869;
(statearr_30921_33256[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33257 = state_30869;
state_30869 = G__33257;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_30869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_30869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33217))
})();
var state__30513__auto__ = (function (){var statearr_30922 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_30922[(6)] = c__30511__auto___33217);

return statearr_30922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33217))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__30924){
var vec__30925 = p__30924;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30925,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30925,(1),null);
var job = vec__30925;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30511__auto___33260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33260,res,vec__30925,v,p,job,jobs,results){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33260,res,vec__30925,v,p,job,jobs,results){
return (function (state_30932){
var state_val_30933 = (state_30932[(1)]);
if((state_val_30933 === (1))){
var state_30932__$1 = state_30932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30932__$1,(2),res,v);
} else {
if((state_val_30933 === (2))){
var inst_30929 = (state_30932[(2)]);
var inst_30930 = cljs.core.async.close_BANG_(res);
var state_30932__$1 = (function (){var statearr_30934 = state_30932;
(statearr_30934[(7)] = inst_30929);

return statearr_30934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30932__$1,inst_30930);
} else {
return null;
}
}
});})(c__30511__auto___33260,res,vec__30925,v,p,job,jobs,results))
;
return ((function (switch__30258__auto__,c__30511__auto___33260,res,vec__30925,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0 = (function (){
var statearr_30935 = [null,null,null,null,null,null,null,null];
(statearr_30935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__);

(statearr_30935[(1)] = (1));

return statearr_30935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1 = (function (state_30932){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_30932);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e30936){if((e30936 instanceof Object)){
var ex__30262__auto__ = e30936;
var statearr_30937_33272 = state_30932;
(statearr_30937_33272[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33273 = state_30932;
state_30932 = G__33273;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = function(state_30932){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1.call(this,state_30932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33260,res,vec__30925,v,p,job,jobs,results))
})();
var state__30513__auto__ = (function (){var statearr_30938 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_30938[(6)] = c__30511__auto___33260);

return statearr_30938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33260,res,vec__30925,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30940){
var vec__30941 = p__30940;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30941,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30941,(1),null);
var job = vec__30941;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33276 = n;
var __33277 = (0);
while(true){
if((__33277 < n__4607__auto___33276)){
var G__30944_33278 = type;
var G__30944_33279__$1 = (((G__30944_33278 instanceof cljs.core.Keyword))?G__30944_33278.fqn:null);
switch (G__30944_33279__$1) {
case "compute":
var c__30511__auto___33281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33277,c__30511__auto___33281,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (__33277,c__30511__auto___33281,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async){
return (function (state_30960){
var state_val_30961 = (state_30960[(1)]);
if((state_val_30961 === (1))){
var state_30960__$1 = state_30960;
var statearr_30962_33282 = state_30960__$1;
(statearr_30962_33282[(2)] = null);

(statearr_30962_33282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (2))){
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30960__$1,(4),jobs);
} else {
if((state_val_30961 === (3))){
var inst_30955 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30960__$1,inst_30955);
} else {
if((state_val_30961 === (4))){
var inst_30947 = (state_30960[(2)]);
var inst_30948 = process(inst_30947);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30948)){
var statearr_30966_33284 = state_30960__$1;
(statearr_30966_33284[(1)] = (5));

} else {
var statearr_30967_33286 = state_30960__$1;
(statearr_30967_33286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (5))){
var state_30960__$1 = state_30960;
var statearr_30968_33287 = state_30960__$1;
(statearr_30968_33287[(2)] = null);

(statearr_30968_33287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (6))){
var state_30960__$1 = state_30960;
var statearr_30969_33288 = state_30960__$1;
(statearr_30969_33288[(2)] = null);

(statearr_30969_33288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30961 === (7))){
var inst_30953 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30970_33289 = state_30960__$1;
(statearr_30970_33289[(2)] = inst_30953);

(statearr_30970_33289[(1)] = (3));


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
});})(__33277,c__30511__auto___33281,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async))
;
return ((function (__33277,switch__30258__auto__,c__30511__auto___33281,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0 = (function (){
var statearr_30971 = [null,null,null,null,null,null,null];
(statearr_30971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__);

(statearr_30971[(1)] = (1));

return statearr_30971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1 = (function (state_30960){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_30960);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e30972){if((e30972 instanceof Object)){
var ex__30262__auto__ = e30972;
var statearr_30973_33291 = state_30960;
(statearr_30973_33291[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33293 = state_30960;
state_30960 = G__33293;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = function(state_30960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1.call(this,state_30960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__;
})()
;})(__33277,switch__30258__auto__,c__30511__auto___33281,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async))
})();
var state__30513__auto__ = (function (){var statearr_30974 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_30974[(6)] = c__30511__auto___33281);

return statearr_30974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(__33277,c__30511__auto___33281,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async))
);


break;
case "async":
var c__30511__auto___33294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33277,c__30511__auto___33294,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (__33277,c__30511__auto___33294,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async){
return (function (state_30987){
var state_val_30988 = (state_30987[(1)]);
if((state_val_30988 === (1))){
var state_30987__$1 = state_30987;
var statearr_30990_33295 = state_30987__$1;
(statearr_30990_33295[(2)] = null);

(statearr_30990_33295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (2))){
var state_30987__$1 = state_30987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30987__$1,(4),jobs);
} else {
if((state_val_30988 === (3))){
var inst_30985 = (state_30987[(2)]);
var state_30987__$1 = state_30987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30987__$1,inst_30985);
} else {
if((state_val_30988 === (4))){
var inst_30977 = (state_30987[(2)]);
var inst_30978 = async(inst_30977);
var state_30987__$1 = state_30987;
if(cljs.core.truth_(inst_30978)){
var statearr_30991_33298 = state_30987__$1;
(statearr_30991_33298[(1)] = (5));

} else {
var statearr_30992_33299 = state_30987__$1;
(statearr_30992_33299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (5))){
var state_30987__$1 = state_30987;
var statearr_30993_33306 = state_30987__$1;
(statearr_30993_33306[(2)] = null);

(statearr_30993_33306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (6))){
var state_30987__$1 = state_30987;
var statearr_30994_33309 = state_30987__$1;
(statearr_30994_33309[(2)] = null);

(statearr_30994_33309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30988 === (7))){
var inst_30983 = (state_30987[(2)]);
var state_30987__$1 = state_30987;
var statearr_30995_33310 = state_30987__$1;
(statearr_30995_33310[(2)] = inst_30983);

(statearr_30995_33310[(1)] = (3));


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
});})(__33277,c__30511__auto___33294,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async))
;
return ((function (__33277,switch__30258__auto__,c__30511__auto___33294,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0 = (function (){
var statearr_30996 = [null,null,null,null,null,null,null];
(statearr_30996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__);

(statearr_30996[(1)] = (1));

return statearr_30996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1 = (function (state_30987){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_30987);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e30997){if((e30997 instanceof Object)){
var ex__30262__auto__ = e30997;
var statearr_30998_33313 = state_30987;
(statearr_30998_33313[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33314 = state_30987;
state_30987 = G__33314;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = function(state_30987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1.call(this,state_30987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__;
})()
;})(__33277,switch__30258__auto__,c__30511__auto___33294,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async))
})();
var state__30513__auto__ = (function (){var statearr_31000 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_31000[(6)] = c__30511__auto___33294);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(__33277,c__30511__auto___33294,G__30944_33278,G__30944_33279__$1,n__4607__auto___33276,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30944_33279__$1)].join('')));

}

var G__33317 = (__33277 + (1));
__33277 = G__33317;
continue;
} else {
}
break;
}

var c__30511__auto___33318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33318,jobs,results,process,async){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33318,jobs,results,process,async){
return (function (state_31022){
var state_val_31023 = (state_31022[(1)]);
if((state_val_31023 === (7))){
var inst_31018 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
var statearr_31027_33319 = state_31022__$1;
(statearr_31027_33319[(2)] = inst_31018);

(statearr_31027_33319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (1))){
var state_31022__$1 = state_31022;
var statearr_31028_33320 = state_31022__$1;
(statearr_31028_33320[(2)] = null);

(statearr_31028_33320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (4))){
var inst_31003 = (state_31022[(7)]);
var inst_31003__$1 = (state_31022[(2)]);
var inst_31004 = (inst_31003__$1 == null);
var state_31022__$1 = (function (){var statearr_31029 = state_31022;
(statearr_31029[(7)] = inst_31003__$1);

return statearr_31029;
})();
if(cljs.core.truth_(inst_31004)){
var statearr_31030_33321 = state_31022__$1;
(statearr_31030_33321[(1)] = (5));

} else {
var statearr_31031_33322 = state_31022__$1;
(statearr_31031_33322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (6))){
var inst_31008 = (state_31022[(8)]);
var inst_31003 = (state_31022[(7)]);
var inst_31008__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31010 = [inst_31003,inst_31008__$1];
var inst_31011 = (new cljs.core.PersistentVector(null,2,(5),inst_31009,inst_31010,null));
var state_31022__$1 = (function (){var statearr_31032 = state_31022;
(statearr_31032[(8)] = inst_31008__$1);

return statearr_31032;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31022__$1,(8),jobs,inst_31011);
} else {
if((state_val_31023 === (3))){
var inst_31020 = (state_31022[(2)]);
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31022__$1,inst_31020);
} else {
if((state_val_31023 === (2))){
var state_31022__$1 = state_31022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31022__$1,(4),from);
} else {
if((state_val_31023 === (9))){
var inst_31015 = (state_31022[(2)]);
var state_31022__$1 = (function (){var statearr_31033 = state_31022;
(statearr_31033[(9)] = inst_31015);

return statearr_31033;
})();
var statearr_31034_33324 = state_31022__$1;
(statearr_31034_33324[(2)] = null);

(statearr_31034_33324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (5))){
var inst_31006 = cljs.core.async.close_BANG_(jobs);
var state_31022__$1 = state_31022;
var statearr_31035_33325 = state_31022__$1;
(statearr_31035_33325[(2)] = inst_31006);

(statearr_31035_33325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31023 === (8))){
var inst_31008 = (state_31022[(8)]);
var inst_31013 = (state_31022[(2)]);
var state_31022__$1 = (function (){var statearr_31036 = state_31022;
(statearr_31036[(10)] = inst_31013);

return statearr_31036;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31022__$1,(9),results,inst_31008);
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
});})(c__30511__auto___33318,jobs,results,process,async))
;
return ((function (switch__30258__auto__,c__30511__auto___33318,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0 = (function (){
var statearr_31038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__);

(statearr_31038[(1)] = (1));

return statearr_31038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1 = (function (state_31022){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_31022);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e31039){if((e31039 instanceof Object)){
var ex__30262__auto__ = e31039;
var statearr_31040_33333 = state_31022;
(statearr_31040_33333[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33334 = state_31022;
state_31022 = G__33334;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = function(state_31022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1.call(this,state_31022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33318,jobs,results,process,async))
})();
var state__30513__auto__ = (function (){var statearr_31041 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_31041[(6)] = c__30511__auto___33318);

return statearr_31041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33318,jobs,results,process,async))
);


var c__30511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto__,jobs,results,process,async){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto__,jobs,results,process,async){
return (function (state_31079){
var state_val_31080 = (state_31079[(1)]);
if((state_val_31080 === (7))){
var inst_31075 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31081_33338 = state_31079__$1;
(statearr_31081_33338[(2)] = inst_31075);

(statearr_31081_33338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (20))){
var state_31079__$1 = state_31079;
var statearr_31082_33342 = state_31079__$1;
(statearr_31082_33342[(2)] = null);

(statearr_31082_33342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (1))){
var state_31079__$1 = state_31079;
var statearr_31083_33343 = state_31079__$1;
(statearr_31083_33343[(2)] = null);

(statearr_31083_33343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (4))){
var inst_31044 = (state_31079[(7)]);
var inst_31044__$1 = (state_31079[(2)]);
var inst_31045 = (inst_31044__$1 == null);
var state_31079__$1 = (function (){var statearr_31088 = state_31079;
(statearr_31088[(7)] = inst_31044__$1);

return statearr_31088;
})();
if(cljs.core.truth_(inst_31045)){
var statearr_31093_33344 = state_31079__$1;
(statearr_31093_33344[(1)] = (5));

} else {
var statearr_31094_33345 = state_31079__$1;
(statearr_31094_33345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (15))){
var inst_31057 = (state_31079[(8)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31079__$1,(18),to,inst_31057);
} else {
if((state_val_31080 === (21))){
var inst_31070 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31099_33349 = state_31079__$1;
(statearr_31099_33349[(2)] = inst_31070);

(statearr_31099_33349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (13))){
var inst_31072 = (state_31079[(2)]);
var state_31079__$1 = (function (){var statearr_31100 = state_31079;
(statearr_31100[(9)] = inst_31072);

return statearr_31100;
})();
var statearr_31101_33350 = state_31079__$1;
(statearr_31101_33350[(2)] = null);

(statearr_31101_33350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (6))){
var inst_31044 = (state_31079[(7)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31079__$1,(11),inst_31044);
} else {
if((state_val_31080 === (17))){
var inst_31065 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
if(cljs.core.truth_(inst_31065)){
var statearr_31102_33352 = state_31079__$1;
(statearr_31102_33352[(1)] = (19));

} else {
var statearr_31103_33353 = state_31079__$1;
(statearr_31103_33353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (3))){
var inst_31077 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31079__$1,inst_31077);
} else {
if((state_val_31080 === (12))){
var inst_31054 = (state_31079[(10)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31079__$1,(14),inst_31054);
} else {
if((state_val_31080 === (2))){
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31079__$1,(4),results);
} else {
if((state_val_31080 === (19))){
var state_31079__$1 = state_31079;
var statearr_31106_33355 = state_31079__$1;
(statearr_31106_33355[(2)] = null);

(statearr_31106_33355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (11))){
var inst_31054 = (state_31079[(2)]);
var state_31079__$1 = (function (){var statearr_31107 = state_31079;
(statearr_31107[(10)] = inst_31054);

return statearr_31107;
})();
var statearr_31108_33356 = state_31079__$1;
(statearr_31108_33356[(2)] = null);

(statearr_31108_33356[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (9))){
var state_31079__$1 = state_31079;
var statearr_31109_33357 = state_31079__$1;
(statearr_31109_33357[(2)] = null);

(statearr_31109_33357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (5))){
var state_31079__$1 = state_31079;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31110_33358 = state_31079__$1;
(statearr_31110_33358[(1)] = (8));

} else {
var statearr_31111_33359 = state_31079__$1;
(statearr_31111_33359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (14))){
var inst_31059 = (state_31079[(11)]);
var inst_31057 = (state_31079[(8)]);
var inst_31057__$1 = (state_31079[(2)]);
var inst_31058 = (inst_31057__$1 == null);
var inst_31059__$1 = cljs.core.not(inst_31058);
var state_31079__$1 = (function (){var statearr_31112 = state_31079;
(statearr_31112[(11)] = inst_31059__$1);

(statearr_31112[(8)] = inst_31057__$1);

return statearr_31112;
})();
if(inst_31059__$1){
var statearr_31113_33363 = state_31079__$1;
(statearr_31113_33363[(1)] = (15));

} else {
var statearr_31114_33364 = state_31079__$1;
(statearr_31114_33364[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (16))){
var inst_31059 = (state_31079[(11)]);
var state_31079__$1 = state_31079;
var statearr_31115_33365 = state_31079__$1;
(statearr_31115_33365[(2)] = inst_31059);

(statearr_31115_33365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (10))){
var inst_31051 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31116_33369 = state_31079__$1;
(statearr_31116_33369[(2)] = inst_31051);

(statearr_31116_33369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (18))){
var inst_31062 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31117_33370 = state_31079__$1;
(statearr_31117_33370[(2)] = inst_31062);

(statearr_31117_33370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (8))){
var inst_31048 = cljs.core.async.close_BANG_(to);
var state_31079__$1 = state_31079;
var statearr_31120_33371 = state_31079__$1;
(statearr_31120_33371[(2)] = inst_31048);

(statearr_31120_33371[(1)] = (10));


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
});})(c__30511__auto__,jobs,results,process,async))
;
return ((function (switch__30258__auto__,c__30511__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0 = (function (){
var statearr_31122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__);

(statearr_31122[(1)] = (1));

return statearr_31122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1 = (function (state_31079){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_31079);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e31123){if((e31123 instanceof Object)){
var ex__30262__auto__ = e31123;
var statearr_31124_33385 = state_31079;
(statearr_31124_33385[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31123;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33386 = state_31079;
state_31079 = G__33386;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__ = function(state_31079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1.call(this,state_31079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30259__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto__,jobs,results,process,async))
})();
var state__30513__auto__ = (function (){var statearr_31125 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_31125[(6)] = c__30511__auto__);

return statearr_31125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto__,jobs,results,process,async))
);

return c__30511__auto__;
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
var G__31130 = arguments.length;
switch (G__31130) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__31138 = arguments.length;
switch (G__31138) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__31151 = arguments.length;
switch (G__31151) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30511__auto___33421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33421,tc,fc){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33421,tc,fc){
return (function (state_31184){
var state_val_31185 = (state_31184[(1)]);
if((state_val_31185 === (7))){
var inst_31180 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31191_33422 = state_31184__$1;
(statearr_31191_33422[(2)] = inst_31180);

(statearr_31191_33422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (1))){
var state_31184__$1 = state_31184;
var statearr_31192_33423 = state_31184__$1;
(statearr_31192_33423[(2)] = null);

(statearr_31192_33423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (4))){
var inst_31157 = (state_31184[(7)]);
var inst_31157__$1 = (state_31184[(2)]);
var inst_31161 = (inst_31157__$1 == null);
var state_31184__$1 = (function (){var statearr_31195 = state_31184;
(statearr_31195[(7)] = inst_31157__$1);

return statearr_31195;
})();
if(cljs.core.truth_(inst_31161)){
var statearr_31197_33424 = state_31184__$1;
(statearr_31197_33424[(1)] = (5));

} else {
var statearr_31198_33426 = state_31184__$1;
(statearr_31198_33426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (13))){
var state_31184__$1 = state_31184;
var statearr_31199_33427 = state_31184__$1;
(statearr_31199_33427[(2)] = null);

(statearr_31199_33427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (6))){
var inst_31157 = (state_31184[(7)]);
var inst_31166 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31157) : p.call(null,inst_31157));
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31166)){
var statearr_31202_33428 = state_31184__$1;
(statearr_31202_33428[(1)] = (9));

} else {
var statearr_31203_33429 = state_31184__$1;
(statearr_31203_33429[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (3))){
var inst_31182 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31184__$1,inst_31182);
} else {
if((state_val_31185 === (12))){
var state_31184__$1 = state_31184;
var statearr_31204_33430 = state_31184__$1;
(statearr_31204_33430[(2)] = null);

(statearr_31204_33430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (2))){
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31184__$1,(4),ch);
} else {
if((state_val_31185 === (11))){
var inst_31157 = (state_31184[(7)]);
var inst_31171 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31184__$1,(8),inst_31171,inst_31157);
} else {
if((state_val_31185 === (9))){
var state_31184__$1 = state_31184;
var statearr_31205_33431 = state_31184__$1;
(statearr_31205_33431[(2)] = tc);

(statearr_31205_33431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (5))){
var inst_31163 = cljs.core.async.close_BANG_(tc);
var inst_31164 = cljs.core.async.close_BANG_(fc);
var state_31184__$1 = (function (){var statearr_31206 = state_31184;
(statearr_31206[(8)] = inst_31163);

return statearr_31206;
})();
var statearr_31207_33432 = state_31184__$1;
(statearr_31207_33432[(2)] = inst_31164);

(statearr_31207_33432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (14))){
var inst_31178 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
var statearr_31209_33433 = state_31184__$1;
(statearr_31209_33433[(2)] = inst_31178);

(statearr_31209_33433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (10))){
var state_31184__$1 = state_31184;
var statearr_31211_33434 = state_31184__$1;
(statearr_31211_33434[(2)] = fc);

(statearr_31211_33434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31185 === (8))){
var inst_31173 = (state_31184[(2)]);
var state_31184__$1 = state_31184;
if(cljs.core.truth_(inst_31173)){
var statearr_31212_33435 = state_31184__$1;
(statearr_31212_33435[(1)] = (12));

} else {
var statearr_31213_33436 = state_31184__$1;
(statearr_31213_33436[(1)] = (13));

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
});})(c__30511__auto___33421,tc,fc))
;
return ((function (switch__30258__auto__,c__30511__auto___33421,tc,fc){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_31214 = [null,null,null,null,null,null,null,null,null];
(statearr_31214[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_31214[(1)] = (1));

return statearr_31214;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_31184){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_31184);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e31215){if((e31215 instanceof Object)){
var ex__30262__auto__ = e31215;
var statearr_31216_33437 = state_31184;
(statearr_31216_33437[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33438 = state_31184;
state_31184 = G__33438;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_31184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_31184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33421,tc,fc))
})();
var state__30513__auto__ = (function (){var statearr_31217 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_31217[(6)] = c__30511__auto___33421);

return statearr_31217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33421,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto__){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto__){
return (function (state_31243){
var state_val_31244 = (state_31243[(1)]);
if((state_val_31244 === (7))){
var inst_31239 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31251_33439 = state_31243__$1;
(statearr_31251_33439[(2)] = inst_31239);

(statearr_31251_33439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (1))){
var inst_31223 = init;
var state_31243__$1 = (function (){var statearr_31252 = state_31243;
(statearr_31252[(7)] = inst_31223);

return statearr_31252;
})();
var statearr_31253_33440 = state_31243__$1;
(statearr_31253_33440[(2)] = null);

(statearr_31253_33440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (4))){
var inst_31226 = (state_31243[(8)]);
var inst_31226__$1 = (state_31243[(2)]);
var inst_31227 = (inst_31226__$1 == null);
var state_31243__$1 = (function (){var statearr_31254 = state_31243;
(statearr_31254[(8)] = inst_31226__$1);

return statearr_31254;
})();
if(cljs.core.truth_(inst_31227)){
var statearr_31255_33443 = state_31243__$1;
(statearr_31255_33443[(1)] = (5));

} else {
var statearr_31256_33444 = state_31243__$1;
(statearr_31256_33444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (6))){
var inst_31223 = (state_31243[(7)]);
var inst_31230 = (state_31243[(9)]);
var inst_31226 = (state_31243[(8)]);
var inst_31230__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31223,inst_31226) : f.call(null,inst_31223,inst_31226));
var inst_31231 = cljs.core.reduced_QMARK_(inst_31230__$1);
var state_31243__$1 = (function (){var statearr_31257 = state_31243;
(statearr_31257[(9)] = inst_31230__$1);

return statearr_31257;
})();
if(inst_31231){
var statearr_31258_33445 = state_31243__$1;
(statearr_31258_33445[(1)] = (8));

} else {
var statearr_31259_33446 = state_31243__$1;
(statearr_31259_33446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (3))){
var inst_31241 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31243__$1,inst_31241);
} else {
if((state_val_31244 === (2))){
var state_31243__$1 = state_31243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31243__$1,(4),ch);
} else {
if((state_val_31244 === (9))){
var inst_31230 = (state_31243[(9)]);
var inst_31223 = inst_31230;
var state_31243__$1 = (function (){var statearr_31264 = state_31243;
(statearr_31264[(7)] = inst_31223);

return statearr_31264;
})();
var statearr_31265_33447 = state_31243__$1;
(statearr_31265_33447[(2)] = null);

(statearr_31265_33447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (5))){
var inst_31223 = (state_31243[(7)]);
var state_31243__$1 = state_31243;
var statearr_31266_33448 = state_31243__$1;
(statearr_31266_33448[(2)] = inst_31223);

(statearr_31266_33448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (10))){
var inst_31237 = (state_31243[(2)]);
var state_31243__$1 = state_31243;
var statearr_31267_33449 = state_31243__$1;
(statearr_31267_33449[(2)] = inst_31237);

(statearr_31267_33449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31244 === (8))){
var inst_31230 = (state_31243[(9)]);
var inst_31233 = cljs.core.deref(inst_31230);
var state_31243__$1 = state_31243;
var statearr_31268_33450 = state_31243__$1;
(statearr_31268_33450[(2)] = inst_31233);

(statearr_31268_33450[(1)] = (10));


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
});})(c__30511__auto__))
;
return ((function (switch__30258__auto__,c__30511__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30259__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30259__auto____0 = (function (){
var statearr_31270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31270[(0)] = cljs$core$async$reduce_$_state_machine__30259__auto__);

(statearr_31270[(1)] = (1));

return statearr_31270;
});
var cljs$core$async$reduce_$_state_machine__30259__auto____1 = (function (state_31243){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_31243);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e31272){if((e31272 instanceof Object)){
var ex__30262__auto__ = e31272;
var statearr_31273_33452 = state_31243;
(statearr_31273_33452[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33455 = state_31243;
state_31243 = G__33455;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30259__auto__ = function(state_31243){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30259__auto____1.call(this,state_31243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30259__auto____0;
cljs$core$async$reduce_$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30259__auto____1;
return cljs$core$async$reduce_$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto__))
})();
var state__30513__auto__ = (function (){var statearr_31275 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_31275[(6)] = c__30511__auto__);

return statearr_31275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto__))
);

return c__30511__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto__,f__$1){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto__,f__$1){
return (function (state_31289){
var state_val_31291 = (state_31289[(1)]);
if((state_val_31291 === (1))){
var inst_31284 = cljs.core.async.reduce(f__$1,init,ch);
var state_31289__$1 = state_31289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31289__$1,(2),inst_31284);
} else {
if((state_val_31291 === (2))){
var inst_31286 = (state_31289[(2)]);
var inst_31287 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31286) : f__$1.call(null,inst_31286));
var state_31289__$1 = state_31289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31289__$1,inst_31287);
} else {
return null;
}
}
});})(c__30511__auto__,f__$1))
;
return ((function (switch__30258__auto__,c__30511__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30259__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30259__auto____0 = (function (){
var statearr_31301 = [null,null,null,null,null,null,null];
(statearr_31301[(0)] = cljs$core$async$transduce_$_state_machine__30259__auto__);

(statearr_31301[(1)] = (1));

return statearr_31301;
});
var cljs$core$async$transduce_$_state_machine__30259__auto____1 = (function (state_31289){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_31289);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e31302){if((e31302 instanceof Object)){
var ex__30262__auto__ = e31302;
var statearr_31303_33462 = state_31289;
(statearr_31303_33462[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33463 = state_31289;
state_31289 = G__33463;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30259__auto__ = function(state_31289){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30259__auto____1.call(this,state_31289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30259__auto____0;
cljs$core$async$transduce_$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30259__auto____1;
return cljs$core$async$transduce_$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto__,f__$1))
})();
var state__30513__auto__ = (function (){var statearr_31307 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_31307[(6)] = c__30511__auto__);

return statearr_31307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto__,f__$1))
);

return c__30511__auto__;
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
var G__31312 = arguments.length;
switch (G__31312) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto__){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto__){
return (function (state_31339){
var state_val_31340 = (state_31339[(1)]);
if((state_val_31340 === (7))){
var inst_31319 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31341_33469 = state_31339__$1;
(statearr_31341_33469[(2)] = inst_31319);

(statearr_31341_33469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (1))){
var inst_31313 = cljs.core.seq(coll);
var inst_31314 = inst_31313;
var state_31339__$1 = (function (){var statearr_31342 = state_31339;
(statearr_31342[(7)] = inst_31314);

return statearr_31342;
})();
var statearr_31343_33470 = state_31339__$1;
(statearr_31343_33470[(2)] = null);

(statearr_31343_33470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (4))){
var inst_31314 = (state_31339[(7)]);
var inst_31317 = cljs.core.first(inst_31314);
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31339__$1,(7),ch,inst_31317);
} else {
if((state_val_31340 === (13))){
var inst_31331 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31345_33473 = state_31339__$1;
(statearr_31345_33473[(2)] = inst_31331);

(statearr_31345_33473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (6))){
var inst_31322 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
if(cljs.core.truth_(inst_31322)){
var statearr_31346_33476 = state_31339__$1;
(statearr_31346_33476[(1)] = (8));

} else {
var statearr_31348_33477 = state_31339__$1;
(statearr_31348_33477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (3))){
var inst_31335 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31339__$1,inst_31335);
} else {
if((state_val_31340 === (12))){
var state_31339__$1 = state_31339;
var statearr_31353_33478 = state_31339__$1;
(statearr_31353_33478[(2)] = null);

(statearr_31353_33478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (2))){
var inst_31314 = (state_31339[(7)]);
var state_31339__$1 = state_31339;
if(cljs.core.truth_(inst_31314)){
var statearr_31358_33482 = state_31339__$1;
(statearr_31358_33482[(1)] = (4));

} else {
var statearr_31359_33483 = state_31339__$1;
(statearr_31359_33483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (11))){
var inst_31328 = cljs.core.async.close_BANG_(ch);
var state_31339__$1 = state_31339;
var statearr_31364_33488 = state_31339__$1;
(statearr_31364_33488[(2)] = inst_31328);

(statearr_31364_33488[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (9))){
var state_31339__$1 = state_31339;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31365_33489 = state_31339__$1;
(statearr_31365_33489[(1)] = (11));

} else {
var statearr_31366_33496 = state_31339__$1;
(statearr_31366_33496[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (5))){
var inst_31314 = (state_31339[(7)]);
var state_31339__$1 = state_31339;
var statearr_31367_33497 = state_31339__$1;
(statearr_31367_33497[(2)] = inst_31314);

(statearr_31367_33497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (10))){
var inst_31333 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31368_33498 = state_31339__$1;
(statearr_31368_33498[(2)] = inst_31333);

(statearr_31368_33498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (8))){
var inst_31314 = (state_31339[(7)]);
var inst_31324 = cljs.core.next(inst_31314);
var inst_31314__$1 = inst_31324;
var state_31339__$1 = (function (){var statearr_31369 = state_31339;
(statearr_31369[(7)] = inst_31314__$1);

return statearr_31369;
})();
var statearr_31370_33499 = state_31339__$1;
(statearr_31370_33499[(2)] = null);

(statearr_31370_33499[(1)] = (2));


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
});})(c__30511__auto__))
;
return ((function (switch__30258__auto__,c__30511__auto__){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_31372 = [null,null,null,null,null,null,null,null];
(statearr_31372[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_31372[(1)] = (1));

return statearr_31372;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_31339){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_31339);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e31373){if((e31373 instanceof Object)){
var ex__30262__auto__ = e31373;
var statearr_31374_33500 = state_31339;
(statearr_31374_33500[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31373;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33501 = state_31339;
state_31339 = G__33501;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_31339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_31339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto__))
})();
var state__30513__auto__ = (function (){var statearr_31376 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_31376[(6)] = c__30511__auto__);

return statearr_31376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto__))
);

return c__30511__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31414 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31414 = (function (ch,cs,meta31415){
this.ch = ch;
this.cs = cs;
this.meta31415 = meta31415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31416,meta31415__$1){
var self__ = this;
var _31416__$1 = this;
return (new cljs.core.async.t_cljs$core$async31414(self__.ch,self__.cs,meta31415__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31416){
var self__ = this;
var _31416__$1 = this;
return self__.meta31415;
});})(cs))
;

cljs.core.async.t_cljs$core$async31414.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31414.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31414.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31414.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31414.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31414.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31415","meta31415",-530309284,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31414";

cljs.core.async.t_cljs$core$async31414.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31414");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31414.
 */
cljs.core.async.__GT_t_cljs$core$async31414 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31414(ch__$1,cs__$1,meta31415){
return (new cljs.core.async.t_cljs$core$async31414(ch__$1,cs__$1,meta31415));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31414(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30511__auto___33520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33520,cs,m,dchan,dctr,done){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33520,cs,m,dchan,dctr,done){
return (function (state_31588){
var state_val_31590 = (state_31588[(1)]);
if((state_val_31590 === (7))){
var inst_31579 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31591_33521 = state_31588__$1;
(statearr_31591_33521[(2)] = inst_31579);

(statearr_31591_33521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (20))){
var inst_31471 = (state_31588[(7)]);
var inst_31486 = cljs.core.first(inst_31471);
var inst_31487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31486,(0),null);
var inst_31488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31486,(1),null);
var state_31588__$1 = (function (){var statearr_31594 = state_31588;
(statearr_31594[(8)] = inst_31487);

return statearr_31594;
})();
if(cljs.core.truth_(inst_31488)){
var statearr_31595_33522 = state_31588__$1;
(statearr_31595_33522[(1)] = (22));

} else {
var statearr_31597_33523 = state_31588__$1;
(statearr_31597_33523[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (27))){
var inst_31525 = (state_31588[(9)]);
var inst_31440 = (state_31588[(10)]);
var inst_31520 = (state_31588[(11)]);
var inst_31518 = (state_31588[(12)]);
var inst_31525__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31518,inst_31520);
var inst_31526 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31525__$1,inst_31440,done);
var state_31588__$1 = (function (){var statearr_31598 = state_31588;
(statearr_31598[(9)] = inst_31525__$1);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31526)){
var statearr_31599_33524 = state_31588__$1;
(statearr_31599_33524[(1)] = (30));

} else {
var statearr_31600_33525 = state_31588__$1;
(statearr_31600_33525[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (1))){
var state_31588__$1 = state_31588;
var statearr_31601_33526 = state_31588__$1;
(statearr_31601_33526[(2)] = null);

(statearr_31601_33526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (24))){
var inst_31471 = (state_31588[(7)]);
var inst_31493 = (state_31588[(2)]);
var inst_31494 = cljs.core.next(inst_31471);
var inst_31449 = inst_31494;
var inst_31450 = null;
var inst_31451 = (0);
var inst_31452 = (0);
var state_31588__$1 = (function (){var statearr_31603 = state_31588;
(statearr_31603[(13)] = inst_31450);

(statearr_31603[(14)] = inst_31493);

(statearr_31603[(15)] = inst_31451);

(statearr_31603[(16)] = inst_31449);

(statearr_31603[(17)] = inst_31452);

return statearr_31603;
})();
var statearr_31606_33527 = state_31588__$1;
(statearr_31606_33527[(2)] = null);

(statearr_31606_33527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (39))){
var state_31588__$1 = state_31588;
var statearr_31614_33528 = state_31588__$1;
(statearr_31614_33528[(2)] = null);

(statearr_31614_33528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (4))){
var inst_31440 = (state_31588[(10)]);
var inst_31440__$1 = (state_31588[(2)]);
var inst_31441 = (inst_31440__$1 == null);
var state_31588__$1 = (function (){var statearr_31618 = state_31588;
(statearr_31618[(10)] = inst_31440__$1);

return statearr_31618;
})();
if(cljs.core.truth_(inst_31441)){
var statearr_31619_33529 = state_31588__$1;
(statearr_31619_33529[(1)] = (5));

} else {
var statearr_31620_33530 = state_31588__$1;
(statearr_31620_33530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (15))){
var inst_31450 = (state_31588[(13)]);
var inst_31451 = (state_31588[(15)]);
var inst_31449 = (state_31588[(16)]);
var inst_31452 = (state_31588[(17)]);
var inst_31467 = (state_31588[(2)]);
var inst_31468 = (inst_31452 + (1));
var tmp31611 = inst_31450;
var tmp31612 = inst_31451;
var tmp31613 = inst_31449;
var inst_31449__$1 = tmp31613;
var inst_31450__$1 = tmp31611;
var inst_31451__$1 = tmp31612;
var inst_31452__$1 = inst_31468;
var state_31588__$1 = (function (){var statearr_31621 = state_31588;
(statearr_31621[(13)] = inst_31450__$1);

(statearr_31621[(18)] = inst_31467);

(statearr_31621[(15)] = inst_31451__$1);

(statearr_31621[(16)] = inst_31449__$1);

(statearr_31621[(17)] = inst_31452__$1);

return statearr_31621;
})();
var statearr_31622_33531 = state_31588__$1;
(statearr_31622_33531[(2)] = null);

(statearr_31622_33531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (21))){
var inst_31497 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31630_33532 = state_31588__$1;
(statearr_31630_33532[(2)] = inst_31497);

(statearr_31630_33532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (31))){
var inst_31525 = (state_31588[(9)]);
var inst_31529 = done(null);
var inst_31530 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31525);
var state_31588__$1 = (function (){var statearr_31631 = state_31588;
(statearr_31631[(19)] = inst_31529);

return statearr_31631;
})();
var statearr_31632_33533 = state_31588__$1;
(statearr_31632_33533[(2)] = inst_31530);

(statearr_31632_33533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (32))){
var inst_31520 = (state_31588[(11)]);
var inst_31517 = (state_31588[(20)]);
var inst_31519 = (state_31588[(21)]);
var inst_31518 = (state_31588[(12)]);
var inst_31532 = (state_31588[(2)]);
var inst_31533 = (inst_31520 + (1));
var tmp31625 = inst_31517;
var tmp31626 = inst_31519;
var tmp31627 = inst_31518;
var inst_31517__$1 = tmp31625;
var inst_31518__$1 = tmp31627;
var inst_31519__$1 = tmp31626;
var inst_31520__$1 = inst_31533;
var state_31588__$1 = (function (){var statearr_31635 = state_31588;
(statearr_31635[(11)] = inst_31520__$1);

(statearr_31635[(22)] = inst_31532);

(statearr_31635[(20)] = inst_31517__$1);

(statearr_31635[(21)] = inst_31519__$1);

(statearr_31635[(12)] = inst_31518__$1);

return statearr_31635;
})();
var statearr_31636_33535 = state_31588__$1;
(statearr_31636_33535[(2)] = null);

(statearr_31636_33535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (40))){
var inst_31551 = (state_31588[(23)]);
var inst_31555 = done(null);
var inst_31556 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31551);
var state_31588__$1 = (function (){var statearr_31640 = state_31588;
(statearr_31640[(24)] = inst_31555);

return statearr_31640;
})();
var statearr_31643_33536 = state_31588__$1;
(statearr_31643_33536[(2)] = inst_31556);

(statearr_31643_33536[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (33))){
var inst_31538 = (state_31588[(25)]);
var inst_31540 = cljs.core.chunked_seq_QMARK_(inst_31538);
var state_31588__$1 = state_31588;
if(inst_31540){
var statearr_31649_33538 = state_31588__$1;
(statearr_31649_33538[(1)] = (36));

} else {
var statearr_31650_33539 = state_31588__$1;
(statearr_31650_33539[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (13))){
var inst_31461 = (state_31588[(26)]);
var inst_31464 = cljs.core.async.close_BANG_(inst_31461);
var state_31588__$1 = state_31588;
var statearr_31651_33544 = state_31588__$1;
(statearr_31651_33544[(2)] = inst_31464);

(statearr_31651_33544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (22))){
var inst_31487 = (state_31588[(8)]);
var inst_31490 = cljs.core.async.close_BANG_(inst_31487);
var state_31588__$1 = state_31588;
var statearr_31652_33545 = state_31588__$1;
(statearr_31652_33545[(2)] = inst_31490);

(statearr_31652_33545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (36))){
var inst_31538 = (state_31588[(25)]);
var inst_31543 = cljs.core.chunk_first(inst_31538);
var inst_31545 = cljs.core.chunk_rest(inst_31538);
var inst_31547 = cljs.core.count(inst_31543);
var inst_31517 = inst_31545;
var inst_31518 = inst_31543;
var inst_31519 = inst_31547;
var inst_31520 = (0);
var state_31588__$1 = (function (){var statearr_31657 = state_31588;
(statearr_31657[(11)] = inst_31520);

(statearr_31657[(20)] = inst_31517);

(statearr_31657[(21)] = inst_31519);

(statearr_31657[(12)] = inst_31518);

return statearr_31657;
})();
var statearr_31659_33546 = state_31588__$1;
(statearr_31659_33546[(2)] = null);

(statearr_31659_33546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (41))){
var inst_31538 = (state_31588[(25)]);
var inst_31558 = (state_31588[(2)]);
var inst_31559 = cljs.core.next(inst_31538);
var inst_31517 = inst_31559;
var inst_31518 = null;
var inst_31519 = (0);
var inst_31520 = (0);
var state_31588__$1 = (function (){var statearr_31660 = state_31588;
(statearr_31660[(11)] = inst_31520);

(statearr_31660[(20)] = inst_31517);

(statearr_31660[(27)] = inst_31558);

(statearr_31660[(21)] = inst_31519);

(statearr_31660[(12)] = inst_31518);

return statearr_31660;
})();
var statearr_31661_33547 = state_31588__$1;
(statearr_31661_33547[(2)] = null);

(statearr_31661_33547[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (43))){
var state_31588__$1 = state_31588;
var statearr_31662_33548 = state_31588__$1;
(statearr_31662_33548[(2)] = null);

(statearr_31662_33548[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (29))){
var inst_31567 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31663_33551 = state_31588__$1;
(statearr_31663_33551[(2)] = inst_31567);

(statearr_31663_33551[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (44))){
var inst_31576 = (state_31588[(2)]);
var state_31588__$1 = (function (){var statearr_31664 = state_31588;
(statearr_31664[(28)] = inst_31576);

return statearr_31664;
})();
var statearr_31665_33552 = state_31588__$1;
(statearr_31665_33552[(2)] = null);

(statearr_31665_33552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (6))){
var inst_31507 = (state_31588[(29)]);
var inst_31506 = cljs.core.deref(cs);
var inst_31507__$1 = cljs.core.keys(inst_31506);
var inst_31510 = cljs.core.count(inst_31507__$1);
var inst_31511 = cljs.core.reset_BANG_(dctr,inst_31510);
var inst_31516 = cljs.core.seq(inst_31507__$1);
var inst_31517 = inst_31516;
var inst_31518 = null;
var inst_31519 = (0);
var inst_31520 = (0);
var state_31588__$1 = (function (){var statearr_31667 = state_31588;
(statearr_31667[(30)] = inst_31511);

(statearr_31667[(11)] = inst_31520);

(statearr_31667[(29)] = inst_31507__$1);

(statearr_31667[(20)] = inst_31517);

(statearr_31667[(21)] = inst_31519);

(statearr_31667[(12)] = inst_31518);

return statearr_31667;
})();
var statearr_31668_33555 = state_31588__$1;
(statearr_31668_33555[(2)] = null);

(statearr_31668_33555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (28))){
var inst_31517 = (state_31588[(20)]);
var inst_31538 = (state_31588[(25)]);
var inst_31538__$1 = cljs.core.seq(inst_31517);
var state_31588__$1 = (function (){var statearr_31670 = state_31588;
(statearr_31670[(25)] = inst_31538__$1);

return statearr_31670;
})();
if(inst_31538__$1){
var statearr_31671_33556 = state_31588__$1;
(statearr_31671_33556[(1)] = (33));

} else {
var statearr_31672_33557 = state_31588__$1;
(statearr_31672_33557[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (25))){
var inst_31520 = (state_31588[(11)]);
var inst_31519 = (state_31588[(21)]);
var inst_31522 = (inst_31520 < inst_31519);
var inst_31523 = inst_31522;
var state_31588__$1 = state_31588;
if(cljs.core.truth_(inst_31523)){
var statearr_31673_33559 = state_31588__$1;
(statearr_31673_33559[(1)] = (27));

} else {
var statearr_31674_33560 = state_31588__$1;
(statearr_31674_33560[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (34))){
var state_31588__$1 = state_31588;
var statearr_31675_33562 = state_31588__$1;
(statearr_31675_33562[(2)] = null);

(statearr_31675_33562[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (17))){
var state_31588__$1 = state_31588;
var statearr_31676_33563 = state_31588__$1;
(statearr_31676_33563[(2)] = null);

(statearr_31676_33563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (3))){
var inst_31581 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31588__$1,inst_31581);
} else {
if((state_val_31590 === (12))){
var inst_31502 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31679_33564 = state_31588__$1;
(statearr_31679_33564[(2)] = inst_31502);

(statearr_31679_33564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (2))){
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31588__$1,(4),ch);
} else {
if((state_val_31590 === (23))){
var state_31588__$1 = state_31588;
var statearr_31680_33565 = state_31588__$1;
(statearr_31680_33565[(2)] = null);

(statearr_31680_33565[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (35))){
var inst_31565 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31681_33566 = state_31588__$1;
(statearr_31681_33566[(2)] = inst_31565);

(statearr_31681_33566[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (19))){
var inst_31471 = (state_31588[(7)]);
var inst_31475 = cljs.core.chunk_first(inst_31471);
var inst_31479 = cljs.core.chunk_rest(inst_31471);
var inst_31480 = cljs.core.count(inst_31475);
var inst_31449 = inst_31479;
var inst_31450 = inst_31475;
var inst_31451 = inst_31480;
var inst_31452 = (0);
var state_31588__$1 = (function (){var statearr_31683 = state_31588;
(statearr_31683[(13)] = inst_31450);

(statearr_31683[(15)] = inst_31451);

(statearr_31683[(16)] = inst_31449);

(statearr_31683[(17)] = inst_31452);

return statearr_31683;
})();
var statearr_31684_33567 = state_31588__$1;
(statearr_31684_33567[(2)] = null);

(statearr_31684_33567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (11))){
var inst_31471 = (state_31588[(7)]);
var inst_31449 = (state_31588[(16)]);
var inst_31471__$1 = cljs.core.seq(inst_31449);
var state_31588__$1 = (function (){var statearr_31685 = state_31588;
(statearr_31685[(7)] = inst_31471__$1);

return statearr_31685;
})();
if(inst_31471__$1){
var statearr_31686_33568 = state_31588__$1;
(statearr_31686_33568[(1)] = (16));

} else {
var statearr_31687_33569 = state_31588__$1;
(statearr_31687_33569[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (9))){
var inst_31504 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31689_33570 = state_31588__$1;
(statearr_31689_33570[(2)] = inst_31504);

(statearr_31689_33570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (5))){
var inst_31447 = cljs.core.deref(cs);
var inst_31448 = cljs.core.seq(inst_31447);
var inst_31449 = inst_31448;
var inst_31450 = null;
var inst_31451 = (0);
var inst_31452 = (0);
var state_31588__$1 = (function (){var statearr_31690 = state_31588;
(statearr_31690[(13)] = inst_31450);

(statearr_31690[(15)] = inst_31451);

(statearr_31690[(16)] = inst_31449);

(statearr_31690[(17)] = inst_31452);

return statearr_31690;
})();
var statearr_31691_33571 = state_31588__$1;
(statearr_31691_33571[(2)] = null);

(statearr_31691_33571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (14))){
var state_31588__$1 = state_31588;
var statearr_31692_33572 = state_31588__$1;
(statearr_31692_33572[(2)] = null);

(statearr_31692_33572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (45))){
var inst_31573 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31693_33573 = state_31588__$1;
(statearr_31693_33573[(2)] = inst_31573);

(statearr_31693_33573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (26))){
var inst_31507 = (state_31588[(29)]);
var inst_31569 = (state_31588[(2)]);
var inst_31570 = cljs.core.seq(inst_31507);
var state_31588__$1 = (function (){var statearr_31694 = state_31588;
(statearr_31694[(31)] = inst_31569);

return statearr_31694;
})();
if(inst_31570){
var statearr_31695_33575 = state_31588__$1;
(statearr_31695_33575[(1)] = (42));

} else {
var statearr_31696_33576 = state_31588__$1;
(statearr_31696_33576[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (16))){
var inst_31471 = (state_31588[(7)]);
var inst_31473 = cljs.core.chunked_seq_QMARK_(inst_31471);
var state_31588__$1 = state_31588;
if(inst_31473){
var statearr_31697_33578 = state_31588__$1;
(statearr_31697_33578[(1)] = (19));

} else {
var statearr_31698_33579 = state_31588__$1;
(statearr_31698_33579[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (38))){
var inst_31562 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31699_33580 = state_31588__$1;
(statearr_31699_33580[(2)] = inst_31562);

(statearr_31699_33580[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (30))){
var state_31588__$1 = state_31588;
var statearr_31700_33581 = state_31588__$1;
(statearr_31700_33581[(2)] = null);

(statearr_31700_33581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (10))){
var inst_31450 = (state_31588[(13)]);
var inst_31452 = (state_31588[(17)]);
var inst_31460 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31450,inst_31452);
var inst_31461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31460,(0),null);
var inst_31462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31460,(1),null);
var state_31588__$1 = (function (){var statearr_31702 = state_31588;
(statearr_31702[(26)] = inst_31461);

return statearr_31702;
})();
if(cljs.core.truth_(inst_31462)){
var statearr_31703_33582 = state_31588__$1;
(statearr_31703_33582[(1)] = (13));

} else {
var statearr_31704_33583 = state_31588__$1;
(statearr_31704_33583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (18))){
var inst_31500 = (state_31588[(2)]);
var state_31588__$1 = state_31588;
var statearr_31705_33584 = state_31588__$1;
(statearr_31705_33584[(2)] = inst_31500);

(statearr_31705_33584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (42))){
var state_31588__$1 = state_31588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31588__$1,(45),dchan);
} else {
if((state_val_31590 === (37))){
var inst_31551 = (state_31588[(23)]);
var inst_31440 = (state_31588[(10)]);
var inst_31538 = (state_31588[(25)]);
var inst_31551__$1 = cljs.core.first(inst_31538);
var inst_31552 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31551__$1,inst_31440,done);
var state_31588__$1 = (function (){var statearr_31706 = state_31588;
(statearr_31706[(23)] = inst_31551__$1);

return statearr_31706;
})();
if(cljs.core.truth_(inst_31552)){
var statearr_31707_33590 = state_31588__$1;
(statearr_31707_33590[(1)] = (39));

} else {
var statearr_31708_33591 = state_31588__$1;
(statearr_31708_33591[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31590 === (8))){
var inst_31451 = (state_31588[(15)]);
var inst_31452 = (state_31588[(17)]);
var inst_31454 = (inst_31452 < inst_31451);
var inst_31455 = inst_31454;
var state_31588__$1 = state_31588;
if(cljs.core.truth_(inst_31455)){
var statearr_31709_33592 = state_31588__$1;
(statearr_31709_33592[(1)] = (10));

} else {
var statearr_31710_33593 = state_31588__$1;
(statearr_31710_33593[(1)] = (11));

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
});})(c__30511__auto___33520,cs,m,dchan,dctr,done))
;
return ((function (switch__30258__auto__,c__30511__auto___33520,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30259__auto__ = null;
var cljs$core$async$mult_$_state_machine__30259__auto____0 = (function (){
var statearr_31711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31711[(0)] = cljs$core$async$mult_$_state_machine__30259__auto__);

(statearr_31711[(1)] = (1));

return statearr_31711;
});
var cljs$core$async$mult_$_state_machine__30259__auto____1 = (function (state_31588){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_31588);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e31713){if((e31713 instanceof Object)){
var ex__30262__auto__ = e31713;
var statearr_31714_33604 = state_31588;
(statearr_31714_33604[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33608 = state_31588;
state_31588 = G__33608;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30259__auto__ = function(state_31588){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30259__auto____1.call(this,state_31588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30259__auto____0;
cljs$core$async$mult_$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30259__auto____1;
return cljs$core$async$mult_$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33520,cs,m,dchan,dctr,done))
})();
var state__30513__auto__ = (function (){var statearr_31716 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_31716[(6)] = c__30511__auto___33520);

return statearr_31716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33520,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31718 = arguments.length;
switch (G__31718) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33626 = arguments.length;
var i__4731__auto___33627 = (0);
while(true){
if((i__4731__auto___33627 < len__4730__auto___33626)){
args__4736__auto__.push((arguments[i__4731__auto___33627]));

var G__33628 = (i__4731__auto___33627 + (1));
i__4731__auto___33627 = G__33628;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31739){
var map__31740 = p__31739;
var map__31740__$1 = (((((!((map__31740 == null))))?(((((map__31740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31740):map__31740);
var opts = map__31740__$1;
var statearr_31742_33630 = state;
(statearr_31742_33630[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__31740,map__31740__$1,opts){
return (function (val){
var statearr_31743_33633 = state;
(statearr_31743_33633[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31740,map__31740__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31744_33634 = state;
(statearr_31744_33634[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31727){
var G__31728 = cljs.core.first(seq31727);
var seq31727__$1 = cljs.core.next(seq31727);
var G__31729 = cljs.core.first(seq31727__$1);
var seq31727__$2 = cljs.core.next(seq31727__$1);
var G__31730 = cljs.core.first(seq31727__$2);
var seq31727__$3 = cljs.core.next(seq31727__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31728,G__31729,G__31730,seq31727__$3);
});

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
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31746 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31747){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31747 = meta31747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31748,meta31747__$1){
var self__ = this;
var _31748__$1 = this;
return (new cljs.core.async.t_cljs$core$async31746(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31747__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31748){
var self__ = this;
var _31748__$1 = this;
return self__.meta31747;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31747","meta31747",1161265653,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31746";

cljs.core.async.t_cljs$core$async31746.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31746");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31746.
 */
cljs.core.async.__GT_t_cljs$core$async31746 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31746(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31747){
return (new cljs.core.async.t_cljs$core$async31746(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31747));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31746(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30511__auto___33649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31898){
var state_val_31899 = (state_31898[(1)]);
if((state_val_31899 === (7))){
var inst_31798 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
var statearr_31904_33651 = state_31898__$1;
(statearr_31904_33651[(2)] = inst_31798);

(statearr_31904_33651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (20))){
var inst_31810 = (state_31898[(7)]);
var state_31898__$1 = state_31898;
var statearr_31905_33652 = state_31898__$1;
(statearr_31905_33652[(2)] = inst_31810);

(statearr_31905_33652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (27))){
var state_31898__$1 = state_31898;
var statearr_31908_33653 = state_31898__$1;
(statearr_31908_33653[(2)] = null);

(statearr_31908_33653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (1))){
var inst_31783 = (state_31898[(8)]);
var inst_31783__$1 = calc_state();
var inst_31786 = (inst_31783__$1 == null);
var inst_31787 = cljs.core.not(inst_31786);
var state_31898__$1 = (function (){var statearr_31910 = state_31898;
(statearr_31910[(8)] = inst_31783__$1);

return statearr_31910;
})();
if(inst_31787){
var statearr_31912_33654 = state_31898__$1;
(statearr_31912_33654[(1)] = (2));

} else {
var statearr_31913_33655 = state_31898__$1;
(statearr_31913_33655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (24))){
var inst_31838 = (state_31898[(9)]);
var inst_31870 = (state_31898[(10)]);
var inst_31854 = (state_31898[(11)]);
var inst_31870__$1 = (inst_31838.cljs$core$IFn$_invoke$arity$1 ? inst_31838.cljs$core$IFn$_invoke$arity$1(inst_31854) : inst_31838.call(null,inst_31854));
var state_31898__$1 = (function (){var statearr_31917 = state_31898;
(statearr_31917[(10)] = inst_31870__$1);

return statearr_31917;
})();
if(cljs.core.truth_(inst_31870__$1)){
var statearr_31918_33656 = state_31898__$1;
(statearr_31918_33656[(1)] = (29));

} else {
var statearr_31919_33657 = state_31898__$1;
(statearr_31919_33657[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (4))){
var inst_31801 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
if(cljs.core.truth_(inst_31801)){
var statearr_31920_33658 = state_31898__$1;
(statearr_31920_33658[(1)] = (8));

} else {
var statearr_31921_33659 = state_31898__$1;
(statearr_31921_33659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (15))){
var inst_31832 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
if(cljs.core.truth_(inst_31832)){
var statearr_31922_33665 = state_31898__$1;
(statearr_31922_33665[(1)] = (19));

} else {
var statearr_31923_33666 = state_31898__$1;
(statearr_31923_33666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (21))){
var inst_31837 = (state_31898[(12)]);
var inst_31837__$1 = (state_31898[(2)]);
var inst_31838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31837__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31837__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31837__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31898__$1 = (function (){var statearr_31924 = state_31898;
(statearr_31924[(9)] = inst_31838);

(statearr_31924[(13)] = inst_31839);

(statearr_31924[(12)] = inst_31837__$1);

return statearr_31924;
})();
return cljs.core.async.ioc_alts_BANG_(state_31898__$1,(22),inst_31845);
} else {
if((state_val_31899 === (31))){
var inst_31879 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
if(cljs.core.truth_(inst_31879)){
var statearr_31925_33669 = state_31898__$1;
(statearr_31925_33669[(1)] = (32));

} else {
var statearr_31926_33670 = state_31898__$1;
(statearr_31926_33670[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (32))){
var inst_31853 = (state_31898[(14)]);
var state_31898__$1 = state_31898;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31898__$1,(35),out,inst_31853);
} else {
if((state_val_31899 === (33))){
var inst_31837 = (state_31898[(12)]);
var inst_31810 = inst_31837;
var state_31898__$1 = (function (){var statearr_31927 = state_31898;
(statearr_31927[(7)] = inst_31810);

return statearr_31927;
})();
var statearr_31928_33671 = state_31898__$1;
(statearr_31928_33671[(2)] = null);

(statearr_31928_33671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (13))){
var inst_31810 = (state_31898[(7)]);
var inst_31817 = inst_31810.cljs$lang$protocol_mask$partition0$;
var inst_31818 = (inst_31817 & (64));
var inst_31820 = inst_31810.cljs$core$ISeq$;
var inst_31821 = (cljs.core.PROTOCOL_SENTINEL === inst_31820);
var inst_31822 = ((inst_31818) || (inst_31821));
var state_31898__$1 = state_31898;
if(cljs.core.truth_(inst_31822)){
var statearr_31929_33672 = state_31898__$1;
(statearr_31929_33672[(1)] = (16));

} else {
var statearr_31930_33673 = state_31898__$1;
(statearr_31930_33673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (22))){
var inst_31853 = (state_31898[(14)]);
var inst_31854 = (state_31898[(11)]);
var inst_31851 = (state_31898[(2)]);
var inst_31853__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31851,(0),null);
var inst_31854__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31851,(1),null);
var inst_31856 = (inst_31853__$1 == null);
var inst_31858 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31854__$1,change);
var inst_31859 = ((inst_31856) || (inst_31858));
var state_31898__$1 = (function (){var statearr_31931 = state_31898;
(statearr_31931[(14)] = inst_31853__$1);

(statearr_31931[(11)] = inst_31854__$1);

return statearr_31931;
})();
if(cljs.core.truth_(inst_31859)){
var statearr_31933_33674 = state_31898__$1;
(statearr_31933_33674[(1)] = (23));

} else {
var statearr_31937_33675 = state_31898__$1;
(statearr_31937_33675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (36))){
var inst_31837 = (state_31898[(12)]);
var inst_31810 = inst_31837;
var state_31898__$1 = (function (){var statearr_31940 = state_31898;
(statearr_31940[(7)] = inst_31810);

return statearr_31940;
})();
var statearr_31944_33677 = state_31898__$1;
(statearr_31944_33677[(2)] = null);

(statearr_31944_33677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (29))){
var inst_31870 = (state_31898[(10)]);
var state_31898__$1 = state_31898;
var statearr_31947_33678 = state_31898__$1;
(statearr_31947_33678[(2)] = inst_31870);

(statearr_31947_33678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (6))){
var state_31898__$1 = state_31898;
var statearr_31948_33679 = state_31898__$1;
(statearr_31948_33679[(2)] = false);

(statearr_31948_33679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (28))){
var inst_31866 = (state_31898[(2)]);
var inst_31867 = calc_state();
var inst_31810 = inst_31867;
var state_31898__$1 = (function (){var statearr_31952 = state_31898;
(statearr_31952[(7)] = inst_31810);

(statearr_31952[(15)] = inst_31866);

return statearr_31952;
})();
var statearr_31953_33680 = state_31898__$1;
(statearr_31953_33680[(2)] = null);

(statearr_31953_33680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (25))){
var inst_31893 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
var statearr_31954_33682 = state_31898__$1;
(statearr_31954_33682[(2)] = inst_31893);

(statearr_31954_33682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (34))){
var inst_31891 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
var statearr_31959_33683 = state_31898__$1;
(statearr_31959_33683[(2)] = inst_31891);

(statearr_31959_33683[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (17))){
var state_31898__$1 = state_31898;
var statearr_31964_33684 = state_31898__$1;
(statearr_31964_33684[(2)] = false);

(statearr_31964_33684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (3))){
var state_31898__$1 = state_31898;
var statearr_31969_33685 = state_31898__$1;
(statearr_31969_33685[(2)] = false);

(statearr_31969_33685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (12))){
var inst_31895 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31898__$1,inst_31895);
} else {
if((state_val_31899 === (2))){
var inst_31783 = (state_31898[(8)]);
var inst_31790 = inst_31783.cljs$lang$protocol_mask$partition0$;
var inst_31791 = (inst_31790 & (64));
var inst_31792 = inst_31783.cljs$core$ISeq$;
var inst_31793 = (cljs.core.PROTOCOL_SENTINEL === inst_31792);
var inst_31794 = ((inst_31791) || (inst_31793));
var state_31898__$1 = state_31898;
if(cljs.core.truth_(inst_31794)){
var statearr_31970_33687 = state_31898__$1;
(statearr_31970_33687[(1)] = (5));

} else {
var statearr_31971_33688 = state_31898__$1;
(statearr_31971_33688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (23))){
var inst_31853 = (state_31898[(14)]);
var inst_31861 = (inst_31853 == null);
var state_31898__$1 = state_31898;
if(cljs.core.truth_(inst_31861)){
var statearr_31972_33690 = state_31898__$1;
(statearr_31972_33690[(1)] = (26));

} else {
var statearr_31973_33691 = state_31898__$1;
(statearr_31973_33691[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (35))){
var inst_31882 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
if(cljs.core.truth_(inst_31882)){
var statearr_31974_33692 = state_31898__$1;
(statearr_31974_33692[(1)] = (36));

} else {
var statearr_31975_33695 = state_31898__$1;
(statearr_31975_33695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (19))){
var inst_31810 = (state_31898[(7)]);
var inst_31834 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31810);
var state_31898__$1 = state_31898;
var statearr_31979_33698 = state_31898__$1;
(statearr_31979_33698[(2)] = inst_31834);

(statearr_31979_33698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (11))){
var inst_31810 = (state_31898[(7)]);
var inst_31814 = (inst_31810 == null);
var inst_31815 = cljs.core.not(inst_31814);
var state_31898__$1 = state_31898;
if(inst_31815){
var statearr_31980_33700 = state_31898__$1;
(statearr_31980_33700[(1)] = (13));

} else {
var statearr_31981_33701 = state_31898__$1;
(statearr_31981_33701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (9))){
var inst_31783 = (state_31898[(8)]);
var state_31898__$1 = state_31898;
var statearr_31982_33702 = state_31898__$1;
(statearr_31982_33702[(2)] = inst_31783);

(statearr_31982_33702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (5))){
var state_31898__$1 = state_31898;
var statearr_31983_33703 = state_31898__$1;
(statearr_31983_33703[(2)] = true);

(statearr_31983_33703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (14))){
var state_31898__$1 = state_31898;
var statearr_31984_33704 = state_31898__$1;
(statearr_31984_33704[(2)] = false);

(statearr_31984_33704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (26))){
var inst_31854 = (state_31898[(11)]);
var inst_31863 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31854);
var state_31898__$1 = state_31898;
var statearr_31985_33705 = state_31898__$1;
(statearr_31985_33705[(2)] = inst_31863);

(statearr_31985_33705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (16))){
var state_31898__$1 = state_31898;
var statearr_31986_33707 = state_31898__$1;
(statearr_31986_33707[(2)] = true);

(statearr_31986_33707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (38))){
var inst_31887 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
var statearr_31992_33708 = state_31898__$1;
(statearr_31992_33708[(2)] = inst_31887);

(statearr_31992_33708[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (30))){
var inst_31838 = (state_31898[(9)]);
var inst_31839 = (state_31898[(13)]);
var inst_31854 = (state_31898[(11)]);
var inst_31874 = cljs.core.empty_QMARK_(inst_31838);
var inst_31875 = (inst_31839.cljs$core$IFn$_invoke$arity$1 ? inst_31839.cljs$core$IFn$_invoke$arity$1(inst_31854) : inst_31839.call(null,inst_31854));
var inst_31876 = cljs.core.not(inst_31875);
var inst_31877 = ((inst_31874) && (inst_31876));
var state_31898__$1 = state_31898;
var statearr_31994_33710 = state_31898__$1;
(statearr_31994_33710[(2)] = inst_31877);

(statearr_31994_33710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (10))){
var inst_31783 = (state_31898[(8)]);
var inst_31806 = (state_31898[(2)]);
var inst_31807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31806,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31806,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31806,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31810 = inst_31783;
var state_31898__$1 = (function (){var statearr_31995 = state_31898;
(statearr_31995[(7)] = inst_31810);

(statearr_31995[(16)] = inst_31809);

(statearr_31995[(17)] = inst_31807);

(statearr_31995[(18)] = inst_31808);

return statearr_31995;
})();
var statearr_31996_33714 = state_31898__$1;
(statearr_31996_33714[(2)] = null);

(statearr_31996_33714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (18))){
var inst_31829 = (state_31898[(2)]);
var state_31898__$1 = state_31898;
var statearr_31997_33715 = state_31898__$1;
(statearr_31997_33715[(2)] = inst_31829);

(statearr_31997_33715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (37))){
var state_31898__$1 = state_31898;
var statearr_32002_33716 = state_31898__$1;
(statearr_32002_33716[(2)] = null);

(statearr_32002_33716[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31899 === (8))){
var inst_31783 = (state_31898[(8)]);
var inst_31803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31783);
var state_31898__$1 = state_31898;
var statearr_32003_33717 = state_31898__$1;
(statearr_32003_33717[(2)] = inst_31803);

(statearr_32003_33717[(1)] = (10));


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
});})(c__30511__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30258__auto__,c__30511__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30259__auto__ = null;
var cljs$core$async$mix_$_state_machine__30259__auto____0 = (function (){
var statearr_32028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32028[(0)] = cljs$core$async$mix_$_state_machine__30259__auto__);

(statearr_32028[(1)] = (1));

return statearr_32028;
});
var cljs$core$async$mix_$_state_machine__30259__auto____1 = (function (state_31898){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_31898);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e32033){if((e32033 instanceof Object)){
var ex__30262__auto__ = e32033;
var statearr_32034_33719 = state_31898;
(statearr_32034_33719[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33720 = state_31898;
state_31898 = G__33720;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30259__auto__ = function(state_31898){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30259__auto____1.call(this,state_31898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30259__auto____0;
cljs$core$async$mix_$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30259__auto____1;
return cljs$core$async$mix_$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30513__auto__ = (function (){var statearr_32043 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_32043[(6)] = c__30511__auto___33649);

return statearr_32043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32069 = arguments.length;
switch (G__32069) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__32081 = arguments.length;
switch (G__32081) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32076_SHARP_){
if(cljs.core.truth_((p1__32076_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32076_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32076_SHARP_.call(null,topic)))){
return p1__32076_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32076_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32091 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32092){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32092 = meta32092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32093,meta32092__$1){
var self__ = this;
var _32093__$1 = this;
return (new cljs.core.async.t_cljs$core$async32091(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32092__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32093){
var self__ = this;
var _32093__$1 = this;
return self__.meta32092;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32091.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32091.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32092","meta32092",362115543,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32091.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32091.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32091";

cljs.core.async.t_cljs$core$async32091.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32091");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32091.
 */
cljs.core.async.__GT_t_cljs$core$async32091 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32091(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32092){
return (new cljs.core.async.t_cljs$core$async32091(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32092));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32091(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30511__auto___33742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33742,mults,ensure_mult,p){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33742,mults,ensure_mult,p){
return (function (state_32175){
var state_val_32176 = (state_32175[(1)]);
if((state_val_32176 === (7))){
var inst_32171 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32177_33743 = state_32175__$1;
(statearr_32177_33743[(2)] = inst_32171);

(statearr_32177_33743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (20))){
var state_32175__$1 = state_32175;
var statearr_32178_33744 = state_32175__$1;
(statearr_32178_33744[(2)] = null);

(statearr_32178_33744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (1))){
var state_32175__$1 = state_32175;
var statearr_32179_33745 = state_32175__$1;
(statearr_32179_33745[(2)] = null);

(statearr_32179_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (24))){
var inst_32154 = (state_32175[(7)]);
var inst_32163 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32154);
var state_32175__$1 = state_32175;
var statearr_32184_33746 = state_32175__$1;
(statearr_32184_33746[(2)] = inst_32163);

(statearr_32184_33746[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (4))){
var inst_32101 = (state_32175[(8)]);
var inst_32101__$1 = (state_32175[(2)]);
var inst_32104 = (inst_32101__$1 == null);
var state_32175__$1 = (function (){var statearr_32185 = state_32175;
(statearr_32185[(8)] = inst_32101__$1);

return statearr_32185;
})();
if(cljs.core.truth_(inst_32104)){
var statearr_32190_33747 = state_32175__$1;
(statearr_32190_33747[(1)] = (5));

} else {
var statearr_32191_33748 = state_32175__$1;
(statearr_32191_33748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (15))){
var inst_32148 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32192_33749 = state_32175__$1;
(statearr_32192_33749[(2)] = inst_32148);

(statearr_32192_33749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (21))){
var inst_32168 = (state_32175[(2)]);
var state_32175__$1 = (function (){var statearr_32193 = state_32175;
(statearr_32193[(9)] = inst_32168);

return statearr_32193;
})();
var statearr_32194_33750 = state_32175__$1;
(statearr_32194_33750[(2)] = null);

(statearr_32194_33750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (13))){
var inst_32127 = (state_32175[(10)]);
var inst_32129 = cljs.core.chunked_seq_QMARK_(inst_32127);
var state_32175__$1 = state_32175;
if(inst_32129){
var statearr_32195_33753 = state_32175__$1;
(statearr_32195_33753[(1)] = (16));

} else {
var statearr_32196_33754 = state_32175__$1;
(statearr_32196_33754[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (22))){
var inst_32160 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
if(cljs.core.truth_(inst_32160)){
var statearr_32197_33755 = state_32175__$1;
(statearr_32197_33755[(1)] = (23));

} else {
var statearr_32198_33756 = state_32175__$1;
(statearr_32198_33756[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (6))){
var inst_32156 = (state_32175[(11)]);
var inst_32101 = (state_32175[(8)]);
var inst_32154 = (state_32175[(7)]);
var inst_32154__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32101) : topic_fn.call(null,inst_32101));
var inst_32155 = cljs.core.deref(mults);
var inst_32156__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32155,inst_32154__$1);
var state_32175__$1 = (function (){var statearr_32199 = state_32175;
(statearr_32199[(11)] = inst_32156__$1);

(statearr_32199[(7)] = inst_32154__$1);

return statearr_32199;
})();
if(cljs.core.truth_(inst_32156__$1)){
var statearr_32200_33759 = state_32175__$1;
(statearr_32200_33759[(1)] = (19));

} else {
var statearr_32201_33760 = state_32175__$1;
(statearr_32201_33760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (25))){
var inst_32165 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32202_33761 = state_32175__$1;
(statearr_32202_33761[(2)] = inst_32165);

(statearr_32202_33761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (17))){
var inst_32127 = (state_32175[(10)]);
var inst_32139 = cljs.core.first(inst_32127);
var inst_32140 = cljs.core.async.muxch_STAR_(inst_32139);
var inst_32141 = cljs.core.async.close_BANG_(inst_32140);
var inst_32142 = cljs.core.next(inst_32127);
var inst_32113 = inst_32142;
var inst_32114 = null;
var inst_32115 = (0);
var inst_32116 = (0);
var state_32175__$1 = (function (){var statearr_32203 = state_32175;
(statearr_32203[(12)] = inst_32114);

(statearr_32203[(13)] = inst_32113);

(statearr_32203[(14)] = inst_32115);

(statearr_32203[(15)] = inst_32141);

(statearr_32203[(16)] = inst_32116);

return statearr_32203;
})();
var statearr_32204_33763 = state_32175__$1;
(statearr_32204_33763[(2)] = null);

(statearr_32204_33763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (3))){
var inst_32173 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32175__$1,inst_32173);
} else {
if((state_val_32176 === (12))){
var inst_32150 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32205_33764 = state_32175__$1;
(statearr_32205_33764[(2)] = inst_32150);

(statearr_32205_33764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (2))){
var state_32175__$1 = state_32175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32175__$1,(4),ch);
} else {
if((state_val_32176 === (23))){
var state_32175__$1 = state_32175;
var statearr_32206_33765 = state_32175__$1;
(statearr_32206_33765[(2)] = null);

(statearr_32206_33765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (19))){
var inst_32156 = (state_32175[(11)]);
var inst_32101 = (state_32175[(8)]);
var inst_32158 = cljs.core.async.muxch_STAR_(inst_32156);
var state_32175__$1 = state_32175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32175__$1,(22),inst_32158,inst_32101);
} else {
if((state_val_32176 === (11))){
var inst_32127 = (state_32175[(10)]);
var inst_32113 = (state_32175[(13)]);
var inst_32127__$1 = cljs.core.seq(inst_32113);
var state_32175__$1 = (function (){var statearr_32207 = state_32175;
(statearr_32207[(10)] = inst_32127__$1);

return statearr_32207;
})();
if(inst_32127__$1){
var statearr_32208_33766 = state_32175__$1;
(statearr_32208_33766[(1)] = (13));

} else {
var statearr_32209_33767 = state_32175__$1;
(statearr_32209_33767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (9))){
var inst_32152 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32210_33769 = state_32175__$1;
(statearr_32210_33769[(2)] = inst_32152);

(statearr_32210_33769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (5))){
var inst_32110 = cljs.core.deref(mults);
var inst_32111 = cljs.core.vals(inst_32110);
var inst_32112 = cljs.core.seq(inst_32111);
var inst_32113 = inst_32112;
var inst_32114 = null;
var inst_32115 = (0);
var inst_32116 = (0);
var state_32175__$1 = (function (){var statearr_32211 = state_32175;
(statearr_32211[(12)] = inst_32114);

(statearr_32211[(13)] = inst_32113);

(statearr_32211[(14)] = inst_32115);

(statearr_32211[(16)] = inst_32116);

return statearr_32211;
})();
var statearr_32212_33771 = state_32175__$1;
(statearr_32212_33771[(2)] = null);

(statearr_32212_33771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (14))){
var state_32175__$1 = state_32175;
var statearr_32216_33772 = state_32175__$1;
(statearr_32216_33772[(2)] = null);

(statearr_32216_33772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (16))){
var inst_32127 = (state_32175[(10)]);
var inst_32132 = cljs.core.chunk_first(inst_32127);
var inst_32135 = cljs.core.chunk_rest(inst_32127);
var inst_32136 = cljs.core.count(inst_32132);
var inst_32113 = inst_32135;
var inst_32114 = inst_32132;
var inst_32115 = inst_32136;
var inst_32116 = (0);
var state_32175__$1 = (function (){var statearr_32217 = state_32175;
(statearr_32217[(12)] = inst_32114);

(statearr_32217[(13)] = inst_32113);

(statearr_32217[(14)] = inst_32115);

(statearr_32217[(16)] = inst_32116);

return statearr_32217;
})();
var statearr_32218_33776 = state_32175__$1;
(statearr_32218_33776[(2)] = null);

(statearr_32218_33776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (10))){
var inst_32114 = (state_32175[(12)]);
var inst_32113 = (state_32175[(13)]);
var inst_32115 = (state_32175[(14)]);
var inst_32116 = (state_32175[(16)]);
var inst_32121 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32114,inst_32116);
var inst_32122 = cljs.core.async.muxch_STAR_(inst_32121);
var inst_32123 = cljs.core.async.close_BANG_(inst_32122);
var inst_32124 = (inst_32116 + (1));
var tmp32213 = inst_32114;
var tmp32214 = inst_32113;
var tmp32215 = inst_32115;
var inst_32113__$1 = tmp32214;
var inst_32114__$1 = tmp32213;
var inst_32115__$1 = tmp32215;
var inst_32116__$1 = inst_32124;
var state_32175__$1 = (function (){var statearr_32219 = state_32175;
(statearr_32219[(12)] = inst_32114__$1);

(statearr_32219[(17)] = inst_32123);

(statearr_32219[(13)] = inst_32113__$1);

(statearr_32219[(14)] = inst_32115__$1);

(statearr_32219[(16)] = inst_32116__$1);

return statearr_32219;
})();
var statearr_32220_33784 = state_32175__$1;
(statearr_32220_33784[(2)] = null);

(statearr_32220_33784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (18))){
var inst_32145 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32222_33785 = state_32175__$1;
(statearr_32222_33785[(2)] = inst_32145);

(statearr_32222_33785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (8))){
var inst_32115 = (state_32175[(14)]);
var inst_32116 = (state_32175[(16)]);
var inst_32118 = (inst_32116 < inst_32115);
var inst_32119 = inst_32118;
var state_32175__$1 = state_32175;
if(cljs.core.truth_(inst_32119)){
var statearr_32225_33786 = state_32175__$1;
(statearr_32225_33786[(1)] = (10));

} else {
var statearr_32226_33787 = state_32175__$1;
(statearr_32226_33787[(1)] = (11));

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
});})(c__30511__auto___33742,mults,ensure_mult,p))
;
return ((function (switch__30258__auto__,c__30511__auto___33742,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_32227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32227[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_32227[(1)] = (1));

return statearr_32227;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_32175){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_32175);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e32228){if((e32228 instanceof Object)){
var ex__30262__auto__ = e32228;
var statearr_32229_33791 = state_32175;
(statearr_32229_33791[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32228;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33792 = state_32175;
state_32175 = G__33792;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_32175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_32175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33742,mults,ensure_mult,p))
})();
var state__30513__auto__ = (function (){var statearr_32230 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_32230[(6)] = c__30511__auto___33742);

return statearr_32230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33742,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32233 = arguments.length;
switch (G__32233) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__32244 = arguments.length;
switch (G__32244) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__32251 = arguments.length;
switch (G__32251) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30511__auto___33802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33802,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33802,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (7))){
var state_32296__$1 = state_32296;
var statearr_32299_33803 = state_32296__$1;
(statearr_32299_33803[(2)] = null);

(statearr_32299_33803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (1))){
var state_32296__$1 = state_32296;
var statearr_32300_33804 = state_32296__$1;
(statearr_32300_33804[(2)] = null);

(statearr_32300_33804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (4))){
var inst_32257 = (state_32296[(7)]);
var inst_32259 = (inst_32257 < cnt);
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32259)){
var statearr_32301_33806 = state_32296__$1;
(statearr_32301_33806[(1)] = (6));

} else {
var statearr_32302_33807 = state_32296__$1;
(statearr_32302_33807[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (15))){
var inst_32291 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32303_33808 = state_32296__$1;
(statearr_32303_33808[(2)] = inst_32291);

(statearr_32303_33808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (13))){
var inst_32284 = cljs.core.async.close_BANG_(out);
var state_32296__$1 = state_32296;
var statearr_32307_33809 = state_32296__$1;
(statearr_32307_33809[(2)] = inst_32284);

(statearr_32307_33809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (6))){
var state_32296__$1 = state_32296;
var statearr_32311_33813 = state_32296__$1;
(statearr_32311_33813[(2)] = null);

(statearr_32311_33813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (3))){
var inst_32293 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32296__$1,inst_32293);
} else {
if((state_val_32297 === (12))){
var inst_32281 = (state_32296[(8)]);
var inst_32281__$1 = (state_32296[(2)]);
var inst_32282 = cljs.core.some(cljs.core.nil_QMARK_,inst_32281__$1);
var state_32296__$1 = (function (){var statearr_32312 = state_32296;
(statearr_32312[(8)] = inst_32281__$1);

return statearr_32312;
})();
if(cljs.core.truth_(inst_32282)){
var statearr_32313_33820 = state_32296__$1;
(statearr_32313_33820[(1)] = (13));

} else {
var statearr_32314_33821 = state_32296__$1;
(statearr_32314_33821[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (2))){
var inst_32256 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32257 = (0);
var state_32296__$1 = (function (){var statearr_32316 = state_32296;
(statearr_32316[(9)] = inst_32256);

(statearr_32316[(7)] = inst_32257);

return statearr_32316;
})();
var statearr_32317_33822 = state_32296__$1;
(statearr_32317_33822[(2)] = null);

(statearr_32317_33822[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (11))){
var inst_32257 = (state_32296[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32296,(10),Object,null,(9));
var inst_32268 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32257) : chs__$1.call(null,inst_32257));
var inst_32269 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32257) : done.call(null,inst_32257));
var inst_32270 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32268,inst_32269);
var state_32296__$1 = state_32296;
var statearr_32318_33829 = state_32296__$1;
(statearr_32318_33829[(2)] = inst_32270);


cljs.core.async.impl.ioc_helpers.process_exception(state_32296__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (9))){
var inst_32257 = (state_32296[(7)]);
var inst_32272 = (state_32296[(2)]);
var inst_32273 = (inst_32257 + (1));
var inst_32257__$1 = inst_32273;
var state_32296__$1 = (function (){var statearr_32319 = state_32296;
(statearr_32319[(10)] = inst_32272);

(statearr_32319[(7)] = inst_32257__$1);

return statearr_32319;
})();
var statearr_32322_33830 = state_32296__$1;
(statearr_32322_33830[(2)] = null);

(statearr_32322_33830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (5))){
var inst_32279 = (state_32296[(2)]);
var state_32296__$1 = (function (){var statearr_32326 = state_32296;
(statearr_32326[(11)] = inst_32279);

return statearr_32326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32296__$1,(12),dchan);
} else {
if((state_val_32297 === (14))){
var inst_32281 = (state_32296[(8)]);
var inst_32286 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32281);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32296__$1,(16),out,inst_32286);
} else {
if((state_val_32297 === (16))){
var inst_32288 = (state_32296[(2)]);
var state_32296__$1 = (function (){var statearr_32329 = state_32296;
(statearr_32329[(12)] = inst_32288);

return statearr_32329;
})();
var statearr_32332_33831 = state_32296__$1;
(statearr_32332_33831[(2)] = null);

(statearr_32332_33831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (10))){
var inst_32262 = (state_32296[(2)]);
var inst_32263 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32296__$1 = (function (){var statearr_32334 = state_32296;
(statearr_32334[(13)] = inst_32262);

return statearr_32334;
})();
var statearr_32335_33832 = state_32296__$1;
(statearr_32335_33832[(2)] = inst_32263);


cljs.core.async.impl.ioc_helpers.process_exception(state_32296__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (8))){
var inst_32277 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32339_33833 = state_32296__$1;
(statearr_32339_33833[(2)] = inst_32277);

(statearr_32339_33833[(1)] = (5));


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
});})(c__30511__auto___33802,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30258__auto__,c__30511__auto___33802,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_32347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32347[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_32347[(1)] = (1));

return statearr_32347;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_32296){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_32296);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e32355){if((e32355 instanceof Object)){
var ex__30262__auto__ = e32355;
var statearr_32358_33840 = state_32296;
(statearr_32358_33840[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33841 = state_32296;
state_32296 = G__33841;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33802,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30513__auto__ = (function (){var statearr_32370 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_32370[(6)] = c__30511__auto___33802);

return statearr_32370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33802,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32388 = arguments.length;
switch (G__32388) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30511__auto___33843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33843,out){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33843,out){
return (function (state_32434){
var state_val_32435 = (state_32434[(1)]);
if((state_val_32435 === (7))){
var inst_32410 = (state_32434[(7)]);
var inst_32409 = (state_32434[(8)]);
var inst_32409__$1 = (state_32434[(2)]);
var inst_32410__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32409__$1,(0),null);
var inst_32411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32409__$1,(1),null);
var inst_32412 = (inst_32410__$1 == null);
var state_32434__$1 = (function (){var statearr_32436 = state_32434;
(statearr_32436[(9)] = inst_32411);

(statearr_32436[(7)] = inst_32410__$1);

(statearr_32436[(8)] = inst_32409__$1);

return statearr_32436;
})();
if(cljs.core.truth_(inst_32412)){
var statearr_32437_33850 = state_32434__$1;
(statearr_32437_33850[(1)] = (8));

} else {
var statearr_32438_33851 = state_32434__$1;
(statearr_32438_33851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (1))){
var inst_32399 = cljs.core.vec(chs);
var inst_32400 = inst_32399;
var state_32434__$1 = (function (){var statearr_32439 = state_32434;
(statearr_32439[(10)] = inst_32400);

return statearr_32439;
})();
var statearr_32440_33852 = state_32434__$1;
(statearr_32440_33852[(2)] = null);

(statearr_32440_33852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (4))){
var inst_32400 = (state_32434[(10)]);
var state_32434__$1 = state_32434;
return cljs.core.async.ioc_alts_BANG_(state_32434__$1,(7),inst_32400);
} else {
if((state_val_32435 === (6))){
var inst_32427 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32441_33853 = state_32434__$1;
(statearr_32441_33853[(2)] = inst_32427);

(statearr_32441_33853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (3))){
var inst_32429 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32434__$1,inst_32429);
} else {
if((state_val_32435 === (2))){
var inst_32400 = (state_32434[(10)]);
var inst_32402 = cljs.core.count(inst_32400);
var inst_32403 = (inst_32402 > (0));
var state_32434__$1 = state_32434;
if(cljs.core.truth_(inst_32403)){
var statearr_32443_33854 = state_32434__$1;
(statearr_32443_33854[(1)] = (4));

} else {
var statearr_32444_33855 = state_32434__$1;
(statearr_32444_33855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (11))){
var inst_32400 = (state_32434[(10)]);
var inst_32420 = (state_32434[(2)]);
var tmp32442 = inst_32400;
var inst_32400__$1 = tmp32442;
var state_32434__$1 = (function (){var statearr_32445 = state_32434;
(statearr_32445[(11)] = inst_32420);

(statearr_32445[(10)] = inst_32400__$1);

return statearr_32445;
})();
var statearr_32446_33856 = state_32434__$1;
(statearr_32446_33856[(2)] = null);

(statearr_32446_33856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (9))){
var inst_32410 = (state_32434[(7)]);
var state_32434__$1 = state_32434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32434__$1,(11),out,inst_32410);
} else {
if((state_val_32435 === (5))){
var inst_32425 = cljs.core.async.close_BANG_(out);
var state_32434__$1 = state_32434;
var statearr_32447_33857 = state_32434__$1;
(statearr_32447_33857[(2)] = inst_32425);

(statearr_32447_33857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (10))){
var inst_32423 = (state_32434[(2)]);
var state_32434__$1 = state_32434;
var statearr_32449_33858 = state_32434__$1;
(statearr_32449_33858[(2)] = inst_32423);

(statearr_32449_33858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32435 === (8))){
var inst_32411 = (state_32434[(9)]);
var inst_32400 = (state_32434[(10)]);
var inst_32410 = (state_32434[(7)]);
var inst_32409 = (state_32434[(8)]);
var inst_32414 = (function (){var cs = inst_32400;
var vec__32405 = inst_32409;
var v = inst_32410;
var c = inst_32411;
return ((function (cs,vec__32405,v,c,inst_32411,inst_32400,inst_32410,inst_32409,state_val_32435,c__30511__auto___33843,out){
return (function (p1__32379_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32379_SHARP_);
});
;})(cs,vec__32405,v,c,inst_32411,inst_32400,inst_32410,inst_32409,state_val_32435,c__30511__auto___33843,out))
})();
var inst_32415 = cljs.core.filterv(inst_32414,inst_32400);
var inst_32400__$1 = inst_32415;
var state_32434__$1 = (function (){var statearr_32452 = state_32434;
(statearr_32452[(10)] = inst_32400__$1);

return statearr_32452;
})();
var statearr_32453_33865 = state_32434__$1;
(statearr_32453_33865[(2)] = null);

(statearr_32453_33865[(1)] = (2));


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
});})(c__30511__auto___33843,out))
;
return ((function (switch__30258__auto__,c__30511__auto___33843,out){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_32458 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32458[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_32458[(1)] = (1));

return statearr_32458;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_32434){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_32434);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e32459){if((e32459 instanceof Object)){
var ex__30262__auto__ = e32459;
var statearr_32460_33866 = state_32434;
(statearr_32460_33866[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33867 = state_32434;
state_32434 = G__33867;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_32434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_32434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33843,out))
})();
var state__30513__auto__ = (function (){var statearr_32462 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_32462[(6)] = c__30511__auto___33843);

return statearr_32462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33843,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__32465 = arguments.length;
switch (G__32465) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30511__auto___33869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33869,out){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33869,out){
return (function (state_32493){
var state_val_32494 = (state_32493[(1)]);
if((state_val_32494 === (7))){
var inst_32475 = (state_32493[(7)]);
var inst_32475__$1 = (state_32493[(2)]);
var inst_32476 = (inst_32475__$1 == null);
var inst_32477 = cljs.core.not(inst_32476);
var state_32493__$1 = (function (){var statearr_32497 = state_32493;
(statearr_32497[(7)] = inst_32475__$1);

return statearr_32497;
})();
if(inst_32477){
var statearr_32498_33873 = state_32493__$1;
(statearr_32498_33873[(1)] = (8));

} else {
var statearr_32499_33874 = state_32493__$1;
(statearr_32499_33874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (1))){
var inst_32469 = (0);
var state_32493__$1 = (function (){var statearr_32501 = state_32493;
(statearr_32501[(8)] = inst_32469);

return statearr_32501;
})();
var statearr_32502_33875 = state_32493__$1;
(statearr_32502_33875[(2)] = null);

(statearr_32502_33875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (4))){
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32493__$1,(7),ch);
} else {
if((state_val_32494 === (6))){
var inst_32488 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32504_33876 = state_32493__$1;
(statearr_32504_33876[(2)] = inst_32488);

(statearr_32504_33876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (3))){
var inst_32490 = (state_32493[(2)]);
var inst_32491 = cljs.core.async.close_BANG_(out);
var state_32493__$1 = (function (){var statearr_32505 = state_32493;
(statearr_32505[(9)] = inst_32490);

return statearr_32505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32493__$1,inst_32491);
} else {
if((state_val_32494 === (2))){
var inst_32469 = (state_32493[(8)]);
var inst_32471 = (inst_32469 < n);
var state_32493__$1 = state_32493;
if(cljs.core.truth_(inst_32471)){
var statearr_32507_33877 = state_32493__$1;
(statearr_32507_33877[(1)] = (4));

} else {
var statearr_32508_33878 = state_32493__$1;
(statearr_32508_33878[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (11))){
var inst_32469 = (state_32493[(8)]);
var inst_32480 = (state_32493[(2)]);
var inst_32481 = (inst_32469 + (1));
var inst_32469__$1 = inst_32481;
var state_32493__$1 = (function (){var statearr_32510 = state_32493;
(statearr_32510[(10)] = inst_32480);

(statearr_32510[(8)] = inst_32469__$1);

return statearr_32510;
})();
var statearr_32511_33879 = state_32493__$1;
(statearr_32511_33879[(2)] = null);

(statearr_32511_33879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (9))){
var state_32493__$1 = state_32493;
var statearr_32512_33880 = state_32493__$1;
(statearr_32512_33880[(2)] = null);

(statearr_32512_33880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (5))){
var state_32493__$1 = state_32493;
var statearr_32513_33881 = state_32493__$1;
(statearr_32513_33881[(2)] = null);

(statearr_32513_33881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (10))){
var inst_32485 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32514_33882 = state_32493__$1;
(statearr_32514_33882[(2)] = inst_32485);

(statearr_32514_33882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (8))){
var inst_32475 = (state_32493[(7)]);
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32493__$1,(11),out,inst_32475);
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
});})(c__30511__auto___33869,out))
;
return ((function (switch__30258__auto__,c__30511__auto___33869,out){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_32515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32515[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_32515[(1)] = (1));

return statearr_32515;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_32493){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_32493);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e32516){if((e32516 instanceof Object)){
var ex__30262__auto__ = e32516;
var statearr_32517_33886 = state_32493;
(statearr_32517_33886[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32516;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33889 = state_32493;
state_32493 = G__33889;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_32493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_32493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33869,out))
})();
var state__30513__auto__ = (function (){var statearr_32518 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_32518[(6)] = c__30511__auto___33869);

return statearr_32518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33869,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32521 = (function (f,ch,meta32522){
this.f = f;
this.ch = ch;
this.meta32522 = meta32522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32523,meta32522__$1){
var self__ = this;
var _32523__$1 = this;
return (new cljs.core.async.t_cljs$core$async32521(self__.f,self__.ch,meta32522__$1));
});

cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32523){
var self__ = this;
var _32523__$1 = this;
return self__.meta32522;
});

cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32525 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32525 = (function (f,ch,meta32522,_,fn1,meta32526){
this.f = f;
this.ch = ch;
this.meta32522 = meta32522;
this._ = _;
this.fn1 = fn1;
this.meta32526 = meta32526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32527,meta32526__$1){
var self__ = this;
var _32527__$1 = this;
return (new cljs.core.async.t_cljs$core$async32525(self__.f,self__.ch,self__.meta32522,self__._,self__.fn1,meta32526__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32527){
var self__ = this;
var _32527__$1 = this;
return self__.meta32526;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32525.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32520_SHARP_){
var G__32530 = (((p1__32520_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32520_SHARP_) : self__.f.call(null,p1__32520_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32530) : f1.call(null,G__32530));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32525.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32522","meta32522",1156875,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32521","cljs.core.async/t_cljs$core$async32521",-1530865027,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32526","meta32526",-1941300705,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32525";

cljs.core.async.t_cljs$core$async32525.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32525");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32525.
 */
cljs.core.async.__GT_t_cljs$core$async32525 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32525(f__$1,ch__$1,meta32522__$1,___$2,fn1__$1,meta32526){
return (new cljs.core.async.t_cljs$core$async32525(f__$1,ch__$1,meta32522__$1,___$2,fn1__$1,meta32526));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32525(self__.f,self__.ch,self__.meta32522,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32531 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32531) : self__.f.call(null,G__32531));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32522","meta32522",1156875,null)], null);
});

cljs.core.async.t_cljs$core$async32521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32521";

cljs.core.async.t_cljs$core$async32521.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32521");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32521.
 */
cljs.core.async.__GT_t_cljs$core$async32521 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32521(f__$1,ch__$1,meta32522){
return (new cljs.core.async.t_cljs$core$async32521(f__$1,ch__$1,meta32522));
});

}

return (new cljs.core.async.t_cljs$core$async32521(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32532 = (function (f,ch,meta32533){
this.f = f;
this.ch = ch;
this.meta32533 = meta32533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32534,meta32533__$1){
var self__ = this;
var _32534__$1 = this;
return (new cljs.core.async.t_cljs$core$async32532(self__.f,self__.ch,meta32533__$1));
});

cljs.core.async.t_cljs$core$async32532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32534){
var self__ = this;
var _32534__$1 = this;
return self__.meta32533;
});

cljs.core.async.t_cljs$core$async32532.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32532.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32532.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32533","meta32533",-1702933868,null)], null);
});

cljs.core.async.t_cljs$core$async32532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32532";

cljs.core.async.t_cljs$core$async32532.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32532");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32532.
 */
cljs.core.async.__GT_t_cljs$core$async32532 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32532(f__$1,ch__$1,meta32533){
return (new cljs.core.async.t_cljs$core$async32532(f__$1,ch__$1,meta32533));
});

}

return (new cljs.core.async.t_cljs$core$async32532(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32538 = (function (p,ch,meta32539){
this.p = p;
this.ch = ch;
this.meta32539 = meta32539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32540,meta32539__$1){
var self__ = this;
var _32540__$1 = this;
return (new cljs.core.async.t_cljs$core$async32538(self__.p,self__.ch,meta32539__$1));
});

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32540){
var self__ = this;
var _32540__$1 = this;
return self__.meta32539;
});

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32539","meta32539",-457614455,null)], null);
});

cljs.core.async.t_cljs$core$async32538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32538";

cljs.core.async.t_cljs$core$async32538.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32538");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32538.
 */
cljs.core.async.__GT_t_cljs$core$async32538 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32538(p__$1,ch__$1,meta32539){
return (new cljs.core.async.t_cljs$core$async32538(p__$1,ch__$1,meta32539));
});

}

return (new cljs.core.async.t_cljs$core$async32538(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32565 = arguments.length;
switch (G__32565) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30511__auto___33910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___33910,out){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___33910,out){
return (function (state_32595){
var state_val_32596 = (state_32595[(1)]);
if((state_val_32596 === (7))){
var inst_32590 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
var statearr_32599_33912 = state_32595__$1;
(statearr_32599_33912[(2)] = inst_32590);

(statearr_32599_33912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (1))){
var state_32595__$1 = state_32595;
var statearr_32604_33913 = state_32595__$1;
(statearr_32604_33913[(2)] = null);

(statearr_32604_33913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (4))){
var inst_32576 = (state_32595[(7)]);
var inst_32576__$1 = (state_32595[(2)]);
var inst_32577 = (inst_32576__$1 == null);
var state_32595__$1 = (function (){var statearr_32605 = state_32595;
(statearr_32605[(7)] = inst_32576__$1);

return statearr_32605;
})();
if(cljs.core.truth_(inst_32577)){
var statearr_32606_33914 = state_32595__$1;
(statearr_32606_33914[(1)] = (5));

} else {
var statearr_32607_33915 = state_32595__$1;
(statearr_32607_33915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (6))){
var inst_32576 = (state_32595[(7)]);
var inst_32581 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32576) : p.call(null,inst_32576));
var state_32595__$1 = state_32595;
if(cljs.core.truth_(inst_32581)){
var statearr_32608_33917 = state_32595__$1;
(statearr_32608_33917[(1)] = (8));

} else {
var statearr_32609_33918 = state_32595__$1;
(statearr_32609_33918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (3))){
var inst_32592 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32595__$1,inst_32592);
} else {
if((state_val_32596 === (2))){
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32595__$1,(4),ch);
} else {
if((state_val_32596 === (11))){
var inst_32584 = (state_32595[(2)]);
var state_32595__$1 = state_32595;
var statearr_32612_33919 = state_32595__$1;
(statearr_32612_33919[(2)] = inst_32584);

(statearr_32612_33919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (9))){
var state_32595__$1 = state_32595;
var statearr_32614_33921 = state_32595__$1;
(statearr_32614_33921[(2)] = null);

(statearr_32614_33921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (5))){
var inst_32579 = cljs.core.async.close_BANG_(out);
var state_32595__$1 = state_32595;
var statearr_32615_33922 = state_32595__$1;
(statearr_32615_33922[(2)] = inst_32579);

(statearr_32615_33922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (10))){
var inst_32587 = (state_32595[(2)]);
var state_32595__$1 = (function (){var statearr_32616 = state_32595;
(statearr_32616[(8)] = inst_32587);

return statearr_32616;
})();
var statearr_32617_33923 = state_32595__$1;
(statearr_32617_33923[(2)] = null);

(statearr_32617_33923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32596 === (8))){
var inst_32576 = (state_32595[(7)]);
var state_32595__$1 = state_32595;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32595__$1,(11),out,inst_32576);
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
});})(c__30511__auto___33910,out))
;
return ((function (switch__30258__auto__,c__30511__auto___33910,out){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_32618 = [null,null,null,null,null,null,null,null,null];
(statearr_32618[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_32618[(1)] = (1));

return statearr_32618;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_32595){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_32595);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e32619){if((e32619 instanceof Object)){
var ex__30262__auto__ = e32619;
var statearr_32620_33928 = state_32595;
(statearr_32620_33928[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33933 = state_32595;
state_32595 = G__33933;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_32595){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_32595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___33910,out))
})();
var state__30513__auto__ = (function (){var statearr_32621 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_32621[(6)] = c__30511__auto___33910);

return statearr_32621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___33910,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32627 = arguments.length;
switch (G__32627) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto__){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto__){
return (function (state_32711){
var state_val_32712 = (state_32711[(1)]);
if((state_val_32712 === (7))){
var inst_32706 = (state_32711[(2)]);
var state_32711__$1 = state_32711;
var statearr_32718_33950 = state_32711__$1;
(statearr_32718_33950[(2)] = inst_32706);

(statearr_32718_33950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (20))){
var inst_32672 = (state_32711[(7)]);
var inst_32683 = (state_32711[(2)]);
var inst_32688 = cljs.core.next(inst_32672);
var inst_32654 = inst_32688;
var inst_32655 = null;
var inst_32656 = (0);
var inst_32657 = (0);
var state_32711__$1 = (function (){var statearr_32721 = state_32711;
(statearr_32721[(8)] = inst_32683);

(statearr_32721[(9)] = inst_32655);

(statearr_32721[(10)] = inst_32657);

(statearr_32721[(11)] = inst_32656);

(statearr_32721[(12)] = inst_32654);

return statearr_32721;
})();
var statearr_32723_33951 = state_32711__$1;
(statearr_32723_33951[(2)] = null);

(statearr_32723_33951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (1))){
var state_32711__$1 = state_32711;
var statearr_32725_33952 = state_32711__$1;
(statearr_32725_33952[(2)] = null);

(statearr_32725_33952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (4))){
var inst_32640 = (state_32711[(13)]);
var inst_32640__$1 = (state_32711[(2)]);
var inst_32644 = (inst_32640__$1 == null);
var state_32711__$1 = (function (){var statearr_32727 = state_32711;
(statearr_32727[(13)] = inst_32640__$1);

return statearr_32727;
})();
if(cljs.core.truth_(inst_32644)){
var statearr_32730_33953 = state_32711__$1;
(statearr_32730_33953[(1)] = (5));

} else {
var statearr_32731_33954 = state_32711__$1;
(statearr_32731_33954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (15))){
var state_32711__$1 = state_32711;
var statearr_32737_33959 = state_32711__$1;
(statearr_32737_33959[(2)] = null);

(statearr_32737_33959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (21))){
var state_32711__$1 = state_32711;
var statearr_32739_33960 = state_32711__$1;
(statearr_32739_33960[(2)] = null);

(statearr_32739_33960[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (13))){
var inst_32655 = (state_32711[(9)]);
var inst_32657 = (state_32711[(10)]);
var inst_32656 = (state_32711[(11)]);
var inst_32654 = (state_32711[(12)]);
var inst_32668 = (state_32711[(2)]);
var inst_32669 = (inst_32657 + (1));
var tmp32734 = inst_32655;
var tmp32735 = inst_32656;
var tmp32736 = inst_32654;
var inst_32654__$1 = tmp32736;
var inst_32655__$1 = tmp32734;
var inst_32656__$1 = tmp32735;
var inst_32657__$1 = inst_32669;
var state_32711__$1 = (function (){var statearr_32744 = state_32711;
(statearr_32744[(14)] = inst_32668);

(statearr_32744[(9)] = inst_32655__$1);

(statearr_32744[(10)] = inst_32657__$1);

(statearr_32744[(11)] = inst_32656__$1);

(statearr_32744[(12)] = inst_32654__$1);

return statearr_32744;
})();
var statearr_32745_33969 = state_32711__$1;
(statearr_32745_33969[(2)] = null);

(statearr_32745_33969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (22))){
var state_32711__$1 = state_32711;
var statearr_32746_33970 = state_32711__$1;
(statearr_32746_33970[(2)] = null);

(statearr_32746_33970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (6))){
var inst_32640 = (state_32711[(13)]);
var inst_32652 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32640) : f.call(null,inst_32640));
var inst_32653 = cljs.core.seq(inst_32652);
var inst_32654 = inst_32653;
var inst_32655 = null;
var inst_32656 = (0);
var inst_32657 = (0);
var state_32711__$1 = (function (){var statearr_32747 = state_32711;
(statearr_32747[(9)] = inst_32655);

(statearr_32747[(10)] = inst_32657);

(statearr_32747[(11)] = inst_32656);

(statearr_32747[(12)] = inst_32654);

return statearr_32747;
})();
var statearr_32752_33978 = state_32711__$1;
(statearr_32752_33978[(2)] = null);

(statearr_32752_33978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (17))){
var inst_32672 = (state_32711[(7)]);
var inst_32676 = cljs.core.chunk_first(inst_32672);
var inst_32677 = cljs.core.chunk_rest(inst_32672);
var inst_32678 = cljs.core.count(inst_32676);
var inst_32654 = inst_32677;
var inst_32655 = inst_32676;
var inst_32656 = inst_32678;
var inst_32657 = (0);
var state_32711__$1 = (function (){var statearr_32754 = state_32711;
(statearr_32754[(9)] = inst_32655);

(statearr_32754[(10)] = inst_32657);

(statearr_32754[(11)] = inst_32656);

(statearr_32754[(12)] = inst_32654);

return statearr_32754;
})();
var statearr_32756_33987 = state_32711__$1;
(statearr_32756_33987[(2)] = null);

(statearr_32756_33987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (3))){
var inst_32708 = (state_32711[(2)]);
var state_32711__$1 = state_32711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32711__$1,inst_32708);
} else {
if((state_val_32712 === (12))){
var inst_32696 = (state_32711[(2)]);
var state_32711__$1 = state_32711;
var statearr_32759_33995 = state_32711__$1;
(statearr_32759_33995[(2)] = inst_32696);

(statearr_32759_33995[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (2))){
var state_32711__$1 = state_32711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32711__$1,(4),in$);
} else {
if((state_val_32712 === (23))){
var inst_32704 = (state_32711[(2)]);
var state_32711__$1 = state_32711;
var statearr_32761_33997 = state_32711__$1;
(statearr_32761_33997[(2)] = inst_32704);

(statearr_32761_33997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (19))){
var inst_32691 = (state_32711[(2)]);
var state_32711__$1 = state_32711;
var statearr_32763_33998 = state_32711__$1;
(statearr_32763_33998[(2)] = inst_32691);

(statearr_32763_33998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (11))){
var inst_32654 = (state_32711[(12)]);
var inst_32672 = (state_32711[(7)]);
var inst_32672__$1 = cljs.core.seq(inst_32654);
var state_32711__$1 = (function (){var statearr_32766 = state_32711;
(statearr_32766[(7)] = inst_32672__$1);

return statearr_32766;
})();
if(inst_32672__$1){
var statearr_32767_34000 = state_32711__$1;
(statearr_32767_34000[(1)] = (14));

} else {
var statearr_32768_34001 = state_32711__$1;
(statearr_32768_34001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (9))){
var inst_32698 = (state_32711[(2)]);
var inst_32699 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32711__$1 = (function (){var statearr_32772 = state_32711;
(statearr_32772[(15)] = inst_32698);

return statearr_32772;
})();
if(cljs.core.truth_(inst_32699)){
var statearr_32773_34004 = state_32711__$1;
(statearr_32773_34004[(1)] = (21));

} else {
var statearr_32774_34005 = state_32711__$1;
(statearr_32774_34005[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (5))){
var inst_32646 = cljs.core.async.close_BANG_(out);
var state_32711__$1 = state_32711;
var statearr_32776_34006 = state_32711__$1;
(statearr_32776_34006[(2)] = inst_32646);

(statearr_32776_34006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (14))){
var inst_32672 = (state_32711[(7)]);
var inst_32674 = cljs.core.chunked_seq_QMARK_(inst_32672);
var state_32711__$1 = state_32711;
if(inst_32674){
var statearr_32779_34008 = state_32711__$1;
(statearr_32779_34008[(1)] = (17));

} else {
var statearr_32781_34009 = state_32711__$1;
(statearr_32781_34009[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (16))){
var inst_32694 = (state_32711[(2)]);
var state_32711__$1 = state_32711;
var statearr_32785_34010 = state_32711__$1;
(statearr_32785_34010[(2)] = inst_32694);

(statearr_32785_34010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32712 === (10))){
var inst_32655 = (state_32711[(9)]);
var inst_32657 = (state_32711[(10)]);
var inst_32666 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32655,inst_32657);
var state_32711__$1 = state_32711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32711__$1,(13),out,inst_32666);
} else {
if((state_val_32712 === (18))){
var inst_32672 = (state_32711[(7)]);
var inst_32681 = cljs.core.first(inst_32672);
var state_32711__$1 = state_32711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32711__$1,(20),out,inst_32681);
} else {
if((state_val_32712 === (8))){
var inst_32657 = (state_32711[(10)]);
var inst_32656 = (state_32711[(11)]);
var inst_32663 = (inst_32657 < inst_32656);
var inst_32664 = inst_32663;
var state_32711__$1 = state_32711;
if(cljs.core.truth_(inst_32664)){
var statearr_32792_34013 = state_32711__$1;
(statearr_32792_34013[(1)] = (10));

} else {
var statearr_32794_34014 = state_32711__$1;
(statearr_32794_34014[(1)] = (11));

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
});})(c__30511__auto__))
;
return ((function (switch__30258__auto__,c__30511__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30259__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30259__auto____0 = (function (){
var statearr_32799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32799[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30259__auto__);

(statearr_32799[(1)] = (1));

return statearr_32799;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30259__auto____1 = (function (state_32711){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_32711);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e32803){if((e32803 instanceof Object)){
var ex__30262__auto__ = e32803;
var statearr_32804_34016 = state_32711;
(statearr_32804_34016[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32803;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34018 = state_32711;
state_32711 = G__34018;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30259__auto__ = function(state_32711){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30259__auto____1.call(this,state_32711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30259__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30259__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto__))
})();
var state__30513__auto__ = (function (){var statearr_32808 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_32808[(6)] = c__30511__auto__);

return statearr_32808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto__))
);

return c__30511__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32815 = arguments.length;
switch (G__32815) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32824 = arguments.length;
switch (G__32824) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32834 = arguments.length;
switch (G__32834) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30511__auto___34047 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___34047,out){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___34047,out){
return (function (state_32874){
var state_val_32875 = (state_32874[(1)]);
if((state_val_32875 === (7))){
var inst_32867 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
var statearr_32881_34055 = state_32874__$1;
(statearr_32881_34055[(2)] = inst_32867);

(statearr_32881_34055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (1))){
var inst_32847 = null;
var state_32874__$1 = (function (){var statearr_32882 = state_32874;
(statearr_32882[(7)] = inst_32847);

return statearr_32882;
})();
var statearr_32883_34057 = state_32874__$1;
(statearr_32883_34057[(2)] = null);

(statearr_32883_34057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (4))){
var inst_32851 = (state_32874[(8)]);
var inst_32851__$1 = (state_32874[(2)]);
var inst_32852 = (inst_32851__$1 == null);
var inst_32853 = cljs.core.not(inst_32852);
var state_32874__$1 = (function (){var statearr_32887 = state_32874;
(statearr_32887[(8)] = inst_32851__$1);

return statearr_32887;
})();
if(inst_32853){
var statearr_32888_34070 = state_32874__$1;
(statearr_32888_34070[(1)] = (5));

} else {
var statearr_32889_34071 = state_32874__$1;
(statearr_32889_34071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (6))){
var state_32874__$1 = state_32874;
var statearr_32894_34074 = state_32874__$1;
(statearr_32894_34074[(2)] = null);

(statearr_32894_34074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (3))){
var inst_32869 = (state_32874[(2)]);
var inst_32870 = cljs.core.async.close_BANG_(out);
var state_32874__$1 = (function (){var statearr_32895 = state_32874;
(statearr_32895[(9)] = inst_32869);

return statearr_32895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32874__$1,inst_32870);
} else {
if((state_val_32875 === (2))){
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32874__$1,(4),ch);
} else {
if((state_val_32875 === (11))){
var inst_32851 = (state_32874[(8)]);
var inst_32861 = (state_32874[(2)]);
var inst_32847 = inst_32851;
var state_32874__$1 = (function (){var statearr_32898 = state_32874;
(statearr_32898[(10)] = inst_32861);

(statearr_32898[(7)] = inst_32847);

return statearr_32898;
})();
var statearr_32903_34094 = state_32874__$1;
(statearr_32903_34094[(2)] = null);

(statearr_32903_34094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (9))){
var inst_32851 = (state_32874[(8)]);
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32874__$1,(11),out,inst_32851);
} else {
if((state_val_32875 === (5))){
var inst_32851 = (state_32874[(8)]);
var inst_32847 = (state_32874[(7)]);
var inst_32856 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32851,inst_32847);
var state_32874__$1 = state_32874;
if(inst_32856){
var statearr_32905_34107 = state_32874__$1;
(statearr_32905_34107[(1)] = (8));

} else {
var statearr_32906_34108 = state_32874__$1;
(statearr_32906_34108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (10))){
var inst_32864 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
var statearr_32909_34117 = state_32874__$1;
(statearr_32909_34117[(2)] = inst_32864);

(statearr_32909_34117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (8))){
var inst_32847 = (state_32874[(7)]);
var tmp32904 = inst_32847;
var inst_32847__$1 = tmp32904;
var state_32874__$1 = (function (){var statearr_32910 = state_32874;
(statearr_32910[(7)] = inst_32847__$1);

return statearr_32910;
})();
var statearr_32915_34126 = state_32874__$1;
(statearr_32915_34126[(2)] = null);

(statearr_32915_34126[(1)] = (2));


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
});})(c__30511__auto___34047,out))
;
return ((function (switch__30258__auto__,c__30511__auto___34047,out){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_32916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32916[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_32916[(1)] = (1));

return statearr_32916;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_32874){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_32874);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e32918){if((e32918 instanceof Object)){
var ex__30262__auto__ = e32918;
var statearr_32921_34127 = state_32874;
(statearr_32921_34127[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34128 = state_32874;
state_32874 = G__34128;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_32874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_32874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___34047,out))
})();
var state__30513__auto__ = (function (){var statearr_32928 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_32928[(6)] = c__30511__auto___34047);

return statearr_32928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___34047,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32931 = arguments.length;
switch (G__32931) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30511__auto___34134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___34134,out){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___34134,out){
return (function (state_32974){
var state_val_32975 = (state_32974[(1)]);
if((state_val_32975 === (7))){
var inst_32970 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_32983_34139 = state_32974__$1;
(statearr_32983_34139[(2)] = inst_32970);

(statearr_32983_34139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (1))){
var inst_32934 = (new Array(n));
var inst_32935 = inst_32934;
var inst_32936 = (0);
var state_32974__$1 = (function (){var statearr_32986 = state_32974;
(statearr_32986[(7)] = inst_32935);

(statearr_32986[(8)] = inst_32936);

return statearr_32986;
})();
var statearr_32987_34144 = state_32974__$1;
(statearr_32987_34144[(2)] = null);

(statearr_32987_34144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (4))){
var inst_32939 = (state_32974[(9)]);
var inst_32939__$1 = (state_32974[(2)]);
var inst_32940 = (inst_32939__$1 == null);
var inst_32941 = cljs.core.not(inst_32940);
var state_32974__$1 = (function (){var statearr_32988 = state_32974;
(statearr_32988[(9)] = inst_32939__$1);

return statearr_32988;
})();
if(inst_32941){
var statearr_32989_34150 = state_32974__$1;
(statearr_32989_34150[(1)] = (5));

} else {
var statearr_32990_34151 = state_32974__$1;
(statearr_32990_34151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (15))){
var inst_32964 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_32991_34152 = state_32974__$1;
(statearr_32991_34152[(2)] = inst_32964);

(statearr_32991_34152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (13))){
var state_32974__$1 = state_32974;
var statearr_32993_34153 = state_32974__$1;
(statearr_32993_34153[(2)] = null);

(statearr_32993_34153[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (6))){
var inst_32936 = (state_32974[(8)]);
var inst_32959 = (inst_32936 > (0));
var state_32974__$1 = state_32974;
if(cljs.core.truth_(inst_32959)){
var statearr_32994_34155 = state_32974__$1;
(statearr_32994_34155[(1)] = (12));

} else {
var statearr_32995_34156 = state_32974__$1;
(statearr_32995_34156[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (3))){
var inst_32972 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32974__$1,inst_32972);
} else {
if((state_val_32975 === (12))){
var inst_32935 = (state_32974[(7)]);
var inst_32962 = cljs.core.vec(inst_32935);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32974__$1,(15),out,inst_32962);
} else {
if((state_val_32975 === (2))){
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32974__$1,(4),ch);
} else {
if((state_val_32975 === (11))){
var inst_32952 = (state_32974[(2)]);
var inst_32953 = (new Array(n));
var inst_32935 = inst_32953;
var inst_32936 = (0);
var state_32974__$1 = (function (){var statearr_33002 = state_32974;
(statearr_33002[(7)] = inst_32935);

(statearr_33002[(8)] = inst_32936);

(statearr_33002[(10)] = inst_32952);

return statearr_33002;
})();
var statearr_33003_34158 = state_32974__$1;
(statearr_33003_34158[(2)] = null);

(statearr_33003_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (9))){
var inst_32935 = (state_32974[(7)]);
var inst_32950 = cljs.core.vec(inst_32935);
var state_32974__$1 = state_32974;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32974__$1,(11),out,inst_32950);
} else {
if((state_val_32975 === (5))){
var inst_32935 = (state_32974[(7)]);
var inst_32936 = (state_32974[(8)]);
var inst_32944 = (state_32974[(11)]);
var inst_32939 = (state_32974[(9)]);
var inst_32943 = (inst_32935[inst_32936] = inst_32939);
var inst_32944__$1 = (inst_32936 + (1));
var inst_32945 = (inst_32944__$1 < n);
var state_32974__$1 = (function (){var statearr_33006 = state_32974;
(statearr_33006[(12)] = inst_32943);

(statearr_33006[(11)] = inst_32944__$1);

return statearr_33006;
})();
if(cljs.core.truth_(inst_32945)){
var statearr_33007_34162 = state_32974__$1;
(statearr_33007_34162[(1)] = (8));

} else {
var statearr_33008_34163 = state_32974__$1;
(statearr_33008_34163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (14))){
var inst_32967 = (state_32974[(2)]);
var inst_32968 = cljs.core.async.close_BANG_(out);
var state_32974__$1 = (function (){var statearr_33010 = state_32974;
(statearr_33010[(13)] = inst_32967);

return statearr_33010;
})();
var statearr_33011_34164 = state_32974__$1;
(statearr_33011_34164[(2)] = inst_32968);

(statearr_33011_34164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (10))){
var inst_32956 = (state_32974[(2)]);
var state_32974__$1 = state_32974;
var statearr_33012_34167 = state_32974__$1;
(statearr_33012_34167[(2)] = inst_32956);

(statearr_33012_34167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32975 === (8))){
var inst_32935 = (state_32974[(7)]);
var inst_32944 = (state_32974[(11)]);
var tmp33009 = inst_32935;
var inst_32935__$1 = tmp33009;
var inst_32936 = inst_32944;
var state_32974__$1 = (function (){var statearr_33013 = state_32974;
(statearr_33013[(7)] = inst_32935__$1);

(statearr_33013[(8)] = inst_32936);

return statearr_33013;
})();
var statearr_33014_34173 = state_32974__$1;
(statearr_33014_34173[(2)] = null);

(statearr_33014_34173[(1)] = (2));


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
});})(c__30511__auto___34134,out))
;
return ((function (switch__30258__auto__,c__30511__auto___34134,out){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_33020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33020[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_33020[(1)] = (1));

return statearr_33020;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_32974){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_32974);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e33025){if((e33025 instanceof Object)){
var ex__30262__auto__ = e33025;
var statearr_33026_34201 = state_32974;
(statearr_33026_34201[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33025;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34208 = state_32974;
state_32974 = G__34208;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_32974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_32974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___34134,out))
})();
var state__30513__auto__ = (function (){var statearr_33033 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_33033[(6)] = c__30511__auto___34134);

return statearr_33033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___34134,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33044 = arguments.length;
switch (G__33044) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30511__auto___34222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___34222,out){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___34222,out){
return (function (state_33092){
var state_val_33093 = (state_33092[(1)]);
if((state_val_33093 === (7))){
var inst_33088 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33109_34226 = state_33092__$1;
(statearr_33109_34226[(2)] = inst_33088);

(statearr_33109_34226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (1))){
var inst_33051 = [];
var inst_33052 = inst_33051;
var inst_33053 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33092__$1 = (function (){var statearr_33110 = state_33092;
(statearr_33110[(7)] = inst_33053);

(statearr_33110[(8)] = inst_33052);

return statearr_33110;
})();
var statearr_33111_34228 = state_33092__$1;
(statearr_33111_34228[(2)] = null);

(statearr_33111_34228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (4))){
var inst_33056 = (state_33092[(9)]);
var inst_33056__$1 = (state_33092[(2)]);
var inst_33057 = (inst_33056__$1 == null);
var inst_33058 = cljs.core.not(inst_33057);
var state_33092__$1 = (function (){var statearr_33112 = state_33092;
(statearr_33112[(9)] = inst_33056__$1);

return statearr_33112;
})();
if(inst_33058){
var statearr_33113_34229 = state_33092__$1;
(statearr_33113_34229[(1)] = (5));

} else {
var statearr_33114_34230 = state_33092__$1;
(statearr_33114_34230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (15))){
var inst_33082 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33116_34231 = state_33092__$1;
(statearr_33116_34231[(2)] = inst_33082);

(statearr_33116_34231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (13))){
var state_33092__$1 = state_33092;
var statearr_33117_34232 = state_33092__$1;
(statearr_33117_34232[(2)] = null);

(statearr_33117_34232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (6))){
var inst_33052 = (state_33092[(8)]);
var inst_33077 = inst_33052.length;
var inst_33078 = (inst_33077 > (0));
var state_33092__$1 = state_33092;
if(cljs.core.truth_(inst_33078)){
var statearr_33118_34233 = state_33092__$1;
(statearr_33118_34233[(1)] = (12));

} else {
var statearr_33119_34234 = state_33092__$1;
(statearr_33119_34234[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (3))){
var inst_33090 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33092__$1,inst_33090);
} else {
if((state_val_33093 === (12))){
var inst_33052 = (state_33092[(8)]);
var inst_33080 = cljs.core.vec(inst_33052);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33092__$1,(15),out,inst_33080);
} else {
if((state_val_33093 === (2))){
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33092__$1,(4),ch);
} else {
if((state_val_33093 === (11))){
var inst_33060 = (state_33092[(10)]);
var inst_33056 = (state_33092[(9)]);
var inst_33070 = (state_33092[(2)]);
var inst_33071 = [];
var inst_33072 = inst_33071.push(inst_33056);
var inst_33052 = inst_33071;
var inst_33053 = inst_33060;
var state_33092__$1 = (function (){var statearr_33120 = state_33092;
(statearr_33120[(11)] = inst_33070);

(statearr_33120[(12)] = inst_33072);

(statearr_33120[(7)] = inst_33053);

(statearr_33120[(8)] = inst_33052);

return statearr_33120;
})();
var statearr_33121_34235 = state_33092__$1;
(statearr_33121_34235[(2)] = null);

(statearr_33121_34235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (9))){
var inst_33052 = (state_33092[(8)]);
var inst_33068 = cljs.core.vec(inst_33052);
var state_33092__$1 = state_33092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33092__$1,(11),out,inst_33068);
} else {
if((state_val_33093 === (5))){
var inst_33060 = (state_33092[(10)]);
var inst_33056 = (state_33092[(9)]);
var inst_33053 = (state_33092[(7)]);
var inst_33060__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33056) : f.call(null,inst_33056));
var inst_33061 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33060__$1,inst_33053);
var inst_33062 = cljs.core.keyword_identical_QMARK_(inst_33053,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33063 = ((inst_33061) || (inst_33062));
var state_33092__$1 = (function (){var statearr_33122 = state_33092;
(statearr_33122[(10)] = inst_33060__$1);

return statearr_33122;
})();
if(cljs.core.truth_(inst_33063)){
var statearr_33123_34248 = state_33092__$1;
(statearr_33123_34248[(1)] = (8));

} else {
var statearr_33124_34249 = state_33092__$1;
(statearr_33124_34249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (14))){
var inst_33085 = (state_33092[(2)]);
var inst_33086 = cljs.core.async.close_BANG_(out);
var state_33092__$1 = (function (){var statearr_33126 = state_33092;
(statearr_33126[(13)] = inst_33085);

return statearr_33126;
})();
var statearr_33127_34250 = state_33092__$1;
(statearr_33127_34250[(2)] = inst_33086);

(statearr_33127_34250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (10))){
var inst_33075 = (state_33092[(2)]);
var state_33092__$1 = state_33092;
var statearr_33128_34252 = state_33092__$1;
(statearr_33128_34252[(2)] = inst_33075);

(statearr_33128_34252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33093 === (8))){
var inst_33060 = (state_33092[(10)]);
var inst_33056 = (state_33092[(9)]);
var inst_33052 = (state_33092[(8)]);
var inst_33065 = inst_33052.push(inst_33056);
var tmp33125 = inst_33052;
var inst_33052__$1 = tmp33125;
var inst_33053 = inst_33060;
var state_33092__$1 = (function (){var statearr_33129 = state_33092;
(statearr_33129[(14)] = inst_33065);

(statearr_33129[(7)] = inst_33053);

(statearr_33129[(8)] = inst_33052__$1);

return statearr_33129;
})();
var statearr_33130_34253 = state_33092__$1;
(statearr_33130_34253[(2)] = null);

(statearr_33130_34253[(1)] = (2));


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
});})(c__30511__auto___34222,out))
;
return ((function (switch__30258__auto__,c__30511__auto___34222,out){
return (function() {
var cljs$core$async$state_machine__30259__auto__ = null;
var cljs$core$async$state_machine__30259__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = cljs$core$async$state_machine__30259__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var cljs$core$async$state_machine__30259__auto____1 = (function (state_33092){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_33092);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e33132){if((e33132 instanceof Object)){
var ex__30262__auto__ = e33132;
var statearr_33133_34257 = state_33092;
(statearr_33133_34257[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33132;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34259 = state_33092;
state_33092 = G__34259;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
cljs$core$async$state_machine__30259__auto__ = function(state_33092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30259__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30259__auto____1.call(this,state_33092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30259__auto____0;
cljs$core$async$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30259__auto____1;
return cljs$core$async$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___34222,out))
})();
var state__30513__auto__ = (function (){var statearr_33134 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_33134[(6)] = c__30511__auto___34222);

return statearr_33134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___34222,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
