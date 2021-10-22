<template>
  <div class='IntroPage'>
    <div id='canvas' ref='canvas' class='canvas'></div>
    <h2>
      <nuxt-link to='/about'>CHINGIZ MAMMADOV</nuxt-link>
    </h2>
    <h3>CREATIVE FRONT-END ENGINEER</h3>
    <h4>
      <nuxt-link to='/portfolio' class='IntroPage-Portfolio'>
        <span class='h-left'></span>
        <span class='text'>VIEW PORTFOLIO</span>
        <span class='h-right'></span>
        <span class='h-last'></span>
      </nuxt-link>
    </h4>
  </div>
</template>
<script>
import {useState, useNuxtApp} from "#app"
import {onBeforeMount,onBeforeUnmount, defineComponent} from 'vue'
import useGsap from "../composables/useGsap"
export default defineComponent({
  setup(){
    const state = useState('state')
    const { gsap } = useGsap()
    const VANTA = useNuxtApp().$VANTA
    let timeout = null
    onBeforeMount(()=>{
      timeout = setTimeout(()=>{
        gsap.fromTo(['.IntroPage h2','.IntroPage h3','.IntroPage-Portfolio'], {
          autoAlpha: 0,
          scale: 0.8,
          transformOrigin: 'top center -140px',
          transformPerspective: 2000,
        },{
          duration:1,
          stagger: 0.1,
          autoAlpha: 1,
          scale: 1,
          clearProps: 'all'
        })
        VANTA.DOTS({
          el: '#canvas',
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x01a093,
          color2: 0xf2956b,
          backgroundColor: 0xe8e8e8,
          size: 2.10,
          spacing: 20.00
        })
        gsap.to('#canvas', { opacity: 1, duration: 1})
      },100)
    })
    onBeforeUnmount(()=>{
      gsap.fromTo(['.IntroPage h3','.IntroPage h2'], {
        autoAlpha: 1,
        ease: "power3.inOut",
        scale: 1,
        clearProps: 'all'
      },{
        duration: 1,
        stagger: 0.2,
        autoAlpha: 0,
        scale: 0.8,
        transformOrigin: 'top center -140',
        transformPerspective: 2000,
      })
    })
    useMeta({
      title: 'CHZ.DEV - Chingiz Mammadov - Front End Engineer',
    })
    return{
      state
    }
  },
  transition:{
    leave(el, done){
      console.log('aa');
      done()
    }
  }
})
</script>
<style lang='scss' scoped>
.IntroPage {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  &-Portfolio {
    position: relative;
    display: block;
    margin: 20px 0 0 -15px;
    text-decoration: none;
    width: auto;
    height: 40px;
    line-height: 40px;
    padding: 0;
    border: 0;
    color: #fff;
    background: var(--green);
    .text {
      position: relative;
      z-index: 10;
      padding: 0 12px;
      float: right;
      font-family: var(--font);
      font-size: 16px;
      overflow: hidden;
      line-height: 40px;
      white-space: nowrap;
      display: block;
    }
    .h-right {
      width: 51px;
      height: 100%;
      position: absolute;
      top: 0;
      background:url(@/assets/img/h-left.svg) no-repeat center center;
      display: block;
      right: -15px;
      content: '';
      z-index: 2;
    }
    .h-left {
      width: 51px;
      height: 100%;
      position: absolute;
      top: 0;
      background: url(@/assets/img/h-left.svg) no-repeat center center;
      display: block;
      left: -15px;
      content: '';
      z-index: 2;
    }
    .h-last {
      width: 51px;
      height: 100%;
      position: absolute;
      top: 0;
      background: url(@/assets/img/h-last.svg) no-repeat center center;
      display: block;
      right: -23px;
      content: '';
      z-index: 1;
    }
  }
}
.canvas {
  pointer-events: none;
  position: fixed;
  z-index: -1;
  left:0;
  top:0;
  width:100%;
  height: 100%;
  background: rgb(232, 232, 232);
  opacity: 0;
}
h2 {
  position: relative;
  font-family: var(--font);
  font-weight: 400;
  margin:0 0 5px 0;
  cursor: pointer;
  user-select: none;
  font-size: 34px;
  text-align: center;
  a {
    font-family: var(--font);
    display: block;
    color: var(--green);
    text-decoration: none;
    transition: color 0.5s ease;
    padding: 5px;
  }
  &:after{
    content:'';
    position: absolute;
    left:0;
    top:0;
    background: #f2956b;
    width: 0;
    height: 100%;
    opacity: 0;
    transition: all 0.5s ease;
    z-index:-1
  }
  &:hover {
    a {
      color: #fff;
    }
    &:after {
      opacity: 1;
      width: 100%;
    }
  }
}
h3 {
  font-family: var(--font);
  margin:0;
  text-align: center;
  font-size: 26px;
}
@media only screen and (max-width: 767px) {
  h2 {
    font-size: 24px;
    a {
      padding:5px;
    }
  }
  h3 {
    font-size: 20px;
  }
}
</style>
