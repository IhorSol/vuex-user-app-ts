import { GetterTree } from 'vuex';
import { RootState, User } from '../rootState';
import { Module } from 'vuex';

const getters: GetterTree<any, RootState> =  {
    filterByStatus: (state, getters) => (userStatus: string = 'all', search: string = '') => {
    return getters.globalLiveSearch(search).filter(user => {
      if (userStatus === 'all') {
        return user
      }
      return user.status === userStatus
      })
    },
    globalLiveSearch: (state, getters, rootState: RootState) => (searchString: string = '') => {
      return rootState.users.filter(user => {
        if (searchString === '') {
          return user as User
        } else {
          for ( let val in user){
            console.log(user[val]);
            if (typeof user[val] === "string") {
              if (user[val].toLowerCase().search(searchString.toLowerCase()) > -1) {
                  return user as User
                }
            } else if (typeof user[val] === "number") {
              if (user[val].toString().search(searchString) > -1) {
                  return user as User
                }
            }
          }
        }
      })
    },
  }

  export const filterModule: Module<any, RootState> = {
    getters
  }
