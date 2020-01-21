goog.provide('contract_checker_gui.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('contract_checker_gui.home');
goog.require('secretary.core');
goog.require('accountant.core');
contract_checker_gui.core.selected_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(contract_checker_gui.home.home_page);
contract_checker_gui.core.page = (function contract_checker_gui$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(contract_checker_gui.core.selected_page)], null);
});
contract_checker_gui.core.current_page = (function contract_checker_gui$core$current_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.core","div.core",-2132500478),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_checker_gui.core.page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.site","span.site",302812633),"contract-checker"], null)," is a free utility by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/judepayne",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),"Jude Payne & Gunjan Kothari"], null),"."], null)], null)], null);
});
var action__46441__auto___46977 = (function (params__46442__auto__){
if(cljs.core.map_QMARK_(params__46442__auto__)){
var map__46970 = params__46442__auto__;
var map__46970__$1 = (((((!((map__46970 == null))))?(((((map__46970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46970):map__46970);
return cljs.core.reset_BANG_(contract_checker_gui.core.selected_page,contract_checker_gui.home.home_page);
} else {
if(cljs.core.vector_QMARK_(params__46442__auto__)){
var vec__46972 = params__46442__auto__;
return cljs.core.reset_BANG_(contract_checker_gui.core.selected_page,contract_checker_gui.home.home_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__46441__auto___46977);

contract_checker_gui.core.get_app_element = (function contract_checker_gui$core$get_app_element(){
return goog.dom.getElement("app");
});
contract_checker_gui.core.mount = (function contract_checker_gui$core$mount(el){
var G__46975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [contract_checker_gui.core.current_page], null);
var G__46976 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__46975,G__46976) : reagent.core.render_component.call(null,G__46975,G__46976));
});
contract_checker_gui.core.mount_app_element = (function contract_checker_gui$core$mount_app_element(){
var temp__5720__auto__ = contract_checker_gui.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return contract_checker_gui.core.mount(el);
} else {
return null;
}
});
contract_checker_gui.core.init_BANG_ = (function contract_checker_gui$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return contract_checker_gui.core.mount_app_element();
});
contract_checker_gui.core.init_BANG_();
contract_checker_gui.core.on_reload = (function contract_checker_gui$core$on_reload(){
return contract_checker_gui.core.mount_app_element();
});

//# sourceMappingURL=contract_checker_gui.core.js.map
