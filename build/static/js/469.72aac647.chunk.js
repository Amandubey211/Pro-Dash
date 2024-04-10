"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[469],{9469:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var a=s(1278),n=s(1908),l=s(7921),r=s(5695),i=s(5043),o=s(6058),d=s(3003),c=s(7154),u=s(9006),p=s(3216),m=s(7296),h=s(875);const x=()=>{const e=(0,p.Zp)(),{getExperience:t}=(0,m.A)(),s=(0,d.wA)();return{createExperience:async a=>{try{s((0,h.cf)(!0));const{company:n,role:l,startDate:r,userId:i,endDate:o,skillsUsed:d,description:p}=a;if(!n||!l||!r||!o||!i||!d||!p){const e=[];return i||e.push("userId"),n||e.push("company"),r||e.push("startDate"),o||e.push("endDate"),n||e.push("company"),l||e.push("role"),p||e.push("description"),u.Ay.error("Missing : ".concat(e.join(", ")," "))}const m=JSON.parse(localStorage.getItem("jwt_Token")),x=i;if(!m||!x)return e("/"),u.Ay.error("Please Log In",{position:"bottom-left"});const{data:f}=await c.A.post("".concat("https://prodash-backend.onrender.com","/api/experience/create/").concat(x),{Experience:a},{headers:{Authorization:m}});f.success&&(u.Ay.success(f.message,{position:"bottom-left"}),t())}catch(n){console.error("error occured during the creation of the experience ",n),u.Ay.error("Something went wrong",{position:"bottom-left"})}finally{s((0,h.cf)(!1))}}}},f=()=>{const{getExperience:e}=(0,m.A)(),t=(0,d.wA)();return{updateExperience:async(s,a)=>{try{t((0,h.rV)(!0));const{company:n,role:l,startDate:r,userId:i,endDate:o,skillsUsed:d,description:p}=s;if(!n||!l||!r||!o||!i||!d||!p){const e=[];return i||e.push("userId"),n||e.push("company"),r||e.push("startDate"),o||e.push("endDate"),n||e.push("company"),l||e.push("role"),p||e.push("description"),u.Ay.error("Missing : ".concat(e.join(", ")," "))}const m=JSON.parse(localStorage.getItem("jwt_Token")),x=i;if(!m||!x||!a)return navigate("/"),u.Ay.error("Please Log In",{position:"bottom-left"});const{data:f}=await c.A.put("".concat("https://prodash-backend.onrender.com","/api/experience/").concat(x,"/update/").concat(a),{Experience:s},{headers:{Authorization:m}});f.success&&(u.Ay.success(f.message,{position:"bottom-left"}),e())}catch(n){u.Ay.error("Something went wrong",{position:"bottom-left"})}finally{t((0,h.rV)(!1))}}}};var g=s(579);const v=e=>{let{updateClicked:t,setUpdateClicked:s,setCreateClicked:c,createClicked:u,experienceState:p}=e;const m=JSON.parse(localStorage.getItem("user")),[h,v]=(0,i.useState)({userId:null===m||void 0===m?void 0:m.userId,company:"",role:"",startDate:"",endDate:"",description:"",skillsUsed:[]});(0,i.useEffect)((()=>{p&&v({userId:p.userId||(null===m||void 0===m?void 0:m.userId)||"",company:p.company||"",role:p.role||"",startDate:p.startDate?new Date(p.startDate).toISOString().slice(0,16):"",endDate:p.endDate?new Date(p.endDate).toISOString().slice(0,16):"",skillsUsed:p.skillsUsed||"",description:p.description||""})}),[]);const{createExperience:y}=x(),{updateExperience:b}=f(),j=(0,d.d4)((e=>e.themes.palettes[e.themes.currentPalette])),k=(e,t)=>{if("skillsUsed"===e)if(""===t.trim())v((t=>({...t,[e]:[]})));else{let s=t.split(",").map((e=>e.trim()));const a=5;s=s.slice(0,a),v((t=>({...t,[e]:s})))}else v((s=>({...s,[e]:t})))};return(0,i.useEffect)((()=>{u&&(y(h),c(!1))}),[u]),(0,i.useEffect)((()=>{t&&(b(h,null===p||void 0===p?void 0:p._id),s(!1))}),[t]),(0,g.jsxs)("div",{className:"flex flex-col justify-start lg:px-2 sm:px-1 gap-2",children:[(0,g.jsx)("div",{className:"flex justify-between items-center ",children:(0,g.jsx)("span",{className:"text-[10px]  text-[grey]",children:"( * ) indicates Required"})}),(0,g.jsxs)("div",{className:"flex flex-col  items",children:[(0,g.jsx)("span",{className:"text-[10px] font-bold",children:"Company*"}),(0,g.jsxs)(a.M,{size:{base:"md",md:"md",lg:"md",sm:"md"},children:[(0,g.jsx)(n.G6,{fontWeight:"500",color:"black",children:(0,g.jsx)(o.kFq,{})}),(0,g.jsx)(l.p,{size:{base:"md",md:"md",lg:"md",sm:"md"},value:h.company,onChange:e=>k("company",e.target.value),variant:"outline",focusBorderColor:j.secondary,placeholder:"e.g.Amazon"})]})]}),(0,g.jsxs)("div",{className:"flex flex-col  items",children:[(0,g.jsx)("span",{className:"text-[10px] font-bold",children:"Role*"}),(0,g.jsxs)(a.M,{size:{base:"md",md:"md",lg:"md",sm:"md"},children:[(0,g.jsx)(n.G6,{fontWeight:"500",color:"black",children:(0,g.jsx)(o.RIx,{})}),(0,g.jsx)(l.p,{title:"role",size:{base:"md",md:"md",lg:"md",sm:"md"},value:h.role,onChange:e=>k("role",e.target.value),variant:"outline",focusBorderColor:j.secondary,placeholder:"e.g.Front-End Developer"})]})]}),(0,g.jsxs)("div",{className:"flex gap-2 justify-between items-center ",children:[(0,g.jsxs)("div",{className:"flex flex-col  items",children:[(0,g.jsx)("span",{className:"text-[10px] font-bold",children:"Starting Date*"}),(0,g.jsxs)(a.M,{size:{base:"xs",md:"md",lg:"md",sm:"xs"},children:[(0,g.jsx)(n.G6,{color:"black",children:(0,g.jsx)(o.sLe,{})}),(0,g.jsx)(l.p,{title:"starting date",size:{base:"xs",md:"md",lg:"md",sm:"xs"},value:h.startDate,onChange:e=>k("startDate",e.target.value),fontSize:{base:"x-small",md:"small",lg:"small",sm:"x-small"},textTransform:"uppercase",name:"duedate",focusBorderColor:j.primary,placeholder:"Select Date and Time",type:"datetime-local"})]})]}),(0,g.jsxs)("div",{className:"flex flex-col  items",children:[(0,g.jsx)("span",{className:"text-[10px] font-bold",children:"Ending Date*"}),(0,g.jsxs)(a.M,{size:{base:"xs",md:"md",lg:"md",sm:"xs"},children:[(0,g.jsx)(n.G6,{color:"black",children:(0,g.jsx)(o.sLe,{})}),(0,g.jsx)(l.p,{title:"ending date",size:{base:"xs",md:"md",lg:"md",sm:"xs"},value:h.endDate,onChange:e=>k("endDate",e.target.value),fontSize:{base:"x-small",md:"small",lg:"small",sm:"x-small"},textTransform:"uppercase",name:"duedate",focusBorderColor:j.primary,placeholder:"Select Date and Time",type:"datetime-local"})]})]})]}),(0,g.jsxs)("div",{className:"flex flex-col items",children:[(0,g.jsxs)("span",{className:"text-[10px] font-semibold text-red-300 ",children:["Skills Used*(Enter skills separated by commas)",h.skillsUsed.length,"/5"]}),(0,g.jsxs)(a.M,{size:{base:"md",md:"md",lg:"md",sm:"md"},children:[(0,g.jsx)(n.G6,{color:"black",children:(0,g.jsx)(o.$JU,{})}),(0,g.jsx)(l.p,{title:"skills used",size:{base:"md",md:"md",lg:"md",sm:"md"},value:h.skillsUsed.length>0?h.skillsUsed:"",onChange:e=>k("skillsUsed",e.target.value),variant:"outline",focusBorderColor:j.secondary,placeholder:"eg React, Redux, Node, ChakraUi, MongoDB"})]})]}),(0,g.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,g.jsxs)("span",{className:"text-xs font-bold",children:["Description"," ",(0,g.jsxs)("span",{className:"font-semibold ".concat(h.description.length>1e3&&"text-red-500"),children:[h.description.length,"/1000"]})]}),(0,g.jsx)(r.T,{title:"description",value:h.description,onChange:e=>k("description",e.target.value),focusBorderColor:j.secondary,placeholder:"Add some details, about the project, what it offers, speciality of the project, main highlight, etc."})]}),(0,g.jsxs)("div",{className:"flex gap-1 items-center justify-center",children:[(0,g.jsx)(o.DR4,{})," ",(0,g.jsx)("span",{children:"thanks for your time..."})]})]})}},4617:(e,t,s)=>{s.d(t,{t:()=>l});var a=s(3461),n=s(9254);function l(e){const{isDisabled:t,isInvalid:s,isReadOnly:l,isRequired:r,...i}=function(e){var t,s,l;const r=(0,a.Uc)(),{id:i,disabled:o,readOnly:d,required:c,isRequired:u,isInvalid:p,isReadOnly:m,isDisabled:h,onFocus:x,onBlur:f,...g}=e,v=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&v.push(r.feedbackId);(null==r?void 0:r.hasHelpText)&&v.push(r.helpTextId);return{...g,"aria-describedby":v.join(" ")||void 0,id:null!=i?i:null==r?void 0:r.id,isDisabled:null!=(t=null!=o?o:h)?t:null==r?void 0:r.isDisabled,isReadOnly:null!=(s=null!=d?d:m)?s:null==r?void 0:r.isReadOnly,isRequired:null!=(l=null!=c?c:u)?l:null==r?void 0:r.isRequired,isInvalid:null!=p?p:null==r?void 0:r.isInvalid,onFocus:(0,n.Hj)(null==r?void 0:r.onFocus,x),onBlur:(0,n.Hj)(null==r?void 0:r.onBlur,f)}}(e);return{...i,disabled:t,readOnly:l,required:r,"aria-invalid":(0,n.rq)(s),"aria-required":(0,n.rq)(r),"aria-readonly":(0,n.rq)(l)}}},3461:(e,t,s)=>{s.d(t,{Uc:()=>x});var a=s(7852),n=s(4554),l=s(3226),r=s(1893),i=s(6254),o=s(4550),d=s(9254),c=s(5043),u=s(579),[p,m]=(0,a.q)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,x]=(0,a.q)({strict:!1,name:"FormControlContext"});(0,l.R)((function(e,t){const s=(0,r.o5)("Form",e),a=(0,i.MN)(e),{getRootProps:l,htmlProps:m,...x}=function(e){const{id:t,isRequired:s,isInvalid:a,isDisabled:l,isReadOnly:r,...i}=e,o=(0,c.useId)(),u=t||"field-".concat(o),p="".concat(u,"-label"),m="".concat(u,"-feedback"),h="".concat(u,"-helptext"),[x,f]=(0,c.useState)(!1),[g,v]=(0,c.useState)(!1),[y,b]=(0,c.useState)(!1),j=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:h,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,n.Px)(e,(e=>{e&&v(!0)}))}}),[h]),k=(0,c.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,"data-focus":(0,d.sE)(y),"data-disabled":(0,d.sE)(l),"data-invalid":(0,d.sE)(a),"data-readonly":(0,d.sE)(r),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}}),[u,l,y,a,r,p]),I=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:m,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,n.Px)(e,(e=>{e&&f(!0)})),"aria-live":"polite"}}),[m]),N=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},...i,ref:e,role:"group","data-focus":(0,d.sE)(y),"data-disabled":(0,d.sE)(l),"data-invalid":(0,d.sE)(a),"data-readonly":(0,d.sE)(r)}}),[i,l,y,a,r]),C=(0,c.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}}),[]);return{isRequired:!!s,isInvalid:!!a,isReadOnly:!!r,isDisabled:!!l,isFocused:!!y,onFocus:()=>b(!0),onBlur:()=>b(!1),hasFeedbackText:x,setHasFeedbackText:f,hasHelpText:g,setHasHelpText:v,id:u,labelId:p,feedbackId:m,helpTextId:h,htmlProps:i,getHelpTextProps:j,getErrorMessageProps:I,getRootProps:N,getLabelProps:k,getRequiredIndicatorProps:C}}(a),f=(0,d.cx)("chakra-form-control",e.className);return(0,u.jsx)(h,{value:x,children:(0,u.jsx)(p,{value:s,children:(0,u.jsx)(o.B.div,{...l({},t),className:f,__css:s.container})})})})).displayName="FormControl",(0,l.R)((function(e,t){const s=x(),a=m(),n=(0,d.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(o.B.div,{...null==s?void 0:s.getHelpTextProps(e,t),__css:a.helperText,className:n})})).displayName="FormHelperText"},7921:(e,t,s)=>{s.d(t,{p:()=>c});var a=s(4617),n=s(3226),l=s(1893),r=s(6254),i=s(4550),o=s(9254),d=s(579),c=(0,n.R)((function(e,t){const{htmlSize:s,...n}=e,c=(0,l.o5)("Input",n),u=(0,r.MN)(n),p=(0,a.t)(u),m=(0,o.cx)("chakra-input",e.className);return(0,d.jsx)(i.B.input,{size:s,...p,__css:c.field,ref:t,className:m})}));c.displayName="Input",c.id="Input"},1908:(e,t,s)=>{s.d(t,{G6:()=>u});var a=s(1278),n=s(4550),l=s(3226),r=s(9254),i=s(579),o={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},d=(0,n.B)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),c=(0,l.R)((function(e,t){var s;const{placement:n="left",...l}=e,r=null!=(s=o[n])?s:{},c=(0,a.Z)();return(0,i.jsx)(d,{ref:t,...l,__css:{...c.addon,...r}})}));c.displayName="InputAddon";var u=(0,l.R)((function(e,t){return(0,i.jsx)(c,{ref:t,placement:"left",...e,className:(0,r.cx)("chakra-input__left-addon",e.className)})}));u.displayName="InputLeftAddon",u.id="InputLeftAddon";var p=(0,l.R)((function(e,t){return(0,i.jsx)(c,{ref:t,placement:"right",...e,className:(0,r.cx)("chakra-input__right-addon",e.className)})}));p.displayName="InputRightAddon",p.id="InputRightAddon"},1278:(e,t,s)=>{s.d(t,{M:()=>m,Z:()=>p});var a=s(7852),n=s(5043);var l=s(3226),r=s(1893),i=s(6254),o=s(4550),d=s(9254);var c=s(579),[u,p]=(0,a.q)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),m=(0,l.R)((function(e,t){const s=(0,r.o5)("Input",e),{children:a,className:l,...p}=(0,i.MN)(e),m=(0,d.cx)("chakra-input__group",l),h={},x=function(e){return n.Children.toArray(e).filter((e=>(0,n.isValidElement)(e)))}(a),f=s.field;x.forEach((e=>{var t,a;s&&(f&&"InputLeftElement"===e.type.id&&(h.paddingStart=null!=(t=f.height)?t:f.h),f&&"InputRightElement"===e.type.id&&(h.paddingEnd=null!=(a=f.height)?a:f.h),"InputRightAddon"===e.type.id&&(h.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(h.borderStartRadius=0))}));const g=x.map((t=>{var s,a;const l=function(e){const t=Object.assign({},e);for(let s in t)void 0===t[s]&&delete t[s];return t}({size:(null==(s=t.props)?void 0:s.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,n.cloneElement)(t,l):(0,n.cloneElement)(t,Object.assign(l,h,t.props))}));return(0,c.jsx)(o.B.div,{className:m,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...s.group},"data-group":!0,...p,children:(0,c.jsx)(u,{value:s,children:g})})}));m.displayName="InputGroup"},5695:(e,t,s)=>{s.d(t,{T:()=>u});var a=s(4617),n=s(3226),l=s(1893),r=s(6254),i=s(4550),o=s(9254),d=s(579);var c=["h","minH","height","minHeight"],u=(0,n.R)(((e,t)=>{const s=(0,l.Vl)("Textarea",e),{className:n,rows:u,...p}=(0,r.MN)(e),m=(0,a.t)(p),h=u?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const s=Object.assign({},e);for(const a of t)a in s&&delete s[a];return s}(s,c):s;return(0,d.jsx)(i.B.textarea,{ref:t,rows:u,...m,className:(0,o.cx)("chakra-textarea",n),__css:h})}));u.displayName="Textarea"}}]);
//# sourceMappingURL=469.72aac647.chunk.js.map