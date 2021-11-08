import { MutationTree } from 'vuex';
import { RootState, User } from '../rootState';
import { Module } from 'vuex';

const mutations: MutationTree<any> = {
  // add new user to root state in users[]
    insertUser: function (state, data) {
      data.root.users.push(data.user)
    }
}

export const mutationsModule: Module<any, RootState> = {
  mutations
}
