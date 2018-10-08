<template>
  <div class="projects">
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
        <el-carousel class="projects-carousel" height="400px" type="card" >
          <el-carousel-item 
            v-for="(item, i) in items" 
            :key="i"
          >
              <div class="item-container" :style="itemStyle(item)" >
                <!-- <img :src="'./assets/' + item.imgURL" :alt="item.imgURL"> -->
                  <h3>{{ item.name }}</h3>
                  <div class="links">
                    <a :href="item.githubLink" class="github-link"><el-button plain>Github</el-button></a>
                    <a v-if="item.demoLink" :href="item.demoLink" class="demo-link"><el-button plain>Demo</el-button></a>
                  </div>
                  <p>{{ item.intro }}</p>
              </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <site-nav/>
  </div>
</template>
<script>
import SiteNav from '@/components/Nav'
import path from 'path'
import { getProjects } from '@/components/projects/config.js'

// let items = getProjects()
// let imageUrls = items.map(x => path.resolve(__dirname, x.imgURL))

export default {
    components: { 
      SiteNav,
    },
    data () {
        return {
            items: getProjects(),
        }
    },
    methods: {
      itemStyle (item) {
        // if (item.name === 'Blug') return {
        //   backgroundImage: "url(" + require(`./assets/${item.imgURL}`) + ")"
        // }
      }
    }
}
</script>
<style lang="less" scoped>
@import "../../less/content";
@import "../../less/keyframes";
.projects {
  width: 900px; height: 100%;
  margin: auto;
  padding-top: 150px;
  text-align: center;
  animation: appear 1s forwards;
}
.projects-content {
  padding-top: 50px;
  
}
.title {
  h1 {
    font-weight: 400;
  }
}
// .el-carousel__item:nth-child(1) > div.item-container {
//   background-color: #dff;
// }
a {
  text-decoration: none;
}
.item-container {
  width: 100%; height: 100%;
  border-radius: 10px;
  position: absolute;
  div.links {
    position: absolute;
    left: 50%; bottom: 150px;
    transform: translateX(-50%);
  }
  h3 {
    position: absolute;
    top: 80px; left: 50%;
    transform: translateX(-50%); 
    font-size: 2rem;
    font-weight: 400;
    padding-bottom: 3px;
    border-bottom: solid 3px rgb(180, 106, 93);
  }
  p {
    position: absolute;
    bottom: 50px; left: 50%;
    transform: translateX(-50%);  
  }
}
.el-carousel__item {
  border-radius: 10px;
}
.el-carousel__item:nth-child(2n) {
     background-color: #22363a;
     color: #f5f3ee;
  }
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #2e3746;
    color: #f6f8ec;
}


</style>
