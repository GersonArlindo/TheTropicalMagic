import router from './router'
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
