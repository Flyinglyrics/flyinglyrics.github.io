import{_ as pt,r as gt,a as xt,o as Et,b as Rt,c as te,d as re,e as p,t as ie,f as Re,g as St,F as _t,h as Se,p as Dt,i as yt}from"./index-CqJFOWyU.js";const At="/media/homepage_background.mp3",bt="/images/profile.png";function Ut(F){const l=document.getElementById(F);he();let n={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function P(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let T=[],y=[];T.push(new P);const{gl:e,ext:d}=A(l);ye()&&(n.DYE_RESOLUTION=512),d.supportLinearFiltering||(n.DYE_RESOLUTION=512,n.SHADING=!1,n.BLOOM=!1,n.SUNRAYS=!1);function A(t){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=t.getContext("webgl2",i);const o=!!r;o||(r=t.getContext("webgl",i)||t.getContext("experimental-webgl",i));let a,c;o?(r.getExtension("EXT_color_buffer_float"),c=r.getExtension("OES_texture_float_linear")):(a=r.getExtension("OES_texture_half_float"),c=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const u=o?r.HALF_FLOAT:a.HALF_FLOAT_OES;let f,v,D;return o?(f=b(r,r.RGBA16F,r.RGBA,u),v=b(r,r.RG16F,r.RG,u),D=b(r,r.R16F,r.RED,u)):(f=b(r,r.RGBA,r.RGBA,u),v=b(r,r.RGBA,r.RGBA,u),D=b(r,r.RGBA,r.RGBA,u)),{gl:r,ext:{formatRGBA:f,formatRG:v,formatR:D,halfFloatTexType:u,supportLinearFiltering:c}}}function b(t,i,r,o){if(!De(t,i,r,o))switch(i){case t.R16F:return b(t,t.RG16F,t.RG,o);case t.RG16F:return b(t,t.RGBA16F,t.RGBA,o);default:return null}return{internalFormat:i,format:r}}function De(t,i,r,o){let a=t.createTexture();t.bindTexture(t.TEXTURE_2D,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,i,4,4,0,r,o,null);let c=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,c),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,a,0),t.checkFramebufferStatus(t.FRAMEBUFFER)==t.FRAMEBUFFER_COMPLETE}function ye(){return/Mobi|Android/i.test(navigator.userAgent)}class Ae{constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(i){let r=0;for(let a=0;a<i.length;a++)r+=Tt(i[a]);let o=this.programs[r];if(o==null){let a=h(e.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=oe(this.vertexShader,a),this.programs[r]=o}o!=this.activeProgram&&(this.uniforms=ae(o),this.activeProgram=o)}bind(){e.useProgram(this.activeProgram)}}class g{constructor(i,r){this.uniforms={},this.program=oe(i,r),this.uniforms=ae(this.program)}bind(){e.useProgram(this.program)}}function oe(t,i){let r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,i),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)||console.trace(e.getProgramInfoLog(r)),r}function ae(t){let i=[],r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let a=e.getActiveUniform(t,o).name;i[a]=e.getUniformLocation(t,a)}return i}function h(t,i,r){i=be(i,r);const o=e.createShader(t);return e.shaderSource(o,i),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.trace(e.getShaderInfoLog(o)),o}function be(t,i){if(i==null)return t;let r="";return i.forEach(o=>{r+="#define "+o+`
`}),r+t}const x=h(e.VERTEX_SHADER,`
        precision highp float;

        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `),Ue=h(e.VERTEX_SHADER,`
        precision highp float;

        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            float offset = 1.33333333;
            vL = vUv - texelSize * offset;
            vR = vUv + texelSize * offset;
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `),Le=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        uniform sampler2D uTexture;

        void main () {
            vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
            sum += texture2D(uTexture, vL) * 0.35294117;
            sum += texture2D(uTexture, vR) * 0.35294117;
            gl_FragColor = sum;
        }
    `),we=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
    `),Fe=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
    `),Oe=h(e.FRAGMENT_SHADER,`
        precision mediump float;

        uniform vec4 color;

        void main () {
            gl_FragColor = color;
        }
    `),Be=h(e.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float aspectRatio;

        #define SCALE 25.0

        void main () {
            vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
            float v = mod(uv.x + uv.y, 2.0);
            v = v * 0.1 + 0.8;
            gl_FragColor = vec4(vec3(v), 1.0);
        }
    `),Ne=`
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform sampler2D uBloom;
        uniform sampler2D uSunrays;
        uniform sampler2D uDithering;
        uniform vec2 ditherScale;
        uniform vec2 texelSize;

        vec3 linearToGamma (vec3 color) {
            color = max(color, vec3(0));
            return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
        }

        void main () {
            vec3 c = texture2D(uTexture, vUv).rgb;

        #ifdef SHADING
            vec3 lc = texture2D(uTexture, vL).rgb;
            vec3 rc = texture2D(uTexture, vR).rgb;
            vec3 tc = texture2D(uTexture, vT).rgb;
            vec3 bc = texture2D(uTexture, vB).rgb;

            float dx = length(rc) - length(lc);
            float dy = length(tc) - length(bc);

            vec3 n = normalize(vec3(dx, dy, length(texelSize)));
            vec3 l = vec3(0.0, 0.0, 1.0);

            float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
            c *= diffuse;
        #endif

        #ifdef BLOOM
            vec3 bloom = texture2D(uBloom, vUv).rgb;
        #endif

        #ifdef SUNRAYS
            float sunrays = texture2D(uSunrays, vUv).r;
            c *= sunrays;
        #ifdef BLOOM
            bloom *= sunrays;
        #endif
        #endif

        #ifdef BLOOM
            float noise = texture2D(uDithering, vUv * ditherScale).r;
            noise = noise * 2.0 - 1.0;
            bloom += noise / 255.0;
            bloom = linearToGamma(bloom);
            c += bloom;
        #endif

            float a = max(c.r, max(c.g, c.b));
            gl_FragColor = vec4(c, a);
        }
    `,Pe=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform vec3 curve;
        uniform float threshold;

        void main () {
            vec3 c = texture2D(uTexture, vUv).rgb;
            float br = max(c.r, max(c.g, c.b));
            float rq = clamp(br - curve.x, 0.0, curve.y);
            rq = curve.z * rq * rq;
            c *= max(rq, br - threshold) / max(br, 0.0001);
            gl_FragColor = vec4(c, 0.0);
        }
    `),Ie=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;

        void main () {
            vec4 sum = vec4(0.0);
            sum += texture2D(uTexture, vL);
            sum += texture2D(uTexture, vR);
            sum += texture2D(uTexture, vT);
            sum += texture2D(uTexture, vB);
            sum *= 0.25;
            gl_FragColor = sum;
        }
    `),Me=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uTexture;
        uniform float intensity;

        void main () {
            vec4 sum = vec4(0.0);
            sum += texture2D(uTexture, vL);
            sum += texture2D(uTexture, vR);
            sum += texture2D(uTexture, vT);
            sum += texture2D(uTexture, vB);
            sum *= 0.25;
            gl_FragColor = sum * intensity;
        }
    `),Ce=h(e.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            vec4 c = texture2D(uTexture, vUv);
            float br = max(c.r, max(c.g, c.b));
            c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
            gl_FragColor = c;
        }
    `),Xe=h(e.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTexture;
        uniform float weight;

        #define ITERATIONS 16

        void main () {
            float Density = 0.3;
            float Decay = 0.95;
            float Exposure = 0.7;

            vec2 coord = vUv;
            vec2 dir = vUv - 0.5;

            dir *= 1.0 / float(ITERATIONS) * Density;
            float illuminationDecay = 1.0;

            float color = texture2D(uTexture, vUv).a;

            for (int i = 0; i < ITERATIONS; i++)
            {
                coord -= dir;
                float col = texture2D(uTexture, coord).a;
                color += col * illuminationDecay * weight;
                illuminationDecay *= Decay;
            }

            gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
        }
    `),ze=h(e.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
    `),Ye=h(e.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;

            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
        #ifdef MANUAL_FILTERING
            vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
            vec4 result = bilerp(uSource, coord, dyeTexelSize);
        #else
            vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
            vec4 result = texture2D(uSource, coord);
        #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }`,d.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ge=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
    `),He=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
    `),Ve=h(e.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;

        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
    `),ke=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
    `),We=h(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
    `),m=(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),(t,i=!1)=>{t==null?(e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.viewport(0,0,t.width,t.height),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo)),i&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)});let E,s,W,q,U,K,O=[],C,ne,ue=Je("/images/LDR_LLL1_0.png");const I=new g(Ue,Le),ce=new g(x,we),j=new g(x,Fe),se=new g(x,Oe);new g(x,Be);const X=new g(x,Pe),M=new g(x,Ie),z=new g(x,Me),le=new g(x,Ce),J=new g(x,Xe),L=new g(x,ze),R=new g(x,Ye),Q=new g(x,Ge),Z=new g(x,He),N=new g(x,Ve),Y=new g(x,ke),G=new g(x,We),w=new Ae(x,Ne);function fe(){let t=V(n.SIM_RESOLUTION),i=V(n.DYE_RESOLUTION);const r=d.halfFloatTexType,o=d.formatRGBA,a=d.formatRG,c=d.formatR,u=d.supportLinearFiltering?e.LINEAR:e.NEAREST;e.disable(e.BLEND),E==null?E=$(i.width,i.height,o.internalFormat,o.format,r,u):E=ve(E,i.width,i.height,o.internalFormat,o.format,r,u),s==null?s=$(t.width,t.height,a.internalFormat,a.format,r,u):s=ve(s,t.width,t.height,a.internalFormat,a.format,r,u),W=S(t.width,t.height,c.internalFormat,c.format,r,e.NEAREST),q=S(t.width,t.height,c.internalFormat,c.format,r,e.NEAREST),U=$(t.width,t.height,c.internalFormat,c.format,r,e.NEAREST),qe(),Ke()}function qe(){let t=V(n.BLOOM_RESOLUTION);const i=d.halfFloatTexType,r=d.formatRGBA,o=d.supportLinearFiltering?e.LINEAR:e.NEAREST;K=S(t.width,t.height,r.internalFormat,r.format,i,o),O.length=0;for(let a=0;a<n.BLOOM_ITERATIONS;a++){let c=t.width>>a+1,u=t.height>>a+1;if(c<2||u<2)break;let f=S(c,u,r.internalFormat,r.format,i,o);O.push(f)}}function Ke(){let t=V(n.SUNRAYS_RESOLUTION);const i=d.halfFloatTexType,r=d.formatR,o=d.supportLinearFiltering?e.LINEAR:e.NEAREST;C=S(t.width,t.height,r.internalFormat,r.format,i,o),ne=S(t.width,t.height,r.internalFormat,r.format,i,o)}function S(t,i,r,o,a,c){e.activeTexture(e.TEXTURE0);let u=e.createTexture();e.bindTexture(e.TEXTURE_2D,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,t,i,0,o,a,null);let f=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,u,0),e.viewport(0,0,t,i),e.clear(e.COLOR_BUFFER_BIT);let v=1/t,D=1/i;return{texture:u,fbo:f,width:t,height:i,texelSizeX:v,texelSizeY:D,attach(B){return e.activeTexture(e.TEXTURE0+B),e.bindTexture(e.TEXTURE_2D,u),B}}}function $(t,i,r,o,a,c){let u=S(t,i,r,o,a,c),f=S(t,i,r,o,a,c);return{width:t,height:i,texelSizeX:u.texelSizeX,texelSizeY:u.texelSizeY,get read(){return u},set read(v){u=v},get write(){return f},set write(v){f=v},swap(){let v=u;u=f,f=v}}}function je(t,i,r,o,a,c,u){let f=S(i,r,o,a,c,u);return ce.bind(),e.uniform1i(ce.uniforms.uTexture,t.attach(0)),m(f),f}function ve(t,i,r,o,a,c,u){return t.width==i&&t.height==r||(t.read=je(t.read,i,r,o,a,c,u),t.write=S(i,r,o,a,c,u),t.width=i,t.height=r,t.texelSizeX=1/i,t.texelSizeY=1/r),t}function Je(t){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:i,width:1,height:1,attach(a){return e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_2D,i),a}},o=new Image;return o.onload=()=>{r.width=o.width,r.height=o.height,e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,o)},o.src=t,r}function Qe(){let t=[];n.SHADING&&t.push("SHADING"),n.BLOOM&&t.push("BLOOM"),n.SUNRAYS&&t.push("SUNRAYS"),w.setKeywords(t)}Qe(),fe(),Te(parseInt(Math.random()*20)+5);let me=Date.now(),H=0;de();function de(){const t=Ze();he()&&fe(),$e(t),et(),n.PAUSED||tt(t),rt(null),requestAnimationFrame(de)}function Ze(){let t=Date.now(),i=(t-me)/1e3;return i=Math.min(i,.016666),me=t,i}function he(){let t=_(l.clientWidth),i=_(l.clientHeight);return l.width!=t||l.height!=i?(l.width=t,l.height=i,!0):!1}function $e(t){H+=t*n.COLOR_UPDATE_SPEED,H>=1&&(H=dt(H,0,1),T.forEach(i=>{i.color=ee()}))}function et(){y.length>0&&Te(y.pop()),T.forEach(t=>{t.moved&&(t.moved=!1,ct(t))})}function tt(t){e.disable(e.BLEND),Z.bind(),e.uniform2f(Z.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(Z.uniforms.uVelocity,s.read.attach(0)),m(q),N.bind(),e.uniform2f(N.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(N.uniforms.uVelocity,s.read.attach(0)),e.uniform1i(N.uniforms.uCurl,q.attach(1)),e.uniform1f(N.uniforms.curl,n.CURL),e.uniform1f(N.uniforms.dt,t),m(s.write),s.swap(),Q.bind(),e.uniform2f(Q.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(Q.uniforms.uVelocity,s.read.attach(0)),m(W),j.bind(),e.uniform1i(j.uniforms.uTexture,U.read.attach(0)),e.uniform1f(j.uniforms.value,n.PRESSURE),m(U.write),U.swap(),Y.bind(),e.uniform2f(Y.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(Y.uniforms.uDivergence,W.attach(0));for(let r=0;r<n.PRESSURE_ITERATIONS;r++)e.uniform1i(Y.uniforms.uPressure,U.read.attach(1)),m(U.write),U.swap();G.bind(),e.uniform2f(G.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(G.uniforms.uPressure,U.read.attach(0)),e.uniform1i(G.uniforms.uVelocity,s.read.attach(1)),m(s.write),s.swap(),R.bind(),e.uniform2f(R.uniforms.texelSize,s.texelSizeX,s.texelSizeY),d.supportLinearFiltering||e.uniform2f(R.uniforms.dyeTexelSize,s.texelSizeX,s.texelSizeY);let i=s.read.attach(0);e.uniform1i(R.uniforms.uVelocity,i),e.uniform1i(R.uniforms.uSource,i),e.uniform1f(R.uniforms.dt,t),e.uniform1f(R.uniforms.dissipation,n.VELOCITY_DISSIPATION),m(s.write),s.swap(),d.supportLinearFiltering||e.uniform2f(R.uniforms.dyeTexelSize,E.texelSizeX,E.texelSizeY),e.uniform1i(R.uniforms.uVelocity,s.read.attach(0)),e.uniform1i(R.uniforms.uSource,E.read.attach(1)),e.uniform1f(R.uniforms.dissipation,n.DENSITY_DISSIPATION),m(E.write),E.swap()}function rt(t){n.BLOOM&&at(E.read,K),n.SUNRAYS&&(nt(E.read,E.write,C),ut(C,ne,1)),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND),it(t,mt(n.BACK_COLOR)),ot(t)}function it(t,i){se.bind(),e.uniform4f(se.uniforms.color,i.r,i.g,i.b,1),m(t)}function ot(t){let i=e.drawingBufferWidth,r=e.drawingBufferHeight;if(w.bind(),n.SHADING&&e.uniform2f(w.uniforms.texelSize,1/i,1/r),e.uniform1i(w.uniforms.uTexture,E.read.attach(0)),n.BLOOM){e.uniform1i(w.uniforms.uBloom,K.attach(1)),e.uniform1i(w.uniforms.uDithering,ue.attach(2));let o=ht(ue,i,r);e.uniform2f(w.uniforms.ditherScale,o.x,o.y)}n.SUNRAYS&&e.uniform1i(w.uniforms.uSunrays,C.attach(3)),m(t)}function at(t,i){if(O.length<2)return;let r=i;e.disable(e.BLEND),X.bind();let o=n.BLOOM_THRESHOLD*n.BLOOM_SOFT_KNEE+1e-4,a=n.BLOOM_THRESHOLD-o,c=o*2,u=.25/o;e.uniform3f(X.uniforms.curve,a,c,u),e.uniform1f(X.uniforms.threshold,n.BLOOM_THRESHOLD),e.uniform1i(X.uniforms.uTexture,t.attach(0)),m(r),M.bind();for(let f=0;f<O.length;f++){let v=O[f];e.uniform2f(M.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(M.uniforms.uTexture,r.attach(0)),m(v),r=v}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(let f=O.length-2;f>=0;f--){let v=O[f];e.uniform2f(M.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(M.uniforms.uTexture,r.attach(0)),e.viewport(0,0,v.width,v.height),m(v),r=v}e.disable(e.BLEND),z.bind(),e.uniform2f(z.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(z.uniforms.uTexture,r.attach(0)),e.uniform1f(z.uniforms.intensity,n.BLOOM_INTENSITY),m(i)}function nt(t,i,r){e.disable(e.BLEND),le.bind(),e.uniform1i(le.uniforms.uTexture,t.attach(0)),m(i),J.bind(),e.uniform1f(J.uniforms.weight,n.SUNRAYS_WEIGHT),e.uniform1i(J.uniforms.uTexture,i.attach(0)),m(r)}function ut(t,i,r){I.bind();for(let o=0;o<r;o++)e.uniform2f(I.uniforms.texelSize,t.texelSizeX,0),e.uniform1i(I.uniforms.uTexture,t.attach(0)),m(i),e.uniform2f(I.uniforms.texelSize,0,t.texelSizeY),e.uniform1i(I.uniforms.uTexture,i.attach(0)),m(t)}function ct(t){let i=t.deltaX*n.SPLAT_FORCE,r=t.deltaY*n.SPLAT_FORCE;pe(t.texcoordX,t.texcoordY,i,r,t.color)}function Te(t){for(let i=0;i<t;i++){const r=ee();r.r*=10,r.g*=10,r.b*=10;const o=Math.random(),a=Math.random(),c=1e3*(Math.random()-.5),u=1e3*(Math.random()-.5);pe(o,a,c,u,r)}}function pe(t,i,r,o,a){L.bind(),e.uniform1i(L.uniforms.uTarget,s.read.attach(0)),e.uniform1f(L.uniforms.aspectRatio,l.width/l.height),e.uniform2f(L.uniforms.point,t,i),e.uniform3f(L.uniforms.color,r,o,0),e.uniform1f(L.uniforms.radius,st(n.SPLAT_RADIUS/100)),m(s.write),s.swap(),e.uniform1i(L.uniforms.uTarget,E.read.attach(0)),e.uniform3f(L.uniforms.color,a.r,a.g,a.b),m(E.write),E.swap()}function st(t){let i=l.width/l.height;return i>1&&(t*=i),t}l.addEventListener("mousedown",t=>{let i=_(t.offsetX),r=_(t.offsetY),o=T.find(a=>a.id==-1);o==null&&(o=new P),ge(o,-1,i,r)}),l.addEventListener("mousemove",t=>{let i=T[0];if(!i.down)return;let r=_(t.offsetX),o=_(t.offsetY);xe(i,r,o)}),window.addEventListener("mouseup",()=>{Ee(T[0])}),l.addEventListener("touchstart",t=>{t.preventDefault();const i=t.targetTouches;for(;i.length>=T.length;)T.push(new P);for(let r=0;r<i.length;r++){let o=_(i[r].pageX),a=_(i[r].pageY);ge(T[r+1],i[r].identifier,o,a)}}),l.addEventListener("touchmove",t=>{t.preventDefault();const i=t.targetTouches;for(let r=0;r<i.length;r++){let o=T[r+1];if(!o.down)continue;let a=_(i[r].pageX),c=_(i[r].pageY);xe(o,a,c)}},!1),window.addEventListener("touchend",t=>{const i=t.changedTouches;for(let r=0;r<i.length;r++){let o=T.find(a=>a.id==i[r].identifier);o!=null&&Ee(o)}}),window.addEventListener("keydown",t=>{t.code==="KeyP"&&(n.PAUSED=!n.PAUSED),t.key===" "&&y.push(parseInt(Math.random()*20)+5)});function ge(t,i,r,o){t.id=i,t.down=!0,t.moved=!1,t.texcoordX=r/l.width,t.texcoordY=1-o/l.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=ee()}function xe(t,i,r){t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=i/l.width,t.texcoordY=1-r/l.height,t.deltaX=lt(t.texcoordX-t.prevTexcoordX),t.deltaY=ft(t.texcoordY-t.prevTexcoordY),t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0}function Ee(t){t.down=!1}function lt(t){let i=l.width/l.height;return i<1&&(t*=i),t}function ft(t){let i=l.width/l.height;return i>1&&(t/=i),t}function ee(){let t=vt(Math.random(),1,1);return t.r*=.15,t.g*=.15,t.b*=.15,t}function vt(t,i,r){let o,a,c,u,f,v,D,B;switch(u=Math.floor(t*6),f=t*6-u,v=r*(1-i),D=r*(1-f*i),B=r*(1-(1-f)*i),u%6){case 0:o=r,a=B,c=v;break;case 1:o=D,a=r,c=v;break;case 2:o=v,a=r,c=B;break;case 3:o=v,a=D,c=r;break;case 4:o=B,a=v,c=r;break;case 5:o=r,a=v,c=D;break}return{r:o,g:a,b:c}}function mt(t){return{r:t.r/255,g:t.g/255,b:t.b/255}}function dt(t,i,r){let o=r-i;return(t-i)%o+i}function V(t){let i=e.drawingBufferWidth/e.drawingBufferHeight;i<1&&(i=1/i);let r=Math.round(t),o=Math.round(t*i);return e.drawingBufferWidth>e.drawingBufferHeight?{width:o,height:r}:{width:r,height:o}}function ht(t,i,r){return{x:i/t.width,y:r/t.height}}function _(t){let i=window.devicePixelRatio||1;return Math.floor(t*i)}function Tt(t){if(t.length==0)return 0;let i=0;for(let r=0;r<t.length;r++)i=(i<<5)-i+t.charCodeAt(r),i|=0;return i}}const _e=new Headers;_e.append("Accept","application/json");const Lt="/proverbs.json";async function wt(){return await(await fetch(Lt,{headers:_e,mode:"cors"})).json()}const k=F=>(Dt("data-v-9afc4df7"),F=F(),yt(),F),Ft=k(()=>p("audio",{autoplay:"",loop:""},[p("source",{src:At})],-1)),Ot={class:"container"},Bt=k(()=>p("canvas",{id:"background"},null,-1)),Nt={class:"section section1",id:"section1"},Pt={class:"proverb-box"},It=k(()=>p("div",{class:"quote l-quote"},[p("h1",null,"“")],-1)),Mt={class:"proverb-content"},Ct={class:"proverb-signature"},Xt={key:0},zt=k(()=>p("div",{class:"quote r-quote"},[p("h1",null,"”")],-1)),Yt=Se('<div id="arrowAnim" data-v-9afc4df7><div class="arrowSliding" data-v-9afc4df7><div class="arrow" data-v-9afc4df7></div></div><div class="arrowSliding delay1" data-v-9afc4df7><div class="arrow" data-v-9afc4df7></div></div><div class="arrowSliding delay2" data-v-9afc4df7><div class="arrow" data-v-9afc4df7></div></div><div class="arrowSliding delay3" data-v-9afc4df7><div class="arrow" data-v-9afc4df7></div></div></div>',1),Gt=[Yt],Ht={class:"section section2",id:"section2"},Vt={class:"g-glossy info-box"},kt=Se('<img src="'+bt+'" data-v-9afc4df7><h3 data-v-9afc4df7>flyinglyrics</h3><div class="info-box-description" data-v-9afc4df7><p data-v-9afc4df7>Technic &amp; Enjoy Life &amp; Music</p></div><div class="info-box-description" data-v-9afc4df7><p style="" data-v-9afc4df7><a target="_blank" href="https://www.britannica.com/technology/GIS" data-v-9afc4df7>· 3S ·</a> · Web Programming · · WebGL · · Web GIS ·  </p></div>',4),Wt={__name:"Homepage",setup(F){const l=gt({content:"",signature:{author:"",composition:""}});wt().then(T=>{let y=Math.floor(Math.random()*T.proverbs.length),e=T.proverbs[y];l.content=e.content,l.signature.author=e.signature.author,l.signature.composition=e.signature.composition?e.signature.composition:""});const n=xt(!0);function P(){n.value=!1}return Et(()=>{Ut("background");let T=document.querySelector(".container"),y=document.querySelector("#section1"),e=document.querySelector("#section2");T.addEventListener("mousewheel",function(d){let A=!0;A&&(A=!1,d.wheelDelta>0?(y.scrollIntoView({behavior:"smooth"}),n.value=!0):(e.scrollIntoView({behavior:"smooth"}),n.value=!1),setTimeout(function(){A=!0},500))}),T.addEventListener("touchmove",function(d){let A=!0;A&&(A=!1,d.changedTouches[0].pageY-d.touches[0].clientY>0?(y.scrollIntoView({behavior:"smooth"}),n.value=!0):(e.scrollIntoView({behavior:"smooth"}),n.value=!1),setTimeout(function(){A=!0},500))})}),(T,y)=>{const e=Rt("router-view");return te(),re(_t,null,[Ft,p("main",Ot,[Bt,p("section",Nt,[p("div",Pt,[It,p("div",Mt,[p("h2",null,"  "+ie(l.content)+"  ",1),p("div",Ct,[p("h3",null,[p("span",null,ie(l.signature.author),1),l.signature.composition?(te(),re("span",Xt," —— "+ie(l.signature.composition),1)):Re("",!0)])])]),zt]),p("footer",null,[n.value?(te(),re("a",{key:0,href:"#section2",onClick:P},Gt)):Re("",!0)])]),p("section",Ht,[p("div",Vt,[kt,St(e,{class:"navi"})])])])],64)}}},Kt=pt(Wt,[["__scopeId","data-v-9afc4df7"]]);export{Kt as default};
