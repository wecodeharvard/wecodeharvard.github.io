/*!CK:206784390!*//*1419252432,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["oIh1P"]); }

__d("ResourceTimingLogger",["performance","URI","AsyncSignal"],function(a,b,c,d,e,f,g,h,i){var j=/akamaihd\.net$|fbcdn\.net$/,k={logToScuba:function(l){if(!g||!g.getEntries)return;if(window.externalHost)return;var m=g.getEntries();for(var n=0;n<m.length;n++){var o=m[n],p=new h(o.name),q=p.getDomain();if(!q||!q.match(j))continue;if(Math.floor(Math.random()*l)!==0)continue;var r={};for(var s in o)r[s]=o[s];new i('/traffic/resource_timing/',r).send();}}};e.exports=k;},null);
__d("legacy:LegacyContextualDialog",["LegacyContextualDialog"],function(a,b,c,d){a.LegacyContextualDialog=b('LegacyContextualDialog');},3);