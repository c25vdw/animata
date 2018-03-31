<template>
  <div class="site-main" :class="'{is-active: !skipped}'">
    
    <div class="intro">
      <h1>Lucas Zeng</h1>
      <small>non-stop messing around.</small>
      <br><br>
      <site-nav/>
    </div>
  </div>
</template>

<script>
import SiteNav from './Nav/Navigation.vue'

export default {
  name: 'MainView',
  components: {
      SiteNav,
  },
}
</script>

<style lang="less" scoped>
.site-main {
  margin:0;
  transition: 3s;
  & .is-active {
      opacity: 0;
      animation: appear 0.5s ease 9.2s forwards;
  }

  .intro {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      margin: 0;
      font-size: 80px;
    }
  }
  }
@keyframes appear{
    0%   { opacity: 0; }
    100% { opacity: 1; }
}
</style>

