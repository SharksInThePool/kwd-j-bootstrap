var q=null;window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function m(a){var f=a.charCodeAt(0);if(f!==92)return f;var b=a.charAt(1);return(f=r[b])?f:"0"<=b&&b<="7"?parseInt(a.substring(1),8):b==="u"||b==="x"?parseInt(a.substring(2),16):a.charCodeAt(1)}function e(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if(a==="\\"||a==="-"||a==="["||a==="]")a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),a=
[],b=[],o=f[0]==="^",c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=m(j),d;c+2<i&&"-"===f[c+1]?(d=m(f[c+2]),c+=2):d=j;b.push([j,d]);d<65||j>122||(d<65||j>90||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),d<97||j>122||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,f){return a[0]-f[0]||f[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=0;c<
f.length;++c)i=f[c],b.push(e(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(e(i[1])));b.push("]");return b.join("")}function y(a){for(var f=a.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];j==="("?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++t);for(i=c=0;c<b;++c)j=f[c],j==="("?(++i,d[i]===void 0&&(f[c]="(?:")):"\\"===j.charAt(0)&&
(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),j.length>=2&&a==="["?f[c]=h(j):a!=="\\"&&(f[c]=j.replace(/[A-Za-z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var t=0,s=!1,l=!1,p=0,d=a.length;p<d;++p){var g=a[p];if(g.ignoreCase)l=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0;l=!1;break}}for(var r=
{b:8,t:9,n:10,v:11,f:12,r:13},n=[],p=0,d=a.length;p<d;++p){g=a[p];if(g.global||g.multiline)throw Error(""+g);n.push("(?:"+y(g)+")")}return RegExp(n.join("|"),l?"gi":"g")}function M(a){function m(a){switch(a.nodeType){case 1:if(e.test(a.className))break;for(var g=a.firstChild;g;g=g.nextSibling)m(g);g=a.nodeName;if("BR"===g||"LI"===g)h[s]="\n",t[s<<1]=y++,t[s++<<1|1]=a;break;case 3:case 4:g=a.nodeValue,g.length&&(g=p?g.replace(/\r\n?/g,"\n"):g.replace(/[\t\n\r ]+/g," "),h[s]=g,t[s<<1]=y,y+=g.length,
t[s++<<1|1]=a)}}var e=/(?:^|\s)nocode(?:\s|$)/,h=[],y=0,t=[],s=0,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=document.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);m(a);return{a:h.join("").replace(/\n$/,""),c:t}}function B(a,m,e,h){m&&(a={a:m,d:a},e(a),h.push.apply(h,a.e))}function x(a,m){function e(a){for(var l=a.d,p=[l,"pln"],d=0,g=a.a.match(y)||[],r={},n=0,z=g.length;n<z;++n){var f=g[n],b=r[f],o=void 0,c;if(typeof b===
"string")c=!1;else{var i=h[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<t;++c)if(i=m[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=b.length>=5&&"lang-"===b.substring(0,5))&&!(o&&typeof o[1]==="string"))c=!1,b="src";c||(r[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),k=j+c.length;o[2]&&(k=f.length-o[2].length,j=k-c.length);b=b.substring(5);B(l+i,f.substring(0,j),e,p);B(l+i+j,c,C(b,c),p);B(l+i+k,f.substring(k),e,p)}else p.push(l+i,b)}a.e=p}var h={},y;(function(){for(var e=a.concat(m),
l=[],p={},d=0,g=e.length;d<g;++d){var r=e[d],n=r[3];if(n)for(var k=n.length;--k>=0;)h[n.charAt(k)]=r;r=r[1];n=""+r;p.hasOwnProperty(n)||(l.push(r),p[n]=q)}l.push(/[\S\s]/);y=L(l)})();var t=m.length;return e}function u(a){var m=[],e=[];a.tripleQuotedStrings?m.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,q,"'\""]):a.multiLineStrings?m.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
q,"'\"`"]):m.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,q,"\"'"]);a.verbatimStrings&&e.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,q]);var h=a.hashComments;h&&(a.cStyleComments?(h>1?m.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,q,"#"]):m.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,q,"#"]),e.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,q])):m.push(["com",/^#[^\n\r]*/,
q,"#"]));a.cStyleComments&&(e.push(["com",/^\/\/[^\n\r]*/,q]),e.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,q]));a.regexLiterals&&e.push(["lang-regex",/^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]);(h=a.types)&&e.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,
"");a.length&&e.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),q]);m.push(["pln",/^\s+/,q," \r\n\t\xa0"]);e.push(["lit",/^@[$_a-z][\w$@]*/i,q],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,q],["pln",/^[$_a-z][\w$@]*/i,q],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,q,"0123456789"],["pln",/^\\[\S\s]?/,q],["pun",/^.[^\s\w"-$'./@\\`]*/,q]);return x(m,e)}function D(a,m){function e(a){switch(a.nodeType){case 1:if(k.test(a.className))break;if("BR"===a.nodeName)h(a),
a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)e(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(t);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}
for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&e.nodeType===1;)a=e;d.push(a)}var k=/(?:^|\s)nocode(?:\s|$)/,t=/\r\n?|\n/,s=a.ownerDocument,l;a.currentStyle?l=a.currentStyle.whiteSpace:window.getComputedStyle&&(l=s.defaultView.getComputedStyle(a,q).getPropertyValue("white-space"));var p=l&&"pre"===l.substring(0,3);for(l=s.createElement("LI");a.firstChild;)l.appendChild(a.firstChild);for(var d=[l],g=0;g<d.length;++g)e(d[g]);m===(m|0)&&d[0].setAttribute("value",
m);var r=s.createElement("OL");r.className="linenums";for(var n=Math.max(0,m-1|0)||0,g=0,z=d.length;g<z;++g)l=d[g],l.className="L"+(g+n)%10,l.firstChild||l.appendChild(s.createTextNode("\xa0")),r.appendChild(l);a.appendChild(r)}function k(a,m){for(var e=m.length;--e>=0;){var h=m[e];A.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",h):A[h]=a}}function C(a,m){if(!a||!A.hasOwnProperty(a))a=/^\s*</.test(m)?"default-markup":"default-code";return A[a]}function E(a){var m=
a.g;try{var e=M(a.h),h=e.a;a.a=h;a.c=e.c;a.d=0;C(m,h)(a);var k=/\bMSIE\b/.test(navigator.userAgent),m=/\n/g,t=a.a,s=t.length,e=0,l=a.c,p=l.length,h=0,d=a.e,g=d.length,a=0;d[g]=s;var r,n;for(n=r=0;n<g;)d[n]!==d[n+2]?(d[r++]=d[n++],d[r++]=d[n++]):n+=2;g=r;for(n=r=0;n<g;){for(var z=d[n],f=d[n+1],b=n+2;b+2<=g&&d[b+1]===f;)b+=2;d[r++]=z;d[r++]=f;n=b}for(d.length=r;h<p;){var o=l[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=l[h+1],j;if(i.nodeType!==1&&(j=t.substring(e,b))){k&&(j=j.replace(m,"\r"));i.nodeValue=
j;var u=i.ownerDocument,v=u.createElement("SPAN");v.className=d[a+1];var x=i.parentNode;x.replaceChild(v,i);v.appendChild(i);e<o&&(l[h+1]=i=u.createTextNode(t.substring(b,o)),x.insertBefore(i,v.nextSibling))}e=b;e>=o&&(h+=2);e>=c&&(a+=2)}}catch(w){"console"in window&&console.log(w&&w.stack?w.stack:w)}}var v=["break,continue,do,else,for,if,return,while"],w=[[v,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],
"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[w,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],G=[w,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],w=[w,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=[v,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
J=[v,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],v=[v,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,N=/\S/,O=u({keywords:[F,H,w,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+
I,J,v],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),A={};k(O,["default-code"]);k(x([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),
["default-markup","htm","html","mxml","xhtml","xml","xsl"]);k(x([["pln",/^\s+/,q," \t\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,q,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",
/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]);k(x([],[["atv",/^[\S\s]+/]]),["uq.val"]);k(u({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),["c","cc","cpp","cxx","cyc","m"]);k(u({keywords:"null,true,false"}),["json"]);k(u({keywords:H,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:K}),["cs"]);k(u({keywords:G,cStyleComments:!0}),["java"]);k(u({keywords:v,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);k(u({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),
["cv","py"]);k(u({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl","pl","pm"]);k(u({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);k(u({keywords:w,cStyleComments:!0,regexLiterals:!0}),["js"]);k(u({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);k(x([],[["str",/^[\S\s]+/]]),["regex"]);window.prettyPrintOne=function(a,m,e){var h=document.createElement("PRE");h.innerHTML=a;e&&D(h,e);E({g:m,i:e,h:h});return h.innerHTML};window.prettyPrint=function(a){function m(){for(var e=window.PR_SHOULD_USE_CONTINUATION?l.now()+250:Infinity;p<h.length&&l.now()<e;p++){var n=h[p],k=n.className;if(k.indexOf("prettyprint")>=0){var k=k.match(g),f,b;if(b=
!k){b=n;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=i===1?o?b:c:i===3?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===f.tagName}b&&(k=f.className.match(g));k&&(k=k[1]);b=!1;for(o=n.parentNode;o;o=o.parentNode)if((o.tagName==="pre"||o.tagName==="code"||o.tagName==="xmp")&&o.className&&o.className.indexOf("prettyprint")>=0){b=!0;break}b||((b=(b=n.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(n,b),d={g:k,h:n,i:b},E(d))}}p<h.length?setTimeout(m,
250):a&&a()}for(var e=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],h=[],k=0;k<e.length;++k)for(var t=0,s=e[k].length;t<s;++t)h.push(e[k][t]);var e=q,l=Date;l.now||(l={now:function(){return+new Date}});var p=0,d,g=/\blang(?:uage)?-([\w.]+)(?!\S)/;m()};window.PR={createSimpleLexer:x,registerLangHandler:k,sourceDecorator:u,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",
PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
!function(n){n(function(){"use strict";n.support.transition=function(){var n=function(){var i=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},n;for(n in t)if(i.style[n]!==undefined)return t[n]}();return n&&{end:n}}()})}(window.jQuery)
!function(n){"use strict";var i='[data-dismiss="alert"]',t=function(t){n(t).on("click",i,this.close)};t.prototype.close=function(t){function f(){i.trigger("closed").remove()}var u=n(this),r=u.attr("data-target"),i;r||(r=u.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=n(r),t&&t.preventDefault(),i.length||(i=u.hasClass("alert")?u:u.parent()),i.trigger(t=n.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),n.support.transition&&i.hasClass("fade")?i.on(n.support.transition.end,f):f()},n.fn.alert=function(i){return this.each(function(){var u=n(this),r=u.data("alert");r||u.data("alert",r=new t(this)),typeof i=="string"&&r[i].call(u)})},n.fn.alert.Constructor=t,n(function(){n("body").on("click.alert.data-api",i,t.prototype.close)})}(window.jQuery)
!function(n){"use strict";function e(){var t=this,r=setTimeout(function(){t.$element.off(n.support.transition.end),i.call(t)},500);this.$element.one(n.support.transition.end,function(){clearTimeout(r),i.call(t)})}function i(){this.$element.hide().trigger("hidden"),f.call(this)}function f(t){var f=this,u=this.$element.hasClass("fade")?"fade":"",i;this.isShown&&this.options.backdrop?(i=n.support.transition&&u,this.$backdrop=n('<div class="modal-backdrop '+u+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(n.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),i?this.$backdrop.one(n.support.transition.end,t):t()):!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),n.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(n.support.transition.end,n.proxy(r,this)):r.call(this)):t&&t()}function r(){this.$backdrop.remove(),this.$backdrop=null}function u(){var t=this;if(this.isShown&&this.options.keyboard)n(document).on("keyup.dismiss.modal",function(n){n.which==27&&t.hide()});else this.isShown||n(document).off("keyup.dismiss.modal")}var t=function(t,i){this.options=i,this.$element=n(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",n.proxy(this.hide,this))};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,i=n.Event("show");this.$element.trigger(i);if(this.isShown||i.isDefaultPrevented())return;n("body").addClass("modal-open"),this.isShown=!0,u.call(this),f.call(this,function(){var i=n.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),i&&t.$element[0].offsetWidth,t.$element.addClass("in"),i?t.$element.one(n.support.transition.end,function(){t.$element.trigger("shown")}):t.$element.trigger("shown")})},hide:function(t){t&&t.preventDefault();var r=this;t=n.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,n("body").removeClass("modal-open"),u.call(this),this.$element.removeClass("in"),n.support.transition&&this.$element.hasClass("fade")?e.call(this):i.call(this)}},n.fn.modal=function(i){return this.each(function(){var u=n(this),r=u.data("modal"),f=n.extend({},n.fn.modal.defaults,u.data(),typeof i=="object"&&i);r||u.data("modal",r=new t(this,f)),typeof i=="string"?r[i]():f.show&&r.show()})},n.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},n.fn.modal.Constructor=t,n(function(){n("body").on("click.modal.data-api",'[data-toggle="modal"]',function(t){var r=n(this),u,i=n(r.attr("data-target")||(u=r.attr("href"))&&u.replace(/.*(?=#[^\s]+$)/,"")),f=i.data("modal")?"toggle":n.extend({},i.data(),r.data());t.preventDefault(),i.modal(f)})})}(window.jQuery)
!function(n){"use strict";function i(){n(r).parent().removeClass("open")}var r='[data-toggle="dropdown"]',t=function(t){var i=n(t).on("click.dropdown.data-api",this.toggle);n("html").on("click.dropdown.data-api",function(){i.parent().removeClass("open")})};t.prototype={constructor:t,toggle:function(){var f=n(this),u,r,e;if(!f.is(".disabled, :disabled"))return r=f.attr("data-target"),r||(r=f.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),u=n(r),u.length||(u=f.parent()),e=u.hasClass("open"),i(),e||u.toggleClass("open"),!1}},n.fn.dropdown=function(i){return this.each(function(){var u=n(this),r=u.data("dropdown");r||u.data("dropdown",r=new t(this)),typeof i=="string"&&r[i].call(u)})},n.fn.dropdown.Constructor=t,n(function(){n("html").on("click.dropdown.data-api",i);n("body").on("click.dropdown",".dropdown form",function(n){n.stopPropagation()}).on("click.dropdown.data-api",r,t.prototype.toggle)})}(window.jQuery)
!function(n){"use strict";function t(t,i){var u=n.proxy(this.process,this),f=n(t).is("body")?n(window):n(t),r;this.options=n.extend({},n.fn.scrollspy.defaults,i),this.$scrollElement=f.on("scroll.scroll.data-api",u),this.selector=(this.options.target||(r=n(t).attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=n("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,i;this.offsets=n([]),this.targets=n([]),i=this.$body.find(this.selector).map(function(){var r=n(this),t=r.data("target")||r.attr("href"),i=/^#\w/.test(t)&&n(t);return i&&t.length&&[[i.position().top,t]]||null}).sort(function(n,t){return n[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var i=this.$scrollElement.scrollTop()+this.options.offset,e=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,f=e-this.$scrollElement.height(),t=this.offsets,r=this.targets,u=this.activeTarget,n;if(i>=f)return u!=(n=r.last()[0])&&this.activate(n);for(n=t.length;n--;)u!=r[n]&&i>=t[n]&&(!t[n+1]||i<=t[n+1])&&this.activate(r[n])},activate:function(t){var i,r;this.activeTarget=t,n(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=n(r).parent("li").addClass("active"),i.parent(".dropdown-menu")&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate")}},n.fn.scrollspy=function(i){return this.each(function(){var u=n(this),r=u.data("scrollspy"),f=typeof i=="object"&&i;r||u.data("scrollspy",r=new t(this,f)),typeof i=="string"&&r[i]()})},n.fn.scrollspy.Constructor=t,n.fn.scrollspy.defaults={offset:10},n(function(){n('[data-spy="scroll"]').each(function(){var t=n(this);t.scrollspy(t.data())})})}(window.jQuery)
!function(n){"use strict";var t=function(t){this.element=n(t)};t.prototype={constructor:t,show:function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.attr("data-target"),f,r,u;i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;f=e.find(".active a").last()[0],u=n.Event("show",{relatedTarget:f}),t.trigger(u);if(u.isDefaultPrevented())return;r=n(i),this.activate(t.parent("li"),e),this.activate(r,r.parent(),function(){t.trigger({type:"shown",relatedTarget:f})})},activate:function(t,i,r){function f(){u.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),e?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var u=i.find("> .active"),e=r&&n.support.transition&&u.hasClass("fade");e?u.one(n.support.transition.end,f):f(),u.removeClass("in")}},n.fn.tab=function(i){return this.each(function(){var u=n(this),r=u.data("tab");r||u.data("tab",r=new t(this)),typeof i=="string"&&r[i]()})},n.fn.tab.Constructor=t,n(function(){n("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),n(this).tab("show")})})}(window.jQuery)
!function(n){"use strict";var t=function(n,t){this.init("tooltip",n,t)};t.prototype={constructor:t,init:function(t,i,r){var f,u;this.type=t,this.$element=n(i),this.options=this.getOptions(r),this.enabled=!0;if(this.options.trigger!="manual"){f=this.options.trigger=="hover"?"mouseenter":"focus",u=this.options.trigger=="hover"?"mouseleave":"blur";this.$element.on(f,this.options.selector,n.proxy(this.enter,this));this.$element.on(u,this.options.selector,n.proxy(this.leave,this))}this.options.selector?this._options=n.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=n.extend({},n.fn[this.type].defaults,t,this.$element.data()),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var i=n(t.currentTarget)[this.type](this._options).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var i=n(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!i.options.delay||!i.options.delay.hide)return i.hide();i.hoverState="out",this.timeout=setTimeout(function(){i.hoverState=="out"&&i.hide()},i.options.delay.hide)},show:function(){var t,f,n,u,e,i,r;if(this.hasContent()&&this.enabled){t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),i=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,f=/in/.test(i),t.remove().css({top:0,left:0,display:"block"}).appendTo(f?this.$element:document.body),n=this.getPosition(f),u=t[0].offsetWidth,e=t[0].offsetHeight;switch(f?i.split(" ")[1]:i){case"bottom":r={top:n.top+n.height,left:n.left+n.width/2-u/2};break;case"top":r={top:n.top-e,left:n.left+n.width/2-u/2};break;case"left":r={top:n.top+n.height/2-e/2,left:n.left-u};break;case"right":r={top:n.top+n.height/2-e/2,left:n.left+n.width}}t.css(r).addClass(i).addClass("in")}},isHTML:function(n){return typeof n!="string"||n.charAt(0)==="<"&&n.charAt(n.length-1)===">"&&n.length>=3||/^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(n)},setContent:function(){var t=this.tip(),n=this.getTitle();t.find(".tooltip-inner")[this.isHTML(n)?"html":"text"](n),t.removeClass("fade in top bottom left right")},hide:function(){function i(){var i=setTimeout(function(){t.off(n.support.transition.end).remove()},500);t.one(n.support.transition.end,function(){clearTimeout(i),t.remove()})}var r=this,t=this.tip();t.removeClass("in"),n.support.transition&&this.$tip.hasClass("fade")?i():t.remove()},fixTitle:function(){var n=this.$element;(n.attr("title")||typeof n.attr("data-original-title")!="string")&&n.attr("data-original-title",n.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(t){return n.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var t,i=this.$element,n=this.options;return t=i.attr("data-original-title")||(typeof n.title=="function"?n.title.call(i[0]):n.title)},tip:function(){return this.$tip=this.$tip||n(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()},destroy:function(){var n=this.$element;n.off(),n.removeData("tooltip")}},n.fn.tooltip=function(i){return this.each(function(){var u=n(this),r=u.data("tooltip"),f=typeof i=="object"&&i;r||u.data("tooltip",r=new t(this,f)),typeof i=="string"&&r[i]()})},n.fn.tooltip.Constructor=t,n.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0},n("[data-tip]").each(function(){n(this).tooltip({placement:n(this).data("tip")})})}(window.jQuery)
!function(n){"use strict";var t=function(n,t){this.init("popover",n,t)};t.prototype=n.extend({},n.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var n=this.tip(),i=this.getTitle(),t=this.getContent();n.find(".popover-title")[this.isHTML(i)?"html":"text"](i),n.find(".popover-content > *")[this.isHTML(t)?"html":"text"](t),n.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,i=this.$element,n=this.options;return t=i.attr("data-content")||(typeof n.content=="function"?n.content.call(i[0]):n.content)},tip:function(){return this.$tip||(this.$tip=n(this.options.template)),this.$tip},destroy:function(){var n=this.$element;n.off(),n.removeData("popover")}}),n.fn.popover=function(i){return this.each(function(){var u=n(this),r=u.data("popover"),f=typeof i=="object"&&i;r||u.data("popover",r=new t(this,f)),typeof i=="string"&&r[i]()})},n.fn.popover.Constructor=t,n.fn.popover.defaults=n.extend({},n.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery)
!function(n){"use strict";var t=function(t,i){this.$element=n(t),this.options=n.extend({},n.fn.button.defaults,i)};t.prototype.setState=function(n){var i="disabled",t=this.$element,u=t.data(),r=t.is("input")?"val":"html";n=n+"Text",u.resetText||t.data("resetText",t[r]()),t[r](u[n]||this.options[n]),setTimeout(function(){n=="loadingText"?t.addClass(i).attr(i,i):t.removeClass(i).removeAttr(i)},0)},t.prototype.toggle=function(){var n=this.$element.parent('[data-toggle="buttons-radio"]');n&&n.find(".active").removeClass("active"),this.$element.toggleClass("active")},n.fn.button=function(i){return this.each(function(){var u=n(this),r=u.data("button"),f=typeof i=="object"&&i;r||u.data("button",r=new t(this,f)),i=="toggle"?r.toggle():i&&r.setState(i)})},n.fn.button.defaults={loadingText:"loading..."},n.fn.button.Constructor=t,n(function(){n("body").on("click.button.data-api","[data-toggle^=button]",function(t){var i=n(t.target);i.hasClass("btn")||(i=i.closest(".btn")),i.button("toggle")})})}(window.jQuery)
!function(n){"use strict";var t=function(t,i){this.$element=n(t),this.options=n.extend({},n.fn.collapse.defaults,i),this.options.parent&&(this.$parent=n(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var n=this.$element.hasClass("width");return n?"width":"height"},show:function(){var r,u,t,i;if(this.transitioning)return;r=this.dimension(),u=n.camelCase(["scroll",r].join("-")),t=this.$parent&&this.$parent.find("> .accordion-group > .in");if(t&&t.length){i=t.data("collapse");if(i&&i.transitioning)return;t.collapse("hide"),i||t.data("collapse",null)}this.$element[r](0),this.transition("addClass",n.Event("show"),"shown"),this.$element[r](this.$element[0][u])},hide:function(){var t;if(this.transitioning)return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",n.Event("hide"),"hidden"),this.$element[t](0)},reset:function(n){var t=this.dimension();return this.$element.removeClass("collapse")[t](n||"auto")[0].offsetWidth,this.$element[n!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,i,r){var u=this,f=function(){i.type=="show"&&u.reset(),u.transitioning=0,u.$element.trigger(r)};this.$element.trigger(i);if(i.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),n.support.transition&&this.$element.hasClass("collapse")?this.$element.one(n.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},n.fn.collapse=function(i){return this.each(function(){var u=n(this),r=u.data("collapse"),f=typeof i=="object"&&i;r||u.data("collapse",r=new t(this,f)),typeof i=="string"&&r[i]()})},n.fn.collapse.defaults={toggle:!0},n.fn.collapse.Constructor=t,n(function(){n("body").on("click.collapse.data-api","[data-toggle=collapse]",function(t){var i=n(this),u,r=i.attr("data-target")||t.preventDefault()||(u=i.attr("href"))&&u.replace(/.*(?=#[^\s]+$)/,""),f=n(r).data("collapse")?"toggle":i.data();n(r).collapse(f)})})}(window.jQuery)
!function(n){"use strict";var t=function(t,i){this.$element=n(t),this.options=i,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",n.proxy(this.pause,this)).on("mouseleave",n.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(n.proxy(this.next,this),this.options.interval)),this},to:function(t){var u=this.$element.find(".active"),i=u.parent().children(),r=i.index(u),f=this;if(t<=i.length-1&&t>=0)return this.sliding?this.$element.one("slid",function(){f.to(t)}):r==t?this.pause().cycle():this.slide(t>r?"next":"prev",n(i[t]))},pause:function(n){return n||(this.paused=!0),clearInterval(this.interval),this.interval=null,this},next:function(){if(!this.sliding)return this.slide("next")},prev:function(){if(!this.sliding)return this.slide("prev")},slide:function(t,i){var e=this.$element.find(".active"),r=i||e[t](),s=this.interval,u=t=="next"?"left":"right",h=t=="next"?"first":"last",o=this,f=n.Event("slide");this.sliding=!0,s&&this.pause(),r=r.length?r:this.$element.find(".item")[h]();if(r.hasClass("active"))return;if(n.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;r.addClass(t),r[0].offsetWidth,e.addClass(u),r.addClass(u);this.$element.one(n.support.transition.end,function(){r.removeClass([t,u].join(" ")).addClass("active"),e.removeClass(["active",u].join(" ")),o.sliding=!1,setTimeout(function(){o.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;e.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}},n.fn.carousel=function(i){return this.each(function(){var f=n(this),r=f.data("carousel"),u=n.extend({},n.fn.carousel.defaults,typeof i=="object"&&i);r||f.data("carousel",r=new t(this,u)),typeof i=="number"?r.to(i):typeof i=="string"||(i=u.slide)?r[i]():u.interval&&r.cycle()})},n.fn.carousel.defaults={interval:5e3,pause:"hover"},n.fn.carousel.Constructor=t,n(function(){n("body").on("click.carousel.data-api","[data-slide]",function(t){var r=n(this),u,i=n(r.attr("data-target")||(u=r.attr("href"))&&u.replace(/.*(?=#[^\s]+$)/,"")),f=!i.data("modal")&&n.extend({},i.data(),r.data());i.carousel(f),t.preventDefault()})})}(window.jQuery)
!function(n){"use strict";var t=function(t,i){this.$element=n(t),this.options=n.extend({},n.fn.typeahead.defaults,i),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=n(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var n=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(n)).change(),this.hide()},updater:function(n){return n},show:function(){var t=n.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:t.top+t.height,left:t.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var r=this,i,u;this.query=this.$element.val();if(!this.query)return this.shown?this.hide():this;return i=n.grep(this.source,function(n){return r.matcher(n)}),i=this.sorter(i),i.length?this.render(i.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(n){return~n.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(n){var u=[],i=[],r=[],t;while(t=n.shift())t.toLowerCase().indexOf(this.query.toLowerCase())?~t.indexOf(this.query)?i.push(t):r.push(t):u.push(t);return u.concat(i,r)},highlighter:function(n){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return n.replace(new RegExp("("+t+")","ig"),function(n,t){return"<strong>"+t+"</strong>"})},render:function(t){var i=this;return t=n(t).map(function(t,r){return t=n(i.options.item).attr("data-value",r),t.find("a").html(i.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(){var r=this.$menu.find(".active").removeClass("active"),i=r.next();i.length||(i=n(this.$menu.children("li")[0])),i.addClass("active")},prev:function(){var i=this.$menu.find(".active").removeClass("active"),t=i.prev();t.length||(t=this.$menu.children("li").last()),t.addClass("active")},listen:function(){this.$element.on("blur",n.proxy(this.blur,this)).on("keypress",n.proxy(this.keypress,this)).on("keyup",n.proxy(this.keyup,this));if(n.browser.webkit||n.browser.msie)this.$element.on("keydown",n.proxy(this.keypress,this));this.$menu.on("click",n.proxy(this.click,this));this.$menu.children("li").on("mouseenter",n.proxy(this.mouseenter,this))},keyup:function(n){switch(n.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}n.stopPropagation(),n.preventDefault()},keypress:function(n){if(!this.shown)return;switch(n.keyCode){case 9:case 13:case 27:n.preventDefault();break;case 38:if(n.type!="keydown")break;n.preventDefault(),this.prev();break;case 40:if(n.type!="keydown")break;n.preventDefault(),this.next()}n.stopPropagation()},blur:function(){var t=this;setTimeout(function(){t.hide()},150)},click:function(n){n.stopPropagation(),n.preventDefault(),this.select()},mouseenter:function(t){this.$menu.find(".active").removeClass("active"),n(t.currentTarget).addClass("active")}},n.fn.typeahead=function(i){return this.each(function(){var u=n(this),r=u.data("typeahead"),f=typeof i=="object"&&i;r||u.data("typeahead",r=new t(this,f)),typeof i=="string"&&r[i]()})},n.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'},n.fn.typeahead.Constructor=t,n(function(){n("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var i=n(this);if(i.data("typeahead"))return;t.preventDefault(),i.typeahead(i.data())})})}(window.jQuery)