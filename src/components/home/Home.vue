<template>
  <div id="home-root">
  <entry-animation v-if="!skipped"></entry-animation>
  <button @click="skip">Skip animation</button>
  <main-view v-if="skipped"></main-view>
  </div>
</template>

<script>
import EntryAnimation from './EntryAnimation.vue'
import MainView from './MainView.vue'
export default {
  components: {
    'entry-animation': EntryAnimation,
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
    height: 60px;
    width: 120px;
    display: block;
    position: absolute;
    top: 60px;
    right: 20px;
  }
}
</style>
