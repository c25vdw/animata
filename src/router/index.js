import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import Projects from '@/components/views/Projects'
import About from '@/components/views/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})
