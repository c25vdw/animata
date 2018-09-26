<template>
  <div class="home-content content" v-if="skipped">
    <div class="title">
      <h1 id="name-1">Lucas_</h1><h1 id="name-2">Zeng</h1>
    </div>
      <small id="slogan">non-stop messing around.</small>
      <br><br>
      <site-nav/>
  </div>
</template>

<script>
import SiteNav from '@/components/Nav'

export default {
  name: 'MainView',
  props: ['skipped'],
  components: {
      SiteNav,
  },
}
</script>

<style lang="less" scoped>
@import "../../less/content";
@import "../../less/keyframes";
.home-content {
  div.title {
    width: 100%;
    height: auto;
    text-align: center;
  }
  h1 {
    display: inline-block;
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

  small {
    font-size: 18px;
    transform: translate(-10px, 10px);
  }
}
</style>

