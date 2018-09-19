<template>
  <div class="projects">
      <div class="title"><h1>Projects</h1></div>
      <div class="content">
          <ul class="project-list">
                <li>
                  <a href="http://calculator.lucaszzc.com" target="_blank" class="project-link">Calculator</a>
                  <a href="https://github.com/LucasZeng99/vue-simple-calculator" target="_blank" class="github-link"><img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
                <li>
                  <a href="http://chatroom.lucaszzc.com" target="_blank" class="project-link">Chatroom</a>
                  <a href="https://github.com/LucasZeng99/chatroom" target="_blank" class="github-link"><img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
                <li>
                  <a href="https://github.com/LucasZeng99/blug" target="_blank" class="github-link">Blug -blog generator<img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
                <li>
                  <a href="https://github.com/LucasZeng99/vanilla-todo" target="_blank" class="github-link">Todo-list -desktop todo app<img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
                <li>
                  <a href="http://weather.lucaszzc.com" target="_blank" class="project-link">Weather Panel</a>
                  <a href="https://github.com/LucasZeng99/vue-weather-panel" target="_blank" class="github-link"><img src="/static/GitHub-Mark-64px.png"></img></a>
                  </li>
          </ul>
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
    img {
        width: 25px;
    }
    margin: 0;
    display: block;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    .projects {
        animation: appear 1s ease;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        ul {
            li {
                font-size: 24px;
                :nth-child(1) {
                    margin: 2px;
                    margin-right: 10px;
                    border: 0px;
                    &:hover {
                        margin: 0;
                        margin-right: 8px;
                        border: 2px dashed rgb(0, 85, 170);
                    }
                }
            }
            margin-bottom: 20px;
        }
        h1 {
            font-size: 40px;
            margin-bottom: 40px;
        }
        a {
            display: inline-block;
            margin-right: 20px;
            text-decoration: none;
            color: #333;
        }
    }
}
@keyframes appear {
    0%   { opacity: 0; }
    100% { opacity: 1; }
}
</style>
