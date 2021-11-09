//-------------------Move to separate file------------------------------------//
import Vue from 'vue';
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
