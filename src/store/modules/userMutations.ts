import { MutationTree } from 'vuex';
import { RootState, User } from '../rootState';
import { Module } from 'vuex';

const mutations: MutationTree<any> = {
  // add new user to root state in users[]
    insertUser: function (state, data) {
      let userToAdd: User = data.user;
      data.root.users.push(userToAdd);
    }
}

export const mutationsModule: Module<any, RootState> = {
  mutations
}
