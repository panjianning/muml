import{S as t,i as n,s as o,A as s}from"../chunks/vendor-267efa65.js";import{r as e}from"../chunks/singletons-12a22614.js";import{b as a}from"../chunks/paths-45dac81d.js";const i=async function(t,n){return e.goto(t,n,[])};function c(t){var n=this&&this.__awaiter||function(t,n,o,s){return new(o||(o=Promise))((function(e,a){function i(t){try{r(s.next(t))}catch(n){a(n)}}function c(t){try{r(s.throw(t))}catch(n){a(n)}}function r(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(t){t(n)}))).then(i,c)}r((s=s.apply(t,n||[])).next())}))};return s((()=>n(void 0,void 0,void 0,(function*(){const t=window.location.hash.split("/");let n="edit";t.length>2&&(n=`${t[1]}#${t[2]}`),yield i(`${a}/${n}`,{replaceState:!0})})))),[]}class r extends t{constructor(t){super(),n(this,t,c,null,o,{})}}export{r as default};