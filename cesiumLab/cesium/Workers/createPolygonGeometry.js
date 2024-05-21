/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.112
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as Pt}from"./chunk-Y2WNT7GS.js";import{a as S}from"./chunk-6Z5VPVU7.js";import{a as X}from"./chunk-CXKSXL5C.js";import{a as ft}from"./chunk-C4L7HN6T.js";import{a as It}from"./chunk-IW442OVT.js";import"./chunk-IYTTCRXN.js";import"./chunk-63CO7A5M.js";import{a as At}from"./chunk-RQI6QM4Q.js";import{a as Tt}from"./chunk-NXLA2DOI.js";import{a as dt}from"./chunk-2DNLGXTL.js";import{a as Q}from"./chunk-ZLPZ2L4F.js";import{a as K}from"./chunk-QCBYIBZJ.js";import"./chunk-5XT3QCZD.js";import{a as _t,b as at}from"./chunk-TU5B2BXL.js";import"./chunk-2EHQCUJI.js";import"./chunk-EOT3UPEC.js";import{a as bt,b as Et}from"./chunk-ZKNXHPHD.js";import"./chunk-W5ZMPE2M.js";import{a as ut}from"./chunk-EQ7PMEBC.js";import"./chunk-FDDSRMXI.js";import{c as pt,d as ot}from"./chunk-YYYI3I6L.js";import{d as Ot,f as mt}from"./chunk-YIFABOF6.js";import"./chunk-PQVQONHO.js";import{c as lt,d as E}from"./chunk-KDW4RGIR.js";import{a as et}from"./chunk-VNDUYYBJ.js";import{a as f,b as Z,c as v,d as U}from"./chunk-V624RX7A.js";import{a as c}from"./chunk-VZ2RFJ3P.js";import"./chunk-RN5GA5QZ.js";import"./chunk-TWC6ISJU.js";import{a as N}from"./chunk-RKPKWH3Z.js";import{a as rt,b as G}from"./chunk-BIYNNQRQ.js";import{e as P}from"./chunk-ZLUSVROX.js";function Dt(t,e){if(!P(t)||!P(e))throw new rt("identifier and message are required.");At(t,e)}var Nt=Dt;function b(t,e){this.position=t,P(this.position)||(this.position=new E),this.tangentPlane=e,P(this.tangentPlane)||(this.tangentPlane=b.NORTH_POLE_TANGENT_PLANE)}Object.defineProperties(b.prototype,{ellipsoid:{get:function(){return this.tangentPlane.ellipsoid}},x:{get:function(){return this.position.x}},y:{get:function(){return this.position.y}},conformalLatitude:{get:function(){let t=E.magnitude(this.position),e=2*this.ellipsoid.maximumRadius;return this.tangentPlane.plane.normal.z*(c.PI_OVER_TWO-2*Math.atan2(t,e))}},longitude:{get:function(){let t=c.PI_OVER_TWO+Math.atan2(this.y,this.x);return t>Math.PI&&(t-=c.TWO_PI),t}}});var st=new Z,Vt=new f;b.prototype.getLatitude=function(t){P(t)||(t=v.WGS84),st.latitude=this.conformalLatitude,st.longitude=this.longitude,st.height=0;let e=this.ellipsoid.cartographicToCartesian(st,Vt);return t.cartesianToCartographic(e,st),st.latitude};var Mt=new bt,Bt=new f,jt=new f;b.fromCartesian=function(t,e){G.defined("cartesian",t);let o=c.signNotZero(t.z),n=b.NORTH_POLE_TANGENT_PLANE,i=b.SOUTH_POLE;o<0&&(n=b.SOUTH_POLE_TANGENT_PLANE,i=b.NORTH_POLE);let r=Mt;r.origin=n.ellipsoid.scaleToGeocentricSurface(t,r.origin),r.direction=f.subtract(r.origin,i,Bt),f.normalize(r.direction,r.direction);let a=Et.rayPlane(r,n.plane,jt),h=f.subtract(a,i,a),l=f.dot(n.xAxis,h),u=o*f.dot(n.yAxis,h);return P(e)?(e.position=new E(l,u),e.tangentPlane=n,e):new b(new E(l,u),n)};b.fromCartesianArray=function(t,e){G.defined("cartesians",t);let o=t.length;P(e)?e.length=o:e=new Array(o);for(let n=0;n<o;n++)e[n]=b.fromCartesian(t[n],e[n]);return e};b.clone=function(t,e){if(P(t))return P(e)?(e.position=t.position,e.tangentPlane=t.tangentPlane,e):new b(t.position,t.tangentPlane)};b.HALF_UNIT_SPHERE=Object.freeze(new v(.5,.5,.5));b.NORTH_POLE=Object.freeze(new f(0,0,.5));b.SOUTH_POLE=Object.freeze(new f(0,0,-.5));b.NORTH_POLE_TANGENT_PLANE=Object.freeze(new K(b.NORTH_POLE,b.HALF_UNIT_SPHERE));b.SOUTH_POLE_TANGENT_PLANE=Object.freeze(new K(b.SOUTH_POLE,b.HALF_UNIT_SPHERE));var k=b;var Wt=new Z,Ht=new Z;function Gt(t,e,o,n){let r=n.cartesianToCartographic(t,Wt).height,a=n.cartesianToCartographic(e,Ht);a.height=r,n.cartographicToCartesian(a,e);let h=n.cartesianToCartographic(o,Ht);h.height=r-100,n.cartographicToCartesian(h,o)}var Ct=new Pt,kt=new f,zt=new f,Ut=new f,Yt=new f,qt=new f,Qt=new f,gt=new f,J=new f,ct=new f,Jt=new E,Zt=new E,Kt=new f,xt=new mt,Xt=new U,$t=new U;function wt(t){let e=t.vertexFormat,o=t.geometry,n=t.shadowVolume,i=o.attributes.position.values,r=P(o.attributes.st)?o.attributes.st.values:void 0,a=i.length,h=t.wall,l=t.top||h,u=t.bottom||h;if(e.st||e.normal||e.tangent||e.bitangent||n){let g=t.boundingRectangle,s=t.rotationAxis,O=t.projectTo2d,H=t.ellipsoid,B=t.stRotation,C=t.perPositionHeight,R=Jt;R.x=g.x,R.y=g.y;let V=e.st?new Float32Array(2*(a/3)):void 0,d;e.normal&&(C&&l&&!h?d=o.attributes.normal.values:d=new Float32Array(a));let I=e.tangent?new Float32Array(a):void 0,A=e.bitangent?new Float32Array(a):void 0,F=n?new Float32Array(a):void 0,w=0,y=0,T=zt,m=Ut,_=Yt,j=!0,q=Xt,$=$t;if(B!==0){let M=mt.fromAxisAngle(s,B,xt);q=U.fromQuaternion(M,q),M=mt.fromAxisAngle(s,-B,xt),$=U.fromQuaternion(M,$)}else q=U.clone(U.IDENTITY,q),$=U.clone(U.IDENTITY,$);let p=0,L=0;l&&u&&(p=a/2,L=a/3,a/=2);for(let M=0;M<a;M+=3){let W=f.fromArray(i,M,Kt);if(e.st&&!P(r)){let x=U.multiplyByVector(q,W,kt);x=H.scaleToGeodeticSurface(x,x);let D=O(x,Zt);E.subtract(D,R,D);let tt=c.clamp(D.x/g.width,0,1),it=c.clamp(D.y/g.height,0,1);u&&(V[w+L]=tt,V[w+1+L]=it),l&&(V[w]=tt,V[w+1]=it),w+=2}if(e.normal||e.tangent||e.bitangent||n){let x=y+1,D=y+2;if(h){if(M+3<a){let tt=f.fromArray(i,M+3,qt);if(j){let it=f.fromArray(i,M+a,Qt);C&&Gt(W,tt,it,H),f.subtract(tt,W,tt),f.subtract(it,W,it),T=f.normalize(f.cross(it,tt,T),T),j=!1}f.equalsEpsilon(tt,W,c.EPSILON10)&&(j=!0)}(e.tangent||e.bitangent)&&(_=H.geodeticSurfaceNormal(W,_),e.tangent&&(m=f.normalize(f.cross(_,T,m),m)))}else T=H.geodeticSurfaceNormal(W,T),(e.tangent||e.bitangent)&&(C&&(gt=f.fromArray(d,y,gt),J=f.cross(f.UNIT_Z,gt,J),J=f.normalize(U.multiplyByVector($,J,J),J),e.bitangent&&(ct=f.normalize(f.cross(gt,J,ct),ct))),m=f.cross(f.UNIT_Z,T,m),m=f.normalize(U.multiplyByVector($,m,m),m),e.bitangent&&(_=f.normalize(f.cross(T,m,_),_)));e.normal&&(t.wall?(d[y+p]=T.x,d[x+p]=T.y,d[D+p]=T.z):u&&(d[y+p]=-T.x,d[x+p]=-T.y,d[D+p]=-T.z),(l&&!C||h)&&(d[y]=T.x,d[x]=T.y,d[D]=T.z)),n&&(h&&(T=H.geodeticSurfaceNormal(W,T)),F[y+p]=-T.x,F[x+p]=-T.y,F[D+p]=-T.z),e.tangent&&(t.wall?(I[y+p]=m.x,I[x+p]=m.y,I[D+p]=m.z):u&&(I[y+p]=-m.x,I[x+p]=-m.y,I[D+p]=-m.z),l&&(C?(I[y]=J.x,I[x]=J.y,I[D]=J.z):(I[y]=m.x,I[x]=m.y,I[D]=m.z))),e.bitangent&&(u&&(A[y+p]=_.x,A[x+p]=_.y,A[D+p]=_.z),l&&(C?(A[y]=ct.x,A[x]=ct.y,A[D]=ct.z):(A[y]=_.x,A[x]=_.y,A[D]=_.z))),y+=3}}e.st&&!P(r)&&(o.attributes.st=new ot({componentDatatype:et.FLOAT,componentsPerAttribute:2,values:V})),e.normal&&(o.attributes.normal=new ot({componentDatatype:et.FLOAT,componentsPerAttribute:3,values:d})),e.tangent&&(o.attributes.tangent=new ot({componentDatatype:et.FLOAT,componentsPerAttribute:3,values:I})),e.bitangent&&(o.attributes.bitangent=new ot({componentDatatype:et.FLOAT,componentsPerAttribute:3,values:A})),n&&(o.attributes.extrudeDirection=new ot({componentDatatype:et.FLOAT,componentsPerAttribute:3,values:F}))}if(t.extrude&&P(t.offsetAttribute)){let g=i.length/3,s=new Uint8Array(g);if(t.offsetAttribute===dt.TOP)l&&u||h?s=s.fill(1,0,g/2):l&&(s=s.fill(1));else{let O=t.offsetAttribute===dt.NONE?0:1;s=s.fill(O)}o.attributes.applyOffset=new ot({componentDatatype:et.UNSIGNED_BYTE,componentsPerAttribute:1,values:s})}return o}var te=new Z,ee=new Z,nt={westOverIDL:0,eastOverIDL:0},ht=new Tt;function oe(t,e,o,n,i){if(i=N(i,new lt),!P(t)||t.length<3)return i.west=0,i.north=0,i.south=0,i.east=0,i;if(o===X.RHUMB)return lt.fromCartesianArray(t,e,i);ht.ellipsoid.equals(e)||(ht=new Tt(void 0,void 0,e)),i.west=Number.POSITIVE_INFINITY,i.east=Number.NEGATIVE_INFINITY,i.south=Number.POSITIVE_INFINITY,i.north=Number.NEGATIVE_INFINITY,nt.westOverIDL=Number.POSITIVE_INFINITY,nt.eastOverIDL=Number.NEGATIVE_INFINITY;let r=1/c.chordLength(n,e.maximumRadius),a=t.length,h=e.cartesianToCartographic(t[0],ee),l=te,u;for(let g=1;g<a;g++)u=l,l=h,h=e.cartesianToCartographic(t[g],u),ht.setEndPoints(l,h),Rt(ht,r,i,nt);return u=l,l=h,h=e.cartesianToCartographic(t[0],u),ht.setEndPoints(l,h),Rt(ht,r,i,nt),i.east-i.west>nt.eastOverIDL-nt.westOverIDL&&(i.west=nt.westOverIDL,i.east=nt.eastOverIDL,i.east>c.PI&&(i.east=i.east-c.TWO_PI),i.west>c.PI&&(i.west=i.west-c.TWO_PI)),i}var ne=new Z;function Rt(t,e,o,n){let i=t.surfaceDistance,r=Math.ceil(i*e),a=r>0?i/(r-1):Number.POSITIVE_INFINITY,h=0;for(let l=0;l<r;l++){let u=t.interpolateUsingSurfaceDistance(h,ne);h+=a;let g=u.longitude,s=u.latitude;o.west=Math.min(o.west,g),o.east=Math.max(o.east,g),o.south=Math.min(o.south,s),o.north=Math.max(o.north,s);let O=g>=0?g:g+c.TWO_PI;n.westOverIDL=Math.min(n.westOverIDL,O),n.eastOverIDL=Math.max(n.eastOverIDL,O)}}var Lt=[];function ie(t,e,o,n,i,r,a,h,l,u){let g={walls:[]},s;if(a||h){let d=S.createGeometryFromPositions(t,e,o,n,r,l,u),I=d.attributes.position.values,A=d.indices,F,w;if(a&&h){let y=I.concat(I);F=y.length/3,w=ut.createTypedArray(F,A.length*2),w.set(A);let T=A.length,m=F/2;for(s=0;s<T;s+=3){let _=w[s]+m,j=w[s+1]+m,q=w[s+2]+m;w[s+T]=q,w[s+1+T]=j,w[s+2+T]=_}if(d.attributes.position.values=y,r&&l.normal){let _=d.attributes.normal.values;d.attributes.normal.values=new Float32Array(y.length),d.attributes.normal.values.set(_)}if(l.st&&P(o)){let _=d.attributes.st.values;d.attributes.st.values=new Float32Array(F*2),d.attributes.st.values=_.concat(_)}d.indices=w}else if(h){for(F=I.length/3,w=ut.createTypedArray(F,A.length),s=0;s<A.length;s+=3)w[s]=A[s+2],w[s+1]=A[s+1],w[s+2]=A[s];d.indices=w}g.topAndBottom=new ft({geometry:d})}let O=i.outerRing,H=K.fromPoints(O,t),B=H.projectPointsOntoPlane(O,Lt),C=at.computeWindingOrder2D(B);C===_t.CLOCKWISE&&(O=O.slice().reverse());let R=S.computeWallGeometry(O,o,t,n,r,u);g.walls.push(new ft({geometry:R}));let V=i.holes;for(s=0;s<V.length;s++){let d=V[s];B=H.projectPointsOntoPlane(d,Lt),C=at.computeWindingOrder2D(B),C===_t.COUNTER_CLOCKWISE&&(d=d.slice().reverse()),R=S.computeWallGeometry(d,o,t,n,r,u),g.walls.push(new ft({geometry:R}))}return g}function z(t){if(G.typeOf.object("options",t),G.typeOf.object("options.polygonHierarchy",t.polygonHierarchy),P(t.perPositionHeight)&&t.perPositionHeight&&P(t.height))throw new rt("Cannot use both options.perPositionHeight and options.height");if(P(t.arcType)&&t.arcType!==X.GEODESIC&&t.arcType!==X.RHUMB)throw new rt("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");let e=t.polygonHierarchy,o=N(t.vertexFormat,Q.DEFAULT),n=N(t.ellipsoid,v.WGS84),i=N(t.granularity,c.RADIANS_PER_DEGREE),r=N(t.stRotation,0),a=t.textureCoordinates,h=N(t.perPositionHeight,!1),l=h&&P(t.extrudedHeight),u=N(t.height,0),g=N(t.extrudedHeight,u);if(!l){let s=Math.max(u,g);g=Math.min(u,g),u=s}this._vertexFormat=Q.clone(o),this._ellipsoid=v.clone(n),this._granularity=i,this._stRotation=r,this._height=u,this._extrudedHeight=g,this._closeTop=N(t.closeTop,!0),this._closeBottom=N(t.closeBottom,!0),this._polygonHierarchy=e,this._perPositionHeight=h,this._perPositionHeightExtrude=l,this._shadowVolume=N(t.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=t.offsetAttribute,this._arcType=N(t.arcType,X.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=a,this.packedLength=S.computeHierarchyPackedLength(e,f)+v.packedLength+Q.packedLength+(a?S.computeHierarchyPackedLength(a,E):1)+12}z.fromPositions=function(t){t=N(t,N.EMPTY_OBJECT),G.defined("options.positions",t.positions);let e={polygonHierarchy:{positions:t.positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates};return new z(e)};z.pack=function(t,e,o){return G.typeOf.object("value",t),G.defined("array",e),o=N(o,0),o=S.packPolygonHierarchy(t._polygonHierarchy,e,o,f),v.pack(t._ellipsoid,e,o),o+=v.packedLength,Q.pack(t._vertexFormat,e,o),o+=Q.packedLength,e[o++]=t._height,e[o++]=t._extrudedHeight,e[o++]=t._granularity,e[o++]=t._stRotation,e[o++]=t._perPositionHeightExtrude?1:0,e[o++]=t._perPositionHeight?1:0,e[o++]=t._closeTop?1:0,e[o++]=t._closeBottom?1:0,e[o++]=t._shadowVolume?1:0,e[o++]=N(t._offsetAttribute,-1),e[o++]=t._arcType,P(t._textureCoordinates)?o=S.packPolygonHierarchy(t._textureCoordinates,e,o,E):e[o++]=-1,e[o++]=t.packedLength,e};var re=v.clone(v.UNIT_SPHERE),ae=new Q,se={polygonHierarchy:{}};z.unpack=function(t,e,o){G.defined("array",t),e=N(e,0);let n=S.unpackPolygonHierarchy(t,e,f);e=n.startingIndex,delete n.startingIndex;let i=v.unpack(t,e,re);e+=v.packedLength;let r=Q.unpack(t,e,ae);e+=Q.packedLength;let a=t[e++],h=t[e++],l=t[e++],u=t[e++],g=t[e++]===1,s=t[e++]===1,O=t[e++]===1,H=t[e++]===1,B=t[e++]===1,C=t[e++],R=t[e++],V=t[e]===-1?void 0:S.unpackPolygonHierarchy(t,e,E);P(V)?(e=V.startingIndex,delete V.startingIndex):e++;let d=t[e++];return P(o)||(o=new z(se)),o._polygonHierarchy=n,o._ellipsoid=v.clone(i,o._ellipsoid),o._vertexFormat=Q.clone(r,o._vertexFormat),o._height=a,o._extrudedHeight=h,o._granularity=l,o._stRotation=u,o._perPositionHeightExtrude=g,o._perPositionHeight=s,o._closeTop=O,o._closeBottom=H,o._shadowVolume=B,o._offsetAttribute=C===-1?void 0:C,o._arcType=R,o._textureCoordinates=V,o.packedLength=d,o};var ce=new E,he=new E,fe=new k;function vt(t,e,o,n,i,r){let a=t.longitude,h=a>=0?a:a+c.TWO_PI;i.westOverIdl=Math.min(i.westOverIdl,h),i.eastOverIdl=Math.max(i.eastOverIdl,h),r.west=Math.min(r.west,a),r.east=Math.max(r.east,a);let l=t.getLatitude(o),u=l;if(r.south=Math.min(r.south,l),r.north=Math.max(r.north,l),n!==X.RHUMB){let O=E.subtract(e.position,t.position,ce),H=E.dot(e.position,O)/E.dot(O,O);if(H>0&&H<1){let B=E.add(e.position,E.multiplyByScalar(O,-H,O),he),C=k.clone(e,fe);C.position=B;let R=C.getLatitude(o);r.south=Math.min(r.south,R),r.north=Math.max(r.north,R),Math.abs(l)>Math.abs(R)&&(u=R)}}let g=e.x*t.y-t.x*e.y,s=Math.sign(g);s!==0&&(s*=E.angleBetween(e.position,t.position)),u>=0&&(i.northAngle+=s),u<=0&&(i.southAngle+=s)}var St=new k,le=new k,Y={northAngle:0,southAngle:0,westOverIdl:0,eastOverIdl:0};z.computeRectangleFromPositions=function(t,e,o,n){if(G.defined("positions",t),P(n)||(n=new lt),t.length<3)return n;n.west=Number.POSITIVE_INFINITY,n.east=Number.NEGATIVE_INFINITY,n.south=Number.POSITIVE_INFINITY,n.north=Number.NEGATIVE_INFINITY,Y.northAngle=0,Y.southAngle=0,Y.westOverIdl=Number.POSITIVE_INFINITY,Y.eastOverIdl=Number.NEGATIVE_INFINITY;let i=t.length,r=k.fromCartesian(t[0],le);for(let a=1;a<i;a++){let h=k.fromCartesian(t[a],St);vt(h,r,e,o,Y,n),r=k.clone(h,r)}return vt(k.fromCartesian(t[0],St),r,e,o,Y,n),n.east-n.west>Y.eastOverIdl-Y.westOverIdl&&(n.west=Y.westOverIdl,n.east=Y.eastOverIdl,n.east>c.PI&&(n.east=n.east-c.TWO_PI),n.west>c.PI&&(n.west=n.west-c.TWO_PI)),c.equalsEpsilon(Math.abs(Y.northAngle),c.TWO_PI,c.EPSILON10)&&(n.north=c.PI_OVER_TWO,n.east=c.PI,n.west=-c.PI),c.equalsEpsilon(Math.abs(Y.southAngle),c.TWO_PI,c.EPSILON10)&&(n.south=-c.PI_OVER_TWO,n.east=c.PI,n.west=-c.PI),n};z.computeRectangle=function(t,e){G.typeOf.object("options",t),G.typeOf.object("options.polygonHierarchy",t.polygonHierarchy),Nt("PolygonGeometry.computeRectangle","PolygonGeometry.computeRectangle was deprecated in CesiumJS 1.110.  It will be removed in CesiumJS 1.112. Use PolygonGeometry.computeRectangleFromPositions instead.");let o=N(t.granularity,c.RADIANS_PER_DEGREE),n=N(t.arcType,X.GEODESIC);if(n!==X.GEODESIC&&n!==X.RHUMB)throw new rt("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");let i=t.polygonHierarchy,r=N(t.ellipsoid,v.WGS84);return oe(i.positions,r,n,o,e)};var me=new k;function ue(t,e,o){return t.height>=c.PI||t.width>=c.PI?k.fromCartesian(e[0],me).tangentPlane:K.fromPoints(e,o)}var Ft=new Z;function de(t,e,o){return(n,i)=>{if(t.height>=c.PI||t.width>=c.PI){if(t.south<0&&t.north>0){P(i)||(i=[]);for(let a=0;a<n.length;++a){let h=o.cartesianToCartographic(n[a],Ft);i[a]=new E(h.longitude/c.PI,h.latitude/c.PI_OVER_TWO)}return i.length=n.length,i}return k.fromCartesianArray(n,i)}return K.fromPoints(e,o).projectPointsOntoPlane(n,i)}}function ge(t,e,o){if(t.height>=c.PI||t.width>=c.PI)return(i,r)=>{if(t.south<0&&t.north>0){let a=o.cartesianToCartographic(i,Ft);return P(r)||(r=new E),r.x=a.longitude/c.PI,r.y=a.latitude/c.PI_OVER_TWO,r}return k.fromCartesian(i,r)};let n=K.fromPoints(e,o);return(i,r)=>n.projectPointsOntoPlane(i,r)}function pe(t,e,o,n){return(i,r)=>!n&&(t.height>=c.PI_OVER_TWO||t.width>=2*c.PI_OVER_THREE)?S.splitPolygonsOnEquator(i,e,o,r):i}function Pe(t,e,o,n){if(e.height>=c.PI||e.width>=c.PI)return Pt.fromRectangle(e,void 0,Ct);let i=t,r=K.fromPoints(i,o);return S.computeBoundingRectangle(r.plane.normal,r.projectPointOntoPlane.bind(r),i,n,Ct)}z.createGeometry=function(t){let e=t._vertexFormat,o=t._ellipsoid,n=t._granularity,i=t._stRotation,r=t._polygonHierarchy,a=t._perPositionHeight,h=t._closeTop,l=t._closeBottom,u=t._arcType,g=t._textureCoordinates,s=P(g),O=r.positions;if(O.length<3)return;let H=t.rectangle,B=S.polygonsFromHierarchy(r,s,de(H,O,o),!a,o,pe(H,o,u,a)),C=B.hierarchy,R=B.polygons,V=function(p){return p},d=s?S.polygonsFromHierarchy(g,!0,V,!1,o).polygons:void 0;if(C.length===0)return;let I=C[0].outerRing,A=Pe(I,H,o,i),F=[],w=t._height,y=t._extrudedHeight,T=t._perPositionHeightExtrude||!c.equalsEpsilon(w,y,0,c.EPSILON2),m={perPositionHeight:a,vertexFormat:e,geometry:void 0,rotationAxis:ue(H,I,o).plane.normal,projectTo2d:ge(H,I,o),boundingRectangle:A,ellipsoid:o,stRotation:i,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:u},_;if(T)for(m.extrude=!0,m.top=h,m.bottom=l,m.shadowVolume=t._shadowVolume,m.offsetAttribute=t._offsetAttribute,_=0;_<R.length;_++){let p=ie(o,R[_],s?d[_]:void 0,n,C[_],a,h,l,e,u),L;h&&l?(L=p.topAndBottom,m.geometry=S.scaleToGeodeticHeightExtruded(L.geometry,w,y,o,a)):h?(L=p.topAndBottom,L.geometry.attributes.position.values=at.scaleToGeodeticHeight(L.geometry.attributes.position.values,w,o,!a),m.geometry=L.geometry):l&&(L=p.topAndBottom,L.geometry.attributes.position.values=at.scaleToGeodeticHeight(L.geometry.attributes.position.values,y,o,!0),m.geometry=L.geometry),(h||l)&&(m.wall=!1,L.geometry=wt(m),F.push(L));let M=p.walls;m.wall=!0;for(let W=0;W<M.length;W++){let x=M[W];m.geometry=S.scaleToGeodeticHeightExtruded(x.geometry,w,y,o,a),x.geometry=wt(m),F.push(x)}}else for(_=0;_<R.length;_++){let p=new ft({geometry:S.createGeometryFromPositions(o,R[_],s?d[_]:void 0,n,a,e,u)});if(p.geometry.attributes.position.values=at.scaleToGeodeticHeight(p.geometry.attributes.position.values,w,o,!a),m.geometry=p.geometry,p.geometry=wt(m),P(t._offsetAttribute)){let L=p.geometry.attributes.position.values.length,M=t._offsetAttribute===dt.NONE?0:1,W=new Uint8Array(L/3).fill(M);p.geometry.attributes.applyOffset=new ot({componentDatatype:et.UNSIGNED_BYTE,componentsPerAttribute:1,values:W})}F.push(p)}let j=It.combineInstances(F)[0];j.attributes.position.values=new Float64Array(j.attributes.position.values),j.indices=ut.createTypedArray(j.attributes.position.values.length/3,j.indices);let q=j.attributes,$=Ot.fromVertices(q.position.values);return e.position||delete q.position,new pt({attributes:q,indices:j.indices,primitiveType:j.primitiveType,boundingSphere:$,offsetAttribute:t._offsetAttribute})};z.createShadowVolume=function(t,e,o){let n=t._granularity,i=t._ellipsoid,r=e(n,i),a=o(n,i);return new z({polygonHierarchy:t._polygonHierarchy,ellipsoid:i,stRotation:t._stRotation,granularity:n,perPositionHeight:!1,extrudedHeight:r,height:a,vertexFormat:Q.POSITION_ONLY,shadowVolume:!0,arcType:t._arcType})};function _e(t){let e=-t._stRotation;if(e===0)return[0,0,0,1,1,0];let o=t._ellipsoid,n=t._polygonHierarchy.positions,i=t.rectangle;return pt._textureCoordinateRotationPoints(n,e,o,i)}Object.defineProperties(z.prototype,{rectangle:{get:function(){if(!P(this._rectangle)){let t=this._polygonHierarchy.positions;this._rectangle=z.computeRectangleFromPositions(t,this._ellipsoid,this._arcType)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return P(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=_e(this)),this._textureCoordinateRotationPoints}}});var yt=z;function Te(t,e){return P(e)&&(t=yt.unpack(t,e)),t._ellipsoid=v.clone(t._ellipsoid),yt.createGeometry(t)}var po=Te;export{po as default};
