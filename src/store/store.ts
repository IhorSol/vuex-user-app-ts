import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import VuexPersistence from 'vuex-persist'
import { RootState } from './rootState'
import { sortModule } from './modules/userSort'
import { filterModule } from './modules/userFilter'
import { actionsModule } from './modules/userActions'
import { mutationsModule } from './modules/userMutations'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

const store: StoreOptions<RootState> = {
  state: {
    users: []
  },
  getters: {
    getAllUsers: function (state) {
      return state.users
    }
  },
  modules: {
    sortModule,
    filterModule,
    actionsModule,
    mutationsModule
  },
  plugins: [vuexLocal.plugin]
}

export default new Vuex.Store<RootState>(store)
