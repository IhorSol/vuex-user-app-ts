import { ActionTree } from 'vuex';
import { RootState, User } from '../rootState';
import { Module } from 'vuex';

const actions: ActionTree<any, RootState> = {
  // commit mutation 'insertUser' to add new user. Info from form
    addUser: function(ctx, user: User) {
      ctx.commit('insertUser', {user: user, root: ctx.rootState})
    }
}

export const actionsModule: Module<any, RootState> = {
  actions
}
