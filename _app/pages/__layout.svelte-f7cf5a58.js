import{S as I,i as w,s as M,F as V,e as u,k as g,t as $,c as m,a as d,d as f,m as k,h as N,b as p,g as v,G as _,j as T,l as y,H as q,I as A,J as W,q as z,o as B,K as S,v as C}from"../chunks/vendor-54c63849.js";import{b as j}from"../chunks/paths-4b3c6e7e.js";import{l as F,t as G}from"../chunks/state-0655822c.js";import{t as D,s as H}from"../chunks/theme-af6eb1f9.js";import"../chunks/preload-helper-5a400464.js";function E(n){let o,l,i,r,c,s=n[0].message+"",t;return{c(){o=u("div"),l=u("div"),i=u("div"),r=g(),c=u("div"),t=$(s),this.h()},l(e){o=m(e,"DIV",{class:!0});var a=d(o);l=m(a,"DIV",{class:!0});var h=d(l);i=m(h,"DIV",{class:!0}),d(i).forEach(f),r=k(h),c=m(h,"DIV",{});var b=d(c);t=N(b,s),b.forEach(f),h.forEach(f),a.forEach(f),this.h()},h(){p(i,"class","loader mx-auto svelte-1ub1m40"),p(l,"class","text-indigo-100 text-4xl font-bold my-auto"),p(o,"class","w-screen h-screen z-50 absolute left-0 top-0 bg-gray-600 opacity-50 flex align-middle justify-center")},m(e,a){v(e,o,a),_(o,l),_(l,i),_(l,r),_(l,c),_(c,t)},p(e,a){a&1&&s!==(s=e[0].message+"")&&T(t,s)},d(e){e&&f(o)}}}function J(n){let o,l,i,r;const c=n[2].default,s=V(c,n,n[1],null);let t=n[0].loading&&E(n);return{c(){o=u("main"),s&&s.c(),l=g(),t&&t.c(),i=y(),this.h()},l(e){o=m(e,"MAIN",{class:!0});var a=d(o);s&&s.l(a),a.forEach(f),l=k(e),t&&t.l(e),i=y(),this.h()},h(){p(o,"class","h-screen text-primary-content")},m(e,a){v(e,o,a),s&&s.m(o,null),v(e,l,a),t&&t.m(e,a),v(e,i,a),r=!0},p(e,[a]){s&&s.p&&(!r||a&2)&&q(s,c,e,e[1],r?W(c,e[1],a,null):A(e[1]),null),e[0].loading?t?t.p(e,a):(t=E(e),t.c(),t.m(i.parentNode,i)):t&&(t.d(1),t=null)},i(e){r||(z(s,e),r=!0)},o(e){B(s,e),r=!1},d(e){e&&f(o),s&&s.d(e),e&&f(l),t&&t.d(e),e&&f(i)}}}function K(n,o,l){let i,r;S(n,D,t=>l(3,i=t)),S(n,F,t=>l(0,r=t));let{$$slots:c={},$$scope:s}=o;return C(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(`${j}/service-worker.js`,{scope:`${j}/`}).then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)});const t=window.matchMedia("(prefers-color-scheme: dark)").matches;i.theme===void 0&&H(t?"dark":"bumblebee"),D.subscribe(({theme:e,isDark:a})=>{e&&(document.getElementsByTagName("html")[0].setAttribute("data-theme",e),G(a))})}),n.$$set=t=>{"$$scope"in t&&l(1,s=t.$$scope)},[r,s,c]}class Q extends I{constructor(o){super();w(this,o,K,J,M,{})}}export{Q as default};