import Vue from 'vue';
import App from '@/App.vue';
import SimpleVueValidation from "simple-vue-validator";
import router from '@/router/index';
import store from '@/store'
import requests from '@/requests';

store.$axios = requests;

Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});