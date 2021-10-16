<template>
  <div id="__Layout">
    <section class="Layout">
      <MobileHeader />
      <Sidebar />
      <section class='Layout-Page'>
        <slot />
      </section>
    </section>
  </div>
</template>
<script>
export default{
  name: 'Layout'
}
</script>
<style lang="scss">
.Layout {
  height: 100%;
  aside {
    position: fixed;
    width: 160px;
    left: -20px;
    top: 0;
    bottom: 0;
    padding: 0 0 0 20px;
    background-color: #fff;
    overflow: auto;
    z-index: 11;
    transform: translate(-100%);
  }
  h1 {
    opacity: 0;
    font-family: var(--font);
    font-size: 24px;
    font-weight: 600;
    font-style: normal;
    line-height: 1.2em;
    color: #333;
    letter-spacing: 0;
    text-align: center;
    display: block;
    margin: 0 auto;
  }
}
</style>
