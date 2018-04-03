<template>
  <div id="home-root">
  <button @click="skip" v-if="!skipped">Skip</button>
  <main-view :skipped="skipped"></main-view>
  </div>
</template>

<script>
import MainView from './MainView.vue'
export default {
  components: {
    'main-view': MainView,
  },
  data() {
    return {
      skipped: false,
    }
  },
  mounted() {
    this.showMainAfterAnimation()
  },
  methods: {
    showMainAfterAnimation() {
      setTimeout(() => {
        if (!this.skipped) {
        this.skipped = true
      }
      }, 9200)
      
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
