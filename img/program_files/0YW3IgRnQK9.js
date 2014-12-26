/*!CK:3159834808!*//*1418634373,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["HyGtj"]); }

__d("Jtrace",["Banzai"],function(a,b,c,d,e,f,g){f.start=function(h){var i=Function.prototype.call,j={};Function.prototype.call=function(k){try{if(k instanceof Object&&'functionDetails' in k){var m=arguments[1];if(typeof m==='string'&&!j[m]){j[m]=1;if(Math.random()<h.sample){var n=localStorage.jt=1+~~localStorage.jt;if(n<=h.max)g.post('jtrace',{j:m,t:Date.now()});}}}else if(h.snap)this.call=i;}catch(l){}return i.apply(this,arguments);};};},null);
__d("legacy:LayerDestroyOnHide",["LayerDestroyOnHide"],function(a,b,c,d){a.LayerDestroyOnHide=b('LayerDestroyOnHide');},3);