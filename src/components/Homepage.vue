<script setup>
    import { onMounted, reactive, ref } from 'vue';
    import { fluidSimulation } from '../assets/js/background.js';
    import fetchProverb from '../assets/js/loadProverbs.js'

    const proverb = reactive({
        content:"",
        signature:{
            author: "",
            composition : ""
        }
    })
    fetchProverb().then(json => {
        let random = Math.floor(Math.random() * json.proverbs.length);
        let proverb_fetch = json.proverbs[random];
        proverb.content = proverb_fetch.content;
        proverb.signature.author = proverb_fetch.signature.author;
        proverb.signature.composition = proverb_fetch.signature.composition ? proverb_fetch.signature.composition : "";
    });
    const arrow = ref(true);
    function shutArrow() {
        arrow.value = false;
    }
    onMounted(() => {
        fluidSimulation("background");
        let container = document.querySelector('.container');
        container.addEventListener('mousewheel',function (e) {
            let flag = true;
            let section1 = document.querySelector('#section1');
            let section2 = document.querySelector('#section2');
            if (flag) {  //throttle
                flag = false
                if (e.wheelDelta > 0) {
                    section1.scrollIntoView({behavior: "smooth"});
                    arrow.value = true;
                } else {
                    section2.scrollIntoView({behavior: "smooth"});
                    arrow.value = false;
                }
                setTimeout(function () {
                    flag = true
                }, 500)
            }
        })
    })
</script>

<template>
    <audio autoplay loop><source src="/media/homepage_background.mp3" /></audio>
    <main class="container">
        <canvas id="background"></canvas>
        <section class="section section1" id="section1">
            <div class="proverb-box">
                <div class="quote l-quote"><h1>“</h1></div>
                <div class="proverb-content">
                    <h2>&emsp;&emsp;{{ proverb.content }}&emsp;&emsp;</h2>
                    <div class="proverb-signature">
                        <h3>
                            <span>{{ proverb.signature.author }}</span>
                            <span v-if="proverb.signature.composition">  —— {{ proverb.signature.composition }}</span>
                        </h3>
                    </div>
                </div>
                <div class="quote r-quote"><h1>”</h1></div>
            </div>
            <footer>
                <a href="#section2" v-if="arrow" @click="shutArrow">
                    <div id="arrowAnim">
                        <div class="arrowSliding">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay1">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay2">
                            <div class="arrow"></div>
                        </div>
                        <div class="arrowSliding delay3">
                            <div class="arrow"></div>
                        </div>
                    </div>
                </a>
            </footer>
        </section>
        <section class= "section section2" id="section2">
            <div class="g-glossy info-box">
                <img src="/images/profile.png" />
                <h3>flyinglyrics</h3>
                <div class="info-box-description">
                    <p>Code & Music & Life</p>
                </div>
                <div class="info-box-description">
                    <p style="font-size: 0.9rem;"><a target="_blank" href="https://www.britannica.com/technology/GIS">· 3S ·</a>&emsp;· Web Programming ·&emsp;· WebGL ·&emsp;· Web GIS · &emsp;<a target="_blank" href="https://education.nationalgeographic.org/resource/taoism/">Taoism</a></p>
                </div>
                <nav class="navi-box">
                    <div class="divideLine divideLineTop"></div>
                    <div class="navi-box-content">
                        <div class="navi-item">
                            <a href="https://github.com/Flyinglyrics" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                                <p>Github</p>
                            </a>
                        </div>
                        <div class="divideLine divideLineShelf"></div>
                        <div class="navi-item">
                            <a href="/blog">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24M12 3.975H9A5.025 5.025 0 0 0 3.975 9v6A5.025 5.025 0 0 0 9 20.024h6A5.025 5.025 0 0 0 20.024 15v-3.975c0-.6-.45-1.05-1.05-1.05H18a.995.995 0 0 1-.976-.976A5.025 5.025 0 0 0 12 3.973zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975z"/></svg>
                                <p>Blog</p>
                            </a>
                        </div>
                        <div class="divideLine divideLineShelf"></div>
                        <div class="navi-item">
                            <a href="/cesiumLab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><g><title>Layer 1</title><g id="svg_1" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" fill="none"><path id="svg_2" d="m12,21.5a9.5,9.5 0 1 0 0,-19a9.5,9.5 0 0 0 0,19"/><path id="svg_3" d="m5.37,5.19c4.24,1 2.25,4.72 2.19,8.5c0,4.1 3.36,1.62 3.21,3.56a12.93,12.93 0 0 0 0.83,4.24m3.14,-18.58c0,1.38 0,2.57 -0.74,2.78c-1.11,0.31 -0.28,4.23 -1,6.09c-0.72,1.86 2.53,2.5 4,1c1.47,-1.5 0.39,-2.78 2,-2.78c0.57,0 1.44,0.1 2.32,0.13"/></g><path stroke="null" id="svg_4" d="m23.17521,21.85625l-2.61638,-5.14687l0,-2.08438l0.26471,0c0.14559,0 0.26471,-0.14063 0.26471,-0.3125s-0.11912,-0.3125 -0.26471,-0.3125l-2.64709,0c-0.14559,0 -0.26471,0.14063 -0.26471,0.3125s0.11912,0.3125 0.26471,0.3125l0.26471,0l0,2.08438l-2.61638,5.14687c-0.5993,1.17875 -0.13659,2.14375 1.02813,2.14375l5.29417,0c1.16472,0 1.62743,-0.96438 1.02813,-2.14375m-5.91677,-1.60625l1.71214,-3.36875l0,-2.25625l1.05883,0l0,2.25625l1.71214,3.36875l-4.4831,0z" fill="currentColor"/></g></svg>
                                <p>Cesium Lab</p>
                            </a>
                        </div>
                    </div>
                    <div class="divideLine divideLineBottom"></div>
                </nav>
            </div>
        </section>
    </main>
