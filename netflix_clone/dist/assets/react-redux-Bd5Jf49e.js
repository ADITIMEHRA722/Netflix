import{R as g,a as L}from"./react-DeyjouBW.js";import{w as M}from"./use-sync-external-store-5GfsVc2F.js";var s="default"in g?L:g,C=Symbol.for("react-redux-context"),w=typeof globalThis<"u"?globalThis:{};function T(){if(!s.createContext)return{};const e=w[C]??(w[C]=new Map);let o=e.get(s.createContext);return o||(o=s.createContext(null),e.set(s.createContext,o)),o}var c=T(),U=()=>{throw new Error("uSES not initialized!")};function x(e=c){return function(){return s.useContext(e)}}var R=x(),E=U,D=e=>{E=e},H=(e,o)=>e===o;function P(e=c){const o=e===c?R:x(e),t=(n,r={})=>{const{equalityFn:i=H,devModeChecks:a={}}=typeof r=="function"?{equalityFn:r}:r,{store:l,subscription:f,getServerState:u,stabilityCheck:b,identityFunctionCheck:p}=o();s.useRef(!0);const v=s.useCallback({[n.name](d){return n(d)}}[n.name],[n,b,a.stabilityCheck]),S=E(f.addNestedSub,l.getState,u||l.getState,v,i);return s.useDebugValue(S),S};return Object.assign(t,{withTypes:()=>t}),t}var F=P();function V(e){e()}function j(){let e=null,o=null;return{clear(){e=null,o=null},notify(){V(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){const t=[];let n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(t){let n=!0;const r=o={callback:t,next:null,prev:o};return r.prev?r.prev.next=r:e=r,function(){!n||e===null||(n=!1,r.next?r.next.prev=r.prev:o=r.prev,r.prev?r.prev.next=r.next:e=r.next)}}}}var m={notify(){},get:()=>[]};function z(e,o){let t,n=m,r=0,i=!1;function a(y){b();const N=n.subscribe(y);let h=!1;return()=>{h||(h=!0,N(),p())}}function l(){n.notify()}function f(){d.onStateChange&&d.onStateChange()}function u(){return i}function b(){r++,t||(t=e.subscribe(f),n=j())}function p(){r--,t&&r===0&&(t(),t=void 0,n.clear(),n=m)}function v(){i||(i=!0,b())}function S(){i&&(i=!1,p())}const d={addNestedSub:a,notifyNestedSubs:l,handleChangeWrapper:f,isSubscribed:u,trySubscribe:v,tryUnsubscribe:S,getListeners:()=>n};return d}var W=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",I=typeof navigator<"u"&&navigator.product==="ReactNative",$=W||I?s.useLayoutEffect:s.useEffect;function q({store:e,context:o,children:t,serverState:n,stabilityCheck:r="once",identityFunctionCheck:i="once"}){const a=s.useMemo(()=>{const u=z(e);return{store:e,subscription:u,getServerState:n?()=>n:void 0,stabilityCheck:r,identityFunctionCheck:i}},[e,n,r,i]),l=s.useMemo(()=>e.getState(),[e]);$(()=>{const{subscription:u}=a;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),l!==e.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[a,l]);const f=o||c;return s.createElement(f.Provider,{value:a},t)}var G=q;function k(e=c){const o=e===c?R:x(e),t=()=>{const{store:n}=o();return n};return Object.assign(t,{withTypes:()=>t}),t}var A=k();function B(e=c){const o=e===c?A:k(e),t=()=>o().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var J=B();D(M.useSyncExternalStoreWithSelector);export{G as P,F as a,J as u};
