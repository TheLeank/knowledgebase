"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[985],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4546:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"WHM & cPanel"},l=void 0,p={unversionedId:"whm",id:"whm",isDocsHomePage:!1,title:"WHM & cPanel",description:"Ver origen de spam (Exim)",source:"@site/docs/whm.md",sourceDirName:".",slug:"/whm",permalink:"/whm",editUrl:"https://github.com/TheLeank/knowledgebase/edit/master/docs/whm.md",version:"current",frontMatter:{title:"WHM & cPanel"},sidebar:"someSidebar",previous:{title:"Plesk",permalink:"/plesk"}},u=[{value:"Ver origen de spam (Exim)",id:"ver-origen-de-spam-exim",children:[]},{value:"Purgar cola de correo (Exim)",id:"purgar-cola-de-correo-exim",children:[]}],s={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ver-origen-de-spam-exim"},"Ver origen de spam (Exim)"),(0,i.kt)("p",null,"Los logs de correo se encuentren en /var/spool/exim/msglog y /var/spool/exim/input"),(0,i.kt)("p",null,"Listamos los directorios desde los que m\xe1s correo se est\xe1 enviando:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"grep cwd /var/log/exim_mainlog | grep -v /var/spool | awk -F\"cwd=\" '{print $2}' | awk '{print $1}' | sort | uniq -c | sort -n\n")),(0,i.kt)("p",null,"Podemos ver si actualmente se est\xe1 accediendo al fichero en cuesti\xf3n:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"grep \"FICHERO\" /home/USERNAME/access-logs/DOMINIO | awk '{print $1}' | sort -n | uniq -c | sort -n\n")),(0,i.kt)("h2",{id:"purgar-cola-de-correo-exim"},"Purgar cola de correo (Exim)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"exim -bp|grep \"<\"|awk {'print $3'}|xargs exim -Mrm\n")))}m.isMDXComponent=!0}}]);