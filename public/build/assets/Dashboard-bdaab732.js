import{r as m,j as l,a as e,b as g}from"./app-ad512157.js";import"./Dropdown-e8db630c.js";import{F as u,A as p}from"./tooltip.esm-0c1f0e31.js";import{D as N,C as s}from"./column.esm-cf5ca8fa.js";import"./transition-19bd0a57.js";import"./virtualscroller.esm-8f270407.js";import"./inputnumber.esm-22b3db0c.js";import"./dropdown.esm-fb7d0211.js";import"./button.esm-00cd24b4.js";function M(t){const[c,b]=m.useState(!1);m.useState("");const[h,P]=m.useState({name:{value:null,matchMode:u.CONTAINS},date_time_start:{value:null,matchMode:u.CONTAINS},date_time_end:{value:null,matchMode:u.CONTAINS}}),a=new Date;console.log(t);let n;t.auth.user.role==="staff"&&(n=t.event.map(r=>r.event),console.log(n));const f=(r,S)=>{let i="Upcoming",d=new Date(r.date_time_start),o=new Date(r.date_time_end);return a<d&&a<o?i="Upcoming":a>d&&a<o?i="Ongoing":a>d&&a>o&&(i="Completed"),e("div",{className:"flex justify-item-end",children:l("span",{className:`${i==="Upcoming"?"bg-sky-500":i==="Ongoing"?"bg-amber-500":"bg-lime-500"} text-white p-1 rounded`,children:[i," "]})})};return l(p,{user:t.auth.user,children:[e(g,{title:"User"}),l("div",{className:"w-full px-4 py-5 bg-white rounded-lg shadow",children:[e("h2",{className:"text-2xl font-bold",children:"SISTEM INFORMASI PENGELOLAAN KEGIATAN RADAR LAMPUNG"}),l("div",{className:"mt-2",children:[e("h2",{className:"text-xl font-bold mb-4",children:"Event List"}),e("div",{children:l(N,{value:t.auth.user.role==="staff"?n:t.events,paginator:!0,rows:10,dataKey:"id",filters:h,filterDisplay:"row",loading:c,globalFilterFields:["name","date_time_start","date_time_end"],emptyMessage:"No data found.",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} entries",rowsPerPageOptions:[10,25,50],children:[e(s,{field:"name",header:"Name",filter:!0,filterPlaceholder:"Search by name",sortable:!0,style:{minWidth:"12rem"}}),e(s,{field:"date_time_start",header:"Date Start",filter:!0,filterPlaceholder:"Search by date",sortable:!0,style:{minWidth:"12rem"}}),e(s,{field:"date_time_end",header:"Date End",filter:!0,filterPlaceholder:"Search by date",sortable:!0,style:{minWidth:"12rem"}}),e(s,{field:"modifiedTime",header:"Status",body:r=>f(r),style:{minWidth:"10rem"}})]})})]})]})]})}export{M as default};