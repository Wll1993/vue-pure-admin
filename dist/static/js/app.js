import{aB as r,aC as s,aD as i,aE as o,ap as u,aF as d}from"./index.js";const n=r({id:"pure-app",state:()=>{var e,t;return{sidebar:{opened:((e=s().getItem(`${i()}layout`))==null?void 0:e.sidebarStatus)??o().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:((t=s().getItem(`${i()}layout`))==null?void 0:t.layout)??o().Layout,device:u()?"mobile":"desktop",sortSwap:!1}},getters:{getSidebarStatus(e){return e.sidebar.opened},getDevice(e){return e.device}},actions:{TOGGLE_SIDEBAR(e,t){const a=s().getItem(`${i()}layout`);e&&t?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,a.sidebarStatus=!0):!e&&t?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,a.sidebarStatus=!1):!e&&!t&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,a.sidebarStatus=this.sidebar.opened),s().setItem(`${i()}layout`,a)},async toggleSideBar(e,t){await this.TOGGLE_SIDEBAR(e,t)},toggleDevice(e){this.device=e},setLayout(e){this.layout=e},setSortSwap(e){this.sortSwap=e}}});function p(){return n(d)}export{p as u};
