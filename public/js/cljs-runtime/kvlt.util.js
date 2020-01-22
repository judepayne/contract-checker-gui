goog.provide('kvlt.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.pprint');
kvlt.util.map_keys = (function kvlt$util$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function kvlt$util$map_keys_$_iter__36742(s__36743){
return (new cljs.core.LazySeq(null,(function (){
var s__36743__$1 = s__36743;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36743__$1);
if(temp__5735__auto__){
var s__36743__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36743__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36743__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36745 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36744 = (0);
while(true){
if((i__36744 < size__4581__auto__)){
var vec__36748 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__36744);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36748,(1),null);
cljs.core.chunk_append(b__36745,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__36870 = (i__36744 + (1));
i__36744 = G__36870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36745),kvlt$util$map_keys_$_iter__36742(cljs.core.chunk_rest(s__36743__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36745),null);
}
} else {
var vec__36752 = cljs.core.first(s__36743__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36752,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),kvlt$util$map_keys_$_iter__36742(cljs.core.rest(s__36743__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(m);
})());
});
kvlt.util.map_vals = (function kvlt$util$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function kvlt$util$map_vals_$_iter__36759(s__36760){
return (new cljs.core.LazySeq(null,(function (){
var s__36760__$1 = s__36760;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36760__$1);
if(temp__5735__auto__){
var s__36760__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36760__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36760__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36762 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36761 = (0);
while(true){
if((i__36761 < size__4581__auto__)){
var vec__36764 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__36761);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36764,(1),null);
cljs.core.chunk_append(b__36762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__36873 = (i__36761 + (1));
i__36761 = G__36873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36762),kvlt$util$map_vals_$_iter__36759(cljs.core.chunk_rest(s__36760__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36762),null);
}
} else {
var vec__36779 = cljs.core.first(s__36760__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),kvlt$util$map_vals_$_iter__36759(cljs.core.rest(s__36760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(m);
})());
});
var _PLUS_none_PLUS__36877 = new cljs.core.Keyword("kvlt.util","none","kvlt.util/none",1136838753);
kvlt.util.update_when = (function kvlt$util$update_when(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36878 = arguments.length;
var i__4790__auto___36880 = (0);
while(true){
if((i__4790__auto___36880 < len__4789__auto___36878)){
args__4795__auto__.push((arguments[i__4790__auto___36880]));

var G__36881 = (i__4790__auto___36880 + (1));
i__4790__auto___36880 = G__36881;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key,f,args){
var found = (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(key,_PLUS_none_PLUS__36877) : m.call(null,key,_PLUS_none_PLUS__36877));
if((!((_PLUS_none_PLUS__36877 === found)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
}));

(kvlt.util.update_when.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(kvlt.util.update_when.cljs$lang$applyTo = (function (seq36783){
var G__36784 = cljs.core.first(seq36783);
var seq36783__$1 = cljs.core.next(seq36783);
var G__36785 = cljs.core.first(seq36783__$1);
var seq36783__$2 = cljs.core.next(seq36783__$1);
var G__36786 = cljs.core.first(seq36783__$2);
var seq36783__$3 = cljs.core.next(seq36783__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36784,G__36785,G__36786,seq36783__$3);
}));

kvlt.util.bidirectional_chan = (function kvlt$util$bidirectional_chan(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36888 = arguments.length;
var i__4790__auto___36889 = (0);
while(true){
if((i__4790__auto___36889 < len__4789__auto___36888)){
args__4795__auto__.push((arguments[i__4790__auto___36889]));

var G__36890 = (i__4790__auto___36889 + (1));
i__4790__auto___36889 = G__36890;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__36798){
var vec__36799 = p__36798;
var map__36802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36799,(0),null);
var map__36802__$1 = (((((!((map__36802 == null))))?(((((map__36802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36802):map__36802);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36802__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36802__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util36804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util36804 = (function (read_ch,write_ch,p__36798,vec__36799,map__36802,on_close,close_QMARK_,meta36805){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__36798 = p__36798;
this.vec__36799 = vec__36799;
this.map__36802 = map__36802;
this.on_close = on_close;
this.close_QMARK_ = close_QMARK_;
this.meta36805 = meta36805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kvlt.util.t_kvlt$util36804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36806,meta36805__$1){
var self__ = this;
var _36806__$1 = this;
return (new kvlt.util.t_kvlt$util36804(self__.read_ch,self__.write_ch,self__.p__36798,self__.vec__36799,self__.map__36802,self__.on_close,self__.close_QMARK_,meta36805__$1));
}));

(kvlt.util.t_kvlt$util36804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36806){
var self__ = this;
var _36806__$1 = this;
return self__.meta36805;
}));

(kvlt.util.t_kvlt$util36804.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util36804.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
}));

(kvlt.util.t_kvlt$util36804.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util36804.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
}));

(kvlt.util.t_kvlt$util36804.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util36804.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
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
}));

(kvlt.util.t_kvlt$util36804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__36798","p__36798",-488465500,null),new cljs.core.Symbol(null,"vec__36799","vec__36799",-623104795,null),new cljs.core.Symbol(null,"map__36802","map__36802",1336744192,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta36805","meta36805",-1924176140,null)], null);
}));

(kvlt.util.t_kvlt$util36804.cljs$lang$type = true);

(kvlt.util.t_kvlt$util36804.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util36804");

(kvlt.util.t_kvlt$util36804.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"kvlt.util/t_kvlt$util36804");
}));

/**
 * Positional factory function for kvlt.util/t_kvlt$util36804.
 */
kvlt.util.__GT_t_kvlt$util36804 = (function kvlt$util$__GT_t_kvlt$util36804(read_ch__$1,write_ch__$1,p__36798__$1,vec__36799__$1,map__36802__$2,on_close__$1,close_QMARK___$1,meta36805){
return (new kvlt.util.t_kvlt$util36804(read_ch__$1,write_ch__$1,p__36798__$1,vec__36799__$1,map__36802__$2,on_close__$1,close_QMARK___$1,meta36805));
});

}

return (new kvlt.util.t_kvlt$util36804(read_ch,write_ch,p__36798,vec__36799,map__36802__$1,on_close,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(kvlt.util.bidirectional_chan.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kvlt.util.bidirectional_chan.cljs$lang$applyTo = (function (seq36791){
var G__36792 = cljs.core.first(seq36791);
var seq36791__$1 = cljs.core.next(seq36791);
var G__36793 = cljs.core.first(seq36791__$1);
var seq36791__$2 = cljs.core.next(seq36791__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36792,G__36793,seq36791__$2);
}));

kvlt.util.read_proxy_chan = (function kvlt$util$read_proxy_chan(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36898 = arguments.length;
var i__4790__auto___36900 = (0);
while(true){
if((i__4790__auto___36900 < len__4789__auto___36898)){
args__4795__auto__.push((arguments[i__4790__auto___36900]));

var G__36901 = (i__4790__auto___36900 + (1));
i__4790__auto___36900 = G__36901;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,on_close,p__36824){
var vec__36825 = p__36824;
var map__36828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36825,(0),null);
var map__36828__$1 = (((((!((map__36828 == null))))?(((((map__36828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36828):map__36828);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36828__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util36830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util36830 = (function (read_ch,on_close,p__36824,vec__36825,map__36828,close_QMARK_,meta36831){
this.read_ch = read_ch;
this.on_close = on_close;
this.p__36824 = p__36824;
this.vec__36825 = vec__36825;
this.map__36828 = map__36828;
this.close_QMARK_ = close_QMARK_;
this.meta36831 = meta36831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kvlt.util.t_kvlt$util36830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36832,meta36831__$1){
var self__ = this;
var _36832__$1 = this;
return (new kvlt.util.t_kvlt$util36830(self__.read_ch,self__.on_close,self__.p__36824,self__.vec__36825,self__.map__36828,self__.close_QMARK_,meta36831__$1));
}));

(kvlt.util.t_kvlt$util36830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36832){
var self__ = this;
var _36832__$1 = this;
return self__.meta36831;
}));

(kvlt.util.t_kvlt$util36830.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util36830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
}));

(kvlt.util.t_kvlt$util36830.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util36830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));

if(cljs.core.truth_(self__.close_QMARK_)){
return cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);
} else {
return null;
}
}));

(kvlt.util.t_kvlt$util36830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"p__36824","p__36824",-22255769,null),new cljs.core.Symbol(null,"vec__36825","vec__36825",-1543054552,null),new cljs.core.Symbol(null,"map__36828","map__36828",-1441340586,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta36831","meta36831",-1916115231,null)], null);
}));

