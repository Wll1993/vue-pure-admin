import{d as V,I as A,J as I,D as k,bO as M,M as F,r as N,bd as C,a as m,o as _,c as L,w as l,e as d,i as b,F as g,q as y,h as n,u as a,f as s,t as v,L as E,bP as B}from"./index.js";import{u as P}from"./hooks3.js";const S=d("div",null,"标签页复用，超出限制自动关闭",-1),U={class:"flex flex-wrap items-center"},j=d("p",null,"query传参模式：",-1),H={class:"flex flex-wrap items-center"},z=d("p",null,"params传参模式：",-1),K=V({name:"Tabs",__name:"index",setup(J){const{toDetail:c,router:u}=P(),x=A(I().wholeMenus,!0),f=k(()=>M(F(x),0,{disabled:!0})),p=N([]),h=k(()=>{var r;return(r=C())==null?void 0:r.multiTags});function q(){p.value.length!==0&&p.value.forEach(r=>{const t=B(f.value,r).redirect??B(f.value,r).path;C().handleTags("splice",t),t==="/tabs/index"&&u.push({path:h.value[h.value.length-1].path})})}return(r,t)=>{const o=m("el-button"),i=m("el-divider"),D=m("el-tree-select"),$=m("el-link"),T=m("el-card");return _(),L(T,{shadow:"never"},{header:l(()=>[S]),default:l(()=>[d("div",U,[j,(_(),b(g,null,y(6,e=>n(o,{class:"m-2",key:e,onClick:w=>a(c)({id:e},"query")},{default:l(()=>[s(" 打开"+v(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64)),n(o,{onClick:t[0]||(t[0]=e=>a(c)({id:666,name:"小明",age:18,job:"工程师"},"query"))},{default:l(()=>[s(" 多个参数 ")]),_:1})]),n(i),d("div",H,[z,(_(),b(g,null,y(6,e=>n(o,{class:"m-2",key:e,onClick:w=>a(c)({id:e},"params")},{default:l(()=>[s(" 打开"+v(e)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),n(i),n(D,{class:"w-[300px]","node-key":"uniqueId",placeholder:"请选择要关闭的标签",clearable:"",multiple:"",filterable:"","default-expand-all":"",props:{label:e=>a(E)(e.meta.title),value:"uniqueId",children:"children",disabled:"disabled"},data:f.value,modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=e=>p.value=e)},{default:l(({data:e})=>[d("span",null,v(a(E)(e.meta.title)),1)]),_:1},8,["props","data","modelValue"]),n(o,{class:"m-2",onClick:q},{default:l(()=>[s("关闭标签")]),_:1}),n(i),n(o,{onClick:t[2]||(t[2]=e=>a(u).push({name:"Menu1-2-2"}))},{default:l(()=>[s(" 跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(o,{onClick:t[3]||(t[3]=e=>a(u).push("/nested/menu1/menu1-2/menu1-2-2"))},{default:l(()=>[s(" 跳转页内菜单（直接传要跳转的路径） ")]),_:1}),n(o,{onClick:t[4]||(t[4]=e=>a(u).push({path:"/nested/menu1/menu1-2/menu1-2-2"}))},{default:l(()=>[s(" 跳转页内菜单（传path对象） ")]),_:1}),n(i),n(o,{onClick:t[5]||(t[5]=e=>a(u).push({name:"Menu1-2-2",query:{text:"传name对象，优先推荐"}}))},{default:l(()=>[s(" 携参跳转页内菜单（传name对象，优先推荐） ")]),_:1}),n(o,{onClick:t[6]||(t[6]=e=>a(u).push({path:"/nested/menu1/menu1-2/menu1-2-2",query:{text:"传path对象"}}))},{default:l(()=>[s(" 携参跳转页内菜单（传path对象） ")]),_:1}),n($,{class:"ml-4",href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank"},{default:l(()=>[s(" 点击查看更多跳转方式 ")]),_:1}),n(i),n(o,{onClick:t[7]||(t[7]=e=>a(u).push({name:"Empty"}))},{default:l(()=>[s(" 跳转无Layout的空白页面 ")]),_:1})]),_:1})}}});export{K as default};
