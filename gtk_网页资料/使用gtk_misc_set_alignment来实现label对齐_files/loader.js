"strict mode";(function(){var c=document,e=c.head||c.getElementsByTagName("HEAD")[0];function d(i,j){this.url=i;this.combo=j;this.loaded={}}d.prototype={HEAD:-1,url:"",combo:"",init:function(l){var m=0;if(typeof l==="number"||/^\d+$/.test(l)){m=parseInt(l)}else{l=l.split(";");l[l.length-1]||(l.length=l.length-1);for(var o=0,j=l.length;o<j;o++){var k=l[o],i=k.substr(k.lastIndexOf(":")+1);k="/"+k.substr(0,k.length-i.length-1);i=parseInt(i);i>m&&(m=i);this[k]=i}}this.HEAD=m},getURL:function(q,k){if(arguments.length==1){k=q;q=k[0].substr(k[0].lastIndexOf(".")+1)}if(k.length===0){return}if(k.length===1){var j=k[0];if(this.HEAD!=-1){var o=j.lastIndexOf(".");j=j.substr(0,o)+".v"+(this[j]||this.HEAD)+j.substr(o)}return this.url+j}else{var l=this.combo;if(this.HEAD!=-1){var s=0;for(var m=0,r=k.length;m<r;m++){var p=this[k[m]]||this.HEAD;if(s<p){s=p}}l+="v."+s+"&"}return l+"r="+k.join("|")+(q=="js"?"&c=utf-8&t=js":"&c=gbk&t=css")}}};var f={r1:new d("http://r1.suc.itc.cn","http://r.suc.itc.cn/combo.action?"),s2:new d("http://s2.suc.itc.cn","http://s.suc.itc.cn/combo.action?"),s3:new d("http://s3.suc.itc.cn","http://s.suc.itc.cn/combo.action?p=mysohu&"),other:new d("","")};var h={from:"loadResource",repo:"s3"};var g=(function(){var k={};return function(m,l){return k[m]||l&&(k[m]={dom:l,ready:j})};function j(l){if(this.isReady){l.apply(this)}else{if(!this.callbacks){this.callbacks=[l];this.dom.onload=this.dom.onreadystatechange=i;this.dom.loadContext=this}else{this.callbacks.push(l)}}return this}function i(){var o=this.readyState;if(o===undefined||o==="loaded"||o==="complete"){var l=this.loadContext,m=l.callbacks;l.dom=this.loadContext=this.onload=this.onreadystatechange=l.callbacks=null;l.isReady=true;for(var q=0;q<m.length;q++){try{m[q].apply(l)}catch(p){}}}}})();window.loadResource=function(t){var o=typeof t==="object";var l=a(h,o&&t);var p=[],A=[],B=0,u=f[l.repo];var m=Array.prototype.slice.call(arguments,o?1:0).join(",").split(",");for(var x=0,r=m.length;x<r;x++){var q=m[x];if(!q||u.loaded[q]){continue}(l.type=="text/javascript"||q.substr(q.lastIndexOf(".")+1)=="js"?p:A).push(q);u.loaded[q]=true;B<u[q]&&(B=u[q])}if(p.length){var j=Boolean(c.body&&c.getElementById("footer"));var y=a({type:"text/javascript",charset:"utf-8",src:u.getURL("js",p)},a(l));if(j||y.later){var w=c.createElement("SCRIPT");for(var z in y){w.setAttribute(z,y[z])}if(j){e.appendChild(w)}else{b.push(w)}}else{var i=[];for(var z in y){i.push(z,'="',y[z],'" ')}c.write("<script "+i.join("")+"><\/script>")}}if(A.length){var v=a({type:"text/css",rel:"stylesheet",href:u.getURL("css",A)},a(l));if(c.body){var s=c.createElement("LINK");for(var z in v){s.setAttribute(z,v[z])}e.appendChild(s)}else{var i=[];for(var z in v){i.push(z,'="',v[z],'" ')}c.write("<link "+i.join("")+"/>")}}return m.length==1&&g(m[0],w)};window.load=function(i){loadResource.apply(this,f.macros&&f.macros[i]||arguments)};window.load.repos=f;var b=[];function a(j,i){i||(i={});for(var l in j){if(!(l in i)){i[l]=j[l]}}return i}domReady=function(){setTimeout(function(){for(var j=0,i=b.length;j<i;j++){e.appendChild(b[j])}b=null},0)}})();