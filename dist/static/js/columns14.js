import{r as u,ai as i,m as p}from"./index.js";import{b as r}from"./data2.js";function f(t){const a=u(""),o=[{label:"ID",prop:"id",width:80},{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}],n=i({pageSize:5,currentPage:1,layout:"prev, pager, next",total:r.length,background:!0,small:!0});function l({row:{name:e}}){return{cursor:"pointer",background:e===a.value?"#f5f7fa":""}}function s(e){a.value=e.name,t.value.blur(),p(`当前选中行的数据为：${JSON.stringify(e)}`,{type:"success"})}return{columns:o,pagination:n,selectValue:a,tableDataEdit:r,rowStyle:l,onRowClick:s}}export{f as useColumns};
