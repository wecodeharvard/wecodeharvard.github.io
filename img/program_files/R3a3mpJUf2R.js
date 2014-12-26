/*!CK:81794114!*//*1418641253,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["K5xwW"]); }

__d("reactDeepClone",["ReactElement","cloneWithProps"],function(a,b,c,d,e,f,g,h){'use strict';var i=function(j){if(g.isValidElement(j)){var k=h(j,{}),l=k.props.children;k.props.children=i(l);return k;}if(Array.isArray(j))return j.map(i);if(typeof j==='object'&&j){var m={};for(var n in j)m[n]=i(j[n]);return m;}return j;};e.exports=i;},null);
__d("ScrollColumn.react",["cx","invariant","throttle","tidyEvent","Arbiter","Event","React","Vector","ViewportBounds"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p='ScrollColumn/adjust',q=m.createClass({displayName:"ScrollColumn",propTypes:{topOffset:m.PropTypes.number,zIndex:m.PropTypes.number},getDefaultProps:function(){return {topOffset:0,zIndex:0};},_scroll:0,_scrollDelta:0,getInitialState:function(){return {fixed:null,fixedBottom:0,fixedTop:this.props.topOffset,top:0};},render:function(){var r='auto',s=this.state.fixedLeft,t='auto';if(this.state.fixed==='bottom'){r=this.state.fixedBottom;}else if(this.state.fixed==='top'){t=this.state.fixedTop;}else{s='auto';t=this.state.top;}return (m.createElement("div",{className:"_5ss7",ref:"container"},m.createElement("div",{className:(("_5ss8")+(this.state.fixed?' '+"fixed_always":'')),ref:"column",style:{bottom:r,left:s,top:t,zIndex:this.props.zIndex}},this.props.children)));},componentDidMount:function(){this.setState({adjustEventListener:j(k.subscribe(p,function(){this._adjust();}.bind(this))),resizeListener:j(l.listen(window,'resize',i(this._adjust))),scrollListener:j(l.listen(window,'scroll',this._onScroll)),viewportBoundsUpdateListener:j(o.subscribe('change',this._adjust))});this._adjust();},componentDidUpdate:function(r,s){if(s.fixed!==this.state.fixed)k.inform('reflow');},componentWillUnmount:function(){this.state.adjustEventListener.unsubscribe();this.state.resizeListener.remove();this.state.scrollListener.remove();},_onScroll:function(event){var r=n.getScrollPosition().y;this._scrollDelta=r-this._scroll;this._scroll=r;this._adjust();},_adjust:function(){if(!this.isMounted())return;this._updateContainerHeight();this._updateColumnWidth();if(this._isContainerBelowViewportTop()){this._setNotFixed(0);return;}if(!this._isColumnLargerThanViewport()){this._setFixedToTop();return;}if(this._scrollDelta>0)if(this._isBottomOfColumnVisible()){this._setFixedToBottom();return;}if(this._scrollDelta<0)if(this._isTopOfColumnVisible()){this._setFixedToTop();return;}var r=this._getTopPositionForRef('column'),s=this._getTopPositionForRef('container'),t=r-s;this._setNotFixed(t);},_getTopPositionForRef:function(r){var s=this.refs[r];h(s);var t=n.getElementPosition(s.getDOMNode(),'viewport').y;if(this._scroll<0)t+=this._scroll;return t;},_getTopBoundWithOffset:function(){return o.getTop()+this.props.topOffset;},_isContainerBelowViewportTop:function(){var r=this._getTopPositionForRef('container');return r>=this._getTopBoundWithOffset();},_isColumnLargerThanViewport:function(){var r=n.getViewportDimensions().y-o.getBottom()-this._getTopBoundWithOffset();return this.refs.column.getDOMNode().offsetHeight>r;},_isBottomOfColumnVisible:function(){var r=this._getTopPositionForRef('column'),s=n.getElementDimensions(this.refs.column.getDOMNode(),'viewport').y,t=r+s;return t<=n.getViewportDimensions().y-o.getBottom();},_isTopOfColumnVisible:function(){var r=this._getTopPositionForRef('column');return r>=this._getTopBoundWithOffset();},_getFixedLeft:function(){return (n.getElementPosition(this.refs.container.getDOMNode(),'viewport').x);},_setFixedToBottom:function(){this.setState({fixed:'bottom',fixedBottom:o.getBottom(),fixedLeft:this._getFixedLeft()});},_setFixedToTop:function(){this.setState({fixed:'top',fixedLeft:this._getFixedLeft(),fixedTop:this._getTopBoundWithOffset()});},_setNotFixed:function(r){this.setState({fixed:false,top:r});},_updateContainerHeight:function(){this.refs.container.getDOMNode().style.height=this.refs.column.getDOMNode().offsetHeight+'px';},_updateColumnWidth:function(){this.refs.column.getDOMNode().style.width=this.refs.container.getDOMNode().offsetWidth+'px';}});q.EVENT_SHOULD_ADJUST=p;e.exports=q;},null);
__d("TabBarItem.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){var j=g.createClass({displayName:"TabBarItem",getDefaultProps:function(){return {wrapper:'li'};},render:function(){var k=(("_45hc")+(this.props.selected?' '+"_1hqh":'')),l=this.props.wrapper,m=this.props.href||'#',n=this.props.ajaxify,o=this.props.rel;if(l)return (g.createElement(l,g.__spread({},this.props,{className:i(this.props.className,k)}),g.createElement("a",{ajaxify:n,href:m,rel:o},this.props.children)));return (g.createElement("a",g.__spread({},this.props,{ajaxify:n,className:i(this.props.className,k),href:m,rel:o}),this.props.children));}});e.exports=j;},null);
__d("TabBarDropdownItem.react",["ContextualDialogArrow","ContextualLayerAutoFlip","InlineBlock.react","PopoverMenu.react","React","ReactXUIMenu","TabBarItem.react","cx","onlyChild","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=b('ReactXUIMenu').Item,r=k.createClass({displayName:"TabBarDropdownItem",propTypes:{tabComponent:k.PropTypes.func},getDefaultProps:function(){return {tabComponent:m};},_renderTab:function(){var s=this.props.tabComponent,t="_45hd _45hc";return (k.createElement(s,k.__spread({},this.props,{wrapper:false,className:p(this.props.className,t)}),k.createElement("span",{className:"_1b0"},this.props.label)));},render:function(){if(this.props.children){var s=k.createElement(l,null,this.props.children.map(this.convertTabItemWrapperToMenuItem)),t=[h,g];return (k.createElement("li",{className:"_45hd"},k.createElement(j,{menu:s,layerBehaviors:t},this._renderTab())));}else return (k.createElement("li",{className:"_45hd"},k.createElement(i,null,this._renderTab())));},convertTabItemWrapperToMenuItem:function(s){var t=o(s.type.getComponent(s.props));return (k.createElement(q,k.__spread({},t.props,{onclick:t.props.onClick}),t.props.children));}});e.exports=r;},null);
__d("TabBar.react",["React","ReactChildren","TabBarDropdownItem.react","TabBarItem.react","cloneWithProps","cx","fbt","reactDeepClone","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p="More",q=g.createClass({displayName:"TabBarItemWrapper",statics:{getComponent:function(s){return s.component;}},render:function(){return this.props.component;}}),r=g.createClass({displayName:"TabBar",propTypes:{activeTabKey:g.PropTypes.string,defaultActiveTabKey:g.PropTypes.string,maxTabsVisible:g.PropTypes.number,moreLabel:g.PropTypes.string,onTabClick:g.PropTypes.func,tabComponent:g.PropTypes.func,onWidthCalculated:g.PropTypes.func,shouldCalculateVisibleTabs:g.PropTypes.bool},getDefaultProps:function(){return {tabComponent:j,maxTabsVisible:Infinity,moreLabel:p,onTabClick:function(){return true;},shouldCalculateVisibleTabs:true};},getInitialState:function(){return {activeTabKey:this.props.defaultActiveTabKey,visibleTabs:0,shouldCalculateVisibleTabs:true};},setWidth:function(s){this.getDOMNode().style.width=s;this.setState({shouldCalculateVisibleTabs:true});},render:function(){var s=[];h.forEach(this.props.children,function(ca){if(ca)s.push(ca);});var t=s.length,u=this.getActiveTabIndex(),v=s[u];if(this.state.shouldCalculateVisibleTabs){for(var w=0,x=s.length;w<x;w++)s[w].props.selected=w===u;s=s.map(function(ca,da){return (g.createElement(q,{key:ca.key,component:ca,ref:da}));});if(t>2)s.push(g.createElement(i,{key:"_dropdown",ref:"more",label:this.props.moreLabel,tabComponent:this.props.tabComponent}));}else{s=s.map(function(ca,da){ca=k(ca,{key:ca.key,selected:v&&v.key===ca.key,onClick:this.onTabClick.bind(this,ca.key)});return (g.createElement(q,{key:ca.key,component:ca,ref:da}));}.bind(this));var y=this.state.visibleTabs;if(y>0){var z;if(u<y){z=s.splice(y);}else{v=s.splice(u,1)[0];z=s.splice(y-1);s.push(v);}if(z.length)s.push(g.createElement(i,{key:"_dropdown",label:this.props.moreLabel,tabComponent:this.props.tabComponent},z));}else{var aa=v;if(!v)aa=q.getComponent(s[0].props);var ba=n(aa.props.children);s=g.createElement(i,{label:ba,tabComponent:this.props.tabComponent,selected:this.getActiveTabIndex()!==-1},s);}}return (g.createElement("ul",g.__spread({},this.props,{className:o(this.props.className,"_43o4")}),s));},componentDidMount:function(){this.calculateVisibleTabs();this.calculateWidth();},componentWillReceiveProps:function(s){this.setState({shouldCalculateVisibleTabs:true});},componentDidUpdate:function(){if(this.state.shouldCalculateVisibleTabs)this.calculateVisibleTabs();this.calculateWidth();},calculateWidth:function(){if(this.props.onWidthCalculated)this.props.onWidthCalculated(this.getDOMNode().clientWidth);},calculateVisibleTabs:function(){var s=[];h.forEach(this.props.children,function(ca){if(ca)s.push(ca);});var t=s.length;if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabs:Math.min(t,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});return;}var u=[];for(var v=0;v<t;v++)u.push(this.refs[v].getDOMNode().offsetWidth);var w=this.getActiveTabIndex();if(w!==-1){s.unshift(s.splice(w,1)[0]);u.unshift(u.splice(w,1)[0]);}var x=this.getDOMNode().offsetWidth,y=0,z=0;for(v=0;v<t;v++){var aa=u[v];if(z+aa>x){if(y>0&&t>2){var ba=this.refs.more.getDOMNode().offsetWidth;while(y>0&&(z+ba>x||t-y<2)){y--;z-=u[y];}}else y=0;break;}y++;z+=aa;}this.setState({visibleTabs:Math.min(y,this.props.maxTabsVisible),shouldCalculateVisibleTabs:false});},getActiveTabIndex:function(){var s=this.props.activeTabKey||this.state.activeTabKey,t=-1;if(s)h.forEach(this.props.children,function(u,v){if(u&&u.key===s)t=v;});return t;},onTabClick:function(s,event){var t=this.props.onTabClick(s,event);if(t!==false)this.setState({activeTabKey:s,shouldCalculateVisibleTabs:true});return t;}});r.Tab=j;r.DropdownItem=i;e.exports=r;},null);
__d("XUIPageNavigationItem.react",["React","ReactPropTypes","TabBarItem.react","cx","fbt","merge","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=g.createClass({displayName:"XUIPageNavigationItem",statics:{propsForMenuItem:function(o){return l(o,{className:"_5vwz _5vw-"});}},propTypes:{selected:h.bool},getDefaultProps:function(){return {selected:false};},render:function(){var o=(("_5vwz")+(this.props.selected?' '+"_5vwy":'')),p=null,q=null;if(this.props.selected){p=g.createElement("span",{className:"_13xf"});q=g.createElement("span",{className:"accessible_elem"},"selected");}return (g.createElement(i,g.__spread({},this.props,{className:m(this.props.className,o)}),this.props.children,q,p));}});e.exports=n;},null);
__d("XUIPageNavigationGroup.react",["React","ReactPropTypes","TabBar.react","XUIPageNavigationItem.react","warning"],function(a,b,c,d,e,f,g,h,i,j,k){var l=g.createClass({displayName:"XUIPageNavigationGroup",propTypes:{moreLabel:h.string,maxTabsVisible:function(m,n,o){var p=m[n];k(p==null||(typeof p==='number'&&p>=0),'Invalid `%s` supplied to `%s`, expected positive integer.',n,o);}},getDefaultProps:function(){return {maxTabsVisible:Infinity};},setWidth:function(m){this.refs.bar.setWidth(m);},render:function(){return g.createElement(i,g.__spread({},this.props,{ref:"bar"}),this.props.children);}});l.Item=j;e.exports=l;},null);
__d("XUIPageNavigation.react",["Arbiter","CSS","DOMQuery","Event","LeftRight.react","React","ReactChildren","ReactPropTypes","SubscriptionsHandler","TinyViewport","Vector","ViewportBounds","XUIPageNavigationGroup.react","cloneWithProps","csx","cx","invariant","joinClasses","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){var z=15,aa='bluebar',ba='caret',ca=l.createClass({displayName:"XUIPageNavigation",propTypes:{selectedIndicator:n.oneOf([ba,aa]),caretColor:n.oneOf(['bg-blue','fbui-desktop-wash','fbui-desktop-background-light','fbui-red','fbui-green','fbui-desktop-divider-dark','white']),size:n.oneOf(['small','medium']),scrollThreshold:n.number},getDefaultProps:function(){return {selectedIndicator:aa,caretColor:'fbui-desktop-wash',size:'medium',scrollThreshold:0};},getInitialState:function(){return {activeTabKey:(void 0)};},componentDidMount:function(){this._subscriptions=new o();this.resizeNavbarGroups();this._listenForNavbarResize();var da="^.fixed_elem._5vx1";this.wrapper=i.scry(this.getDOMNode(),da)[0];if(this.wrapper){this._setViewportBounds();this._subscriptions.addSubscriptions(p.subscribe('change',function(){if(p.isTiny()){this._bound.remove();}else this._setViewportBounds();}.bind(this)));}if(this.wrapper||i.scry(this.getDOMNode(),"^._k").length)this._showDropshadowOnScroll();},componentWillUnmount:function(){this._subscriptions.release();},onTabClick:function(da,event){if(this.props.onTabClick){var ea=this.props.onTabClick(da,event);if(!ea)return ea;}if(!event.nativeEvent.isDefaultRequested())this.setState({activeTabKey:da});},onWidthCalculated:function(da,ea){this[da?'_rightWidth':'_leftWidth']=ea;},render:function(){var da=this.props.selectedIndicator,ea=this.props.size,fa=(("_5vx2")+(ea==='small'?' '+"_5vx3":'')+(ea==='medium'?' '+"_5vx4":'')+(da===ba?' '+"_5vx5":'')+(da===aa?' '+"_5vx6":'')),ga=null;if(da===ba){var ha=this.props.caretColor;ga=((ha==='bg-blue'?"_2d2c":'')+(ha==='fbui-desktop-wash'?' '+"_4_np":'')+(ha==='fbui-desktop-background-light'?' '+"_4_nr":'')+(ha==='fbui-red'?' '+"_4_ns":'')+(ha==='fbui-green'?' '+"_4_nv":'')+(ha==='fbui-desktop-divider-dark'?' '+"_4_nz":'')+(ha==='white'?' '+"_5-f":''));}var ia=x(fa,ga,this.props.className),ja=[],ka=this.props.activeTabKey||this.state.activeTabKey||this.props.defaultActiveTabKey;m.forEach(this.props.children,function(la,ma){var na={onTabClick:this.onTabClick,activeTabKey:ka,onWidthCalculated:this.onWidthCalculated.bind(this,ma),ref:ma?'right':'left',key:ma};ja.push(t(la,na));}.bind(this));w(ja.length===1||ja.length===2);return (l.createElement("div",{className:ia},l.createElement(k,{className:"_5vx7"},ja)));},_setViewportBounds:function(){var da=this.wrapper.offsetHeight,ea=r.getTop();this._bound=r.addTop(ea+da);g.subscribe('page_transition',function(){this._bound.remove();});},_listenForNavbarResize:function(){this._subscriptions.addSubscriptions(j.listen(window,'resize',y(this.resizeNavbarGroups,30)));},_showDropshadowOnScroll:function(){this._subscriptions.addSubscriptions(j.listen(window,'scroll',function(){var da=q.getScrollPosition().y>this.props.scrollThreshold;if(this._hasDropshadow===da)return;this._hasDropshadow=da;h.conditionClass(this.getDOMNode(),"_51j8",da);}.bind(this)));},resizeNavbarGroups:function(){var da=this.getDOMNode().clientWidth;if(da===this._currentWidth)return;this._currentWidth=da;var ea;if(this.refs.right){ea=da-this._rightWidth-z;if(ea<this._rightWidth)ea=this._rightWidth+z;}else ea=da;this.refs.left.setWidth(ea+'px');}});ca.Group=s;ca.Item=s.Item;ca.Indicator={BlueBar:aa,Caret:ba};e.exports=ca;},null);
__d("XComposerXActorChangeControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/composerx\/actor\/change\/",{composer_id:{type:"String",required:true},entry_point:{type:"String",required:true},from_actor_id:{type:"Int",required:true},target_id:{type:"Int",required:true}});},null);
__d("XComposerXActorSelectorNuxSeenControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/composerx\/actor_selector\/nux\/seen\/",{is_covered:{type:"Bool"}});},null);
__d("ComposerXActorSelector.react",["ActorSelector.react","ActorURI","Arbiter","AsyncRequest","React","emptyFunction","XComposerXActorChangeControllerURIBuilder","XComposerXActorSelectorNuxSeenControllerURIBuilder","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=k.createClass({displayName:"ComposerXActorSelector",propTypes:{actorIDs:k.PropTypes.array.isRequired,composerID:k.PropTypes.string.isRequired,coverEnabled:k.PropTypes.bool.isRequired,entryPoint:k.PropTypes.string.isRequired,nuxEnabledCovered:k.PropTypes.bool,nuxEnabledUncovered:k.PropTypes.bool,nuxHoverContext:k.PropTypes.object,selectedActorID:k.PropTypes.string.isRequired,settingsURI:k.PropTypes.string,targetID:k.PropTypes.string.isRequired},getInitialState:function(){return {loading:false};},componentWillMount:function(){i.subscribe('ComposerXPages/composePostWithActor',function(q,r){if(r.actorID)this._updateCurrentActor(r.actorID,function(){if(r.callback)r.callback();});}.bind(this));},render:function(){return (k.createElement(g,{actorIDs:this.props.actorIDs,coverEnabled:this.props.coverEnabled,loading:this.state.loading,nuxBody:this._getNUXBody(),nuxEnabledCovered:this.props.nuxEnabledCovered,nuxEnabledUncovered:this.props.nuxEnabledUncovered,nuxHoverContext:this.props.nuxHoverContext,onChange:this._onChange,onCompleteNux:this._onCompleteNux,ref:"selector",selectedActorID:this.props.selectedActorID,settingsURI:this.props.settingsURI,tooltipConstructor:this._getTooltipForActorName,tooltipConstructorCovered:this._getCoveredTooltip}));},_getNUXBody:function(){return ("Choose whether to post as yourself or as one of the Pages you manage.");},_getTooltipForActorName:function(q){return (o._("Posting as {actorName}",[o.param("actorName",q)]));},_getCoveredTooltip:function(){return ("Post as one of the Pages you manage.");},_onChange:function(q){this._updateCurrentActor(q.value);},_updateCurrentActor:function(q,r){r=r||l;if(this.props.selectedActorID===q){r();return;}this.setState({loading:true});var s=h.create(new m().setString('composer_id',this.props.composerID).setString('entry_point',this.props.entryPoint).setInt('from_actor_id',this.props.selectedActorID).setInt('target_id',this.props.targetID).getURI(),q);new j().setURI(s).setErrorHandler(this.setState.bind(this,{loading:false})).setFinallyHandler(r).send();},_onCompleteNux:function(q){var r=q.isCovered,s=new n().setBool('is_covered',r).getURI();new j().setURI(s).send();}});e.exports=p;},null);
__d("SwapButtonDEPRECATED",["Event","Arbiter","copyProperties","CSS","Focus"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m,n,o){this._swapperButton=m;this._swappeeButton=n;g.listen(m,'click',this.swap.bind(this));if(o)g.listen(n,'click',this.unswap.bind(this));h.subscribe('SwapButtonDEPRECATED/focusOnJoinButton',this.setFocusOnSwapper.bind(this),h.SUBSCRIBE_ALL);}i(l.prototype,{_swapperButton:null,_swappeeButton:null,swap:function(m){j.hide(this._swapperButton);j.show(this._swappeeButton);m!==false&&k.setWithoutOutline(this._swappeeButton);},unswap:function(m){j.show(this._swapperButton);j.hide(this._swappeeButton);m!==false&&k.setWithoutOutline(this._swapperButton);},toggle:function(){j.toggle(this._swapperButton);j.toggle(this._swappeeButton);},setFocusOnSwapper:function(){this._swapperButton.focus();}});e.exports=l;},null);
__d("HubbleContext",[],function(a,b,c,d,e,f){var g={},h={get:function(i){return g[i];},getPageID:function(){return g.page&&g.page.id;},setContext:function(i){g=i;},setKey:function(i,j){g[i]=j;},reset:function(){g={};}};e.exports=h;},null);
__d("HubbleLogger",["BanzaiLogger","ErrorUtils","HubbleContext","HubbleSurfaces","arrayContains"],function(a,b,c,d,e,f,g,h,i,j,k){var l=null,m=null,n=null,o=null,p=Object.keys(j).map(function(r){return j[r];}),q={getStatefulFields:function(){return {pageid:i.getPageID(),platform:n,prev_section:o,section:l,surface:m};},logAction:function(r){g.log('HubbleLoggerConfig',Object.assign({},this.getStatefulFields(),{action:r}));},reset:function(){l=null;m=null;n=null;o=null;},setActiveSection:function(r){o=l;l=r;},setActiveSurface:function(r){if(!k(p,r)){h.reportError('Hubble: Invalid surface value: '+r);return;}m=r;},setPlatform:function(r){n=r;}};e.exports=q;},null);
__d("PagesFriendInviterSuggestions.react",["Arbiter","AsyncRequest","FlexibleBlock.react","ImageBlock.react","InlineBlock.react","ReactPropTypes","React","URI","XUIButton.react","XUIGrayText.react","XUISpinner.react","Link.react","arrayContains","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var v=m.createClass({displayName:"PagesFriendInviterSuggestions",propTypes:{pageID:l.string.isRequired,invitees:l.array.isRequired,likedFriends:l.array.isRequired,invitedFriends:l.array.isRequired,refLocation:l.string.isRequired,loading:l.bool,onInvite:l.func},getDefaultProps:function(){return {loading:false};},getInitialState:function(){return {recentlyInvitedIDs:[]};},render:function(){var w=this.props.invitees.map(function(y){var z="Invite",aa;if(s(this.state.recentlyInvitedIDs,y.id)||s(this.props.invitedFriends,Number(y.id))){aa=m.createElement(p,{shade:"light",weight:"bold"},"Invite Sent");}else if(s(this.props.likedFriends,Number(y.id))){aa=m.createElement(p,{shade:"light",weight:"bold"},"Liked");}else aa=m.createElement(o,{label:z,onClick:this.sendInvite.bind(this,y)});var ba='/ajax/hovercard/hovercard.php?id='+y.id;return (m.createElement("li",null,m.createElement(j,{spacing:"medium"},m.createElement("img",{className:"_5kwi img",src:y.photo}),m.createElement(i,{flex:"left"},m.createElement("div",{className:"_5kwj"},m.createElement("div",null,m.createElement(r,{href:y.profilelink,"data-hovercard":ba},m.createElement("strong",{className:"ellipsis"},y.name)))),m.createElement(k,{alignv:"middle",height:40},aa)))));}.bind(this)),x=this.props.loading?m.createElement(q,{className:"_5kwk",size:"large"}):null;return (m.createElement("ul",{className:"_5kwh"},w,x));},sendInvite:function(w){var x=n('/ajax/pages/invite/send_single/');new h(x).setMethod('POST').setData({page_id:this.props.pageID,invitee:w.id,action:'send',ref:this.props.refLocation}).send();var y=this.props.onInvite;if(y)y({page_id:this.props.pageID,invitee:w.id});g.inform('friendInvitedInline',{id:w.id});this.state.recentlyInvitedIDs.push(w.id);this.forceUpdate();}});e.exports=v;},null);
__d("PagesFriendInviter",["Arbiter","ArbiterMixin","AsyncRequest","CSS","DOM","Event","PagesFriendInviterSuggestions.react","ScrollableArea.react","PagesBanzaiLogger","React","Style","URI","cx","emptyFunction","extendArray","mixin","throttle","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){ca.alreadyInvitedFriends=[];var y=p.createClass({displayName:"ReactSuggestions",render:function(){return (p.createElement(n,{width:this.props.width,onScroll:this.props.onScroll,shadow:false,ref:"scrollArea"},p.createElement(m,{pageID:this.props.pageID,invitees:this.props.invitees,loading:this.props.loading,likedFriends:this.props.likedFriends,invitedFriends:this.props.invitedFriends,refLocation:this.props.refLocation})));},getScrollableArea:function(){return this.refs.scrollArea.getArea();}}),z=v(h);for(var aa in z)if(z.hasOwnProperty(aa))ca[aa]=z[aa];var ba=z===null?null:z.prototype;ca.prototype=Object.create(ba);ca.prototype.constructor=ca;ca.__superConstructor__=z;function ca(da,ea,fa,ga){"use strict";this.$PagesFriendInviter0=da;this.$PagesFriendInviter1=ea;this.$PagesFriendInviter2=fa;this.$PagesFriendInviter3=ga||{};this.$PagesFriendInviter4=this.$PagesFriendInviter3.pageID;this.$PagesFriendInviter5=this.$PagesFriendInviter3.invitees||[];this.$PagesFriendInviter6=this.$PagesFriendInviter3.suggestionCount;this.$PagesFriendInviter7=this.$PagesFriendInviter3.likedFriends;ca.alreadyInvitedFriends=this.$PagesFriendInviter3.invitedFriends;this.$PagesFriendInviter8=this.$PagesFriendInviter3.ref;this.$PagesFriendInviter9=this.$PagesFriendInviter3.loggingData;this.init();this.initTypeaheadSubscriptions();}ca.prototype.init=function(){"use strict";x(l.listen(this.$PagesFriendInviter2,'click',this.initReactSuggestions.bind(this)));g.subscribe('friendInvitedInline',this.markAsInvited.bind(this));};ca.prototype.initReactSuggestions=function(event){"use strict";event.prevent();var da=this.$PagesFriendInviter9;da.ref=this.$PagesFriendInviter8;o.logData(da);this.$PagesFriendInviter0.getCore().reset();var ea=this.$PagesFriendInviter1.offsetWidth,fa=this.$PagesFriendInviter1.offsetHeight,ga=this.$PagesFriendInviter2.parentNode.offsetHeight;k.remove(this.$PagesFriendInviter2);var ha=k.create('div',{className:"_5tee"});q.set(ha,'height',ga+'px');this.$PagesFriendInvitera=p.render(p.createElement(y,{width:ea,pageID:this.$PagesFriendInviter4,invitees:this.$PagesFriendInviter5,likedFriends:this.$PagesFriendInviter7,invitedFriends:ca.alreadyInvitedFriends,onScroll:w(this.onScroll,100,this),refLocation:this.$PagesFriendInviter8}),ha);k.replace(this.$PagesFriendInviter1,ha);this.$PagesFriendInviter1=ha;this.fetchMoreSuggestions(function(){this.$PagesFriendInvitera.getScrollableArea().setScrollTop(fa);}.bind(this));};ca.prototype.initTypeaheadSubscriptions=function(){"use strict";this.$PagesFriendInviter0.subscribe('render',function(da,ea){j.hide(this.$PagesFriendInviter1);}.bind(this));this.$PagesFriendInviter0.subscribe('reset',function(){j.show(this.$PagesFriendInviter1);if(this.$PagesFriendInvitera){var da=this.$PagesFriendInvitera.getScrollableArea();da.scrollToTop(false);da.poke();}}.bind(this));this.$PagesFriendInviter0.getView().subscribe('invite',function(da,ea){this.inform('invite',ea);}.bind(this));};ca.prototype.fetchMoreSuggestions=function(da){"use strict";var ea=50,fa=r('/ajax/pages/invite/suggestions/');new i(fa).setMethod('GET').setReadOnly(true).setData({pageID:this.$PagesFriendInviter3.pageID,offset:this.$PagesFriendInviter6,limit:ea,ref:this.$PagesFriendInviter8}).setHandler(this.processResponse.bind(this)).setFinallyHandler(function(){this.$PagesFriendInviterc=false;da&&da();}.bind(this)).send();this.$PagesFriendInviter6+=ea;this.$PagesFriendInviterc=true;};ca.prototype.processResponse=function(da){"use strict";var ea=da.payload,fa=ea&&ea.invitees;if(fa&&fa.length){this.$PagesFriendInvitera.setProps({invitees:u(this.$PagesFriendInviter5,fa)});}else{this.onScroll=t;this.$PagesFriendInvitera.setProps({loading:false});}};ca.prototype.onScroll=function(){"use strict";if(this.$PagesFriendInviterc)return;if(this.$PagesFriendInvitera.getScrollableArea().isScrolledToBottom()){this.$PagesFriendInvitera.setProps({loading:true});this.fetchMoreSuggestions();}};ca.prototype.markAsInvited=function(da,ea){"use strict";ca.alreadyInvitedFriends.push(Number(ea.id));};ca.renderSuggestions=function(da,ea,fa,ga,ha,ia){"use strict";var ja=p.createElement(m,{pageID:ea,invitees:fa,likedFriends:ga,invitedFriends:ha,refLocation:ia});p.render(ja,da);};e.exports=ca;},null);
__d("PagesFriendInviterTypeahead",["TypeaheadCore"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(){"use strict";if(g!==null)g.apply(this,arguments);}j.prototype.initToggle=function(){"use strict";this.view.subscribe('render',this.view.show.bind(this.view));this.view.subscribe('reset',this.view.hide.bind(this.view));this.subscribe('blur',this.reset.bind(this));};e.exports=j;},null);
__d("PagesFriendInviterTypeaheadView",["PagesFriendInviterSuggestions.react","PagesFriendInviter","ScrollableArea.react","React","Style","TypeaheadView"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m=j.createClass({displayName:"ReactTypeaheadView",render:function(){return (j.createElement(i,{width:this.props.width,shadow:false,ref:"scrollArea"},j.createElement(g,{pageID:this.props.pageID,invitees:this.props.invitees,likedFriends:this.props.likedFriends,invitedFriends:h.alreadyInvitedFriends,refLocation:this.props.refLocation})));},scrollToTop:function(){var q=this.refs.scrollArea.getArea();q.scrollToTop(false);q.poke();}});for(var n in l)if(l.hasOwnProperty(n))p[n]=l[n];var o=l===null?null:l.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=l;function p(){"use strict";if(l!==null)l.apply(this,arguments);}p.prototype.render=function(q,r){"use strict";this.value=q;var s={results:r,value:q};this.inform('beforeRender',s);r=s.results;this.results=r;var t=r.map(function(w){return {id:w.uid,name:w.text,photo:w.photo};});if(!this.$PagesFriendInviterTypeaheadView0){var u=j.createElement(m,{width:this.element.parentNode.offsetWidth,pageID:this.pageID,likedFriends:this.likedFriends,invitedFriends:this.invitedFriends,invitees:t,onInvite:function(w){this.inform('invite',w);}.bind(this),refLocation:this.refLocation});this.$PagesFriendInviterTypeaheadView0=j.render(u,this.element);}else this.$PagesFriendInviterTypeaheadView0.setProps({invitees:t});var v=this.element.parentNode.offsetHeight;k.set(this.element,'height',v+'px');this.inform('render',r);this.$PagesFriendInviterTypeaheadView0.scrollToTop();};p.prototype.reset=function(q){"use strict";if(!q)this.disableAutoSelect=false;if(this.$PagesFriendInviterTypeaheadView0)this.$PagesFriendInviterTypeaheadView0.setProps({invitees:[]});this.index=-1;this.results=[];this.value='';this.inform('reset');return this;};p.prototype.highlight=function(){"use strict";};p.prototype.mouseover=function(){"use strict";};p.prototype.select=function(){"use strict";};e.exports=p;},null);
__d("XPageTabsReorderingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/pages\/tabs\/reorder\/",{page_id:{type:"Int",required:true},__asyncDialog:{type:"Int"}});},null);
__d("PagesNavTabs",["React","XPageTabsReorderingControllerURIBuilder","XUIPageNavigation.react","XUIPageNavigationGroup.react","XUIPageNavigationItem.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={renderPagesNavTabs:function(o,p,q,r,s,t){var u=p.map(function(w){return (g.createElement(k,{href:w.href,key:w.key},w.label));});if(s){var v=new h().setInt('page_id',t).getURI();u.push(g.createElement(k,{className:"_3ew_",ajaxify:v,href:"#",key:"manage_tabs",rel:"dialog"},"Manage Tabs"));}if(u.length===r+1)r++;g.render(g.createElement(i,{defaultActiveTabKey:q},g.createElement(j,{maxTabsVisible:r},u)),o);}};e.exports=n;},null);
__d("PagesTimelineController",["Arbiter"],function(a,b,c,d,e,f,g){var h={LOAD_SECTION:'PagesTimelineController/loadSection',SECTION_FULLY_LOADED:'PagesTimelineController/sectionFullyLoaded',ACTIVATE_SCRUBBER_ITEM:'PagesTimelineController/activateScrubberItem',FIRST_POSTS_LOADED:'PagesTimelineController/firstPostsLoaded',REMOVE_SECTION:'PagesTimelineController/removeSection',RECENT_SECTION_KEY:'recent',NAV_BAR_LOADED:'PagesTimelineController/navBarLoaded',ADJUST_ADS:'PagesTimelineController/adjustAds',BOTTOM_OFFSET:100,loadSection:function(i){g.inform(this.LOAD_SECTION,{section_key:i},g.BEHAVIOR_STATE);},sectionFullyLoaded:function(i){g.inform(this.SECTION_FULLY_LOADED,{section_index:i},g.BEHAVIOR_PERSISTENT);},activateScrubberItem:function(i){g.inform(this.ACTIVATE_SCRUBBER_ITEM,{section_key:i},g.BEHAVIOR_STATE);},firstPostsLoaded:function(i){g.inform(this.FIRST_POSTS_LOADED,{section_key:i},g.BEHAVIOR_STATE);},removeSection:function(i){g.inform(this.REMOVE_SECTION,{section_key:i},g.BEHAVIOR_STATE);},navBarLoaded:function(){g.inform(this.NAV_BAR_LOADED,{},g.BEHAVIOR_STATE);},adjustAds:function(){g.inform(this.ADJUST_ADS,{},g.BEHAVIOR_STATE);}};e.exports=h;},null);
__d("PagesPageletScrollColumn.react",["Arbiter","DOMContainer.react","PagesTimelineController","React","ScrollColumn.react"],function(a,b,c,d,e,f,g,h,i,j,k){var l=5,m=j.createClass({displayName:"PagesPageletScrollColumn",propTypes:{hasAdminNavbar:j.PropTypes.bool,pagelets:j.PropTypes.object.isRequired},render:function(){var n=this.props.hasAdminNavbar?42:0,o=j.createElement(k,{topOffset:n,ref:"scrollColumn",zIndex:l},j.createElement(h,null,this.props.pagelets));return o;},componentDidMount:function(){g.subscribe(i.NAV_BAR_LOADED,function(){g.inform(k.EVENT_SHOULD_ADJUST);}.bind(this));}});e.exports=m;},null);