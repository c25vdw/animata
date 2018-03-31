<template>
  <div class="site-main" :class="'{is-active: !skipped}'">
    <site-nav @hoverLink="test(str)"/>
    <h1>asdfsfas</h1>
  </div>
</template>

<script>
import SiteNav from './views/Navigation.vue'

export default {
  name: 'MainView',
  components: {
      SiteNav,
  },
  methods: {
    test(str) {
      console.log(str)
    }
  }
}
</script>

<style lang="less" scoped>
.site-main {
  transition: 3s;
  & .is-active {
      opacity: 0;
      animation: appear 0.5s ease 9.2s forwards;
  }
  }
@keyframes appear{
    0%   { opacity: 0; }
    100% { opacity: 1; }
}
</style>

