import Vue from 'vue';
import App from '@/App.vue';
import SimpleVueValidation from "simple-vue-validator";
import router from '@/router/index';

Vue.use(SimpleVueValidation);

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});