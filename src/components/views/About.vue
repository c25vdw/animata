<template>
  <div class="about">
      <div class="title"><h1>About me.</h1></div>
      <br> <br> 
      <div class="content">
          <h2>Who I am</h2>
<pre>
A student @University of Alberta, majoring in Computer Engineering.

Lucas is not my formal name. I'm also Zichang Zeng, 曾子畅, a Chinese.
I love programming, and Javascript especially(for now). I was deeply
touched by how Vue.js works and how people work with it.

</pre>
      </div>
      <site-nav/>
  </div>
</template>

<script>
import SiteNav from '../Nav/Navigation.vue'
export default {
  components: { SiteNav }
}
</script>
<style lang="less" scoped>
* {
    margin: 0;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    strong {
        display: inline-block;
    }
    .about {
        animation: appear 1s ease;
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 900px;
        text-align: center;
        transform: translate(-50%, -50%);
        margin: auto;
        h1 {
            font-size: 50px;
        }
        pre {
            white-space: pre-wrap;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

    }
}
@keyframes appear {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}
</style>
