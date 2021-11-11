<template lang="html">
  <div id="main_page">
    <h2 class="text-primary">User form</h2>
    <ValidationObserver v-slot="{ handleSubmit }">

      <b-alert :show="dismissCountDown" fade variant="success" @dismiss-count-down="countDownChanged">
        User added
      </b-alert>

      <b-form @submit.prevent="handleSubmit(submitUser)"> <!-- form -->

      <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label>Name</label>
            <b-form-input id="input-1" sm="4" v-model="name" type="text" placeholder="name"></b-form-input>
            <span class="error">{{ errors[0] }}</span>
          </div>
      </ValidationProvider>

      <ValidationProvider name="Surname" rules="required|alpha" v-slot="{ errors }">
        <div class="form-group">
          <label>Surname</label>
          <b-form-input v-model="surname" type="text" placeholder="surname"></b-form-input>
          <span class="error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="Age" rules="required|integer|max:3" v-slot="{ errors }">
        <div class="form-group">
          <label for="">Age</label>
          <b-form-input v-model="age" type="text" placeholder="age"></b-form-input>
          <span class="error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="Phone number" :rules="{required: true, regex: /^[0-9]{10,13}$/ }" v-slot="{ errors }">
        <div class="form-group">
          <label for="">Phone number</label>
          <b-form-input v-model="phone" type="text" placeholder="phone number"></b-form-input>
          <span class="error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="">Email</label>
          <b-form-input v-model="email" type="text" placeholder="email"></b-form-input>
          <span class="error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="Status" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label>Status</label><br>
          <select class="form-control" v-model="status">
            <option value="online">online</option>
            <option value="offline">offline</option>
            <option value="pending">pending</option>
          </select>
          <span class="error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

        <div class="d-flex flex-column">
          <b-button-group>
            <b-button variant="primary" type="submit" class="btn-primary">Add user</b-button>
            <b-button variant="primary" @click="resetForm">Reset the form</b-button><br>
          </b-button-group>
          <b-button variant="primary" onclick='location.href="users_table"'>Go to users table</b-button>
        </div>

      </b-form>
    </ValidationObserver>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: 'MainPage',
  data: function(){
    return {
      name: '',
      surname: '',
      age: '',
      phone: '',
      email: '',
      status: '',
      dismissSecs: 2,
      dismissCountDown: 0,
    }
  },
  methods: {
    ...mapActions(['addUser']),
    submitUser: function(): void {
      let user = {
        name: this.name,
        surname: this.surname,
        age: parseInt(this.age),
        phone: this.phone,
        email: this.email,
        status: this.status
      }
      this.addUser(user);
      this.dismissCountDown = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    resetForm: function(): void {
      this.name = '';
      this.surname = '';
      this.age = '';
      this.phone = '';
      this.email = '';
      this.status = '';
    }
  },
  computed: mapGetters(['getAllUsers'])
})
</script>

<style lang="scss" scoped>

#main_page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
.form-group {
  .error {
    font-size: 12px;
    color: #ff5447;
    font-weight: 600;
  }
  input, select, label {
    margin-top: 5px;
  }
}
form {
  width: 500px;
  margin: 0 auto;
  button {
    margin-top: 25px;
    align-items: center;
    a {
      text-decoration: none;
      color: white;
      width: 100%;
      border: 1px solid silver;
    }
  }
}
</style>
