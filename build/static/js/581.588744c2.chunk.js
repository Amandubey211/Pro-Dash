"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[581,962],{962:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var s=a(5043),n=a(1278),r=a(1908),i=a(7921),o=a(5695),l=a(3003),d=a(6058),c=a(7154),u=a(3216),p=a(9006),h=a(72),m=a(8851);const f=()=>{const e=(0,u.Zp)(),t=(0,l.wA)(),{getAllAward:a}=(0,m.A)();return{createAward:async s=>{try{t((0,h.BF)(!0));const{role:n,companyOrInstitute:r,certification:i,grade:o,userId:l,description:d,dateReceived:u}=s;if(!n||!r||!i||!o||!l||!u){const e=[];return l||e.push("userId"),n||e.push("role"),r||e.push("companyOrInstitute"),i||e.push("certification"),o||e.push("grade"),u||e.push("dateReceived"),p.Ay.error("Missing: ".concat(e.join(", ")," "),{position:"bottom-left"})}const m=JSON.parse(localStorage.getItem("jwt_Token"));if(!m)throw e("/"),new Error("No token found");const f=l,{data:v}=await c.A.post("".concat("https://prodash-backend.onrender.com","/api/awards/create/").concat(f),{Award:s},{headers:{Authorization:m}});v.success&&(p.Ay.success(v.message,{position:"bottom-left"}),a())}catch(n){p.Ay.error("Something went wrong",{position:"bottom-left"})}finally{t((0,h.BF)(!1))}}}},v=()=>{const{getAllAward:e}=(0,m.A)(),t=(0,l.wA)();return{updateAward:async(a,s)=>{try{t((0,h.k6)(!0));const{role:n,companyOrInstitute:r,certification:i,grade:o,userId:l,description:d,dateReceived:u}=a;if(!n||!r||!i||!o||!l||!u){const e=[];return l||e.push("userId"),n||e.push("role"),r||e.push("companyOrInstitute"),i||e.push("certification"),o||e.push("grade"),u||e.push("dateReceived"),p.Ay.error("Missing: ".concat(e.join(", ")," "),{position:"bottom-left"})}const m=JSON.parse(localStorage.getItem("jwt_Token"));if(!m)throw navigate("/"),new Error("No token found");const f=l,{data:v}=await c.A.put("".concat("https://prodash-backend.onrender.com","/api/awards/").concat(f,"/update/").concat(s),{Award:a},{headers:{Authorization:m}});v.success&&(p.Ay.success(v.message,{position:"bottom-left"}),e())}catch(n){p.Ay.error("Something went wrong")}finally{t((0,h.k6)(!1))}}}};var x=a(579);const g=e=>{let{updateClicked:t,setUpdateClicked:a,setCreateClicked:c,createClicked:u,AwardState:p}=e;const h=(0,l.d4)((e=>e.themes.palettes[e.themes.currentPalette])),{createAward:m}=f(),{updateAward:g}=v(),y=JSON.parse(localStorage.getItem("user")),[b,j]=(0,s.useState)({userId:null===y||void 0===y?void 0:y.userId,role:"",companyOrInstitute:"",certification:"",grade:"",dateReceived:"",description:""});return(0,s.useEffect)((()=>{p&&j({userId:(null===p||void 0===p?void 0:p.userId)||(null===y||void 0===y?void 0:y.userId)||"",role:(null===p||void 0===p?void 0:p.role)||"",companyOrInstitute:(null===p||void 0===p?void 0:p.companyOrInstitute)||"",certification:(null===p||void 0===p?void 0:p.certification)||"",grade:(null===p||void 0===p?void 0:p.grade)||"",dateReceived:p.dateReceived?new Date(p.dateReceived).toISOString().slice(0,16):"",description:(null===p||void 0===p?void 0:p.description)||""})}),[p]),(0,s.useEffect)((()=>{t&&(g(b,null===p||void 0===p?void 0:p._id),a(!1))}),[t]),(0,s.useEffect)((()=>{u&&(m(b),c(!1))}),[u]),(0,x.jsxs)("div",{className:"flex flex-col justify-start lg:px-2 capitalize sm:px-1 gap-2",children:[(0,x.jsx)("div",{className:"flex justify-between items-center ",children:(0,x.jsx)("span",{className:"text-[10px]  text-[grey]",children:"( * ) indicates Required"})}),(0,x.jsxs)("div",{className:"flex flex-col  items",children:[(0,x.jsx)("span",{className:"text-[10px] font-bold",children:"role*"}),(0,x.jsxs)(n.M,{size:"sm",children:[(0,x.jsx)(r.G6,{fontWeight:"500",color:"black",children:(0,x.jsx)(d.RIx,{})}),(0,x.jsx)(i.p,{size:"sm",value:b.role,onChange:e=>j((t=>({...t,role:e.target.value}))),variant:"outline",focusBorderColor:h.secondary,placeholder:"e.g.Software Enginnering"})]})]}),(0,x.jsxs)("div",{className:"flex flex-col  items",children:[(0,x.jsx)("span",{className:"text-[10px] font-bold",children:"Company/Institution*"}),(0,x.jsxs)(n.M,{size:"sm",children:[(0,x.jsx)(r.G6,{fontWeight:"500",color:"black",children:(0,x.jsx)(d.kFq,{})}),(0,x.jsx)(i.p,{size:"sm",value:b.companyOrInstitute,onChange:e=>j((t=>({...t,companyOrInstitute:e.target.value}))),variant:"outline",focusBorderColor:h.secondary,placeholder:"e.g.Amazon"})]})]}),(0,x.jsxs)("div",{className:"flex flex-col  items",children:[(0,x.jsx)("span",{className:"text-[10px] font-bold",children:"Certification*"}),(0,x.jsxs)(n.M,{size:"sm",children:[(0,x.jsx)(r.G6,{fontWeight:"500",color:"black",children:(0,x.jsx)(d.y9o,{})}),(0,x.jsx)(i.p,{size:"sm",value:b.certification,onChange:e=>j((t=>({...t,certification:e.target.value}))),variant:"outline",focusBorderColor:h.secondary,placeholder:"e.g.Full Stack Development"})]})]}),(0,x.jsxs)("div",{className:"flex justify-between items-center",children:[(0,x.jsxs)("div",{className:"flex flex-col  items",children:[(0,x.jsx)("span",{className:"text-[10px] font-bold",children:"Receiving Year*"}),(0,x.jsxs)(n.M,{size:"sm",children:[(0,x.jsx)(r.G6,{color:"black",children:(0,x.jsx)(d.sLe,{})}),(0,x.jsx)(i.p,{textTransform:"uppercase",name:"date Received",value:b.dateReceived,onChange:e=>j((t=>({...t,dateReceived:e.target.value}))),focusBorderColor:h.primary,placeholder:"Select Date and Time",size:"sm",type:"datetime-local"})]})]}),(0,x.jsxs)("div",{className:"flex flex-col  items",children:[(0,x.jsx)("span",{className:"text-[10px]  font-bold",children:"Grade* "}),(0,x.jsxs)(n.M,{size:"sm",children:[(0,x.jsx)(r.G6,{color:"black",children:(0,x.jsx)(d.NqZ,{})}),(0,x.jsx)(i.p,{size:"sm",textTransform:"uppercase",variant:"outline",value:b.grade.substring(0,2),onChange:e=>j((t=>({...t,grade:e.target.value}))),focusBorderColor:h.secondary,placeholder:"e.g. A"})]})]})]}),(0,x.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,x.jsxs)("span",{className:"text-xs font-bold",children:["Description"," ",(0,x.jsxs)("span",{className:"font-semibold ".concat(b.description.length>699&&"text-red-500"),children:[b.description.length,"/700"]})]}),(0,x.jsx)(o.T,{value:b.description,onChange:e=>j((t=>({...t,description:e.target.value}))),focusBorderColor:h.secondary,placeholder:"Add some details, experience, achivements etc."})]}),(0,x.jsxs)("div",{className:"flex gap-1 items-center justify-center",children:[(0,x.jsx)(d.DR4,{})," ",(0,x.jsx)("span",{children:"thanks for your time..."})]})]})}},8851:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(7154),n=a(9006),r=a(3216),i=a(72),o=a(3003);const l=()=>{const e=(0,r.Zp)(),t=(0,o.wA)();return{getAllAward:async()=>{try{const a=JSON.parse(localStorage.getItem("user")),r=JSON.parse(localStorage.getItem("jwt_Token")),o=null===a||void 0===a?void 0:a.userId;if(!o||!r)return n.Ay.error("Please Log In",{position:"bottom-left"}),e("/");const{data:l}=await s.A.get("".concat("https://prodash-backend.onrender.com","/api/awards/").concat(o),{headers:{Authorization:r}});l.success&&t((0,i.ZH)(l.awards))}catch(a){console.error("error in fetching the award :",a),n.Ay.error("Something went wrong",{position:"bottom-left"})}}}}},4617:(e,t,a)=>{a.d(t,{t:()=>r});var s=a(3461),n=a(9254);function r(e){const{isDisabled:t,isInvalid:a,isReadOnly:r,isRequired:i,...o}=function(e){var t,a,r;const i=(0,s.Uc)(),{id:o,disabled:l,readOnly:d,required:c,isRequired:u,isInvalid:p,isReadOnly:h,isDisabled:m,onFocus:f,onBlur:v,...x}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==i?void 0:i.hasFeedbackText)&&(null==i?void 0:i.isInvalid)&&g.push(i.feedbackId);(null==i?void 0:i.hasHelpText)&&g.push(i.helpTextId);return{...x,"aria-describedby":g.join(" ")||void 0,id:null!=o?o:null==i?void 0:i.id,isDisabled:null!=(t=null!=l?l:m)?t:null==i?void 0:i.isDisabled,isReadOnly:null!=(a=null!=d?d:h)?a:null==i?void 0:i.isReadOnly,isRequired:null!=(r=null!=c?c:u)?r:null==i?void 0:i.isRequired,isInvalid:null!=p?p:null==i?void 0:i.isInvalid,onFocus:(0,n.Hj)(null==i?void 0:i.onFocus,f),onBlur:(0,n.Hj)(null==i?void 0:i.onBlur,v)}}(e);return{...o,disabled:t,readOnly:r,required:i,"aria-invalid":(0,n.rq)(a),"aria-required":(0,n.rq)(i),"aria-readonly":(0,n.rq)(r)}}},3461:(e,t,a)=>{a.d(t,{Uc:()=>f});var s=a(7852),n=a(4554),r=a(3226),i=a(1893),o=a(6254),l=a(4550),d=a(9254),c=a(5043),u=a(579),[p,h]=(0,s.q)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[m,f]=(0,s.q)({strict:!1,name:"FormControlContext"});(0,r.R)((function(e,t){const a=(0,i.o5)("Form",e),s=(0,o.MN)(e),{getRootProps:r,htmlProps:h,...f}=function(e){const{id:t,isRequired:a,isInvalid:s,isDisabled:r,isReadOnly:i,...o}=e,l=(0,c.useId)(),u=t||"field-".concat(l),p="".concat(u,"-label"),h="".concat(u,"-feedback"),m="".concat(u,"-helptext"),[f,v]=(0,c.useState)(!1),[x,g]=(0,c.useState)(!1),[y,b]=(0,c.useState)(!1),j=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:m,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,n.Px)(e,(e=>{e&&g(!0)}))}}),[m]),I=(0,c.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,"data-focus":(0,d.sE)(y),"data-disabled":(0,d.sE)(r),"data-invalid":(0,d.sE)(s),"data-readonly":(0,d.sE)(i),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}}),[u,r,y,s,i,p]),N=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:h,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,n.Px)(e,(e=>{e&&v(!0)})),"aria-live":"polite"}}),[h]),w=(0,c.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},...o,ref:e,role:"group","data-focus":(0,d.sE)(y),"data-disabled":(0,d.sE)(r),"data-invalid":(0,d.sE)(s),"data-readonly":(0,d.sE)(i)}}),[o,r,y,s,i]),R=(0,c.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}}),[]);return{isRequired:!!a,isInvalid:!!s,isReadOnly:!!i,isDisabled:!!r,isFocused:!!y,onFocus:()=>b(!0),onBlur:()=>b(!1),hasFeedbackText:f,setHasFeedbackText:v,hasHelpText:x,setHasHelpText:g,id:u,labelId:p,feedbackId:h,helpTextId:m,htmlProps:o,getHelpTextProps:j,getErrorMessageProps:N,getRootProps:w,getLabelProps:I,getRequiredIndicatorProps:R}}(s),v=(0,d.cx)("chakra-form-control",e.className);return(0,u.jsx)(m,{value:f,children:(0,u.jsx)(p,{value:a,children:(0,u.jsx)(l.B.div,{...r({},t),className:v,__css:a.container})})})})).displayName="FormControl",(0,r.R)((function(e,t){const a=f(),s=h(),n=(0,d.cx)("chakra-form__helper-text",e.className);return(0,u.jsx)(l.B.div,{...null==a?void 0:a.getHelpTextProps(e,t),__css:s.helperText,className:n})})).displayName="FormHelperText"},7921:(e,t,a)=>{a.d(t,{p:()=>c});var s=a(4617),n=a(3226),r=a(1893),i=a(6254),o=a(4550),l=a(9254),d=a(579),c=(0,n.R)((function(e,t){const{htmlSize:a,...n}=e,c=(0,r.o5)("Input",n),u=(0,i.MN)(n),p=(0,s.t)(u),h=(0,l.cx)("chakra-input",e.className);return(0,d.jsx)(o.B.input,{size:a,...p,__css:c.field,ref:t,className:h})}));c.displayName="Input",c.id="Input"},1908:(e,t,a)=>{a.d(t,{G6:()=>u});var s=a(1278),n=a(4550),r=a(3226),i=a(9254),o=a(579),l={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},d=(0,n.B)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),c=(0,r.R)((function(e,t){var a;const{placement:n="left",...r}=e,i=null!=(a=l[n])?a:{},c=(0,s.Z)();return(0,o.jsx)(d,{ref:t,...r,__css:{...c.addon,...i}})}));c.displayName="InputAddon";var u=(0,r.R)((function(e,t){return(0,o.jsx)(c,{ref:t,placement:"left",...e,className:(0,i.cx)("chakra-input__left-addon",e.className)})}));u.displayName="InputLeftAddon",u.id="InputLeftAddon";var p=(0,r.R)((function(e,t){return(0,o.jsx)(c,{ref:t,placement:"right",...e,className:(0,i.cx)("chakra-input__right-addon",e.className)})}));p.displayName="InputRightAddon",p.id="InputRightAddon"},1278:(e,t,a)=>{a.d(t,{M:()=>h,Z:()=>p});var s=a(7852),n=a(5043);var r=a(3226),i=a(1893),o=a(6254),l=a(4550),d=a(9254);var c=a(579),[u,p]=(0,s.q)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),h=(0,r.R)((function(e,t){const a=(0,i.o5)("Input",e),{children:s,className:r,...p}=(0,o.MN)(e),h=(0,d.cx)("chakra-input__group",r),m={},f=function(e){return n.Children.toArray(e).filter((e=>(0,n.isValidElement)(e)))}(s),v=a.field;f.forEach((e=>{var t,s;a&&(v&&"InputLeftElement"===e.type.id&&(m.paddingStart=null!=(t=v.height)?t:v.h),v&&"InputRightElement"===e.type.id&&(m.paddingEnd=null!=(s=v.height)?s:v.h),"InputRightAddon"===e.type.id&&(m.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(m.borderStartRadius=0))}));const x=f.map((t=>{var a,s;const r=function(e){const t=Object.assign({},e);for(let a in t)void 0===t[a]&&delete t[a];return t}({size:(null==(a=t.props)?void 0:a.size)||e.size,variant:(null==(s=t.props)?void 0:s.variant)||e.variant});return"Input"!==t.type.id?(0,n.cloneElement)(t,r):(0,n.cloneElement)(t,Object.assign(r,m,t.props))}));return(0,c.jsx)(l.B.div,{className:h,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...a.group},"data-group":!0,...p,children:(0,c.jsx)(u,{value:a,children:x})})}));h.displayName="InputGroup"},5695:(e,t,a)=>{a.d(t,{T:()=>u});var s=a(4617),n=a(3226),r=a(1893),i=a(6254),o=a(4550),l=a(9254),d=a(579);var c=["h","minH","height","minHeight"],u=(0,n.R)(((e,t)=>{const a=(0,r.Vl)("Textarea",e),{className:n,rows:u,...p}=(0,i.MN)(e),h=(0,s.t)(p),m=u?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const a=Object.assign({},e);for(const s of t)s in a&&delete a[s];return a}(a,c):a;return(0,d.jsx)(o.B.textarea,{ref:t,rows:u,...h,className:(0,l.cx)("chakra-textarea",n),__css:m})}));u.displayName="Textarea"}}]);
//# sourceMappingURL=581.588744c2.chunk.js.map