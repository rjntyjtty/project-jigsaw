(this.webpackJsonpjigsaw=this.webpackJsonpjigsaw||[]).push([[0],{165:function(e,t,a){e.exports=a(240)},170:function(e,t,a){},194:function(e,t,a){},196:function(e,t,a){},230:function(e,t){},235:function(e,t,a){},236:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),o=a.n(i);a(170),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(8),s=a(7),l=a(10),u=a(9),m=a(11),p=a(39),d=a(70),h=a(42),g=a(60),f=a(53),b=a(71),v=a(303),E=a(289),w=a(306),y=a(43),O=a(304),j=a(302),C=a(3),k=a(311),S=a(290),z=a(291),x=a(293),P=a(292),N=a(286),B=a(287),D=a(135),M=a.n(D),G=a(136),I=a.n(G),L=a(134),R=a.n(L),A=a(279),T=a(283),W=a(284),Y=a(285),_=a(132),U=a.n(_),q=a(80),F=a.n(q),H=a(133),J=a.n(H),V=r.a.createElement("div",null,r.a.createElement(A.a,{button:!0,component:"a",href:"/"},r.a.createElement(T.a,null,r.a.createElement(U.a,null)),r.a.createElement(W.a,{primary:"Dashboard"})),r.a.createElement(A.a,{button:!0,component:"a",href:"/edit"},r.a.createElement(T.a,null,r.a.createElement(J.a,null)),r.a.createElement(W.a,{primary:"Edit"}))),X=r.a.createElement("div",null,r.a.createElement(Y.a,{inset:!0},"Saved projects"),r.a.createElement(A.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(F.a,null)),r.a.createElement(W.a,{primary:"Star Platinum"})),r.a.createElement(A.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(F.a,null)),r.a.createElement(W.a,{primary:"Super Fly"})),r.a.createElement(A.a,{button:!0},r.a.createElement(T.a,null,r.a.createElement(F.a,null)),r.a.createElement(W.a,{primary:"Tower of Grey"}))),Z=a(288),$=a(4),K=a(37),Q=a.n(K),ee=a(63),te=a(177),ae={signup:function(){var e=Object(ee.a)(Q.a.mark((function e(t){var a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.post("/api/signup",t);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),signin:function(){var e=Object(ee.a)(Q.a.mark((function e(t){var a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.post("/api/signin",t);case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),signout:function(){var e=Object(ee.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.get("/api/signout");case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),getCurrUser:function(){var e=Object(ee.a)(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te.get("/api/currrent_user");case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},ne=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.handleSignOut=function(){ae.signout().then((function(e){window.location.href="/"}))},a.state={open:!1,current_user:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"messageButton",value:function(){if("true"===this.props.hasChat)return r.a.createElement(N.a,{color:"inherit",onClick:this.props.onOpen,"aria-label":"Open Sidedrawer"},r.a.createElement(B.a,{badgeContent:"!",color:"secondary"},r.a.createElement(R.a,null)))}},{key:"loginLogoutButton",value:function(){return""===this.state.current_user?r.a.createElement(Z.a,{href:"/login",color:"inherit",variant:"outlined",className:this.props.classes.link},"Login"):r.a.createElement(Z.a,{onClick:this.handleSignOut,color:"inherit",variant:"outlined",className:this.props.classes.link},"Sign out")}},{key:"username",value:function(){if(""!==this.state.current_user)return r.a.createElement(y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0},this.state.current_user)}}]),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;ae.getCurrUser().then((function(t){try{e.setState({current_user:t.data[0].firstName})}catch(a){}}))}},{key:"render",value:function(){var e=this.state.open;return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement(E.a,null),r.a.createElement(S.a,{position:"fixed",className:Object(C.a)(this.props.classes.appBar,e&&this.props.classes.appBarShift)},r.a.createElement(z.a,{className:this.props.classes.toolbar},r.a.createElement(N.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,className:Object(C.a)(this.props.classes.menuButton,e&&this.props.classes.menuButtonHidden)},r.a.createElement(M.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:this.props.classes.title},this.props.name),this.username(),this.messageButton(),this.loginLogoutButton())),r.a.createElement(k.a,{variant:"permanent",classes:{paper:Object(C.a)(this.props.classes.drawerPaper,!e&&this.props.classes.drawerPaperClose)},open:e},r.a.createElement("div",{className:this.props.classes.toolbarIcon},r.a.createElement(N.a,{onClick:this.handleDrawerClose},r.a.createElement(I.a,null))),r.a.createElement(P.a,null),r.a.createElement(x.a,null,V),r.a.createElement(P.a,null),r.a.createElement(x.a,null,X)))}}]),t}(r.a.Component),re=Object($.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(b.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,height:"100vh",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(f.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},link:{margin:e.spacing(1,1)}}}),{withTheme:!0})(ne),ie=a(301),oe=a(145),ce=a(308),se=a(139),le=a.n(se),ue=a(294),me=a(295),pe=a(296),de=a(297),he=a(298);var ge=function(e){var t=e.open,a=e.onClose,n=e.loading,i=e.title,o=e.content,c=e.onConfirm;return r.a.createElement(ue.a,{open:t,onClose:a,disableBackdropClick:n,disableEscapeKeyDown:n},r.a.createElement(me.a,null,i),r.a.createElement(pe.a,null,r.a.createElement(de.a,null,o)),r.a.createElement(he.a,null,r.a.createElement(Z.a,{onClick:a,disabled:n},"Close"),r.a.createElement(Z.a,{color:"secondary",onClick:c,variant:"contained",disabled:n},"Yes")))},fe=a(143),be=a(310);function ve(){var e=r.a.useState(!1),t=Object(fe.a)(e,2),a=t[0],n=t[1],i=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(Z.a,{variant:"outlined",color:"secondary",onClick:function(){n(!0)}},"Add Project"),r.a.createElement(ue.a,{open:a,onClose:i,"aria-labelledby":"form-dialog-title"},r.a.createElement(me.a,{id:"form-dialog-title"},"New Project"),r.a.createElement(pe.a,null,r.a.createElement(de.a,null,"Add a new project."),r.a.createElement(be.a,{autoFocus:!0,margin:"dense",id:"name",label:"Project Name",type:"project name",fullWidth:!0})),r.a.createElement(he.a,null,r.a.createElement(Z.a,{onClick:i,color:"secondary"},"Cancel"),r.a.createElement(Z.a,{href:"/edit",color:"primary"},"Add"))))}var Ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={page:0,deletePostDialogOpen:!1,deletePostLoading:!1},a.rowsPerPage=25,a.closeDeletePostDialog=function(){a.setState({deletePostDialogOpen:!1,deletePostLoading:!1})},a.deletePost=function(){var e=a.props.pushMessageToSnackbar;a.setState({deletePostLoading:!0}),setTimeout((function(){a.setState({deletePostLoading:!1,deletePostDialogOpen:!1}),e({text:"Your scheduled post has been deleted"})}),1500)},a.onDelete=function(){a.setState({deletePostDialogOpen:!0})},a.handleChangePage=function(e,t){a.setState({page:t})},a.printImageGrid=function(){[].push({name:"Delete",onClick:a.onDelete,icon:r.a.createElement(le.a,null)});var e=a.props.posts,t=a.state.page;return e.length>0?r.a.createElement(w.a,{p:1},r.a.createElement(ie.a,{container:!0,spacing:1},e.slice(t*a.rowsPerPage,t*a.rowsPerPage+a.rowsPerPage).map((function(e){return r.a.createElement(ie.a,{item:!0,xs:6,sm:4,md:3,key:e.id},r.a.createElement(y.a,null," ",e," "))})))):r.a.createElement(w.a,{m:2},r.a.createElement(y.a,null,'No projects added yet. Click on "Add Project" to create your first one.'))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.page,a=e.deletePostDialogOpen,n=e.deletePostLoading,i=this.props,o=i.posts,c=i.classes;return r.a.createElement(oe.a,null,r.a.createElement(z.a,{className:c.toolbar},r.a.createElement(y.a,{variant:"h6"},"Your Projects"),r.a.createElement(ve,null)),r.a.createElement(P.a,null),this.printImageGrid(),r.a.createElement(ce.a,{component:"div",count:o.length,rowsPerPage:this.rowsPerPage,page:t,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,classes:{select:c.dNone,selectIcon:c.dNone,actions:o.length>0?c.dBlock:c.dNone,caption:o.length>0?c.dBlock:c.dNone},labelRowsPerPage:""}),r.a.createElement(ge,{open:a,title:"Confirmation",content:"Do you really want to delete the post?",onClose:this.closeDeletePostDialog,loading:n,onConfirm:this.deletePost}))}}]),t}(n.PureComponent),we=Object($.a)({dBlock:{display:"block"},dNone:{display:"none"},toolbar:{justifyContent:"space-between"}})(Ee),ye=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(we,{posts:[]}))}}]),t}(n.PureComponent);function Oe(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(j.a,{color:"inherit",href:"/credits"},"Credits"))}var je=Object(v.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(b.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(f.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},link:{margin:e.spacing(1,1)}}}));function Ce(){var e=je();return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,null),r.a.createElement(re,{name:"Dashboard",hasChat:"false"}),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(O.a,{maxWidth:"lg",className:e.container},r.a.createElement(ye,null),r.a.createElement(w.a,{pt:4},r.a.createElement(Oe,null)))))}a(194);var ke=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Ce,null)}}]),t}(r.a.Component),Se=Object(h.f)(ke),ze=a(35),xe=a(313),Pe=a(305),Ne=a(309),Be=a(77),De=a.n(Be);function Me(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(j.a,{color:"inherit",href:"/credits"},"Credits"))}var Ge=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSignUp=function(e){e.preventDefault();var t={email:a.email.value,password:a.password.value,firstname:a.firstname.value,lastname:a.lastname.value};ae.signup(t).then((function(){return window.location.href="/"})).catch((function(e){console.error(e)}))},a.handleSignUp=a.handleSignUp.bind(Object(ze.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(O.a,{component:"main",maxWidth:"xs"},r.a.createElement(E.a,null),r.a.createElement("div",{className:this.props.classes.paper},r.a.createElement(j.a,{variant:"h1",color:"primary",href:"/"},"Jigsaw"),r.a.createElement(xe.a,{className:this.props.classes.avatar},r.a.createElement(De.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:this.props.classes.form,noValidate:!0},r.a.createElement(ie.a,{container:!0,spacing:2},r.a.createElement(ie.a,{item:!0,xs:12,sm:6},r.a.createElement(be.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,inputRef:function(t){e.firstname=t}})),r.a.createElement(ie.a,{item:!0,xs:12,sm:6},r.a.createElement(be.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname",inputRef:function(t){e.lastname=t}})),r.a.createElement(ie.a,{item:!0,xs:12},r.a.createElement(be.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",inputRef:function(t){e.email=t}})),r.a.createElement(ie.a,{item:!0,xs:12},r.a.createElement(be.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:function(t){e.password=t}})),r.a.createElement(ie.a,{item:!0,xs:12},r.a.createElement(Pe.a,{control:r.a.createElement(Ne.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(Z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:this.props.classes.submit,onClick:this.handleSignUp},"Sign Up"),r.a.createElement(ie.a,{container:!0,justify:"flex-end"},r.a.createElement(ie.a,{item:!0},r.a.createElement(j.a,{href:"/login",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(w.a,{mt:5},r.a.createElement(Me,null)))}}]),t}(r.a.Component),Ie=Object($.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}),{withTheme:!0})(Ge),Le=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Ie,null)}}]),t}(r.a.Component),Re=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Le,null)}}]),t}(r.a.Component);function Ae(){return r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(j.a,{color:"inherit",href:"/credits"},"Credits"))}var Te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSignIn=function(e){e.preventDefault();var t={email:a.email.value,password:a.password.value};ae.signin(t).then((function(){return window.location.href="/"})).catch((function(e){console.error(e)}))},a.handleSignIn=a.handleSignIn.bind(Object(ze.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(ie.a,{container:!0,component:"main",className:this.props.classes.root},r.a.createElement(E.a,null),r.a.createElement(ie.a,{item:!0,xs:!1,sm:4,md:7,className:this.props.classes.image}),r.a.createElement(ie.a,{item:!0,xs:12,sm:8,md:5,component:oe.a,elevation:6,square:!0},r.a.createElement("div",{className:this.props.classes.paper},r.a.createElement(j.a,{variant:"h1",color:"primary",href:"/"},"Jigsaw"),r.a.createElement(xe.a,{className:this.props.classes.avatar},r.a.createElement(De.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:this.props.classes.form,noValidate:!0},r.a.createElement(be.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,inputRef:function(t){e.email=t}}),r.a.createElement(be.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",inputRef:function(t){e.password=t}}),r.a.createElement(Pe.a,{control:r.a.createElement(Ne.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(Z.a,{fullWidth:!0,variant:"contained",color:"primary",className:this.props.classes.submit,onClick:this.handleSignIn},"Sign In"),r.a.createElement(ie.a,{container:!0},r.a.createElement(ie.a,{item:!0},r.a.createElement(j.a,{href:"/signup",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(w.a,{mt:5},r.a.createElement(Ae,null))))))}}]),t}(r.a.Component),We=Object($.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(Jigsaw.jpeg)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}),{withTheme:!0})(Te);a(196);var Ye=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(We,null)}}]),t}(r.a.Component),_e=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Ye,{className:"cldi-login-page",store:this.props.store})}}]),t}(r.a.Component),Ue=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Credits:"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://material-ui.com/"},"Page Templates")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://medium.com/lessons-from-ordinary/lesson-from-a-jigsaw-puzzle-d5f9a8136805"},"Login Page Image")),r.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(j.a,{color:"inherit",href:"/"},"Home")))}}]),t}(r.a.Component),qe=a(141),Fe=a.n(qe);var He=function(e){return{type:"COMPILE_CODE",payload:e}},Je=a(78),Ve=a.n(Je),Xe=a(79),Ze=a.n(Xe);a(233),a(234);a(235);var $e=Ve()("http://localhost:50001"),Ke=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).onChange=function(t){$e.emit("message",{newValue:t,room:e.state.room}),e.setState({code:t})},e.state={room:"",code:"var createScene = function() {\n    // Create a basic BJS Scene object.\n    var scene = new BABYLON.Scene(engine);\n\n    // Create a ArcRotateCamera.\n    var camera = new BABYLON.ArcRotateCamera(\"Camera\", -Math.PI / 4, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);\n\n    // Target the camera to scene origin.\n    camera.setTarget(BABYLON.Vector3.Zero());\n\n    // Attach the camera to the canvas.\n    camera.attachControl(canvas, false);\n\n    // Create a basic light, aiming 0,1,0 - meaning, to the sky.\n    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);\n\n    // Create a built-in \"sphere\" shape.\n    var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);\n\n    // Move the sphere upward 1/2 of its height.\n    sphere.position.y = 1;\n\n    // Create a built-in \"ground\" shape.\n    var ground = BABYLON.MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, scene);\n\n    // Return the created scene.\n    return scene;\n}\n"},"/edit"!==window.location.pathname&&""!==window.location.pathname&&$e.emit("join",window.location.pathname),$e.on("room",(function(t){e.setState({room:t})})),$e.on("message",(function(t){e.setState({code:t.value,room:t.room})})),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.compileCode(this.state.code),"/edit"===window.location.pathname&&(window.location.pathname="/edit/".concat(Ze()().split(" ").join("")))}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.code!==t.code}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"split"},r.a.createElement(Fe.a,{mode:"javascript",theme:"dracula",onChange:this.onChange,name:"ace-editor",editorProps:{$blockScrolling:!0},value:this.state.code,width:"100%",height:"100%"}),r.a.createElement(Z.a,{className:"compile-button",variant:"contained",color:"primary",onClick:function(){e.props.compileCode(e.state.code)}},"Compile"))}}]),t}(r.a.Component);var Qe=Object(p.b)(null,(function(e){return{compileCode:function(t){return e(He({code:t}))}}}))(Ke);var et=function(e,t){var a="";return t&&(a="\n        scene.debugLayer.show({\n            embedMode:true\n        });"),'\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <meta http-equiv="Content-Type" content="text/html" charset="utf-8"/>\n        <title>Babylon - Getting Started</title>\n        \x3c!--- Link to the last version of BabylonJS ---\x3e\n        <script src="https://cdn.babylonjs.com/babylon.js"><\/script>\n        <style>\n            html, body {\n                overflow: hidden;\n                width   : 100%;\n                height  : 100%;\n                margin  : 0;\n                padding : 0;\n            }\n\n            #renderCanvas {\n                width   : 100%;\n                height  : 100%;\n                touch-action: none;\n            }\n        </style>\n    </head>\n    <body>\n        <canvas id="renderCanvas"></canvas>\n        <script>\n            "use strict";\n            window.addEventListener(\'DOMContentLoaded\', function(){\n                // get the canvas DOM element\n                var canvas = document.getElementById(\'renderCanvas\');\n\n                // load the 3D engine\n                var engine = new BABYLON.Engine(canvas, true);\n\n                // createScene function that creates and return the scene\n                '.concat(e,"\n\n                // call the createScene function\n                var scene = createScene();\n\n                ").concat(a,"\n\n                // run the render loop\n                engine.runRenderLoop(function(){\n                    scene.render();\n                });\n\n                // the canvas/window resize event handler\n                window.addEventListener('resize', function(){\n                    engine.resize();\n                });\n\n                // Initialize GizmoManager\n                var gizmoManager = new BABYLON.GizmoManager(scene)\n\n                // Initialize gizmo\n                gizmoManager.positionGizmoEnabled = true;\n\n                // Modify gizmos based on keypress\n                document.onkeydown = (e)=>{\n                    if(e.key == 'w' || e.key == 'e'|| e.key == 'r'|| e.key == 'q'){\n                        // Switch gizmo type\n                        gizmoManager.positionGizmoEnabled = false;\n                        gizmoManager.rotationGizmoEnabled = false;\n                        gizmoManager.scaleGizmoEnabled = false;\n                        gizmoManager.boundingBoxGizmoEnabled = false;\n                        if(e.key == 'w'){\n                            gizmoManager.positionGizmoEnabled = true;\n                        }\n                        if(e.key == 'e'){\n                            gizmoManager.rotationGizmoEnabled = true;\n                        }\n                        if(e.key == 'r'){\n                            gizmoManager.scaleGizmoEnabled = true;\n                        }\n                        if(e.key == 'q'){\n                            gizmoManager.boundingBoxGizmoEnabled = true;\n                        }\n                    }\n                    if(e.key == 'y'){\n                        // hide the gizmo\n                        gizmoManager.attachToMesh(null);\n                    }\n                    if(e.key == 't'){\n                      // Toggle local/global gizmo rotation positioning\n                      scene.debugLayer.show({\n                        embedMode:true\n                      });\n                    }\n                    if(e.key == 's'){\n                        // Toggle distance snapping\n                        if(gizmoManager.gizmos.scaleGizmo.snapDistance == 0){\n                            gizmoManager.gizmos.scaleGizmo.snapDistance = 0.3;\n                            gizmoManager.gizmos.rotationGizmo.snapDistance = 0.3;\n                            gizmoManager.gizmos.positionGizmo.snapDistance = 0.3;\n                        }else{\n                            gizmoManager.gizmos.scaleGizmo.snapDistance = 0;\n                            gizmoManager.gizmos.rotationGizmo.snapDistance = 0;\n                            gizmoManager.gizmos.positionGizmo.snapDistance = 0;\n                        }\n                    }\n                    if(e.key == 'd'){\n                        // Toggle gizmo size\n                        if(gizmoManager.gizmos.scaleGizmo.scaleRatio == 1){\n                            gizmoManager.gizmos.scaleGizmo.scaleRatio = 1.5;\n                            gizmoManager.gizmos.rotationGizmo.scaleRatio = 1.5;\n                            gizmoManager.gizmos.positionGizmo.scaleRatio = 1.5;\n                        }else{\n                            gizmoManager.gizmos.scaleGizmo.scaleRatio = 1;\n                            gizmoManager.gizmos.rotationGizmo.scaleRatio = 1;\n                            gizmoManager.gizmos.positionGizmo.scaleRatio = 1;\n                        }\n                    }\n                }\n            });\n\n\n\n        <\/script>\n    </body>\n    </html>")};a(236);var tt=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={code:null},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("iframe",{className:"split right",title:"model-frame",ref:"renderFrame",srcDoc:et(this.props.code,this.props.debug||!0)})}}]),t}(r.a.Component),at=Object(p.b)((function(e){return{code:e.code,debug:e.debug}}))(tt),nt=a(144),rt=a(142),it=a.n(rt),ot=a(237),ct=Ve()("http://localhost:50001");a(238);var st={minWidth:300},lt=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={classes:e.classes,value:"",room:"",messages:[],current_user:"",color:""},a.handleChange=a.handleChange.bind(Object(ze.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(ze.a)(a)),"/edit"!==window.location.pathname&&""!==window.location.pathname&&ct.emit("join",window.location.pathname),ct.on("room",(function(e){a.setState({room:e})})),ct.on("chat message",(function(e){a.setState({messages:[].concat(Object(nt.a)(a.state.messages),[{user:e.user,value:e.value,color:e.color}]),room:e.room})})),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;ae.getCurrUser().then((function(t){try{e.setState({current_user:t.data[0].firstName+" "+t.data[0].lastName})}catch(a){e.setState({current_user:"Anonymous "+Ze()()})}e.setState({color:ot()})}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){ct.emit("chat message",{value:this.state.value,room:this.state.room,user:this.state.current_user,color:this.state.color}),e.preventDefault(),this.setState({value:""})}},{key:"render",value:function(){var e=this.state.messages.map((function(e,t){return r.a.createElement("li",{id:"message",key:t},r.a.createElement("div",{className:"username",id:"message",style:{color:e.color},key:t},e.user,":"),e.value)}));return r.a.createElement(k.a,{anchor:"right",open:this.props.open,variant:"persistent"},r.a.createElement(z.a,{disableGutters:!0,style:st}),r.a.createElement(z.a,{disableGutters:!0,style:st},r.a.createElement(w.a,{pl:3,pr:3,display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"},r.a.createElement(y.a,{variant:"h6"},"Chat"),r.a.createElement(N.a,{onClick:this.props.onClose,color:"primary","aria-label":"Close Sidedrawer"},r.a.createElement(it.a,null)))),r.a.createElement(P.a,null),r.a.createElement("ul",{id:"messages"},e),r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"input",type:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",{className:"button"},"Send")))}}]),t}(r.a.Component),ut=Object($.a)(st)(lt);a(239);var mt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sideDrawerOpen:!1},a.closeDrawer=function(){a.setState({sideDrawerOpen:!1})},a.openDrawer=function(){a.setState({sideDrawerOpen:!0})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"edit-page"},r.a.createElement(re,{name:"Edit",hasChat:"true",onOpen:this.openDrawer}),r.a.createElement("main",null,r.a.createElement(Qe,null),r.a.createElement(at,null)),r.a.createElement(ut,{open:this.state.sideDrawerOpen,onClose:this.closeDrawer}))}}]),t}(r.a.Component),pt=Object(p.b)()(mt),dt=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(pt,null)}}]),t}(r.a.Component),ht=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={isLoggedIn:!1,currentRoute:"viewprofile",routes:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return gt()}}]),t}(r.a.Component),gt=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/signup",component:Re}),r.a.createElement(h.a,{path:"/login",component:_e}),r.a.createElement(h.a,{path:"/credits",component:Ue}),r.a.createElement(h.a,{path:"/edit",component:dt}),r.a.createElement(h.a,{path:"/main",component:Se}),r.a.createElement(h.a,{path:"/",component:Se}))},ft=ht,bt={code:null,createScene:null};var vt=function(e){return e.dispatch,function(e){return function(t){return t.type,e(t)}}},Et=Object(g.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;return"COMPILE_CODE"===t.type?e.code!==t.payload.code&&(e=Object.assign({},e,{code:t.payload.code})):"TOGGLE_DEBUG"===t.type&&(e=Object.assign({},e,{debug:t.payload.debug})),e}),Object(g.a)(vt)),wt=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:Et},r.a.createElement(d.a,null,r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"}),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",component:ft}))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(wt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[165,1,2]]]);
//# sourceMappingURL=main.bc89ca1b.chunk.js.map