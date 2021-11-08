<template lang="html">
  <div id="main_page">
    <h2>User form</h2>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submitUser)"> <!-- form -->

        <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
          <div class="form-group">
            <label for="">Name</label>
            <input v-model="name" type="text" placeholder="name"><br>
            <span>{{ errors[0] }}</span>
          </div>
      </ValidationProvider>

      <ValidationProvider name="Surname" rules="required|alpha" v-slot="{ errors }">
        <div class="form-group">
          <label for="">Surname</label>
          <input v-model="surname" type="text" placeholder="surname"><br>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="Age" rules="required|integer|max:3" v-slot="{ errors }">
        <div class="form-group">
          <label for="">Age</label>
          <input v-model="age" type="text" placeholder="age"><br>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="Phone number" :rules="{required: true, regex: /^[0-9\+]{10,13}$/ }" v-slot="{ errors }">
        <div class="form-group">
          <label for="">Phone number</label>
          <input v-model="phone" type="text" placeholder="phone number"><br>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="">Email</label>
          <input v-model="email" type="text" placeholder="email"><br>
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>

      <ValidationProvider name="Status" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="">Status</label>
          <select v-model="status">
            <option value="online">online</option>
            <option value="offline">offline</option>
            <option value="pending">pending</option>
          </select><br>
          <span>{{ errors[0] }}</span>
        </div><br>
      </ValidationProvider>

        <div class="group-button">
          <button>Add user</button><br>
          <button @click="resetForm">Reset the form</button><br>
          <button><a href="users_table">Go to users table</a></button><br><br>
        </div>

      </form>
    </ValidationObserver>

    <ol>
      <li v-for="(user, index) in getAllUsers" :key="index">
        {{ user.name }}
        {{ user.surname }}
        {{ user.age }}
        {{ user.phone }}
        {{ user.email }}
        {{ user.status }}
      </li>
    </ol>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from "vuex";

//-------------------Move to separate file------------------------------------//
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, email, alpha, integer, max, regex } from 'vee-validate/dist/rules';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', {
  ...required,
  message: 'This field is required'
});
extend('integer', {
  ...integer,
  message: 'Enter a correct age'
});
extend('max', {
  ...max,
  message: 'You are to ald. Enter a correct age'
});
extend('regex', {
  ...regex,
  message: 'Enter a correct phone number'
});
extend('alpha', alpha);
extend('email', email);

// ------------------------------------------------------//

export default Vue.extend({
  name: 'MainPage',
  data: function(){
    return {
      name: '',
      surname: '',
      age: '',
      phone: '',
      email: '',
      status: ''
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
      this.resetForm();
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

<style lang="css" scoped>
form {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid silver;
}
input {
  width: 50%;
  margin-top: 5px;
}
select {
  margin-top: 5px;
}
#main_page {
  text-align: center;
  border: 1px solid silver;
}
a, a:hover {
  text-decoration: none;
  cursor: default;
  color: black;
}
</style>
