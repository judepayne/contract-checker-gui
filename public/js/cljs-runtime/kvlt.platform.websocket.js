goog.provide('kvlt.platform.websocket');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('kvlt.util');
goog.require('kvlt.websocket');
goog.require('taoensso.timbre');
goog.require('promesa.core');
kvlt.platform.websocket.WebSocket = (((typeof WebSocket !== 'undefined'))?WebSocket:require("websocket").w3cwebsocket);
kvlt.platform.websocket.ws__GT_chan_BANG_ = (function kvlt$platform$websocket$ws__GT_chan_BANG_(ws,chan,format){
return (ws.onmessage = (function (p1__46609_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(function (){var G__46618 = format;
var G__46619 = p1__46609_SHARP_.data;
return (kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2 ? kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2(G__46618,G__46619) : kvlt.websocket.format_incoming.call(null,G__46618,G__46619));
})());
}));
});
kvlt.platform.websocket.chan__GT_ws_BANG_ = (function kvlt$platform$websocket$chan__GT_ws_BANG_(chan,ws,format){
var c__29262__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29263__auto__ = (function (){var switch__29025__auto__ = (function (state_46646){
var state_val_46647 = (state_46646[(1)]);
if((state_val_46647 === (1))){
var state_46646__$1 = state_46646;
var statearr_46653_46735 = state_46646__$1;
(statearr_46653_46735[(2)] = null);

(statearr_46653_46735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46647 === (2))){
var state_46646__$1 = state_46646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46646__$1,(4),chan);
} else {
if((state_val_46647 === (3))){
var inst_46643 = (state_46646[(2)]);
var state_46646__$1 = state_46646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46646__$1,inst_46643);
} else {
if((state_val_46647 === (4))){
var inst_46631 = (state_46646[(7)]);
var inst_46631__$1 = (state_46646[(2)]);
var state_46646__$1 = (function (){var statearr_46657 = state_46646;
(statearr_46657[(7)] = inst_46631__$1);

return statearr_46657;
})();
if(cljs.core.truth_(inst_46631__$1)){
var statearr_46662_46826 = state_46646__$1;
(statearr_46662_46826[(1)] = (5));

} else {
var statearr_46665_46827 = state_46646__$1;
(statearr_46665_46827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46647 === (5))){
var inst_46631 = (state_46646[(7)]);
var inst_46636 = (kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2 ? kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2(format,inst_46631) : kvlt.websocket.format_outgoing.call(null,format,inst_46631));
var inst_46637 = ws.send(inst_46636);
var state_46646__$1 = (function (){var statearr_46668 = state_46646;
(statearr_46668[(8)] = inst_46637);

return statearr_46668;
})();
var statearr_46669_46831 = state_46646__$1;
(statearr_46669_46831[(2)] = null);

(statearr_46669_46831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46647 === (6))){
var state_46646__$1 = state_46646;
var statearr_46670_46832 = state_46646__$1;
(statearr_46670_46832[(2)] = null);

(statearr_46670_46832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46647 === (7))){
var inst_46641 = (state_46646[(2)]);
var state_46646__$1 = state_46646;
var statearr_46673_46833 = state_46646__$1;
(statearr_46673_46833[(2)] = inst_46641);

(statearr_46673_46833[(1)] = (3));


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
});
return (function() {
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto__ = null;
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto____0 = (function (){
var statearr_46678 = [null,null,null,null,null,null,null,null,null];
(statearr_46678[(0)] = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto__);

(statearr_46678[(1)] = (1));

return statearr_46678;
});
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto____1 = (function (state_46646){
while(true){
var ret_value__29027__auto__ = (function (){try{while(true){
var result__29028__auto__ = switch__29025__auto__(state_46646);
if(cljs.core.keyword_identical_QMARK_(result__29028__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29028__auto__;
}
break;
}
}catch (e46682){if((e46682 instanceof Object)){
var ex__29029__auto__ = e46682;
var statearr_46683_46840 = state_46646;
(statearr_46683_46840[(5)] = ex__29029__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46682;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29027__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46843 = state_46646;
state_46646 = G__46843;
continue;
} else {
return ret_value__29027__auto__;
}
break;
}
});
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto__ = function(state_46646){
switch(arguments.length){
case 0:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto____0.call(this);
case 1:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto____1.call(this,state_46646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$0 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto____0;
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto__.cljs$core$IFn$_invoke$arity$1 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto____1;
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__29026__auto__;
})()
})();
var state__29264__auto__ = (function (){var statearr_46684 = (f__29263__auto__.cljs$core$IFn$_invoke$arity$0 ? f__29263__auto__.cljs$core$IFn$_invoke$arity$0() : f__29263__auto__.call(null));
(statearr_46684[(6)] = c__29262__auto__);

return statearr_46684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29264__auto__);
}));

return c__29262__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___46845 = arguments.length;
var i__4790__auto___46846 = (0);
while(true){
if((i__4790__auto___46846 < len__4789__auto___46845)){
args__4795__auto__.push((arguments[i__4790__auto___46846]));

var G__46849 = (i__4790__auto___46846 + (1));
i__4790__auto___46846 = G__46849;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46704){
var vec__46705 = p__46704;
var map__46708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46705,(0),null);
var map__46708__$1 = (((((!((map__46708 == null))))?(((((map__46708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46708):map__46708);
var read_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46708__$1,new cljs.core.Keyword(null,"read-chan","read-chan",-311487928));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46708__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var write_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46708__$1,new cljs.core.Keyword(null,"write-chan","write-chan",-1022958832));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46708__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var ws = (new kvlt.platform.websocket.WebSocket(url));
var in$ = (function (){var or__4185__auto__ = read_chan;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var out = (function (){var or__4185__auto__ = write_chan;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var chan = kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic(in$,out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return ws.close();
}),new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null)], 0));
var resolved_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return promesa.core.promise((function (resolve,reject){
kvlt.platform.websocket.ws__GT_chan_BANG_(ws,in$,format);

kvlt.platform.websocket.chan__GT_ws_BANG_(out,ws,format);

(ws.onopen = (function (){
cljs.core.reset_BANG_(resolved_QMARK_,true);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(chan) : resolve.call(null,chan));
}));

return (ws.onclose = (function (event){
var temp__5735__auto__ = kvlt.platform.websocket.close_event__GT_maybe_error(event);
if(cljs.core.truth_(temp__5735__auto__)){
var error = temp__5735__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"kvlt.platform.websocket",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Websocket onclose error",error], null);
}),null)),null,-400419030);

if(cljs.core.truth_(cljs.core.deref(resolved_QMARK_))){
} else {
(reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null,error));
}

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
}));
}));
}));

(kvlt.platform.websocket.request_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kvlt.platform.websocket.request_BANG_.cljs$lang$applyTo = (function (seq46697){
var G__46698 = cljs.core.first(seq46697);
var seq46697__$1 = cljs.core.next(seq46697);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46698,seq46697__$1);
}));


//# sourceMappingURL=kvlt.platform.websocket.js.map
