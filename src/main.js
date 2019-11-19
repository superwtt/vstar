import Vue from 'vue'
import App from './App.vue'

import "../src/assets/font/iconfont.css"

import '../src/assets/font/iconfont.js'

import vstar from './lib/vstar'

Vue.use(vstar)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
