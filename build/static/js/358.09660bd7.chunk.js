"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[358],{4358:(e,s,l)=>{l.r(s),l.d(s,{default:()=>J});var t=l(5043),i=l(2749),r=l(7218),c=l(919),a=l(3003),o=l(5014),n=l(1221),d=l(5532),x=l(8028),m=l(3151),j=l(4007),h=l(4929),p=l(3984),u=l(1300),v=l(3224),f=l(6642),g=l(6720),b=l(6290),y=l(6058),N=l(579);const k=(0,t.lazy)((()=>Promise.all([l.e(775),l.e(777),l.e(536)]).then(l.bind(l,8536)))),w=e=>{let{ProjectState:s,type:l}=e;const{isOpen:i,onOpen:r,onClose:c}=(0,n.j)(),o=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette])),[w,S]=(0,t.useState)(!0),[A,P]=(0,t.useState)(null),[z,C]=(0,t.useState)(!1),[T,D]=(0,t.useState)(!1),U=(0,a.d4)((e=>e.project.isProjectCreating)),I=(0,a.d4)((e=>e.project.isProjectUpdating));return(0,N.jsxs)("div",{className:"sub-topics gap-2 flex justify-center items-center",children:[(0,N.jsx)(d.m,{label:"create"===l?"Edit":"Update",children:(0,N.jsx)(x.$,{variant:"create"===l?"outline":"solid",color:"create"===l?"white":"black",_hover:"create"===l?"black":"white",p:"create"===l&&"1rem 1.5rem",fontSize:"create"===l&&"1rem",size:"sm",onClick:r,children:"create"===l?(0,N.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,N.jsx)("span",{className:"text-white text-sm lg:text-lg ",children:" Add "}),(0,N.jsx)(y.E8b,{})]}):(0,N.jsx)("span",{children:b.A.edit})})}),(0,N.jsx)(m.aF,{scrollBehavior:"inside",size:"xl",isCentered:!0,isOpen:i,onClose:c,children:(0,N.jsxs)(j.$,{borderRadius:"1rem",backgroundColor:w?"#293645":"white",color:w?"white":"black",children:[(0,N.jsx)(h.r,{textTransform:"capitalize",children:(0,N.jsxs)("div",{className:"flex justify-between pe-9 items-center",children:["create"===l?"Add Project":"Update Project",(0,N.jsx)(x.$,{size:"xs",onClick:()=>{S((e=>!e))},children:w?(0,N.jsx)(g.juv,{}):(0,N.jsx)(g.hGG,{})})]})}),(0,N.jsx)(p.s,{}),(0,N.jsx)(u.c,{children:(0,N.jsx)(t.Suspense,{fallback:(0,N.jsx)("div",{className:"flex justify-center h-full ",children:(0,N.jsx)(v.y,{})}),children:(0,N.jsx)(k,{createClicked:z,updateClicked:T,setCreateClicked:C,setUpdateClicked:D,ProjectState:s,type:l})})}),(0,N.jsx)(f.j,{children:"create"===l?(0,N.jsx)(x.$,{size:"sm",isLoading:U,loadingText:"Creating",colorScheme:o.colorScheme,onClick:()=>{C(!0),A&&clearTimeout(A);setTimeout((()=>{c(),P(null)}),2e3)},children:"Create"}):(0,N.jsx)(x.$,{size:"sm",isLoading:I,loadingText:"Updating",colorScheme:o.colorScheme,onClick:()=>{D(!0),A&&clearTimeout(A);setTimeout((()=>{c(),P(null)}),100)},children:"Update"})})]})})]})};var S=l(8726),A=l(184),P=l(2887),z=l(2392),C=l(7154),T=l(9006),D=l(6692);const U=()=>{const{getAllProject:e}=(0,S.A)(),s=(0,a.wA)();return{deleteProject:async l=>{try{if(s((0,D.AT)(!0)),!l)return T.Ay.error("Please provide Id",{position:"bottom-left"});const t=JSON.parse(localStorage.getItem("jwt_Token")),{data:i}=await C.A.delete("".concat("https://prodash-backend.onrender.com","/api/project/delete/").concat(l),{headers:{Authorization:t}});i.success&&(T.Ay.success(i.message,{position:"bottom-left"}),e())}catch(t){T.Ay.error("something went wrong",{position:"bottom-left"})}finally{s((0,D.AT)(!1))}}}};var I=l(927),$=l(8360);const E=function(e){let{description:s,skillsUsed:l}=e;const i=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette])),r=()=>(0,N.jsx)(I.m,{bg:"blackAlpha.300",backdropFilter:"blur(10px) hue-rotate(90deg)"}),{isOpen:c,onOpen:o,onClose:v}=(0,n.j)(),[g,b]=t.useState((0,N.jsx)(r,{}));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.m,{fontSize:"xs",label:"Description",children:(0,N.jsx)(x.$,{borderRadius:"4px",leftIcon:(0,N.jsx)(y.Wpt,{className:"hover:cursor-pointer text-sm lg:text-lg"}),size:{base:"xs",md:"sm",lg:"sm",sm:"sm"},fontSize:"smaller",onClick:()=>{b((0,N.jsx)(r,{})),o()},children:"Project Details"})}),(0,N.jsxs)(m.aF,{isCentered:!0,isOpen:c,scrollBehavior:"inside",onClose:v,size:"xl",children:[g,(0,N.jsxs)(j.$,{children:[(0,N.jsx)(h.r,{children:"About Project"}),(0,N.jsx)(p.s,{}),(0,N.jsxs)(u.c,{children:[(0,N.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,N.jsx)($.E,{children:"Skills Used"}),(0,N.jsx)("div",{className:"flex gap-1 p-3 ",children:null===l||void 0===l?void 0:l.map((e=>(0,N.jsx)($.E,{colorScheme:"blue",children:e})))})]}),(0,N.jsxs)("div",{className:"flex flex-col",children:[(0,N.jsx)($.E,{children:"Description"}),(0,N.jsx)("p",{className:"min-h-28 p-2",children:s})]})]}),(0,N.jsx)(f.j,{children:(0,N.jsx)(x.$,{colorScheme:i.colorScheme,onClick:v,children:"Close"})})]})]})]})};var F=l(5920),L=l(5578);const O=e=>{var s;let{data:l}=e;const t=(0,z.Y)(null===l||void 0===l?void 0:l.startDate),i=(0,z.Y)(null===l||void 0===l?void 0:l.endDate),r=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette]));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"flex justify-between items-center px-2 ",children:[(0,N.jsx)("div",{className:"p-1",children:(0,N.jsx)("b",{className:"text-xl capitalize",children:null===l||void 0===l?void 0:l.title})}),(0,N.jsx)("div",{className:"flex justify-center",children:(0,N.jsx)($.E,{fontSize:"x-small",colorScheme:"large"===(null===l||void 0===l?void 0:l.size)?"red":"medium"===(null===l||void 0===l?void 0:l.size)?"yellow":"green",children:"large"===(null===l||void 0===l?void 0:l.size)?"Enterprise-scale ":"medium"===(null===l||void 0===l?void 0:l.size)?"Medium-scale ":"Small-scale "})})]}),(0,N.jsxs)("div",{className:"flex px-2 justify-between  p-2 items-center",style:{backgroundColor:r.accent},children:[(0,N.jsxs)("div",{className:"flex flex-col ",children:[(0,N.jsx)("div",{className:"flex justify-start",children:(0,N.jsx)($.E,{fontSize:"xx-small",children:"Created By,"})}),(0,N.jsx)("b",{className:"lg:text-md text-sm capitalize",children:null===l||void 0===l||null===(s=l.createdBy)||void 0===s?void 0:s.substring(0,16)}),(0,N.jsx)("div",{children:(0,N.jsxs)("p",{className:"text-[10px]",children:[t," - ",i]})}),(0,N.jsxs)("p",{className:"text-[11px] capitalize",children:["role: ",null===l||void 0===l?void 0:l.role]})]}),(0,N.jsx)("div",{className:"flex-col gap-1 items-center justify-center  flex ",children:(0,N.jsx)(F.P,{value:null===l||void 0===l?void 0:l.progressPercentage,size:"4rem",color:"green.400",children:(0,N.jsxs)(L.n,{children:[null===l||void 0===l?void 0:l.progressPercentage,"%"]})})})]})]})},_=e=>{let{data:s}=e;const[l,i]=(0,t.useState)(!1),r=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette])),{deleteProject:c}=U(),o=(0,z.Y)(null===s||void 0===s?void 0:s.startDate),n=(0,z.Y)(null===s||void 0===s?void 0:s.endDate),m=(0,a.d4)((e=>e.project.isProjectDeleteing));return(0,N.jsx)("div",{className:"relative min-h-[25rem] md:w-[20rem] lg:w-[23rem] w-full rounded-2xl shadow-xl ",style:{backgroundColor:r.primary},children:(0,N.jsxs)("div",{className:"flex flex-col ",children:[(0,N.jsx)("div",{className:"overflow-hidden rounded-t-xl",children:(0,N.jsx)("img",{className:"h-[100%] rounded-t-xl border transition-transform duration-300 transform hover:scale-105",src:(null===s||void 0===s?void 0:s.projectPhotoURL)||P,alt:"Image"})}),(0,N.jsx)("div",{className:"absolute top-0 right-0 m-2",children:(0,N.jsxs)("div",{className:"flex justify-end gap-1 p-1 rounded-2xl items-center",children:[(0,N.jsx)(d.m,{label:"Delete ",children:(0,N.jsx)(x.$,{size:"sm",colorScheme:"red",onClick:()=>c(null===s||void 0===s?void 0:s._id),children:(0,N.jsx)(g.pS_,{className:"cursor-pointer"})})}),(0,N.jsx)(d.m,{label:l?"Copied!":"Copy Details",children:(0,N.jsx)(x.$,{size:"sm",onClick:()=>{i(!0);const e="Title: ".concat(null===s||void 0===s?void 0:s.title," CreatedBy:").concat(null===s||void 0===s?void 0:s.createdBy," From").concat(o," to ").concat(n," Skills Used ").concat(null===s||void 0===s?void 0:s.skillsUsed,",Description: ").concat(null===s||void 0===s?void 0:s.description);navigator.clipboard.writeText(e).then((()=>{T.Ay.success("Task Copied",{position:"bottom-left"});const e=setTimeout((()=>i(!1)),2e3);return()=>clearTimeout(e)})).catch((e=>{console.error("Failed to copy text:",e)}))},children:l?(0,N.jsx)(A.paH,{}):(0,N.jsx)(A.zU_,{})})}),(0,N.jsx)(w,{ProjectState:s})]})}),(0,N.jsxs)("div",{className:"flex justify-between px-1 py-2 items-center",children:[(0,N.jsx)("div",{className:"flex justify-start gap-1 items-center",children:(0,N.jsx)(E,{skillsUsed:null===s||void 0===s?void 0:s.skillsUsed,description:null===s||void 0===s?void 0:s.description})}),(0,N.jsxs)("div",{className:"flex justify-center  gap-1 items-center",children:[(0,N.jsx)(x.$,{size:"xs",leftIcon:(0,N.jsx)(A.AnD,{}),colorScheme:"gray",variant:"solid",children:(0,N.jsx)("a",{className:"text-xs",target:"_blank",href:null===s||void 0===s?void 0:s.liveDemoLink,children:"Live Demo"})}),(0,N.jsx)(x.$,{size:"xs",colorScheme:"gray",variant:"solid",isLoading:m,loadingText:"Deletig",children:(0,N.jsx)("a",{className:"text-xs",target:"_blank",href:null===s||void 0===s?void 0:s.githubLink,children:(0,N.jsx)(A.hL4,{})})})]})]}),(0,N.jsx)(O,{data:s})]})})};var B=l(5624);const Y=[{id:"8999s",label:"All",filterType:"All"},{id:1,label:"large",filterType:"size"},{id:2,label:"medium",filterType:"size"},{id:3,label:"small",filterType:"size"},{id:4,label:"completed",filterType:"progressPercentage"},{id:5,label:"due",filterType:"progressPercentage"}],J=()=>{const{getAllProject:e}=(0,S.A)(),s=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette])),[l,n]=(0,t.useState)(null),[d,x]=(0,t.useState)(null),m=(0,a.d4)((e=>e.project.allProject));(0,t.useEffect)((()=>{e()}),[]);return(0,N.jsx)(i.A,{title:"Project Page",keywords:"Project, project link, github link, role, timing info, Description, data, seo",children:(0,N.jsxs)("div",{style:{backgroundColor:s.secondary},className:"grid grid-cols-12 text-white min-h-svh",children:[(0,N.jsx)(r.A,{}),(0,N.jsxs)("div",{className:"col-span-11 lg:p-3 w-screen md:w-full  lg:w-full  ",children:[(0,N.jsx)(c.A,{}),(0,N.jsxs)("div",{className:"lg:p-3 p-1   w-full",children:[(0,N.jsxs)("div",{className:"flex justify-between items-center lg:px-12 px-1",children:[(0,N.jsx)(w,{type:"create"}),(0,N.jsx)(o.A,{size:"4"})]}),(0,N.jsxs)("div",{className:"flex justify-center lg:justify-between md:justify-between p-3 lg:p-2 items-center",children:[(0,N.jsxs)("div",{className:"hidden lg:block md:block xl:block",children:["My Projects (",(null===m||void 0===m?void 0:m.length)||0,")"]}),(0,N.jsx)("div",{className:"flex justify-center gap-1 items-center",children:Y.map((e=>(0,N.jsx)("button",{onClick:()=>(e=>{try{if(n((null===e||void 0===e?void 0:e.label)===l?null:e.label),"All"===e.filterType)x(null);else if("size"===e.filterType){const s=m.filter((s=>s.size===e.label));x(s)}else{const s="completed"===e.label?m.filter((e=>100===e.progressPercentage)):m.filter((e=>e.progressPercentage<100));x(s)}}catch(s){T.Ay.error("Project Not Found",{position:"bottom-left"})}})(e),className:"border hover:border-blue-500 rounded-md px-2 lg:px-3 p-1 text-xs font-light ".concat(e.label===l?"bg-blue-500 text-white font-semibold":""),children:e.label},e.id)))})]}),(0,N.jsx)("div",{className:"p-1",children:d?(0,N.jsx)(N.Fragment,{children:0===d.length?(0,N.jsx)("div",{className:"flex justify-center h-56 w-full",children:(0,N.jsxs)("div",{className:"flex gap-1 flex-col justify-center items-center",children:[(0,N.jsx)(B.A,{message:"No Data found! Add Project Info"}),(0,N.jsx)(w,{type:"create"})]})}):(0,N.jsx)("div",{className:"flex gap-5 justify-center flex-wrap",children:d.map(((e,s)=>(0,N.jsx)(_,{data:e},s)))})}):(0,N.jsx)(N.Fragment,{children:null!==m&&void 0!==m&&m.length?(0,N.jsx)("div",{className:"flex gap-5 justify-center flex-wrap",children:m?[...m].reverse().map(((e,s)=>(0,N.jsx)(_,{data:e},s))):null}):(0,N.jsx)("div",{className:"flex justify-center h-56 w-full",children:(0,N.jsxs)("div",{className:"flex gap-1 flex-col justify-center items-center",children:[(0,N.jsx)(B.A,{message:"No Data found! Add Project Info"}),(0,N.jsx)(w,{type:"create"})]})})})})]})]})]})})}},8726:(e,s,l)=>{l.d(s,{A:()=>o});var t=l(7154),i=l(9006),r=l(3216),c=l(3003),a=l(6692);const o=()=>{const e=(0,r.Zp)(),s=(0,c.wA)();return{getAllProject:async()=>{try{const l=JSON.parse(localStorage.getItem("jwt_Token")),r=JSON.parse(localStorage.getItem("user"));if(!r||!l)return e("/"),i.Ay.error("Please Log In",{position:"bottom-left"});const c=null===r||void 0===r?void 0:r.userId,{data:o}=await t.A.get("".concat("https://prodash-backend.onrender.com","/api/project/user/").concat(c),{headers:{Authorization:l}});o.success?s((0,a.DK)(null===o||void 0===o?void 0:o.data)):i.Ay.error(o.message,{position:"bottom-left"})}catch(l){console.error("Error fetching projects:",l),i.Ay.error("Server Errddor",{position:"bottom-left"})}}}}},2392:(e,s,l)=>{l.d(s,{Y:()=>t});const t=e=>{const s=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"2-digit"}),[l,t,i]=s.split(" ");return"".concat(t).concat(l,"-").concat(i)}},2887:(e,s,l)=>{e.exports=l.p+"static/media/ImageNotFound.340253f993a2e5ca3a42.png"}}]);
//# sourceMappingURL=358.09660bd7.chunk.js.map