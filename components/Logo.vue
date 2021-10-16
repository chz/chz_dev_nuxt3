<template>
  <div class='Logo' @click.prevent='goHome'>
    <svg class='Logo-Svg' viewBox="0 0 600 659">
      <path class='Logo-Svg-Part' d="M449 411V247L298.5 330L150 247.5V415L299 491L449 411Z"/>
      <path class='Logo-Svg-Main' d="M598.5 165.5L298.5 0L-2.53618e-05 164.5V334L150 416V248.5L298.5 331L449 248V412L598.5 331.5V165.5Z"/>
    </svg>
  </div>
</template>
<script setup>
  const router = useRouter()
  function goHome(){
    router.push('/')
  }
</script>
<script>
export default {
  name: 'Logo',
  methods: {
    async goHome(){
      await this.$router.push('/')
    }
  }
}
</script>
<style lang='scss'>
.Logo {
  cursor: pointer;
  width: 80px;
  height: 80px;
  position: relative;
  margin:30px auto;
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    color: var(--logo-color);
    transition: all 0.3s ease;
  }
}
</style>
