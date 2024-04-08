"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[469],{9469:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v});var a=t(1278),n=t(1908),l=t(7921),r=t(5695),i=t(5043),o=t(6058),d=t(3003),c=t(7154),u=t(9006),p=t(3216),m=t(7296),x=t(875);const h=()=>{const e=(0,p.Zp)(),{getExperience:s}=(0,m.A)(),t=(0,d.wA)();return{createExperience:async a=>{try{t((0,x.cf)(!0));const{company:n,role:l,startDate:r,userId:i,endDate:o,skillsUsed:d,description:p}=a;if(!n||!l||!r||!o||!i||!d||!p){const e=[];return i||e.push("userId"),n||e.push("company"),r||e.push("startDate"),o||e.push("endDate"),n||e.push("company"),l||e.push("role"),p||e.push("description"),u.Ay.error("Missing : ".concat(e.join(", ")," "))}const m=JSON.parse(localStorage.getItem("jwt_Token")),h=i;if(!m||!h)return e("/"),u.Ay.error("Please Log In",{position:"bottom-left"});const{data:f}=await c.A.post("".concat("https://prodash-backend.onrender.com","/api/experience/create/").concat(h),{Experience:a},{headers:{Authorization:m}});f.success&&(u.Ay.success(f.message,{position:"bottom-left"}),s())}catch(n){console.error("error occured during the creation of the experience ",n),u.Ay.error("Something went wrong",{position:"bottom-left"})}finally{t((0,x.cf)(!1))}}}},f=()=>{const{getExperience:e}=(0,m.A)(),s=(0,d.wA)();return{updateExperience:async(t,a)=>{try{s((0,x.rV)(!0));const{company:n,role:l,startDate:r,userId:i,endDate:o,skillsUsed:d,description:p}=t;if(!n||!l||!r||!o||!i||!d||!p){const e=[];return i||e.push("userId"),n||e.push("company"),r||e.push("startDate"),o||e.push("endDate"),n||e.push("company"),l||e.push("role"),p||e.push("description"),u.Ay.error("Missing : ".concat(e.join(", ")," "))}const m=JSON.parse(localStorage.getItem("jwt_Token")),h=i;if(!m||!h||!a)return navigate("/"),u.Ay.error("Please Log In",{position:"bottom-left"});const{data:f}=await c.A.put("".concat("https://prodash-backend.onrender.com","/api/experience/").concat(h,"/update/").concat(a),{Experience:t},{headers:{Authorization:m}});f.success&&(u.Ay.success(f.message,{position:"bottom-left"}),e())}catch(n){u.Ay.error("Something went wrong",{position:"bottom-left"})}finally{s((0,x.rV)(!1))}}}};var g=t(579);const v=e=>{let{updateClicked:s,setUpdateClicked:t,setCreateClicked:c,createClicked:u,experienceState:p}=e;const m=JSON.parse(localStorage.getItem("user")),[x,v]=(0,i.useState)({userId:null===m||void 0===m?void 0:m.userId,company:"",role:"",startDate:"",endDate:"",description:"",skillsUsed:[]});(0,i.useEffect)((()=>{p&&v({userId:p.userId||(null===m||void 0===m?void 0:m.userId)||"",company:p.company||"",role:p.role||"",startDate:p.startDate?new Date(p.startDate).toISOString().slice(0,16):"",endDate:p.endDate?new Date(p.endDate).toISOString().slice(0,16):"",skillsUsed:p.skillsUsed||"",description:p.description||""})}),[]);const{createExperience:y}=h(),{updateExperience:b}=f(),j=(0,d.d4)((e=>e.themes.palettes[e.themes.currentPalette])),k=(e,s)=>{if("skillsUsed"===e)if(""===s.trim())v((s=>({...s,[e]:[]})));else{let t=s.split(",").map((e=>e.trim()));const a=5;t=t.slice(0,a),v((s=>({...s,[e]:t})))}else v((t=>({...t,[e]:s})))};return(0,i.useEffect)((()=>{u&&(y(x),c(!1))}),[u]),(0,i.useEffect)((()=>{s&&(b(x,null===p||void 0===p?void 0:p._id),t(!1))}),[s]),(0,g.jsxs)("div",{className:"flex flex-col justify-start lg:px-2 sm:px-1 gap-2",children:[(0,g.jsx)("div",{className:"flex justify-between items-center ",children:(0,g.jsx)("span",{className:"text-[10px]  text-[grey]",children:"( * ) indicates Required"})}),(0,g.jsxs)("div",{className:"flex flex-col  items",children:[(0,g.jsx)("span",{className:"text-[10px] font-bold",children:"Company*"}),(0,g.jsxs)(a.M,{size:{base:"sm",md:"md",lg:"md",sm:"xs"},children:[(0,g.jsx)(n.G6,{fontWeight:"500",color:"black",children:(0,g.jsx)(o.kFq,{})}),(0,g.jsx)(l.p,{size:{base:"sm",md:"md",lg:"md",sm:"xs"},value:x.company,onChange:e=>k("company",e.target.value),variant:"outline",focusBorderColor:j.secondary,placeholder:"e.g.Amazon"})]})]}),(0,g.jsxs)("div",{className:"flex flex-col  items",children:[(0,g.jsx)("span",{className:"text-[10px] font-bold",children:"Role*"}),(0,g.jsxs)(a.M,{size:{base:"sm",md:"md",lg:"md",sm:"xs"},children:[(0,g.jsx)(n.G6,{fontWeight:"500",color:"black",children:(0,g.jsx)(o.RIx,{})}),(0,g.jsx)(l.p,{size:{base:"sm",md:"md",lg:"md",sm:"xs"},value:x.role,onChange:e=>k("role",e.target.value),variant:"outline",focusBorderColor:j.secondary,placeholder:"e.g.Front-End Developer"})]})]}),(0,g.jsxs)("div",{className:"flex gap-2 justify-between items-center ",children:[(0,g.jsxs)("div",{className:"flex flex-col  items",children:[(0,g.jsx)("span",{className:"text-[10px] font-bold",children:"Starting Date*"}),(0,g.jsxs)(a.M,{size:{base:"xs",md:"md",lg:"md",sm:"xs"},children:[(0,g.jsx)(n.G6,{color:"black",children:(0,g.jsx)(o.sLe,{})}),(0,g.jsx)(l.p,{size:{base:"xs",md:"md",lg:"md",sm:"xs"},value:x.startDate,onChange:e=>k("startDate",e.target.value),fontSize:{base:"x-small",md:"small",lg:"small",sm:"x-small"},textTransform:"uppercase",name:"duedate",focusBorderColor:j.primary,placeholder:"Select Date and Time",type:"datetime-local"})]})]}),(0,g.jsxs)("div",{className:"flex flex-col  items",children:[(0,g.jsx)("span",{className:"text-[10px] font-bold",children:"Ending Date*"}),(0,g.jsxs)(a.M,{size:{base:"xs",md:"md",lg:"md",sm:"xs"},children:[(0,g.jsx)(n.G6,{color:"black",children:(0,g.jsx)(o.sLe,{})}),(0,g.jsx)(l.p,{size:{base:"xs",md:"md",lg:"md",sm:"xs"},value:x.endDate,onChange:e=>k("endDate",e.target.value),fontSize:{base:"x-small",md:"small",lg:"small",sm:"x-small"},textTransform:"uppercase",name:"duedate",focusBorderColor:j.primary,placeholder:"Select Date and Time",type:"datetime-local"})]})]})]}),(0,g.jsxs)("div",{className:"flex flex-col items",children:[(0,g.jsxs)("span",{className:"text-[10px] font-semibold text-red-300 ",children:["Skills Used*(Enter skills separated by commas)",x.skillsUsed.length,"/5"]}),(0,g.jsxs)(a.M,{size:{base:"sm",md:"md",lg:"md",sm:"xs"},children:[(0,g.jsx)(n.G6,{color:"black",children:(0,g.jsx)(o.$JU,{})}),(0,g.jsx)(l.p,{size:{base:"sm",md:"md",lg:"md",sm:"xs"},value:x.skillsUsed.length>0?x.skillsUsed:"",onChange:e=>k("skillsUsed",e.target.value),variant:"outline",focusBorderColor:j.secondary,placeholder:"eg React, Redux, Node, ChakraUi, MongoDB"})]})]}),(0,g.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,g.jsxs)("span",{className:"text-xs font-bold",children:["Description"," ",(0,g.jsxs)("span",{className:"font-semibold ".concat(x.description.length>1e3&&"text-red-500"),children:[x.description.length,"/1000"]})]}),(0,g.jsx)(r.T,{value:x.description,onChange:e=>k("description",e.target.value),focusBorderColor:j.secondary,placeholder:"Add some details, about the project, what it offers, speciality of the project, main highlight, etc."})]}),(0,g.jsxs)("div",{className:"flex gap-1 items-center justify-center",children:[(0,g.jsx)(o.DR4,{})," ",(0,g.jsx)("span",{children:"thanks for your time..."})]})]})}},4617:(e,s,t)=>{t.d(s,{t:()=>l});var a=t(3461),n=t(9254);function l(e){const{isDisabled:s,isInvalid:t,isReadOnly:l,isRequired:r,...i}=function(e){var s,t,l;const r=(0,a.Uc)(),{id:i,disabled:o,readOnly:d,required:c,isRequired:u,isInvalid:p,isReadOnly:m,isDisabled:x,onFocus:h,onBlur:f,...g}=e,v=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==r?void 0:r.hasFeedbackText)&&(null==r?void 0:r.isInvalid)&&v.push(r.feedbackId);(null==r?void 0:r.hasHelpText)&&v.push(r.helpTextId);return{...g,"aria-describedby":v.join(" ")||void 0,id:null!=i?i:null==r?void 0:r.id,isDisabled:null!=(s=null!=o?o:x)?s:null==r?void 0:r.isDisabled,isReadOnly:null!=(t=null!=d?d:m)?t:null==r?void 0:r.isReadOnly,isRequired:null!=(l=null!=c?c:u)?l:null==r?void 0:r.isRequired,isInvalid:null!=p?p:null==r?void 0:r.isInvalid,onFocus:(0,n.Hj)(null==r?void 0:r.onFocus,h),onBlur:(0,n.Hj)(null==r?void 0:r.onBlur,f)}}(e);return{...i,disabled:s,readOnly:l,required:r,"aria-invalid":(0,n.rq)(t),"aria-required":(0,n.rq)(r),"aria-readonly":(0,n.rq)(l)}}},3461:(e,s,t)=>{t.d(s,{Uc:()=>h});var a=t(7852),n=t(4554),l=t(3226),r=t(1893),i=t(6254),o=t(4550),d=t(9254),c=t(5043),u=t(579),[p,m]=(0,a.q)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[x,h]=(0,a.q)({strict:!1,name:"FormControlContext"});(0,l.R)((function(e,s){const t=(0,r.o5)("Form",e),a=(0,i.MN)(e),{getRootProps:l,htmlProps:m,...h}=function(e){const{id:s,isRequired:t,isInvalid:a,isDisabled:l,isReadOnly:r,...i}=e,o=(0,c.useId)(),u=s||"field-".concat(o),p="".concat(u,"-label"),m="".concat(u,"-feedback"),x="".concat(u,"-helptext"),[h,f]=(0,c.useState)(!1),[g,v]=(0,c.useState)(!1),[y,b]=(0,c.useState)(!1),j=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:x,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,n.Px)(e,(e=>{e&&v(!0)}))}}),[x]),k=(0,c.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:s,"data-focus":(0,d.sE)(y),"data-disabled":(0,d.sE)(l),"data-invalid":(0,d.sE)(a),"data-readonly":(0,d.sE)(r),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}}),[u,l,y,a,r,p]),I=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:m,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,n.Px)(e,(e=>{e&&f(!0)})),"aria-live":"polite"}}),[m]),N=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},...i,ref:e,role:"group","data-focus":(0,d.sE)(y),"data-disabled":(0,d.sE)(l),"data-invalid":(0,d.sE)(a),"data-readonly":(0,d.sE)(r)}}),[i,l,y,a,r]),C=(0,c.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:s,role:"presentation","aria-hidden":!0,children:e.children||"*"}}),[]);return{isRequired:!!t,isInvalid:!!a,isReadOnly:!!r,isDisabled:!!l,isFocused:!!y,onFocus:()=>b(!0),onBlur:()=>b(!1),hasFeedbackText:h,setHasFeedbackText:f,hasHelpText:g,setHasHelpText:v,id:u,labelId:p,feedbackId:m,helpTextId:x,htmlProps:i,getHelpTextProps:j,getErrorMessageProps:I,getRootProps:N,getLabelProps:k,getRequiredIndicatorProps:C}}(a),f=(0,d.cx)("chakra-form-control",e.className);return(0,u.jsx)(x,{value:h,children:(0,u.jsx)(p,{value:t,children:(0,u.jsx)(o.B.div,{...l({},s),className:f,__css:t.container})})})})).displayName="FormControl",(0,l.R)((function(e,s){const t=h(),a=m(),n=(0,d.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(o.B.div,{...null==t?void 0:t.getHelpTextProps(e,s),__css:a.helperText,className:n})})).displayName="FormHelperText"},7921:(e,s,t)=>{t.d(s,{p:()=>c});var a=t(4617),n=t(3226),l=t(1893),r=t(6254),i=t(4550),o=t(9254),d=t(579),c=(0,n.R)((function(e,s){const{htmlSize:t,...n}=e,c=(0,l.o5)("Input",n),u=(0,r.MN)(n),p=(0,a.t)(u),m=(0,o.cx)("chakra-input",e.className);return(0,d.jsx)(i.B.input,{size:t,...p,__css:c.field,ref:s,className:m})}));c.displayName="Input",c.id="Input"},1908:(e,s,t)=>{t.d(s,{G6:()=>u});var a=t(1278),n=t(4550),l=t(3226),r=t(9254),i=t(579),o={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},d=(0,n.B)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),c=(0,l.R)((function(e,s){var t;const{placement:n="left",...l}=e,r=null!=(t=o[n])?t:{},c=(0,a.Z)();return(0,i.jsx)(d,{ref:s,...l,__css:{...c.addon,...r}})}));c.displayName="InputAddon";var u=(0,l.R)((function(e,s){return(0,i.jsx)(c,{ref:s,placement:"left",...e,className:(0,r.cx)("chakra-input__left-addon",e.className)})}));u.displayName="InputLeftAddon",u.id="InputLeftAddon";var p=(0,l.R)((function(e,s){return(0,i.jsx)(c,{ref:s,placement:"right",...e,className:(0,r.cx)("chakra-input__right-addon",e.className)})}));p.displayName="InputRightAddon",p.id="InputRightAddon"},1278:(e,s,t)=>{t.d(s,{M:()=>m,Z:()=>p});var a=t(7852),n=t(5043);var l=t(3226),r=t(1893),i=t(6254),o=t(4550),d=t(9254);var c=t(579),[u,p]=(0,a.q)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),m=(0,l.R)((function(e,s){const t=(0,r.o5)("Input",e),{children:a,className:l,...p}=(0,i.MN)(e),m=(0,d.cx)("chakra-input__group",l),x={},h=function(e){return n.Children.toArray(e).filter((e=>(0,n.isValidElement)(e)))}(a),f=t.field;h.forEach((e=>{var s,a;t&&(f&&"InputLeftElement"===e.type.id&&(x.paddingStart=null!=(s=f.height)?s:f.h),f&&"InputRightElement"===e.type.id&&(x.paddingEnd=null!=(a=f.height)?a:f.h),"InputRightAddon"===e.type.id&&(x.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(x.borderStartRadius=0))}));const g=h.map((s=>{var t,a;const l=function(e){const s=Object.assign({},e);for(let t in s)void 0===s[t]&&delete s[t];return s}({size:(null==(t=s.props)?void 0:t.size)||e.size,variant:(null==(a=s.props)?void 0:a.variant)||e.variant});return"Input"!==s.type.id?(0,n.cloneElement)(s,l):(0,n.cloneElement)(s,Object.assign(l,x,s.props))}));return(0,c.jsx)(o.B.div,{className:m,ref:s,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...t.group},"data-group":!0,...p,children:(0,c.jsx)(u,{value:t,children:g})})}));m.displayName="InputGroup"},5695:(e,s,t)=>{t.d(s,{T:()=>u});var a=t(4617),n=t(3226),l=t(1893),r=t(6254),i=t(4550),o=t(9254),d=t(579);var c=["h","minH","height","minHeight"],u=(0,n.R)(((e,s)=>{const t=(0,l.Vl)("Textarea",e),{className:n,rows:u,...p}=(0,r.MN)(e),m=(0,a.t)(p),x=u?function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const t=Object.assign({},e);for(const a of s)a in t&&delete t[a];return t}(t,c):t;return(0,d.jsx)(i.B.textarea,{ref:s,rows:u,...m,className:(0,o.cx)("chakra-textarea",n),__css:x})}));u.displayName="Textarea"}}]);
//# sourceMappingURL=469.f36e909a.chunk.js.map