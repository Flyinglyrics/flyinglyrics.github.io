import{_ as pt,r as Tt,a as xt,o as Et,b as te,c as re,d as E,t as ie,e as Re,F as Rt,f as Se,p as St,g as _t}from"./index-B1fDpuwV.js";const bt="/media/homepage_background.mp3",Dt="/images/profile.png";function yt(U){const l=document.getElementById(U);he();let n={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function N(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let T=[],D=[];T.push(new N);const{gl:e,ext:h}=k(l);De()&&(n.DYE_RESOLUTION=512),h.supportLinearFiltering||(n.DYE_RESOLUTION=512,n.SHADING=!1,n.BLOOM=!1,n.SUNRAYS=!1);function k(t){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=t.getContext("webgl2",i);const o=!!r;o||(r=t.getContext("webgl",i)||t.getContext("experimental-webgl",i));let a,u;o?(r.getExtension("EXT_color_buffer_float"),u=r.getExtension("OES_texture_float_linear")):(a=r.getExtension("OES_texture_half_float"),u=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const c=o?r.HALF_FLOAT:a.HALF_FLOAT_OES;let v,f,b;return o?(v=y(r,r.RGBA16F,r.RGBA,c),f=y(r,r.RG16F,r.RG,c),b=y(r,r.R16F,r.RED,c)):(v=y(r,r.RGBA,r.RGBA,c),f=y(r,r.RGBA,r.RGBA,c),b=y(r,r.RGBA,r.RGBA,c)),{gl:r,ext:{formatRGBA:v,formatRG:f,formatR:b,halfFloatTexType:c,supportLinearFiltering:u}}}function y(t,i,r,o){if(!be(t,i,r,o))switch(i){case t.R16F:return y(t,t.RG16F,t.RG,o);case t.RG16F:return y(t,t.RGBA16F,t.RGBA,o);default:return null}return{internalFormat:i,format:r}}function be(t,i,r,o){let a=t.createTexture();t.bindTexture(t.TEXTURE_2D,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,i,4,4,0,r,o,null);let u=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,u),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,a,0),t.checkFramebufferStatus(t.FRAMEBUFFER)==t.FRAMEBUFFER_COMPLETE}function De(){return/Mobi|Android/i.test(navigator.userAgent)}class ye{constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(i){let r=0;for(let a=0;a<i.length;a++)r+=gt(i[a]);let o=this.programs[r];if(o==null){let a=m(e.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=oe(this.vertexShader,a),this.programs[r]=o}o!=this.activeProgram&&(this.uniforms=ae(o),this.activeProgram=o)}bind(){e.useProgram(this.activeProgram)}}class g{constructor(i,r){this.uniforms={},this.program=oe(i,r),this.uniforms=ae(this.program)}bind(){e.useProgram(this.program)}}function oe(t,i){let r=e.createProgram();return e.attachShader(r,t),e.attachShader(r,i),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)||console.trace(e.getProgramInfoLog(r)),r}function ae(t){let i=[],r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let a=e.getActiveUniform(t,o).name;i[a]=e.getUniformLocation(t,a)}return i}function m(t,i,r){i=Ae(i,r);const o=e.createShader(t);return e.shaderSource(o,i),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)||console.trace(e.getShaderInfoLog(o)),o}function Ae(t,i){if(i==null)return t;let r="";return i.forEach(o=>{r+="#define "+o+`
`}),r+t}const p=m(e.VERTEX_SHADER,`
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
    `),Le=m(e.VERTEX_SHADER,`
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
    `),we=m(e.FRAGMENT_SHADER,`
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
    `),Ue=m(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
    `),Fe=m(e.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;

        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
    `),Be=m(e.FRAGMENT_SHADER,`
        precision mediump float;

        uniform vec4 color;

        void main () {
            gl_FragColor = color;
        }
    `),Oe=m(e.FRAGMENT_SHADER,`
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
    `,Pe=m(e.FRAGMENT_SHADER,`
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
    `),Ie=m(e.FRAGMENT_SHADER,`
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
    `),Me=m(e.FRAGMENT_SHADER,`
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
    `),Ce=m(e.FRAGMENT_SHADER,`
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
    `),Xe=m(e.FRAGMENT_SHADER,`
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
    `),ze=m(e.FRAGMENT_SHADER,`
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
    `),Ge=m(e.FRAGMENT_SHADER,`
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
        }`,h.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ye=m(e.FRAGMENT_SHADER,`
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
    `),He=m(e.FRAGMENT_SHADER,`
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
    `),Ve=m(e.FRAGMENT_SHADER,`
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
    `),ke=m(e.FRAGMENT_SHADER,`
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
    `),We=m(e.FRAGMENT_SHADER,`
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
    `),d=(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),(t,i=!1)=>{t==null?(e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.viewport(0,0,t.width,t.height),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo)),i&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)});let x,s,W,q,A,K,F=[],M,ne,ce=Je("../images/LDR_LLL1_0.png");const P=new g(Le,we),ue=new g(p,Ue),j=new g(p,Fe),se=new g(p,Be);new g(p,Oe);const C=new g(p,Pe),I=new g(p,Ie),X=new g(p,Me),le=new g(p,Ce),J=new g(p,Xe),L=new g(p,ze),R=new g(p,Ge),Q=new g(p,Ye),Z=new g(p,He),O=new g(p,Ve),z=new g(p,ke),G=new g(p,We),w=new ye(p,Ne);function ve(){let t=H(n.SIM_RESOLUTION),i=H(n.DYE_RESOLUTION);const r=h.halfFloatTexType,o=h.formatRGBA,a=h.formatRG,u=h.formatR,c=h.supportLinearFiltering?e.LINEAR:e.NEAREST;e.disable(e.BLEND),x==null?x=$(i.width,i.height,o.internalFormat,o.format,r,c):x=fe(x,i.width,i.height,o.internalFormat,o.format,r,c),s==null?s=$(t.width,t.height,a.internalFormat,a.format,r,c):s=fe(s,t.width,t.height,a.internalFormat,a.format,r,c),W=S(t.width,t.height,u.internalFormat,u.format,r,e.NEAREST),q=S(t.width,t.height,u.internalFormat,u.format,r,e.NEAREST),A=$(t.width,t.height,u.internalFormat,u.format,r,e.NEAREST),qe(),Ke()}function qe(){let t=H(n.BLOOM_RESOLUTION);const i=h.halfFloatTexType,r=h.formatRGBA,o=h.supportLinearFiltering?e.LINEAR:e.NEAREST;K=S(t.width,t.height,r.internalFormat,r.format,i,o),F.length=0;for(let a=0;a<n.BLOOM_ITERATIONS;a++){let u=t.width>>a+1,c=t.height>>a+1;if(u<2||c<2)break;let v=S(u,c,r.internalFormat,r.format,i,o);F.push(v)}}function Ke(){let t=H(n.SUNRAYS_RESOLUTION);const i=h.halfFloatTexType,r=h.formatR,o=h.supportLinearFiltering?e.LINEAR:e.NEAREST;M=S(t.width,t.height,r.internalFormat,r.format,i,o),ne=S(t.width,t.height,r.internalFormat,r.format,i,o)}function S(t,i,r,o,a,u){e.activeTexture(e.TEXTURE0);let c=e.createTexture();e.bindTexture(e.TEXTURE_2D,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,u),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,t,i,0,o,a,null);let v=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,v),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c,0),e.viewport(0,0,t,i),e.clear(e.COLOR_BUFFER_BIT);let f=1/t,b=1/i;return{texture:c,fbo:v,width:t,height:i,texelSizeX:f,texelSizeY:b,attach(B){return e.activeTexture(e.TEXTURE0+B),e.bindTexture(e.TEXTURE_2D,c),B}}}function $(t,i,r,o,a,u){let c=S(t,i,r,o,a,u),v=S(t,i,r,o,a,u);return{width:t,height:i,texelSizeX:c.texelSizeX,texelSizeY:c.texelSizeY,get read(){return c},set read(f){c=f},get write(){return v},set write(f){v=f},swap(){let f=c;c=v,v=f}}}function je(t,i,r,o,a,u,c){let v=S(i,r,o,a,u,c);return ue.bind(),e.uniform1i(ue.uniforms.uTexture,t.attach(0)),d(v),v}function fe(t,i,r,o,a,u,c){return t.width==i&&t.height==r||(t.read=je(t.read,i,r,o,a,u,c),t.write=S(i,r,o,a,u,c),t.width=i,t.height=r,t.texelSizeX=1/i,t.texelSizeY=1/r),t}function Je(t){let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:i,width:1,height:1,attach(a){return e.activeTexture(e.TEXTURE0+a),e.bindTexture(e.TEXTURE_2D,i),a}},o=new Image;return o.onload=()=>{r.width=o.width,r.height=o.height,e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,o)},o.src=t,r}function Qe(){let t=[];n.SHADING&&t.push("SHADING"),n.BLOOM&&t.push("BLOOM"),n.SUNRAYS&&t.push("SUNRAYS"),w.setKeywords(t)}Qe(),ve(),ge(parseInt(Math.random()*20)+5);let de=Date.now(),Y=0;me();function me(){const t=Ze();he()&&ve(),$e(t),et(),n.PAUSED||tt(t),rt(null),requestAnimationFrame(me)}function Ze(){let t=Date.now(),i=(t-de)/1e3;return i=Math.min(i,.016666),de=t,i}function he(){let t=_(l.clientWidth),i=_(l.clientHeight);return l.width!=t||l.height!=i?(l.width=t,l.height=i,!0):!1}function $e(t){Y+=t*n.COLOR_UPDATE_SPEED,Y>=1&&(Y=mt(Y,0,1),T.forEach(i=>{i.color=ee()}))}function et(){D.length>0&&ge(D.pop()),T.forEach(t=>{t.moved&&(t.moved=!1,ut(t))})}function tt(t){e.disable(e.BLEND),Z.bind(),e.uniform2f(Z.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(Z.uniforms.uVelocity,s.read.attach(0)),d(q),O.bind(),e.uniform2f(O.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(O.uniforms.uVelocity,s.read.attach(0)),e.uniform1i(O.uniforms.uCurl,q.attach(1)),e.uniform1f(O.uniforms.curl,n.CURL),e.uniform1f(O.uniforms.dt,t),d(s.write),s.swap(),Q.bind(),e.uniform2f(Q.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(Q.uniforms.uVelocity,s.read.attach(0)),d(W),j.bind(),e.uniform1i(j.uniforms.uTexture,A.read.attach(0)),e.uniform1f(j.uniforms.value,n.PRESSURE),d(A.write),A.swap(),z.bind(),e.uniform2f(z.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(z.uniforms.uDivergence,W.attach(0));for(let r=0;r<n.PRESSURE_ITERATIONS;r++)e.uniform1i(z.uniforms.uPressure,A.read.attach(1)),d(A.write),A.swap();G.bind(),e.uniform2f(G.uniforms.texelSize,s.texelSizeX,s.texelSizeY),e.uniform1i(G.uniforms.uPressure,A.read.attach(0)),e.uniform1i(G.uniforms.uVelocity,s.read.attach(1)),d(s.write),s.swap(),R.bind(),e.uniform2f(R.uniforms.texelSize,s.texelSizeX,s.texelSizeY),h.supportLinearFiltering||e.uniform2f(R.uniforms.dyeTexelSize,s.texelSizeX,s.texelSizeY);let i=s.read.attach(0);e.uniform1i(R.uniforms.uVelocity,i),e.uniform1i(R.uniforms.uSource,i),e.uniform1f(R.uniforms.dt,t),e.uniform1f(R.uniforms.dissipation,n.VELOCITY_DISSIPATION),d(s.write),s.swap(),h.supportLinearFiltering||e.uniform2f(R.uniforms.dyeTexelSize,x.texelSizeX,x.texelSizeY),e.uniform1i(R.uniforms.uVelocity,s.read.attach(0)),e.uniform1i(R.uniforms.uSource,x.read.attach(1)),e.uniform1f(R.uniforms.dissipation,n.DENSITY_DISSIPATION),d(x.write),x.swap()}function rt(t){n.BLOOM&&at(x.read,K),n.SUNRAYS&&(nt(x.read,x.write,M),ct(M,ne,1)),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND),it(t,dt(n.BACK_COLOR)),ot(t)}function it(t,i){se.bind(),e.uniform4f(se.uniforms.color,i.r,i.g,i.b,1),d(t)}function ot(t){let i=e.drawingBufferWidth,r=e.drawingBufferHeight;if(w.bind(),n.SHADING&&e.uniform2f(w.uniforms.texelSize,1/i,1/r),e.uniform1i(w.uniforms.uTexture,x.read.attach(0)),n.BLOOM){e.uniform1i(w.uniforms.uBloom,K.attach(1)),e.uniform1i(w.uniforms.uDithering,ce.attach(2));let o=ht(ce,i,r);e.uniform2f(w.uniforms.ditherScale,o.x,o.y)}n.SUNRAYS&&e.uniform1i(w.uniforms.uSunrays,M.attach(3)),d(t)}function at(t,i){if(F.length<2)return;let r=i;e.disable(e.BLEND),C.bind();let o=n.BLOOM_THRESHOLD*n.BLOOM_SOFT_KNEE+1e-4,a=n.BLOOM_THRESHOLD-o,u=o*2,c=.25/o;e.uniform3f(C.uniforms.curve,a,u,c),e.uniform1f(C.uniforms.threshold,n.BLOOM_THRESHOLD),e.uniform1i(C.uniforms.uTexture,t.attach(0)),d(r),I.bind();for(let v=0;v<F.length;v++){let f=F[v];e.uniform2f(I.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(I.uniforms.uTexture,r.attach(0)),d(f),r=f}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(let v=F.length-2;v>=0;v--){let f=F[v];e.uniform2f(I.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(I.uniforms.uTexture,r.attach(0)),e.viewport(0,0,f.width,f.height),d(f),r=f}e.disable(e.BLEND),X.bind(),e.uniform2f(X.uniforms.texelSize,r.texelSizeX,r.texelSizeY),e.uniform1i(X.uniforms.uTexture,r.attach(0)),e.uniform1f(X.uniforms.intensity,n.BLOOM_INTENSITY),d(i)}function nt(t,i,r){e.disable(e.BLEND),le.bind(),e.uniform1i(le.uniforms.uTexture,t.attach(0)),d(i),J.bind(),e.uniform1f(J.uniforms.weight,n.SUNRAYS_WEIGHT),e.uniform1i(J.uniforms.uTexture,i.attach(0)),d(r)}function ct(t,i,r){P.bind();for(let o=0;o<r;o++)e.uniform2f(P.uniforms.texelSize,t.texelSizeX,0),e.uniform1i(P.uniforms.uTexture,t.attach(0)),d(i),e.uniform2f(P.uniforms.texelSize,0,t.texelSizeY),e.uniform1i(P.uniforms.uTexture,i.attach(0)),d(t)}function ut(t){let i=t.deltaX*n.SPLAT_FORCE,r=t.deltaY*n.SPLAT_FORCE;pe(t.texcoordX,t.texcoordY,i,r,t.color)}function ge(t){for(let i=0;i<t;i++){const r=ee();r.r*=10,r.g*=10,r.b*=10;const o=Math.random(),a=Math.random(),u=1e3*(Math.random()-.5),c=1e3*(Math.random()-.5);pe(o,a,u,c,r)}}function pe(t,i,r,o,a){L.bind(),e.uniform1i(L.uniforms.uTarget,s.read.attach(0)),e.uniform1f(L.uniforms.aspectRatio,l.width/l.height),e.uniform2f(L.uniforms.point,t,i),e.uniform3f(L.uniforms.color,r,o,0),e.uniform1f(L.uniforms.radius,st(n.SPLAT_RADIUS/100)),d(s.write),s.swap(),e.uniform1i(L.uniforms.uTarget,x.read.attach(0)),e.uniform3f(L.uniforms.color,a.r,a.g,a.b),d(x.write),x.swap()}function st(t){let i=l.width/l.height;return i>1&&(t*=i),t}l.addEventListener("mousedown",t=>{let i=_(t.offsetX),r=_(t.offsetY),o=T.find(a=>a.id==-1);o==null&&(o=new N),Te(o,-1,i,r)}),l.addEventListener("mousemove",t=>{let i=T[0];if(!i.down)return;let r=_(t.offsetX),o=_(t.offsetY);xe(i,r,o)}),window.addEventListener("mouseup",()=>{Ee(T[0])}),l.addEventListener("touchstart",t=>{t.preventDefault();const i=t.targetTouches;for(;i.length>=T.length;)T.push(new N);for(let r=0;r<i.length;r++){let o=_(i[r].pageX),a=_(i[r].pageY);Te(T[r+1],i[r].identifier,o,a)}}),l.addEventListener("touchmove",t=>{t.preventDefault();const i=t.targetTouches;for(let r=0;r<i.length;r++){let o=T[r+1];if(!o.down)continue;let a=_(i[r].pageX),u=_(i[r].pageY);xe(o,a,u)}},!1),window.addEventListener("touchend",t=>{const i=t.changedTouches;for(let r=0;r<i.length;r++){let o=T.find(a=>a.id==i[r].identifier);o!=null&&Ee(o)}}),window.addEventListener("keydown",t=>{t.code==="KeyP"&&(n.PAUSED=!n.PAUSED),t.key===" "&&D.push(parseInt(Math.random()*20)+5)});function Te(t,i,r,o){t.id=i,t.down=!0,t.moved=!1,t.texcoordX=r/l.width,t.texcoordY=1-o/l.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=ee()}function xe(t,i,r){t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=i/l.width,t.texcoordY=1-r/l.height,t.deltaX=lt(t.texcoordX-t.prevTexcoordX),t.deltaY=vt(t.texcoordY-t.prevTexcoordY),t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0}function Ee(t){t.down=!1}function lt(t){let i=l.width/l.height;return i<1&&(t*=i),t}function vt(t){let i=l.width/l.height;return i>1&&(t/=i),t}function ee(){let t=ft(Math.random(),1,1);return t.r*=.15,t.g*=.15,t.b*=.15,t}function ft(t,i,r){let o,a,u,c,v,f,b,B;switch(c=Math.floor(t*6),v=t*6-c,f=r*(1-i),b=r*(1-v*i),B=r*(1-(1-v)*i),c%6){case 0:o=r,a=B,u=f;break;case 1:o=b,a=r,u=f;break;case 2:o=f,a=r,u=B;break;case 3:o=f,a=b,u=r;break;case 4:o=B,a=f,u=r;break;case 5:o=r,a=f,u=b;break}return{r:o,g:a,b:u}}function dt(t){return{r:t.r/255,g:t.g/255,b:t.b/255}}function mt(t,i,r){let o=r-i;return(t-i)%o+i}function H(t){let i=e.drawingBufferWidth/e.drawingBufferHeight;i<1&&(i=1/i);let r=Math.round(t),o=Math.round(t*i);return e.drawingBufferWidth>e.drawingBufferHeight?{width:o,height:r}:{width:r,height:o}}function ht(t,i,r){return{x:i/t.width,y:r/t.height}}function _(t){let i=window.devicePixelRatio||1;return Math.floor(t*i)}function gt(t){if(t.length==0)return 0;let i=0;for(let r=0;r<t.length;r++)i=(i<<5)-i+t.charCodeAt(r),i|=0;return i}}const _e=new Headers;_e.append("Accept","application/json");const At="/proverbs.json";async function Lt(){return await(await fetch(At,{headers:_e,mode:"cors"})).json()}const V=U=>(St("data-v-30b93cc6"),U=U(),_t(),U),wt=V(()=>E("audio",{autoplay:"",loop:""},[E("source",{src:bt})],-1)),Ut={class:"container"},Ft=V(()=>E("canvas",{id:"background"},null,-1)),Bt={class:"section section1",id:"section1"},Ot={class:"proverb-box"},Nt=V(()=>E("div",{class:"quote l-quote"},[E("h1",null,"“")],-1)),Pt={class:"proverb-content"},It={class:"proverb-signature"},Mt={key:0},Ct=V(()=>E("div",{class:"quote r-quote"},[E("h1",null,"”")],-1)),Xt=Se('<div id="arrowAnim" data-v-30b93cc6><div class="arrowSliding" data-v-30b93cc6><div class="arrow" data-v-30b93cc6></div></div><div class="arrowSliding delay1" data-v-30b93cc6><div class="arrow" data-v-30b93cc6></div></div><div class="arrowSliding delay2" data-v-30b93cc6><div class="arrow" data-v-30b93cc6></div></div><div class="arrowSliding delay3" data-v-30b93cc6><div class="arrow" data-v-30b93cc6></div></div></div>',1),zt=[Xt],Gt=Se('<section class="section section2" id="section2" data-v-30b93cc6><div class="g-glossy info-box" data-v-30b93cc6><img src="'+Dt+'" data-v-30b93cc6><h3 data-v-30b93cc6>flyinglyrics</h3><div class="info-box-description" data-v-30b93cc6><p data-v-30b93cc6>Code &amp; Music &amp; Life</p></div><div class="info-box-description" data-v-30b93cc6><p style="font-size:0.9rem;" data-v-30b93cc6><a target="_blank" href="https://www.britannica.com/technology/GIS" data-v-30b93cc6>· 3S ·</a> · Web Programming · · WebGL · · Web GIS ·  <a target="_blank" href="https://education.nationalgeographic.org/resource/taoism/" data-v-30b93cc6>Taoism</a></p></div><nav class="navi-box" data-v-30b93cc6><div class="divideLine divideLineTop" data-v-30b93cc6></div><div class="navi-box-content" data-v-30b93cc6><div class="navi-item" data-v-30b93cc6><a href="https://github.com/Flyinglyrics" target="_blank" data-v-30b93cc6><svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" data-v-30b93cc6><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" data-v-30b93cc6></path></svg><p data-v-30b93cc6>Github</p></a></div><div class="divideLine divideLineShelf" data-v-30b93cc6></div><div class="navi-item" data-v-30b93cc6><a href="/blog" data-v-30b93cc6><svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" data-v-30b93cc6><path fill="currentColor" d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24M12 3.975H9A5.025 5.025 0 0 0 3.975 9v6A5.025 5.025 0 0 0 9 20.024h6A5.025 5.025 0 0 0 20.024 15v-3.975c0-.6-.45-1.05-1.05-1.05H18a.995.995 0 0 1-.976-.976A5.025 5.025 0 0 0 12 3.973zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975z" data-v-30b93cc6></path></svg><p data-v-30b93cc6>Blog</p></a></div><div class="divideLine divideLineShelf" data-v-30b93cc6></div><div class="navi-item" data-v-30b93cc6><a href="/cesiumLab" data-v-30b93cc6><svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24" data-v-30b93cc6><g data-v-30b93cc6><title data-v-30b93cc6>Layer 1</title><g id="svg_1" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none" data-v-30b93cc6><path id="svg_2" d="m12,21.5a9.5,9.5 0 1 0 0,-19a9.5,9.5 0 0 0 0,19" data-v-30b93cc6></path><path id="svg_3" d="m5.37,5.19c4.24,1 2.25,4.72 2.19,8.5c0,4.1 3.36,1.62 3.21,3.56a12.93,12.93 0 0 0 0.83,4.24m3.14,-18.58c0,1.38 0,2.57 -0.74,2.78c-1.11,0.31 -0.28,4.23 -1,6.09c-0.72,1.86 2.53,2.5 4,1c1.47,-1.5 0.39,-2.78 2,-2.78c0.57,0 1.44,0.1 2.32,0.13" data-v-30b93cc6></path></g><path stroke="null" id="svg_4" d="m23.17521,21.85625l-2.61638,-5.14687l0,-2.08438l0.26471,0c0.14559,0 0.26471,-0.14063 0.26471,-0.3125s-0.11912,-0.3125 -0.26471,-0.3125l-2.64709,0c-0.14559,0 -0.26471,0.14063 -0.26471,0.3125s0.11912,0.3125 0.26471,0.3125l0.26471,0l0,2.08438l-2.61638,5.14687c-0.5993,1.17875 -0.13659,2.14375 1.02813,2.14375l5.29417,0c1.16472,0 1.62743,-0.96438 1.02813,-2.14375m-5.91677,-1.60625l1.71214,-3.36875l0,-2.25625l1.05883,0l0,2.25625l1.71214,3.36875l-4.4831,0z" fill="currentColor" data-v-30b93cc6></path></g></svg><p data-v-30b93cc6>Cesium Lab</p></a></div></div><div class="divideLine divideLineBottom" data-v-30b93cc6></div></nav></div></section>',1),Yt={__name:"Homepage",setup(U){const l=Tt({content:"",signature:{author:"",composition:""}});Lt().then(T=>{let D=Math.floor(Math.random()*T.proverbs.length),e=T.proverbs[D];l.content=e.content,l.signature.author=e.signature.author,l.signature.composition=e.signature.composition?e.signature.composition:""});const n=xt(!0);function N(){n.value=!1}return Et(()=>{yt("background"),document.querySelector(".container").addEventListener("mousewheel",function(D){let e=!0,h=document.querySelector("#section1"),k=document.querySelector("#section2");e&&(e=!1,D.wheelDelta>0?(h.scrollIntoView({behavior:"smooth"}),n.value=!0):(k.scrollIntoView({behavior:"smooth"}),n.value=!1),setTimeout(function(){e=!0},500))})}),(T,D)=>(te(),re(Rt,null,[wt,E("main",Ut,[Ft,E("section",Bt,[E("div",Ot,[Nt,E("div",Pt,[E("h2",null,"  "+ie(l.content)+"  ",1),E("div",It,[E("h3",null,[E("span",null,ie(l.signature.author),1),l.signature.composition?(te(),re("span",Mt," —— "+ie(l.signature.composition),1)):Re("",!0)])])]),Ct]),E("footer",null,[n.value?(te(),re("a",{key:0,href:"#section2",onClick:N},zt)):Re("",!0)])]),Gt])],64))}},Vt=pt(Yt,[["__scopeId","data-v-30b93cc6"]]);export{Vt as default};
