import{S as re,i as ue,s as de,e as v,k as U,c as m,a as w,m as N,d as T,b as a,J as ae,g as $,K as r,W as K,X as le,Y as ce,Z as _e,_ as fe,$ as he,a0 as ne,T as pe,t as ve,V as me,h as be,a1 as ge,p as Te,q as Ee,o as ke,a2 as ye,a3 as oe,n as Ue,a4 as Ne,L as Ie}from"../../chunks/vendor-ba3f7bfa.js";import{c as B}from"../../chunks/singletons-d1fb5791.js";B.disable_scroll_handling;B.goto;const Pe=B.invalidate;B.prefetch;B.prefetch_routes;B.before_navigate;B.after_navigate;function W(u,{pending:t,error:e,result:o}={}){let p;async function E(c){const d=p={};c.preventDefault();const h=new FormData(u);t&&t({data:h,form:u});try{const l=await fetch(u.action,{method:u.method,headers:{accept:"application/json"},body:h});if(d!==p)return;if(l.ok){o&&o({data:h,form:u,response:l});const b=new URL(u.action);b.search=b.hash="",Pe(b.href)}else e?e({data:h,form:u,error:null,response:l}):console.error(await l.text())}catch(l){if(e)e({data:h,form:u,error:l,response:null});else throw l}}return u.addEventListener("submit",E),{destroy(){u.removeEventListener("submit",E)}}}function se(u,t,e){const o=u.slice();return o[3]=t[e],o[4]=t,o[5]=e,o}function ie(u,t){let e,o,p,E,c,d,h,l,b,M,O,C,f,k,s,i,n,D,q,I,X,P,R,S,Y,F,V,j,Z,L,z,G=Ie,y,Q,x;function ee(...g){return t[1](t[3],t[4],t[5],...g)}function te(){return t[2](t[3],t[4],t[5])}return{key:u,first:null,c(){e=v("div"),o=v("form"),p=v("input"),c=U(),d=v("input"),l=U(),b=v("button"),C=U(),f=v("form"),k=v("input"),i=U(),n=v("input"),q=U(),I=v("button"),X=U(),P=v("form"),R=v("input"),Y=U(),F=v("button"),Z=U(),this.h()},l(g){e=m(g,"DIV",{class:!0});var _=w(e);o=m(_,"FORM",{action:!0,method:!0});var A=w(o);p=m(A,"INPUT",{type:!0,name:!0,class:!0}),c=N(A),d=m(A,"INPUT",{type:!0,name:!0,class:!0}),l=N(A),b=m(A,"BUTTON",{class:!0,"aria-label":!0}),w(b).forEach(T),A.forEach(T),C=N(_),f=m(_,"FORM",{class:!0,action:!0,method:!0});var H=w(f);k=m(H,"INPUT",{type:!0,name:!0,class:!0}),i=N(H),n=m(H,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),q=N(H),I=m(H,"BUTTON",{class:!0,"aria-label":!0}),w(I).forEach(T),H.forEach(T),X=N(_),P=m(_,"FORM",{action:!0,method:!0});var J=w(P);R=m(J,"INPUT",{type:!0,name:!0,class:!0}),Y=N(J),F=m(J,"BUTTON",{class:!0,"aria-label":!0}),w(F).forEach(T),J.forEach(T),Z=N(_),_.forEach(T),this.h()},h(){a(p,"type","hidden"),a(p,"name","uid"),p.value=E=t[3].uid,a(p,"class","svelte-16nsat"),a(d,"type","hidden"),a(d,"name","done"),d.value=h=t[3].done?"":"true",a(d,"class","svelte-16nsat"),a(b,"class","toggle svelte-16nsat"),a(b,"aria-label",M="Mark todo as "+(t[3].done?"not done":"done")),a(o,"action","/todos?_method=PATCH"),a(o,"method","post"),a(k,"type","hidden"),a(k,"name","uid"),k.value=s=t[3].uid,a(k,"class","svelte-16nsat"),a(n,"aria-label","Edit todo"),a(n,"type","text"),a(n,"name","text"),n.value=D=t[3].text,a(n,"class","svelte-16nsat"),a(I,"class","save svelte-16nsat"),a(I,"aria-label","Save todo"),a(f,"class","text svelte-16nsat"),a(f,"action","/todos?_method=PATCH"),a(f,"method","post"),a(R,"type","hidden"),a(R,"name","uid"),R.value=S=t[3].uid,a(R,"class","svelte-16nsat"),a(F,"class","delete svelte-16nsat"),a(F,"aria-label","Delete todo"),F.disabled=V=t[3].pending_delete,a(P,"action","/todos?_method=DELETE"),a(P,"method","post"),a(e,"class","todo svelte-16nsat"),ae(e,"done",t[3].done),this.first=e},m(g,_){$(g,e,_),r(e,o),r(o,p),r(o,c),r(o,d),r(o,l),r(o,b),r(e,C),r(e,f),r(f,k),r(f,i),r(f,n),r(f,q),r(f,I),r(e,X),r(e,P),r(P,R),r(P,Y),r(P,F),r(e,Z),y=!0,Q||(x=[K(O=W.call(null,o,{pending:ee})),K(W.call(null,f)),K(j=W.call(null,P,{pending:te}))],Q=!0)},p(g,_){t=g,(!y||_&1&&E!==(E=t[3].uid))&&(p.value=E),(!y||_&1&&h!==(h=t[3].done?"":"true"))&&(d.value=h),(!y||_&1&&M!==(M="Mark todo as "+(t[3].done?"not done":"done")))&&a(b,"aria-label",M),O&&le(O.update)&&_&1&&O.update.call(null,{pending:ee}),(!y||_&1&&s!==(s=t[3].uid))&&(k.value=s),(!y||_&1&&D!==(D=t[3].text)&&n.value!==D)&&(n.value=D),(!y||_&1&&S!==(S=t[3].uid))&&(R.value=S),(!y||_&1&&V!==(V=t[3].pending_delete))&&(F.disabled=V),j&&le(j.update)&&_&1&&j.update.call(null,{pending:te}),_&1&&ae(e,"done",t[3].done)},r(){z=e.getBoundingClientRect()},f(){ce(e),G(),_e(e,z)},a(){G(),G=fe(e,z,ye,{duration:200})},i(g){y||(g&&he(()=>{L||(L=ne(e,oe,{start:.7},!0)),L.run(1)}),y=!0)},o(g){g&&(L||(L=ne(e,oe,{start:.7},!1)),L.run(0)),y=!1},d(g){g&&T(e),g&&L&&L.end(),Q=!1,pe(x)}}}function we(u){let t,e,o,p,E,c,d,h,l=[],b=new Map,M,O,C,f=u[0];const k=s=>s[3].uid;for(let s=0;s<f.length;s+=1){let i=se(u,f,s),n=k(i);b.set(n,l[s]=ie(n,i))}return{c(){t=U(),e=v("div"),o=v("h1"),p=ve("Todos"),E=U(),c=v("form"),d=v("input"),h=U();for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){me('[data-svelte="svelte-181o7gf"]',document.head).forEach(T),t=N(s),e=m(s,"DIV",{class:!0});var n=w(e);o=m(n,"H1",{});var D=w(o);p=be(D,"Todos"),D.forEach(T),E=N(n),c=m(n,"FORM",{class:!0,action:!0,method:!0});var q=w(c);d=m(q,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),q.forEach(T),h=N(n);for(let I=0;I<l.length;I+=1)l[I].l(n);n.forEach(T),this.h()},h(){document.title="Todos",a(d,"name","text"),a(d,"aria-label","Add todo"),a(d,"placeholder","+ tap to add a todo"),a(d,"class","svelte-16nsat"),a(c,"class","new svelte-16nsat"),a(c,"action","/todos"),a(c,"method","post"),a(e,"class","todos svelte-16nsat")},m(s,i){$(s,t,i),$(s,e,i),r(e,o),r(o,p),r(e,E),r(e,c),r(c,d),r(e,h);for(let n=0;n<l.length;n+=1)l[n].m(e,null);M=!0,O||(C=K(W.call(null,c,{result:Me})),O=!0)},p(s,[i]){if(i&1){f=s[0],Ue();for(let n=0;n<l.length;n+=1)l[n].r();l=ge(l,i,k,1,s,f,b,e,Ne,ie,null,se);for(let n=0;n<l.length;n+=1)l[n].a();Te()}},i(s){if(!M){for(let i=0;i<f.length;i+=1)Ee(l[i]);M=!0}},o(s){for(let i=0;i<l.length;i+=1)ke(l[i]);M=!1},d(s){s&&T(t),s&&T(e);for(let i=0;i<l.length;i+=1)l[i].d();O=!1,C()}}}const Me=async({form:u})=>{u.reset()};function Oe(u,t,e){let{todos:o}=t;const p=(c,d,h,{data:l})=>{e(0,d[h].done=!!l.get("done"),o)},E=(c,d,h)=>e(0,d[h].pending_delete=!0,o);return u.$$set=c=>{"todos"in c&&e(0,o=c.todos)},[o,p,E]}class Fe extends re{constructor(t){super();ue(this,t,Oe,we,de,{todos:0})}}export{Fe as default};
