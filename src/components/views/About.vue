<template>
  <div class="about content">
      <div class="about-title"><h1>About me.</h1></div>
      <div class="about-intro">
          <h2>Who I am</h2>
<pre>
A student @University of Alberta, majoring in Computer Engineering.
 
Lucas is not my formal name. I'm also Zichang Zeng, 曾子畅.
I love programming, and Javascript especially(for now). I was deeply
touched by how Vue.js works and how people work with it.

</pre>
      </div>
      <site-nav/>
  </div>
</template>

<script>
import SiteNav from '@/components/Nav'
export default {
  components: { SiteNav }
}
</script>
<style lang="less" scoped>
@import "../../less/content";
@import "../../less/keyframes";

</style>
