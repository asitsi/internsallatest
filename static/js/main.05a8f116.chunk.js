(this.webpackJsonpngoweb=this.webpackJsonpngoweb||[]).push([[0],{31:function(e,n,t){},42:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var c=t(0),s=t.n(c),i=t(5),a=t.n(i),l=(t(42),t(11)),r=t(6),o=(t(43),t(44),t(15)),d=(t(45),t(46),t(1)),j=["btn--primary","btn--outline"],b=["btn--medium","btn--large"],h=function(e){var n=e.children,t=e.type,c=e.onClick,s=e.buttonStyle,i=e.buttonSize;j.includes(s)||j[0],b.includes(i)||b[0];return Object(d.jsx)(l.b,{to:"/sign-up",className:"btn-mobile",children:Object(d.jsx)("button",{className:"btn ${checkButtonStyle} ${checkButtonSize}",onClick:c,type:t,children:n})})};var m=Object(r.g)((function(){var e=Object(c.useState)(!1),n=Object(o.a)(e,2),t=n[0],s=n[1],i=Object(c.useState)(!0),a=Object(o.a)(i,2),r=a[0],j=a[1],b=function(){return s(!1)};return window.addEventListener("resize",(function(){window.innerWidth<=960?j(!1):j(!0)})),Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar border shadow",children:Object(d.jsxs)("div",{className:"navbar-container",children:[Object(d.jsx)(l.c,{to:"/",className:"navbar-logo",children:Object(d.jsx)("img",{src:"http://endeavour.org.in/resource/logo.gif",alt:"logo",className:"img-fluid"})}),Object(d.jsx)("div",{className:"menu-icon",onClick:function(){return s(!t)},children:Object(d.jsx)("i",{className:t?"fas fa-times":"fas fa-bars"})}),Object(d.jsxs)("ul",{className:t?"nav-menu active":"nav-menu",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{to:"/",exact:!0,className:"nav-links",onClick:b,children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{to:"/aboutus",exact:!0,className:"nav-links",onClick:b,children:"About us"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{exact:!0,to:"/service",className:"nav-links",onClick:b,children:"Activities"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{exact:!0,to:"/",className:"nav-links",onClick:b,children:"Associate Partner"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{exact:!0,to:"/",className:"nav-links",onClick:b,children:"Gallery"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{exact:!0,to:"/",className:"nav-links",onClick:b,children:"Media"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(l.c,{exact:!0,to:"/Contact",className:"nav-links",onClick:b,children:"Contact us"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsxs)("span",{className:"icon",children:[Object(d.jsx)("i",{className:"fab fa-facebook-f"}),Object(d.jsx)("i",{className:"fab fa-google-plus-g"})]})})]}),r&&Object(d.jsx)(h,{buttonStyle:"btn--outline d-none"})]})})})}));function x(){var e=Object(r.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var O,p=t(8),f=t(9),u=function(){return Object(d.jsx)("div",{className:"d-none d-lg-block d-md-none",children:Object(d.jsxs)(g,{children:[Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"logo",children:"Logo"})}),Object(d.jsx)("div",{className:"Icon",children:Object(d.jsxs)("span",{className:"",children:[Object(d.jsx)("i",{className:"fab fa-facebook-f"}),Object(d.jsx)("i",{className:"fab fa-google-plus-g"})]})})]})})},g=f.a.div(O||(O=Object(p.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #0d1137;\n  z-index: -1;\n  position: relative;\n  top: 1px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  h1 {\n    height: 115px;\n    width: 100%;\n    font-size: 5rem;\n    font-family: "Pacifico", cursive;\n    text-transform: uppercase;\n    color: #3e4095;\n  }\n  .Icon {\n    margin-left: 10%;\n  }\n  .Icon span i {\n    background-color: #3e4095;\n    padding: 20px;\n    margin-left: 1rem;\n    border-radius: 50%;\n    color: #fff;\n    transition: all 0.5s ease-out;\n    cursor: pointer;\n  }\n  .Icon span i:hover {\n    background-color: #e52165;\n    font-size: 2rem;\n  }\n']))),v=(t(31),t.p+"static/media/left-arrow.53878c51.svg"),N=t.p+"static/media/right-arrow.8b8fb639.svg";function w(e){var n=e.direction,t=e.moveSlide;return console.log(n,t),Object(d.jsx)("button",{onClick:t,className:"next"===n?"btn-slide next":"btn-slide prev",children:Object(d.jsx)("img",{src:"next"===n?N:v,alt:"Img"})})}var k,y,I,C=t(88),S=[{id:Object(C.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(C.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(C.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(C.a)(),title:"Lorem ipsum",subTitle:"Lorem"},{id:Object(C.a)(),title:"Lorem ipsum",subTitle:"Lorem"}];function z(){var e=Object(c.useState)(1),n=Object(o.a)(e,2),t=n[0],s=n[1];return Object(d.jsxs)("div",{className:"container-slider",children:[S.map((function(e,n){return Object(d.jsx)("div",{className:t===n+1?"slide active-anim":"slide",children:Object(d.jsx)("img",{src:"/Ngotest"+"/Imgs/img".concat(n+1,".jpg"),alt:"Img"})},e.id)})),Object(d.jsx)(w,{moveSlide:function(){t!==S.length?s(t+1):t===S.length&&s(1)},direction:"next"}),Object(d.jsx)(w,{moveSlide:function(){1!==t?s(t-1):1===t&&s(S.length)},direction:"prev"}),Object(d.jsx)("div",{className:"container-dots",children:Array.from({length:5}).map((function(e,n){return Object(d.jsx)("div",{onClick:function(){return function(e){s(e)}(n+1)},className:t===n+1?"dot active":"dot"})}))})]})}var E,A,L,T,B,D,P,W,H,M=function(){return Object(d.jsxs)(V,{children:[Object(d.jsxs)(q,{children:[Object(d.jsx)("h1",{children:"WHAT WE DO"}),Object(d.jsx)("p",{children:"It is a non-governmental organization for welfare in the education field. It plays an important role in supporting the most vulnerable children to access their right to education through innovative ideas such as forming student groups and child-tracking systems, holding awareness workshops with parents to ensure that they send children to school. It also provides placement & apprenticeship opportunities to ITI, BTech, and diploma students for their bright future."})]}),Object(d.jsx)("div",{children:Object(d.jsx)(G,{src:"https://cdn.pixabay.com/photo/2016/08/09/08/46/education-1580143_960_720.jpg",alt:"Img",className:"img-fluid"})})]})},V=f.a.div(k||(k=Object(p.a)(["\n  display: flex;\n  @media screen and (max-width: 768px) {\n    flex-wrap: wrap;\n  }\n"]))),q=f.a.div(y||(y=Object(p.a)(["\n  padding: 2rem;\n  h1 {\n    font-size: 2rem;\n    font-weight: bold;\n    border-bottom: 2px solid #3e4095;\n    width: 30%;\n    padding-bottom: 1rem;\n    @media screen and (max-width: 768px) {\n      width: 100%;\n      text-align: center;\n    }\n  }\n  p {\n    font-size: 20px;\n    padding: 2rem;\n  }\n"]))),G=f.a.img(I||(I=Object(p.a)(["\n  width: 200rem;\n  height: 400px;\n  max-height: 500px;\n  opacity: 0.9 #000;\n  border: 10px solid #3e4095;\n  box-shadow: 0 0 20px red;\n"]))),J=function(){return Object(d.jsx)(_,{children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-3 col-12",children:Object(d.jsx)("div",{children:Object(d.jsx)(F,{children:"SERVICES WE PROVIDE"})})}),Object(d.jsxs)("div",{className:"col-lg-9 col-12",children:[Object(d.jsx)("p",{}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)(R,{children:[Object(d.jsx)($,{children:Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("i",{class:"fas fa-school"}),Object(d.jsx)("h1",{className:"heading",children:"right to education"})]})}),Object(d.jsx)($,{children:Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("i",{class:"fas fa-head-side-virus"})," ",Object(d.jsx)("h1",{className:"heading",children:"innovative ideas"})]})}),Object(d.jsx)($,{children:Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("i",{class:"fas fa-users-cog"})," ",Object(d.jsx)("h1",{className:"heading",children:"student groups"})]})})]}),Object(d.jsxs)(R,{children:[Object(d.jsx)($,{children:Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("i",{class:"fas fa-chart-line"}),Object(d.jsx)("h1",{className:"heading",children:"child-tracking systems"})]})}),Object(d.jsx)($,{children:Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("i",{class:"fab fa-teamspeak"})," ",Object(d.jsxs)("h1",{className:"heading",children:["awareness workshops with parents"," "]})]})})]}),Object(d.jsxs)(R,{children:[Object(d.jsx)($,{children:Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("i",{class:"fas fa-graduation-cap"}),Object(d.jsx)("h1",{className:"heading",children:"apprenticeship opportunities"})]})}),Object(d.jsx)($,{children:Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("i",{className:"fas fa-briefcase"})," ",Object(d.jsx)("h1",{className:"heading pr-3",children:"placement"})]})})]})]})})]})]})})})},_=f.a.div(E||(E=Object(p.a)(["\n  background: #f4f4f4;\n  padding: 3rem 0;\n"]))),F=f.a.div(A||(A=Object(p.a)(["\n  font-size: 2rem;\n  border-bottom: 2px solid #3e4095;\n  text-align: right;\n  font-weight: bold;\n  background: #f4f4f4;\n  color: #222;\n"]))),R=f.a.div(L||(L=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n\n  margin-top: 1rem;\n  @media screen and (max-width: 768px) {\n    flex-wrap: wrap;\n  }\n"]))),$=f.a.div(T||(T=Object(p.a)(["\n  text-transform: uppercase;\n  min-width: 100px;\n  margin-left: 1rem;\n  box-shadow: 0 0 20px #000;\n  border-radius: 5px;\n  text-align: center;\n  @media screen and (max-width: 768px) {\n    margin-top: 1rem;\n  }\n  span {\n    font-weight: bold;\n    font-size: 1rem;\n\n    .heading {\n      text-align: center;\n      font-weight: bold;\n      color: #444;\n      padding: 0 10px;\n    }\n  }\n\n  i {\n    font-size: 3rem;\n    padding-top: 1rem;\n    color: #e52165;\n  }\n"]))),K=t(87),Q=t(27),U=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-6 col-12",children:Object(d.jsx)(Q.b,{googleMapsApiKey:"AIzaSyBTBV7ET7t_u0WEGysnQxZ3hbqO3eSDxBg",children:Object(d.jsx)(Q.a,{mapContainerStyle:{height:"100vh",width:"100%"},zoom:13,center:{lat:41.3851,lng:2.1734}})})}),Object(d.jsxs)("div",{className:"col-lg-6 col-12 mt-5",children:[Object(d.jsx)(Z,{children:Object(d.jsx)("h1",{children:"Contact Us"})}),Object(d.jsx)("p",{className:"pl-2",children:"For any enquiries or information, drop a mail to Demo@gmail.com or fill the form below"}),Object(d.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(d.jsx)("div",{className:"mt-2",children:Object(d.jsx)(K.a,{id:"filled-search",label:"Name",type:"search",variant:"filled",className:"w-100"})}),Object(d.jsx)("div",{className:"mt-2",children:Object(d.jsx)(K.a,{id:"filled-search",label:"Email",type:"search",variant:"filled",className:"w-100"})}),Object(d.jsx)("div",{className:"mt-2",children:Object(d.jsx)(K.a,{id:"filled-search",label:"Enquiry About",type:"search",variant:"filled",className:"w-100"})}),Object(d.jsx)("div",{className:"mt-2",children:Object(d.jsx)(K.a,{id:"filled-search",label:"Phone",type:"search",variant:"filled",className:"w-100"})}),Object(d.jsx)("div",{className:"mt-2",children:Object(d.jsx)(K.a,{id:"filled-multiline-static",label:"Description",multiline:!0,rows:3,variant:"filled",className:"w-100"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(X,{className:"mt-4",variant:"contained",children:"Submit"}),Object(d.jsx)(X,{className:"mt-4",variant:"contained",children:Object(d.jsx)("i",{class:"fas fa-hand-holding-usd",children:" Donate"})})]})]})]})]})})})},Z=f.a.div(B||(B=Object(p.a)(["\n  h1 {\n    font-weight: bold;\n    border-bottom: 2px solid #3e4095;\n    width: 50%;\n  }\n"]))),X=f.a.button(D||(D=Object(p.a)(["\n  background-color: #3e4095;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 15px 20px;\n  margin-left: 1rem;\n  margin-bottom: 1rem;\n  :hover {\n    background-color: #e52165;\n    color: #fff;\n  }\n"]))),Y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(ee,{children:Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)(ne,{children:[Object(d.jsxs)("div",{className:"col-lg-3 col-12",children:[Object(d.jsx)("h5",{children:"HELPING HANDS"}),Object(d.jsx)("p",{children:"It is a non-governmental organization for welfare in the education field. It plays an important role in supporting the most vulnerable children to access their right to education"})]}),Object(d.jsxs)("div",{className:"col-lg-3 col-12",children:[Object(d.jsx)("h5",{children:"CONTACT INFO"}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Address:"})," 250 East Avenue, Pilgrim road, NJ 5618"]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Phone:"})," +192 9933 876 581"]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Email:"})," helping.hands@nomail.com"]})]})]}),Object(d.jsxs)("div",{className:"col-lg-3  col-12",children:[Object(d.jsx)("h5",{children:"Social Media"}),Object(d.jsx)("div",{className:"Icon",children:Object(d.jsxs)("span",{className:"",children:[Object(d.jsx)("i",{className:"fab fa-facebook-f"}),Object(d.jsx)("i",{className:"fab fa-google-plus-g"})]})})]})]})})}),Object(d.jsx)(te,{children:"\xc2\xa9 2019. All rights reserved"})]})},ee=f.a.div(P||(P=Object(p.a)(["\n  background-color: #3e4095;\n  width: 100%;\n  height: 100%;\n  padding-top: 5%;\n  padding-left: 10%;\n"]))),ne=f.a.div(W||(W=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n  @media screen and (max-width: 768px) {\n    flex-wrap: wrap;\n    margin-top: 1rem;\n  }\n  h5 {\n    color: #fff;\n    font-weight: bold;\n    font-size: 2rem;\n  }\n  p {\n    color: #fff;\n    font-weight: bold;\n    padding: 1rem;\n  }\n  li {\n    list-style: none;\n    color: #999;\n    font-weight: bold;\n    padding: 1rem 0;\n    span {\n      color: #fff;\n    }\n  }\n  i {\n    background: #fff;\n    color: #3e4095;\n    padding: 15px;\n    border-radius: 50%;\n    margin-left: 1rem;\n  }\n  i:hover {\n    background: #e52165;\n    color: #fff;\n    padding: 20px;\n    border-radius: 50%;\n    margin-left: 1rem;\n  }\n"]))),te=f.a.div(H||(H=Object(p.a)(["\n  background: #0d1137;\n  color: #999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60px;\n  width: 100%;\n  z-index: 1;\n"]))),ce=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(z,{}),Object(d.jsx)(M,{}),Object(d.jsx)(J,{}),Object(d.jsx)(U,{}),Object(d.jsx)(Y,{})]})};var se=function(){return Object(d.jsxs)(l.a,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(u,{}),Object(d.jsx)(m,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",exact:!0,component:ce}),Object(d.jsx)(r.a,{path:"/aboutus",exact:!0,component:M}),Object(d.jsx)(r.a,{path:"/service",exact:!0,component:J}),Object(d.jsx)(r.a,{path:"/contact",exact:!0,component:U})]})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(se,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.05a8f116.chunk.js.map