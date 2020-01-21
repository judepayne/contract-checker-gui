goog.provide('kvlt.platform.websocket');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('kvlt.util');
goog.require('kvlt.websocket');
goog.require('taoensso.timbre');
goog.require('promesa.core');
kvlt.platform.websocket.WebSocket = (((typeof WebSocket !== 'undefined'))?WebSocket:require("websocket").w3cwebsocket);
kvlt.platform.websocket.ws__GT_chan_BANG_ = (function kvlt$platform$websocket$ws__GT_chan_BANG_(ws,chan,format){
return ws.onmessage = (function (p1__41070_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(function (){var G__41076 = format;
var G__41077 = p1__41070_SHARP_.data;
return (kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2 ? kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2(G__41076,G__41077) : kvlt.websocket.format_incoming.call(null,G__41076,G__41077));
})());
});
});
kvlt.platform.websocket.chan__GT_ws_BANG_ = (function kvlt$platform$websocket$chan__GT_ws_BANG_(chan,ws,format){
var c__30511__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30511__auto__){
return (function (){
var f__30512__auto__ = (function (){var switch__30258__auto__ = ((function (c__30511__auto__){
return (function (state_41100){
var state_val_41101 = (state_41100[(1)]);
if((state_val_41101 === (1))){
var state_41100__$1 = state_41100;
var statearr_41106_41198 = state_41100__$1;
(statearr_41106_41198[(2)] = null);

(statearr_41106_41198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41101 === (2))){
var state_41100__$1 = state_41100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41100__$1,(4),chan);
} else {
if((state_val_41101 === (3))){
var inst_41098 = (state_41100[(2)]);
var state_41100__$1 = state_41100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41100__$1,inst_41098);
} else {
if((state_val_41101 === (4))){
var inst_41087 = (state_41100[(7)]);
var inst_41087__$1 = (state_41100[(2)]);
var state_41100__$1 = (function (){var statearr_41109 = state_41100;
(statearr_41109[(7)] = inst_41087__$1);

return statearr_41109;
})();
if(cljs.core.truth_(inst_41087__$1)){
var statearr_41111_41202 = state_41100__$1;
(statearr_41111_41202[(1)] = (5));

} else {
var statearr_41112_41203 = state_41100__$1;
(statearr_41112_41203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41101 === (5))){
var inst_41087 = (state_41100[(7)]);
var inst_41091 = (kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2 ? kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2(format,inst_41087) : kvlt.websocket.format_outgoing.call(null,format,inst_41087));
var inst_41092 = ws.send(inst_41091);
var state_41100__$1 = (function (){var statearr_41117 = state_41100;
(statearr_41117[(8)] = inst_41092);

return statearr_41117;
})();
var statearr_41118_41204 = state_41100__$1;
(statearr_41118_41204[(2)] = null);

(statearr_41118_41204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41101 === (6))){
var state_41100__$1 = state_41100;
var statearr_41119_41205 = state_41100__$1;
(statearr_41119_41205[(2)] = null);

(statearr_41119_41205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41101 === (7))){
var inst_41096 = (state_41100[(2)]);
var state_41100__$1 = state_41100;
var statearr_41121_41206 = state_41100__$1;
(statearr_41121_41206[(2)] = inst_41096);

(statearr_41121_41206[(1)] = (3));


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
});})(c__30511__auto__))
;
return ((function (switch__30258__auto__,c__30511__auto__){
return (function() {
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto__ = null;
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto____0 = (function (){
var statearr_41124 = [null,null,null,null,null,null,null,null,null];
(statearr_41124[(0)] = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto__);

(statearr_41124[(1)] = (1));

return statearr_41124;
});
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto____1 = (function (state_41100){
while(true){
var ret_value__30260__auto__ = (function (){try{while(true){
var result__30261__auto__ = switch__30258__auto__(state_41100);
if(cljs.core.keyword_identical_QMARK_(result__30261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30261__auto__;
}
break;
}
}catch (e41126){if((e41126 instanceof Object)){
var ex__30262__auto__ = e41126;
var statearr_41128_41207 = state_41100;
(statearr_41128_41207[(5)] = ex__30262__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41126;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30260__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41208 = state_41100;
state_41100 = G__41208;
continue;
} else {
return ret_value__30260__auto__;
}
break;
}
});
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto__ = function(state_41100){
switch(arguments.length){
case 0:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto____0.call(this);
case 1:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto____1.call(this,state_41100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$0 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto____0;
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto__.cljs$core$IFn$_invoke$arity$1 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto____1;
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30259__auto__;
})()
;})(switch__30258__auto__,c__30511__auto__))
})();
var state__30513__auto__ = (function (){var statearr_41138 = (f__30512__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30512__auto__.cljs$core$IFn$_invoke$arity$0() : f__30512__auto__.call(null));
(statearr_41138[(6)] = c__30511__auto__);

return statearr_41138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30513__auto__);
});})(c__30511__auto__))
);

return c__30511__auto__;
});
kvlt.platform.websocket.close_event__GT_maybe_error = (function kvlt$platform$websocket$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
var reason = ev.reason;
var code = ev.code;
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),reason,new cljs.core.Keyword(null,"error","error",-978969032),code,new cljs.core.Keyword(null,"type","type",1174270348),code,new cljs.core.Keyword(null,"status","status",-1997798413),(0)], null));
}
});
kvlt.platform.websocket.request_BANG_ = (function kvlt$platform$websocket$request_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41209 = arguments.length;
var i__4731__auto___41210 = (0);
while(true){
if((i__4731__auto___41210 < len__4730__auto___41209)){
args__4736__auto__.push((arguments[i__4731__auto___41210]));

var G__41211 = (i__4731__auto___41210 + (1));
i__4731__auto___41210 = G__41211;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__41156){
var vec__41157 = p__41156;
var map__41160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41157,(0),null);
var map__41160__$1 = (((((!((map__41160 == null))))?(((((map__41160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41160):map__41160);
var read_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"read-chan","read-chan",-311487928));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var write_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41160__$1,new cljs.core.Keyword(null,"write-chan","write-chan",-1022958832));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41160__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var ws = (new kvlt.platform.websocket.WebSocket(url));
var in$ = (function (){var or__4131__auto__ = read_chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var out = (function (){var or__4131__auto__ = write_chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var chan = kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic(in$,out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (ws,in$,out,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
return ws.close();
});})(ws,in$,out,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_))
,new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null)], 0));
var resolved_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return promesa.core.promise(((function (ws,in$,out,chan,resolved_QMARK_,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_){
return (function (resolve,reject){
kvlt.platform.websocket.ws__GT_chan_BANG_(ws,in$,format);

kvlt.platform.websocket.chan__GT_ws_BANG_(out,ws,format);

ws.onopen = ((function (ws,in$,out,chan,resolved_QMARK_,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
cljs.core.reset_BANG_(resolved_QMARK_,true);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(chan) : resolve.call(null,chan));
});})(ws,in$,out,chan,resolved_QMARK_,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_))
;

return ws.onclose = ((function (ws,in$,out,chan,resolved_QMARK_,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_){
return (function (event){
var temp__5720__auto__ = kvlt.platform.websocket.close_event__GT_maybe_error(event);
if(cljs.core.truth_(temp__5720__auto__)){
var error = temp__5720__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"kvlt.platform.websocket",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (error,temp__5720__auto__,ws,in$,out,chan,resolved_QMARK_,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Websocket onclose error",error], null);
});})(error,temp__5720__auto__,ws,in$,out,chan,resolved_QMARK_,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_))
,null)),null,1327336805);

if(cljs.core.truth_(cljs.core.deref(resolved_QMARK_))){
} else {
(reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null,error));
}

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(ws,in$,out,chan,resolved_QMARK_,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_))
;
});})(ws,in$,out,chan,resolved_QMARK_,vec__41157,map__41160,map__41160__$1,read_chan,format,write_chan,close_QMARK_))
);
});

kvlt.platform.websocket.request_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.websocket.request_BANG_.cljs$lang$applyTo = (function (seq41152){
var G__41153 = cljs.core.first(seq41152);
var seq41152__$1 = cljs.core.next(seq41152);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41153,seq41152__$1);
});


//# sourceMappingURL=kvlt.platform.websocket.js.map
