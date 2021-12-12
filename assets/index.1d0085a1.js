var A=Object.defineProperty,D=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var w=(i,t,e)=>t in i?A(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,m=(i,t)=>{for(var e in t||(t={}))L.call(t,e)&&w(i,e,t[e]);if(_)for(var e of _(t))P.call(t,e)&&w(i,e,t[e]);return i},y=(i,t)=>D(i,j(t));var v=(i,t)=>{var e={};for(var o in i)L.call(i,o)&&t.indexOf(o)<0&&(e[o]=i[o]);if(i!=null&&_)for(var o of _(i))t.indexOf(o)<0&&P.call(i,o)&&(e[o]=i[o]);return e};import{a as C,j as a,u as M,b as T,r as E,c as l,F as x,L as g,N as V,s as I,d as H,O as F,e as U,R as N,l as $,f as K,g as G,h as z,t as q,i as B,k as X,H as W,P as J}from"./vendor.369462a2.js";const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}};Q();const S="https://warm-bayou-64525.herokuapp.com",Y=window.localStorage.getItem("token"),b=C.create({baseURL:S,headers:{authorization:Y}});function Z(i){return S+"/"+i}const k=i=>{const r=i,{count:t,className:e}=r,o=v(r,["count","className"]);return a("div",y(m({className:"text-center rounded-full text-xs font-400 w-min-10 "+e},o),{children:t}))},ee=i=>{const{authState:t}=i;let e=M();const o=T(),[r,s]=E.exports.useState("");function n(f){e(f),s("")}function u(){s(""),window.localStorage.setItem("token",""),o({type:"LOGIN",payload:{}})}function p(f){return f&&a("div",{className:"absolute top-7 right-0 shadow-lg card bg-white",children:l("div",{className:"min-w-200px  text-sm font-medium",children:[t._id?l(x,{children:[a("li",{className:"hover:bg-primary hover:text-white cursor-pointer px-2 ",children:a(V,{to:`profile/${t.username}`,children:"Profile"})}),a("li",{onClick:()=>u(),className:"hover:bg-primary hover:text-white cursor-pointer px-2 py-1",children:"Logout"})]}):a("li",{className:"hover:bg-primary hover:text-white  cursor-pointer  px-2 py-1",onClick:()=>n("/auth/login"),children:"Login"}),a("li",{onClick:()=>n("/admin/dashboard"),className:"hover:bg-primary hover:text-white cursor-pointer px-2 py-1",children:"Dashboard"})]})})}return l(x,{children:[a("div",{className:"navigation bg-primary z-50 fixed w-full drop-shadow-sm",children:a("div",{className:"max-w-screen-xl mx-auto px-2",children:l("ul",{className:"main-nav flex justify-between items-center",children:[a("div",{className:"nav-logo flex md:flex-1",children:l("div",{className:"hidden md:flex max-w-xl justify-between items-center input bg-white bg-opacity-25 text-white px-3.5 rounded-2xl text-sm",children:[a("input",{className:"py-2 px-px text-white bg-white bg-opacity-0 border-none outline-none w-full",type:"text",placeholder:"Search Users, posts"}),a("i",{className:"fa fa-search hover:text-primary ml-1.5"})]})}),a("div",{className:"nav-center flex md:flex-1 md:justify-center ",children:l("ul",{className:"nav_items flex  md:justify-end items-center",children:[a("li",{className:"nav_item ",children:a(g,{to:"/",children:a("i",{className:"fa fa-home-alt"})})}),l("li",{className:"nav_item relative",children:[a(g,{to:"/find-friends",children:a("i",{className:"fa fa-user"})}),a(k,{className:"badge",count:100})]}),l("li",{className:"nav_item relative",children:[a(g,{to:"/find-friends",children:a("i",{className:"fa fa-bell"})}),a(k,{className:"badge ",count:30})]}),l("li",{className:"nav_item relative",children:[a(g,{to:"/chat",children:a("i",{className:"fa fa-comment-dots"})}),a(k,{className:"badge",count:2})]}),a("li",{className:"nav_item relative",children:a("i",{className:"fa fa-globe-americas"})}),a("li",{className:"block md:hidden nav_item relative",children:a("i",{className:"far fa-search"})})]})}),a("div",{className:"nav-auth flex md:flex-1 md:justify-end ",children:l("ul",{className:"nav_items flex justify-end items-center ",children:[l("div",{className:"nav_item flex relative items-center",onMouseLeave:()=>s(""),onClick:()=>s(r?"":"user_menu"),onMouseEnter:()=>s("user_menu"),children:[t._id&&a("h4",{className:"hidden md:block text-white font-medium",children:t.first_name+" "+t.last_name}),a("span",{className:"nav_item avatar_logo p-0 m-0 w-7 mr-3",children:t._id?a("img",{className:"rounded-full w-full flex",src:Z(t.avatar?t.avatar:"static/avatar/Alec-Thompson-card_20200415_1603252.10e65779.jpg"),alt:""}):a("i",{className:"fa fa-user-circle"})}),p(r==="user_menu")]}),l("li",{children:[a("i",{className:"fa fa-cog"})," "]})]})})]})})}),a("div",{className:"h-48"})]})};const te=async i=>{b.get("/api/current-auth").then(t=>{t.status===201&&i({type:"LOGIN",payload:t.data})})},Pe=async(i,t)=>{b.get(`/api/user/profile/${i}`).then(e=>{e.status===200&&t(e.data.profile)})},ae="modulepreload",R={},se="/realtime-social-app/",d=function(t,e){return!e||e.length===0?t():Promise.all(e.map(o=>{if(o=`${se}${o}`,o in R)return;R[o]=!0;const r=o.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":ae,r||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),r)return new Promise((u,p)=>{n.addEventListener("load",u),n.addEventListener("error",p)})})).then(()=>t())},c=i=>{const t=E.exports.lazy(i);return t.preload=i,t};I.config({barColors:{"0":"#ff3d00","0.5":"#ff3d00","1.0":"#27ff00"},barThickness:2,shadowBlur:10,shadowColor:"#ff3d00"});const re=c(()=>d(()=>import("./HomePage.82f987a0.js"),["assets/HomePage.82f987a0.js","assets/vendor.369462a2.js"])),ie=c(()=>d(()=>import("./Peoples.92768c2c.js"),["assets/Peoples.92768c2c.js","assets/vendor.369462a2.js"])),oe=c(()=>d(()=>import("./Login.daf888d7.js"),["assets/Login.daf888d7.js","assets/vendor.369462a2.js"])),ne=c(()=>d(()=>import("./Registration.5edf9b12.js"),["assets/Registration.5edf9b12.js","assets/vendor.369462a2.js"])),le=c(()=>d(()=>import("./Chating.872a5aba.js"),["assets/Chating.872a5aba.js","assets/Chating.32169ebf.css","assets/vendor.369462a2.js"])),de=c(()=>d(()=>import("./Index.286b8986.js"),["assets/Index.286b8986.js","assets/vendor.369462a2.js"])),ce=c(()=>d(()=>import("./DashboardHome.e5a90cc6.js"),["assets/DashboardHome.e5a90cc6.js","assets/vendor.369462a2.js"])),ue=c(()=>d(()=>import("./Profile.212bdc93.js"),["assets/Profile.212bdc93.js","assets/Profile.83c00745.css","assets/vendor.369462a2.js"])),me=c(()=>d(()=>import("./PostList.a535b7b5.js"),["assets/PostList.a535b7b5.js","assets/vendor.369462a2.js"])),pe=c(()=>d(()=>import("./HomeLayout.f694aed3.js"),["assets/HomeLayout.f694aed3.js","assets/HomeLayout.a06a9846.css","assets/vendor.369462a2.js","assets/PostList.a535b7b5.js"])),O=c(()=>d(()=>import("./LoginHomePage.9d303b1a.js"),["assets/LoginHomePage.9d303b1a.js","assets/vendor.369462a2.js","assets/Login.daf888d7.js"])),fe=i=>{let{authState:t}=i,e=[t._id?"":{path:"*",element:a(O,{})}];return t._id?e=[{path:"/",element:a(pe,{})},{path:"/home",element:a(re,{})},{path:"/find-friends",exact:!0,element:a(ie,{})},{path:"/posts",exact:!0,element:a(me,{})},{path:"/chat/:room/:friend_username",exact:!0,element:a(le,{})},{path:"/profile/:username",element:a(ue,{})},{path:"/admin/dashboard",element:l(x,{children:[a(F,{})," ",a(de,{})]}),children:[{path:"home",element:a(ce,{})}]}]:e=[...e,{path:"/auth/login",exact:!0,element:a(oe,{afterRedirect:"/"})},{path:"/auth/registration",exact:!0,element:a(ne,{})},{path:"/",element:a(O,{})}],a(E.exports.Suspense,{fallback:a(I,{}),children:H(e)})};function he(i){let t=T(),{authState:e,appState:o}=U(s=>({authState:s.authState,appState:s.appState}));N.useEffect(()=>{let s=document.querySelector(".loader");s&&s.parentElement&&s.parentElement.removeChild(s),te(t)},[]),N.useEffect(()=>{if(e._id){let s=$(S.replace("http","ws"));t({type:"STORE_SOCKET",payload:s})}return()=>{}},[e&&e._id]),N.useEffect(()=>{o.socket&&r(o.socket)},[o.socket]);function r(s){s.on("connect",()=>{s.on("status-msg",n=>{t({type:"SET_STATUS",payload:{_id:n.member_id,isActive:!0,socket_id:n.socket_id}})}),s.emit("join-member-room",{room:"member",user_id:e._id}),s.on("leave-msg",n=>{console.log(n.socket_id),t({type:"SET_INACTIVE_STATUS",payload:{_id:n.member_id,isActive:!1,socket_id:n.socket_id}})})})}return l("div",{className:"bg-gray-200 min-h-screen ",children:[a("div",{className:"top-96"}),a(ee,{authState:e}),a(fe,{authState:e})]})}const _e={posts:[],postPagination:{pageSize:10,pageNumber:0},likes:[]};function ge(i=_e,t){let e=m({},i),o,r;switch(t.type){case"FETCH_POSTS":return e.posts=[...e.posts,...t.payload.posts],e.postPagination=m(m({},e.postPagination),t.payload.postPagination),e;case"FETCH_LIKES":return e.likes=t.payload,e;case"ADD_LIKE":return o=t.payload.post_id,r=e.posts.findIndex(s=>s._id===o),r!==-1&&e.posts[r].likes.push(m({},t.payload)),e;case"UPDATE_LIKE":if(r=e.posts.findIndex(s=>s._id===t.payload.post_id),r!==-1&&e.posts[r].likes){let s=e.posts[r].likes.findIndex(n=>n.user_id===t.payload.user_id);s!==-1&&(e.posts[r].likes[s].reaction=t.payload.reaction)}return e;case"REMOVE_LIKE":if(r=e.posts.findIndex(s=>s._id===t.payload.post_id),r!==-1){let s=e.posts[r];if(s){let n=s.likes.filter(u=>u.user_id!==t.payload.user_id);e.posts[r]=y(m({},e.posts[r]),{likes:n})}}return e;default:return i}}const ye={friends:[],allPeoples:[],primateMessage:{},socket:null};function ve(i=ye,t){let e=m({},i);switch(t.type){case"FETCH_PEOPLES":return e.allPeoples=t.payload,e;case"STORE_SOCKET":return e.socket=t.payload,e;case"FETCH_FRIENDS":return e.friends=t.payload,e;case"FETCH_PRIVATE_MSG":return e.primateMessage[t.payload.room]=t.payload.messages,e;case"PUSH_PRIVATE_MSG":let o=e.primateMessage[t.payload.room];return o&&(o=[...o,t.payload.message]),e.primateMessage[t.payload.room]=o,e;case"DELETE_MESSAGE":let r=e.primateMessage[t.payload.room],s=[];return r&&(s=r.filter(h=>h._id!==t.payload._id)),e.primateMessage[t.payload.room]=s,e;case"SET_STATUS":let n=[...e.friends],u=n.findIndex(h=>h._id===t.payload._id);return u!==-1&&n[u].user_status&&(n[u].user_status.isActive=!0,n[u].user_status.socket_id=t.payload.socket_id),e;case"SET_INACTIVE_STATUS":let p=[...e.friends],f=p.findIndex(h=>h.user_status?h.user_status.socket_id===t.payload.socket_id:!1);return f!==-1&&(p[f].user_status.isActive=!1,p[f].user_status.socket_id=t.payload.socket_id),e;default:return i}}const Ee={username:"",email:"",first_name:""};function xe(i=Ee,t){switch(m({},i),t.type){case"LOGIN":let e=t.payload,{token:o}=e,r=v(e,["token"]);return o&&window.localStorage.setItem("token",o),r;default:return i}}const Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B,Se=K({postState:ge,appState:ve,authState:xe}),be=G(Se,{},Ne(z(q.withExtraArgument(b))));X.render(a(W,{children:a(J,{store:be,children:a(he,{})})}),document.getElementById("root"));export{c as R,d as _,b as a,Pe as b,Z as f};
