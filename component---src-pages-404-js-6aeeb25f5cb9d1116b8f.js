(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(156),i=a(159);t.default=function(){return s.a.createElement(r.a,null,s.a.createElement(i.a,{title:"404: Not found"}),s.a.createElement("h1",null,"NOT FOUND"),s.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},155:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},156:function(e,t,a){"use strict";var n=a(157),s=a(0),r=a.n(s),i=(a(35),a(4)),o=a.n(i),l=a(33),c=a.n(l);a(155),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func;var m=a(161),p=a.n(m),u=function(e){var t=e.siteTitle,a=e.showModal;return r.a.createElement("header",null,r.a.createElement("div",{className:"signup-btn",onClick:a.bind(void 0)},r.a.createElement("i",{className:"fa fa-newspaper-o"})),r.a.createElement("h1",{className:"App-title"},r.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)))};u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var d=u,h=(a(34),a(36),a(7)),f=a.n(h),g={overlay:function(e){return{position:"fixed",zIndex:1,width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.3)",opacity:e?1:0,MozTransform:e?"":"translate3d(100%, 0, 0)",MsTransform:e?"":"translate3d(100%, 0, 0)",OTransform:e?"":"translate3d(100%, 0, 0)",WebkitTransform:e?"":"translate3d(100%, 0, 0)",transform:e?"":"translate3d(100%, 0, 0)",transition:e?"opacity 0.3s":"opacity 0.3s, transform 0s 0.3s"}},menuWrap:function(e,t,a){return{position:"fixed",right:a?0:"inherit",zIndex:2,width:t,height:"100%",MozTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",MsTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",OTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",WebkitTransform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transform:e?"":a?"translate3d(100%, 0, 0)":"translate3d(-100%, 0, 0)",transition:"all 0.5s"}},menu:function(){return{height:"100%",boxSizing:"border-box",overflow:"auto"}},itemList:function(){return{height:"100%"}},item:function(){return{display:"block",outline:"none"}},menuIcon:function(e,t,a){return{}}},y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={hover:!1},a}f()(t,e);var a=t.prototype;return a.getLineStyle=function(e){return{position:"absolute",height:"20%",left:0,right:0,top:2*e*20+"%",opacity:this.state.hover?.6:1}},a.render=function(){var e,t=this;if(this.props.customIcon){var a={className:"m-icon",style:Object.assign({},{width:"100%",height:"100%"},this.props.styles.mIcon)};e=r.a.cloneElement(this.props.customIcon,a)}else e=r.a.createElement("span",null,[0,1,2].map(function(e){return r.a.createElement("span",{key:e,className:"m-menu-bars "+t.props.barClassName,style:Object.assign({},t.getLineStyle(e),t.props.styles.mMenuBars)})}));return r.a.createElement("div",{onClick:this.props.onClick,onMouseOver:function(){return t.setState({hover:!0})},onMouseOut:function(){return t.setState({hover:!1})},className:"m-menu-button "+this.props.className,style:{backgroundColor:"transparent",margin:0,padding:0,border:"none",fontSize:8,cursor:"pointer"}},e)},t}(s.Component);y.propTypes={barClassName:o.a.string,styles:o.a.object},y.defaultProps={barClassName:"",className:"",styles:{}};var b=function(e){function t(){return e.apply(this,arguments)||this}f()(t,e);var a=t.prototype;return a.getCloseStyle=function(e){return{position:"absolute",width:3,height:14,transform:"before"===e?"rotate(45deg)":"rotate(-45deg)"}},a.render=function(){var e,t=this;if(this.props.customIcon){var a={className:"m-close",style:Object.assign({},{width:"100%",height:"100%"},this.props.styles.mClose)};e=r.a.cloneElement(this.props.customIcon,a)}else e=r.a.createElement("span",{style:{position:"absolute",top:"6px",right:"14px"}},["before","after"].map(function(e,a){return r.a.createElement("span",{key:a,className:"m-close "+t.props.closeClassName,style:Object.assign({},t.getCloseStyle(e),t.props.styles.mClose)})}));return r.a.createElement("div",{className:"m-close-button "+this.props.className,style:Object.assign({},{position:"absolute",width:24,height:24,right:8,top:8},this.props.styles.mCloseButton)},e,r.a.createElement("div",{onClick:this.props.onClick,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",margin:0,padding:0,border:"none",textIndent:-9999,background:"transparent",cursor:"pointer"}}))},t}(s.Component);b.propTypes={closeClassName:o.a.string,styles:o.a.object},b.defaultProps={closeClassName:"",className:"",styles:{}};a(143);var v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:!1},a}f()(t,e);var a=t.prototype;return a.toggleMenu=function(e){var t=this;void 0===e&&(e={});var a=e,n=a.isOpen,s=a.noStateChange,r={isOpen:void 0!==n?n:!this.state.isOpen};this.setState(r,function(){!s&&t.props.onStateChange(r)})},a.getStyles=function(e,t,a){var n="m"+e.replace(e.charAt(0),e.charAt(0).toUpperCase()),s=g[e]?this.getStyle(g[e]):{};return this.props.styles[n]&&(s=Object.assign({},s,this.props.styles[n])),a&&(s=Object.assign({},s,a)),s},a.getStyle=function(e,t){var a=this.props.width;return"string"!=typeof a&&(a+="px"),e(this.state.isOpen,a,this.props.right,t)},a.listenForClose=function(e){e=e||window.event,!this.state.isOpen||"Escape"!==e.key&&27!==e.keyCode||this.toggleMenu()},a.shouldDisableOverlayClick=function(){return"function"==typeof this.props.disableOverlayClick?this.props.disableOverlayClick():this.props.disableOverlayClick},a.componentDidMount=function(){window.onkeydown=this.listenForClose.bind(this),this.props.isOpen&&this.toggleMenu({isOpen:!0,noStateChange:!0})},a.componentWillUnmount=function(){window.onkeydown=null},a.componentWillReceiveProps=function(e){void 0!==e.isOpen&&e.isOpen!==this.state.isOpen&&this.toggleMenu()},a.render=function(){var e=this;return r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"m-overlay "+this.props.overlayClassName,onClick:function(){return!e.shouldDisableOverlayClick()&&e.toggleMenu()},style:this.getStyles("overlay")}),r.a.createElement("div",{id:this.props.id,className:"m-menu-wrap "+this.props.className,style:this.getStyles("menuWrap")},r.a.createElement("div",{className:"m-menu "+this.props.menuClassName,style:this.getStyles("menu")},r.a.createElement("nav",{className:"m-item-list "+this.props.itemListClassName},r.a.Children.map(this.props.children,function(e,t){if(e)return r.a.cloneElement(e,{key:t})}))),r.a.createElement(b,{onClick:function(){return e.toggleMenu()},className:this.props.closeButtonClassName,closeClassName:this.props.closeClassName})),r.a.createElement(y,{onClick:function(){return e.toggleMenu()},className:this.props.menuButtonClassName,barClassName:this.props.menuBarClassName}))},t}(s.Component);v.propTypes={bodyClassName:o.a.string,menuBarClassName:o.a.string,menuButtonClassName:o.a.string,closeButtonClassName:o.a.string,closeClassName:o.a.string,disableOverlayClick:o.a.oneOfType([o.a.bool,o.a.func]),id:o.a.string,isOpen:o.a.bool,itemListClassName:o.a.string,menuClassName:o.a.string,noOverlay:o.a.bool,onStateChange:o.a.func,right:o.a.bool,styles:o.a.object,width:o.a.oneOfType([o.a.number,o.a.string])},v.defaultProps={bodyClassName:"",menuBarClassName:"",menuButtonClassName:"",className:"",closeButtonClassName:"",closeClassName:"",id:"",itemListClassName:"",menuClassName:"",noOverlay:!1,onStateChange:function(){},overlayClassName:"",styles:{},width:300};var N=r.a.createElement("div",{className:"signup"},r.a.createElement("h1",null,"Newsletter Sign Up"),r.a.createElement("label",{className:"field"},r.a.createElement("span",null,"Name"),r.a.createElement("input",{type:"text",name:"name"})),r.a.createElement("label",{className:"field"},r.a.createElement("span",null,"Email"),r.a.createElement("input",{type:"text",name:"email"})),r.a.createElement("label",{className:"field"},r.a.createElement("span",null,"Share with our partners?"),r.a.createElement("input",{type:"checkbox",name:"subscribe",value:"Yes"})),r.a.createElement("button",{className:"submit-btn"},"Submit")),E=(a(144),{overlay:{backgroundColor:"rgba(68,68,68,.95)",zIndex:1}});function C(e){var t=e.children,a=Object(s.useState)({modalOpen:!1,menuOpen:!1}),i=a[0],o=a[1],l=n.data,m=function(e){o({modalOpen:e})};return r.a.createElement("div",{id:"app-wrap"},r.a.createElement(v,{isOpen:i.menuOpen},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.a,{to:"/"},r.a.createElement("i",{className:"fa fa-fw fa-home"}),r.a.createElement("span",null,"Home"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/gallery"},r.a.createElement("i",{className:"fa fa-fw fa-star"}),r.a.createElement("span",null,"Inspiration"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/gearlist"},r.a.createElement("i",{className:"fa fa-fw fa-suitcase"}),r.a.createElement("span",null,"Gear Packing List"))),r.a.createElement("li",null,r.a.createElement(c.a,{to:"/friends"},r.a.createElement("i",{className:"fa fa-fw fa-question-circle"}),r.a.createElement("span",null,"Friends"))))),r.a.createElement("div",{className:"primary"},r.a.createElement(d,{siteTitle:l.site.siteMetadata.title,showModal:function(){m(!0)}}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("div",{className:"main-content"},t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))),r.a.createElement(p.a,{isOpen:i.modalOpen,contentLabel:"Modal",className:"modal",style:E},r.a.createElement("div",{className:"close-btn",onClick:m},"X"),N))}C.propTypes={children:o.a.node.isRequired};t.a=C},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Outdoor Trip Organizer",description:"Kick off your next, great camping trip with this Gatsby site."}}}}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),s=a.n(n),r=a(4),i=a.n(r),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?s.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},159:function(e,t,a){"use strict";var n=a(160),s=a(0),r=a.n(s),i=a(4),o=a.n(i),l=a(162),c=a.n(l);function m(e){var t=e.description,a=e.lang,s=e.meta,i=e.keywords,o=e.title,l=n.data.site,m=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(s)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=m},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Outdoor Trip Organizer",description:"Kick off your next, great camping trip with this Gatsby site.",author:"@marcysutton"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-6aeeb25f5cb9d1116b8f.js.map