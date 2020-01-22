goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32294 = coll;
var G__32295 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32294,G__32295) : shadow.dom.lazy_native_coll_seq.call(null,G__32294,G__32295));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32335 = arguments.length;
switch (G__32335) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32342 = arguments.length;
switch (G__32342) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32350 = arguments.length;
switch (G__32350) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32358 = arguments.length;
switch (G__32358) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32369 = arguments.length;
switch (G__32369) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32371 = document;
var G__32372 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32371,G__32372);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32375 = shadow.dom.dom_node(parent);
var G__32376 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32375,G__32376);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32381 = shadow.dom.dom_node(el);
var G__32382 = cls;
return goog.dom.classlist.add(G__32381,G__32382);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32387 = shadow.dom.dom_node(el);
var G__32388 = cls;
return goog.dom.classlist.remove(G__32387,G__32388);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32392 = arguments.length;
switch (G__32392) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32395 = shadow.dom.dom_node(el);
var G__32396 = cls;
return goog.dom.classlist.toggle(G__32395,G__32396);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32401){if((e32401 instanceof Object)){
var e = e32401;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32401;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32406 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32407 = null;
var count__32408 = (0);
var i__32409 = (0);
while(true){
if((i__32409 < count__32408)){
var el = chunk__32407.cljs$core$IIndexed$_nth$arity$2(null,i__32409);
var handler_33098__$1 = ((function (seq__32406,chunk__32407,count__32408,i__32409,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32406,chunk__32407,count__32408,i__32409,el))
;
var G__32424_33099 = el;
var G__32425_33100 = cljs.core.name(ev);
var G__32426_33101 = handler_33098__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32424_33099,G__32425_33100,G__32426_33101) : shadow.dom.dom_listen.call(null,G__32424_33099,G__32425_33100,G__32426_33101));


var G__33102 = seq__32406;
var G__33103 = chunk__32407;
var G__33104 = count__32408;
var G__33105 = (i__32409 + (1));
seq__32406 = G__33102;
chunk__32407 = G__33103;
count__32408 = G__33104;
i__32409 = G__33105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32406);
if(temp__5735__auto__){
var seq__32406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32406__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32406__$1);
var G__33106 = cljs.core.chunk_rest(seq__32406__$1);
var G__33107 = c__4609__auto__;
var G__33108 = cljs.core.count(c__4609__auto__);
var G__33109 = (0);
seq__32406 = G__33106;
chunk__32407 = G__33107;
count__32408 = G__33108;
i__32409 = G__33109;
continue;
} else {
var el = cljs.core.first(seq__32406__$1);
var handler_33110__$1 = ((function (seq__32406,chunk__32407,count__32408,i__32409,el,seq__32406__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32406,chunk__32407,count__32408,i__32409,el,seq__32406__$1,temp__5735__auto__))
;
var G__32431_33111 = el;
var G__32432_33112 = cljs.core.name(ev);
var G__32433_33113 = handler_33110__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32431_33111,G__32432_33112,G__32433_33113) : shadow.dom.dom_listen.call(null,G__32431_33111,G__32432_33112,G__32433_33113));


var G__33114 = cljs.core.next(seq__32406__$1);
var G__33115 = null;
var G__33116 = (0);
var G__33117 = (0);
seq__32406 = G__33114;
chunk__32407 = G__33115;
count__32408 = G__33116;
i__32409 = G__33117;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32437 = arguments.length;
switch (G__32437) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32442 = shadow.dom.dom_node(el);
var G__32443 = cljs.core.name(ev);
var G__32444 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32442,G__32443,G__32444) : shadow.dom.dom_listen.call(null,G__32442,G__32443,G__32444));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32448 = shadow.dom.dom_node(el);
var G__32449 = cljs.core.name(ev);
var G__32450 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32448,G__32449,G__32450) : shadow.dom.dom_listen_remove.call(null,G__32448,G__32449,G__32450));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32453 = cljs.core.seq(events);
var chunk__32454 = null;
var count__32455 = (0);
var i__32456 = (0);
while(true){
if((i__32456 < count__32455)){
var vec__32467 = chunk__32454.cljs$core$IIndexed$_nth$arity$2(null,i__32456);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32467,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32467,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33119 = seq__32453;
var G__33120 = chunk__32454;
var G__33121 = count__32455;
var G__33122 = (i__32456 + (1));
seq__32453 = G__33119;
chunk__32454 = G__33120;
count__32455 = G__33121;
i__32456 = G__33122;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32453);
if(temp__5735__auto__){
var seq__32453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32453__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32453__$1);
var G__33123 = cljs.core.chunk_rest(seq__32453__$1);
var G__33124 = c__4609__auto__;
var G__33125 = cljs.core.count(c__4609__auto__);
var G__33126 = (0);
seq__32453 = G__33123;
chunk__32454 = G__33124;
count__32455 = G__33125;
i__32456 = G__33126;
continue;
} else {
var vec__32470 = cljs.core.first(seq__32453__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32470,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33127 = cljs.core.next(seq__32453__$1);
var G__33128 = null;
var G__33129 = (0);
var G__33130 = (0);
seq__32453 = G__33127;
chunk__32454 = G__33128;
count__32455 = G__33129;
i__32456 = G__33130;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32475 = cljs.core.seq(styles);
var chunk__32476 = null;
var count__32477 = (0);
var i__32478 = (0);
while(true){
if((i__32478 < count__32477)){
var vec__32495 = chunk__32476.cljs$core$IIndexed$_nth$arity$2(null,i__32478);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32495,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32495,(1),null);
var G__32498_33131 = dom;
var G__32499_33132 = cljs.core.name(k);
var G__32500_33133 = (((v == null))?"":v);
goog.style.setStyle(G__32498_33131,G__32499_33132,G__32500_33133);


var G__33134 = seq__32475;
var G__33135 = chunk__32476;
var G__33136 = count__32477;
var G__33137 = (i__32478 + (1));
seq__32475 = G__33134;
chunk__32476 = G__33135;
count__32477 = G__33136;
i__32478 = G__33137;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32475);
if(temp__5735__auto__){
var seq__32475__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32475__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32475__$1);
var G__33138 = cljs.core.chunk_rest(seq__32475__$1);
var G__33139 = c__4609__auto__;
var G__33140 = cljs.core.count(c__4609__auto__);
var G__33141 = (0);
seq__32475 = G__33138;
chunk__32476 = G__33139;
count__32477 = G__33140;
i__32478 = G__33141;
continue;
} else {
var vec__32504 = cljs.core.first(seq__32475__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32504,(1),null);
var G__32508_33142 = dom;
var G__32509_33143 = cljs.core.name(k);
var G__32510_33144 = (((v == null))?"":v);
goog.style.setStyle(G__32508_33142,G__32509_33143,G__32510_33144);


var G__33145 = cljs.core.next(seq__32475__$1);
var G__33146 = null;
var G__33147 = (0);
var G__33148 = (0);
seq__32475 = G__33145;
chunk__32476 = G__33146;
count__32477 = G__33147;
i__32478 = G__33148;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32516_33149 = key;
var G__32516_33150__$1 = (((G__32516_33149 instanceof cljs.core.Keyword))?G__32516_33149.fqn:null);
switch (G__32516_33150__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33154 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33154,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33154,"aria-");
}
})())){
el.setAttribute(ks_33154,value);
} else {
(el[ks_33154] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32521 = shadow.dom.dom_node(el);
var G__32522 = cls;
return goog.dom.classlist.contains(G__32521,G__32522);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32523){
var map__32524 = p__32523;
var map__32524__$1 = (((((!((map__32524 == null))))?(((((map__32524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32524):map__32524);
var props = map__32524__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32524__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32526 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32526,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32526,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32526,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32529 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32529,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32529;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32533 = arguments.length;
switch (G__32533) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32541){
var vec__32544 = p__32541;
var seq__32545 = cljs.core.seq(vec__32544);
var first__32546 = cljs.core.first(seq__32545);
var seq__32545__$1 = cljs.core.next(seq__32545);
var nn = first__32546;
var first__32546__$1 = cljs.core.first(seq__32545__$1);
var seq__32545__$2 = cljs.core.next(seq__32545__$1);
var np = first__32546__$1;
var nc = seq__32545__$2;
var node = vec__32544;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32549 = nn;
var G__32550 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32549,G__32550) : create_fn.call(null,G__32549,G__32550));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32552 = nn;
var G__32553 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32552,G__32553) : create_fn.call(null,G__32552,G__32553));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32555 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32555,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32555,(1),null);
var seq__32558_33170 = cljs.core.seq(node_children);
var chunk__32559_33171 = null;
var count__32560_33172 = (0);
var i__32561_33173 = (0);
while(true){
if((i__32561_33173 < count__32560_33172)){
var child_struct_33174 = chunk__32559_33171.cljs$core$IIndexed$_nth$arity$2(null,i__32561_33173);
var children_33175 = shadow.dom.dom_node(child_struct_33174);
if(cljs.core.seq_QMARK_(children_33175)){
var seq__32595_33176 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33175));
var chunk__32597_33177 = null;
var count__32598_33178 = (0);
var i__32599_33179 = (0);
while(true){
if((i__32599_33179 < count__32598_33178)){
var child_33180 = chunk__32597_33177.cljs$core$IIndexed$_nth$arity$2(null,i__32599_33179);
if(cljs.core.truth_(child_33180)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33180);


var G__33181 = seq__32595_33176;
var G__33182 = chunk__32597_33177;
var G__33183 = count__32598_33178;
var G__33184 = (i__32599_33179 + (1));
seq__32595_33176 = G__33181;
chunk__32597_33177 = G__33182;
count__32598_33178 = G__33183;
i__32599_33179 = G__33184;
continue;
} else {
var G__33185 = seq__32595_33176;
var G__33186 = chunk__32597_33177;
var G__33187 = count__32598_33178;
var G__33188 = (i__32599_33179 + (1));
seq__32595_33176 = G__33185;
chunk__32597_33177 = G__33186;
count__32598_33178 = G__33187;
i__32599_33179 = G__33188;
continue;
}
} else {
var temp__5735__auto___33189 = cljs.core.seq(seq__32595_33176);
if(temp__5735__auto___33189){
var seq__32595_33190__$1 = temp__5735__auto___33189;
if(cljs.core.chunked_seq_QMARK_(seq__32595_33190__$1)){
var c__4609__auto___33191 = cljs.core.chunk_first(seq__32595_33190__$1);
var G__33192 = cljs.core.chunk_rest(seq__32595_33190__$1);
var G__33193 = c__4609__auto___33191;
var G__33194 = cljs.core.count(c__4609__auto___33191);
var G__33195 = (0);
seq__32595_33176 = G__33192;
chunk__32597_33177 = G__33193;
count__32598_33178 = G__33194;
i__32599_33179 = G__33195;
continue;
} else {
var child_33196 = cljs.core.first(seq__32595_33190__$1);
if(cljs.core.truth_(child_33196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33196);


var G__33197 = cljs.core.next(seq__32595_33190__$1);
var G__33198 = null;
var G__33199 = (0);
var G__33200 = (0);
seq__32595_33176 = G__33197;
chunk__32597_33177 = G__33198;
count__32598_33178 = G__33199;
i__32599_33179 = G__33200;
continue;
} else {
var G__33201 = cljs.core.next(seq__32595_33190__$1);
var G__33202 = null;
var G__33203 = (0);
var G__33204 = (0);
seq__32595_33176 = G__33201;
chunk__32597_33177 = G__33202;
count__32598_33178 = G__33203;
i__32599_33179 = G__33204;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33175);
}


var G__33205 = seq__32558_33170;
var G__33206 = chunk__32559_33171;
var G__33207 = count__32560_33172;
var G__33208 = (i__32561_33173 + (1));
seq__32558_33170 = G__33205;
chunk__32559_33171 = G__33206;
count__32560_33172 = G__33207;
i__32561_33173 = G__33208;
continue;
} else {
var temp__5735__auto___33209 = cljs.core.seq(seq__32558_33170);
if(temp__5735__auto___33209){
var seq__32558_33210__$1 = temp__5735__auto___33209;
if(cljs.core.chunked_seq_QMARK_(seq__32558_33210__$1)){
var c__4609__auto___33211 = cljs.core.chunk_first(seq__32558_33210__$1);
var G__33212 = cljs.core.chunk_rest(seq__32558_33210__$1);
var G__33213 = c__4609__auto___33211;
var G__33214 = cljs.core.count(c__4609__auto___33211);
var G__33215 = (0);
seq__32558_33170 = G__33212;
chunk__32559_33171 = G__33213;
count__32560_33172 = G__33214;
i__32561_33173 = G__33215;
continue;
} else {
var child_struct_33216 = cljs.core.first(seq__32558_33210__$1);
var children_33217 = shadow.dom.dom_node(child_struct_33216);
if(cljs.core.seq_QMARK_(children_33217)){
var seq__32613_33218 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33217));
var chunk__32615_33219 = null;
var count__32616_33220 = (0);
var i__32617_33221 = (0);
while(true){
if((i__32617_33221 < count__32616_33220)){
var child_33222 = chunk__32615_33219.cljs$core$IIndexed$_nth$arity$2(null,i__32617_33221);
if(cljs.core.truth_(child_33222)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33222);


var G__33223 = seq__32613_33218;
var G__33224 = chunk__32615_33219;
var G__33225 = count__32616_33220;
var G__33226 = (i__32617_33221 + (1));
seq__32613_33218 = G__33223;
chunk__32615_33219 = G__33224;
count__32616_33220 = G__33225;
i__32617_33221 = G__33226;
continue;
} else {
var G__33227 = seq__32613_33218;
var G__33228 = chunk__32615_33219;
var G__33229 = count__32616_33220;
var G__33230 = (i__32617_33221 + (1));
seq__32613_33218 = G__33227;
chunk__32615_33219 = G__33228;
count__32616_33220 = G__33229;
i__32617_33221 = G__33230;
continue;
}
} else {
var temp__5735__auto___33231__$1 = cljs.core.seq(seq__32613_33218);
if(temp__5735__auto___33231__$1){
var seq__32613_33232__$1 = temp__5735__auto___33231__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32613_33232__$1)){
var c__4609__auto___33234 = cljs.core.chunk_first(seq__32613_33232__$1);
var G__33237 = cljs.core.chunk_rest(seq__32613_33232__$1);
var G__33238 = c__4609__auto___33234;
var G__33239 = cljs.core.count(c__4609__auto___33234);
var G__33240 = (0);
seq__32613_33218 = G__33237;
chunk__32615_33219 = G__33238;
count__32616_33220 = G__33239;
i__32617_33221 = G__33240;
continue;
} else {
var child_33241 = cljs.core.first(seq__32613_33232__$1);
if(cljs.core.truth_(child_33241)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33241);


var G__33242 = cljs.core.next(seq__32613_33232__$1);
var G__33243 = null;
var G__33244 = (0);
var G__33245 = (0);
seq__32613_33218 = G__33242;
chunk__32615_33219 = G__33243;
count__32616_33220 = G__33244;
i__32617_33221 = G__33245;
continue;
} else {
var G__33246 = cljs.core.next(seq__32613_33232__$1);
var G__33247 = null;
var G__33248 = (0);
var G__33249 = (0);
seq__32613_33218 = G__33246;
chunk__32615_33219 = G__33247;
count__32616_33220 = G__33248;
i__32617_33221 = G__33249;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33217);
}


var G__33250 = cljs.core.next(seq__32558_33210__$1);
var G__33251 = null;
var G__33252 = (0);
var G__33253 = (0);
seq__32558_33170 = G__33250;
chunk__32559_33171 = G__33251;
count__32560_33172 = G__33252;
i__32561_33173 = G__33253;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32630 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32630);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32633 = cljs.core.seq(node);
var chunk__32634 = null;
var count__32635 = (0);
var i__32636 = (0);
while(true){
if((i__32636 < count__32635)){
var n = chunk__32634.cljs$core$IIndexed$_nth$arity$2(null,i__32636);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33258 = seq__32633;
var G__33259 = chunk__32634;
var G__33260 = count__32635;
var G__33261 = (i__32636 + (1));
seq__32633 = G__33258;
chunk__32634 = G__33259;
count__32635 = G__33260;
i__32636 = G__33261;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32633);
if(temp__5735__auto__){
var seq__32633__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32633__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32633__$1);
var G__33262 = cljs.core.chunk_rest(seq__32633__$1);
var G__33263 = c__4609__auto__;
var G__33264 = cljs.core.count(c__4609__auto__);
var G__33265 = (0);
seq__32633 = G__33262;
chunk__32634 = G__33263;
count__32635 = G__33264;
i__32636 = G__33265;
continue;
} else {
var n = cljs.core.first(seq__32633__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33266 = cljs.core.next(seq__32633__$1);
var G__33267 = null;
var G__33268 = (0);
var G__33269 = (0);
seq__32633 = G__33266;
chunk__32634 = G__33267;
count__32635 = G__33268;
i__32636 = G__33269;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32644 = shadow.dom.dom_node(new$);
var G__32645 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32644,G__32645);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32652 = arguments.length;
switch (G__32652) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32656 = arguments.length;
switch (G__32656) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32677 = arguments.length;
switch (G__32677) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33277 = arguments.length;
var i__4790__auto___33278 = (0);
while(true){
if((i__4790__auto___33278 < len__4789__auto___33277)){
args__4795__auto__.push((arguments[i__4790__auto___33278]));

var G__33279 = (i__4790__auto___33278 + (1));
i__4790__auto___33278 = G__33279;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32704_33280 = cljs.core.seq(nodes);
var chunk__32705_33281 = null;
var count__32706_33282 = (0);
var i__32707_33283 = (0);
while(true){
if((i__32707_33283 < count__32706_33282)){
var node_33284 = chunk__32705_33281.cljs$core$IIndexed$_nth$arity$2(null,i__32707_33283);
fragment.appendChild(shadow.dom._to_dom(node_33284));


var G__33285 = seq__32704_33280;
var G__33286 = chunk__32705_33281;
var G__33287 = count__32706_33282;
var G__33288 = (i__32707_33283 + (1));
seq__32704_33280 = G__33285;
chunk__32705_33281 = G__33286;
count__32706_33282 = G__33287;
i__32707_33283 = G__33288;
continue;
} else {
var temp__5735__auto___33289 = cljs.core.seq(seq__32704_33280);
if(temp__5735__auto___33289){
var seq__32704_33290__$1 = temp__5735__auto___33289;
if(cljs.core.chunked_seq_QMARK_(seq__32704_33290__$1)){
var c__4609__auto___33294 = cljs.core.chunk_first(seq__32704_33290__$1);
var G__33295 = cljs.core.chunk_rest(seq__32704_33290__$1);
var G__33296 = c__4609__auto___33294;
var G__33297 = cljs.core.count(c__4609__auto___33294);
var G__33298 = (0);
seq__32704_33280 = G__33295;
chunk__32705_33281 = G__33296;
count__32706_33282 = G__33297;
i__32707_33283 = G__33298;
continue;
} else {
var node_33299 = cljs.core.first(seq__32704_33290__$1);
fragment.appendChild(shadow.dom._to_dom(node_33299));


var G__33300 = cljs.core.next(seq__32704_33290__$1);
var G__33301 = null;
var G__33302 = (0);
var G__33303 = (0);
seq__32704_33280 = G__33300;
chunk__32705_33281 = G__33301;
count__32706_33282 = G__33302;
i__32707_33283 = G__33303;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32697){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32697));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32718_33304 = cljs.core.seq(scripts);
var chunk__32719_33305 = null;
var count__32720_33306 = (0);
var i__32721_33307 = (0);
while(true){
if((i__32721_33307 < count__32720_33306)){
var vec__32733_33308 = chunk__32719_33305.cljs$core$IIndexed$_nth$arity$2(null,i__32721_33307);
var script_tag_33309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733_33308,(0),null);
var script_body_33310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32733_33308,(1),null);
eval(script_body_33310);


var G__33311 = seq__32718_33304;
var G__33312 = chunk__32719_33305;
var G__33313 = count__32720_33306;
var G__33314 = (i__32721_33307 + (1));
seq__32718_33304 = G__33311;
chunk__32719_33305 = G__33312;
count__32720_33306 = G__33313;
i__32721_33307 = G__33314;
continue;
} else {
var temp__5735__auto___33315 = cljs.core.seq(seq__32718_33304);
if(temp__5735__auto___33315){
var seq__32718_33316__$1 = temp__5735__auto___33315;
if(cljs.core.chunked_seq_QMARK_(seq__32718_33316__$1)){
var c__4609__auto___33317 = cljs.core.chunk_first(seq__32718_33316__$1);
var G__33318 = cljs.core.chunk_rest(seq__32718_33316__$1);
var G__33319 = c__4609__auto___33317;
var G__33320 = cljs.core.count(c__4609__auto___33317);
var G__33321 = (0);
seq__32718_33304 = G__33318;
chunk__32719_33305 = G__33319;
count__32720_33306 = G__33320;
i__32721_33307 = G__33321;
continue;
} else {
var vec__32741_33322 = cljs.core.first(seq__32718_33316__$1);
var script_tag_33323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32741_33322,(0),null);
var script_body_33324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32741_33322,(1),null);
eval(script_body_33324);


var G__33325 = cljs.core.next(seq__32718_33316__$1);
var G__33326 = null;
var G__33327 = (0);
var G__33328 = (0);
seq__32718_33304 = G__33325;
chunk__32719_33305 = G__33326;
count__32720_33306 = G__33327;
i__32721_33307 = G__33328;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32746){
var vec__32747 = p__32746;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32747,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32747,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__32758 = shadow.dom.dom_node(el);
var G__32759 = cls;
return goog.dom.getAncestorByClass(G__32758,G__32759);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32762 = arguments.length;
switch (G__32762) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__32766 = shadow.dom.dom_node(el);
var G__32767 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32766,G__32767);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32769 = shadow.dom.dom_node(el);
var G__32770 = cljs.core.name(tag);
var G__32771 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32769,G__32770,G__32771);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32773 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32773);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32775 = shadow.dom.dom_node(dom);
var G__32776 = value;
return goog.dom.forms.setValue(G__32775,G__32776);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32778 = cljs.core.seq(style_keys);
var chunk__32779 = null;
var count__32780 = (0);
var i__32781 = (0);
while(true){
if((i__32781 < count__32780)){
var it = chunk__32779.cljs$core$IIndexed$_nth$arity$2(null,i__32781);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33336 = seq__32778;
var G__33337 = chunk__32779;
var G__33338 = count__32780;
var G__33339 = (i__32781 + (1));
seq__32778 = G__33336;
chunk__32779 = G__33337;
count__32780 = G__33338;
i__32781 = G__33339;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32778);
if(temp__5735__auto__){
var seq__32778__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32778__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32778__$1);
var G__33340 = cljs.core.chunk_rest(seq__32778__$1);
var G__33341 = c__4609__auto__;
var G__33342 = cljs.core.count(c__4609__auto__);
var G__33343 = (0);
seq__32778 = G__33340;
chunk__32779 = G__33341;
count__32780 = G__33342;
i__32781 = G__33343;
continue;
} else {
var it = cljs.core.first(seq__32778__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33344 = cljs.core.next(seq__32778__$1);
var G__33345 = null;
var G__33346 = (0);
var G__33347 = (0);
seq__32778 = G__33344;
chunk__32779 = G__33345;
count__32780 = G__33346;
i__32781 = G__33347;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32784,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32788 = k32784;
var G__32788__$1 = (((G__32788 instanceof cljs.core.Keyword))?G__32788.fqn:null);
switch (G__32788__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32784,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32789){
var vec__32790 = p__32789;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32790,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32783){
var self__ = this;
var G__32783__$1 = this;
return (new cljs.core.RecordIter((0),G__32783__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32801 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32801(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32785,other32786){
var self__ = this;
var this32785__$1 = this;
return (((!((other32786 == null)))) && ((this32785__$1.constructor === other32786.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32785__$1.x,other32786.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32785__$1.y,other32786.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32785__$1.__extmap,other32786.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32783){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32810 = cljs.core.keyword_identical_QMARK_;
var expr__32811 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32813 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32814 = expr__32811;
return (pred__32810.cljs$core$IFn$_invoke$arity$2 ? pred__32810.cljs$core$IFn$_invoke$arity$2(G__32813,G__32814) : pred__32810.call(null,G__32813,G__32814));
})())){
return (new shadow.dom.Coordinate(G__32783,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32815 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32816 = expr__32811;
return (pred__32810.cljs$core$IFn$_invoke$arity$2 ? pred__32810.cljs$core$IFn$_invoke$arity$2(G__32815,G__32816) : pred__32810.call(null,G__32815,G__32816));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32783,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32783),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32783){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32783,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32787){
var extmap__4478__auto__ = (function (){var G__32825 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32787,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32787)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32825);
} else {
return G__32825;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32787),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32787),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32827 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32827);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32830 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32830);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__32833 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__32833);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32835,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32843 = k32835;
var G__32843__$1 = (((G__32843 instanceof cljs.core.Keyword))?G__32843.fqn:null);
switch (G__32843__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32835,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32845){
var vec__32846 = p__32845;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32846,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32846,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32834){
var self__ = this;
var G__32834__$1 = this;
return (new cljs.core.RecordIter((0),G__32834__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32857 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32857(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32836,other32837){
var self__ = this;
var this32836__$1 = this;
return (((!((other32837 == null)))) && ((this32836__$1.constructor === other32837.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32836__$1.w,other32837.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32836__$1.h,other32837.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32836__$1.__extmap,other32837.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32834){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32865 = cljs.core.keyword_identical_QMARK_;
var expr__32866 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32869 = new cljs.core.Keyword(null,"w","w",354169001);
var G__32870 = expr__32866;
return (pred__32865.cljs$core$IFn$_invoke$arity$2 ? pred__32865.cljs$core$IFn$_invoke$arity$2(G__32869,G__32870) : pred__32865.call(null,G__32869,G__32870));
})())){
return (new shadow.dom.Size(G__32834,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32871 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__32872 = expr__32866;
return (pred__32865.cljs$core$IFn$_invoke$arity$2 ? pred__32865.cljs$core$IFn$_invoke$arity$2(G__32871,G__32872) : pred__32865.call(null,G__32871,G__32872));
})())){
return (new shadow.dom.Size(self__.w,G__32834,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32834),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32834){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32834,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32840){
var extmap__4478__auto__ = (function (){var G__32881 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32840,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32840)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32881);
} else {
return G__32881;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32840),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32840),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__32887 = shadow.dom.dom_node(el);
return goog.style.getSize(G__32887);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__33370 = (i + (1));
var G__33371 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33370;
ret = G__33371;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32905){
var vec__32907 = p__32905;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32907,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32913 = arguments.length;
switch (G__32913) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32915_33377 = new_node;
var G__32916_33378 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__32915_33377,G__32916_33378);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__32917_33379 = new_node;
var G__32918_33380 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__32917_33379,G__32918_33380);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33381 = ps;
var G__33382 = (i + (1));
el__$1 = G__33381;
i = G__33382;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__32919 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__32919);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__32922 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__32922);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__32925 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__32925);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32933 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32933,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32933,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32933,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32937_33385 = cljs.core.seq(props);
var chunk__32938_33386 = null;
var count__32939_33387 = (0);
var i__32940_33388 = (0);
while(true){
if((i__32940_33388 < count__32939_33387)){
var vec__32954_33389 = chunk__32938_33386.cljs$core$IIndexed$_nth$arity$2(null,i__32940_33388);
var k_33390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32954_33389,(0),null);
var v_33391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32954_33389,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_33390);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33390),v_33391);


var G__33392 = seq__32937_33385;
var G__33393 = chunk__32938_33386;
var G__33394 = count__32939_33387;
var G__33395 = (i__32940_33388 + (1));
seq__32937_33385 = G__33392;
chunk__32938_33386 = G__33393;
count__32939_33387 = G__33394;
i__32940_33388 = G__33395;
continue;
} else {
var temp__5735__auto___33396 = cljs.core.seq(seq__32937_33385);
if(temp__5735__auto___33396){
var seq__32937_33397__$1 = temp__5735__auto___33396;
if(cljs.core.chunked_seq_QMARK_(seq__32937_33397__$1)){
var c__4609__auto___33399 = cljs.core.chunk_first(seq__32937_33397__$1);
var G__33400 = cljs.core.chunk_rest(seq__32937_33397__$1);
var G__33401 = c__4609__auto___33399;
var G__33402 = cljs.core.count(c__4609__auto___33399);
var G__33403 = (0);
seq__32937_33385 = G__33400;
chunk__32938_33386 = G__33401;
count__32939_33387 = G__33402;
i__32940_33388 = G__33403;
continue;
} else {
var vec__32962_33404 = cljs.core.first(seq__32937_33397__$1);
var k_33405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962_33404,(0),null);
var v_33406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962_33404,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_33405);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33405),v_33406);


var G__33407 = cljs.core.next(seq__32937_33397__$1);
var G__33408 = null;
var G__33409 = (0);
var G__33410 = (0);
seq__32937_33385 = G__33407;
chunk__32938_33386 = G__33408;
count__32939_33387 = G__33409;
i__32940_33388 = G__33410;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32973 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32973,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32973,(1),null);
var seq__32976_33411 = cljs.core.seq(node_children);
var chunk__32978_33412 = null;
var count__32979_33413 = (0);
var i__32980_33414 = (0);
while(true){
if((i__32980_33414 < count__32979_33413)){
var child_struct_33415 = chunk__32978_33412.cljs$core$IIndexed$_nth$arity$2(null,i__32980_33414);
if((!((child_struct_33415 == null)))){
if(typeof child_struct_33415 === 'string'){
var text_33416 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33416),child_struct_33415].join(''));
} else {
var children_33417 = shadow.dom.svg_node(child_struct_33415);
if(cljs.core.seq_QMARK_(children_33417)){
var seq__33010_33418 = cljs.core.seq(children_33417);
var chunk__33012_33419 = null;
var count__33013_33420 = (0);
var i__33014_33421 = (0);
while(true){
if((i__33014_33421 < count__33013_33420)){
var child_33422 = chunk__33012_33419.cljs$core$IIndexed$_nth$arity$2(null,i__33014_33421);
if(cljs.core.truth_(child_33422)){
node.appendChild(child_33422);


var G__33424 = seq__33010_33418;
var G__33425 = chunk__33012_33419;
var G__33426 = count__33013_33420;
var G__33427 = (i__33014_33421 + (1));
seq__33010_33418 = G__33424;
chunk__33012_33419 = G__33425;
count__33013_33420 = G__33426;
i__33014_33421 = G__33427;
continue;
} else {
var G__33428 = seq__33010_33418;
var G__33429 = chunk__33012_33419;
var G__33430 = count__33013_33420;
var G__33431 = (i__33014_33421 + (1));
seq__33010_33418 = G__33428;
chunk__33012_33419 = G__33429;
count__33013_33420 = G__33430;
i__33014_33421 = G__33431;
continue;
}
} else {
var temp__5735__auto___33433 = cljs.core.seq(seq__33010_33418);
if(temp__5735__auto___33433){
var seq__33010_33434__$1 = temp__5735__auto___33433;
if(cljs.core.chunked_seq_QMARK_(seq__33010_33434__$1)){
var c__4609__auto___33435 = cljs.core.chunk_first(seq__33010_33434__$1);
var G__33436 = cljs.core.chunk_rest(seq__33010_33434__$1);
var G__33437 = c__4609__auto___33435;
var G__33438 = cljs.core.count(c__4609__auto___33435);
var G__33439 = (0);
seq__33010_33418 = G__33436;
chunk__33012_33419 = G__33437;
count__33013_33420 = G__33438;
i__33014_33421 = G__33439;
continue;
} else {
var child_33440 = cljs.core.first(seq__33010_33434__$1);
if(cljs.core.truth_(child_33440)){
node.appendChild(child_33440);


var G__33441 = cljs.core.next(seq__33010_33434__$1);
var G__33442 = null;
var G__33443 = (0);
var G__33444 = (0);
seq__33010_33418 = G__33441;
chunk__33012_33419 = G__33442;
count__33013_33420 = G__33443;
i__33014_33421 = G__33444;
continue;
} else {
var G__33445 = cljs.core.next(seq__33010_33434__$1);
var G__33446 = null;
var G__33447 = (0);
var G__33448 = (0);
seq__33010_33418 = G__33445;
chunk__33012_33419 = G__33446;
count__33013_33420 = G__33447;
i__33014_33421 = G__33448;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33417);
}
}


var G__33449 = seq__32976_33411;
var G__33450 = chunk__32978_33412;
var G__33451 = count__32979_33413;
var G__33452 = (i__32980_33414 + (1));
seq__32976_33411 = G__33449;
chunk__32978_33412 = G__33450;
count__32979_33413 = G__33451;
i__32980_33414 = G__33452;
continue;
} else {
var G__33454 = seq__32976_33411;
var G__33455 = chunk__32978_33412;
var G__33456 = count__32979_33413;
var G__33457 = (i__32980_33414 + (1));
seq__32976_33411 = G__33454;
chunk__32978_33412 = G__33455;
count__32979_33413 = G__33456;
i__32980_33414 = G__33457;
continue;
}
} else {
var temp__5735__auto___33458 = cljs.core.seq(seq__32976_33411);
if(temp__5735__auto___33458){
var seq__32976_33459__$1 = temp__5735__auto___33458;
if(cljs.core.chunked_seq_QMARK_(seq__32976_33459__$1)){
var c__4609__auto___33460 = cljs.core.chunk_first(seq__32976_33459__$1);
var G__33461 = cljs.core.chunk_rest(seq__32976_33459__$1);
var G__33462 = c__4609__auto___33460;
var G__33463 = cljs.core.count(c__4609__auto___33460);
var G__33464 = (0);
seq__32976_33411 = G__33461;
chunk__32978_33412 = G__33462;
count__32979_33413 = G__33463;
i__32980_33414 = G__33464;
continue;
} else {
var child_struct_33465 = cljs.core.first(seq__32976_33459__$1);
if((!((child_struct_33465 == null)))){
if(typeof child_struct_33465 === 'string'){
var text_33470 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33470),child_struct_33465].join(''));
} else {
var children_33471 = shadow.dom.svg_node(child_struct_33465);
if(cljs.core.seq_QMARK_(children_33471)){
var seq__33023_33472 = cljs.core.seq(children_33471);
var chunk__33025_33473 = null;
var count__33026_33474 = (0);
var i__33027_33475 = (0);
while(true){
if((i__33027_33475 < count__33026_33474)){
var child_33477 = chunk__33025_33473.cljs$core$IIndexed$_nth$arity$2(null,i__33027_33475);
if(cljs.core.truth_(child_33477)){
node.appendChild(child_33477);


var G__33478 = seq__33023_33472;
var G__33479 = chunk__33025_33473;
var G__33480 = count__33026_33474;
var G__33481 = (i__33027_33475 + (1));
seq__33023_33472 = G__33478;
chunk__33025_33473 = G__33479;
count__33026_33474 = G__33480;
i__33027_33475 = G__33481;
continue;
} else {
var G__33482 = seq__33023_33472;
var G__33483 = chunk__33025_33473;
var G__33484 = count__33026_33474;
var G__33485 = (i__33027_33475 + (1));
seq__33023_33472 = G__33482;
chunk__33025_33473 = G__33483;
count__33026_33474 = G__33484;
i__33027_33475 = G__33485;
continue;
}
} else {
var temp__5735__auto___33486__$1 = cljs.core.seq(seq__33023_33472);
if(temp__5735__auto___33486__$1){
var seq__33023_33487__$1 = temp__5735__auto___33486__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33023_33487__$1)){
var c__4609__auto___33488 = cljs.core.chunk_first(seq__33023_33487__$1);
var G__33489 = cljs.core.chunk_rest(seq__33023_33487__$1);
var G__33490 = c__4609__auto___33488;
var G__33491 = cljs.core.count(c__4609__auto___33488);
var G__33492 = (0);
seq__33023_33472 = G__33489;
chunk__33025_33473 = G__33490;
count__33026_33474 = G__33491;
i__33027_33475 = G__33492;
continue;
} else {
var child_33493 = cljs.core.first(seq__33023_33487__$1);
if(cljs.core.truth_(child_33493)){
node.appendChild(child_33493);


var G__33494 = cljs.core.next(seq__33023_33487__$1);
var G__33495 = null;
var G__33496 = (0);
var G__33497 = (0);
seq__33023_33472 = G__33494;
chunk__33025_33473 = G__33495;
count__33026_33474 = G__33496;
i__33027_33475 = G__33497;
continue;
} else {
var G__33498 = cljs.core.next(seq__33023_33487__$1);
var G__33499 = null;
var G__33500 = (0);
var G__33501 = (0);
seq__33023_33472 = G__33498;
chunk__33025_33473 = G__33499;
count__33026_33474 = G__33500;
i__33027_33475 = G__33501;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33471);
}
}


var G__33503 = cljs.core.next(seq__32976_33459__$1);
var G__33504 = null;
var G__33505 = (0);
var G__33506 = (0);
seq__32976_33411 = G__33503;
chunk__32978_33412 = G__33504;
count__32979_33413 = G__33505;
i__32980_33414 = G__33506;
continue;
} else {
var G__33507 = cljs.core.next(seq__32976_33459__$1);
var G__33508 = null;
var G__33509 = (0);
var G__33510 = (0);
seq__32976_33411 = G__33507;
chunk__32978_33412 = G__33508;
count__32979_33413 = G__33509;
i__32980_33414 = G__33510;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33038_33511 = shadow.dom._to_svg;
var G__33039_33512 = "string";
var G__33040_33513 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33038_33511,G__33039_33512,G__33040_33513);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33046_33518 = shadow.dom._to_svg;
var G__33047_33519 = "null";
var G__33048_33520 = (function (_){
return null;
});
goog.object.set(G__33046_33518,G__33047_33519,G__33048_33520);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33521 = arguments.length;
var i__4790__auto___33522 = (0);
while(true){
if((i__4790__auto___33522 < len__4789__auto___33521)){
args__4795__auto__.push((arguments[i__4790__auto___33522]));

var G__33523 = (i__4790__auto___33522 + (1));
i__4790__auto___33522 = G__33523;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33053){
var G__33054 = cljs.core.first(seq33053);
var seq33053__$1 = cljs.core.next(seq33053);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33054,seq33053__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33065 = arguments.length;
switch (G__33065) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__33071_33525 = shadow.dom.dom_node(el);
var G__33072_33526 = cljs.core.name(event);
var G__33073_33527 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33071_33525,G__33072_33526,G__33073_33527) : shadow.dom.dom_listen.call(null,G__33071_33525,G__33072_33526,G__33073_33527));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29262__auto___33528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_33078){
var state_val_33079 = (state_33078[(1)]);
if((state_val_33079 === (1))){
var state_33078__$1 = state_33078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33078__$1,(2),once_or_cleanup);
} else {
if((state_val_33079 === (2))){
var inst_33075 = (state_33078[(2)]);
var inst_33076 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33078__$1 = (function (){var statearr_33082 = state_33078;
(statearr_33082[(7)] = inst_33075);

return statearr_33082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33078__$1,inst_33076);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29026__auto__ = null;
var shadow$dom$state_machine__29026__auto____0 = (function (){
var statearr_33084 = [null,null,null,null,null,null,null,null];
(statearr_33084[(0)] = shadow$dom$state_machine__29026__auto__);

(statearr_33084[(1)] = (1));

return statearr_33084;
});
var shadow$dom$state_machine__29026__auto____1 = (function (state_33078){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_33078);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e33086){if((e33086 instanceof Object)){
var ex__29029__auto__ = e33086;
var statearr_33087_33530 = state_33078;
(statearr_33087_33530[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33086;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33531 = state_33078;
state_33078 = G__33531;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
shadow$dom$state_machine__29026__auto__ = function(state_33078){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29026__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29026__auto____1.call(this,state_33078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29026__auto____0;
shadow$dom$state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29026__auto____1;
return shadow$dom$state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_33088 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_33088[(6)] = c__29262__auto___33528);

return statearr_33088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
