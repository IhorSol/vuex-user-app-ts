<template lang="html">
  <div id="users_info">
    <h2 class="text-center p-2 text-primary">Users table</h2>

    <div class="input-fields p-3">

      <b-form-input type="text" v-model="searchString" placeholder="search in table"></b-form-input>
      <label class="ms-1">Filter by status</label>
      <select class="form-control" v-model="userStatus" >
        <option value="all">all</option>
        <option value="online">online</option>
        <option value="offline">offline</option>
        <option value="pending">pending</option>
      </select>
      <b-button class="reset-filter-btn" variant="primary" @click="resetStatusFilter">Reset Filter</b-button>

    </div>

        <table class="table table-striped table-light">
          <thead>
            <tr>
              <th>User name <i class="fas fa-arrow-down" @click="sortNameDescOrder"></i> <i class="fas fa-arrow-up" @click="sortNameAscOrder"></i></th>
              <th>User Surname <i class="fas fa-arrow-down" @click="sortSurnameDescOrder"></i> <i class="fas fa-arrow-up" @click="sortSurnameAscOrder"></i></th>
              <th>Age <i class="fas fa-arrow-down" @click="sortAgeDescOrder"></i> <i class="fas fa-arrow-up" @click="sortAgeAscOrder"></i></th>
              <th>Phone <i class="fas fa-arrow-down" @click="sortPhoneDescOrder"></i> <i class="fas fa-arrow-up" @click="sortPhoneAscOrder"></i></th>
              <th>Email <i class="fas fa-arrow-down" @click="sortEmailDescOrder"></i> <i class="fas fa-arrow-up" @click="sortEmailAscOrder"></i></th>
              <th>Status <i class="fas fa-arrow-down" @click="sortStatusDescOrder"></i> <i class="fas fa-arrow-up" @click="sortStatusAscOrder"></i></th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="(user, index) in filterByStatus()(`${userStatus}`, `${searchString}`)" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.status }}</td>
          </tr>
          </tbody>
        </table>

      <b-button class="return-btn" variant="primary" onclick='location.href="main_page"'>Go to form page</b-button>

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
      searchString: ''
    }
  },
  methods: {
    ...mapGetters(['sortAgeDescOrder', 'sortAgeAscOrder', 'sortNameAscOrder', 'sortNameDescOrder', 'sortSurnameAscOrder', 'sortSurnameDescOrder', 'sortStatusDescOrder', 'sortStatusAscOrder', 'sortPhoneAscOrder', 'sortPhoneDescOrder', 'sortEmailAscOrder', 'sortEmailDescOrder','filterByStatus','liveSearchName', 'globalLiveSearch' ]),
    resetStatusFilter: function() {
      this.userStatus = 'all'
    }
  }
})
</script>

<style lang="scss" scoped>

#users_info {
  width: 950px;
  margin: 0 auto;
  text-align: center;
}
.input-fields {
  background-color: #e3edfc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  input {
    width: 40%;
    height: 33px;
  }
  select {
    height: 33px;
    width: 15%;
  }
  .reset-filter-btn {
    height: 33px;
    padding-top: 3px;
  }
}
.return-btn {
  width: 30%;
  margin-top: 30px;
  a, a:hover {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
}
table {
  margin: 0 auto;
  i {
    color: #2357b8;
    &:hover {
      cursor: pointer;
    }
 }
}

</style>
