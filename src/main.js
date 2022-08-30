import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import VueYoutube from 'vue-youtube'
import VueRouter from 'vue-router'
import { routes } from './routes';



Vue.use(VueYoutube)
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
