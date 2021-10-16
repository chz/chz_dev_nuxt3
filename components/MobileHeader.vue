<template>
  <header class='MobileHeader'>
    <Logo />
    <a href='#' class='MobileHeader-Hamburger' :class='{opened:state.sidebarOpened}' @click.prevent='sidebarToggle'>
      <span></span>
    </a>
  </header>
</template>
<script setup>
import {useState} from '#app'
const state = useState('state')
function sidebarToggle(){
  state.sidebarOpened = !state.sidebarOpened
}
</script>
<style lang='scss'>
.MobileHeader {
  display: none;
  &-Hamburger {
    position: absolute;
    left:15px;
    top:50%;
    transform: translateY(-50%);
    width: 18px;
    height: 20px;
    &.opened {
      span {
        transform: translateX(100%);
        opacity: 0;
      }
      &:before {
        transform: translateY(7px) rotate(45deg);
      }
      &:after {
        transform: translateY(-6px) rotate(-45deg);
      }
    }
    span {
      transition: all 0.3s ease-in-out;
      position: absolute;
      left:0;
      top:50%;
      transform: translateY(-50%);
      width: 100%;
      height: 3px;
      background: #000;
    }
    &:before {
      transition: all 0.3s ease-in-out;
      transform-origin: center;
      content:'';
      position: absolute;
      left:0;
      top:2px;
      width: 100%;
      height: 3px;
      background: #000;
    }
    &:after {
      transition: all 0.3s ease-in-out;
      transform-origin: center;
      content:'';
      position: absolute;
      left:0;
      bottom:2px;
      width: 100%;
      height: 3px;
      background: #000;
    }
  }
}
</style>
