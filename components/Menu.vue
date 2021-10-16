<template>
  <nav class="chz-menu">
    <ul>
      <li><nuxt-link to='/' exact>Home</nuxt-link></li>
<!--      <li><nuxt-link to='/about' exact>About</nuxt-link></li>-->
<!--      <li><nuxt-link to='/resume' exact>Resume</nuxt-link></li>-->
<!--      <li><nuxt-link to='/portfolio'>Portfolio</nuxt-link></li>-->
<!--      <li><nuxt-link to='/contact' exact>Contact</nuxt-link></li>-->
    </ul>
  </nav>
</template>
<style lang="scss">
.chz-menu {
  display: block;
  padding: 25px 0 40px;
  margin:0;
  border:0;
  background: none;
  ul {
    list-style: none;
    margin:0;
    padding:0;
    li {
      display: block;
      position: relative;
      padding: 0;
      text-align: center;
      &:first-child {
        a {
          border-top: 1px solid #f5f5f5;
        }
      }
      a {
        &.nuxt-link-active {
          background: #fcfcfc;
          &:after {
            background-color: var(--green);
          }
        }
        &:after {
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          content: "";
          width: 2px;
          height: 100%;
          margin: 0 auto;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          -webkit-transition: all .18s ease-out;
          transition: all .18s ease-out;
        }
        &:hover {
          background-color: #fcfcfc;
          color: inherit;
        }
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        line-height: 1.85em;
        color: #333;
        letter-spacing: 0;
        display: block;
        padding: 10px 20px;
        text-align: center;
        position: relative;
        text-decoration: none;
        border-bottom: 1px solid #f5f5f5;
        outline: none;
      }
    }
  }

}
</style>
