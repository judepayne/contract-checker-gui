goog.provide('contract_checker_gui.home');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('accountant.core');
goog.require('kvlt.core');
goog.require('promesa.core');
goog.require('promesa.async_cljs');
goog.require('goog.dom');
contract_checker_gui.home.log = console.log;
contract_checker_gui.home.local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"producer-schema","producer-schema",-195762973),"",new cljs.core.Keyword(null,"consumer-schema","consumer-schema",974955272),"",new cljs.core.Keyword(null,"svg","svg",856789142),"<div />",new cljs.core.Keyword(null,"errors","errors",-908790718),""], null));
contract_checker_gui.home.producer_area = (function contract_checker_gui$home$producer_area(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"producer-area",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Paste the producer schema here",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"producer-schema","producer-schema",-195762973).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"rows","rows",850049680),(12),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48825_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"producer-schema","producer-schema",-195762973),p1__48825_SHARP_.target.value);
})], null)], null);
});
contract_checker_gui.home.consumer_area = (function contract_checker_gui$home$consumer_area(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"consumer-area",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Paste the consumer schema here",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"consumer-schema","consumer-schema",974955272).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"rows","rows",850049680),(12),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__48826_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"consumer-schema","consumer-schema",974955272),p1__48826_SHARP_.target.value);
})], null)], null);
});
contract_checker_gui.home.aws_url = "https://8ty9wnwd19.execute-api.eu-west-2.amazonaws.com/beta";
contract_checker_gui.home.json_data = (function contract_checker_gui$home$json_data(){
return ["{\"consumer\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"consumer-schema","consumer-schema",974955272).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(contract_checker_gui.home.local_state))),",\"producer\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"producer-schema","producer-schema",-195762973).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(contract_checker_gui.home.local_state))),"}"].join('');
});
contract_checker_gui.home.clj__GT_json = (function contract_checker_gui$home$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js(ds));
});
contract_checker_gui.home.json__GT_clj = (function contract_checker_gui$home$json__GT_clj(ds){
(contract_checker_gui.home.log.cljs$core$IFn$_invoke$arity$1 ? contract_checker_gui.home.log.cljs$core$IFn$_invoke$arity$1(ds) : contract_checker_gui.home.log.call(null,ds));

return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(ds),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
contract_checker_gui.home.post = (function contract_checker_gui$home$post(url,json_data){
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(kvlt.core.request_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"body","body",-2049205669),json_data,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570)], null)),(function (e){
var G__48828 = new cljs.core.Keyword(null,"type","type",1174270348);
var fexpr__48827 = cljs.core.ex_data(e);
return (fexpr__48827.cljs$core$IFn$_invoke$arity$1 ? fexpr__48827.cljs$core$IFn$_invoke$arity$1(G__48828) : fexpr__48827.call(null,G__48828));
})),(function (p__48829){
var map__48830 = p__48829;
var map__48830__$1 = (((((!((map__48830 == null))))?(((((map__48830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48830):map__48830);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48830__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48830__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.core.promise(body);
}));
});
contract_checker_gui.home.put_result = (function contract_checker_gui$home$put_result(result){
(contract_checker_gui.home.log.cljs$core$IFn$_invoke$arity$1 ? contract_checker_gui.home.log.cljs$core$IFn$_invoke$arity$1(result) : contract_checker_gui.home.log.call(null,result));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(contract_checker_gui.home.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"errors","errors",-908790718),result);
});
contract_checker_gui.home.compare_contract = (function contract_checker_gui$home$compare_contract(){
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((function (error){
return contract_checker_gui.home.put_result(error.message);
}),promesa.core.map(contract_checker_gui.home.put_result,promesa.core.map(contract_checker_gui.home.json__GT_clj,contract_checker_gui.home.post(contract_checker_gui.home.aws_url,contract_checker_gui.home.json_data()))));
});
contract_checker_gui.home.compare_button = (function contract_checker_gui$home$compare_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"compare-button",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),contract_checker_gui.home.compare_contract], null),"Compare Contracts"], null);
});
contract_checker_gui.home.display_errors = (function contract_checker_gui$home$display_errors(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref(contract_checker_gui.home.local_state)], null);
});
});
contract_checker_gui.home.home_page = (function contract_checker_gui$home$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_checker_gui.home.producer_area,contract_checker_gui.home.local_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_checker_gui.home.consumer_area,contract_checker_gui.home.local_state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_checker_gui.home.compare_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_checker_gui.home.display_errors], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Debug: @local-state"], null)], null),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(contract_checker_gui.home.local_state))], null);
});

//# sourceMappingURL=contract_checker_gui.home.js.map
