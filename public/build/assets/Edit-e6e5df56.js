import{W as w,j as s,a as e,b as f}from"./app-5ef925c1.js";import{A as v}from"./tooltip.esm-8c154d5b.js";import{T as d,I as o}from"./TextInput-5b03f5ad.js";import{I as i}from"./InputLabel-fd3bcd82.js";import{P as g}from"./PrimaryButton-f3c27ff8.js";import{D as c}from"./dropdown.esm-30eac630.js";import"./virtualscroller.esm-c62725ab.js";function D(l){console.log(l);const{data:m,setData:n,patch:u,processing:h,errors:r,reset:N}=w({name:l.user.name,email:l.user.email,password:"",password_confirmation:"",role:l.user.role,divisi:l.user.divisi}),t=a=>{n(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)},p=a=>{a.preventDefault(),u(route("admin.user.update",l.user.id))};return s(v,{user:l.auth.user,children:[e(f,{title:"Add User"}),s("div",{className:"w-full px-4 py-5 bg-white rounded-lg shadow",children:[e("h2",{className:"text-2xl font-bold",children:"Edit User"}),s("form",{onSubmit:p,children:[s("div",{children:[e(i,{htmlFor:"name",value:"Name"}),e(d,{id:"name",name:"name",value:m.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:t,required:!0}),e(o,{message:r.name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(i,{htmlFor:"email",value:"Email"}),e(d,{id:"email",type:"email",name:"email",value:m.email,className:"mt-1 block w-full",autoComplete:"username",onChange:t,required:!0}),e(o,{message:r.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(i,{htmlFor:"password",value:"Password"}),e(d,{id:"password",type:"password",name:"password",value:m.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:t,required:!0}),e(o,{message:r.password,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e(d,{id:"password_confirmation",type:"password",name:"password_confirmation",value:m.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:t,required:!0}),e(o,{message:r.password_confirmation,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(i,{htmlFor:"wayToCollect",value:"Role"}),e(c,{value:m.role,onChange:a=>n("role",a.value),options:["admin","staff","office_maid"],placeholder:"Select Role",className:"w-full md:w-14rem"}),e(o,{message:r.role,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(i,{htmlFor:"wayToCollect",value:"Divisi"}),e(c,{value:m.divisi,onChange:a=>n("divisi",a.value),options:["-","keuangan","social media","sales"],placeholder:"Select Divisi",className:"w-full md:w-14rem"}),e(o,{message:r.divisi,className:"mt-2"})]}),e("div",{className:"flex items-center justify-end mt-4",children:e(g,{className:"ml-4",disabled:h,children:"Save"})})]})]})]})}export{D as default};