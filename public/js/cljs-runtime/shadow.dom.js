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
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
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
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33251 = coll;
var G__33252 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33251,G__33252) : shadow.dom.lazy_native_coll_seq.call(null,G__33251,G__33252));
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
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

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
var G__33271 = arguments.length;
switch (G__33271) {
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

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33275 = arguments.length;
switch (G__33275) {
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

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33285 = arguments.length;
switch (G__33285) {
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

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33292 = arguments.length;
switch (G__33292) {
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

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33297 = arguments.length;
switch (G__33297) {
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

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33300 = document;
var G__33301 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33300,G__33301);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33302 = shadow.dom.dom_node(parent);
var G__33303 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33302,G__33303);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33304 = shadow.dom.dom_node(el);
var G__33305 = cls;
return goog.dom.classlist.add(G__33304,G__33305);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33307 = shadow.dom.dom_node(el);
var G__33308 = cls;
return goog.dom.classlist.remove(G__33307,G__33308);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33312 = arguments.length;
switch (G__33312) {
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

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33315 = shadow.dom.dom_node(el);
var G__33316 = cls;
return goog.dom.classlist.toggle(G__33315,G__33316);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33323){if((e33323 instanceof Object)){
var e = e33323;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33323;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33326 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33327 = null;
var count__33328 = (0);
var i__33329 = (0);
while(true){
if((i__33329 < count__33328)){
var el = chunk__33327.cljs$core$IIndexed$_nth$arity$2(null,i__33329);
var handler_33924__$1 = ((function (seq__33326,chunk__33327,count__33328,i__33329,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33326,chunk__33327,count__33328,i__33329,el))
;
var G__33339_33925 = el;
var G__33340_33926 = cljs.core.name(ev);
var G__33341_33927 = handler_33924__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33339_33925,G__33340_33926,G__33341_33927) : shadow.dom.dom_listen.call(null,G__33339_33925,G__33340_33926,G__33341_33927));


var G__33929 = seq__33326;
var G__33930 = chunk__33327;
var G__33931 = count__33328;
var G__33932 = (i__33329 + (1));
seq__33326 = G__33929;
chunk__33327 = G__33930;
count__33328 = G__33931;
i__33329 = G__33932;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33326);
if(temp__5720__auto__){
var seq__33326__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33326__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33326__$1);
var G__33934 = cljs.core.chunk_rest(seq__33326__$1);
var G__33935 = c__4550__auto__;
var G__33936 = cljs.core.count(c__4550__auto__);
var G__33937 = (0);
seq__33326 = G__33934;
chunk__33327 = G__33935;
count__33328 = G__33936;
i__33329 = G__33937;
continue;
} else {
var el = cljs.core.first(seq__33326__$1);
var handler_33938__$1 = ((function (seq__33326,chunk__33327,count__33328,i__33329,el,seq__33326__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33326,chunk__33327,count__33328,i__33329,el,seq__33326__$1,temp__5720__auto__))
;
var G__33346_33940 = el;
var G__33347_33941 = cljs.core.name(ev);
var G__33348_33942 = handler_33938__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33346_33940,G__33347_33941,G__33348_33942) : shadow.dom.dom_listen.call(null,G__33346_33940,G__33347_33941,G__33348_33942));


var G__33943 = cljs.core.next(seq__33326__$1);
var G__33944 = null;
var G__33945 = (0);
var G__33946 = (0);
seq__33326 = G__33943;
chunk__33327 = G__33944;
count__33328 = G__33945;
i__33329 = G__33946;
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
var G__33354 = arguments.length;
switch (G__33354) {
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

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33360 = shadow.dom.dom_node(el);
var G__33361 = cljs.core.name(ev);
var G__33362 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33360,G__33361,G__33362) : shadow.dom.dom_listen.call(null,G__33360,G__33361,G__33362));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33366 = shadow.dom.dom_node(el);
var G__33367 = cljs.core.name(ev);
var G__33368 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33366,G__33367,G__33368) : shadow.dom.dom_listen_remove.call(null,G__33366,G__33367,G__33368));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33372 = cljs.core.seq(events);
var chunk__33373 = null;
var count__33374 = (0);
var i__33375 = (0);
while(true){
if((i__33375 < count__33374)){
var vec__33382 = chunk__33373.cljs$core$IIndexed$_nth$arity$2(null,i__33375);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33382,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33955 = seq__33372;
var G__33956 = chunk__33373;
var G__33957 = count__33374;
var G__33958 = (i__33375 + (1));
seq__33372 = G__33955;
chunk__33373 = G__33956;
count__33374 = G__33957;
i__33375 = G__33958;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33372);
if(temp__5720__auto__){
var seq__33372__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33372__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33372__$1);
var G__33961 = cljs.core.chunk_rest(seq__33372__$1);
var G__33962 = c__4550__auto__;
var G__33963 = cljs.core.count(c__4550__auto__);
var G__33964 = (0);
seq__33372 = G__33961;
chunk__33373 = G__33962;
count__33374 = G__33963;
i__33375 = G__33964;
continue;
} else {
var vec__33387 = cljs.core.first(seq__33372__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33387,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33387,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33965 = cljs.core.next(seq__33372__$1);
var G__33966 = null;
var G__33967 = (0);
var G__33968 = (0);
seq__33372 = G__33965;
chunk__33373 = G__33966;
count__33374 = G__33967;
i__33375 = G__33968;
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
var seq__33391 = cljs.core.seq(styles);
var chunk__33392 = null;
var count__33393 = (0);
var i__33394 = (0);
while(true){
if((i__33394 < count__33393)){
var vec__33408 = chunk__33392.cljs$core$IIndexed$_nth$arity$2(null,i__33394);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33408,(1),null);
var G__33411_33971 = dom;
var G__33412_33972 = cljs.core.name(k);
var G__33413_33973 = (((v == null))?"":v);
goog.style.setStyle(G__33411_33971,G__33412_33972,G__33413_33973);


var G__33974 = seq__33391;
var G__33975 = chunk__33392;
var G__33976 = count__33393;
var G__33977 = (i__33394 + (1));
seq__33391 = G__33974;
chunk__33392 = G__33975;
count__33393 = G__33976;
i__33394 = G__33977;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33391);
if(temp__5720__auto__){
var seq__33391__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33391__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33391__$1);
var G__33979 = cljs.core.chunk_rest(seq__33391__$1);
var G__33980 = c__4550__auto__;
var G__33981 = cljs.core.count(c__4550__auto__);
var G__33982 = (0);
seq__33391 = G__33979;
chunk__33392 = G__33980;
count__33393 = G__33981;
i__33394 = G__33982;
continue;
} else {
var vec__33415 = cljs.core.first(seq__33391__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33415,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33415,(1),null);
var G__33418_33984 = dom;
var G__33419_33985 = cljs.core.name(k);
var G__33420_33986 = (((v == null))?"":v);
goog.style.setStyle(G__33418_33984,G__33419_33985,G__33420_33986);


var G__33988 = cljs.core.next(seq__33391__$1);
var G__33989 = null;
var G__33990 = (0);
var G__33991 = (0);
seq__33391 = G__33988;
chunk__33392 = G__33989;
count__33393 = G__33990;
i__33394 = G__33991;
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
var G__33425_33993 = key;
var G__33425_33994__$1 = (((G__33425_33993 instanceof cljs.core.Keyword))?G__33425_33993.fqn:null);
switch (G__33425_33994__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

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
var ks_34003 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34003,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34003,"aria-");
}
})())){
el.setAttribute(ks_34003,value);
} else {
(el[ks_34003] = value);
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
var G__33441 = shadow.dom.dom_node(el);
var G__33442 = cls;
return goog.dom.classlist.contains(G__33441,G__33442);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33451){
var map__33453 = p__33451;
var map__33453__$1 = (((((!((map__33453 == null))))?(((((map__33453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33453):map__33453);
var props = map__33453__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33453__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33456 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33456,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33459 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33459,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33459;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33461 = arguments.length;
switch (G__33461) {
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

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33465){
var vec__33466 = p__33465;
var seq__33467 = cljs.core.seq(vec__33466);
var first__33468 = cljs.core.first(seq__33467);
var seq__33467__$1 = cljs.core.next(seq__33467);
var nn = first__33468;
var first__33468__$1 = cljs.core.first(seq__33467__$1);
var seq__33467__$2 = cljs.core.next(seq__33467__$1);
var np = first__33468__$1;
var nc = seq__33467__$2;
var node = vec__33466;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33471 = nn;
var G__33472 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33471,G__33472) : create_fn.call(null,G__33471,G__33472));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33474 = nn;
var G__33475 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33474,G__33475) : create_fn.call(null,G__33474,G__33475));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33479 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33479,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33479,(1),null);
var seq__33484_34027 = cljs.core.seq(node_children);
var chunk__33485_34028 = null;
var count__33486_34029 = (0);
var i__33487_34030 = (0);
while(true){
if((i__33487_34030 < count__33486_34029)){
var child_struct_34031 = chunk__33485_34028.cljs$core$IIndexed$_nth$arity$2(null,i__33487_34030);
var children_34032 = shadow.dom.dom_node(child_struct_34031);
if(cljs.core.seq_QMARK_(children_34032)){
var seq__33508_34033 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34032));
var chunk__33510_34034 = null;
var count__33511_34035 = (0);
var i__33512_34036 = (0);
while(true){
if((i__33512_34036 < count__33511_34035)){
var child_34038 = chunk__33510_34034.cljs$core$IIndexed$_nth$arity$2(null,i__33512_34036);
if(cljs.core.truth_(child_34038)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34038);


var G__34039 = seq__33508_34033;
var G__34040 = chunk__33510_34034;
var G__34041 = count__33511_34035;
var G__34042 = (i__33512_34036 + (1));
seq__33508_34033 = G__34039;
chunk__33510_34034 = G__34040;
count__33511_34035 = G__34041;
i__33512_34036 = G__34042;
continue;
} else {
var G__34043 = seq__33508_34033;
var G__34044 = chunk__33510_34034;
var G__34045 = count__33511_34035;
var G__34046 = (i__33512_34036 + (1));
seq__33508_34033 = G__34043;
chunk__33510_34034 = G__34044;
count__33511_34035 = G__34045;
i__33512_34036 = G__34046;
continue;
}
} else {
var temp__5720__auto___34048 = cljs.core.seq(seq__33508_34033);
if(temp__5720__auto___34048){
var seq__33508_34049__$1 = temp__5720__auto___34048;
if(cljs.core.chunked_seq_QMARK_(seq__33508_34049__$1)){
var c__4550__auto___34050 = cljs.core.chunk_first(seq__33508_34049__$1);
var G__34051 = cljs.core.chunk_rest(seq__33508_34049__$1);
var G__34052 = c__4550__auto___34050;
var G__34053 = cljs.core.count(c__4550__auto___34050);
var G__34054 = (0);
seq__33508_34033 = G__34051;
chunk__33510_34034 = G__34052;
count__33511_34035 = G__34053;
i__33512_34036 = G__34054;
continue;
} else {
var child_34056 = cljs.core.first(seq__33508_34049__$1);
if(cljs.core.truth_(child_34056)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34056);


var G__34058 = cljs.core.next(seq__33508_34049__$1);
var G__34059 = null;
var G__34060 = (0);
var G__34061 = (0);
seq__33508_34033 = G__34058;
chunk__33510_34034 = G__34059;
count__33511_34035 = G__34060;
i__33512_34036 = G__34061;
continue;
} else {
var G__34062 = cljs.core.next(seq__33508_34049__$1);
var G__34063 = null;
var G__34064 = (0);
var G__34065 = (0);
seq__33508_34033 = G__34062;
chunk__33510_34034 = G__34063;
count__33511_34035 = G__34064;
i__33512_34036 = G__34065;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34032);
}


var G__34066 = seq__33484_34027;
var G__34067 = chunk__33485_34028;
var G__34068 = count__33486_34029;
var G__34069 = (i__33487_34030 + (1));
seq__33484_34027 = G__34066;
chunk__33485_34028 = G__34067;
count__33486_34029 = G__34068;
i__33487_34030 = G__34069;
continue;
} else {
var temp__5720__auto___34072 = cljs.core.seq(seq__33484_34027);
if(temp__5720__auto___34072){
var seq__33484_34073__$1 = temp__5720__auto___34072;
if(cljs.core.chunked_seq_QMARK_(seq__33484_34073__$1)){
var c__4550__auto___34075 = cljs.core.chunk_first(seq__33484_34073__$1);
var G__34076 = cljs.core.chunk_rest(seq__33484_34073__$1);
var G__34077 = c__4550__auto___34075;
var G__34078 = cljs.core.count(c__4550__auto___34075);
var G__34079 = (0);
seq__33484_34027 = G__34076;
chunk__33485_34028 = G__34077;
count__33486_34029 = G__34078;
i__33487_34030 = G__34079;
continue;
} else {
var child_struct_34080 = cljs.core.first(seq__33484_34073__$1);
var children_34081 = shadow.dom.dom_node(child_struct_34080);
if(cljs.core.seq_QMARK_(children_34081)){
var seq__33514_34082 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34081));
var chunk__33516_34083 = null;
var count__33517_34084 = (0);
var i__33518_34085 = (0);
while(true){
if((i__33518_34085 < count__33517_34084)){
var child_34089 = chunk__33516_34083.cljs$core$IIndexed$_nth$arity$2(null,i__33518_34085);
if(cljs.core.truth_(child_34089)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34089);


var G__34090 = seq__33514_34082;
var G__34091 = chunk__33516_34083;
var G__34092 = count__33517_34084;
var G__34093 = (i__33518_34085 + (1));
seq__33514_34082 = G__34090;
chunk__33516_34083 = G__34091;
count__33517_34084 = G__34092;
i__33518_34085 = G__34093;
continue;
} else {
var G__34095 = seq__33514_34082;
var G__34096 = chunk__33516_34083;
var G__34097 = count__33517_34084;
var G__34098 = (i__33518_34085 + (1));
seq__33514_34082 = G__34095;
chunk__33516_34083 = G__34096;
count__33517_34084 = G__34097;
i__33518_34085 = G__34098;
continue;
}
} else {
var temp__5720__auto___34099__$1 = cljs.core.seq(seq__33514_34082);
if(temp__5720__auto___34099__$1){
var seq__33514_34100__$1 = temp__5720__auto___34099__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33514_34100__$1)){
var c__4550__auto___34101 = cljs.core.chunk_first(seq__33514_34100__$1);
var G__34102 = cljs.core.chunk_rest(seq__33514_34100__$1);
var G__34103 = c__4550__auto___34101;
var G__34104 = cljs.core.count(c__4550__auto___34101);
var G__34105 = (0);
seq__33514_34082 = G__34102;
chunk__33516_34083 = G__34103;
count__33517_34084 = G__34104;
i__33518_34085 = G__34105;
continue;
} else {
var child_34106 = cljs.core.first(seq__33514_34100__$1);
if(cljs.core.truth_(child_34106)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34106);


var G__34109 = cljs.core.next(seq__33514_34100__$1);
var G__34110 = null;
var G__34111 = (0);
var G__34112 = (0);
seq__33514_34082 = G__34109;
chunk__33516_34083 = G__34110;
count__33517_34084 = G__34111;
i__33518_34085 = G__34112;
continue;
} else {
var G__34113 = cljs.core.next(seq__33514_34100__$1);
var G__34114 = null;
var G__34115 = (0);
var G__34116 = (0);
seq__33514_34082 = G__34113;
chunk__33516_34083 = G__34114;
count__33517_34084 = G__34115;
i__33518_34085 = G__34116;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34081);
}


var G__34118 = cljs.core.next(seq__33484_34073__$1);
var G__34119 = null;
var G__34120 = (0);
var G__34121 = (0);
seq__33484_34027 = G__34118;
chunk__33485_34028 = G__34119;
count__33486_34029 = G__34120;
i__33487_34030 = G__34121;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33534 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33534);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33540 = cljs.core.seq(node);
var chunk__33541 = null;
var count__33542 = (0);
var i__33543 = (0);
while(true){
if((i__33543 < count__33542)){
var n = chunk__33541.cljs$core$IIndexed$_nth$arity$2(null,i__33543);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34129 = seq__33540;
var G__34130 = chunk__33541;
var G__34131 = count__33542;
var G__34132 = (i__33543 + (1));
seq__33540 = G__34129;
chunk__33541 = G__34130;
count__33542 = G__34131;
i__33543 = G__34132;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33540);
if(temp__5720__auto__){
var seq__33540__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33540__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33540__$1);
var G__34135 = cljs.core.chunk_rest(seq__33540__$1);
var G__34136 = c__4550__auto__;
var G__34137 = cljs.core.count(c__4550__auto__);
var G__34138 = (0);
seq__33540 = G__34135;
chunk__33541 = G__34136;
count__33542 = G__34137;
i__33543 = G__34138;
continue;
} else {
var n = cljs.core.first(seq__33540__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34140 = cljs.core.next(seq__33540__$1);
var G__34141 = null;
var G__34142 = (0);
var G__34143 = (0);
seq__33540 = G__34140;
chunk__33541 = G__34141;
count__33542 = G__34142;
i__33543 = G__34143;
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
var G__33549 = shadow.dom.dom_node(new$);
var G__33550 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33549,G__33550);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33554 = arguments.length;
switch (G__33554) {
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

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33561 = arguments.length;
switch (G__33561) {
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

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

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
var G__33577 = arguments.length;
switch (G__33577) {
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

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

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
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34165 = arguments.length;
var i__4731__auto___34166 = (0);
while(true){
if((i__4731__auto___34166 < len__4730__auto___34165)){
args__4736__auto__.push((arguments[i__4731__auto___34166]));

var G__34168 = (i__4731__auto___34166 + (1));
i__4731__auto___34166 = G__34168;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33586_34169 = cljs.core.seq(nodes);
var chunk__33587_34170 = null;
var count__33588_34171 = (0);
var i__33589_34172 = (0);
while(true){
if((i__33589_34172 < count__33588_34171)){
var node_34174 = chunk__33587_34170.cljs$core$IIndexed$_nth$arity$2(null,i__33589_34172);
fragment.appendChild(shadow.dom._to_dom(node_34174));


var G__34175 = seq__33586_34169;
var G__34176 = chunk__33587_34170;
var G__34177 = count__33588_34171;
var G__34178 = (i__33589_34172 + (1));
seq__33586_34169 = G__34175;
chunk__33587_34170 = G__34176;
count__33588_34171 = G__34177;
i__33589_34172 = G__34178;
continue;
} else {
var temp__5720__auto___34179 = cljs.core.seq(seq__33586_34169);
if(temp__5720__auto___34179){
var seq__33586_34180__$1 = temp__5720__auto___34179;
if(cljs.core.chunked_seq_QMARK_(seq__33586_34180__$1)){
var c__4550__auto___34181 = cljs.core.chunk_first(seq__33586_34180__$1);
var G__34182 = cljs.core.chunk_rest(seq__33586_34180__$1);
var G__34183 = c__4550__auto___34181;
var G__34184 = cljs.core.count(c__4550__auto___34181);
var G__34185 = (0);
seq__33586_34169 = G__34182;
chunk__33587_34170 = G__34183;
count__33588_34171 = G__34184;
i__33589_34172 = G__34185;
continue;
} else {
var node_34186 = cljs.core.first(seq__33586_34180__$1);
fragment.appendChild(shadow.dom._to_dom(node_34186));


var G__34187 = cljs.core.next(seq__33586_34180__$1);
var G__34188 = null;
var G__34189 = (0);
var G__34190 = (0);
seq__33586_34169 = G__34187;
chunk__33587_34170 = G__34188;
count__33588_34171 = G__34189;
i__33589_34172 = G__34190;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33585){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33585));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33594_34194 = cljs.core.seq(scripts);
var chunk__33595_34195 = null;
var count__33596_34196 = (0);
var i__33597_34197 = (0);
while(true){
if((i__33597_34197 < count__33596_34196)){
var vec__33605_34198 = chunk__33595_34195.cljs$core$IIndexed$_nth$arity$2(null,i__33597_34197);
var script_tag_34199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605_34198,(0),null);
var script_body_34200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33605_34198,(1),null);
eval(script_body_34200);


var G__34202 = seq__33594_34194;
var G__34203 = chunk__33595_34195;
var G__34204 = count__33596_34196;
var G__34205 = (i__33597_34197 + (1));
seq__33594_34194 = G__34202;
chunk__33595_34195 = G__34203;
count__33596_34196 = G__34204;
i__33597_34197 = G__34205;
continue;
} else {
var temp__5720__auto___34206 = cljs.core.seq(seq__33594_34194);
if(temp__5720__auto___34206){
var seq__33594_34207__$1 = temp__5720__auto___34206;
if(cljs.core.chunked_seq_QMARK_(seq__33594_34207__$1)){
var c__4550__auto___34209 = cljs.core.chunk_first(seq__33594_34207__$1);
var G__34210 = cljs.core.chunk_rest(seq__33594_34207__$1);
var G__34211 = c__4550__auto___34209;
var G__34212 = cljs.core.count(c__4550__auto___34209);
var G__34213 = (0);
seq__33594_34194 = G__34210;
chunk__33595_34195 = G__34211;
count__33596_34196 = G__34212;
i__33597_34197 = G__34213;
continue;
} else {
var vec__33610_34214 = cljs.core.first(seq__33594_34207__$1);
var script_tag_34215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610_34214,(0),null);
var script_body_34216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610_34214,(1),null);
eval(script_body_34216);


var G__34217 = cljs.core.next(seq__33594_34207__$1);
var G__34218 = null;
var G__34219 = (0);
var G__34220 = (0);
seq__33594_34194 = G__34217;
chunk__33595_34195 = G__34218;
count__33596_34196 = G__34219;
i__33597_34197 = G__34220;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33613){
var vec__33614 = p__33613;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33614,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33614,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33617 = shadow.dom.dom_node(el);
var G__33618 = cls;
return goog.dom.getAncestorByClass(G__33617,G__33618);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33620 = arguments.length;
switch (G__33620) {
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

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33621 = shadow.dom.dom_node(el);
var G__33622 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33621,G__33622);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33623 = shadow.dom.dom_node(el);
var G__33624 = cljs.core.name(tag);
var G__33625 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33623,G__33624,G__33625);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33629 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33629);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33631 = shadow.dom.dom_node(dom);
var G__33632 = value;
return goog.dom.forms.setValue(G__33631,G__33632);
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
var seq__33635 = cljs.core.seq(style_keys);
var chunk__33636 = null;
var count__33637 = (0);
var i__33638 = (0);
while(true){
if((i__33638 < count__33637)){
var it = chunk__33636.cljs$core$IIndexed$_nth$arity$2(null,i__33638);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34236 = seq__33635;
var G__34237 = chunk__33636;
var G__34238 = count__33637;
var G__34239 = (i__33638 + (1));
seq__33635 = G__34236;
chunk__33636 = G__34237;
count__33637 = G__34238;
i__33638 = G__34239;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33635);
if(temp__5720__auto__){
var seq__33635__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33635__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33635__$1);
var G__34240 = cljs.core.chunk_rest(seq__33635__$1);
var G__34241 = c__4550__auto__;
var G__34242 = cljs.core.count(c__4550__auto__);
var G__34243 = (0);
seq__33635 = G__34240;
chunk__33636 = G__34241;
count__33637 = G__34242;
i__33638 = G__34243;
continue;
} else {
var it = cljs.core.first(seq__33635__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34244 = cljs.core.next(seq__33635__$1);
var G__34245 = null;
var G__34246 = (0);
var G__34247 = (0);
seq__33635 = G__34244;
chunk__33636 = G__34245;
count__33637 = G__34246;
i__33638 = G__34247;
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
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33640,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33644 = k33640;
var G__33644__$1 = (((G__33644 instanceof cljs.core.Keyword))?G__33644.fqn:null);
switch (G__33644__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33640,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33645){
var vec__33646 = p__33645;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33639){
var self__ = this;
var G__33639__$1 = this;
return (new cljs.core.RecordIter((0),G__33639__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33650 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33650(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33641,other33642){
var self__ = this;
var this33641__$1 = this;
return (((!((other33642 == null)))) && ((this33641__$1.constructor === other33642.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33641__$1.x,other33642.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33641__$1.y,other33642.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33641__$1.__extmap,other33642.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33639){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33660 = cljs.core.keyword_identical_QMARK_;
var expr__33661 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33663 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33664 = expr__33661;
return (pred__33660.cljs$core$IFn$_invoke$arity$2 ? pred__33660.cljs$core$IFn$_invoke$arity$2(G__33663,G__33664) : pred__33660.call(null,G__33663,G__33664));
})())){
return (new shadow.dom.Coordinate(G__33639,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33667 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33668 = expr__33661;
return (pred__33660.cljs$core$IFn$_invoke$arity$2 ? pred__33660.cljs$core$IFn$_invoke$arity$2(G__33667,G__33668) : pred__33660.call(null,G__33667,G__33668));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33639,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33639),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33639){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33639,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33643){
var extmap__4424__auto__ = (function (){var G__33676 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33643,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33643)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33676);
} else {
return G__33676;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33643),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33643),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33681 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33681);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33686 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33686);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33689 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33689);
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
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33694,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33706 = k33694;
var G__33706__$1 = (((G__33706 instanceof cljs.core.Keyword))?G__33706.fqn:null);
switch (G__33706__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33694,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33709){
var vec__33711 = p__33709;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33711,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33711,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33693){
var self__ = this;
var G__33693__$1 = this;
return (new cljs.core.RecordIter((0),G__33693__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33718 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33718(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33696,other33697){
var self__ = this;
var this33696__$1 = this;
return (((!((other33697 == null)))) && ((this33696__$1.constructor === other33697.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33696__$1.w,other33697.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33696__$1.h,other33697.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33696__$1.__extmap,other33697.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33693){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33721 = cljs.core.keyword_identical_QMARK_;
var expr__33722 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33724 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33725 = expr__33722;
return (pred__33721.cljs$core$IFn$_invoke$arity$2 ? pred__33721.cljs$core$IFn$_invoke$arity$2(G__33724,G__33725) : pred__33721.call(null,G__33724,G__33725));
})())){
return (new shadow.dom.Size(G__33693,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33726 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33727 = expr__33722;
return (pred__33721.cljs$core$IFn$_invoke$arity$2 ? pred__33721.cljs$core$IFn$_invoke$arity$2(G__33726,G__33727) : pred__33721.call(null,G__33726,G__33727));
})())){
return (new shadow.dom.Size(self__.w,G__33693,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33693),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33693){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33693,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33699){
var extmap__4424__auto__ = (function (){var G__33729 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33699,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33699)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33729);
} else {
return G__33729;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33699),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33699),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33730 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33730);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
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
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34293 = (i + (1));
var G__34294 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34293;
ret = G__34294;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33736){
var vec__33737 = p__33736;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33737,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33741 = arguments.length;
switch (G__33741) {
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

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33751_34300 = new_node;
var G__33752_34301 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33751_34300,G__33752_34301);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33757_34302 = new_node;
var G__33758_34303 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33757_34302,G__33758_34303);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
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
var G__34304 = ps;
var G__34305 = (i + (1));
el__$1 = G__34304;
i = G__34305;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33762 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33762);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33768 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33768);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33770 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33770);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33773 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33773,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33773,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33773,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33777_34307 = cljs.core.seq(props);
var chunk__33778_34308 = null;
var count__33779_34309 = (0);
var i__33780_34310 = (0);
while(true){
if((i__33780_34310 < count__33779_34309)){
var vec__33794_34316 = chunk__33778_34308.cljs$core$IIndexed$_nth$arity$2(null,i__33780_34310);
var k_34317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33794_34316,(0),null);
var v_34318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33794_34316,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34317);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34317),v_34318);


var G__34321 = seq__33777_34307;
var G__34322 = chunk__33778_34308;
var G__34323 = count__33779_34309;
var G__34324 = (i__33780_34310 + (1));
seq__33777_34307 = G__34321;
chunk__33778_34308 = G__34322;
count__33779_34309 = G__34323;
i__33780_34310 = G__34324;
continue;
} else {
var temp__5720__auto___34325 = cljs.core.seq(seq__33777_34307);
if(temp__5720__auto___34325){
var seq__33777_34326__$1 = temp__5720__auto___34325;
if(cljs.core.chunked_seq_QMARK_(seq__33777_34326__$1)){
var c__4550__auto___34327 = cljs.core.chunk_first(seq__33777_34326__$1);
var G__34328 = cljs.core.chunk_rest(seq__33777_34326__$1);
var G__34329 = c__4550__auto___34327;
var G__34330 = cljs.core.count(c__4550__auto___34327);
var G__34331 = (0);
seq__33777_34307 = G__34328;
chunk__33778_34308 = G__34329;
count__33779_34309 = G__34330;
i__33780_34310 = G__34331;
continue;
} else {
var vec__33798_34332 = cljs.core.first(seq__33777_34326__$1);
var k_34333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798_34332,(0),null);
var v_34334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798_34332,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34333);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34333),v_34334);


var G__34335 = cljs.core.next(seq__33777_34326__$1);
var G__34336 = null;
var G__34337 = (0);
var G__34338 = (0);
seq__33777_34307 = G__34335;
chunk__33778_34308 = G__34336;
count__33779_34309 = G__34337;
i__33780_34310 = G__34338;
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
var vec__33810 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(1),null);
var seq__33814_34339 = cljs.core.seq(node_children);
var chunk__33816_34340 = null;
var count__33817_34341 = (0);
var i__33818_34342 = (0);
while(true){
if((i__33818_34342 < count__33817_34341)){
var child_struct_34343 = chunk__33816_34340.cljs$core$IIndexed$_nth$arity$2(null,i__33818_34342);
if((!((child_struct_34343 == null)))){
if(typeof child_struct_34343 === 'string'){
var text_34344 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34344),child_struct_34343].join(''));
} else {
var children_34345 = shadow.dom.svg_node(child_struct_34343);
if(cljs.core.seq_QMARK_(children_34345)){
var seq__33844_34346 = cljs.core.seq(children_34345);
var chunk__33846_34347 = null;
var count__33847_34348 = (0);
var i__33848_34349 = (0);
while(true){
if((i__33848_34349 < count__33847_34348)){
var child_34351 = chunk__33846_34347.cljs$core$IIndexed$_nth$arity$2(null,i__33848_34349);
if(cljs.core.truth_(child_34351)){
node.appendChild(child_34351);


var G__34352 = seq__33844_34346;
var G__34353 = chunk__33846_34347;
var G__34354 = count__33847_34348;
var G__34355 = (i__33848_34349 + (1));
seq__33844_34346 = G__34352;
chunk__33846_34347 = G__34353;
count__33847_34348 = G__34354;
i__33848_34349 = G__34355;
continue;
} else {
var G__34356 = seq__33844_34346;
var G__34357 = chunk__33846_34347;
var G__34358 = count__33847_34348;
var G__34359 = (i__33848_34349 + (1));
seq__33844_34346 = G__34356;
chunk__33846_34347 = G__34357;
count__33847_34348 = G__34358;
i__33848_34349 = G__34359;
continue;
}
} else {
var temp__5720__auto___34360 = cljs.core.seq(seq__33844_34346);
if(temp__5720__auto___34360){
var seq__33844_34361__$1 = temp__5720__auto___34360;
if(cljs.core.chunked_seq_QMARK_(seq__33844_34361__$1)){
var c__4550__auto___34362 = cljs.core.chunk_first(seq__33844_34361__$1);
var G__34363 = cljs.core.chunk_rest(seq__33844_34361__$1);
var G__34364 = c__4550__auto___34362;
var G__34365 = cljs.core.count(c__4550__auto___34362);
var G__34366 = (0);
seq__33844_34346 = G__34363;
chunk__33846_34347 = G__34364;
count__33847_34348 = G__34365;
i__33848_34349 = G__34366;
continue;
} else {
var child_34367 = cljs.core.first(seq__33844_34361__$1);
if(cljs.core.truth_(child_34367)){
node.appendChild(child_34367);


var G__34369 = cljs.core.next(seq__33844_34361__$1);
var G__34370 = null;
var G__34371 = (0);
var G__34372 = (0);
seq__33844_34346 = G__34369;
chunk__33846_34347 = G__34370;
count__33847_34348 = G__34371;
i__33848_34349 = G__34372;
continue;
} else {
var G__34373 = cljs.core.next(seq__33844_34361__$1);
var G__34374 = null;
var G__34375 = (0);
var G__34376 = (0);
seq__33844_34346 = G__34373;
chunk__33846_34347 = G__34374;
count__33847_34348 = G__34375;
i__33848_34349 = G__34376;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34345);
}
}


var G__34377 = seq__33814_34339;
var G__34378 = chunk__33816_34340;
var G__34379 = count__33817_34341;
var G__34380 = (i__33818_34342 + (1));
seq__33814_34339 = G__34377;
chunk__33816_34340 = G__34378;
count__33817_34341 = G__34379;
i__33818_34342 = G__34380;
continue;
} else {
var G__34381 = seq__33814_34339;
var G__34382 = chunk__33816_34340;
var G__34383 = count__33817_34341;
var G__34384 = (i__33818_34342 + (1));
seq__33814_34339 = G__34381;
chunk__33816_34340 = G__34382;
count__33817_34341 = G__34383;
i__33818_34342 = G__34384;
continue;
}
} else {
var temp__5720__auto___34385 = cljs.core.seq(seq__33814_34339);
if(temp__5720__auto___34385){
var seq__33814_34386__$1 = temp__5720__auto___34385;
if(cljs.core.chunked_seq_QMARK_(seq__33814_34386__$1)){
var c__4550__auto___34387 = cljs.core.chunk_first(seq__33814_34386__$1);
var G__34388 = cljs.core.chunk_rest(seq__33814_34386__$1);
var G__34389 = c__4550__auto___34387;
var G__34390 = cljs.core.count(c__4550__auto___34387);
var G__34391 = (0);
seq__33814_34339 = G__34388;
chunk__33816_34340 = G__34389;
count__33817_34341 = G__34390;
i__33818_34342 = G__34391;
continue;
} else {
var child_struct_34392 = cljs.core.first(seq__33814_34386__$1);
if((!((child_struct_34392 == null)))){
if(typeof child_struct_34392 === 'string'){
var text_34393 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34393),child_struct_34392].join(''));
} else {
var children_34394 = shadow.dom.svg_node(child_struct_34392);
if(cljs.core.seq_QMARK_(children_34394)){
var seq__33859_34395 = cljs.core.seq(children_34394);
var chunk__33861_34396 = null;
var count__33862_34397 = (0);
var i__33863_34398 = (0);
while(true){
if((i__33863_34398 < count__33862_34397)){
var child_34399 = chunk__33861_34396.cljs$core$IIndexed$_nth$arity$2(null,i__33863_34398);
if(cljs.core.truth_(child_34399)){
node.appendChild(child_34399);


var G__34400 = seq__33859_34395;
var G__34401 = chunk__33861_34396;
var G__34402 = count__33862_34397;
var G__34403 = (i__33863_34398 + (1));
seq__33859_34395 = G__34400;
chunk__33861_34396 = G__34401;
count__33862_34397 = G__34402;
i__33863_34398 = G__34403;
continue;
} else {
var G__34404 = seq__33859_34395;
var G__34405 = chunk__33861_34396;
var G__34406 = count__33862_34397;
var G__34407 = (i__33863_34398 + (1));
seq__33859_34395 = G__34404;
chunk__33861_34396 = G__34405;
count__33862_34397 = G__34406;
i__33863_34398 = G__34407;
continue;
}
} else {
var temp__5720__auto___34408__$1 = cljs.core.seq(seq__33859_34395);
if(temp__5720__auto___34408__$1){
var seq__33859_34409__$1 = temp__5720__auto___34408__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33859_34409__$1)){
var c__4550__auto___34410 = cljs.core.chunk_first(seq__33859_34409__$1);
var G__34411 = cljs.core.chunk_rest(seq__33859_34409__$1);
var G__34412 = c__4550__auto___34410;
var G__34413 = cljs.core.count(c__4550__auto___34410);
var G__34414 = (0);
seq__33859_34395 = G__34411;
chunk__33861_34396 = G__34412;
count__33862_34397 = G__34413;
i__33863_34398 = G__34414;
continue;
} else {
var child_34415 = cljs.core.first(seq__33859_34409__$1);
if(cljs.core.truth_(child_34415)){
node.appendChild(child_34415);


var G__34416 = cljs.core.next(seq__33859_34409__$1);
var G__34417 = null;
var G__34418 = (0);
var G__34419 = (0);
seq__33859_34395 = G__34416;
chunk__33861_34396 = G__34417;
count__33862_34397 = G__34418;
i__33863_34398 = G__34419;
continue;
} else {
var G__34420 = cljs.core.next(seq__33859_34409__$1);
var G__34421 = null;
var G__34422 = (0);
var G__34423 = (0);
seq__33859_34395 = G__34420;
chunk__33861_34396 = G__34421;
count__33862_34397 = G__34422;
i__33863_34398 = G__34423;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34394);
}
}


var G__34424 = cljs.core.next(seq__33814_34386__$1);
var G__34425 = null;
var G__34426 = (0);
var G__34427 = (0);
seq__33814_34339 = G__34424;
chunk__33816_34340 = G__34425;
count__33817_34341 = G__34426;
i__33818_34342 = G__34427;
continue;
} else {
var G__34428 = cljs.core.next(seq__33814_34386__$1);
var G__34429 = null;
var G__34430 = (0);
var G__34431 = (0);
seq__33814_34339 = G__34428;
chunk__33816_34340 = G__34429;
count__33817_34341 = G__34430;
i__33818_34342 = G__34431;
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

var G__33870_34432 = shadow.dom._to_svg;
var G__33871_34433 = "string";
var G__33872_34434 = ((function (G__33870_34432,G__33871_34433){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33870_34432,G__33871_34433))
;
goog.object.set(G__33870_34432,G__33871_34433,G__33872_34434);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33883_34435 = shadow.dom._to_svg;
var G__33884_34436 = "null";
var G__33885_34437 = ((function (G__33883_34435,G__33884_34436){
return (function (_){
return null;
});})(G__33883_34435,G__33884_34436))
;
goog.object.set(G__33883_34435,G__33884_34436,G__33885_34437);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34438 = arguments.length;
var i__4731__auto___34439 = (0);
while(true){
if((i__4731__auto___34439 < len__4730__auto___34438)){
args__4736__auto__.push((arguments[i__4731__auto___34439]));

var G__34440 = (i__4731__auto___34439 + (1));
i__4731__auto___34439 = G__34440;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33887){
var G__33888 = cljs.core.first(seq33887);
var seq33887__$1 = cljs.core.next(seq33887);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33888,seq33887__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33891 = arguments.length;
switch (G__33891) {
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

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33892_34448 = shadow.dom.dom_node(el);
var G__33893_34449 = cljs.core.name(event);
var G__33894_34450 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33892_34448,G__33893_34449,G__33894_34450) : shadow.dom.dom_listen.call(null,G__33892_34448,G__33893_34449,G__33894_34450));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30511__auto___34452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto___34452,buf,chan,event_fn){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto___34452,buf,chan,event_fn){
return (function (state_33899){
var state_val_33900 = (state_33899[(1)]);
if((state_val_33900 === (1))){
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33899__$1,(2),once_or_cleanup);
} else {
if((state_val_33900 === (2))){
var inst_33896 = (state_33899[(2)]);
var inst_33897 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33899__$1 = (function (){var statearr_33901 = state_33899;
(statearr_33901[(7)] = inst_33896);

return statearr_33901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33899__$1,inst_33897);
} else {
return null;
}
}
});})(c__30511__auto___34452,buf,chan,event_fn))
;
return ((function (switch__30258__auto__,c__30511__auto___34452,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30259__auto__ = null;
var shadow$dom$state_machine__30259__auto____0 = (function (){
var statearr_33902 = [null,null,null,null,null,null,null,null];
(statearr_33902[(0)] = shadow$dom$state_machine__30259__auto__);

(statearr_33902[(1)] = (1));

return statearr_33902;
});
var shadow$dom$state_machine__30259__auto____1 = (function (state_33899){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_33899);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e33903){if((e33903 instanceof Object)){
var ex__30262__auto__ = e33903;
var statearr_33904_34456 = state_33899;
(statearr_33904_34456[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34457 = state_33899;
state_33899 = G__34457;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
shadow$dom$state_machine__30259__auto__ = function(state_33899){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30259__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30259__auto____1.call(this,state_33899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30259__auto____0;
shadow$dom$state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30259__auto____1;
return shadow$dom$state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto___34452,buf,chan,event_fn))
})();
var state__30513__auto__ = (function (){var statearr_33905 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_33905[(6)] = c__30511__auto___34452);

return statearr_33905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto___34452,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
