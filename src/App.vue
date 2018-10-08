<template>
  <div id="app">
    <router-view/>
    <Nav/>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
<style lang="less">
@import "./less/common.less";
html {
  font-size: 18px;
  height: 100vh;
}
#app {
  height: 100vh;
}
</style>
