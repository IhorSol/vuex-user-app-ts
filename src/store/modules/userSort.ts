import { GetterTree } from 'vuex';
import { RootState } from '../rootState';
import { Module } from 'vuex';

const getters: GetterTree<any, RootState> = {
  // --------------SORTING BY AGE --------- //
  //sorting by age ascending
  sortAgeAscOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){return a.age - b.age})
  },
  //sorting by age descending
  sortAgeDescOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){return b.age - a.age})
  },
  // --------------SORTING NAME --------- //
  //sorting by name ascending
  sortNameAscOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  },
  //sorting by name descending
  sortNameDescOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x > y) {return -1;}
      if (x < y) {return 1;}
      return 0;
    })
  },
  // -------------- SORTING SURNAME --------- //
  //sorting by surname ascending
  sortSurnameAscOrder: function(state, getters, rootState: RootState) {
  return rootState.users.sort(function(a, b){
      let x = a.surname.toLowerCase();
      let y = b.surname.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  },
  //sorting by surname descending
  sortSurnameDescOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){
      let x = a.surname.toLowerCase();
      let y = b.surname.toLowerCase();
      if (x > y) {return -1;}
      if (x < y) {return 1;}
      return 0;
    })
  },
  // --------------SORTING STATUS --------- //
  //sorting by status ascending
  sortStatusAscOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){
      let x = a.status.toLowerCase();
      let y = b.status.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  },
  //sorting by status descending
  sortStatusDescOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){
      let x = a.status.toLowerCase();
      let y = b.status.toLowerCase();
      if (x > y) {return -1;}
      if (x < y) {return 1;}
      return 0;
    })
  },
  // --------------SORTING PHONE --------- //
  //sorting by phone ascending
  sortPhoneAscOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){return parseInt(a.phone) - parseInt(b.phone)})
  },
  //sorting by phone descending
  sortPhoneDescOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){return parseInt(b.phone) - parseInt(a.phone)})
  },
  // --------------SORTING EMAIL --------- //
  //sorting by email ascending
  sortEmailAscOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){
      let x = a.email.toLowerCase();
      let y = b.email.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  },
  //sorting by email descending
  sortEmailDescOrder: function(state, getters, rootState: RootState) {
    return rootState.users.sort(function(a, b){
      let x = a.email.toLowerCase();
      let y = b.email.toLowerCase();
      if (x > y) {return -1;}
      if (x < y) {return 1;}
      return 0;
    })
  }
}

export const sortModule: Module<any, RootState> = {
  getters
}
