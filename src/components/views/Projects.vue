<template>
  <div class="projects content">
      <div class="title"><h1>Projects</h1></div>
      <div class="projects-content">
                <!-- <li>
                  <a href="https://github.com/LucasZeng99/vanilla-todo" target="_blank" class="github-link">Todo-list -desktop todo app<img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
                <li>
                  <a href="https://github.com/LucasZeng99/blug" target="_blank" class="github-link">Blug -blog generator<img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
                <li>
                  <a href="http://calculator.lucaszzc.com" target="_blank" class="project-link">Calculator</a>
                  <a href="https://github.com/LucasZeng99/vue-simple-calculator" target="_blank" class="github-link"><img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
                <li>
                  <a href="http://chatroom.lucaszzc.com" target="_blank" class="project-link">Chatroom</a>
                  <a href="https://github.com/LucasZeng99/chatroom" target="_blank" class="github-link"><img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
                <li>
                  <a href="http://weather.lucaszzc.com" target="_blank" class="project-link">Weather Panel</a>
                  <a href="https://github.com/LucasZeng99/vue-weather-panel" target="_blank" class="github-link"><img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li> -->
        <el-carousel height="300px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
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
