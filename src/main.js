import Vue from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios"
import axios from 'axios'
import VueRouter from "vue-router"
import VueSweetalert2 from "vue-sweetalert2"
import 'sweetalert2/dist/sweetalert2.min.css';
import VueAuth from '@websanova/vue-auth'
import auth from './auth'
import CryptoJS from 'crypto-js/aes'

import { routes } from './routes'
import commons from "./mixins/commons";

import "chart.js";
import "hchs-vue-charts";
import user from "./mixins/user";
Vue.use(window.VueCharts);

import FullCalendar from 'vue-full-calendar'
Vue.use(FullCalendar)

const router = new VueRouter({
  mode: 'history',
  routes
});

// axios.defaults.baseURL = 'StudentService/rest/';
Vue.router = router

Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(VueAuth, auth)
Vue.use(CryptoJS)
Vue.mixin(commons)
Vue.mixin(user)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
