import{W as h,j as m,a,b as f}from"./app-5ef925c1.js";import{A as g}from"./tooltip.esm-8c154d5b.js";import{T as y,I as s}from"./TextInput-5b03f5ad.js";import{I as o}from"./InputLabel-fd3bcd82.js";import{P as p}from"./PrimaryButton-f3c27ff8.js";import{I as b}from"./inputnumber.esm-880e64f5.js";function A(e){console.log(e);const{data:l,setData:r,patch:u,processing:c,errors:n,reset:N}=h({name:e.facility.name,total_amount:e.facility.total_amount}),i=t=>{r(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)},d=t=>{t.preventDefault(),u(route("admin.facility.update",e.facility.id))};return m(g,{user:e.auth.user,children:[a(f,{title:"Add facility"}),m("div",{className:"w-full px-4 py-5 bg-white rounded-lg shadow",children:[a("h2",{className:"text-2xl font-bold",children:"Edit Fasilitas"}),m("form",{onSubmit:d,children:[m("div",{children:[a(o,{htmlFor:"name",value:"Name"}),a(y,{id:"name",name:"name",value:l.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:i,required:!0}),a(s,{message:n.name,className:"mt-2"})]}),m("div",{className:"mt-4",children:[a(o,{htmlFor:"Quantity",value:"Quantity"}),a(b,{showButtons:!0,name:"total_amount",value:l.total_amount,onValueChange:i}),a(s,{message:n.total_amount,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:a(p,{className:"ml-4",disabled:c,children:"Save"})})]})]})]})}export{A as default};
