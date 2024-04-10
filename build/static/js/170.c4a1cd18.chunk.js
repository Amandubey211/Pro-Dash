"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[170],{5624:(e,t,s)=>{s.d(t,{A:()=>i});s(5043);const l=s.p+"static/media/EmptyList.c788c5714e75190572683f329d0c04fa.svg";var a=s(579);const i=e=>{let{message:t}=e;return(0,a.jsxs)("div",{className:"flex flex-col gap-2 justify-center p-5 items-center",children:[(0,a.jsx)("img",{className:"h-20 w-20",src:l,alt:"empty task  banner"}),(0,a.jsx)("span",{className:"text-sm font-light",children:t})]})}},2170:(e,t,s)=>{s.r(t),s.d(t,{default:()=>O});var l=s(5043),a=s(7218),i=s(2749),n=s(919),c=s(3003),o=s(5014),d=s(1221),r=s(5532),u=s(8028),x=s(3151),m=s(4007),h=s(4929),p=s(3984),f=s(1300),j=s(3224),g=s(6642),v=s(6720),y=s(6290),w=s(6058),b=s(579);const N=(0,l.lazy)((()=>s.e(533).then(s.bind(s,4533)))),k=e=>{let{title:t,type:s,eduState:a}=e;const{isOpen:i,onOpen:n,onClose:o}=(0,d.j)(),[k,A]=(0,l.useState)(!1),[S,C]=(0,l.useState)(!1),E=(0,c.d4)((e=>e.themes.currentPalette)),z=(0,c.d4)((e=>e.themes.palettes[e.themes.currentPalette])),[I,T]=(0,l.useState)(E),[D,O]=(0,l.useState)(null),P=(0,c.d4)((e=>e.education.iseUpdating)),U=(0,c.d4)((e=>e.education.isCreating));return(0,b.jsxs)("div",{className:"sub-topics gap-2 flex justify-center items-center ",children:["create"===s?(0,b.jsx)(r.m,{label:"Edit",children:(0,b.jsxs)("button",{title:"Add Education Info",type:"button",onClick:()=>{n()},style:{backgroundColor:z.accent},className:"  p-1 rounded-md lg:px-4 px-2 font-semibold uppercase gap-3 flex items-center justify-center cursor-pointer transition duration-300 transform hover:scale-105",children:[(0,b.jsx)("span",{className:"text-white text-sm lg:text-lg ",children:" Add "}),(0,b.jsx)(w.E8b,{})]})}):(0,b.jsx)(r.m,{label:"Update",children:(0,b.jsx)(u.$,{size:"sm",title:"Update Education Info",type:"button",onClick:()=>{n()},className:"  rounded-lg font-bold uppercase gap-3 flex items-center justify-center cursor-pointer transition duration-300 transform hover:scale-105",children:y.A.edit})}),(0,b.jsx)(x.aF,{colorScheme:z.colorScheme,scrollBehavior:"inside",size:"xl",isCentered:!0,isOpen:i,onClose:o,children:(0,b.jsxs)(m.$,{borderRadius:"1rem",backgroundColor:"".concat("dark"===I?"#293645":"white"),color:"".concat("dark"===I?"white":"black"),children:[(0,b.jsx)(h.r,{textTransform:"capitalize",children:(0,b.jsxs)("div",{className:"flex justify-between pe-9 items-center",children:["create"===s?"Add Education":"Update Education",(0,b.jsx)(u.$,{title:"theme mode",size:"xs",onClick:()=>{T("light"===E||"light"===I?"dark":"light")},children:"dark"===I?(0,b.jsx)(v.juv,{}):(0,b.jsx)(v.hGG,{})})]})}),(0,b.jsx)(p.s,{}),(0,b.jsx)(f.c,{children:(0,b.jsx)(l.Suspense,{fallback:(0,b.jsx)("div",{className:"flex justify-center h-full ",children:(0,b.jsx)(j.y,{})}),children:(0,b.jsx)(N,{eduState:a,updateClicked:k,setUpdateClicked:A,createClicked:S,setCreateClicked:C})})}),(0,b.jsx)(g.j,{children:"create"===s?(0,b.jsx)(u.$,{title:"create",size:"sm",isLoading:U,loadingText:"Saving",onClick:()=>{C(!0),D&&clearTimeout(D);setTimeout((()=>{o(),O(null)}),100)},colorScheme:z.colorScheme,children:"Create"}):(0,b.jsx)(u.$,{size:"sm",title:"Update",isLoading:P,loadingText:"Updating",onClick:()=>{A(!0),D&&clearTimeout(D);setTimeout((()=>{o(),O(null)}),100)},colorScheme:z.colorScheme,children:"Update"})})]})})]})};var A=s(4504),S=s(8360),C=s(184),E=s(9006),z=s(7154);const I=()=>{const{fetchEducationData:e}=(0,A.A)();return{deleteEducation:async t=>{try{if(!t)throw new Error("Please Provide ID");const s=JSON.parse(localStorage.getItem("jwt_Token")),l=JSON.parse(localStorage.getItem("user")),a=null===l||void 0===l?void 0:l.userId,{data:i}=await z.A.delete("".concat("https://prodash-backend.onrender.com","/api/edu/").concat(a,"/delete/").concat(t),{headers:{Authorization:s}});if(!i.success)throw new Error(i.message||"Delete operation failed.");E.Ay.success(i.message,{position:"bottom-left"}),e()}catch(s){E.Ay.error("Something went wrong",{position:"bottom-left"})}}}},T=e=>{let{data:t}=e;const[s,a]=(0,l.useState)(!1),{deleteEducation:i}=I(),n=(0,c.d4)((e=>e.themes.palettes[e.themes.currentPalette]));return(0,b.jsxs)("div",{className:"flex flex-col shadow-2xl rounded-2xl py-1 min-h-60 w-full lg:w-[35%]",style:{backgroundColor:n.primary},children:[(0,b.jsxs)("div",{className:"flex justify-between   p-2 m-1 items-center rounded-lg",style:{backgroundColor:n.accent},children:[(0,b.jsxs)("div",{className:"flex gap-1 items-center ",children:[(0,b.jsx)(C.mFx,{}),(0,b.jsx)("b",{className:"uppercase text-xl",children:null===t||void 0===t?void 0:t.degree})]}),(0,b.jsxs)("div",{className:"flex gap-1    justify-start items-center",children:[(0,b.jsx)(r.m,{label:"Delete",children:(0,b.jsx)(u.$,{size:"sm",title:"delete",onClick:()=>{i(t._id)},color:"red",children:(0,b.jsx)(v.Rrl,{className:""})})}),(0,b.jsx)(r.m,{label:s?"Copied!":"Copy",children:(0,b.jsx)(u.$,{title:"copy Education Info",size:"sm",onClick:()=>{const e="Degree: ".concat(t.degree,", in ").concat(null===t||void 0===t?void 0:t.fieldOfStudy,", Date: ").concat(t.startYear," - ").concat(t.endYear,", Institution: ").concat(null===t||void 0===t?void 0:t.institution,", GPA: ").concat(null===t||void 0===t?void 0:t.GPA,"/10");navigator.clipboard.writeText(e).then((()=>{E.Ay.success("Education Info Copied",{position:"bottom-left"}),a(!0),setTimeout((()=>a(!1)),2e3)})).catch((e=>{console.error("Failed to copy text:",e)}))},children:s?(0,b.jsx)(C.paH,{}):(0,b.jsx)(C.zU_,{})})}),(0,b.jsx)(k,{eduState:t,title:"Update Education",type:"update"})]})]}),(0,b.jsxs)("div",{className:"p-1",children:[(0,b.jsxs)("div",{className:"flex justify-between p-1 m-1 rounded-xl",children:[(0,b.jsxs)("div",{className:"flex flex-col gap-1  capitalize",children:[(0,b.jsxs)("div",{className:"flex gap-1 items-center ",children:[(0,b.jsx)(w.w06,{}),(0,b.jsx)("b",{children:null===t||void 0===t?void 0:t.fieldOfStudy})]}),(0,b.jsxs)("div",{className:"flex gap-1 items-center ",children:[(0,b.jsx)(w.kFq,{}),(0,b.jsx)("b",{className:"text-sm",children:null===t||void 0===t?void 0:t.institution})]}),(0,b.jsxs)("div",{className:"flex gap-1 items-center ",children:[(0,b.jsx)(w.pxL,{}),(0,b.jsx)("span",{className:"text-xs",children:null===t||void 0===t?void 0:t.institutionLocation})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex justify-between items-center gap-1 ",children:[(0,b.jsx)(w.sLe,{}),(0,b.jsx)(S.E,{fontSize:"x-small",children:"".concat(t.startYear," - ").concat(t.endYear)})]}),(0,b.jsxs)("span",{className:"text-xs",children:["GPA: ",(0,b.jsx)("b",{className:"text-xl",children:null===t||void 0===t?void 0:t.GPA})," /10"]})]})]}),(0,b.jsxs)("div",{className:"flex flex-col mt-2 rounded-lg p-1",style:{backgroundColor:n.accent},children:[(0,b.jsx)("span",{className:"text-sm font-bold",children:"About"}),(0,b.jsx)("div",{className:"p-2 rounded-md  overflow-hidden h-16",style:{overflowY:"auto"},children:(0,b.jsx)("p",{className:"text-sm",style:{scrollbarWidth:"none",msOverflowStyle:"none",overflow:"hidden"},children:(null===t||void 0===t?void 0:t.description)||"Adding the description field greatly improves profile completeness and engagement. Thank you for your attention to detail!"})})]})]})]})};var D=s(5624);const O=()=>{const e=(0,c.d4)((e=>e.themes.palettes[e.themes.currentPalette])),{fetchEducationData:t}=(0,A.A)(),s=(0,c.d4)((e=>e.education.myEducations));return(0,l.useEffect)((()=>{t()}),[]),(0,b.jsx)(i.A,{title:"My Education",keywords:" Education,Degree,Grade,Field, description, info,data,seo",children:(0,b.jsxs)("div",{style:{backgroundColor:e.secondary},className:"grid grid-cols-12 text-white min-h-svh",children:[(0,b.jsx)(a.A,{}),(0,b.jsxs)("div",{className:"col-span-11 lg:p-3 w-screen md:w-full  lg:w-full  ",children:[(0,b.jsx)(n.A,{}),(0,b.jsxs)("div",{className:"lg:p-3 p-1   w-full",children:[(0,b.jsxs)("div",{className:"flex justify-between items-center lg:px-12 px-1",children:[(0,b.jsx)(k,{title:"Add  Education",type:"create"}),(0,b.jsx)(o.A,{size:"4"})]}),(0,b.jsx)("div",{className:"p-2 flex w-full lg:gap-4 gap-3  my-3 items-center  flex-wrap   ",children:s&&s.length>0?s.slice().reverse().map(((e,t)=>(0,b.jsx)(T,{data:e},t))):(0,b.jsx)("div",{className:"flex justify-center h-56 w-full",children:(0,b.jsx)(D.A,{message:"No Data found! Add Education Info"})})})]})]})]})})}},4504:(e,t,s)=>{s.d(t,{A:()=>o});var l=s(7154),a=s(9006),i=s(3003),n=s(8801),c=s(3216);const o=()=>{const e=(0,i.wA)(),t=(0,c.Zp)();return{fetchEducationData:async()=>{try{const s=JSON.parse(localStorage.getItem("user")),a=null===s||void 0===s?void 0:s.userId,i=JSON.parse(localStorage.getItem("jwt_Token"));if(!i||!a)throw t("/"),new Error("No token found");const{data:c}=await l.A.get("".concat("https://prodash-backend.onrender.com","/api/edu/getall/").concat(a),{headers:{Authorization:i}});c.success&&e((0,n.Jy)(c.data))}catch(s){console.error("Error fetching education data:",s),a.Ay.error("Something went wrong while fetching education data",{position:"bottom-left"})}}}}}}]);
//# sourceMappingURL=170.c4a1cd18.chunk.js.map