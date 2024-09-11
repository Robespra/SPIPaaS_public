"use strict";(self.webpackChunksp_ipaasv18_0_4=self.webpackChunksp_ipaasv18_0_4||[]).push([[7635],{98294:(e,s,t)=>{t.d(s,{A:()=>u});var a=t(65043),i=t(41408),r=t(33044),l=t(1185),o=t(26188),n=t.n(o),c=t(24831),d=t(13440),h=t(70579);class p extends a.Component{constructor(){super(...arguments),this.state={isOption:this.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},this.cardReloadHandler=()=>{this.setState({loadCard:!0}),setInterval((()=>{this.setState({loadCard:!1})}),3e3)},this.cardRemoveHandler=()=>{this.setState({cardRemove:!0})}}render(){let e,s,t,a,o="",n=[];return this.state.isOption&&(t=(0,h.jsx)("div",{className:"card-header-right",children:(0,h.jsxs)(i.A,{alignRight:!0,className:"btn-group card-option",children:[(0,h.jsx)(i.A.Toggle,{id:"dropdown-basic",className:"btn-icon",children:(0,h.jsx)("i",{className:"feather icon-more-vertical"})}),(0,h.jsxs)(i.A.Menu,{as:"ul",className:"list-unstyled card-option",children:[(0,h.jsxs)(i.A.Item,{as:"li",className:"dropdown-item",onClick:()=>{this.setState((e=>({fullCard:!e.fullCard})))},children:[(0,h.jsx)("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),(0,h.jsxs)("a",{href:d.A.BLANK_LINK,children:[" ",this.state.fullCard?"Restore":"Maximize"," "]})]}),(0,h.jsxs)(i.A.Item,{as:"li",className:"dropdown-item",onClick:()=>{this.setState((e=>({collapseCard:!e.collapseCard})))},children:[(0,h.jsx)("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),(0,h.jsxs)("a",{href:d.A.BLANK_LINK,children:[" ",this.state.collapseCard?"Expand":"Collapse"," "]})]}),(0,h.jsxs)(i.A.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler,children:[(0,h.jsx)("i",{className:"feather icon-refresh-cw"}),(0,h.jsx)("a",{href:d.A.BLANK_LINK,children:" Refresh data "})]}),(0,h.jsxs)(i.A.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler,children:[(0,h.jsx)("i",{className:"feather icon-trash"}),(0,h.jsx)("a",{href:d.A.BLANK_LINK,children:" Remove "})]})]})]})})),a=(0,h.jsxs)(r.A.Header,{children:[(0,h.jsx)(r.A.Title,{as:"h5",children:this.props.title}),t]}),this.state.fullCard&&(n=[...n,"full-card"],e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(n=[...n,"card-load"],s=(0,h.jsx)("div",{className:"card-loader",children:(0,h.jsx)("i",{className:"pct-loader1 anim-rotate"})})),this.state.cardRemove&&(n=[...n,"d-none"]),this.props.cardClass&&(n=[...n,this.props.cardClass]),this.props.success&&(n=[...n,"monitor_success"]),this.props.erroneous&&(n=[...n,"monitor_error"]),this.props.notdeployed&&(n=[...n,"monitor_notdeployed"]),o=(0,h.jsxs)(r.A,{className:n.join(" "),style:e,children:[a,(0,h.jsx)(l.A,{in:!this.state.collapseCard,children:(0,h.jsx)("div",{children:(0,h.jsx)(r.A.Body,{children:this.props.children})})}),s]}),(0,h.jsx)(c.A,{children:o})}}const u=n()(p)},37635:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});var a=t(65043),i=t(61072),r=t(78602),l=t(33044),o=t(14282),n=t(45419),c=t(27262),d=t(24831),h=t(98294),p=t(70579);const u=[{selector:".tour-1",content:"Click hear customize basic card layout"},{selector:".card-option",content:"Click hear open card options"},{selector:".displayChatbox",content:"Click chat open chat conversation"},{selector:".mobile-menu",content:"Click to see collapse menu layout"},{selector:".pcoded-menu-caption",content:"Menu caption"}],x=[{content:(0,p.jsx)("h5",{children:"Let's begin our journey!"}),placement:"center",locale:{skip:(0,p.jsx)("strong",{"aria-label":"skip",children:"S-K-I-P"})},target:"body"},{target:".tour-1",content:"Click hear customize basic card layout",placement:"top"},{target:".card-option",content:"Click hear open card options"},{target:".displayChatbox",content:"Click chat open chat conversation"},{target:".mobile-menu",content:"Click to see collapse menu layout"},{target:".pcoded-menu-caption",content:"Menu caption"}];class m extends a.Component{constructor(){super(...arguments),this.state={isTourOpen:!1,run:!1,steps:x},this.handleJoyrideCallback=e=>{const{status:s}=e;[c.XQ.FINISHED,c.XQ.SKIPPED].includes(s)&&this.setState({run:!1})}}render(){return(0,p.jsx)(d.A,{children:(0,p.jsx)(i.A,{children:(0,p.jsxs)(r.A,{children:[(0,p.jsxs)(l.A,{children:[(0,p.jsx)(l.A.Header,{children:(0,p.jsx)(l.A.Title,{as:"h5",children:"Tour"})}),(0,p.jsxs)(l.A.Body,{children:[(0,p.jsx)(o.A,{onClick:()=>this.setState({isTourOpen:!0}),children:"Start Basic Tour"}),(0,p.jsx)(o.A,{onClick:()=>this.setState({run:!0}),children:"Joy Ride"}),(0,p.jsx)(n.Ay,{steps:u,isOpen:this.state.isTourOpen,onRequestClose:()=>this.setState({isTourOpen:!1})}),(0,p.jsx)(c.Ay,{callback:this.handleJoyrideCallback,run:this.state.run,continuous:!0,scrollToFirstStep:!0,showProgress:!0,showSkipButton:!0,steps:this.state.steps,styles:{options:{zIndex:1e4}}})]})]}),(0,p.jsxs)(h.A,{isOption:!0,title:"Hello tour",cardClass:"tour-1 card-test",children:[(0,p.jsx)("h1",{children:"H1 Datta Able"}),(0,p.jsx)("h2",{children:"H2 Datta Able"}),(0,p.jsx)("h3",{children:"H3 Datta Able"}),(0,p.jsx)("h4",{children:"H4 Datta Able"}),(0,p.jsx)("h5",{children:"H5 Datta Able"}),(0,p.jsx)("h6",{children:"H6 Datta Able"}),(0,p.jsx)(l.A.Text,{children:"Paragraph Datta Able"}),(0,p.jsx)(l.A.Text,{children:"Paragraph Datta Able"})]})]})})})}}const j=m}}]);
//# sourceMappingURL=7635.9d03704f.chunk.js.map