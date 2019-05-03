(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),l=a(0),r=a.n(l),i=a(156),o=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return r.a.createElement(i.a,null,r.a.createElement("h2",null,"Gear Packing List"),r.a.createElement("p",null,"It’s a bummer to forget a critical item when you’re headed to a cold snowy place. Here’s a handy checklist of things you might need."),r.a.createElement("div",{className:"gearlist"},r.a.createElement("div",null,r.a.createElement("h3",null,"All winter days"),r.a.createElement("ul",null,r.a.createElement("li",null,"Snow jacket"),r.a.createElement("li",null,"Snow pants"),r.a.createElement("li",null,"Base layers top & bottom"),r.a.createElement("li",null,"Waterproof gloves"),r.a.createElement("li",null,"Beanie"),r.a.createElement("li",null,"Ski socks"),r.a.createElement("li",null,"Ski boots"),r.a.createElement("li",null,"Skis"),r.a.createElement("li",null,"Poles"),r.a.createElement("li",null,"Helmet"),r.a.createElement("li",null,"Goggles"),r.a.createElement("li",null,"Lunch"),r.a.createElement("li",null,"Sunscreen"))),r.a.createElement("div",null,r.a.createElement("h3",null,"Backcountry days"),r.a.createElement("ul",null,r.a.createElement("li",null,"Avalanche beacon"),r.a.createElement("li",null,"Probe"),r.a.createElement("li",null,"Shovel"),r.a.createElement("li",null,"Touring hat"),r.a.createElement("li",null,"Glove liners"),r.a.createElement("li",null,"Map"),r.a.createElement("li",null,"Touring skis"),r.a.createElement("li",null,"Touring boots"),r.a.createElement("li",null,"Skins"),r.a.createElement("li",null,"Backpack"),r.a.createElement("li",null,"Water"),r.a.createElement("li",null,"Sunglasses")))))},t}(l.Component);t.default=o},155:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},156:function(e,t,a){"use strict";var n=a(157),s=a(0),l=a.n(s),r=a(4),i=a.n(r),o=a(33),c=a.n(o);a(155),l.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func;var m=a(161),u=a.n(m),p=function(e){var t=e.siteTitle,a=e.showModal;return l.a.createElement("header",null,l.a.createElement("div",{className:"signup-btn",onClick:a.bind(void 0)},l.a.createElement("i",{className:"fa fa-newspaper-o"})),l.a.createElement("h1",{className:"App-title"},l.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)))};p.propTypes={siteTitle:i.a.string},p.defaultProps={siteTitle:""};var h=p,d=(a(34),a(35),a(7)),f=a.n(d),g={overlay:function(e){return{position:"fixed",zIndex:1,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,a){return{position:"fixed",right:a?0:"inherit",zIndex:2,width:t,height:"100%",MozTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block",outline:"none"}},menuIcon:function(e,t,a){return{}}},y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={hover:!1},a}f()(t,e);var a=t.prototype;return a.getLineStyle=function(e){return{position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1}},a.render=function(){var e,t=this;if(this.props.customIcon){var a={className:"m-icon",style:Object.assign({},{width:"100%",height:"100%"},this.props.styles.mIcon)};e=l.a.cloneElement(this.props.customIcon,a)}else e=l.a.createElement("span",null,[0,1,2].map(function(e){return l.a.createElement("span",{key:e,className:"m-menu-bars "+t.props.barClassName,style:Object.assign({},t.getLineStyle(e),t.props.styles.mMenuBars)})}));return l.a.createElement("div",{onClick:this.props.onClick,onMouseOver:function(){return t.setState({hover:!0})},onMouseOut:function(){return t.setState({hover:!1})},className:"m-menu-button "+this.props.className,style:{backgroundColor:"transparent",margin:0,padding:0,border:"none",fontSize:8,cursor:"pointer"}},e)},t}(s.Component);y.propTypes={barClassName:i.a.string,styles:i.a.object},y.defaultProps={barClassName:"",className:"",styles:{}};var E=function(e){function t(){return e.apply(this,arguments)||this}f()(t,e);var a=t.prototype;return a.getCloseStyle=function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}},a.render=function(){var e,t=this;if(this.props.customIcon){var a={className:"m-close",style:Object.assign({},{width:"100%",height:"100%"},this.props.styles.mClose)};e=l.a.cloneElement(this.props.customIcon,a)}else e=l.a.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map(function(e,a){return l.a.createElement("span",{key:a,className:"m-close "+t.props.closeClassName,style:Object.assign({},t.getCloseStyle(e),t.props.styles.mClose)})}));return l.a.createElement("div",{className:"m-close-button "+this.props.className,style:Object.assign({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.mCloseButton)},e,l.a.createElement("div",{onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",margin:0,padding:0,border:"none",textIndent:-9999,background:"transparent",cursor:"pointer"}}))},t}(s.Component);E.propTypes={closeClassName:i.a.string,styles:i.a.object},E.defaultProps={closeClassName:"",className:"",styles:{}};a(143);var b=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}f()(t,e);var a=t.prototype;return a.toggleMenu=function(e){var t=this;void 0===e&&(e={});var a=e,n=a.isOpen,s=a.noStateChange,l={isOpen:void 0!==n?n:!this.state.isOpen};this.setState(l,function(){!s&&t.props.onStateChange(l)})},a.getStyles=function(e,t,a){var n="m"+e.replace(e.charAt(0),e.charAt(0).toUpperCase()),s=g[e]?this.getStyle(g[e]):{};return this.props.styles[n]&&(s=Object.assign({},s,this.props.styles[n])),a&&(s=Object.assign({},s,a)),s},a.getStyle=function(e,t){var a=this.props.width;return"string"!=typeof a&&(a+="px"),e(this.state.isOpen,a,this.props.right,t)},a.listenForClose=function(e){e=e||window.event,!this.state.isOpen||"Escape"!==e.key&&27!==e.keyCode||this.toggleMenu()},a.shouldDisableOverlayClick=function(){return"function"==typeof this.props.disableOverlayClick?this.props.disableOverlayClick():this.props.disableOverlayClick},a.componentDidMount=function(){window.onkeydown=this.listenForClose.bind(this),this.props.isOpen&&this.toggleMenu({isOpen:!0,noStateChange:!0})},a.componentWillUnmount=function(){window.onkeydown=null},a.componentWillReceiveProps=function(e){void 0!==e.isOpen&&e.isOpen!==this.state.isOpen&&this.toggleMenu()},a.render=function(){var e=this;return l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"m-overlay "+this.props.overlayClassName,onClick:function(){return!e.shouldDisableOverlayClick()&&e.toggleMenu()},style:this.getStyles("overlay")}),l.a.createElement("div",{id:this.props.id,className:"m-menu-wrap "+this.props.className,style:this.getStyles("menuWrap")},l.a.createElement("div",{className:"m-menu "+this.props.menuClassName,style:this.getStyles("menu")},l.a.createElement("nav",{className:"m-item-list "+this.props.itemListClassName},l.a.Children.map(this.props.children,function(e,t){if(e)return l.a.cloneElement(e,{key:t})}))),l.a.createElement(E,{onClick:function(){return e.toggleMenu()},className:this.props.closeButtonClassName,closeClassName:this.props.closeClassName})),l.a.createElement(y,{onClick:function(){return e.toggleMenu()},className:this.props.menuButtonClassName,barClassName:this.props.menuBarClassName}))},t}(s.Component);b.propTypes={bodyClassName:i.a.string,menuBarClassName:i.a.string,menuButtonClassName:i.a.string,closeButtonClassName:i.a.string,closeClassName:i.a.string,disableOverlayClick:i.a.oneOfType([i.a.bool,i.a.func]),id:i.a.string,isOpen:i.a.bool,itemListClassName:i.a.string,menuClassName:i.a.string,noOverlay:i.a.bool,onStateChange:i.a.func,right:i.a.bool,styles:i.a.object,width:i.a.oneOfType([i.a.number,i.a.string])},b.defaultProps={bodyClassName:"",menuBarClassName:"",menuButtonClassName:"",className:"",closeButtonClassName:"",closeClassName:"",id:"",itemListClassName:"",menuClassName:"",noOverlay:!1,onStateChange:function(){},overlayClassName:"",styles:{},width:300};var v=l.a.createElement("div",{className:"signup"},l.a.createElement("h1",null,"Newsletter Sign Up"),l.a.createElement("label",{className:"field"},l.a.createElement("span",null,"Name"),l.a.createElement("input",{type:"text",name:"name"})),l.a.createElement("label",{className:"field"},l.a.createElement("span",null,"Email"),l.a.createElement("input",{type:"text",name:"email"})),l.a.createElement("label",{className:"field"},l.a.createElement("span",null,"Share with our partners?"),l.a.createElement("input",{type:"checkbox",name:"subscribe",value:"Yes"})),l.a.createElement("button",{className:"submit-btn"},"Submit")),N=(a(144),{overlay:{backgroundColor:"rgba(68,68,68,.95)",zIndex:1}});function C(e){var t=e.children,a=Object(s.useState)({modalOpen:!1,menuOpen:!1}),r=a[0],i=a[1],o=n.data,m=function(e){i({modalOpen:e})};return l.a.createElement("div",{id:"app-wrap"},l.a.createElement(b,{isOpen:r.menuOpen},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.a,{to:"/"},l.a.createElement("i",{className:"fa fa-fw fa-home"}),l.a.createElement("span",null,"Home"))),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/gallery"},l.a.createElement("i",{className:"fa fa-fw fa-star"}),l.a.createElement("span",null,"Inspiration"))),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/gearlist"},l.a.createElement("i",{className:"fa fa-fw fa-suitcase"}),l.a.createElement("span",null,"Gear Packing List"))),l.a.createElement("li",null,l.a.createElement(c.a,{to:"/friends"},l.a.createElement("i",{className:"fa fa-fw fa-question-circle"}),l.a.createElement("span",null,"Friends"))))),l.a.createElement("div",{className:"primary"},l.a.createElement(h,{siteTitle:o.site.siteMetadata.title,showModal:function(){m(!0)}}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("div",{className:"main-content"},t),l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))),l.a.createElement(u.a,{isOpen:r.modalOpen,contentLabel:"Modal",className:"modal",style:N},l.a.createElement("div",{className:"close-btn",onClick:m.bind(this,!1)},"X"),v))}C.propTypes={children:i.a.node.isRequired};t.a=C},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Outdoor Trip Organizer",description:"Kick off your next, great camping trip with this Gatsby site."}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),s=a.n(n),l=a(4),r=a.n(l),i=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=c}}]);
//# sourceMappingURL=component---src-pages-gearlist-js-2712f67c501a6709a151.js.map