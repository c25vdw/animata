<template>
  <div id="home-root">
  <!-- <happy-birthday :skipped="skipped"></happy-birthday> -->
  <HomeContent :skipped="skipped"></HomeContent>
  </div>
</template>

<script>
import HomeContent from '@/components/home/HomeContent'
// import Happybday from './Happybday.vue'

export default {
  components: {
    HomeContent,
    // 'happy-birthday': Happybday,
  },
  data() {
    return {
      skipped: true,
    }
  },
  mounted() {
    // this.showMainAfterAnimation(8000) // after 4000 miliseconds then sohw the main view
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
