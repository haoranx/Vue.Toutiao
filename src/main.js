// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'

import store from './store/index.js'

import axios from 'axios'
import 'iview/dist/styles/iview.css'
import VueLazyload from 'vue-lazyload'

Vue.use(iView)

Vue.use(VueLazyload, {
  error: '/src/assets/img/loading.gif',
  loading: '/src/assets/img/loading.gif',
  preLoad: 1,
  attempt: 1
})


Vue.config.productionTip = false

axios.defaults.timeout = 8000;
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.withCredentials = true
Vue.prototype.$http = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App },
  render: h => h(App)
})
