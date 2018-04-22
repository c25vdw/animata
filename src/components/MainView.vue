<template>
  <div class="site-main" v-if="skipped">
    <div class="intro">
      <h1 id="name-1">Lucas_</h1><h1 id="name-2">Zeng</h1><br>
      <small id="slogan">non-stop messing around.</small>
      <br><br>
      <site-nav/>
    </div>
  </div>
</template>

<script>
import SiteNav from './Nav/Navigation.vue'

export default {
  name: 'MainView',
  props: ['skipped'],
  components: {
      SiteNav,
  },
}
</script>

<style lang="less" scoped>
.site-main {
  margin:0;
  animation: appear 1s ease;
  .intro {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      display: inline-block;
      margin: 0;
      font-size: 80px;
      position: relative;
      &#name-1 {
        top: 0; left: 0;
        animation: popleft 1s ease;
      }
      &#name-2 {
        top: 0; right: 0;
        animation: popright 1s ease;
      }
    }
  }
  }
@keyframes appear{
    0%   { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes popleft {
    0%   { transform: rotate(-90deg); left: -120px; top: -100px;}
    100% { transform: rotate(0);}
}
@keyframes popright {
    0%   { transform: rotate(90deg); right: -120px; top: -100px;}
    100% { transform: rotate(0);}
}
</style>

