<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();
const path = router.currentRoute.value.fullPath;
onMounted(() => {
    // const path = router.currentRoute.value.fullPath;
})
</script>

<template>
    <div id="warpper">
        <img class="background" src="../assets/images/background.jpg" alt="">
        <section class="infor-box">
            <section class="infor-code">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect width="13" height="13" x=".5" y=".5" rx="1"/><path d="M.5 4h13M4 7l1.5 1.5L4 10m4.5-1.5h2"/></g></svg>
                <ol>
                    <li>&emsp;#&emsp;define v putchar</li>
                    <li>&emsp;#&emsp;&emsp;define print(x)<br>&emsp;main() {v(4+v(v(52)-4)); return 0}/*</li>
                    <li>&emsp;#>+++++++4+[>++++++<-]><br>&emsp;++++.----.++++.*/</li>
                    <li>&emsp;print (202*2);exit();</li>
                    <li>&emsp;#define/*>.@*/exit()</li>
                </ol>
            </section>
            <section class="infor-banner scanner">
                <h1>>&emsp;HTTPS GET “{{ path }}”;</h1>
                <h1>>&emsp;Response HTTP status : 404;</h1>
                <h1>>&emsp;print("Page Not Found");</h1>
                <h1>>&emsp;print("Wanna go back ? <a href="/home">home</a>");</h1>
            </section>
        </section>
    </div>
</template>

<style scoped>
    .warpper{
        width: 100%;
        height: 100%;
    }
    img{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    .infor-box{
        position: absolute;
        left: 30%;
        top: 30%;
        height: 40%;
        width: 40%;
        color: aliceblue;
        border-radius: 20px;
        background: rgba(255,255,255,0.05);
        overflow: hidden;
        backdrop-filter: blur(4px);
        box-shadow: inset 1px 1px 6px rgba(255,255,255,0.3),
                      2px 2px 15px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .infor-code{
        color:rgb(0, 0, 43);
        background-color: rgba(250, 235, 215, 0.45);
        font-family: Arial, Helvetica, sans-serif;
    }
    .infor-code svg{
        margin-left: 0.5em;
        margin-top: 0.5em;
    }
    .infor-code ol{
        list-style: none;
        counter-reset: li;
        border-top: 1px solid black;
        margin-top: 0;
        padding: 1rem;
    }
    .infor-code ol>li::before {
        content: counter(li);
        counter-increment: li;
        color: red;
    }
    .infor-banner {
        color:black;
        text-align: left;
        max-width: 50%;
    }
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
    .scanner h1 {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        width: 0;
        font-size: 1rem;
        --duration--time : 3s;
        animation: typing var(--duration--time) steps(30, end) forwards,
                    blink .5s infinite;;
        border-right: .15em solid rgb(0, 0, 0);
    }
    .scanner h1:nth-child(2) {
        animation-delay: calc(var(--duration--time) * 1);
    }
    .scanner h1:nth-child(3) {
        animation-delay: calc(var(--duration--time) * 2);
    }
    .scanner h1:nth-child(4) {
        animation-delay: calc(var(--duration--time) * 3);
    }
    @keyframes blink {
        from { border-color: transparent }
        to { border-color: rgb(0, 0, 0); }
    }
</style>