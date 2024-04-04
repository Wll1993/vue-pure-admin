import{d as te,ai as oe,a as d,aj as s,b as ie,w as l,e as r,f as ce,g as E,h as u,i as e,u as D,ak as i,Y as re,al as R,F as h,N as _,L as a,am as p,an as ae}from"./index-OeW7EK_m.js";import{_ as de}from"./formPrimitive.vue_vue_type_script_setup_true_lang-BNyle0As.js";import{_ as B}from"./form.vue_vue_type_script_setup_true_lang-n6yZA3MJ.js";const se={class:"card-header"},fe={class:"font-medium"},ke=te({name:"DialogPage",__name:"index",setup(Ce){const A=oe();function b(){i({title:"基础用法",contentRenderer:()=>e("p",null,[u("弹框内容-基础用法")])})}function g(){i({title:"可拖拽",draggable:!0,contentRenderer:()=>_("p","弹框内容-可拖拽")})}function w(){i({title:"全屏",fullscreen:!0,contentRenderer:()=>e("p",null,"弹框内容-全屏")})}function $(){i({title:"全屏按钮和全屏事件",fullscreenIcon:!0,fullscreenCallBack:({options:t,index:o})=>a(t.fullscreen?"全屏":"非全屏"),contentRenderer:()=>e("p",null,[u("弹框内容-全屏按钮和全屏事件")])})}function x(){i({title:"无背景遮罩层",modal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-无背景遮罩层")])})}function y(){i({title:"自定义弹出位置",top:"60vh",style:{marginRight:"20px"},contentRenderer:()=>e("p",null,[u("弹框内容-自定义弹出位置")])})}const I=re(()=>i({title:"延时2秒打开弹框",openDelay:1400,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒打开弹框")])}),600);function P(){i({title:"延时2秒关闭弹框",closeDelay:2e3,contentRenderer:()=>e("p",null,[u("弹框内容-延时2秒关闭弹框")])})}function S(){i({title:"不显示右上角关闭按钮图标",showClose:!1,contentRenderer:()=>e("p",null,[u("弹框内容-不显示右上角关闭按钮图标")])})}function N(){i({title:"禁止通过键盘ESC关闭",closeOnPressEscape:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过键盘ESC关闭")])})}function O(){i({title:"禁止通过点击modal关闭",closeOnClickModal:!1,contentRenderer:()=>e("p",null,[u("弹框内容-禁止通过点击modal关闭")])})}function T(){i({title:"隐藏底部取消、确定按钮",hideFooter:!0,contentRenderer:()=>e("p",null,[u("弹框内容-隐藏底部取消、确定按钮")])})}function z(){i({title:"自定义头部",showClose:!1,headerRenderer:({close:t,titleId:o,titleClass:c})=>e("div",{class:"flex flex-row justify-between"},[e("h4",{id:o,class:c},[u("自定义头部")]),e(r("el-button"),{type:"danger",onClick:t},{default:()=>[u("关闭")]})]),contentRenderer:()=>e("p",null,[u("弹框内容-自定义头部")])})}function H(){i({title:"自定义底部",footerRenderer:({options:t,index:o})=>e(r("el-button"),{onClick:()=>p(t,o)},{default:()=>[t.title,u("-"),o]}),contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部")])})}function M(){i({title:"自定义底部按钮",footerButtons:[{label:"按钮1",size:"small",type:"success",btnClick:({dialog:{options:t,index:o},button:c})=>{p(t,o)}},{label:"按钮2",text:!0,bg:!0,btnClick:({dialog:{options:t,index:o},button:c})=>{p(t,o)}},{label:"按钮3",size:"large",type:"warning",btnClick:({dialog:{options:t,index:o},button:c})=>{p(t,o)}}],contentRenderer:()=>e("p",null,[u("弹框内容-自定义底部按钮")])})}function V(){i({title:"打开后的回调",open:({options:t,index:o})=>a({options:t,index:o}),contentRenderer:()=>e("p",null,[u("弹框内容-打开后的回调")])})}function j(){i({title:"关闭后的回调",closeCallBack:({options:t,index:o,args:c})=>{let n="";(c==null?void 0:c.command)==="cancel"?n="您点击了取消按钮":(c==null?void 0:c.command)==="sure"?n="您点击了确定按钮":n="您点击了右上角关闭按钮或空白页或按下了esc键",a(n)},contentRenderer:()=>e("p",null,[u("弹框内容-关闭后的回调")])})}function U(){i({title:"嵌套的弹框",contentRenderer:({index:t})=>e(r("el-button"),{onClick:()=>i({title:`第${t+1}个子弹框`,width:"40%",contentRenderer:({index:o})=>e(r("el-button"),{onClick:()=>i({title:`第${o+1}个子弹框`,width:"30%",contentRenderer:()=>e(h,null,[e(r("el-button"),{round:!0,onClick:()=>ae()},{default:()=>[u("哎呦，你干嘛，赶快关闭所有弹框")]})])})},{default:()=>[u("点击打开第"),o+1,u("个子弹框")]})})},{default:()=>[u("点击打开第"),t+1,u("个子弹框")]})})}function L(){const t=d(1);i({title:`第${t.value}页`,contentRenderer:()=>e(h,null,[e(r("el-button"),{disabled:!(t.value>1),onClick:()=>{t.value-=1,R(`第${t.value}页`)}},{default:()=>[u("上一页")]}),e(r("el-button"),{onClick:()=>{t.value+=1,R(`第${t.value}页`)}},{default:()=>[u("下一页")]})])})}function W(){i({width:"30%",title:"popconfirm确认框示例",popconfirm:{title:"是否确认修改当前数据"},contentRenderer:()=>e("p",null,[u("点击右下方确定按钮看看效果吧")])})}function Y(){i({width:"30%",title:"结合Form表单（第一种方式）",contentRenderer:()=>B,props:{formInline:{user:"菜虚鲲",region:"浙江"}},closeCallBack:({options:t,args:o})=>{const{formInline:c}=t.props,n=`姓名：${c.user} 城市：${c.region}`;(o==null?void 0:o.command)==="cancel"?a(`您点击了取消按钮，当前表单数据为 ${n}`):(o==null?void 0:o.command)==="sure"?a(`您点击了确定按钮，当前表单数据为 ${n}`):a(`您点击了右上角关闭按钮或空白页或按下了esc键，当前表单数据为 ${n}`)}})}const f=d({user:"菜虚鲲",region:"浙江"}),q=s(f.value);function G(){i({width:"30%",title:"结合Form表单（第二种方式）",contentRenderer:()=>_(B,{formInline:f.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${f.value.user} 城市：${f.value.region}`),f.value=s(q)}})}const C=d({user:"菜虚鲲",region:"浙江"}),J=s(C.value);function K(){i({width:"30%",title:"结合Form表单（第三种方式）",contentRenderer:()=>e(B,{formInline:C.value}),closeCallBack:()=>{a(`当前表单数据为 姓名：${C.value.user} 城市：${C.value.region}`),C.value=s(J)}})}const F=d({user:"菜虚鲲",region:"浙江"}),Q=s(F.value);function X(){i({width:"30%",title:"结合Form表单（第四种方式）",contentRenderer:()=>e(B,{formInline:F.value},null),closeCallBack:()=>{a(`当前表单数据为 姓名：${F.value.user} 城市：${F.value.region}`),F.value=s(Q)}})}const m=d("Hello World"),Z=d(m.value);function ee(){i({width:"30%",title:"子组件 prop 为 primitive 类型 demo",contentRenderer:()=>_(de,{data:m.value,"onUpdate:data":t=>m.value=t}),closeCallBack:()=>{a(`当前表单内容：${m.value}`),m.value=Z.value}})}function ue(){i({title:"点击底部取消按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部取消按钮的回调（会暂停弹框的关闭）")]),beforeCancel:(t,{options:o,index:c})=>{}})}function ne(){i({title:"点击底部确定按钮的回调",contentRenderer:()=>e("p",null,[u("弹框内容-点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口）")]),beforeSure:(t,{options:o,index:c})=>{}})}return(t,o)=>{const c=r("el-link"),n=r("el-button"),k=r("el-space"),v=r("el-divider"),le=r("el-card");return ce(),ie(le,{shadow:"never"},{header:l(()=>[E("div",se,[E("span",fe,[u(" 二次封装 Element Plus 的 "),e(c,{href:"https://element-plus.org/zh-CN/component/dialog.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:l(()=>[u(" Dialog ")]),_:1}),u(" ，采用函数式调用弹框组件（更多操作实例请参考 "),E("span",{class:"cursor-pointer text-primary",onClick:o[0]||(o[0]=Fe=>D(A).push({name:"SystemDept"}))}," 系统管理页面 "),u(" ） ")])]),e(c,{href:"https://github.com/pure-admin/vue-pure-admin/tree/main/src/views/components/dialog",target:"_blank"},{default:l(()=>[u(" 代码位置 src/views/components/dialog ")]),_:1})]),default:l(()=>[e(k,{wrap:""},{default:l(()=>[e(n,{onClick:b},{default:l(()=>[u(" 基础用法 ")]),_:1}),e(n,{onClick:g},{default:l(()=>[u(" 可拖拽 ")]),_:1}),e(n,{onClick:w},{default:l(()=>[u(" 全屏 ")]),_:1}),e(n,{onClick:$},{default:l(()=>[u(" 全屏按钮和全屏事件 ")]),_:1}),e(n,{onClick:x},{default:l(()=>[u(" 无背景遮罩层 ")]),_:1}),e(n,{onClick:y},{default:l(()=>[u(" 自定义弹出位置 ")]),_:1}),e(n,{onClick:D(I)},{default:l(()=>[u(" 延时2秒打开弹框 ")]),_:1},8,["onClick"]),e(n,{onClick:P},{default:l(()=>[u(" 延时2秒关闭弹框 ")]),_:1}),e(n,{onClick:S},{default:l(()=>[u(" 不显示右上角关闭按钮图标 ")]),_:1}),e(n,{onClick:N},{default:l(()=>[u(" 禁止通过键盘ESC关闭 ")]),_:1}),e(n,{onClick:O},{default:l(()=>[u(" 禁止通过点击modal关闭 ")]),_:1}),e(n,{onClick:T},{default:l(()=>[u(" 隐藏底部取消、确定按钮 ")]),_:1}),e(n,{onClick:z},{default:l(()=>[u(" 自定义头部 ")]),_:1}),e(n,{onClick:H},{default:l(()=>[u(" 自定义底部 ")]),_:1}),e(n,{onClick:M},{default:l(()=>[u(" 自定义底部按钮 ")]),_:1}),e(n,{onClick:V},{default:l(()=>[u(" 打开后的回调 ")]),_:1}),e(n,{onClick:j},{default:l(()=>[u(" 关闭后的回调 ")]),_:1}),e(n,{onClick:U},{default:l(()=>[u(" 嵌套的弹框 ")]),_:1}),e(n,{onClick:L},{default:l(()=>[u(" 更改弹框自身属性值 ")]),_:1}),e(n,{onClick:W},{default:l(()=>[u("popconfirm确认框")]),_:1})]),_:1}),e(v),e(k,{wrap:""},{default:l(()=>[e(n,{onClick:Y},{default:l(()=>[u(" 结合Form表单（第一种方式） ")]),_:1}),e(n,{onClick:G},{default:l(()=>[u(" 结合Form表单（第二种方式） ")]),_:1}),e(n,{onClick:K},{default:l(()=>[u(" 结合Form表单（第三种方式） ")]),_:1}),e(n,{onClick:X},{default:l(()=>[u(" 结合Form表单（第四种方式） ")]),_:1}),e(n,{onClick:ee},{default:l(()=>[u(" 子组件 prop 为 primitive 类型 ")]),_:1})]),_:1}),e(v),e(k,{wrap:""},{default:l(()=>[e(n,{onClick:ue},{default:l(()=>[u(" 点击底部取消按钮的回调（会暂停弹框的关闭） ")]),_:1}),e(n,{onClick:ne},{default:l(()=>[u(" 点击底部确定按钮的回调（会暂停弹框的关闭，经常用于新增、修改弹框内容后调用接口） ")]),_:1})]),_:1})]),_:1})}}});export{ke as default};
