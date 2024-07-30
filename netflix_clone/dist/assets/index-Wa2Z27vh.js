import{j as e,r as h,a as U}from"./react-DeyjouBW.js";import{c as J}from"./react-dom-D4kiLgWt.js";import{c as Y,R as E}from"./react-router-dom-BuW2rAsa.js";import{I as $,C as V,a as z}from"./react-icons-LJ4IaOy4.js";import{u as m,a as d,P as A}from"./react-redux-Bd5Jf49e.js";import{a as g}from"./axios-B4uVmeYG.js";import{c as M,a as F}from"./@reduxjs-DYdxbMDp.js";import{_ as x,I as Z}from"./react-hot-toast-Bl4-1G89.js";import{b as I}from"./react-router-Dwb3QIXG.js";import{D as H,a as G,b as W,c as q,B as Q}from"./@mui-Ksi7ruZW.js";import"./@babel-lSvbzX5S.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BdN4V-Cb.js";import"./use-sync-external-store-5GfsVc2F.js";import"./redux-DITMfSWq.js";import"./immer-AZmEbvJU.js";import"./reselect-DyB87yl0.js";import"./redux-thunk-ClJT1hhx.js";import"./goober-vt3s6TGe.js";import"./clsx-B-dksMZM.js";import"./@emotion-BNtGRv4F.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./stylis-FDnFs_-n.js";import"./react-transition-group-BaxEnqgH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const N="http://localhost:8080/api/v1/user",v={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmZhYjU1Y2FlOGU4YmRmMTM0MGZiNjZkNjE3ZWNjYSIsIm5iZiI6MTcyMDg3OTU3Ny4wMzk4ODYsInN1YiI6IjY2OTI3MTVlYTcxZDdkYzI4OGUyN2RlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ToWP7yqOLYVbJOLmO1JpBrLdkcRhmhfAok4M_tnMwBA"}},K="https://api.themoviedb.org/3/movie/now_playing",X="https://api.themoviedb.org/3/movie/popular",P="https://api.themoviedb.org/3/movie/top_rated",ee="https://image.tmdb.org/t/p/w500",te="https://api.themoviedb.org/3/search/movie?query=",L=M({name:"user",initialState:{user:null,isLoading:!1},reducers:{setUser:(t,s)=>{t.user=s.payload},setLoading:(t,s)=>{t.isLoading=s.payload}}}),{setUser:_,setLoading:y}=L.actions,se=L.reducer,C=M({name:"movie",initialState:{nowPlayingMovies:null,popularMovie:null,topRatedMovies:null,upcomingMovies:null,movieVideos:null,toggle:!1,open:!1,id:""},reducers:{getNowPlayingMovies:(t,s)=>{t.nowPlayingMovies=s.payload},getPopularMovies:(t,s)=>{t.popularMovie=s.payload},getTopRatedMovies:(t,s)=>{t.topRatedMovies=s.payload},getUpcomingMovies:(t,s)=>{t.upcomingMovies=s.payload},setToggle:t=>{t.toggle=!t.toggle},getMovieVideos:(t,s)=>{t.movieVideos=s.payload},setOpen:(t,s)=>{t.open=s.payload},getId:(t,s)=>{t.id=s.payload}}}),{getId:oe,setOpen:R,getMovieVideos:ae,setToggle:ie,getNowPlayingMovies:re,getPopularMovies:ne,getTopRatedMovies:le,getUpcomingMovies:ce}=C.actions,de=C.reducer,T=()=>{const t=m(),s=I(),o=d(n=>n.app.user),i=d(n=>n.movie.toggle),r=async()=>{try{const n=await g.get(`${N}/logout`);n.data.success&&x.success(n.data.message),t(_(null)),s("/")}catch(n){console.log(n)}},a=()=>{t(ie())};return e.jsxs("div",{className:"px-4 absolute z-10 flex w-full items-center justify-between bg-gradient-to-b from-black ",children:[e.jsx("img",{className:"w-56",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158",alt:""}),o&&e.jsxs("div",{className:"flex items-center px-6",children:[e.jsx($,{className:"text-white",size:"24px"}),e.jsx("h1",{className:"text-lg font-bold text-white",children:o.fullName}),e.jsxs("div",{className:"ml-4 ",children:[e.jsx("button",{onClick:r,className:"mr-2 bg-red-800 text-white px-4 py-2",children:"Logout"}),e.jsx("button",{onClick:a,className:"bg-red-800 text-white px-4 py-2",children:i?"Home":"Search Movie"})]})]})]})},me=()=>{const[t,s]=h.useState(!1),[o,i]=h.useState(""),[r,a]=h.useState(""),[n,c]=h.useState(""),j=I(),p=m(),w=d(u=>u.app.isLoading),k=()=>{s(!t)},B=async u=>{if(u.preventDefault(),p(y(!0)),t){const b={email:r,password:n};try{const l=await g.post(`${N}/login`,b,{headers:{"Content-Type":"application/json"},withCredentials:!0});if(console.log("Login Response:",l),l.data.success){x.success(l.data.message);const S=l.data.user;console.log("User Data:",S),p(_(S)),j("/browse")}else x.error(l.data.message)}catch(l){x.error(l.response.data.message),console.log(l)}finally{p(y(!1))}}else{const b={fullName:o,email:r,password:n};try{const l=await g.post(`${N}/register`,b,{headers:{"Content-Type":"application/json"},withCredentials:!0});l.data.success&&x.success(l.data.message),s(!0)}catch(l){x.error(l.response.data.message),console.log(l)}finally{p(y(!1))}}i(""),a(""),c("")};return e.jsxs("div",{children:[e.jsx(T,{}),e.jsx("div",{className:"absolute",children:e.jsx("img",{className:"w-[100vw] h-[100vh]",src:"https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png",alt:"banner"})}),e.jsxs("form",{onSubmit:B,action:"",className:" bg-black p-12 text-white absolute flex flex-col w-3/12 my-36 left-0 right-0 items-center justify-center mx-auto opacity-85",children:[e.jsx("h1",{className:"text-white text-3xl mb-5 font-bold",children:t?"Login":"SignUp"}),e.jsxs("div",{className:"flex flex-col",children:[!t&&e.jsx("input",{value:o,onChange:u=>i(u.target.value),className:" rounded-sm bg-gray-800 pl-2   outline-none  py-3 my-2",type:"text",placeholder:"Full Name"}),e.jsx("input",{value:r,onChange:u=>a(u.target.value),className:" rounded-sm bg-gray-800 pl-2  outline-none py-3 my-2",type:"email",placeholder:"Email"}),e.jsx("input",{value:n,onChange:u=>c(u.target.value),className:"rounded-sm bg-gray-800 pl-2   outline-none py-3 my-2",type:"password",placeholder:"Password"}),e.jsx("button",{type:"submit",className:"mb-3 font-medium mt-6 bg-red-600 rounded-sm p-2",children:`${w?"Loading...":t?"Login":"Signup"}`}),e.jsxs("p",{className:"text-white items-center flex justify-center ",children:[t?" Already have an account ?":"New to Netflix ?",e.jsx("span",{onClick:k,className:"cursor-pointer ml-2 text-blue-600 font-medium",children:t?"Signup":"Login"})," "]})]})]})]})},pe=async t=>{const s=m();h.useEffect(()=>{(async()=>{var i,r;try{const a=await g.get(`https://api.themoviedb.org/3/movie/${t}/videos`,v),n=(r=(i=a==null?void 0:a.data)==null?void 0:i.results)==null?void 0:r.filter(c=>c.type==="trailer");console.log("tailer",a),s(ae(n.lengh>0?n[0]:a.data.results[0]))}catch(a){console.log(a)}})()},[])},O=({movieId:t,bool:s})=>{const o=d(i=>i.movie.movieVideos);return console.log(o),pe(t),e.jsx("div",{className:"w-[vw] overflow-hidden",children:e.jsx("iframe",{className:`${s?"w-full":" w-screen aspect-video"}`,src:`https://www.youtube.com/embed/${o==null?void 0:o.key}?si=YEQKRHJjrnNLJlIn&autoplay=1&mute=1`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})})},ue=({title:t,overview:s})=>(d(o=>o.app.user),e.jsxs("div",{className:" w-[vw] aspect-video absolute text-white pt-[18%] p-12",children:[e.jsx("h1",{className:"text-3xl font-bold ",children:t}),e.jsx("p",{className:"w-1/3 mt-4",children:s}),e.jsxs("div",{className:"mt-8 flex ",children:[e.jsxs("button",{className:" flex items-center px-6 py-2 bg-white text-black rounded-sm hover:bg-opacity-80",children:[e.jsx(V,{size:"24"}),e.jsx("span",{className:"ml-1",children:"Play"})]}),e.jsxs("button",{className:"flex items-center mx-2 flex items-center px-6 py-2 bg-gray-300 text-black rounded-sm hover:bg-opacity-80",children:[e.jsx(z,{size:"24"}),e.jsx("span",{className:"ml-1",children:"watch more"})]})]})]})),ge=()=>{const t=d(r=>{var a;return(a=r.movie)==null?void 0:a.nowPlayingMovies});if(!t)return;const{overview:s,id:o,title:i}=t[4];return e.jsxs("div",{children:[e.jsx(ue,{title:i,overview:s}),e.jsx(O,{movieId:o})]})},he=({posterPath:t,movieId:s})=>{const o=m(),i=()=>{o(oe(s)),o(R(!0))};return t===null?null:e.jsx("div",{className:"w-48  pr-2",onClick:i,children:e.jsx("img",{src:`${ee}/${t}`,alt:"img_banner"})})},f=({title:t,movies:s,searchMovie:o=!1})=>e.jsxs("div",{className:"px-5",children:[e.jsx("h1",{className:`${o?"text-black":"text-white"}  text-3xl text-white py-3`,children:t}),e.jsx("div",{className:"flex no-scrollbar overflow-x-auto cursor-pointer",children:e.jsx("div",{className:"flex items-center  ",children:s==null?void 0:s.map(i=>e.jsx(he,{movieId:i.id,posterPath:i.poster_path},i.id))})})]}),xe=()=>{const t=d(s=>s.movie);return e.jsx("div",{className:"bg-black",children:e.jsxs("div",{className:"-mt-52 relative z-10",children:[e.jsx(f,{title:"popular movies",movies:t.popularMovie}),e.jsx(f,{title:"Now Playing movies",movies:t.nowPlayingMovies}),e.jsx(f,{title:"Top Rated movies",movies:t.topRatedMovies}),e.jsx(f,{title:"Upcoming movies",movies:t.upcomingMovies})]})})},ve=async()=>{const t=m();try{const s=await g.get(K,v);t(re(s.data.results))}catch(s){console.log(s)}},fe=async()=>{const t=m();try{const s=await g.get(X,v);t(ne(s.data.results))}catch(s){console.log(s)}},ye=async()=>{const t=m();try{const s=await g.get(P,v);t(le(s.data.results))}catch(s){console.log(s)}},je=async()=>{const t=m();try{const s=await g.get(P,v);t(ce(s.data.results))}catch(s){console.log(s)}},D=M({name:"search",initialState:{movieName:null,searchMovie:null},reducers:{setSearchMovieDetails:(t,s)=>{const{searchMovie:o,movies:i}=s.payload;t.movieName=o,t.searchMovie=i}}}),{setSearchMovieDetails:we}=D.actions,be=D.reducer,Ne=()=>{const[t,s]=h.useState(""),o=m(),i=d(c=>c.app.isloading),{movieName:r,searchMovie:a}=d(c=>c.searchMovie),n=async c=>{var j;c.preventDefault(),o(y(!0));try{const p=await g.get(`${te}${t}&include_adult=false&language=en-US&page=1`,v),w=(j=p==null?void 0:p.data)==null?void 0:j.results;o(we({searchMovie:a,movies:w}))}catch{}finally{o(y(!1))}s("")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-center pt-[10%] w-full",children:e.jsx("form",{onSubmit:n,action:"",className:"w-[50%]",children:e.jsxs("div",{className:"flex p-2 justify-between rounded w-[100%] shadow-md border-2 border-gray-200",children:[e.jsx("input",{value:t,onChange:c=>{s(c.target.value)},className:" w-full outline-none rounded-md text-lg",type:"text",placeholder:"search movies"}),e.jsx("button",{className:" text-white rounded-md px-4 py-2 bg-red-800",children:i?"Loding...":"Search"})]})})}),a!==null?e.jsx(f,{title:r,searchMovie:!0,movies:a}):e.jsx("div",{className:"flex items-center justify-center pt-40",children:e.jsx("h1",{children:"Movie Not found !"})})]})},Me=()=>{const t=d(i=>i.app.user),s=d(i=>i.movie.toggle),o=I();return m(),ve(),fe(),ye(),je(),h.useEffect(()=>{t||o("/")},[]),e.jsxs("div",{children:[e.jsx(T,{}),e.jsx("div",{children:s?e.jsx(Ne,{}):e.jsxs(e.Fragment,{children:[e.jsx(ge,{}),e.jsx(xe,{})]})})]})},Ie=()=>{const t=Y([{path:"/",element:e.jsx(me,{})},{path:"/browse",element:e.jsx(Me,{})}]);return e.jsx("div",{children:e.jsx(E,{router:t})})};function Se(){const{open:t,id:s}=d(r=>r.movie),o=m(),i=()=>{o(R(!1))};return e.jsx(h.Fragment,{children:e.jsxs(H,{open:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(G,{children:e.jsx(W,{id:"alert-dialog-description",children:e.jsx(O,{movieId:s,bool:!0})})}),e.jsx(q,{children:e.jsx(Q,{onClick:i,children:"Cancle"})})]})})}function Pe(){return e.jsxs("div",{children:[e.jsx(Ie,{}),e.jsx(Z,{}),e.jsx(Se,{})]})}const Le=F({reducer:{app:se,movie:de,searchMovie:be}});J.createRoot(document.getElementById("root")).render(e.jsx(U.StrictMode,{children:e.jsx(A,{store:Le,children:e.jsx(Pe,{})})}));
