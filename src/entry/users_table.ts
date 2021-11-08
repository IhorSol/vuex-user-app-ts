import Vue from 'vue'
import UsersTable from '../components/UsersTable.vue'
import store from '../store/store'

Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(UsersTable),
}).$mount('#users_info')
