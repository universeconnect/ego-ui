// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import Element from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import store from '../store'


Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.use(VueCookies);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
