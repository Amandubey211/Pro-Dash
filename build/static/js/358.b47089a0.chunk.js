"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[358],{5624:(e,t,s)=>{s.d(t,{A:()=>r});s(5043);const l=s.p+"static/media/EmptyList.c788c5714e75190572683f329d0c04fa.svg";var i=s(579);const r=e=>{let{message:t}=e;return(0,i.jsxs)("div",{className:"flex flex-col gap-2 justify-center p-5 items-center",children:[(0,i.jsx)("img",{className:"h-20 w-20",src:l,alt:"empty task  banner"}),(0,i.jsx)("span",{className:"text-sm font-light",children:t})]})}},4358:(e,t,s)=>{s.r(t),s.d(t,{default:()=>G});var l=s(5043),i=s(2749),r=s(7218),c=s(919),a=s(3003),o=s(5014),n=s(1221),d=s(5532),x=s(8028),m=s(3151),j=s(4007),h=s(4929),p=s(3984),u=s(1300),f=s(3224),v=s(6642),g=s(6720),b=s(6290),y=s(6058),N=s(579);const k=(0,l.lazy)((()=>Promise.all([s.e(775),s.e(777),s.e(536)]).then(s.bind(s,8536)))),w=e=>{let{ProjectState:t,type:s}=e;const{isOpen:i,onOpen:r,onClose:c}=(0,n.j)(),o=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette])),[w,S]=(0,l.useState)(!0),[A,P]=(0,l.useState)(null),[z,C]=(0,l.useState)(!1),[T,D]=(0,l.useState)(!1),U=(0,a.d4)((e=>e.project.isProjectCreating)),I=(0,a.d4)((e=>e.project.isProjectUpdating));return(0,N.jsxs)("div",{className:"sub-topics gap-2 flex justify-center items-center",children:[(0,N.jsx)(d.m,{label:"create"===s?"Edit":"Update",children:(0,N.jsx)(x.$,{title:"create"===s?"Edit":"Update",variant:"create"===s?"outline":"solid",color:"create"===s?"white":"black",p:"create"===s&&"1rem 1.5rem",fontSize:"create"===s&&"1rem",size:"sm",onClick:r,children:"create"===s?(0,N.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,N.jsx)("span",{className:"text-white text-sm lg:text-lg ",children:" Add "}),(0,N.jsx)(y.E8b,{})]}):(0,N.jsx)("span",{children:b.A.edit})})}),(0,N.jsx)(m.aF,{scrollBehavior:"inside",size:"xl",isCentered:!0,isOpen:i,onClose:c,children:(0,N.jsxs)(j.$,{borderRadius:"1rem",backgroundColor:w?"#293645":"white",color:w?"white":"black",children:[(0,N.jsx)(h.r,{textTransform:"capitalize",children:(0,N.jsxs)("div",{className:"flex justify-between pe-9 items-center",children:["create"===s?"Add Project":"Update Project",(0,N.jsx)(x.$,{size:"xs",title:"theme mode",onClick:()=>{S((e=>!e))},children:w?(0,N.jsx)(g.juv,{}):(0,N.jsx)(g.hGG,{})})]})}),(0,N.jsx)(p.s,{}),(0,N.jsx)(u.c,{children:(0,N.jsx)(l.Suspense,{fallback:(0,N.jsx)("div",{className:"flex justify-center h-full ",children:(0,N.jsx)(f.y,{})}),children:(0,N.jsx)(k,{createClicked:z,updateClicked:T,setCreateClicked:C,setUpdateClicked:D,ProjectState:t,type:s})})}),(0,N.jsx)(v.j,{children:"create"===s?(0,N.jsx)(x.$,{size:"sm",title:"create",isLoading:U,loadingText:"Creating",colorScheme:o.colorScheme,onClick:()=>{C(!0),A&&clearTimeout(A);setTimeout((()=>{c(),P(null)}),2e3)},children:"Create"}):(0,N.jsx)(x.$,{size:"sm",title:"update",isLoading:I,loadingText:"Updating",colorScheme:o.colorScheme,onClick:()=>{D(!0),A&&clearTimeout(A);setTimeout((()=>{c(),P(null)}),100)},children:"Update"})})]})})]})};var S=s(8726),A=s(184),P=s(8816),z=s(2392),C=s(7154),T=s(9006),D=s(6692);const U=()=>{const{getAllProject:e}=(0,S.A)(),t=(0,a.wA)();return{deleteProject:async s=>{try{if(t((0,D.AT)(!0)),!s)return T.Ay.error("Please provide Id",{position:"bottom-left"});const l=JSON.parse(localStorage.getItem("jwt_Token")),{data:i}=await C.A.delete("".concat("https://prodash-backend.onrender.com","/api/project/delete/").concat(s),{headers:{Authorization:l}});i.success&&(T.Ay.success(i.message,{position:"bottom-left"}),e())}catch(l){T.Ay.error("something went wrong",{position:"bottom-left"})}finally{t((0,D.AT)(!1))}}}};var I=s(927),E=s(8360);const $=function(e){let{description:t,skillsUsed:s}=e;const i=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette])),r=()=>(0,N.jsx)(I.m,{bg:"blackAlpha.300",backdropFilter:"blur(10px) hue-rotate(90deg)"}),{isOpen:c,onOpen:o,onClose:f}=(0,n.j)(),[g,b]=l.useState((0,N.jsx)(r,{}));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d.m,{fontSize:"xs",label:"Description",children:(0,N.jsx)(x.$,{title:"Project Information",borderRadius:"4px",leftIcon:(0,N.jsx)(y.Wpt,{className:"hover:cursor-pointer text-sm lg:text-lg"}),size:{base:"xs",md:"sm",lg:"sm",sm:"sm"},fontSize:"smaller",onClick:()=>{b((0,N.jsx)(r,{})),o()},children:"Project Details"})}),(0,N.jsxs)(m.aF,{isCentered:!0,isOpen:c,scrollBehavior:"inside",onClose:f,size:"xl",children:[g,(0,N.jsxs)(j.$,{children:[(0,N.jsx)(h.r,{children:"About Project"}),(0,N.jsx)(p.s,{}),(0,N.jsxs)(u.c,{children:[(0,N.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,N.jsx)(E.E,{children:"Skills Used"}),(0,N.jsx)("div",{className:"flex gap-1 p-3 ",children:null===s||void 0===s?void 0:s.map(((e,t)=>(0,N.jsx)(E.E,{colorScheme:"blue",children:e},t)))})]}),(0,N.jsxs)("div",{className:"flex flex-col",children:[(0,N.jsx)(E.E,{children:"Description"}),(0,N.jsx)("p",{className:"min-h-28 p-2",children:t})]})]}),(0,N.jsx)(v.j,{children:(0,N.jsx)(x.$,{colorScheme:i.colorScheme,onClick:f,children:"Close"})})]})]})]})};var F=s(5920),L=s(5578);const O=e=>{var t;let{data:s}=e;const l=(0,z.Y)(null===s||void 0===s?void 0:s.startDate),i=(0,z.Y)(null===s||void 0===s?void 0:s.endDate),r=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette]));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)("div",{className:"flex justify-between items-center px-2 ",children:[(0,N.jsx)("div",{className:"p-1",children:(0,N.jsx)("b",{className:"text-xl capitalize",children:null===s||void 0===s?void 0:s.title})}),(0,N.jsx)("div",{className:"flex justify-center",children:(0,N.jsx)(E.E,{fontSize:"x-small",colorScheme:"large"===(null===s||void 0===s?void 0:s.size)?"red":"medium"===(null===s||void 0===s?void 0:s.size)?"yellow":"green",children:"large"===(null===s||void 0===s?void 0:s.size)?"Enterprise-scale ":"medium"===(null===s||void 0===s?void 0:s.size)?"Medium-scale ":"Small-scale "})})]}),(0,N.jsxs)("div",{className:"flex px-2 justify-between  p-2 items-center",style:{backgroundColor:r.accent},children:[(0,N.jsxs)("div",{className:"flex flex-col ",children:[(0,N.jsx)("div",{className:"flex justify-start",children:(0,N.jsx)(E.E,{fontSize:"xx-small",children:"Created By,"})}),(0,N.jsx)("b",{className:"lg:text-md text-sm capitalize",children:null===s||void 0===s||null===(t=s.createdBy)||void 0===t?void 0:t.substring(0,16)}),(0,N.jsx)("div",{children:(0,N.jsxs)("p",{className:"text-[10px]",children:[l," - ",i]})}),(0,N.jsxs)("p",{className:"text-[11px] capitalize",children:["role: ",null===s||void 0===s?void 0:s.role]})]}),(0,N.jsx)("div",{className:"flex-col gap-1 items-center justify-center  flex ",children:(0,N.jsx)(F.P,{value:null===s||void 0===s?void 0:s.progressPercentage,size:"4rem",color:"green.400",children:(0,N.jsxs)(L.n,{children:[null===s||void 0===s?void 0:s.progressPercentage,"%"]})})})]})]})},_=e=>{let{data:t}=e;const[s,i]=(0,l.useState)(!1),r=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette])),{deleteProject:c}=U(),o=(0,z.Y)(null===t||void 0===t?void 0:t.startDate),n=(0,z.Y)(null===t||void 0===t?void 0:t.endDate),m=(0,a.d4)((e=>e.project.isProjectDeleteing));return(0,N.jsx)("div",{className:"relative min-h-[25rem] md:w-[20rem] lg:w-[23rem] w-full rounded-2xl shadow-xl ",style:{backgroundColor:r.primary},children:(0,N.jsxs)("div",{className:"flex flex-col ",children:[(0,N.jsx)("div",{className:"overflow-hidden rounded-t-xl",children:(0,N.jsx)("img",{className:"h-[100%] rounded-t-xl border transition-transform duration-300 transform hover:scale-105",src:(null===t||void 0===t?void 0:t.projectPhotoURL)||P,alt:"Image"})}),(0,N.jsx)("div",{className:"absolute top-0 right-0 m-2",children:(0,N.jsxs)("div",{className:"flex justify-end gap-1 p-1 rounded-2xl items-center",children:[(0,N.jsx)(d.m,{label:"Delete ",children:(0,N.jsx)(x.$,{title:"delete project",size:"sm",colorScheme:"red",onClick:()=>c(null===t||void 0===t?void 0:t._id),children:(0,N.jsx)(g.pS_,{className:"cursor-pointer"})})}),(0,N.jsx)(d.m,{label:s?"Copied!":"Copy Details",children:(0,N.jsx)(x.$,{title:"copy project Info",size:"sm",onClick:()=>{i(!0);const e="Title: ".concat(null===t||void 0===t?void 0:t.title," CreatedBy:").concat(null===t||void 0===t?void 0:t.createdBy," From").concat(o," to ").concat(n," Skills Used ").concat(null===t||void 0===t?void 0:t.skillsUsed,",Description: ").concat(null===t||void 0===t?void 0:t.description);navigator.clipboard.writeText(e).then((()=>{T.Ay.success("Task Copied",{position:"bottom-left"});const e=setTimeout((()=>i(!1)),2e3);return()=>clearTimeout(e)})).catch((e=>{console.error("Failed to copy text:",e)}))},children:s?(0,N.jsx)(A.paH,{}):(0,N.jsx)(A.zU_,{})})}),(0,N.jsx)(w,{ProjectState:t})]})}),(0,N.jsxs)("div",{className:"flex justify-between px-1 py-2 items-center",children:[(0,N.jsx)("div",{className:"flex justify-start gap-1 items-center",children:(0,N.jsx)($,{skillsUsed:null===t||void 0===t?void 0:t.skillsUsed,description:null===t||void 0===t?void 0:t.description})}),(0,N.jsxs)("div",{className:"flex justify-center  gap-1 items-center",children:[(0,N.jsx)(x.$,{title:"live demo project",size:"xs",leftIcon:(0,N.jsx)(A.AnD,{}),colorScheme:"gray",variant:"solid",children:(0,N.jsx)("a",{className:"text-xs",target:"_blank",href:null===t||void 0===t?void 0:t.liveDemoLink,children:"Live Demo"})}),(0,N.jsx)(x.$,{title:"Gith hub repo",size:"xs",colorScheme:"gray",variant:"solid",isLoading:m,loadingText:"Deletig",children:(0,N.jsx)("a",{className:"text-xs",target:"_blank",href:null===t||void 0===t?void 0:t.githubLink,children:(0,N.jsx)(A.hL4,{})})})]})]}),(0,N.jsx)(O,{data:t})]})})};var B=s(5624);const Y=[{id:"8999s",label:"All",filterType:"All"},{id:1,label:"large",filterType:"size"},{id:2,label:"medium",filterType:"size"},{id:3,label:"small",filterType:"size"},{id:4,label:"completed",filterType:"progressPercentage"},{id:5,label:"due",filterType:"progressPercentage"}],G=()=>{const{getAllProject:e}=(0,S.A)(),t=(0,a.d4)((e=>e.themes.palettes[e.themes.currentPalette])),[s,n]=(0,l.useState)(null),[d,x]=(0,l.useState)(null),m=(0,a.d4)((e=>e.project.allProject));(0,l.useEffect)((()=>{e()}),[]);return(0,N.jsx)(i.A,{title:"Project Page",keywords:"Project, project link, github link, role, timing info, Description, data, seo",children:(0,N.jsxs)("div",{style:{backgroundColor:t.secondary},className:"grid grid-cols-12 text-white min-h-svh",children:[(0,N.jsx)(r.A,{}),(0,N.jsxs)("div",{className:"col-span-11 lg:p-3 w-screen md:w-full  lg:w-full  ",children:[(0,N.jsx)(c.A,{}),(0,N.jsxs)("div",{className:"lg:p-3 p-1   w-full",children:[(0,N.jsxs)("div",{className:"flex justify-between items-center lg:px-12 px-1",children:[(0,N.jsx)(w,{type:"create"}),(0,N.jsx)(o.A,{size:"4"})]}),(0,N.jsxs)("div",{className:"flex justify-center lg:justify-between md:justify-between p-3 lg:p-2 items-center",children:[(0,N.jsxs)("div",{className:"hidden lg:block md:block xl:block",children:["My Projects (",(null===m||void 0===m?void 0:m.length)||0,")"]}),(0,N.jsx)("div",{className:"flex justify-center gap-1 items-center",children:Y.map((e=>(0,N.jsx)("button",{title:"filter :".concat(e.label),onClick:()=>(e=>{try{if(n((null===e||void 0===e?void 0:e.label)===s?null:e.label),"All"===e.filterType)x(null);else if("size"===e.filterType){const t=m.filter((t=>t.size===e.label));x(t)}else{const t="completed"===e.label?m.filter((e=>100===e.progressPercentage)):m.filter((e=>e.progressPercentage<100));x(t)}}catch(t){T.Ay.error("Project Not Found",{position:"bottom-left"})}})(e),className:"border hover:border-blue-500 rounded-md px-2 lg:px-3 p-1 text-xs font-light ".concat(e.label===s?"bg-blue-500 text-white font-semibold":""),children:e.label},e.id)))})]}),(0,N.jsx)("div",{className:"p-1",children:d?(0,N.jsx)(N.Fragment,{children:0===d.length?(0,N.jsx)("div",{className:"flex justify-center h-56 w-full",children:(0,N.jsxs)("div",{className:"flex gap-1 flex-col justify-center items-center",children:[(0,N.jsx)(B.A,{message:"No Data found! Add Project Info"}),(0,N.jsx)(w,{type:"create"})]})}):(0,N.jsx)("div",{className:"flex gap-5 justify-center flex-wrap",children:d.map(((e,t)=>(0,N.jsx)(_,{data:e},t)))})}):(0,N.jsx)(N.Fragment,{children:null!==m&&void 0!==m&&m.length?(0,N.jsx)("div",{className:"flex gap-5 justify-center flex-wrap",children:m?[...m].reverse().map(((e,t)=>(0,N.jsx)(_,{data:e},t))):null}):(0,N.jsx)("div",{className:"flex justify-center h-56 w-full",children:(0,N.jsxs)("div",{className:"flex gap-1 flex-col justify-center items-center",children:[(0,N.jsx)(B.A,{message:"No Data found! Add Project Info"}),(0,N.jsx)(w,{type:"create"})]})})})})]})]})]})})}},8726:(e,t,s)=>{s.d(t,{A:()=>o});var l=s(7154),i=s(9006),r=s(3216),c=s(3003),a=s(6692);const o=()=>{const e=(0,r.Zp)(),t=(0,c.wA)();return{getAllProject:async()=>{try{const s=JSON.parse(localStorage.getItem("jwt_Token")),r=JSON.parse(localStorage.getItem("user"));if(!r||!s)return e("/"),i.Ay.error("Please Log In",{position:"bottom-left"});const c=null===r||void 0===r?void 0:r.userId,{data:o}=await l.A.get("".concat("https://prodash-backend.onrender.com","/api/project/user/").concat(c),{headers:{Authorization:s}});o.success?t((0,a.DK)(null===o||void 0===o?void 0:o.data)):i.Ay.error(o.message,{position:"bottom-left"})}catch(s){console.error("Error fetching projects:",s),i.Ay.error("Server Errddor",{position:"bottom-left"})}}}}},2392:(e,t,s)=>{s.d(t,{Y:()=>l});const l=e=>{const t=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"2-digit"}),[s,l,i]=t.split(" ");return"".concat(l).concat(s,"-").concat(i)}},8816:(e,t,s)=>{e.exports=s.p+"static/media/ImageNotFound.340253f993a2e5ca3a42.png"}}]);
//# sourceMappingURL=358.b47089a0.chunk.js.map