(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{152:function(e,t,a){"use strict";a.r(t);a(180);var n=a(0),s=a.n(n),i=a(7),r=a.n(i),o=(a(146),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isActive:!1},a}r()(t,e);var a=t.prototype;return a.handleHover=function(){this.setState({isActive:!this.state.isActive})},a.render=function(){var e=this.state.isActive?"active":"";return s.a.createElement("div",{className:"team-member"},s.a.createElement("div",{className:"team-content"},s.a.createElement("div",{className:"team-image "+e,onMouseEnter:this.handleHover.bind(this),onMouseLeave:this.handleHover.bind(this)},s.a.createElement("img",{src:this.props.image,alt:""}),s.a.createElement("div",{className:"team-content-hover",style:{background:"#1c6300"}},s.a.createElement("div",{className:"gradient-overlay"}),s.a.createElement("h5",null,this.props.memberName),s.a.createElement("span",{className:"team-subtitle"},this.props.subtitle),s.a.createElement("p",null,this.props.bio),s.a.createElement("div",{className:"team-socials"},s.a.createElement("a",{href:this.props.twitterLink,target:" _blank",title:""},s.a.createElement("svg",{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 273.4 222.2",style:{enableBackground:"new 0 0 273.4 222.2"}},s.a.createElement("path",{style:{fill:"#fff"},d:"M273.4,26.3c-10.1,4.5-20.9,7.5-32.2,8.8c11.6-6.9,20.5-17.9,24.7-31C255,10.5,243,15.2,230.2,17.7C220,6.8,205.4,0,189.3,0 c-31,0-56.1,25.1-56.1,56.1c0,4.4,0.5,8.7,1.5,12.8C88,66.5,46.7,44.2,19,10.3c-4.8,8.3-7.6,17.9-7.6,28.2c0,19.5,9.9,36.6,25,46.7 c-9.2-0.3-17.8-2.8-25.4-7c0,0.2,0,0.5,0,0.7c0,27.2,19.3,49.8,45,55c-4.7,1.3-9.7,2-14.8,2c-3.6,0-7.1-0.4-10.6-1 c7.1,22.3,27.9,38.5,52.4,39c-19.2,15-43.4,24-69.7,24c-4.5,0-9-0.3-13.4-0.8c24.8,15.9,54.3,25.2,86,25.2 c103.2,0,159.6-85.5,159.6-159.6c0-2.4-0.1-4.9-0.2-7.3C256.4,47.4,265.9,37.5,273.4,26.3z"})))))),s.a.createElement("h5",null,this.props.memberName),s.a.createElement("span",{className:"team-subtitle"},this.props.subtitle)))},t}(n.Component)),l=a(156),c=a(159),m=[{name:"Rainier McCheddarton",headshot:a(181),subtitle:"Labradoodle, squeaker, cheese fan",bio:"Doggo ipsum very hand that feed shibe heckin good boys and girls fat boi much ruin diet you are doing me the shock wrinkler length boy, I am bekom fat lotsa pats dat tungg tho shooberino.",twitterLink:"http://twitter.com"},{name:"Bagley Fluffpants",headshot:a(182),subtitle:"Cheshire cat, supreme loaf",bio:"The door is opening! how exciting oh, it's you, meh drink water out of the faucet. Spend six hours per day washing, but still have a crusty butthole, so lies down or sit on human they not getting up ever, but lick human with sandpaper tongue.",twitterLink:"http://twitter.com"},{name:"Butterscotch",headshot:a(183),subtitle:"My future mini horse",bio:"Kickin' cow his him boobtube damn moonshine skedaddled. Gal ain't havin' dirty tractor crazy tin. Hogjowls hold cain't hardware horse gospel tractor kinfolk, down.",twitterLink:"http://twitter.com"}];t.default=function(){return s.a.createElement(l.a,null,s.a.createElement(c.a,{title:"Which friends can come"}),s.a.createElement("div",null,s.a.createElement("h2",null,"Which friends shall we bring?"),s.a.createElement(o,{member:m[0],memberName:m[0].name,image:m[0].headshot,subtitle:m[0].subtitle,bio:m[0].bio,twitterLink:m[0].twitterLink}),s.a.createElement(o,{memberName:m[1].name,image:m[1].headshot,subtitle:m[1].subtitle,bio:m[1].bio,twitterLink:m[1].twitterLink}),s.a.createElement(o,{memberName:m[2].name,image:m[2].headshot,subtitle:m[2].subtitle,bio:m[2].bio,twitterLink:m[2].twitterLink})))}},155:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},156:function(e,t,a){"use strict";var n=a(157),s=a(0),i=a.n(s),r=(a(35),a(4)),o=a.n(r),l=a(33),c=a.n(l);a(155),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func;var m=a(161),p=a.n(m),u=function(e){var t=e.siteTitle,a=e.showModal;return i.a.createElement("header",null,i.a.createElement("div",{className:"signup-btn",onClick:a.bind(void 0)},i.a.createElement("i",{className:"fa fa-newspaper-o"})),i.a.createElement("h1",{className:"App-title"},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)))};u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var h=u,d=(a(34),a(36),a(7)),f=a.n(d),g={overlay:function(e){return{position:"fixed",zIndex:1,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,a){return{position:"fixed",right:a?0:"inherit",zIndex:2,width:t,height:"100%",MozTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block",outline:"none"}},menuIcon:function(e,t,a){return{}}},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={hover:!1},a}f()(t,e);var a=t.prototype;return a.getLineStyle=function(e){return{position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1}},a.render=function(){var e,t=this;if(this.props.customIcon){var a={className:"m-icon",style:Object.assign({},{width:"100%",height:"100%"},this.props.styles.mIcon)};e=i.a.cloneElement(this.props.customIcon,a)}else e=i.a.createElement("span",null,[0,1,2].map(function(e){return i.a.createElement("span",{key:e,className:"m-menu-bars "+t.props.barClassName,style:Object.assign({},t.getLineStyle(e),t.props.styles.mMenuBars)})}));return i.a.createElement("div",{onClick:this.props.onClick,onMouseOver:function(){return t.setState({hover:!0})},onMouseOut:function(){return t.setState({hover:!1})},className:"m-menu-button "+this.props.className,style:{backgroundColor:"transparent",margin:0,padding:0,border:"none",fontSize:8,cursor:"pointer"}},e)},t}(s.Component);b.propTypes={barClassName:o.a.string,styles:o.a.object},b.defaultProps={barClassName:"",className:"",styles:{}};var y=function(e){function t(){return e.apply(this,arguments)||this}f()(t,e);var a=t.prototype;return a.getCloseStyle=function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}},a.render=function(){var e,t=this;if(this.props.customIcon){var a={className:"m-close",style:Object.assign({},{width:"100%",height:"100%"},this.props.styles.mClose)};e=i.a.cloneElement(this.props.customIcon,a)}else e=i.a.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map(function(e,a){return i.a.createElement("span",{key:a,className:"m-close "+t.props.closeClassName,style:Object.assign({},t.getCloseStyle(e),t.props.styles.mClose)})}));return i.a.createElement("div",{className:"m-close-button "+this.props.className,style:Object.assign({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.mCloseButton)},e,i.a.createElement("div",{onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",margin:0,padding:0,border:"none",textIndent:-9999,background:"transparent",cursor:"pointer"}}))},t}(s.Component);y.propTypes={closeClassName:o.a.string,styles:o.a.object},y.defaultProps={closeClassName:"",className:"",styles:{}};a(143);var v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}f()(t,e);var a=t.prototype;return a.toggleMenu=function(e){var t=this;void 0===e&&(e={});var a=e,n=a.isOpen,s=a.noStateChange,i={isOpen:void 0!==n?n:!this.state.isOpen};this.setState(i,function(){!s&&t.props.onStateChange(i)})},a.getStyles=function(e,t,a){var n="m"+e.replace(e.charAt(0),e.charAt(0).toUpperCase()),s=g[e]?this.getStyle(g[e]):{};return this.props.styles[n]&&(s=Object.assign({},s,this.props.styles[n])),a&&(s=Object.assign({},s,a)),s},a.getStyle=function(e,t){var a=this.props.width;return"string"!=typeof a&&(a+="px"),e(this.state.isOpen,a,this.props.right,t)},a.listenForClose=function(e){e=e||window.event,!this.state.isOpen||"Escape"!==e.key&&27!==e.keyCode||this.toggleMenu()},a.shouldDisableOverlayClick=function(){return"function"==typeof this.props.disableOverlayClick?this.props.disableOverlayClick():this.props.disableOverlayClick},a.componentDidMount=function(){window.onkeydown=this.listenForClose.bind(this),this.props.isOpen&&this.toggleMenu({isOpen:!0,noStateChange:!0})},a.componentWillUnmount=function(){window.onkeydown=null},a.componentWillReceiveProps=function(e){void 0!==e.isOpen&&e.isOpen!==this.state.isOpen&&this.toggleMenu()},a.render=function(){var e=this;return i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"m-overlay "+this.props.overlayClassName,onClick:function(){return!e.shouldDisableOverlayClick()&&e.toggleMenu()},style:this.getStyles("overlay")}),i.a.createElement("div",{id:this.props.id,className:"m-menu-wrap "+this.props.className,style:this.getStyles("menuWrap")},i.a.createElement("div",{className:"m-menu "+this.props.menuClassName,style:this.getStyles("menu")},i.a.createElement("nav",{className:"m-item-list "+this.props.itemListClassName},i.a.Children.map(this.props.children,function(e,t){if(e)return i.a.cloneElement(e,{key:t})}))),i.a.createElement(y,{onClick:function(){return e.toggleMenu()},className:this.props.closeButtonClassName,closeClassName:this.props.closeClassName})),i.a.createElement(b,{onClick:function(){return e.toggleMenu()},className:this.props.menuButtonClassName,barClassName:this.props.menuBarClassName}))},t}(s.Component);v.propTypes={bodyClassName:o.a.string,menuBarClassName:o.a.string,menuButtonClassName:o.a.string,closeButtonClassName:o.a.string,closeClassName:o.a.string,disableOverlayClick:o.a.oneOfType([o.a.bool,o.a.func]),id:o.a.string,isOpen:o.a.bool,itemListClassName:o.a.string,menuClassName:o.a.string,noOverlay:o.a.bool,onStateChange:o.a.func,right:o.a.bool,styles:o.a.object,width:o.a.oneOfType([o.a.number,o.a.string])},v.defaultProps={bodyClassName:"",menuBarClassName:"",menuButtonClassName:"",className:"",closeButtonClassName:"",closeClassName:"",id:"",itemListClassName:"",menuClassName:"",noOverlay:!1,onStateChange:function(){},overlayClassName:"",styles:{},width:300};var E=i.a.createElement("div",{className:"signup"},i.a.createElement("h1",null,"Newsletter Sign Up"),i.a.createElement("label",{className:"field"},i.a.createElement("span",null,"Name"),i.a.createElement("input",{type:"text",name:"name"})),i.a.createElement("label",{className:"field"},i.a.createElement("span",null,"Email"),i.a.createElement("input",{type:"text",name:"email"})),i.a.createElement("label",{className:"field"},i.a.createElement("span",null,"Share with our partners?"),i.a.createElement("input",{type:"checkbox",name:"subscribe",value:"Yes"})),i.a.createElement("button",{className:"submit-btn"},"Submit")),N=(a(144),{overlay:{backgroundColor:"rgba(68,68,68,.95)",zIndex:1}});function w(e){var t=e.children,a=Object(s.useState)({modalOpen:!1,menuOpen:!1}),r=a[0],o=a[1],l=n.data,m=function(e){o({modalOpen:e})};return i.a.createElement("div",{id:"app-wrap"},i.a.createElement(v,{isOpen:r.menuOpen},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(c.a,{to:"/"},i.a.createElement("i",{className:"fa fa-fw fa-home"}),i.a.createElement("span",null,"Home"))),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/gallery"},i.a.createElement("i",{className:"fa fa-fw fa-star"}),i.a.createElement("span",null,"Inspiration"))),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/gearlist"},i.a.createElement("i",{className:"fa fa-fw fa-suitcase"}),i.a.createElement("span",null,"Gear Packing List"))),i.a.createElement("li",null,i.a.createElement(c.a,{to:"/friends"},i.a.createElement("i",{className:"fa fa-fw fa-question-circle"}),i.a.createElement("span",null,"Friends"))))),i.a.createElement("div",{className:"primary"},i.a.createElement(h,{siteTitle:l.site.siteMetadata.title,showModal:function(){m(!0)}}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("div",{className:"main-content"},t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))),i.a.createElement(p.a,{isOpen:r.modalOpen,contentLabel:"Modal",className:"modal",style:N},i.a.createElement("div",{className:"close-btn",onClick:m},"X"),E))}w.propTypes={children:o.a.node.isRequired};t.a=w},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Outdoor Trip Organizer",description:"Kick off your next, great camping trip with this Gatsby site."}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),s=a.n(n),i=a(4),r=a.n(i),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c},159:function(e,t,a){"use strict";var n=a(160),s=a(0),i=a.n(s),r=a(4),o=a.n(r),l=a(162),c=a.n(l);function m(e){var t=e.description,a=e.lang,s=e.meta,r=e.keywords,o=e.title,l=n.data.site,m=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(s)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Outdoor Trip Organizer",description:"Kick off your next, great camping trip with this Gatsby site.",author:"@marcysutton"}}}}},180:function(e,t,a){var n=a(25).f,s=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in s||a(18)&&n(s,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},181:function(e,t,a){e.exports=a.p+"static/rainier-headshot-047e8eb47de7f1364471861d488ce5d3.jpg"},182:function(e,t,a){e.exports=a.p+"static/bagley-daea38ceb3082df7cce4f394f6b70d53.jpg"},183:function(e,t,a){e.exports=a.p+"static/mini-horse-68a071ea5448cf4820b30ff4a85685b8.jpg"}}]);
//# sourceMappingURL=component---src-pages-friends-js-4378fc310e334a836a0f.js.map