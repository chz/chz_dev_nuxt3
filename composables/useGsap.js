import {useNuxtApp} from '#app'
export default function useGsap(){
  return {
    gsap: useNuxtApp().$gsap
  }
}
