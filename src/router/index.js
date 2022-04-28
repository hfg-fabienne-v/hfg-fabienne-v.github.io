import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import work from '../views/Work.vue'
import about from '../views/AboutMe.vue'
import contact from '../views/Contact.vue'
import wiwa from '../views/Wiwa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/aboutme',
    name: 'about',
    component: about
  },
  {
    path: '/work',
    name: 'work',
    component: work
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/wiwa',
    name: 'wiwa',
    component: wiwa
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
