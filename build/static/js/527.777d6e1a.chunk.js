"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[527],{8527:(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var r=s(5043),o=s(3003),a=s(1278),i=s(1908),l=s(7921),c=s(5695),n=s(1357),d=s(8596),p=s(5522),u=s(1012),h=s(1462),m=s(423),x=s(7154),g=s(9006),f=s(4144),j=s(3216),k=s(4964);const y=()=>{const e=(0,o.wA)(),t=(0,j.Zp)(),{getAllTask:s}=(0,k.A)();return{createTask:async r=>{try{e((0,f.vJ)(!0));const o=localStorage.getItem("jwt_Token");if(!o)throw t("/"),new Error("No token found");const{userId:a,title:i,description:l,taskPriority:c,dueDate:n}=r;if(!a||!i||!l||!c||!n){const e=[];return a||e.push("userId"),i||e.push("title"),l||e.push("description"),c||e.push("taskPriority"),n||e.push("dueDate"),g.Ay.error("Missing : ".concat(e.join(", ")," "),{position:"bottom-left"})}const{data:d}=await x.A.post("".concat("https://prodash-backend.onrender.com","/api/task/createtask"),{task:r},{headers:{Authorization:o}});d.success?(g.Ay.success(d.message,{position:"bottom-left"}),s()):g.Ay.error(d.message,{position:"bottom-left"})}catch(o){console.error(o),g.Ay.error(o.message||"Something went wrong",{position:"bottom-left"})}finally{e((0,f.vJ)(!1))}}}},v=()=>{const e=(0,o.wA)(),t=(0,j.Zp)(),{getAllTask:s}=(0,k.A)();return{updateTask:async(r,o)=>{try{e((0,f.vJ)(!0));const a=JSON.parse(localStorage.getItem("jwt_Token"));if(!o)throw new Error("No taskId found");if(!a)throw t("/"),new Error("No token found");const{userId:i,title:l,description:c,taskPriority:n,dueDate:d,progress:p}=r;if(!i||!l||!c||!n||!d){const e=[];return i||e.push("userId"),l||e.push("title"),c||e.push("description"),n||e.push("taskPriority"),d||e.push("dueDate"),g.Ay.error("Missing : ".concat(e.join(", ")," "),{position:"bottom-left"})}const{data:u}=await x.A.put("".concat("https://prodash-backend.onrender.com","/api/task/updatemytask/").concat(o),{task:r},{headers:{Authorization:a,"Content-Type":"application/json"}});u.success?(g.Ay.success(u.message,{position:"bottom-left"}),s()):g.Ay.error(u.message,{position:"bottom-left"})}catch(a){g.Ay.error("something went wrong",{position:"bottom-left"})}finally{e((0,f.vJ)(!1))}}}};var b=s(6058),w=s(579);const A=e=>{let{createClicked:t,setCreateClicked:s,listState:x,updateClicked:g,setUpdateClicked:f}=e;const{createTask:j}=y(),{updateTask:k}=v(),A=(0,o.d4)((e=>e.user.userDetails)),[P,S]=(0,r.useState)({userId:null===A||void 0===A?void 0:A.id,title:"",description:"",taskPriority:"medium",progressPercentage:5,dueDate:""}),D=(0,o.d4)((e=>e.themes.palettes[e.themes.currentPalette]));(0,r.useEffect)((()=>{x&&S({userId:x.userId||(null===A||void 0===A?void 0:A.userId)||"",taskPriority:x.taskPriority||"",title:x.title||"",description:x.description||"",dueDate:x.dueDate?new Date(x.dueDate).toISOString().slice(0,16):"",progressPercentage:x.progressPercentage||""})}),[x]),(0,r.useEffect)((()=>{t&&(j(P),s(!1))}),[t]),(0,r.useEffect)((()=>{g&&(k(P,x._id),f(!1))}),[g]);const N={mt:"2",ml:"-2.5",fontSize:"sm"};return(0,w.jsxs)("div",{className:"flex flex-col justify-start lg:px-2 sm:px-1 gap-2",children:[(0,w.jsx)("div",{className:"flex justify-between items-center ",children:(0,w.jsx)("span",{className:"text-xs  text-[grey]",children:"( * ) indicates Required"})}),(0,w.jsxs)("div",{className:"flex flex-col gap-1 items",children:[(0,w.jsx)("span",{className:"text-xs font-bold",children:"Title*"}),(0,w.jsxs)(a.M,{children:[(0,w.jsx)(i.G6,{color:"black",children:(0,w.jsx)(h.Kvy,{})}),(0,w.jsx)(l.p,{value:P.title,onChange:e=>S((t=>({...t,title:e.target.value}))),variant:"outline",size:"md",focusBorderColor:D.primary,placeholder:"e.g. Complete 2 DSA problems"})]})]}),(0,w.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,w.jsx)("span",{className:"text-xs font-bold",children:"Description*"}),(0,w.jsx)(c.T,{value:P.description,onChange:e=>S((t=>({...t,description:e.target.value}))),focusBorderColor:D.primary,placeholder:"Add some details, about the task"})]}),(0,w.jsxs)("div",{className:"flex flex-col gap-1 items",children:[(0,w.jsx)("span",{className:"text-xs font-bold",children:"Due Date*"}),(0,w.jsxs)(a.M,{children:[(0,w.jsx)(i.G6,{color:"black",children:(0,w.jsx)(m.fgw,{})}),(0,w.jsx)(l.p,{textTransform:"uppercase",name:"duedate",value:P.dueDate,onChange:e=>S((t=>({...t,dueDate:e.target.value}))),focusBorderColor:D.primary,placeholder:"Select Date and Time",size:"md",type:"datetime-local"})]})]}),(0,w.jsxs)(n.z,{name:"priority",onChange:e=>S((t=>({...t,taskPriority:e}))),value:P.taskPriority,children:[(0,w.jsx)("span",{className:"text-xs font-bold",children:"Priority"}),(0,w.jsxs)("div",{className:"flex bg- rounded-lg p-3 gap-4 items-center",children:[(0,w.jsx)(d.s,{colorScheme:D.colorScheme,value:"high",children:"High"}),(0,w.jsx)(d.s,{colorScheme:D.colorScheme,value:"medium",children:"Medium"}),(0,w.jsx)(d.s,{colorScheme:D.colorScheme,value:"low",children:"Low"})]})]}),(0,w.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,w.jsx)("span",{className:"text-xs font-bold",children:"Progress"}),(0,w.jsx)(p.az,{p:4,pt:6,children:(0,w.jsxs)(u.Ap,{"aria-label":"slider-ex-6",colorScheme:D.colorScheme,value:P.progressPercentage,onChange:e=>S((t=>({...t,progressPercentage:e}))),children:[(0,w.jsx)(u.d6,{colo:!0,value:25,...N,children:"25%"}),(0,w.jsx)(u.d6,{value:50,...N,children:"50%"}),(0,w.jsx)(u.d6,{value:75,...N,children:"75%"}),(0,w.jsxs)(u.d6,{value:P.progressPercentage,textAlign:"center",bg:D.primary,color:"white",mt:"-10",ml:"-5",w:"12",children:[P.progressPercentage,"%"]}),(0,w.jsx)(u.hB,{children:(0,w.jsx)(u.hJ,{})}),(0,w.jsx)(u.OQ,{})]})})]}),(0,w.jsxs)("div",{className:"flex gap-1 items-center justify-center",children:[(0,w.jsx)(b.DR4,{})," ",(0,w.jsx)("span",{children:"thanks for your time..."})]})]})}}}]);
//# sourceMappingURL=527.777d6e1a.chunk.js.map