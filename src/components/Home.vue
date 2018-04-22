<template>
  <div id="home-root">
  <happy-birthday :skipped="skipped"></happy-birthday>
  <main-view :skipped="skipped"></main-view>
  </div>
</template>

<script>
import MainView from './MainView.vue'
import Happybday from './Happybday.vue'

export default {
  components: {
    'main-view': MainView,
    'happy-birthday': Happybday,
  },
  data() {
    return {
      skipped: false,
    }
  },
  mounted() {
    this.showMainAfterAnimation(8000) // after 4000 miliseconds then sohw the main view
  },
  methods: {
    showMainAfterAnimation(timeout) {
      setTimeout(() => {
        if (!this.skipped) {
        this.skip()
      }
      }, timeout)
    },
    skip() {
      this.skipped = true
    }
  }
}
</script>

<style lang="less" scoped>
#home-root {
  margin: 0;
  padding: 0;
  font-size: 16px; 
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 24px;
    height: 40px;
    width: 60px;
    transition: 0.6s;
    background-color: khaki;
    border: 2px solid seagreen;
    &:hover {
      background-color: indigo;
      color: #ddd;
      border: 2px solid seagreen;
    }
    display: block;
    position: absolute;
    top: 60px;
    right: 20px;
  }
}


</style>
