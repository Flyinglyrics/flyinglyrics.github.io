import{o as _,a as T,r as M,b as k,c as O,d as R,e as w,f as C,w as S,u as m,g as u,h as D,v as x,t as g,i as b,p as N,j as q,k as A,l as B,m as W}from"./vendor-O7JwXdLB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNTFjODQ3OS0xMzk0LTQwNmYtYmY3MC1mMDYwYTc2NmVlYjEiLCJpZCI6NjQxMTMsImlhdCI6MTcxMTI4NzIzN30.abnSi0X5mcnWRI-pcT5DaWu3NI6EcdeSNZ1eHpHLf94";const y={imageryLayers:{remoteSource:[{name:"Bing Maps Aerial",layer:Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(2)),description:"Bing 航空影像地图，来自我的 cesium ION assets",layerType:"basemap",source:"Cesium ION Assets",index:null,show:!1},{name:"Bing Maps Aerial-with Labels",layer:Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3)),description:"Bing 电子道路底图，来自我的 cesium ION assets",layerType:"basemap",source:"Cesium ION Assets",index:null,show:!1},{name:"Bing Maps Roads",layer:Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(4)),description:"Bing 电子道路底图，来自我的 cesium ION assets",layerType:"basemap",source:"Cesium ION Assets",index:null,show:!1},{name:"Sentinel-2 卫兵2号卫星",layer:Cesium.ImageryLayer.fromProviderAsync(Cesium.IonImageryProvider.fromAssetId(3954)),description:"卫兵二号卫星影像，无云，最低缩放层级13级",layerType:"basemap",source:"Cesium ION Assets",index:null,show:!1}],localSource:[]},terrains:{remoteSource:[{name:"无地形",provider:new Cesium.EllipsoidTerrainProvider({tilingScheme:new Cesium.GeographicTilingScheme}),terrain:new Cesium.Terrain(new Cesium.EllipsoidTerrainProvider({tilingScheme:new Cesium.GeographicTilingScheme})),description:"提供了一个全球范围内高度为0的地形，不支持水面，没有法向量。不需要额外的地形文件或者服务。可以配置tilling scheme。",source:"",show:!1},{name:"Cesium 世界地形",provider:Cesium.CesiumTerrainProvider.fromIonAssetId(1),terrain:new Cesium.Terrain(Cesium.CesiumTerrainProvider.fromIonAssetId(1)),description:"Cesium World Terrain fuses several data sources into a single quantized-mesh terrain tileset,来自我的 cesium ION assets",source:"Cesium ION Assets",show:!1}],localSource:[{name:"无地形",provider:new Cesium.EllipsoidTerrainProvider({tilingScheme:new Cesium.GeographicTilingScheme}),terrain:new Cesium.Terrain(new Cesium.EllipsoidTerrainProvider({tilingScheme:new Cesium.GeographicTilingScheme})),description:"提供了一个全球范围内高度为0的地形，不支持水面，没有法向量。不需要额外的地形文件或者服务。可以配置tilling scheme。",source:"",show:!1}]},tiles3D:{remoteSource:[],localSource:[]}},d={isOffline:!1,useIONdata:!0,hideDefaultWidgets:!0,highPerformance:!0,viewModel3D:"only",FPSmonitor:!0,customRequestRender:!1},V={animation:!d.hideDefaultWidgets,baseLayerPicker:!d.hideDefaultWidgets,fullscreenButton:!d.hideDefaultWidgets,vrButton:!d.hideDefaultWidgets,geocoder:!d.hideDefaultWidgets,homeButton:!d.hideDefaultWidgets,infoBox:!d.hideDefaultWidgets,sceneModePicker:!d.hideDefaultWidgets,selectionIndicator:!d.hideDefaultWidgets,projectionPicker:!d.hideDefaultWidgets,timeline:!d.hideDefaultWidgets,navigationHelpButton:!d.hideDefaultWidgets,navigationInstructionsInitiallyVisible:!d.hideDefaultWidgets,sceneMode:Cesium.SceneMode.SCENE3D,scene3DOnly:d.viewModel3D=="only",mapMode2D:Cesium.MapMode2D.INFINITE_SCROLL,shouldAnimate:!1,shadows:d.highPerformance,terrainShadows:Cesium.ShadowMode.RECEIVE_ONLY,blurActiveElementOnCanvasFocus:!0,useDefaultRenderLoop:!d.customRequestRender,targetFrameRate:144,showRenderLoopErrors:!1,useBrowserRecommendedResolution:!0,automaticallyTrackDataSourceClocks:!0,orderIndependentTranslucency:!0,requestRenderMode:d.customRequestRender,maximumRenderTimeChange:void 0,depthPlaneEllipsoidOffset:0};function F(i){const e={};return e.mapData={},e.monitor={dataInfo:{}},_(()=>{let s=new Cesium.Viewer(i,V);e.viewer=s,e.viewer._cesiumWidget._creditContainer.style.display="none",e.viewer.imageryLayers.removeAll();let l=y.imageryLayers.remoteSource,t=y.terrains.remoteSource,r=y.tiles3D.remoteSource;e.mapData.imageryLayers=new Map,e.monitor.dataInfo.imageryLayers=[];let n=0;l.forEach(o=>{s.imageryLayers.add(o.layer,n),o.layer.show=!1,e.mapData.imageryLayers.set(n,o),e.monitor.dataInfo.imageryLayers.push({name:o.name,description:o.description,layerType:o.layerType,source:o.source,index:n,show:o.show}),n+=1});let a=1;s.imageryLayers.get(a).show=!0,e.mapData.imageryLayers.get(a).show=!0,e.mapData.imageryLayers.set("current",a),e.monitor.dataInfo.imageryLayers.find(o=>o.index==a).show=!0,e.mapData.terrains=new Map,e.mapData.terrains.set("off",t[0]),e.mapData.terrains.set("on",t[1]),s.scene.setTerrain(e.mapData.terrains.get("off").terrain),e.monitor.dataInfo.terrainOn=!1,e.mapData.primitives=new Map,e.monitor.dataInfo.primitives=[];let c=0;r.forEach(o=>{e.viewer.scene.primitives.add(o.primitive,c),e.viewer.scene.primitives.get(c).show=!1,e.mapData.primitives.set(c,o),e.monitor.dataInfo.primitives.push({name:o.name,description:o.description,type:o.type,show:o.show,index:c}),c+=1}),e.monitor.fps=0,e.monitor.__renderTimeStamp=performance.now(),e.viewer.scene.preRender.addEventListener(function(){let o=performance.now();e.monitor.fps=Math.round(1e3/(o-e.monitor.__renderTimeStamp)),e.monitor.__renderTimeStamp=o})}),T(()=>{e.viewer.destroy()}),e}const U={mounted(i,e,s,l){if(!e.value){let t,r,n,a;i.onmousedown=c=>{c.preventDefault(),n=c.clientX,a=c.clientY,document.onmouseup=o=>{document.onmousemove=null,document.onmouseup=null},document.onmousemove=o=>{o.preventDefault(),t=n-o.clientX,r=a-o.clientY,n=o.clientX,a=o.clientY,i.style.top=i.offsetTop-r+"px",i.style.left=i.offsetLeft-t+"px"}}}},updated(i,e,s,l){if(e.value)i.onmousedown=null;else{let t,r,n,a;i.onmousedown=c=>{c.preventDefault(),n=c.clientX,a=c.clientY,document.onmouseup=o=>{document.onmousemove=null,document.onmouseup=null},document.onmousemove=o=>{o.preventDefault(),t=n-o.clientX,r=a-o.clientY,n=o.clientX,a=o.clientY,i.style.top=i.offsetTop-r+"px",i.style.left=i.offsetLeft-t+"px"}}}}};function E(i){const e=M({cartesian3:{x:null,y:null,z:null},cartographic:{degrees:{latitude:null,longitude:null,altitude:null},radians:{latitude:null,longitude:null,altitude:null}}}),s=new Cesium.ScreenSpaceEventHandler;function l(t){let r=Math.trunc(t);r+=" °";let n=t%1,a=Math.trunc(n*60);return r=r+" "+a+" '",a=Math.trunc(n*60%1*60),r=r+" "+a+' "',r}return _(()=>{s.setInputAction(function(t){try{let r;i.monitor.terrainOn?r=i.viewer.scene.globe.pick(i.viewer.camera.getPickRay(t.endPosition),i.viewer.scene):r=i.viewer.scene.camera.pickEllipsoid(t.endPosition,i.viewer.scene.globe.ellipsoid),e.cartesian3=r;let n=i.viewer.scene.globe.ellipsoid.cartesianToCartographic(r);e.cartographic.radians.latitude=n.latitude,e.cartographic.radians.longitude=n.longitude,e.cartographic.radians.altitude=n.height,e.cartographic.degrees.latitude=l(Cesium.Math.toDegrees(n.latitude)),e.cartographic.degrees.longitude=l(Cesium.Math.toDegrees(n.longitude)),e.cartographic.degrees.altitude=n.height}catch{}},Cesium.ScreenSpaceEventType.MOUSE_MOVE)}),T(()=>{s.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE),s.destroy()}),e}function Y(i){return{__cesiumApp__:i,baseLayerPicker:e,terrainSwitcher:s,terrainExaggerate:l};function e(t){let r=i.mapData.imageryLayers.get("current");i.viewer.imageryLayers.get(r).show=!1,i.mapData.imageryLayers.get(r).show=!1,i.monitor.dataInfo.imageryLayers.find(n=>n.index==r).show=!1,i.mapData.imageryLayers.set("current",t),i.viewer.imageryLayers.get(t).show=!0,i.mapData.imageryLayers.get(t).show=!0,i.monitor.dataInfo.imageryLayers.find(n=>n.index==t).show=!0}function s(t){if(i.monitor.dataInfo.terrainOn!=t){let r=t?"on":"off";i.viewer.scene.setTerrain(i.mapData.terrains.get(r).terrain),i.monitor.dataInfo.terrainOn=t}}function l(t){i.viewer.scene.globe.terrainExaggeration=t}}class H{constructor(e){this.viewer=e.viewer,this.positioning=e.positioning?e.positioning:E(e),this.handler=new Cesium.ScreenSpaceEventHandler(this.viewer.canvas),this.drawing=!1,this.strokeColor=Cesium.Color.RED.withAlpha(.7),this.fillColor=Cesium.Color.RED.withAlpha(.7),this.strokeMaterial=null,this.fillMaterial=null,this.active_strokeColor=Cesium.Color.MINTCREAM,this.active_fillColor=Cesium.Color.MINTCREAM,this.dynamicShape=null,this.dynamicShapePositionDatas=[],this.drawingMode=1}get cart3(){let e;try{e=this.positioning.cartesian3.clone()}catch{}return e}setStrokeColor(e){this.strokeColor=Cesium.Color.fromCssColorString(e)}setFillColor(e){this.fillColor=Cesium.Color.fromCssColorString(e)}setStrokeMaterial(e){this.StrokeMaterial=e}setFillMaterial(e){this.fillMaterial=e}setDrawingMode(e){this.drawingMode=e}plot(e,s,l,t,r){e&&e===1|e===2&&this.setDrawingMode(e),s&&this.setStrokeColor(s),l&&this.setFillColor(l),t&&this.setStrokeMaterial(t),r&&this.setFillMaterial(r),this.__startPlotting__()}__startPlotting__(){this.handler.setInputAction(()=>{let e=this.cart3;this.viewer.entities.add(this.__createPoint__(e)),this.drawing==!1&&(this.drawing=!0,this.dynamicShape=this.createShape(),this.viewer.entities.add(this.dynamicShape)),this.dynamicShapePositionDatas.push(e),this.dynamicShapePositionDatas.push(e),this.viewer.trackedEntity=this.dynamicShape},Cesium.ScreenSpaceEventType.LEFT_CLICK),this.handler.setInputAction(()=>{let e=this.cart3;this.drawing==!0&&(this.dynamicShapePositionDatas.pop(),this.dynamicShapePositionDatas.push(e))},Cesium.ScreenSpaceEventType.MOUSE_MOVE),this.handler.setInputAction(()=>{if(this.drawing==!0){this.drawing=!1;let e=this.createShape();e&&this.viewer.entities.add(e),this.dynamicShape=null,this.dynamicShapePositionDatas=[],this.viewer.trackedEntity=void 0}},Cesium.ScreenSpaceEventType.RIGHT_CLICK)}__createPoint__(e){return new Cesium.Entity({position:e,point:{color:this.strokeColor,pixelSize:5,heightReference:Cesium.HeightReference.CLAMP_TO_GROUND}})}__createLine__(e){return new Cesium.Entity({polyline:{positions:e,clampToGround:!0,width:3,material:this.strokeMaterial?this.strokeMaterial:this.strokeColor}})}__createPolygon__(e){return new Cesium.Entity({polygon:{hierarchy:e,material:this.fillMaterial?this.fillMaterial:new Cesium.ColorMaterialProperty(this.fillColor),clampToGround:!0}})}createShape(){let e,s;switch(this.drawingMode){case 2:this.drawing==!0?e=new Cesium.CallbackProperty(()=>this.dynamicShapePositionDatas,!1):e=this.dynamicShapePositionDatas,s=this.__createLine__(e);break;case 1:this.drawing==!0?e=new Cesium.CallbackProperty(()=>new Cesium.PolygonHierarchy(this.dynamicShapePositionDatas),!1):e=new Cesium.PolygonHierarchy(this.dynamicShapePositionDatas),s=this.__createPolygon__(e);break}return s}endPlot(){this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK),this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE),this.handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK),this.handler.destroy(),console.log("handler?>>>",this.handler),console.log("destroyed? >>",this.handler.isDestroyed)}}const L=(i,e)=>{const s=i.__vccOpts||i;for(const[l,t]of e)s[l]=t;return s},P=i=>(N("data-v-3173acf3"),i=i(),q(),i),z=P(()=>u("div",{id:"viewer"},null,-1)),G={id:"menu-container"},X={for:"check"},$=P(()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2.5em",height:"2.5em",viewBox:"0 0 24 24"},[u("path",{fill:"aliceblue",d:"M14.025 23.2q-.425 0-.725-.287T13 22.2t.288-.712T14 21.2q2.925 0 4.963-2.037T21 14.2q0-.425.288-.712T22 13.2t.713.288t.287.712q0 1.85-.712 3.488t-1.925 2.862t-2.85 1.938t-3.488.712m0-4q-.425 0-.725-.287T13 18.2t.288-.712T14 17.2q1.25 0 2.125-.875T17 14.2q0-.425.288-.712T18 13.2t.713.288t.287.712q-.025 2.075-1.463 3.525T14.026 19.2M5.55 22.575q-.375 0-.75-.15T4.125 22l-3.55-3.55q-.275-.3-.425-.675t-.15-.75q0-.4.15-.763t.425-.637L3.75 12.45q.575-.575 1.425-.587t1.425.562l1.25 1.25l.7-.7l-1.25-1.25q-.575-.575-.575-1.4t.575-1.4L8.725 7.5q.575-.575 1.413-.575t1.412.575l1.25 1.25l.7-.7l-1.25-1.25q-.575-.575-.575-1.412t.575-1.413L15.425.8q.3-.3.675-.45t.75-.15t.738.15t.662.45l3.55 3.55q.3.275.438.638t.137.762q0 .375-.137.75t-.438.675l-3.175 3.175q-.575.575-1.412.575T15.8 10.35L14.55 9.1l-.7.7l1.25 1.25q.575.575.563 1.413t-.588 1.412l-1.4 1.4q-.575.575-1.412.575t-1.413-.575l-1.25-1.25l-.7.7l1.25 1.25q.575.575.563 1.425t-.588 1.425L6.95 22q-.275.275-.638.425t-.762.15m0-1.975l1.05-1.05L3.05 16L2 17.05zm2.125-2.125l1.05-1.05l-3.55-3.55l-1.05 1.05zm9.55-9.55l1.05-1.05l-3.55-3.55l-1.05 1.05zM19.35 6.8l1.05-1.05l-3.55-3.55l-1.05 1.05z"})],-1)),j={id:"menu",class:"stretch-in"},J={class:"footer-right"},K={"text-align:right":""},Q={__name:"cesiumView",setup(i){const e=F("viewer"),s=E(e);e.positioning=s;const l=k(!1),t=Y(e);function r(n){const a=new H(e);n=="plotstart"?a.plot():n=="plotend"&&a.endPlot()}return _(()=>{}),O(()=>{}),(n,a)=>{const c=R("router-view");return w(),C("main",null,[z,S((w(),C("div",G,[u("label",X,[$,u("input",{type:"checkbox",id:"check",style:{display:"none"},onClick:a[0]||(a[0]=o=>l.value=!l.value)})]),S(u("div",j,[D(c,{dataInfo:m(e).monitor.dataInfo,onBasemapChange:m(t).baseLayerPicker,onTerrainSwitch:m(t).terrainSwitcher,onTerrainExaggerate:m(t).terrainExaggerate,onPlotControl:r},null,8,["dataInfo","onBasemapChange","onTerrainSwitch","onTerrainExaggerate"])],512),[[x,l.value]])])),[[m(U),l.value]]),u("footer",null,[u("div",null,[u("span",null,"经度："+g(m(e).positioning.cartographic.degrees.longitude),1),u("span",null,"纬度："+g(m(e).positioning.cartographic.degrees.latitude),1)]),u("div",J,[u("span",null,[b("性能监控： "),u("span",K,"FPS: "+g(m(e).monitor.fps),1)])])])])}}},Z=L(Q,[["__scopeId","data-v-3173acf3"]]),ee={id:"main"},te={__name:"App",setup(i){return(e,s)=>(w(),C("div",ee,[D(Z)]))}},ie=L(te,[["__scopeId","data-v-05710efd"]]),re="modulepreload",ne=function(i){return"/cesiumLab/"+i},I={},v=function(e,s,l){let t=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link");t=Promise.all(s.map(n=>{if(n=ne(n),n in I)return;I[n]=!0;const a=n.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!l)for(let p=r.length-1;p>=0;p--){const f=r[p];if(f.href===n&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${c}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":re,a||(h.as="script",h.crossOrigin=""),h.href=n,document.head.appendChild(h),a)return new Promise((p,f)=>{h.addEventListener("load",p),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})}))}return t.then(()=>e()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})},oe=[{path:"/",name:"functionNavigation",component:()=>v(()=>import("./functionNav-G3iRCUfQ.js"),__vite__mapDeps([0,1,2]))},{path:"/dataControl",name:"dataControl",component:()=>v(()=>import("./dataControl-W-EKygHh.js"),__vite__mapDeps([3,1,4,5,6]))},{path:"/material",name:"material",component:()=>v(()=>import("./material-c6ir-tUB.js"),__vite__mapDeps([7,4,1,5]))}],se=A({base:"/cesiumLab",history:B(),routes:oe});W(ie).use(se).mount("#app");export{L as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/functionNav-G3iRCUfQ.js","assets/vendor-O7JwXdLB.js","assets/functionNav-humTNZew.css","assets/dataControl-W-EKygHh.js","assets/backSpace-KcNqtcxd.js","assets/backSpace-_2FqCET5.css","assets/dataControl-x9jL2Jk0.css","assets/material-c6ir-tUB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}