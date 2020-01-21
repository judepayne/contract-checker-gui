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
contract_checker_gui.home.local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"producer-schema","producer-schema",-195762973),"",new cljs.core.Keyword(null,"consumer-schema","consumer-schema",974955272),"",new cljs.core.Keyword(null,"svg","svg",856789142),"<div />",new cljs.core.Keyword(null,"errors","errors",-908790718),null], null));
contract_checker_gui.home.producer_area = (function contract_checker_gui$home$producer_area(state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"producer-area",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Paste the producer schema here",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"producer-schema","producer-schema",-195762973).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"rows","rows",850049680),(12),new cljs.core.Keyword(null,"cols","cols",-1914801295),(50),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34289_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"producer-schema","producer-schema",-195762973),p1__34289_SHARP_.target.value);
})], null)], null);
});
contract_checker_gui.home.home_page = (function contract_checker_gui$home$home_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_checker_gui.home.producer_area,contract_checker_gui.home.local_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Debug: @local-state"], null),cljs.core.deref(contract_checker_gui.home.local_state)], null)], null);
});

//# sourceMappingURL=contract_checker_gui.home.js.map
