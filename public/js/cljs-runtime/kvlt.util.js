goog.provide('kvlt.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.pprint');
kvlt.util.map_keys = (function kvlt$util$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_keys_$_iter__38179(s__38180){
return (new cljs.core.LazySeq(null,(function (){
var s__38180__$1 = s__38180;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38180__$1);
if(temp__5720__auto__){
var s__38180__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38180__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38180__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38182 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38181 = (0);
while(true){
if((i__38181 < size__4522__auto__)){
var vec__38188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38181);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38188,(1),null);
cljs.core.chunk_append(b__38182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__38327 = (i__38181 + (1));
i__38181 = G__38327;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38182),kvlt$util$map_keys_$_iter__38179(cljs.core.chunk_rest(s__38180__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38182),null);
}
} else {
var vec__38192 = cljs.core.first(s__38180__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38192,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),kvlt$util$map_keys_$_iter__38179(cljs.core.rest(s__38180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
kvlt.util.map_vals = (function kvlt$util$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_vals_$_iter__38196(s__38197){
return (new cljs.core.LazySeq(null,(function (){
var s__38197__$1 = s__38197;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38197__$1);
if(temp__5720__auto__){
var s__38197__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38197__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38197__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38199 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38198 = (0);
while(true){
if((i__38198 < size__4522__auto__)){
var vec__38203 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38198);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38203,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38203,(1),null);
cljs.core.chunk_append(b__38199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__38334 = (i__38198 + (1));
i__38198 = G__38334;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38199),kvlt$util$map_vals_$_iter__38196(cljs.core.chunk_rest(s__38197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38199),null);
}
} else {
var vec__38206 = cljs.core.first(s__38197__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38206,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),kvlt$util$map_vals_$_iter__38196(cljs.core.rest(s__38197__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
var _PLUS_none_PLUS__38336 = new cljs.core.Keyword("kvlt.util","none","kvlt.util/none",1136838753);
kvlt.util.update_when = ((function (_PLUS_none_PLUS__38336){
return (function kvlt$util$update_when(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38337 = arguments.length;
var i__4731__auto___38338 = (0);
while(true){
if((i__4731__auto___38338 < len__4730__auto___38337)){
args__4736__auto__.push((arguments[i__4731__auto___38338]));

var G__38339 = (i__4731__auto___38338 + (1));
i__4731__auto___38338 = G__38339;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});})(_PLUS_none_PLUS__38336))
;

kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic = ((function (_PLUS_none_PLUS__38336){
return (function (m,key,f,args){
var found = (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(key,_PLUS_none_PLUS__38336) : m.call(null,key,_PLUS_none_PLUS__38336));
if((!((_PLUS_none_PLUS__38336 === found)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});})(_PLUS_none_PLUS__38336))
;

kvlt.util.update_when.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kvlt.util.update_when.cljs$lang$applyTo = ((function (_PLUS_none_PLUS__38336){
return (function (seq38210){
var G__38211 = cljs.core.first(seq38210);
var seq38210__$1 = cljs.core.next(seq38210);
var G__38212 = cljs.core.first(seq38210__$1);
var seq38210__$2 = cljs.core.next(seq38210__$1);
var G__38213 = cljs.core.first(seq38210__$2);
var seq38210__$3 = cljs.core.next(seq38210__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38211,G__38212,G__38213,seq38210__$3);
});})(_PLUS_none_PLUS__38336))
;

kvlt.util.bidirectional_chan = (function kvlt$util$bidirectional_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38356 = arguments.length;
var i__4731__auto___38357 = (0);
while(true){
if((i__4731__auto___38357 < len__4730__auto___38356)){
args__4736__auto__.push((arguments[i__4731__auto___38357]));

var G__38358 = (i__4731__auto___38357 + (1));
i__4731__auto___38357 = G__38358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__38236){
var vec__38237 = p__38236;
var map__38240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237,(0),null);
var map__38240__$1 = (((((!((map__38240 == null))))?(((((map__38240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38240):map__38240);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38240__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38240__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util38242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util38242 = (function (read_ch,write_ch,p__38236,vec__38237,map__38240,on_close,close_QMARK_,meta38243){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__38236 = p__38236;
this.vec__38237 = vec__38237;
this.map__38240 = map__38240;
this.on_close = on_close;
this.close_QMARK_ = close_QMARK_;
this.meta38243 = meta38243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util38242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_){
return (function (_38244,meta38243__$1){
var self__ = this;
var _38244__$1 = this;
return (new kvlt.util.t_kvlt$util38242(self__.read_ch,self__.write_ch,self__.p__38236,self__.vec__38237,self__.map__38240,self__.on_close,self__.close_QMARK_,meta38243__$1));
});})(vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util38242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_){
return (function (_38244){
var self__ = this;
var _38244__$1 = this;
return self__.meta38243;
});})(vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util38242.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util38242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util38242.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util38242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});})(vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util38242.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util38242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.close_QMARK_)){
cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_(self__.write_ch);
} else {
}

if(cljs.core.truth_(self__.on_close)){
return (self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));
} else {
return null;
}
});})(vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util38242.getBasis = ((function (vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__38236","p__38236",-56909244,null),new cljs.core.Symbol(null,"vec__38237","vec__38237",-843562009,null),new cljs.core.Symbol(null,"map__38240","map__38240",-1660473207,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta38243","meta38243",1917584662,null)], null);
});})(vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util38242.cljs$lang$type = true;

kvlt.util.t_kvlt$util38242.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util38242";

kvlt.util.t_kvlt$util38242.cljs$lang$ctorPrWriter = ((function (vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"kvlt.util/t_kvlt$util38242");
});})(vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util38242.
 */
kvlt.util.__GT_t_kvlt$util38242 = ((function (vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util38242(read_ch__$1,write_ch__$1,p__38236__$1,vec__38237__$1,map__38240__$2,on_close__$1,close_QMARK___$1,meta38243){
return (new kvlt.util.t_kvlt$util38242(read_ch__$1,write_ch__$1,p__38236__$1,vec__38237__$1,map__38240__$2,on_close__$1,close_QMARK___$1,meta38243));
});})(vec__38237,map__38240,map__38240__$1,on_close,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util38242(read_ch,write_ch,p__38236,vec__38237,map__38240__$1,on_close,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.bidirectional_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.bidirectional_chan.cljs$lang$applyTo = (function (seq38229){
var G__38230 = cljs.core.first(seq38229);
var seq38229__$1 = cljs.core.next(seq38229);
var G__38231 = cljs.core.first(seq38229__$1);
var seq38229__$2 = cljs.core.next(seq38229__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38230,G__38231,seq38229__$2);
});

kvlt.util.read_proxy_chan = (function kvlt$util$read_proxy_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38375 = arguments.length;
var i__4731__auto___38376 = (0);
while(true){
if((i__4731__auto___38376 < len__4730__auto___38375)){
args__4736__auto__.push((arguments[i__4731__auto___38376]));

var G__38378 = (i__4731__auto___38376 + (1));
i__4731__auto___38376 = G__38378;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,on_close,p__38264){
var vec__38265 = p__38264;
var map__38268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38265,(0),null);
var map__38268__$1 = (((((!((map__38268 == null))))?(((((map__38268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38268):map__38268);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38268__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util38270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util38270 = (function (read_ch,on_close,p__38264,vec__38265,map__38268,close_QMARK_,meta38271){
this.read_ch = read_ch;
this.on_close = on_close;
this.p__38264 = p__38264;
this.vec__38265 = vec__38265;
this.map__38268 = map__38268;
this.close_QMARK_ = close_QMARK_;
this.meta38271 = meta38271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util38270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__38265,map__38268,map__38268__$1,close_QMARK_){
return (function (_38272,meta38271__$1){
var self__ = this;
var _38272__$1 = this;
return (new kvlt.util.t_kvlt$util38270(self__.read_ch,self__.on_close,self__.p__38264,self__.vec__38265,self__.map__38268,self__.close_QMARK_,meta38271__$1));
});})(vec__38265,map__38268,map__38268__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util38270.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__38265,map__38268,map__38268__$1,close_QMARK_){
return (function (_38272){
var self__ = this;
var _38272__$1 = this;
return self__.meta38271;
});})(vec__38265,map__38268,map__38268__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util38270.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util38270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__38265,map__38268,map__38268__$1,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__38265,map__38268,map__38268__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util38270.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util38270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__38265,map__38268,map__38268__$1,close_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
(self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));

if(cljs.core.truth_(self__.close_QMARK_)){
return cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);
} else {
return null;
}
});})(vec__38265,map__38268,map__38268__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util38270.getBasis = ((function (vec__38265,map__38268,map__38268__$1,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"p__38264","p__38264",-1595811357,null),new cljs.core.Symbol(null,"vec__38265","vec__38265",-1306683554,null),new cljs.core.Symbol(null,"map__38268","map__38268",-1219601791,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta38271","meta38271",-515818019,null)], null);
});})(vec__38265,map__38268,map__38268__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util38270.cljs$lang$type = true;

kvlt.util.t_kvlt$util38270.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util38270";

kvlt.util.t_kvlt$util38270.cljs$lang$ctorPrWriter = ((function (vec__38265,map__38268,map__38268__$1,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"kvlt.util/t_kvlt$util38270");
});})(vec__38265,map__38268,map__38268__$1,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util38270.
 */
kvlt.util.__GT_t_kvlt$util38270 = ((function (vec__38265,map__38268,map__38268__$1,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util38270(read_ch__$1,on_close__$1,p__38264__$1,vec__38265__$1,map__38268__$2,close_QMARK___$1,meta38271){
return (new kvlt.util.t_kvlt$util38270(read_ch__$1,on_close__$1,p__38264__$1,vec__38265__$1,map__38268__$2,close_QMARK___$1,meta38271));
});})(vec__38265,map__38268,map__38268__$1,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util38270(read_ch,on_close,p__38264,vec__38265,map__38268__$1,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.read_proxy_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.read_proxy_chan.cljs$lang$applyTo = (function (seq38261){
var G__38262 = cljs.core.first(seq38261);
var seq38261__$1 = cljs.core.next(seq38261);
var G__38263 = cljs.core.first(seq38261__$1);
var seq38261__$2 = cljs.core.next(seq38261__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38262,G__38263,seq38261__$2);
});

kvlt.util.pprint_str = (function kvlt$util$pprint_str(x){
return clojure.string.trimr((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38288_38384 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38289_38385 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38290_38386 = true;
var _STAR_print_fn_STAR__temp_val__38291_38387 = ((function (_STAR_print_newline_STAR__orig_val__38288_38384,_STAR_print_fn_STAR__orig_val__38289_38385,_STAR_print_newline_STAR__temp_val__38290_38386,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38288_38384,_STAR_print_fn_STAR__orig_val__38289_38385,_STAR_print_newline_STAR__temp_val__38290_38386,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38290_38386;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38291_38387;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38289_38385;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38288_38384;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
});
kvlt.util.doc_examples_BANG_ = (function kvlt$util$doc_examples_BANG_(vvar,examples){
return cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(vvar,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.str,"\n\n```clojure\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",(function (){var iter__4523__auto__ = (function kvlt$util$doc_examples_BANG__$_iter__38292(s__38293){
return (new cljs.core.LazySeq(null,(function (){
var s__38293__$1 = s__38293;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38293__$1);
if(temp__5720__auto__){
var s__38293__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38293__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38293__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38295 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38294 = (0);
while(true){
if((i__38294 < size__4522__auto__)){
var vec__38302 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38294);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38302,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38302,(1),null);
cljs.core.chunk_append(b__38295,(function (){var G__38308 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38308),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str(after))].join('');
} else {
return G__38308;
}
})());

var G__38393 = (i__38294 + (1));
i__38294 = G__38393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38295),kvlt$util$doc_examples_BANG__$_iter__38292(cljs.core.chunk_rest(s__38293__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38295),null);
}
} else {
var vec__38309 = cljs.core.first(s__38293__$2);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38309,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38309,(1),null);
return cljs.core.cons((function (){var G__38312 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38312),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str(after))].join('');
} else {
return G__38312;
}
})(),kvlt$util$doc_examples_BANG__$_iter__38292(cljs.core.rest(s__38293__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(examples);
})()),"\n```"], 0));
});

//# sourceMappingURL=kvlt.util.js.map
