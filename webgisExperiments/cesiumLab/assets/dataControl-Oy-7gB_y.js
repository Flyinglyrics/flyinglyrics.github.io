import{r as V,q as w,e as m,f as h,h as M,g as e,F as b,s as g,u as S,w as d,x as v,y as k,z as F,t as f,p as O,j as E}from"./vendor-OaO7dZZQ.js";import{b as R}from"./backSpace-b-9S0Ns4.js";import{_ as U}from"./index-6cYfsVdE.js";const B={mounted(s,x,r,p){const a=document.createElement("div"),_=document.createTextNode(x.value);a.appendChild(_),a.style.width="200px",a.style.height="auto",a.style.position="fixed",a.style.background="#FFFFFF",a.style.border="1px solid #000000",a.pointerEvents="none",a.style.zIndex="999",s.onmouseover=o=>{o.preventDefault(),a.left=o.clientX+10+"px",a.top=o.clientY+10+"px",o.target.appendChild(a)},s.onmouseout=o=>{o.target.removeChild(a)}},unmounted(s,x,r,p){s.onmouseover=null,s.onmouseleave=null}},i=s=>(O("data-v-a0f3aaa4"),s=s(),E(),s),D={class:"content"},T={class:"tree"},N={open:""},j=i(()=>e("summary",null,"数据管理",-1)),z=i(()=>e("summary",null,"底图：",-1)),L=["value"],q=i(()=>e("summary",null,"影像图层：",-1)),X=["value"],Y=i(()=>e("summary",null,"3d tiles",-1)),A=["value"],G=i(()=>e("summary",null,"地形管理",-1)),H={class:"switch"},J=i(()=>e("label",{class:"switch-label",for:"btn_switch"},[e("span",{class:"switch-inner","data-on":"打开地形","data-off":"关闭地形"}),e("span",{class:"switch-switch"})],-1)),K=i(()=>e("summary",null,"地形拉伸",-1)),P={class:"rangeCol"},Q=i(()=>e("span",null,"比率",-1)),W={__name:"dataControl",props:{dataInfo:Object},emits:["basemapChange","terrainSwitch","terrainExaggerate"],setup(s,{emit:x}){const r=s,p=[],a=[],_=r.dataInfo.tiles3d;r.dataInfo.imageryLayers.forEach(u=>{switch(u.layerType){case"basemap":p.push(u);break;case"addition":a.push(u);break}});const o=x,t=V({basemapSelect:p.find(u=>u.show==!0).index,additionMapSelect:[],tiles3dSelect:[],terrainOn:r.dataInfo.terrainOn,exaggerateRatio:1});function I(){o("basemapChange",t.basemapSelect)}function C(){o("terrainSwitch",t.terrainOn)}function y(){t.terrainOn&&o("terrainExaggerate",t.exaggerateRatio)}return w(()=>t.basemapSelect,I),w(()=>t.terrainOn,C),(u,l)=>(m(),h("section",null,[M(R),e("div",D,[e("ul",T,[e("details",N,[j,e("ul",null,[e("li",null,[e("details",null,[z,e("ul",null,[(m(),h(b,null,g(p,n=>d(e("li",{key:n.index},[d(e("input",{type:"radio",value:n.index,"onUpdate:modelValue":l[0]||(l[0]=c=>t.basemapSelect=c)},null,8,L),[[F,t.basemapSelect]]),e("label",null,f(n.name),1)]),[[S(B),n.description]])),64))])])]),e("li",null,[e("details",null,[q,e("ul",null,[(m(),h(b,null,g(a,n=>e("li",{key:n.index},[d(e("input",{type:"checkbox",value:n.index,"onUpdate:modelValue":l[1]||(l[1]=c=>t.additionMapSelect=c)},null,8,X),[[v,t.additionMapSelect]]),e("label",null,f(n.name),1)])),64))])])]),e("li",null,[e("details",null,[Y,e("ul",null,[(m(!0),h(b,null,g(S(_),n=>(m(),h("li",{key:n.index},[d(e("input",{type:"checkbox",value:n.index,"onUpdate:modelValue":l[2]||(l[2]=c=>t.baseMapSelect=c)},null,8,A),[[v,t.baseMapSelect]]),e("label",null,f(n.name),1)]))),128))])])]),e("li",null,[e("details",null,[G,e("ul",null,[e("li",null,[e("div",H,[d(e("input",{class:"switch-checkbox",id:"btn_switch",type:"checkbox","onUpdate:modelValue":l[3]||(l[3]=n=>t.terrainOn=n)},null,512),[[v,t.terrainOn]]),J])])])])]),e("li",null,[e("details",null,[K,e("ul",null,[e("li",null,[e("div",P,[Q,d(e("input",{type:"range",min:"0.0",max:"10.0",step:"0.1","onUpdate:modelValue":l[4]||(l[4]=n=>t.exaggerateRatio=n),onInput:y},null,544),[[k,t.exaggerateRatio]]),e("span",null,[d(e("input",{min:"0.0",max:"10.0",step:"0.1",width:"auto",type:"number","onUpdate:modelValue":l[5]||(l[5]=n=>t.exaggerateRatio=n),onInput:y},null,544),[[k,t.exaggerateRatio]])])])])])])])])])])])]))}},te=U(W,[["__scopeId","data-v-a0f3aaa4"]]);export{te as default};