import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'
//import installElementPlus from './plugins/element'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  VueMq,
  render: h => h(App)
}).$mount('#app')

Vue.use(BootstrapVue,IconsPlugin,LayoutPlugin,VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})