"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[301],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),m=i,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||c;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<c;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4130:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),i=n(3366),c=(n(7294),n(3905)),o=["components"],a={title:"Apache"},l=void 0,p={unversionedId:"apache",id:"apache",isDocsHomePage:!1,title:"Apache",description:".htaccess",source:"@site/docs/apache.md",sourceDirName:".",slug:"/apache",permalink:"/apache",editUrl:"https://github.com/TheLeank/knowledgebase/edit/master/docs/apache.md",version:"current",frontMatter:{title:"Apache"},sidebar:"someSidebar",previous:{title:"Docker",permalink:"/docker"},next:{title:"MariaDB / MySQL",permalink:"/mariadb"}},u=[{value:".htaccess",id:"htaccess",children:[{value:"Redirecci\xf3n a https",id:"redirecci\xf3n-a-https",children:[]},{value:"Redirecci\xf3n 301",id:"redirecci\xf3n-301",children:[]},{value:"Modo mantenimiento",id:"modo-mantenimiento",children:[]}]}],d={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"htaccess"},".htaccess"),(0,c.kt)("h3",{id:"redirecci\xf3n-a-https"},"Redirecci\xf3n a https"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"RewriteEngine On \nRewriteCond %{SERVER_PORT} 80 \nRewriteRule ^(.*)$ https://DOMINIO.TLD/$1 [R=301,L]\n")),(0,c.kt)("h3",{id:"redirecci\xf3n-301"},"Redirecci\xf3n 301"),(0,c.kt)("p",null,"Desde la ra\xedz hacia un subdirectorio:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"RewriteEngine On\nRedirectMatch ^/$ /tienda/\n")),(0,c.kt)("p",null,"O desde un directorio a otro:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"RedirectMatch ^/folder/$ /folder/subfolder/\n")),(0,c.kt)("h3",{id:"modo-mantenimiento"},"Modo mantenimiento"),(0,c.kt)("p",null,"En este caso el fichero al que se realiza la redirecci\xf3n es maintenance.html"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"<IfModule mod_rewrite.c>\n RewriteEngine on\n RewriteCond %{REQUEST_URI} !/maintenance.html$ [NC]\n RewriteCond %{REQUEST_URI} !\\.(jpe?g?|png|gif) [NC]\n RewriteCond %{REMOTE_HOST} !^000\\.000\\.000\\.000\n RewriteRule .* /maintenance.html [R=302,L]\n</IfModule>\n")))}s.isMDXComponent=!0}}]);