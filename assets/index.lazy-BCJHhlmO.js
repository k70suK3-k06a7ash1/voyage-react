var Qt=Object.defineProperty;var Xt=(e,t,n)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var s=(e,t,n)=>(Xt(e,typeof t!="symbol"?t+"":t,n),n);import{Y as Zt,i as ye,a as Ge,b as Kt,d as Ve,e as en,f as Qe,h as xt,g as tn,k as v,l as nn,s as Xe,m as Ze,O as et,o as Se,n as Ne,p as Pe,q as rn,r as on,t as sn,u as je,v as tt,w as an,x as _t,y as it,z as kt,A as M,B as fe,C as ct,D as Et,E as cn,F as he,G as ln,H as nt,I as F,N as un,J as lt,K as Le,L as V,M as _e,_ as U,P as se,Q as T,R as B,S as ke,T as fn,U as Nt,V as hn,W as Pt,X as De,Z as yn,$ as gn,a0 as pn,a1 as ut,a2 as Rt,a3 as dn,a4 as At,a5 as mn,a6 as ft,a7 as wn,a8 as Te,a9 as Sn,j as k,aa as bn,ab as On,ac as Tn,c as Kn}from"./index-B3kmLFnw.js";const xn=function(){return class extends Zt{constructor(t){super(),t&&Object.assign(this,t)}}}(),_n=e=>{class t extends xn{constructor(){super(...arguments);s(this,"_tag",e)}}return t.prototype.name=e,t},It=(e,t)=>{switch(t._tag){case"StringKeyword":case"TemplateLiteral":return Object.keys(e);case"SymbolKeyword":return Object.getOwnPropertySymbols(e);case"Refinement":return It(e,t.from)}},be=e=>Object.keys(e).concat(Object.getOwnPropertySymbols(e)),jt=e=>{let t=!1,n;return()=>(t||(n=e(),t=!0),n)},Z=e=>{if(ye(e))return JSON.stringify(e);if(Ge(e)||e==null||Kt(e)||Ve(e)||en(e))return String(e);if(Qe(e))return String(e)+"n";if(!Array.isArray(e)&&xt(e,"toString")&&tn(e.toString)&&e.toString!==Object.prototype.toString)return e.toString();try{return JSON.stringify(e),Array.isArray(e)?`[${e.map(Z).join(",")}]`:`{${be(e).map(t=>`${ye(t)?JSON.stringify(t):String(t)}:${Z(e[t])}`).join(",")}}`}catch{return String(e)}},kn=e=>`Duplicate property signature ${Z(e)}`,ht=e=>`Duplicate index signature for type \`${e}\``,En="An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types",Nn="A required element cannot follow an optional element. ts(1257)",yt=e=>`Duplicate property signature transformation ${Z(e)}`,gt=(e,t)=>`${e}: ${t}`,pt=Symbol.for("@effect/schema/annotation/Type"),$t=Symbol.for("@effect/schema/annotation/Message"),Ut=Symbol.for("@effect/schema/annotation/Identifier"),re=Symbol.for("@effect/schema/annotation/Title"),rt=Symbol.for("@effect/schema/annotation/Description"),Pn=Symbol.for("@effect/schema/annotation/Examples"),Rn=Symbol.for("@effect/schema/annotation/Default"),An=Symbol.for("@effect/schema/annotation/JSONSchema"),In=Symbol.for("@effect/schema/annotation/Documentation"),Jt=Symbol.for("@effect/schema/annotation/Concurrency"),Mt=Symbol.for("@effect/schema/annotation/Batching"),jn=Symbol.for("@effect/schema/annotation/Surrogate"),Lt=Symbol.for("@effect/schema/annotation/ParseIssueTitle"),ee=je(2,(e,t)=>Object.prototype.hasOwnProperty.call(e.annotations,t)?Pe(e.annotations[t]):tt()),$n=ee($t),dt=ee(re),Ye=ee(Ut),mt=ee(rt),Un=ee(Jt),Jn=ee(Mt),Mn=ee(Lt),Ln=ee(jn),Dt=Symbol.for("@effect/schema/annotation/JSONIdentifier"),Dn=ee(Dt);let vt=class{constructor(t,n,r,o={}){s(this,"typeParameters");s(this,"decodeUnknown");s(this,"encodeUnknown");s(this,"annotations");s(this,"_tag","Declaration");this.typeParameters=t,this.decodeUnknown=n,this.encodeUnknown=r,this.annotations=o}toString(t=!1){return v(C(this,t),()=>"<declaration schema>")}toJSON(){return{_tag:this._tag,typeParameters:this.typeParameters.map(t=>t.toJSON()),annotations:j(this.annotations)}}};const Ke=e=>t=>t._tag===e;class wt{constructor(t,n={}){s(this,"literal");s(this,"annotations");s(this,"_tag","Literal");this.literal=t,this.annotations=n}toString(t=!1){return v(C(this,t),()=>Z(this.literal))}toJSON(){return{_tag:this._tag,literal:Qe(this.literal)?String(this.literal):this.literal,annotations:j(this.annotations)}}}const vn=Ke("Literal");class Bn{constructor(t,n={}){s(this,"symbol");s(this,"annotations");s(this,"_tag","UniqueSymbol");this.symbol=t,this.annotations=n}toString(t=!1){return v(C(this,t),()=>Z(this.symbol))}toJSON(){return{_tag:this._tag,symbol:String(this.symbol),annotations:j(this.annotations)}}}class qn{constructor(t={}){s(this,"annotations");s(this,"_tag","NeverKeyword");this.annotations=t}toString(t=!1){return Je(this,t)}toJSON(){return{_tag:this._tag,annotations:j(this.annotations)}}}const Re=new qn({[re]:"never"});class Fn{constructor(t={}){s(this,"annotations");s(this,"_tag","UnknownKeyword");this.annotations=t}toString(t=!1){return Je(this,t)}toJSON(){return{_tag:this._tag,annotations:j(this.annotations)}}}const Cn=new Fn({[re]:"unknown"});class Hn{constructor(t={}){s(this,"annotations");s(this,"_tag","AnyKeyword");this.annotations=t}toString(t=!1){return Je(this,t)}toJSON(){return{_tag:this._tag,annotations:j(this.annotations)}}}const Wn=new Hn({[re]:"any"});class Vn{constructor(t={}){s(this,"annotations");s(this,"_tag","StringKeyword");this.annotations=t}toString(t=!1){return Je(this,t)}toJSON(){return{_tag:this._tag,annotations:j(this.annotations)}}}const Yn=new Vn({[re]:"string",[rt]:"a string"}),Bt=Ke("StringKeyword"),zn=Ke("NumberKeyword"),Gn=Ke("SymbolKeyword");class qt{constructor(t,n){s(this,"type");s(this,"isOptional");this.type=t,this.isOptional=n}toJSON(){return{type:this.type.toJSON(),isOptional:this.isOptional}}toString(){return String(this.type)+(this.isOptional?"?":"")}}let Ft=class{constructor(t,n,r,o={}){s(this,"elements");s(this,"rest");s(this,"isReadonly");s(this,"annotations");s(this,"_tag","TupleType");this.elements=t,this.rest=n,this.isReadonly=r,this.annotations=o;let a=!1,l=!1;for(const d of t)if(d.isOptional)a=!0;else if(a){l=!0;break}if(l||a&&n.length>1)throw new Error(Nn)}toString(t=!1){return v(C(this,t),()=>Qn(this))}toJSON(){return{_tag:this._tag,elements:this.elements.map(t=>t.toJSON()),rest:this.rest.map(t=>t.toJSON()),isReadonly:this.isReadonly,annotations:j(this.annotations)}}};const Qn=e=>{const t=e.elements.map(String).join(", ");return rn(e.rest,{onEmpty:()=>`readonly [${t}]`,onNonEmpty:(n,r)=>{const o=String(n),a=o.includes(" | ")?`(${o})`:o;if(r.length>0){const l=r.map(String).join(", ");return e.elements.length>0?`readonly [${t}, ...${a}[], ${l}]`:`readonly [...${a}[], ${l}]`}else return e.elements.length>0?`readonly [${t}, ...${a}[]]`:`ReadonlyArray<${o}>`}})};class A{constructor(t,n,r,o,a={}){s(this,"name");s(this,"type");s(this,"isOptional");s(this,"isReadonly");s(this,"annotations");this.name=t,this.type=n,this.isOptional=r,this.isReadonly=o,this.annotations=a}toJSON(){return{name:String(this.name),type:this.type.toJSON(),isOptional:this.isOptional,isReadonly:this.isReadonly,annotations:j(this.annotations)}}}const Ct=e=>{switch(e._tag){case"StringKeyword":case"SymbolKeyword":case"TemplateLiteral":return!0;case"Refinement":return Ct(e.from)}return!1};class $e{constructor(t,n,r){s(this,"type");s(this,"isReadonly");s(this,"parameter");if(this.type=n,this.isReadonly=r,Ct(t))this.parameter=t;else throw new Error(En)}toJSON(){return{parameter:this.parameter.toJSON(),type:this.type.toJSON(),isReadonly:this.isReadonly}}}let ae=class{constructor(t,n,r={}){s(this,"annotations");s(this,"_tag","TypeLiteral");s(this,"propertySignatures");s(this,"indexSignatures");this.annotations=r;const o={};for(let l=0;l<t.length;l++){const d=t[l].name;if(Object.prototype.hasOwnProperty.call(o,d))throw new Error(kn(d));o[d]=null}const a={string:!1,symbol:!1};for(let l=0;l<n.length;l++){const d=Ue(n[l].parameter);if(Bt(d)){if(a.string)throw new Error(ht("string"));a.string=!0}else if(Gn(d)){if(a.symbol)throw new Error(ht("symbol"));a.symbol=!0}}this.propertySignatures=gr(t),this.indexSignatures=pr(n)}toString(t=!1){return v(C(this,t),()=>Xn(this))}toJSON(){return{_tag:this._tag,propertySignatures:this.propertySignatures.map(t=>t.toJSON()),indexSignatures:this.indexSignatures.map(t=>t.toJSON()),annotations:j(this.annotations)}}};const Xn=e=>{const t=e.propertySignatures.map(n=>String(n.name)+(n.isOptional?"?":"")+": "+n.type).join("; ");if(e.indexSignatures.length>0){const n=e.indexSignatures.map(r=>`[x: ${Ue(r.parameter)}]: ${r.type}`).join("; ");return e.propertySignatures.length>0?`{ ${t}; ${n} }`:`{ ${n} }`}else return e.propertySignatures.length>0?`{ ${t} }`:"{}"},Zn=e=>e.filter(t=>t!==Re),er=Xe(Ze(et,e=>{switch(e._tag){case"AnyKeyword":return 0;case"UnknownKeyword":return 1;case"ObjectKeyword":return 2;case"StringKeyword":case"NumberKeyword":case"BooleanKeyword":case"BigIntKeyword":case"SymbolKeyword":return 3}return 4})),tr={string:"StringKeyword",number:"NumberKeyword",boolean:"BooleanKeyword",bigint:"BigIntKeyword"},Ht=e=>an(e,t=>or(t)?Ht(t.types):[t]),nr=e=>{const t=er(e),n=[],r={},o=[];for(const a of t)switch(a._tag){case"NeverKeyword":break;case"AnyKeyword":return[Wn];case"UnknownKeyword":return[Cn];case"ObjectKeyword":case"UndefinedKeyword":case"VoidKeyword":case"StringKeyword":case"NumberKeyword":case"BooleanKeyword":case"BigIntKeyword":case"SymbolKeyword":{r[a._tag]||(r[a._tag]=a,n.push(a));break}case"Literal":{const l=typeof a.literal;switch(l){case"string":case"number":case"bigint":case"boolean":{const d=tr[l];!r[d]&&!o.includes(a.literal)&&(o.push(a.literal),n.push(a));break}case"object":{o.includes(a.literal)||(o.push(a.literal),n.push(a));break}}break}case"UniqueSymbol":{!r.SymbolKeyword&&!o.includes(a.symbol)&&(o.push(a.symbol),n.push(a));break}case"TupleType":{r.ObjectKeyword||n.push(a);break}case"TypeLiteral":{a.propertySignatures.length===0&&a.indexSignatures.length===0?r["{}"]||(r["{}"]=a,n.push(a)):r.ObjectKeyword||n.push(a);break}default:n.push(a)}return n};var D;let ue=(D=class{constructor(t,n={}){s(this,"types");s(this,"annotations");s(this,"_tag","Union");this.types=t,this.annotations=n}toString(t=!1){return v(C(this,t),()=>this.types.map(String).join(" | "))}toJSON(){return{_tag:this._tag,types:this.types.map(t=>t.toJSON()),annotations:j(this.annotations)}}},s(D,"make",(t,n)=>{const r=[],o=new Set;for(let a=0;a<t.length;a++){const l=t[a];l===Re||o.has(l)||(o.add(l),r.push(l))}return D.union(r,n)}),s(D,"members",(t,n)=>D.union(Zn(t),n)),s(D,"unify",(t,n)=>D.union(nr(Ht(t)),n)),s(D,"union",(t,n)=>rr(t)?new D(t,n):t.length===1?t[0]:Re),D);const rr=e=>e.length>1,or=Ke("Union"),ve=_t(Symbol.for("@effect/schema/AST/toJSONMemoMap"),()=>new WeakMap);class Wt{constructor(t,n={}){s(this,"f");s(this,"annotations");s(this,"_tag","Suspend");this.f=t,this.annotations=n,this.f=jt(t)}toString(t=!1){return C(this,t).pipe(Se(()=>on(sn(this.f)(),n=>C(n,t))),v(()=>"<suspended schema>"))}toJSON(){const t=this.f();let n=ve.get(t);return n||(ve.set(t,{_tag:this._tag}),n={_tag:this._tag,ast:t.toJSON(),annotations:j(this.annotations)},ve.set(t,n),n)}}let sr=class{constructor(t,n,r={}){s(this,"from");s(this,"filter");s(this,"annotations");s(this,"_tag","Refinement");this.from=t,this.filter=n,this.annotations=r}toString(t=!1){return v(C(this,t),()=>"<refinement schema>")}toJSON(){return{_tag:this._tag,from:this.from.toJSON(),annotations:j(this.annotations)}}};const Be={};let ar=class{constructor(t,n,r,o={}){s(this,"from");s(this,"to");s(this,"transformation");s(this,"annotations");s(this,"_tag","Transformation");this.from=t,this.to=n,this.transformation=r,this.annotations=o}toString(t=!1){return v(C(this,t),()=>`(${String(this.from)} <-> ${String(this.to)})`)}toJSON(){return{_tag:this._tag,from:this.from.toJSON(),to:this.to.toJSON(),annotations:j(this.annotations)}}};class ir{constructor(t,n,r,o){s(this,"from");s(this,"to");s(this,"decode");s(this,"encode");this.from=t,this.to=n,this.decode=r,this.encode=o}}class cr{constructor(t){s(this,"propertySignatureTransformations");s(this,"_tag","TypeLiteralTransformation");this.propertySignatureTransformations=t;const n={},r={};for(const o of t){const a=o.from;if(n[a])throw new Error(yt(a));n[a]=!0;const l=o.to;if(r[l])throw new Error(yt(l));r[l]=!0}}}const ot=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e);return n.annotations.value={...e.annotations,...t},Object.create(Object.getPrototypeOf(e),n)},lr=".*",ur="[+-]?\\d*\\.?\\d+(?:[Ee][+-]?\\d+)?",fr=e=>{let t=`^${it(e.head)}`;for(const n of e.spans)Bt(n.type)?t+=lr:zn(n.type)&&(t+=ur),t+=it(n.literal);return t+="$",new RegExp(t)},St=(e,t)=>{const n=[],r=[],o=a=>{switch(a._tag){case"NeverKeyword":break;case"StringKeyword":case"SymbolKeyword":case"TemplateLiteral":case"Refinement":r.push(new $e(a,t,!0));break;case"Literal":if(ye(a.literal)||Ge(a.literal))n.push(new A(a.literal,t,!1,!0));else throw new Error(gt("Record",`unsupported literal (${Z(a.literal)})`));break;case"UniqueSymbol":n.push(new A(a.symbol,t,!1,!0));break;case"Union":a.types.forEach(o);break;default:throw new Error(gt("Record",`unsupported key schema (${a})`))}};return o(e),{propertySignatures:n,indexSignatures:r}},$=e=>{switch(e._tag){case"Declaration":{const t=L(e.typeParameters,$);return t===e.typeParameters?e:new vt(t,e.decodeUnknown,e.encodeUnknown,e.annotations)}case"TupleType":{const t=L(e.elements,r=>{const o=$(r.type);return o===r.type?r:new qt(o,r.isOptional)}),n=L(e.rest,$);return t===e.elements&&n===e.rest?e:new Ft(t,n,e.isReadonly,e.annotations)}case"TypeLiteral":{const t=L(e.propertySignatures,r=>{const o=$(r.type);return o===r.type?r:new A(r.name,o,r.isOptional,r.isReadonly)}),n=L(e.indexSignatures,r=>{const o=$(r.type);return o===r.type?r:new $e(r.parameter,o,r.isReadonly)});return t===e.propertySignatures&&n===e.indexSignatures?e:new ae(t,n,e.annotations)}case"Union":{const t=L(e.types,$);return t===e.types?e:ue.make(t,e.annotations)}case"Suspend":return new Wt(()=>$(e.f()),e.annotations);case"Refinement":{const t=$(e.from);return t===e.from?e:new sr(t,e.filter,e.annotations)}case"Transformation":return $(e.to)}return e},hr=e=>Se(Dn(e),()=>Ye(e)),Ee=e=>Ne(hr(e),{onNone:()=>{},onSome:t=>({[Dt]:t})});function L(e,t){let n=!1;const r=nn(e.length);for(let o=0;o<e.length;o++){const a=e[o],l=t(a);l!==a&&(n=!0),r[o]=l}return n?r:e}const G=e=>{switch(e._tag){case"Declaration":{const t=L(e.typeParameters,G);return t===e.typeParameters?e:new vt(t,e.decodeUnknown,e.encodeUnknown,e.annotations)}case"TupleType":{const t=L(e.elements,r=>{const o=G(r.type);return o===r.type?r:new qt(o,r.isOptional)}),n=L(e.rest,G);return t===e.elements&&n===e.rest?e:new Ft(t,n,e.isReadonly,Ee(e))}case"TypeLiteral":{const t=L(e.propertySignatures,r=>{const o=G(r.type);return o===r.type?r:new A(r.name,o,r.isOptional,r.isReadonly)}),n=L(e.indexSignatures,r=>{const o=G(r.type);return o===r.type?r:new $e(r.parameter,o,r.isReadonly)});return t===e.propertySignatures&&n===e.indexSignatures?e:new ae(t,n,Ee(e))}case"Union":{const t=L(e.types,G);return t===e.types?e:ue.make(t,Ee(e))}case"Suspend":return new Wt(()=>G(e.f()),Ee(e));case"Refinement":case"Transformation":return G(e.from)}return e},j=e=>{const t={};for(const n of Object.getOwnPropertySymbols(e))t[String(n)]=e[n];return t},yr=e=>{switch(e._tag){case"NeverKeyword":return 0;case"Literal":case"UndefinedKeyword":case"VoidKeyword":case"UniqueSymbol":return 1;case"BooleanKeyword":return 2;case"StringKeyword":case"NumberKeyword":case"BigIntKeyword":case"SymbolKeyword":return 3;case"ObjectKeyword":return 5;case"UnknownKeyword":case"AnyKeyword":return 6;default:return 4}},gr=Xe(Ze(et,e=>yr(e.type))),pr=Xe(Ze(et,e=>{switch(Ue(e.parameter)._tag){case"StringKeyword":return 2;case"SymbolKeyword":return 3;case"TemplateLiteral":return 1}})),Ue=e=>{switch(e._tag){case"StringKeyword":case"SymbolKeyword":case"TemplateLiteral":return e;case"Refinement":return Ue(e.from)}},Je=(e,t=!1)=>v(C(e,t),()=>e._tag),C=(e,t)=>{if(t){const n=mt(e).pipe(Se(()=>dt(e)));return Ne(Ye(e),{onNone:()=>n,onSome:r=>Ne(n,{onNone:()=>Pe(r),onSome:o=>Pe(`${r} (${o})`)})})}else return Ye(e).pipe(Se(()=>dt(e)),Se(()=>mt(e)))},dr=Symbol.for("@effect/schema/ArbitraryHookId"),P=(e,t=[])=>({value:e,forest:t}),mr=e=>M(Q(e),t=>Sr(t)),wr=e=>kt(mr(e)),Sr=e=>e.value+Vt(`
`,e.forest),Vt=(e,t)=>{let n="";const r=t.length;let o;for(let a=0;a<r;a++){o=t[a];const l=a===r-1;n+=e+(l?"└":"├")+"─ "+o.value,n+=Vt(e+(r>1&&!l?"│  ":"   "),o.forest)}return n},br=e=>{switch(e){case"Encoded":return"Encoded side transformation failure";case"Transformation":return"Transformation process failure";case"Type":return"Type side transformation failure"}},Or=e=>{switch(e){case"From":return"From side refinement failure";case"Predicate":return"Predicate refinement failure"}},Tr=e=>{switch(e._tag){case"Refinement":{if(e.kind==="From")return Ae(e.error);break}case"Transformation":return Ae(e.error)}return tt()},Kr=e=>$n(e.ast).pipe(F(t=>{const n=t(e);return ye(n)?fe(n):n})),Ae=e=>Et(Tr(e),()=>Kr(e)),Yt=e=>ln(Mn(e.ast),t=>nt(t(e))),xr=e=>Ae(e).pipe(ct(()=>Yt(e)),ct(()=>e.message),Et(()=>fe(`Expected ${e.ast.toString(!0)}, actual ${Z(e.actual)}`))),oe=e=>v(Yt(e),()=>String(e.ast)),_r=e=>v(e.message,()=>"is forbidden"),ce=(e,t)=>cn(Ae(e),{onFailure:t,onSuccess:n=>fe(P(n))}),Q=e=>{switch(e._tag){case"Type":return M(xr(e),P);case"Forbidden":return fe(P(oe(e),[P(_r(e))]));case"Unexpected":return fe(P(`is unexpected, expected ${e.ast.toString(!0)}`));case"Missing":return fe(P("is missing"));case"Union":return ce(e,()=>M(he(e.errors,t=>{switch(t._tag){case"Member":return M(Q(t.error),n=>P("Union member",[n]));default:return Q(t)}}),t=>P(oe(e),t)));case"TupleType":return ce(e,()=>M(he(e.errors,t=>M(Q(t.error),n=>P(`[${t.index}]`,[n]))),t=>P(oe(e),t)));case"TypeLiteral":return ce(e,()=>M(he(e.errors,t=>M(Q(t.error),n=>P(`[${Z(t.key)}]`,[n]))),t=>P(oe(e),t)));case"Transformation":return ce(e,()=>M(Q(e.error),t=>P(oe(e),[P(br(e.kind),[t])])));case"Refinement":return ce(e,()=>M(Q(e.error),t=>P(oe(e),[P(Or(e.kind),[t])])));case"Declaration":return ce(e,()=>{const t=e.error;return t._tag==="Type"&&t.ast===e.ast?Q(t):M(Q(t),r=>P(oe(e),[r]))})}};class kr{constructor(t,n,r){s(this,"ast");s(this,"actual");s(this,"error");s(this,"_tag","Declaration");this.ast=t,this.actual=n,this.error=r}}class bt{constructor(t,n,r,o){s(this,"ast");s(this,"actual");s(this,"kind");s(this,"error");s(this,"_tag","Refinement");this.ast=t,this.actual=n,this.kind=r,this.error=o}}class Y{constructor(t,n,r,o=[]){s(this,"ast");s(this,"actual");s(this,"errors");s(this,"output");s(this,"_tag","TupleType");this.ast=t,this.actual=n,this.errors=r,this.output=o}}let te=class{constructor(t,n){s(this,"index");s(this,"error");s(this,"_tag","Index");this.index=t,this.error=n}};class z{constructor(t,n,r,o={}){s(this,"ast");s(this,"actual");s(this,"errors");s(this,"output");s(this,"_tag","TypeLiteral");this.ast=t,this.actual=n,this.errors=r,this.output=o}}class ne{constructor(t,n){s(this,"key");s(this,"error");s(this,"_tag","Key");this.key=t,this.error=n}}class Ot{constructor(t){s(this,"ast");s(this,"_tag","Unexpected");this.ast=t}}class qe{constructor(t,n,r,o){s(this,"ast");s(this,"actual");s(this,"kind");s(this,"error");s(this,"_tag","Transformation");this.ast=t,this.actual=n,this.kind=r,this.error=o}}class le{constructor(t,n,r){s(this,"ast");s(this,"actual");s(this,"_tag","Type");s(this,"message");this.ast=t,this.actual=n,this.message=nt(r)}}class Er{constructor(t,n,r){s(this,"ast");s(this,"actual");s(this,"_tag","Forbidden");s(this,"message");this.ast=t,this.actual=n,this.message=nt(r)}}class Nr{constructor(){s(this,"_tag","Missing")}}const de=new Nr;class Tt{constructor(t,n){s(this,"ast");s(this,"error");s(this,"_tag","Member");this.ast=t,this.error=n}}class Pr{constructor(t,n,r){s(this,"ast");s(this,"actual");s(this,"errors");s(this,"_tag","Union");this.ast=t,this.actual=n,this.errors=r}}class Rr extends _n("ParseError"){get message(){return this.toString()}toString(){return wr(this.error)}toJSON(){return{_id:"ParseError",message:this.toString()}}[un](){return this.toJSON()}}const Ar=e=>new Rr({error:e}),Fe=je(2,(e,t)=>{const n=e;return n._tag==="Left"?n:n._tag==="Right"?t(n.right):F(e,t)}),Ir=je(2,(e,t)=>{const n=e;return n._tag==="Left"?n:n._tag==="Right"?V(t(n.right)):M(e,t)}),me=je(2,(e,t)=>{const n=e;return n._tag==="Left"?T(t(n.left)):n._tag==="Right"?n:hn(e,t)}),X=e=>{const t=e;if(t._tag==="Left"||t._tag==="Right")return t},jr=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n={};return n.errors=t.errors??e.errors,n.onExcessProperty=t.onExcessProperty??e.onExcessProperty,n},$r=(e,t,n)=>{const r=J(e);return(o,a)=>r(o,jr(n,a))},Ur=(e,t)=>$r(e.ast,!0,t),Jr=_t(Symbol.for("@effect/schema/Parser/decodeMemoMap"),()=>new WeakMap),J=(e,t)=>{const n=Jr,r=n.get(e);if(r)return r;const o=Mr(e);return n.set(e,o),o},Ce=e=>Pt(Un(e)),He=e=>Pt(Jn(e)),Mr=(e,t)=>{switch(e._tag){case"Refinement":{const n=J(e.from);return(r,o)=>We(Fe(me(n(r,o),a=>new bt(e,r,"From",a)),a=>Ne(e.filter(a,o??Be,e),{onNone:()=>V(a),onSome:l=>T(new bt(e,r,"Predicate",l))})),e,r,o)}case"Transformation":{const n=Dr(e.transformation),r=J(e.from),o=J(e.to);return(a,l)=>We(Fe(me(r(a,l),d=>new qe(e,a,"Encoded",d)),d=>Fe(me(n(d,l??Be,e),i=>new qe(e,a,"Transformation",i)),i=>me(o(i,l),c=>new qe(e,a,"Type",c)))),e,a,l)}case"Declaration":{const n=e.decodeUnknown(...e.typeParameters);return(r,o)=>We(me(n(r,o??Be,e),a=>new kr(e,r,a)),e,r,o)}case"Literal":return I(e,n=>n===e.literal);case"UniqueSymbol":return I(e,n=>n===e.symbol);case"UndefinedKeyword":return I(e,ut);case"VoidKeyword":return I(e,ut);case"NeverKeyword":return I(e,pn);case"UnknownKeyword":case"AnyKeyword":return V;case"StringKeyword":return I(e,ye);case"NumberKeyword":return I(e,Ge);case"BooleanKeyword":return I(e,Kt);case"BigIntKeyword":return I(e,Qe);case"SymbolKeyword":return I(e,Ve);case"ObjectKeyword":return I(e,gn);case"Enums":return I(e,n=>e.enums.some(([r,o])=>o===n));case"TemplateLiteral":{const n=fr(e);return I(e,r=>ye(r)&&n.test(r))}case"TupleType":{const n=e.elements.map(i=>J(i.type)),r=e.rest.map(i=>J(i));let o=e.elements.filter(i=>!i.isOptional).length;e.rest.length>0&&(o+=e.rest.length-1);const a=ue.make(e.elements.map((i,c)=>new wt(c))),l=Ce(e),d=He(e);return(i,c)=>{if(!fn(i))return T(new le(e,i));const f=(c==null?void 0:c.errors)==="all",y=[];let m=0;const g=i.length;for(let S=g;S<=o-1;S++){const b=new te(S,de);if(f){y.push([m++,b]);continue}else return T(new Y(e,i,[b]))}if(e.rest.length===0)for(let S=e.elements.length;S<=g-1;S++){const b=new te(S,new Ot(a));if(f){y.push([m++,b]);continue}else return T(new Y(e,i,[b]))}const K=[];let u=0,h;for(;u<n.length;u++)if(g<u+1){if(e.elements[u].isOptional)continue}else{const S=n[u],b=S(i[u],c),p=X(b);if(p){if(B(p)){const w=new te(u,p.left);if(f){y.push([m++,w]);continue}else return T(new Y(e,i,[w],q(K)))}K.push([m++,p.right])}else{const w=m++,O=u;h||(h=[]),h.push(({es:R,output:H})=>F(se(b),_=>{if(B(_)){const E=new te(O,_.left);return f?(R.push([w,E]),U):T(new Y(e,i,[E],q(H)))}return H.push([w,_.right]),U}))}}if(Nt(r)){const[S,...b]=r;for(;u<g-b.length;u++){const p=S(i[u],c),w=X(p);if(w)if(B(w)){const O=new te(u,w.left);if(f){y.push([m++,O]);continue}else return T(new Y(e,i,[O],q(K)))}else K.push([m++,w.right]);else{const O=m++,R=u;h||(h=[]),h.push(({es:H,output:_})=>F(se(p),E=>{if(B(E)){const N=new te(R,E.left);return f?(H.push([O,N]),U):T(new Y(e,i,[N],q(_)))}else return _.push([O,E.right]),U}))}}for(let p=0;p<b.length;p++)if(u+=p,!(g<u+1)){const w=b[p](i[u],c),O=X(w);if(O){if(B(O)){const R=new te(u,O.left);if(f){y.push([m++,R]);continue}else return T(new Y(e,i,[R],q(K)))}K.push([m++,O.right])}else{const R=m++,H=u;h||(h=[]),h.push(({es:_,output:E})=>F(se(w),N=>{if(B(N)){const W=new te(H,N.left);return f?(_.push([R,W]),U):T(new Y(e,i,[W],q(E)))}return E.push([R,N.right]),U}))}}}const x=({es:S,output:b})=>De(S)?T(new Y(e,i,q(S),q(b))):V(q(b));if(h&&h.length>0){const S=h;return _e(()=>{const b={es:ke(y),output:ke(K)};return F(he(S,p=>p(b),{concurrency:l,batching:d,discard:!0}),()=>x(b))})}return x({output:K,es:y})}}case"TypeLiteral":{if(e.propertySignatures.length===0&&e.indexSignatures.length===0)return I(e,yn);const n=[],r={};for(const c of e.propertySignatures)n.push([J(c.type),c]),r[c.name]=null;const o=e.indexSignatures.map(c=>[J(c.parameter),J(c.type),c.parameter]),a=ue.make(e.indexSignatures.map(c=>c.parameter).concat(be(r).map(c=>Ve(c)?new Bn(c):new wt(c)))),l=J(a),d=Ce(e),i=He(e);return(c,f)=>{if(!lt(c))return T(new le(e,c));const y=(f==null?void 0:f.errors)==="all",m=[];let g=0;const K=(f==null?void 0:f.onExcessProperty)==="error",u=(f==null?void 0:f.onExcessProperty)==="preserve",h={};if(K||u)for(const p of be(c)){const w=X(l(p,f));if(B(w))if(K){const O=new ne(p,new Ot(a));if(y){m.push([g++,O]);continue}else return T(new z(e,c,[O],h))}else h[p]=c[p]}let x;const S=(f==null?void 0:f.isExact)===!0;for(let p=0;p<n.length;p++){const w=n[p][1],O=w.name,R=Object.prototype.hasOwnProperty.call(c,O);if(!R){if(w.isOptional)continue;if(S){const N=new ne(O,de);if(y){m.push([g++,N]);continue}else return T(new z(e,c,[N],h))}}const H=n[p][0],_=H(c[O],f),E=X(_);if(E){if(B(E)){const N=new ne(O,R?E.left:de);if(y){m.push([g++,N]);continue}else return T(new z(e,c,[N],h))}h[O]=E.right}else{const N=g++,W=O;x||(x=[]),x.push(({es:ie,output:xe})=>F(se(_),ge=>{if(B(ge)){const pe=new ne(W,R?ge.left:de);return y?(ie.push([N,pe]),U):T(new z(e,c,[pe],xe))}return xe[W]=ge.right,U}))}}for(let p=0;p<o.length;p++){const w=o[p],O=w[0],R=w[1],H=It(c,w[2]);for(const _ of H){const E=X(O(_,f));if(E&&Le(E)){const N=R(c[_],f),W=X(N);if(W)if(B(W)){const ie=new ne(_,W.left);if(y){m.push([g++,ie]);continue}else return T(new z(e,c,[ie],h))}else Object.prototype.hasOwnProperty.call(r,_)||(h[_]=W.right);else{const ie=g++,xe=_;x||(x=[]),x.push(({es:ge,output:pe})=>F(se(N),Me=>{if(B(Me)){const at=new ne(xe,Me.left);return y?(ge.push([ie,at]),U):T(new z(e,c,[at],pe))}else return Object.prototype.hasOwnProperty.call(r,_)||(pe[_]=Me.right),U}))}}}}const b=({es:p,output:w})=>De(p)?T(new z(e,c,q(p),w)):V(w);if(x&&x.length>0){const p=x;return _e(()=>{const w={es:ke(m),output:Object.assign({},h)};return F(he(p,O=>O(w),{concurrency:d,batching:i,discard:!0}),()=>b(w))})}return b({es:m,output:h})}}case"Union":{const n=Lr(e.types),r=be(n.keys),o=r.length,a=new Map;for(let i=0;i<e.types.length;i++)a.set(e.types[i],J(e.types[i]));const l=Ce(e)??1,d=He(e);return(i,c)=>{const f=[];let y=0,m=[];if(o>0)if(lt(i))for(let u=0;u<o;u++){const h=r[u],x=n.keys[h].buckets;if(Object.prototype.hasOwnProperty.call(i,h)){const S=String(i[h]);if(Object.prototype.hasOwnProperty.call(x,S))m=m.concat(x[S]);else{const b=ue.make(n.keys[h].literals);f.push([y++,new z(new ae([new A(h,b,!1,!0)],[]),i,[new ne(h,new le(b,i[h]))])])}}else{const S=ue.make(n.keys[h].literals);f.push([y++,new z(new ae([new A(h,S,!1,!0)],[]),i,[new ne(h,de)])])}}else f.push([y++,new le(e,i)]);n.otherwise.length>0&&(m=m.concat(n.otherwise));let g;for(let u=0;u<m.length;u++){const h=m[u],x=a.get(h)(i,c),S=!g||g.length===0?X(x):void 0;if(S){if(Le(S))return V(S.right);f.push([y++,new Tt(h,S.left)])}else{const b=y++;g||(g=[]),g.push(p=>_e(()=>"finalResult"in p?U:F(se(x),w=>(Le(w)?p.finalResult=V(w.right):p.es.push([b,new Tt(h,w.left)]),U))))}}const K=u=>De(u)?u.length===1&&u[0][1]._tag==="Type"?T(u[0][1]):T(new Pr(e,i,q(u))):T(new le(Re,i));if(g&&g.length>0){const u=g;return _e(()=>{const h={es:ke(f)};return F(he(u,x=>x(h),{concurrency:l,batching:d,discard:!0}),()=>"finalResult"in h?h.finalResult:K(h.es))})}return K(f)}}case"Suspend":{const n=jt(()=>J(ot(e.f(),e.annotations)));return(r,o)=>n()(r,o)}}},I=(e,t)=>n=>t(n)?V(n):T(new le(e,n)),we=(e,t)=>{switch(e._tag){case"Declaration":{const n=Ln(e);if(Rt(n))return we(n.value);break}case"TypeLiteral":{const n=[];for(let r=0;r<e.propertySignatures.length;r++){const o=e.propertySignatures[r],a=G(o.type);vn(a)&&!o.isOptional&&n.push([o.name,a])}return n}case"Refinement":return we(e.from);case"Suspend":return we(e.f());case"Transformation":return we(e.from)}return[]},Lr=(e,t)=>{const n={},r=[];for(let o=0;o<e.length;o++){const a=e[o],l=we(a);if(l.length>0)for(let d=0;d<l.length;d++){const[i,c]=l[d],f=String(c.literal);n[i]=n[i]||{buckets:{},literals:[]};const y=n[i].buckets;if(Object.prototype.hasOwnProperty.call(y,f)){if(d<l.length-1)continue;y[f].push(a),n[i].literals.push(c)}else{y[f]=[a],n[i].literals.push(c);break}}else r.push(a)}return{keys:n,otherwise:r}},We=(e,t,n,r)=>{const o=X(e);if(o)return o;if((r==null?void 0:r.isEffectAllowed)===!0)return e;try{return kt(se(e))}catch{return T(new Er(t,n,"cannot be be resolved synchronously, this is caused by using runSync on an effect that performs async work"))}};function q(e){return e.sort(([t],[n])=>t>n?1:t<n?-1:0).map(([t,n])=>n)}const Dr=(e,t)=>{switch(e._tag){case"FinalTransformation":return e.decode;case"ComposeTransformation":return V;case"TypeLiteralTransformation":return n=>{let r=V(n);for(const o of e.propertySignatureTransformations){const[a,l]=[o.from,o.to],d=o.decode;r=Ir(r,c=>{const f=d(Object.prototype.hasOwnProperty.call(c,a)?Pe(c[a]):tt());return delete c[a],Rt(f)&&(c[l]=f.value),c})}return r}}},vr=Symbol.for("@effect/schema/EquivalenceHookId"),Br=Symbol.for("@effect/schema/PrettyHookId"),qr=Symbol.for("@effect/schema/Schema"),Fr={_A:e=>e,_I:e=>e,_R:e=>e},zt=e=>{if(!e)return{};const t={},n=Object.getOwnPropertySymbols(e);for(const o of n)t[o]=e[o];if(e.typeId!==void 0){const o=e.typeId;typeof o=="object"?(t[pt]=o.id,t[o.id]=o.annotation):t[pt]=o}const r=(o,a)=>{e[o]!==void 0&&(t[a]=e[o])};return r("message",$t),r("identifier",Ut),r("title",re),r("description",rt),r("examples",Pn),r("default",Rn),r("documentation",In),r("jsonSchema",An),r("arbitrary",dr),r("pretty",Br),r("equivalence",vr),r("concurrency",Jt),r("batching",Mt),r("parseIssueTitle",Lt),t};var ro;const st=class st{constructor(t){s(this,"ast");s(this,ro,Fr);this.ast=t}pipe(){return dn(this,arguments)}annotations(t){return new st(ot(this.ast,zt(t)))}toString(){return String(this.ast)}};ro=qr;let Ie=st;const Cr=(e,t)=>{const n=Ur(e,t);return(r,o)=>At(n(r,o),Ar)},Hr=e=>new Ie(e),Wr=Hr(Yn),Vr=Symbol.for("@effect/schema/PropertySignature"),Yr=e=>xt(e,Vr),Oe=class Oe extends Ie{constructor(n,r,o=Oe.ast(n,r)){super(o);s(this,"fields");s(this,"records");this.fields={...n},this.records=[...r]}annotations(n){return new Oe(this.fields,this.records,ot(this.ast,zt(n)))}};s(Oe,"ast",(n,r)=>{const o=be(n),a=[];if(o.length>0){const d=[],i=[],c=[];for(let f=0;f<o.length;f++){const y=o[f],m=n[y];if(Yr(m)){const g=m.ast;switch(g._tag){case"PropertySignatureDeclaration":{const K=g.type,u=g.isOptional,h=g.annotations;d.push(new A(y,K,u,!0)),i.push(new A(y,$(K),u,!0,h)),a.push(new A(y,K,u,!0,h));break}case"PropertySignatureTransformation":{const K=g.from.fromKey??y;d.push(new A(K,g.from.type,g.from.isOptional,!0,g.from.annotations)),i.push(new A(y,g.to.type,g.to.isOptional,!0,g.to.annotations)),c.push(new ir(K,y,g.decode,g.encode));break}}}else d.push(new A(y,m.ast,!1,!0)),i.push(new A(y,$(m.ast),!1,!0)),a.push(new A(y,m.ast,!1,!0))}if(Nt(c)){const f=[],y=[];for(const m of r){const{indexSignatures:g,propertySignatures:K}=St(m.key.ast,m.value.ast);K.forEach(u=>{d.push(u),i.push(new A(u.name,$(u.type),u.isOptional,u.isReadonly,u.annotations))}),g.forEach(u=>{f.push(u),y.push(new $e(u.parameter,$(u.type),u.isReadonly))})}return new ar(new ae(d,f,{[re]:"Struct (Encoded side)"}),new ae(i,y,{[re]:"Struct (Type side)"}),new cr(c))}}const l=[];for(const d of r){const{indexSignatures:i,propertySignatures:c}=St(d.key.ast,d.value.ast);c.forEach(f=>a.push(f)),i.forEach(f=>l.push(f))}return new ae(a,l)});let ze=Oe;function zr(e,...t){return new ze(e,t)}const Gr=zr({title:Wr}),Qr=mn(function*(e){const t=yield*ft({try:()=>fetch("https://syntax.fm/api/shows/latest"),catch:()=>new Error("failed")});if(!t.ok)return yield*wn(new Error);const n=yield*ft({try:()=>t.json(),catch:()=>new Error("error")});return yield*e(n,Cr(Gr),At(()=>new Error))}),Xr=()=>{const e=Te.use(Sn(Qr));return k.jsxs(k.Fragment,{children:[k.jsx("h2",{children:e.title}),k.jsx("meta",{property:"og:title",content:e.title})]})},Gt=Te.createContext({name:""});function Zr(){const{name:e}=Te.use(Gt);return k.jsx("footer",{children:k.jsxs("p",{children:["©",e]})})}const eo=async()=>{await bn.auth.signOut(),On({to:"/"})};function to(){const e=Te.use(Tn);return k.jsxs(Gt,{value:{name:(e==null?void 0:e.user.email)??""},children:[k.jsx("form",{children:k.jsx("button",{formAction:eo,children:"signout"})}),k.jsx(Te.Suspense,{fallback:k.jsx(k.Fragment,{children:"loading"}),children:k.jsx(Xr,{})}),k.jsx("p",{children:"test"}),k.jsx(Zr,{})]})}const yo=Kn("/")({component:no});function no(){return k.jsxs("div",{className:"p-2",children:[k.jsx("h3",{children:"Welcome Home!"}),k.jsx(to,{})]})}export{yo as Route};