import Vue from 'vue'
import MainPage from '../components/MainPage.vue'
import store from '../store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '../validation/validation';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(MainPage),
}).$mount('#main_page')
