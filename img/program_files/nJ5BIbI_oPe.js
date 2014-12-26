/*!CK:3055619886!*//*1409143194,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["3OaS9"]); }

__d("XPubcontentPhotoPivotsChainingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/pubcontent\/inline_photo_pivots_chaining\/",{search_query:{type:"String",required:true},storyid:{type:"String",required:true},photoid:{type:"String",required:true},position:{type:"Int",required:true}});},null);
__d("XPubcontentPhotoPivotsChainingController",["AsyncRequest","XPubcontentPhotoPivotsChainingControllerURIBuilder","Event","ge"],function(a,b,c,d,e,f,g,h,i,j){var k={logPhotoChainingClick:function(l,m,n,o,p){var q=j(l);if(!q)return;var r=i.listen(q,'click',function(){r.remove();var s=(new h()).setString('search_query',m).setString('storyid',n).setString('photoid',o).setInt('position',p),t=new g().setURI(s.getURI());t.send();return true;});}};e.exports=k;},null);