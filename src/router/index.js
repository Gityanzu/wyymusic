import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home/Home.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue'
import Topic from '../views/Topic.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/mine',
        name: 'Mine',
        component: Mine
      },
      {
        path: '/search',
        name: 'Search',
        component: Search
      },
      {
        path: '/topic',
        name: 'Topic',
        component: Topic
      }
    ]
  },
  {
    path: '/details/:id',
    name: 'SongListDetails',
    props: true,
    component: () => import('../views/Home/SongListDetails.vue')
  },
  {
    path: '/music/:id/:name/:image',
    name: 'MusicPlay',
    props: true,
    component: () => import('../views/Home/MusicPlay.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router