(kvlt.util.t_kvlt$util36830.cljs$lang$type = true);

(kvlt.util.t_kvlt$util36830.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util36830");

(kvlt.util.t_kvlt$util36830.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"kvlt.util/t_kvlt$util36830");
}));

/**
 * Positional factory function for kvlt.util/t_kvlt$util36830.
 */
kvlt.util.__GT_t_kvlt$util36830 = (function kvlt$util$__GT_t_kvlt$util36830(read_ch__$1,on_close__$1,p__36824__$1,vec__36825__$1,map__36828__$2,close_QMARK___$1,meta36831){
return (new kvlt.util.t_kvlt$util36830(read_ch__$1,on_close__$1,p__36824__$1,vec__36825__$1,map__36828__$2,close_QMARK___$1,meta36831));
});

}

return (new kvlt.util.t_kvlt$util36830(read_ch,on_close,p__36824,vec__36825,map__36828__$1,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(kvlt.util.read_proxy_chan.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kvlt.util.read_proxy_chan.cljs$lang$applyTo = (function (seq36821){
var G__36822 = cljs.core.first(seq36821);
var seq36821__$1 = cljs.core.next(seq36821);
var G__36823 = cljs.core.first(seq36821__$1);
var seq36821__$2 = cljs.core.next(seq36821__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36822,G__36823,seq36821__$2);
}));

kvlt.util.pprint_str = (function kvlt$util$pprint_str(x){
return clojure.string.trimr((function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36841_36912 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36842_36913 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36843_36914 = true;
var _STAR_print_fn_STAR__temp_val__36844_36915 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36843_36914);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36844_36915);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36842_36913);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36841_36912);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
});
kvlt.util.doc_examples_BANG_ = (function kvlt$util$doc_examples_BANG_(vvar,examples){
return cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(vvar,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.str,"\n\n```clojure\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",(function (){var iter__4582__auto__ = (function kvlt$util$doc_examples_BANG__$_iter__36851(s__36852){
return (new cljs.core.LazySeq(null,(function (){
var s__36852__$1 = s__36852;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36852__$1);
if(temp__5735__auto__){
var s__36852__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36852__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36852__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36854 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36853 = (0);
while(true){
if((i__36853 < size__4581__auto__)){
var vec__36856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__36853);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36856,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36856,(1),null);
cljs.core.chunk_append(b__36854,(function (){var G__36859 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [G__36859,"\n  =>\n",kvlt.util.pprint_str(after)].join('');
} else {
return G__36859;
}
})());

var G__36920 = (i__36853 + (1));
i__36853 = G__36920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36854),kvlt$util$doc_examples_BANG__$_iter__36851(cljs.core.chunk_rest(s__36852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36854),null);
}
} else {
var vec__36860 = cljs.core.first(s__36852__$2);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36860,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36860,(1),null);
return cljs.core.cons((function (){var G__36863 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [G__36863,"\n  =>\n",kvlt.util.pprint_str(after)].join('');
} else {
return G__36863;
}
})(),kvlt$util$doc_examples_BANG__$_iter__36851(cljs.core.rest(s__36852__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(examples);
})()),"\n```"], 0));
});

//# sourceMappingURL=kvlt.util.js.map
