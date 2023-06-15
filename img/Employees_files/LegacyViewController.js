/* Copyright (c) 2014 Intuit Inc. All rights reserved. Unauthorized reproduction is a violation of applicable law. This material contains certain confidential and proprietary information and trade secrets of Intuit Inc. *///>>built
require({cache:{"url:qbo/legacy/templates/LegacyView.html":'\x3cdiv data-dojo-attach-point\x3d"_node"\x3e\x3c/div\x3e'}});
define("qbo/legacy/LegacyViewController","dojo/_base/declare dojo/io-query dijit/DialogUnderlay neo/BaseViewController neo/util/common neo/util/userTiming qbo/base/navigateApp qbo/base/app qbo/widgets/quickfill/stores qbo/addon/AddOnViewController qbo/widgets/acl/AclViewController qbo/txns/txnTypes qbo/util/track dojo/text!./templates/LegacyView.html dojo/topic".split(" "),function(q,k,r,s,t,m,u,h,v,w,x,n,p,y,z){return q([s],{templateString:y,baseClass:"stretch",blockMobile:qbo.mobile,constructor:function(c){var g=
this,l=new r(null);this.blockMobile?this.templateString=(new x({type:"mobile"})).templateString:(this.parseArgs(c),window.NEO=!0,window.appRoute=function(a,f){h.route(a,f)},window.navFromReports=function(a,f,d){qbo.isRUMEnabled&&m.isEnabled()&&m.actionInitiated(n[a]?n[a]:a.toLowerCase());return u.navigate(a,f,d)},window.neoNavigationOverride=function(a){var f="",d="",e,b,c,g;if("viewtxn"===a.substr(0,7)){if("?"===a.charAt(7))e=a.substr(8);else if("/edit"===a.substr(7,5))e=a.substr(13);else if("/new"===
a.substr(7,4)){if(e=a.substr(12))b=k.queryToObject(e),"true"===b.template&&(f="-1",d="\x26templateAction\x3dGET")}else return!1;b=k.queryToObject(e);"undefined"!==typeof b.transactiontype&&(c=b.transactiontype);"undefined"!==typeof b.transactionid&&(f=b.transactionid);"undefined"!==typeof b.memtxn_potentialdate&&(d="\x26templateAction\x3dUSE\x26potentialInstanceDate\x3d"+b.memtxn_potentialdate);"undefined"!==typeof b.template&&"true"===b.template&&(d="\x26templateAction\x3dGET")}else{if("lists/audit/auditdetail"===
a.substr(0,23))return e=a.substr(a.indexOf("?")+1),b=k.queryToObject(e),b.f_elementid&&(d="txnId\x3d"+b.f_elementid),h.route("audithistory?"+d),!0;if("checkregister?"===a.substr(0,14)||"checkregister/view"===a.substr(0,18))c="register",d=a.substr(a.indexOf("?")+1);else if("request/reconcile/reconcileAccount"===a.substr(0,34))h.route("reconcileAccount?"+a.substr(a.indexOf("?")+1));else if("printchecks"===a.substr(0,11))c="printchecks",d=a.substr(a.indexOf("?")+1);else{if("report?rptId"===a.substr(0,
12))return a=a.replace("report?rptId\x3d",""),a=a.replace(/\?/g,"\x26"),h.route("report?rptId\x3d"+a),!0;if("lists/"===a.substr(0,6))switch(e=a.substr(a.indexOf("?")+1),g=a.split("/"),b=k.queryToObject(e),(c=g[1])&&-1!==c.indexOf("?")&&(c=c.substring(0,c.indexOf("?"))),c){case "vendor":c=(f="undefined"!==typeof b.nameid?b.nameid:null)?"vendordetail":"vendorcenter";break;case "employee":f="undefined"!==typeof b.nameid?b.nameid:null;break;case "account":f="undefined"!==typeof b.nameid?b.nameid:null;
break;case "item":f="undefined"!==typeof b.itemid?b.itemid:null;break;case "term":f="undefined"!==typeof b.termid?b.termid:null;break;case "klass":f="undefined"!==typeof b.klassid?b.klassid:null;break;case "department":f="undefined"!==typeof b.departmentid?b.departmentid:null;break;case "paymentmethod":f="undefined"!==typeof b.paymentmethodid?b.paymentmethodid:null;break;case "memorizedtemplate":if("undefined"===typeof g[2]||"list"!==g[2].substr(0,4))return!1;d=a.substr(a.indexOf("?")+1);break;case "audit":return b.f_deletedvoided_only?
d="activityType\x3d2\x26txnType\x3ddeletedVoided":b.a_filtertypes?d="activityType\x3d"+b.a_filtertypes:b.f_listtype&&b.f_elementid?d="listTypeId\x3d"+b.f_listtype+"\x26elementId\x3d"+b.f_elementid:b.f_audit_userid&&(d="userId\x3d"+b.f_audit_userid),h.route("auditlog?"+d),!0;default:return!1}else if(-1<a.indexOf("centers/customer"))e=a.substr(a.indexOf("?")+1),b=k.queryToObject(e),"undefined"!==typeof b.id?(f=b.id,c="customerdetail"):c="customercenter";else if(-1<a.indexOf("centers/vendor"))e=a.substr(a.indexOf("?")+
1),b=k.queryToObject(e),"undefined"!==typeof b.id?(f=b.id,c="vendordetail"):c="vendorcenter";else if(-1<a.indexOf("homepage"))c="homepage";else if(-1<a.indexOf("timetracking/timeedit/view"))c="timetracking",e=a.substr(a.indexOf("?")+1),b=k.queryToObject(e),f=b.activityid;else if(-1<a.indexOf("reconcile_account"))h.route("reconcile?"+a.substr(a.indexOf("?")+1));else if("charge/"===a.substr(0,7))e=a.substr(a.indexOf("?")+1),b=k.queryToObject(e),c="nonpostingcharge",d="\x26nameId\x3d"+b.custid,f="-1";
else if("invoice/"===a.substr(0,8))e=a.substr(a.indexOf("?")+1),b=k.queryToObject(e),c="invoice",d="\x26nameId\x3d"+b.custinput,f="-1";else if("check/"===a.substr(0,6)||"bill/"===a.substr(0,5))e=a.substr(a.indexOf("?")+1),b=k.queryToObject(e),c="check/"===a.substr(0,6)?"check/select"===a.substr(0,12)?"printchecks":"check":"bill",d="",b&&b.acctId&&(d+="\x26acctId\x3d"+b.acctId),b&&b.toBePrinted&&(d+="\x26toBePrinted\x3dtrue"),b&&b.defaultexpenseaccount&&(d+="\x26txnDetailOtherAccountId\x3d"+b.defaultexpenseaccount),
b&&b.defaultexpenseamount&&(d+="\x26txnDetailAmount\x3d"+b.defaultexpenseamount),b&&(b.filter&&"bill payment checks"===b.filter)&&(d+="\x26filter\x3d4"),b&&b.bankaccountid&&(d+="\x26bankaccountid\x3d"+b.bankaccountid),b&&b.transactionid&&(d+="\x26transactionid\x3d"+b.transactionid),f="-1";else if("recvpayment"===a.substr(0,11))e=a.substr(a.indexOf("?")+1),b=k.queryToObject(e),c="payment",d="\x26nameId\x3d"+b.customer_id,f="-1";else if("salesreceipt"===a.substr(0,12))e=a.substr(a.indexOf("?")+1),b=
k.queryToObject(e),c="sales receipt",d="\x26nameId\x3d"+b.custinput,f="-1";else if("create_statement"===a.substr(0,16))c="statement";else if("itemlist"===a.substr(0,8))c="itemlist";else if("chartofaccounts"===a.substr(0,15))c="chartofaccounts";else if("statements/view?"===a.substr(0,16))h.route("viewStatement?url\x3d"+a.substr(16));else return"request/salestaxcenter/home"===a.substr(0,27)?(h.route("salestax"),!0):"creditutilize?"===a.substr(0,14)?(h.route("creditutilize?taxAgencyId\x3d"+a.substr(14)),
!0):"grossadjustment?"===a.substr(0,16)?(h.route("grossadjustment?txnId\x3d-1\x26txnTypeId\x3d59\x26taxAgencyId\x3d"+a.substr(16)),!0):"olb"===a.substr(0,3)?(h.route("banking"),!0):"preferences"===a.substr(0,11)&&qbo.useNewSettings?(h.route("settings"),!0):!1}}return window.navFromReports(c,f,d)},window.bodyClickedPropagation=function(){g.emit("menus-reset")},window.reloadNeoQuickfillStores=function(a){var c;for(c=0;c<a.length;c++)v.publishUpdate(a[c])},window.showModalDialogUnderlayWrapperInNeo=
function(){l.show({},949)},window.hideModalDialogUnderlayWrapperInNeo=function(){!1!==l.get("open")&&l.hide()},window.neoTrackIpdStartAction=function(){p.trackIpdStartAction.apply(p,arguments)},window.neoTrackWorkflowStartAction=function(a,c,d,e){require(["qbo/util/track"],function(b){b.trackWorkflowStartAction(a,c,d,e)})},window.neoTrackWorkflowEndAction=function(a,c,d,e){require(["qbo/util/track"],function(b){b.trackWorkflowEndAction(a,c,d,e)})},window.neoTrackNavigateAction=function(a,c,d){require(["qbo/util/track"],
function(e){e.trackNavigateAction(a,c,d)})},window.showNeoHelpTopic=function(a){a&&h.showHelpTopic(a)},window.callbackFunction=function(){0<arguments.length&&z.publish.apply(this,arguments)}.bind(this));w.registerGlobalCallback()},postMixInProperties:function(){this.inherited(arguments);!this.blockMobile&&"undefined"!==typeof this.page&&(this.url=this.constructUrl())},parseArgs:function(c){c.url?this.url=c.url:this.page=c.page;this.pageArgs=c},constructUrl:function(){var c="frameset?fullPageLoadUrl\x3d",
g="";-1<this.page.indexOf("preferences")&&(g="\x26exitpage\x3dpreferences/general");-1<this.page.indexOf("viewtxn")&&(c="frameset?page\x3d",g="\x26transactiontype\x3d"+this.pageArgs.transactiontype+"\x26transactionid\x3d"+this.pageArgs.transactionid);-1<this.page.indexOf("importEntity")&&(c="frameset?page\x3d");-1<this.page.indexOf("navigator/4")&&(c="frameset?page\x3d",g="\x26mode\x3d"+(this.pageArgs.mode||3));-1<this.page.indexOf("selectprint")&&(c="frameset?page\x3d");-1<this.page.indexOf("audit")&&
(c="frameset?page\x3d",this.pageArgs.a_filterradio&&this.pageArgs.a_filtertypes&&this.pageArgs.f_view&&this.pageArgs.f_deletedvoided_only?g="\x26a_filterradio\x3d"+this.pageArgs.a_filterradio+"\x26a_filtertypes\x3d"+this.pageArgs.a_filtertypes+"\x26f_view\x3d"+this.pageArgs.f_view+"\x26f_deletedvoided_only\x3d"+this.pageArgs.f_deletedvoided_only:this.pageArgs.f_audit_id&&this.pageArgs.f_elementid?(this.page+="/auditdetail",g="\x26f_audit_id\x3d"+this.pageArgs.f_audit_id+"\x26f_elementid\x3d"+this.pageArgs.f_elementid):
"7"===this.pageArgs.f_listtype&&this.pageArgs.f_elementid?(this.page+="/auditdetail",g="\x26f_listtype\x3d"+this.pageArgs.f_listtype+"\x26f_elementid\x3d"+this.pageArgs.f_elementid):this.pageArgs.f_listtype&&this.pageArgs.f_elementid&&(g="?f_listtype\x3d"+this.pageArgs.f_listtype+"\x26f_elementid\x3d"+this.pageArgs.f_elementid));-1<this.page.indexOf("downloadedtxns")&&(c="frameset?page\x3d",null!==this.pageArgs.accountId&&"undefined"!==typeof this.pageArgs.accountId&&(g="\x26accountId\x3d"+this.pageArgs.accountId));
-1<this.page.indexOf("budget")&&(c="frameset?page\x3d",null!==this.pageArgs.budget&&"undefined"!==typeof this.pageArgs.budget&&(g="?budget\x3d"+this.pageArgs.budget));return t.getUrl(c+this.page+g)},getLegacyFrame:function(c){var g=document.getElementById("legacyframe");g?c&&(g.src=c):(this._node.innerHTML="\x3ciframe id\x3d'legacyframe' name\x3d'legacyframe' src\x3d'"+c+"' noresize frameborder\x3d'0' marginwidth\x3d'0' marginheight\x3d'0' width\x3d'100%' height\x3d'100%' class\x3d'dblScrollFix'\x3e\x3c/iframe\x3e",
g=document.getElementById("legacyframe"));return g},getIfrm:function(){var c=this.getLegacyFrame();return c.contentWindow?c.contentWindow:c.contentDocument.document?c.contentDocument.document:c.contentDocument},startup:function(){this.inherited(arguments);this.continueStartup()},continueStartup:function(){this._continueStartup()},_continueStartup:function(){this.blockMobile?this.pageReady():this.getLegacyFrame(this.url).addEventListener("load",this.pageReady.bind(this))},reset:function(c){c.forceFrameReload?
(this.parseArgs(c.params),this.getLegacyFrame(this.constructUrl())):c&&c.dataChanged&&this.getIfrm().document.location.reload()}})});
//@ sourceMappingURL=LegacyViewController.js.map