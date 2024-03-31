import{_ as y}from"./_plugin-vue_export-helper-i4BHOzMV.js";import{u as V,P as k}from"./plus-form-C2kVWinF.js";import{d as f,a as m,U as F,f as i,k as h,i as b,w as u,F as T,l as P,b as x,u as o,cl as _,a8 as d,aI as $,X as c,ck as S,v as q}from"./index-BOXClPvw.js";var C=f({name:"PlusStepsForm",__name:"index",props:{modelValue:{default:1},data:{default:()=>[]}},emits:["pre","next","update:modelValue","change"],setup(v,{emit:s}){const l=v,{t:r}=V(),e=m();F(()=>{e.value=l.modelValue});const n=(t,g)=>{s("change",t,g)},p=()=>{e.value-- >l.data.length+1&&(e.value=1),s("pre",e.value),s("update:modelValue",e.value)},w=t=>{e.value++>l.data.length-1&&(e.value=l.data.length),s("next",e.value,t),s("update:modelValue",e.value)};return(t,g)=>(i(),h("div",{class:q(["plus-steps-form",t.$attrs.direction==="vertical"?"plus-steps-from-vertical":""])},[b(o(S),d({active:e.value,"finish-status":"success"},t.$attrs),{default:u(()=>[(i(!0),h(T,null,P(t.data,a=>(i(),x(o(_),d({key:a.title},a),$({_:2},[t.$slots.icon?{name:"icon",fn:u(()=>[c(t.$slots,"icon",{icon:a.icon,title:a.title,description:a.description})]),key:"0"}:void 0,t.$slots.title?{name:"title",fn:u(()=>[c(t.$slots,"title",{icon:a.icon,title:a.title,description:a.description})]),key:"1"}:void 0,t.$slots.description?{name:"description",fn:u(()=>[c(t.$slots,"description",{icon:a.icon,title:a.title,description:a.description})]),key:"2"}:void 0]),1040))),128))]),_:3},16,["active"]),b(o(k),d(t.data[e.value-1].form,{"has-reset":e.value!==1,"submit-text":e.value===t.data.length?o(r)("plus.stepsForm.submitText"):o(r)("plus.stepsForm.nextText"),"reset-text":o(r)("plus.stepsForm.preText"),onSubmit:w,onReset:p,onChange:n}),null,16,["has-reset","submit-text","reset-text"])],2))}}),E=y(C,[["__file","index.vue"]]);const B=E,N=f({__name:"steps",setup(v){const s=m([{title:"第一步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},modelValue:{},columns:[{label:"名称",width:120,prop:"name",valueType:"copy",tooltip:"名称最多显示6个字符"},{label:"状态",width:120,prop:"status",valueType:"select",options:[{label:"未解决",value:"0",color:"red"},{label:"已解决",value:"1",color:"blue"},{label:"解决中",value:"2",color:"yellow"},{label:"失败",value:"3",color:"red"}]}],rules:{name:[{required:!0,message:"请输入名称"}]}}},{title:"第二步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},labelWidth:"100",modelValue:{},columns:[{label:"标签",width:120,prop:"tag"},{label:"执行进度",width:200,prop:"progress"},{label:"评分",width:200,prop:"rate",valueType:"rate"},{label:"是否显示",width:100,prop:"switch",valueType:"switch"}],rules:{tag:[{required:!0,message:"请输入标签"}],progress:[{required:!0,message:"请输入执行进度"}]}}},{title:"第三步",form:{labelPosition:"top",style:{width:"400px",margin:"40px auto"},modelValue:{},columns:[{label:"时间",prop:"time",valueType:"date-picker"},{label:"要求",prop:"demand",valueType:"checkbox",options:[{label:"四六级",value:"0"},{label:"计算机二级证书",value:"1"},{label:"普通话证书",value:"2"}]},{label:"奖励",prop:"price"},{label:"提成",prop:"percentage"},{label:"说明",prop:"desc",valueType:"textarea",fieldProps:{maxlength:10,showWordLimit:!0,autosize:{minRows:2,maxRows:4}}}],rules:{time:[{required:!0,trigger:"change",message:"请选择时间"}],demand:[{required:!0,trigger:"change",message:"请选择要求"}]}}}]),l=m(1),r=(e,n)=>{l.value=e};return(e,n)=>(i(),x(o(B),{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=p=>l.value=p),simple:"",class:"w-[800px] m-auto",data:s.value,"align-center":"",onNext:r},null,8,["modelValue","data"]))}});export{N as _};
