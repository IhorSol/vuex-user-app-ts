<template lang="html">
  <div id="users_info">
    <h2>Users table</h2>

    <label>Filter by status</label>
    <select v-model="userStatus">
      <option value="all">all</option>
      <option value="online">online</option>
      <option value="offline">offline</option>
      <option value="pending">pending</option>
    </select>
    <button @click="resetStatusFilter">Reset Filter</button>

  <br>
  <label>Search: </label>
  <input type="text" v-model="searchString" placeholder="search"><br>


  <table>
    <tr>
      <th>User name <i class="fas fa-arrow-down" @click="sortNameDescOrder"></i> <i class="fas fa-arrow-up" @click="sortNameAscOrder"></i></th>
      <th>User Surname <i class="fas fa-arrow-down" @click="sortSurnameDescOrder"></i> <i class="fas fa-arrow-up" @click="sortSurnameAscOrder"></i></th>
      <th>Age <i class="fas fa-arrow-down" @click="sortAgeDescOrder"></i> <i class="fas fa-arrow-up" @click="sortAgeAscOrder"></i></th>
      <th>Phone <i class="fas fa-arrow-down" @click="sortPhoneDescOrder"></i> <i class="fas fa-arrow-up" @click="sortPhoneAscOrder"></i></th>
      <th>Email <i class="fas fa-arrow-down" @click="sortEmailDescOrder"></i> <i class="fas fa-arrow-up" @click="sortEmailAscOrder"></i></th>
      <th>Status <i class="fas fa-arrow-down" @click="sortStatusDescOrder"></i> <i class="fas fa-arrow-up" @click="sortStatusAscOrder"></i></th>
    </tr>
    <tr v-for="(user, index) in filterByStatus()(`${userStatus}`, `${searchString}`)" :key="index">
      <td>{{ user.name }}</td>
      <td>{{ user.surname }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.phone }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.status }}</td>
    </tr>
  </table> <br>

    <button><a href="main_page">Go to form page</a></button><br><br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";

export default Vue.extend({
  name: 'UserTable',
  data: function(){
    return {
      userStatus: 'all',
      searchString: '',
      testUser: {
        name: 'Ihor',
        surname: 'Solohub',
        age: 30,
        phone: 123456789,
        email: 'ihor@email.com',
        status: 'online'}
    }
  },
  methods: {
    ...mapGetters(['sortAgeDescOrder', 'sortAgeAscOrder', 'sortNameAscOrder', 'sortNameDescOrder', 'sortSurnameAscOrder', 'sortSurnameDescOrder', 'sortStatusDescOrder', 'sortStatusAscOrder', 'sortPhoneAscOrder', 'sortPhoneDescOrder', 'sortEmailAscOrder', 'sortEmailDescOrder','filterByStatus','liveSearchName', 'globalLiveSearch' ]),
    resetStatusFilter: function() {
      this.userStatus = 'all'
    }
  },
  computed: {
    // ...mapGetters(['getAllUsers']) // 'filterByStatus'
  }
})
</script>

<style lang="css" scoped>
table, td, th {
  border: 1px solid silver
}
table {
  margin-left: auto;
  margin-right: auto;
}
#users_info {
  text-align: center;
}
a, a:hover {
  text-decoration: none;
  cursor: default;
  color: black;
}
i:hover {
  cursor: pointer;
}
</style>
