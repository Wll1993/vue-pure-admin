import{T as c,E as f}from"./index.esm2.js";import{d as m,b3 as p,r as v,k as _,l as h,o as C,i as b,h as a,u as n}from"./index.js";const g={class:"wangeditor"},r="default",E=m({name:"BaseEditor",__name:"base",setup(x){const o=p(),t=v("<p>你好</p>");_(()=>{setTimeout(()=>{t.value="<p>我是模拟的异步数据</p>"},1500)});const s={excludeKeys:"fullScreen"},d={placeholder:"请输入内容..."},u=e=>{o.value=e};return h(()=>{const e=o.value;e!=null&&e.destroy()}),(e,l)=>(C(),b("div",g,[a(n(c),{editor:o.value,defaultConfig:s,mode:r,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),a(n(f),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=i=>t.value=i),defaultConfig:d,mode:r,style:{height:"500px","overflow-y":"hidden"},onOnCreated:u},null,8,["modelValue"])]))}});export{E as _};
