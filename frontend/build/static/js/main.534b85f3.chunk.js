(this.webpackJsonpjigsaw=this.webpackJsonpjigsaw||[]).push([[0],{166:function(e,t,a){e.exports=a(239)},171:function(e,t,a){},193:function(e,t,a){},196:function(e,t,a){},230:function(e,t){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),o=a.n(i);a(171),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(8),s=a(7),l=a(10),u=a(9),m=a(11),p=a(40),d=a(74),h=a(43),g=a(65),f=a(84),v=a(53),E=a(75),b=a(3),w=a(285),O=a(295),y=a(305),j=a(60),C=a(300),S=a(301),k=a(240),x=a(286),B=a(278),N=a(282),I=a(283),L=a(284),D=a(138),P=a.n(D),U=a(85),R=a.n(U),T=a(139),M=a.n(T),A=r.a.createElement("div",null,r.a.createElement(B.a,{button:!0,component:"a",href:"/"},r.a.createElement(N.a,null,r.a.createElement(P.a,null)),r.a.createElement(I.a,{primary:"Dashboard"})),r.a.createElement(B.a,{button:!0,component:"a",href:"/edit"},r.a.createElement(N.a,null,r.a.createElement(M.a,null)),r.a.createElement(I.a,{primary:"Edit"}))),F=r.a.createElement("div",null,r.a.createElement(L.a,{inset:!0},"Saved projects"),r.a.createElement(B.a,{button:!0},r.a.createElement(N.a,null,r.a.createElement(R.a,null)),r.a.createElement(I.a,{primary:"Star Platinum"})),r.a.createElement(B.a,{button:!0},r.a.createElement(N.a,null,r.a.createElement(R.a,null)),r.a.createElement(I.a,{primary:"Super Fly"})),r.a.createElement(B.a,{button:!0},r.a.createElement(N.a,null,r.a.createElement(R.a,null)),r.a.createElement(I.a,{primary:"Tower of Grey"})));function z(e){return r.a.createElement(j.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function W(e){e.preventDefault()}var q=Object(w.a)({depositContext:{flex:1}});function V(){var e=q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null,"Recent Deposits"),r.a.createElement(j.a,{component:"p",variant:"h4"},"$3,024.00"),r.a.createElement(j.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(x.a,{color:"primary",href:"#",onClick:W},"View balance")))}var G=a(287),Y=a(291),J=a(290),H=a(288),_=a(289);function X(e,t,a,n,r,i){return{id:e,date:t,name:a,shipTo:n,paymentMethod:r,amount:i}}var $=[X(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),X(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),X(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),X(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),X(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function K(e){e.preventDefault()}var Z=Object(w.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}}));function Q(){var e=Z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null,"Recent Orders"),r.a.createElement(G.a,{size:"small"},r.a.createElement(H.a,null,r.a.createElement(_.a,null,r.a.createElement(J.a,null,"Date"),r.a.createElement(J.a,null,"Name"),r.a.createElement(J.a,null,"Ship To"),r.a.createElement(J.a,null,"Payment Method"),r.a.createElement(J.a,{align:"right"},"Sale Amount"))),r.a.createElement(Y.a,null,$.map((function(e){return r.a.createElement(_.a,{key:e.id},r.a.createElement(J.a,null,e.date),r.a.createElement(J.a,null,e.name),r.a.createElement(J.a,null,e.shipTo),r.a.createElement(J.a,null,e.paymentMethod),r.a.createElement(J.a,{align:"right"},e.amount))})))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(x.a,{color:"primary",href:"#",onClick:K},"See more orders")))}var ee=a(308),te=a(296),ae=a(297),ne=a(299),re=a(298),ie=a(292),oe=a(293),ce=a(95),se=a.n(ce),le=a(96),ue=a.n(le),me=a(94),pe=a.n(me),de=a(294),he=a(4),ge=a(39),fe=a.n(ge),ve=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.handleSignOut=function(){fe.a.get("http://localhost:3000/api/signout/").then((function(e){window.location.href="/"}))},a.state={open:!1,current_user:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"messageButton",value:function(){if("true"==this.props.hasChat)return r.a.createElement(ie.a,{color:"inherit",onClick:this.props.onOpen,"aria-label":"Open Sidedrawer"},r.a.createElement(oe.a,{badgeContent:"!",color:"secondary"},r.a.createElement(pe.a,null)))}},{key:"loginLogoutButton",value:function(){return""==this.state.current_user?r.a.createElement(de.a,{href:"/login",color:"inherit",variant:"outlined",className:this.props.classes.link},"Login"):r.a.createElement(de.a,{onClick:this.handleSignOut,color:"inherit",variant:"outlined",className:this.props.classes.link},"Sign out")}},{key:"username",value:function(){if(""!=this.state.current_user)return r.a.createElement(j.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},this.state.current_user)}}]),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fe.a.get("http://localhost:3000/api/currrent_user/").then((function(t){try{e.setState({current_user:t.data[0].firstName})}catch(a){console.log(t.data)}}))}},{key:"render",value:function(){var e=this.state.open;return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement(O.a,null),r.a.createElement(te.a,{position:"fixed",className:Object(b.a)(this.props.classes.appBar,e&&this.props.classes.appBarShift)},r.a.createElement(ae.a,{className:this.props.classes.toolbar},r.a.createElement(ie.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,className:Object(b.a)(this.props.classes.menuButton,e&&this.props.classes.menuButtonHidden)},r.a.createElement(se.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:this.props.classes.title},this.props.name),this.username(),this.messageButton(),this.loginLogoutButton())),r.a.createElement(ee.a,{variant:"permanent",classes:{paper:Object(b.a)(this.props.classes.drawerPaper,!e&&this.props.classes.drawerPaperClose)},open:e},r.a.createElement("div",{className:this.props.classes.toolbarIcon},r.a.createElement(ie.a,{onClick:this.handleDrawerClose},r.a.createElement(ue.a,null))),r.a.createElement(re.a,null),r.a.createElement(ne.a,null,A),r.a.createElement(re.a,null),r.a.createElement(ne.a,null,F)))}}]),t}(r.a.Component),Ee=Object(he.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(E.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,height:"100vh",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(v.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},link:{margin:e.spacing(1,1)}}}),{withTheme:!0})(ve);function be(){return r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(x.a,{color:"inherit",href:"/credits"},"Credits"))}var we=Object(w.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(E.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(v.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},link:{margin:e.spacing(1,1)}}}));function Oe(){var e=we(),t=r.a.useState(!0),a=Object(f.a)(t,2),n=(a[0],a[1],Object(b.a)(e.paper,e.fixedHeight));return r.a.createElement("div",{className:e.root},r.a.createElement(O.a,null),r.a.createElement(Ee,{name:"Dashboard",hasChat:"false"}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(C.a,{maxWidth:"lg",className:e.container},r.a.createElement(S.a,{container:!0,spacing:3},r.a.createElement(S.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(k.a,{className:n},r.a.createElement(V,null))),r.a.createElement(S.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(k.a,{className:n},r.a.createElement(V,null))),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(k.a,{className:e.paper},r.a.createElement(Q,null)))),r.a.createElement(y.a,{pt:4},r.a.createElement(be,null)))))}a(193);var ye=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe,null)}}]),t}(r.a.Component),je=Object(h.f)(ye),Ce=a(20),Se=a(309),ke=a(304),xe=a(302),Be=a(307),Ne=a(81),Ie=a.n(Ne);function Le(){return r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(x.a,{color:"inherit",href:"/credits"},"Credits"))}var De=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSignUp=function(e){e.preventDefault();var t={email:a.email.value,password:a.password.value,firstname:a.firstname.value,lastname:a.lastname.value};fe.a.post("http://localhost:3000/api/signup/",t).then((function(){return window.location.href="/"})).catch((function(e){console.error(e)}))},a.handleSignUp=a.handleSignUp.bind(Object(Ce.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(O.a,null),r.a.createElement("div",{className:this.props.classes.paper},r.a.createElement(x.a,{variant:"h1",color:"primary",href:"/"},"Jigsaw"),r.a.createElement(Se.a,{className:this.props.classes.avatar},r.a.createElement(Ie.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:this.props.classes.form,noValidate:!0},r.a.createElement(S.a,{container:!0,spacing:2},r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement(ke.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,inputRef:function(t){e.firstname=t}})),r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement(ke.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",inputRef:function(t){e.lastname=t}})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(ke.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:function(t){e.email=t}})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(ke.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:function(t){e.password=t}})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(xe.a,{control:r.a.createElement(Be.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(de.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:this.props.classes.submit,onClick:this.handleSignUp},"Sign Up"),r.a.createElement(S.a,{container:!0,justify:"flex-end"},r.a.createElement(S.a,{item:!0},r.a.createElement(x.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(y.a,{mt:5},r.a.createElement(Le,null)))}}]),t}(r.a.Component),Pe=Object(he.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}),{withTheme:!0})(De),Ue=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Pe,null)}}]),t}(r.a.Component),Re=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Ue,null)}}]),t}(r.a.Component),Te=a(303);function Me(){return r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(x.a,{color:"inherit",href:"/credits"},"Credits"))}var Ae=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSignIn=function(e){e.preventDefault();var t={email:a.email.value,password:a.password.value};fe.a.post("http://localhost:3000/api/signin/",t).then((function(){return window.location.href="/"})).catch((function(e){console.error(e)}))},a.handleSignIn=a.handleSignIn.bind(Object(Ce.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(S.a,{container:!0,component:"main",className:this.props.classes.root},r.a.createElement(O.a,null),r.a.createElement(S.a,{item:!0,xs:!1,sm:4,md:7,className:this.props.classes.image}),r.a.createElement(S.a,{item:!0,xs:12,sm:8,md:5,component:k.a,elevation:6,square:!0},r.a.createElement("div",{className:this.props.classes.paper},r.a.createElement(x.a,{variant:"h1",color:"primary",href:"/"},"Jigsaw"),r.a.createElement(Se.a,{className:this.props.classes.avatar},r.a.createElement(Ie.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:this.props.classes.form,noValidate:!0},r.a.createElement(ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:function(t){e.email=t}}),r.a.createElement(ke.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:function(t){e.password=t}}),r.a.createElement(xe.a,{control:r.a.createElement(Be.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(de.a,{fullWidth:!0,variant:"contained",color:"primary",className:this.props.classes.submit,onClick:this.handleSignIn},"Sign In"),r.a.createElement(S.a,{container:!0},r.a.createElement(S.a,{item:!0},r.a.createElement(x.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(y.a,{mt:5},r.a.createElement(Me,null))))))}}]),t}(r.a.Component),Fe=Object(he.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(Jigsaw.jpeg)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),{withTheme:!0})(Ae),ze={reloadPage:function(){window.location.reload()},goTo:function(e){window.location.href="/".concat(e)},getUrlVars:function(){var e={};return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,a,n){e[a]=n})),e},getUrlParam:function(e,t){var a=t;return window.location.href.indexOf(e)>-1&&(a=this.getUrlVars()[e]),a},handleRedirect:function(){this.goTo(void 0===this.getUrlParam("redirect")?"":this.getUrlParam("redirect"))},getCurrentPath:function(){return window.location.pathname.substring(1)}},We=a(30),qe=a.n(We),Ve=a(59),Ge={setCookie:function(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3);var r="expires="+n.toUTCString();document.cookie=e+"="+t+";"+r+";path=/"},getCookie:function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}},Ye=a(39),Je={putUser:function(){var e=Object(Ve.a)(qe.a.mark((function e(t){var a;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ye.post("/api/v1/addUser",t);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),loginUserRequest:function(){var e=Object(Ve.a)(qe.a.mark((function e(t,a){var n,r,i;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ye.post("/api/v1/login",{email:t,password:a});case 3:return n=e.sent,r=n.data.jwt,i=n.data.oidUser,Ge.setCookie("sessionToken",r,1),Ge.setCookie("authenticatedUserEmail",t,1),Ge.setCookie("authenticatedOidUser",i,1),e.abrupt("return",n);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}(),getUser:function(){var e=Object(Ve.a)(qe.a.mark((function e(t){var a;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ye.get("/api/v1/getProfile",{params:{oidUser:t}});case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),putContact:function(){var e=Object(Ve.a)(qe.a.mark((function e(t,a){var n;return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ye.put("/api/v1/addContact",t,{headers:{jwt:a}});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),getContacts:function(){var e=Object(Ve.a)(qe.a.mark((function e(t,a){return qe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ye.get("/api/v1/getContacts",{params:{oidUser:t},headers:{jwt:a}});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}()};function He(){var e=r.a.useState(0),t=Object(f.a)(e,2),a=t[0],n=t[1];return r.a.useEffect((function(){var e=setInterval((function(){n((function(e){return e>=100?0:e+1}))}),20);return function(){clearInterval(e)}}),[]),r.a.createElement(y.a,{display:"flex",className:"login-progress-holder"},r.a.createElement(Te.a,{size:30,variant:"determinate",value:a}))}a(196);var _e=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleEmailChange=e.handleEmailChange.bind(Object(Ce.a)(e)),e.handlePasswordChange=e.handlePasswordChange.bind(Object(Ce.a)(e)),e.handleLoginAttempt=e.handleLoginAttempt.bind(Object(Ce.a)(e)),e.validateLoginInput=e.validateLoginInput.bind(Object(Ce.a)(e)),e.state={email:"",password:"",emailError:!1,passwordError:!1,loginInProgress:!1,loginFailUnauthorizedError:!1,loginFailInternalServerError:!1,loginFailBadRequestError:!1,loginSuccess:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.checkLoginSuccess()}},{key:"render",value:function(){return r.a.createElement(Fe,null)}},{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value,emailError:!1})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value,passwordError:!1})}},{key:"validateLoginInput",value:function(){var e=this;return new Promise((function(t,a){e.setState({passwordError:""===e.state.password,emailError:""===e.state.email}),t()}))}},{key:"renderLoginLoading",value:function(){if(this.state.loginInProgress)return r.a.createElement(He,null)}},{key:"renderUnauthorized",value:function(){if(this.state.loginFailUnauthorizedError)return r.a.createElement(j.a,{color:"error",variant:"subtitle2"},"Wrong Password!")}},{key:"renderInternalServerError",value:function(){if(this.state.loginFailInternalServerError)return r.a.createElement(j.a,{color:"error",variant:"subtitle2"},"Internal Server Error!")}},{key:"renderBadRequest",value:function(){if(this.state.loginFailBadRequestError)return r.a.createElement(j.a,{color:"error",variant:"subtitle2"},"Wrong Username / Password!")}},{key:"renderLoginFailErrorText",value:function(){return r.a.createElement("div",null,this.renderUnauthorized(),this.renderInternalServerError(),this.renderBadRequest())}},{key:"handleLoginAttempt",value:function(){var e=this;this.validateLoginInput().then((function(){e.state.passwordError||e.state.emailError||(e.setState({loginInProgress:!0,loginFailUnauthorizedError:!1,loginFailBadRequestError:!1,loginFailInternalServerError:!1}),Je.loginUserRequest(e.state.email,e.state.password).then((function(t){200===t.status?(e.setState({loginSuccess:!0}),e.props.store.set("authenticatedUserEmail",e.state.email),e.props.store.set("isLoggedIn",!0),e.props.store.set("authenticatedOidUser",t.data.oidUser)):401===t.status?e.setState({loginFailUnauthorizedError:!0}):400===t.status?e.setState({loginFailBadRequestError:!0}):500===t.status&&e.setState({loginFailInternalServerError:!0}),e.setState({loginInProgress:!1})})))}))}},{key:"checkLoginSuccess",value:function(){this.state.loginSuccess&&ze.handleRedirect()}}]),t}(r.a.Component),Xe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(_e,{className:"cldi-login-page",store:this.props.store})}}]),t}(r.a.Component),$e=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Credits:"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://material-ui.com/"},"Page Templates")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://medium.com/lessons-from-ordinary/lesson-from-a-jigsaw-puzzle-d5f9a8136805"},"Login Page Image")),r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(x.a,{color:"inherit",href:"/"},"Home")))}}]),t}(r.a.Component),Ke=a(143),Ze=a.n(Ke);var Qe=function(e){return{type:"COMPILE_CODE",payload:e}},et=a(83),tt=a.n(et),at=a(144),nt=a.n(at);a(233),a(234);a(235);var rt=tt()("http://localhost:5000"),it=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onChange=function(t){rt.emit("message",{newValue:t,room:e.state.room}),e.setState({code:t})},e.state={room:"",code:"var createScene = function() {\n    // Create a basic BJS Scene object.\n    var scene = new BABYLON.Scene(engine);\n\n    // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).\n    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5,-10), scene);\n\n    // Target the camera to scene origin.\n    camera.setTarget(BABYLON.Vector3.Zero());\n\n    // Attach the camera to the canvas.\n    camera.attachControl(canvas, false);\n\n    // Create a basic light, aiming 0,1,0 - meaning, to the sky.\n    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);\n\n    console.log(canvas);\n\n    // Create a built-in \"sphere\" shape. \n    var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);\n\n    // Move the sphere upward 1/2 of its height.\n    sphere.position.y = 1;\n\n    // Create a built-in \"ground\" shape.\n    var ground = BABYLON.MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, scene);\n\n    // Return the created scene.\n    return scene;\n}\n"},"/edit"!==window.location.pathname&&""!==window.location.pathname&&rt.emit("join",window.location.pathname),rt.on("room",(function(t){console.log(t),e.setState({room:t})})),rt.on("message",(function(t){e.setState({code:t.value,room:t.room})})),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.compileCode(this.state.code),"/edit"===window.location.pathname&&(window.location.pathname="/edit/".concat(nt()().split(" ").join("")))}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.code!==t.code}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"split left"},r.a.createElement(Ze.a,{mode:"javascript",theme:"dracula",onChange:this.onChange,name:"ace-editor",editorProps:{$blockScrolling:!0},value:this.state.code,width:"100%",height:"100%"}),r.a.createElement(de.a,{className:"compile-button",variant:"contained",color:"primary",onClick:function(){e.props.compileCode(e.state.code)}},"Compile"))}}]),t}(r.a.Component);var ot=Object(p.b)(null,(function(e){return{compileCode:function(t){return e(Qe({code:t}))}}}))(it);var ct=function(e){return'\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>\n        <title>Babylon - Getting Started</title>\n        \x3c!--- Link to the last version of BabylonJS ---\x3e\n        <script src="https://cdn.babylonjs.com/babylon.js"><\/script>\n        <style>\n            html, body {\n                overflow: hidden;\n                width   : 100%;\n                height  : 100%;\n                margin  : 0;\n                padding : 0;\n            }\n    \n            #renderCanvas {\n                width   : 100%;\n                height  : 100%;\n                touch-action: none;\n            }\n        </style>\n    </head>\n    <body>\n        <canvas id="renderCanvas"></canvas>\n        <script>\n            window.addEventListener(\'DOMContentLoaded\', function(){\n                // get the canvas DOM element\n                var canvas = document.getElementById(\'renderCanvas\');\n    \n                // load the 3D engine\n                var engine = new BABYLON.Engine(canvas, true);\n    \n                // createScene function that creates and return the scene\n                '.concat(e,"\n    \n                // call the createScene function\n                var scene = createScene();\n    \n                // run the render loop\n                engine.runRenderLoop(function(){\n                    scene.render();\n                });\n    \n                // the canvas/window resize event handler\n                window.addEventListener('resize', function(){\n                    engine.resize();\n                });\n            });\n        <\/script>\n    </body>\n    </html>")};a(236);var st=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={code:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("iframe",{className:"split right",title:"model-frame",ref:"renderFrame",srcDoc:ct(this.props.code)})}}]),t}(r.a.Component),lt=Object(p.b)((function(e){return console.log("mapping state to props"),console.log(e.code),{code:e.code}}))(st),ut=a(146),mt=a(145),pt=a.n(mt),dt=tt()("http://localhost:5000");a(237);var ht={minWidth:300},gt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={classes:e.classes,value:"",room:"",messages:[]},a.handleChange=a.handleChange.bind(Object(Ce.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(Ce.a)(a)),"/edit"!==window.location.pathname&&""!==window.location.pathname&&dt.emit("join",window.location.pathname),dt.on("room",(function(e){console.log(e),a.setState({room:e})})),dt.on("chat message",(function(e){a.setState({messages:[].concat(Object(ut.a)(a.state.messages),[e.value]),room:e.room})})),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){dt.emit("chat message",{chat:this.state.value,room:this.state.room}),e.preventDefault(),this.setState({value:""})}},{key:"render",value:function(){var e=this.state.messages;console.log(e);var t=e.map((function(e,t){return r.a.createElement("li",{id:"message",key:t},e)}));return r.a.createElement(ee.a,{anchor:"right",open:this.props.open,variant:"persistent"},r.a.createElement(ae.a,{disableGutters:!0,style:ht}),r.a.createElement(ae.a,{disableGutters:!0,style:ht},r.a.createElement(y.a,{pl:3,pr:3,display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},r.a.createElement(j.a,{variant:"h6"},"Chat"),r.a.createElement(ie.a,{onClick:this.props.onClose,color:"primary","aria-label":"Close Sidedrawer"},r.a.createElement(pt.a,null)))),r.a.createElement(re.a,null),r.a.createElement("ul",{id:"messages"},t),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"input",type:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{className:"button"},"Send")))}}]),t}(r.a.Component),ft=Object(he.a)(ht)(gt);a(238);var vt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},a.closeDrawer=function(){a.setState({sideDrawerOpen:!1})},a.openDrawer=function(){a.setState({sideDrawerOpen:!0})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state;e.mobileOpen,e.sideDrawerOpen;return r.a.createElement("div",{className:"edit-page"},r.a.createElement(Ee,{name:"Edit",hasChat:"true",onOpen:this.openDrawer}),r.a.createElement(C.a,null,r.a.createElement(ot,null),r.a.createElement(lt,null),r.a.createElement(ft,{open:this.state.sideDrawerOpen,onClose:this.closeDrawer})))}}]),t}(r.a.Component),Et=Object(p.b)()(vt),bt=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Et,null)}}]),t}(r.a.Component),wt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isLoggedIn:!1,currentRoute:"viewprofile",routes:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return Ot()}}]),t}(r.a.Component),Ot=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/signup",component:Re}),r.a.createElement(h.a,{path:"/login",component:Xe}),r.a.createElement(h.a,{path:"/credits",component:$e}),r.a.createElement(h.a,{path:"/edit",component:bt}),r.a.createElement(h.a,{path:"/main",component:je}),r.a.createElement(h.a,{path:"/",component:je}))},yt=wt,jt={code:null,createScene:null};var Ct=function(e){return e.dispatch,function(e){return function(t){return t.type,e(t)}}},St=Object(g.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;return"COMPILE_CODE"===t.type&&(e.code!==t.payload.code&&console.log("code has changed, updating state"),e=Object.assign({},e,{code:t.payload.code})),e}),Object(g.a)(Ct)),kt=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:St},r.a.createElement(d.a,null,r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",component:yt}))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(kt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[166,1,2]]]);
//# sourceMappingURL=main.534b85f3.chunk.js.map