</template>

<style scoped>
:root{
    --nav-numbers: 3;
}
main {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.container {
    width: 100%;
    height: 200%;
    position: absolute;
    top: 0;
}
canvas{
    width: 100%;
    height: 100%;
}
#background{
    position:absolute;
    z-index: 0;
}
section {
    width: 100%;
    height: 50%;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content:start;
    align-items:center;
}

section >footer{
    width: 5%;
    height: 10%;
}
.proverb-box{
    height: 90%;
    width: 40%;
    color: aliceblue;
    font-family: Centaur,"Comic sans MS",cursive,sans-serif, Kaiti,"楷体",STXihei, "华文细黑";
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
    pointer-events: none;
    animation: pbin 0.7s ease-in 0.2s backwards;
}
@-webkit-keyframes pbin{
    0% {opacity: 0;}
    100% { opacity: 1;}
}
@keyframes pbin {
    0% {opacity: 0;}
    100% { opacity: 1;}
}
.proverb-content {
    text-align: left;
    font-family: cursive,;
}
.proverb-signature {
    text-align: right;
}
@font-face {
            font-family: "Caveat";
            src: url('/font/Caveat-Regular.ttf') format('truetype');
}
.quote {
        font-family: "Caveat";
        font-weight: 900;
}
.l-quote {
    text-align: center;
    margin-right: 1rem;
}
.r-quote {
    margin-left: 1rem;
    text-align: center;
}
#arrowAnim {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  pointer-events: all;
}
.arrow {
  width: 0.5vw;
  height: 0.5vw;
  border: 0.25vw solid;
  border-color: rgb(255, 255, 255) transparent transparent rgb(255, 255, 255);
  transform: rotate(-135deg);
  pointer-events: all;
}
.arrowSliding {
  position: absolute;
  -webkit-animation: slide 0.8s linear infinite; 
          animation: slide 0.8s linear infinite;
}
.delay1 {
  -webkit-animation-delay: 0.5s; 
    animation-delay: 0.5s;
}
.delay2 {
  -webkit-animation-delay: 0.6s; 
    animation-delay: 0.6s;
}
.delay3 {
  -webkit-animation-delay: 0.7s; 
    animation-delay: 0.7s;
}

@-webkit-keyframes slide {
    0% { opacity:0; transform: translateY(-3vw); }	
   20% { opacity:1; transform: translateY(-1vw); }	
   80% { opacity:1; transform: translateY(1vw); }	
  100% { opacity:0; transform: translateY(3vw); }	
}
@keyframes slide {
    0% { opacity:0; transform: translateY(-3vw); }	
   20% { opacity:1; transform: translateY(-1vw); }	
   80% { opacity:1; transform: translateY(1vw); }	
  100% { opacity:0; transform: translateY(3vw); }	
}
.section2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.g-glossy {
    border-radius: 20px;
    background: rgba(255,255,255,0.05);
    overflow: hidden;
    backdrop-filter: blur(4px);
    box-shadow: inset 1px 1px 6px rgba(255,255,255,0.3),
                      2px 2px 15px rgba(0,0,0,0.3);
}
.info-box {
    position: relative;
    width: 40%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.info-box img{
    margin-top: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
}
.info-box h3{
    font-family: "Caveat";
    font-size: 1.5rem;
    height: auto;
    line-height: 0%;
}
.info-box p{
    font-family: "Comic sans MS",cursive,sans-serif, Kaiti,"楷体",STXihei, "华文细黑";
    font-size: 1.2rem;
    height: auto;
    line-height: 0%;
}
.info-box p a{
    &:link,&:visited{
        color: aliceblue;
        text-decoration: none;
    };
}
nav {
    width: 70%;
    height: 45%;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.divideLine {
    background-color: rgb(240, 248, 255,0.2);
    /* filter:blur(1.5px) */
    box-shadow: 0px 1px 2px 1px rgba(240, 248, 255,0.1),
                0px -1px 2px 1px rgba(240, 248, 255,0.1);
}
.divideLineTop{
    height: 1%;
    width: 100%;
}
.divideLineBottom {
    height: 1%;
    width: 60%;
}
.navi-box-content {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.divideLineShelf {
    width: 0.1%;
    height: 60%;
    box-shadow: 1px 0px 2px 1px rgba(255, 255, 255, 0.1),
                -1px 0px 2px 1px rgba(240, 248, 255,0.1);
}
.navi-item {
    width: calc(100% / --nav-numbers);
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.navi-item a {
    width: 100%;
    text-decoration: none;
    color: aliceblue;

    &:focus{
        color: aliceblue;
    }
    &:active{
        color: aliceblue;
        background: rgba(255,255,255,0.09);
        backdrop-filter: blur(4px);
        box-shadow: inset 1px 1px 6px rgba(255,255,255,0.3),
                        2px 2px 15px rgba(0,0,0,0.3);
    }
}
</style>