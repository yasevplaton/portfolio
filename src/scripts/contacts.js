import Vue from 'vue';
// import SimpleVueValidation from "simple-vue-validator";

// Vue.use(SimpleVueValidation);

// import { Validator } from "simple-vue-validator";

new Vue({
  el: "#contacts-root",
  template: "#contacts-component",
  // mixins: [require("simple-vue-validator").mixin],
  // data() {
  //   return {
  //     user: {
  //       name: "",
  //       email: "",
  //       message: ""
  //     }
  //   }
  // },
  // components: {
  //   errorTooltip: () => import('components/common/errorTooltip.vue')
  // },
  // validators: {
  //   "user.name": value => {
  //     return Validator.value(value).required("Введите имя");
  //   },
  //   "user.email": value => {
  //     return Validator.value(value).required("Введите почту").email("Это не похоже на почту");
  //   },
  //   "user.message": value => {
  //     return Validator.value(value).required("Введите сообщение");
  //   },
  // },
  // methods: {
  //   async sendMessage() {
  //     if ((await this.$validate()) === false) {
  //       console.error('Валидация не пройдена');
  //       return;
  //     }

  //     console.log("Письмо успешно отправлено");
  //   }
  // }
});