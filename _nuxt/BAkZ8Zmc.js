import{d as m,ay as f,y as I,I as c,az as d,b as x,c as v,a2 as y,l as S}from"./CgjIghqP.js";const _=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({"5ac14dac":p.value}));const t=I(),s=u,l=c(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),r=c(()=>d(l.value)),p=c(()=>{var o,a;const e=(a=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:a.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${r.value.prefix}/${r.value.name}.svg')`}),i=c(()=>{var n,o,a;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((a=t.nuxtIcon)==null?void 0:a.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(x(),v("span",{style:y({width:i.value,height:i.value})},null,4))}}),C=S(_,[["__scopeId","data-v-067d7fc7"]]);export{C as default};
