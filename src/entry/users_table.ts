import Vue from 'vue'
import UsersTable from '../components/UsersTable.vue'
import store from '../store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(UsersTable),
}).$mount('#users_info')
