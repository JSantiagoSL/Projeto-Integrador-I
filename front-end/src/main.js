import Vue from 'vue'
import App from './App.vue'
// we import the vue router from our router/index.js file
import router from './router'

//importar Bootstrap Vue

import App from './App.vue'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount('#app')

/////

Vue.config.productionTip = false

new Vue({
  router, // we tell our vue instance to use this vue router
  render: h => h(App),
}).$mount('#app')