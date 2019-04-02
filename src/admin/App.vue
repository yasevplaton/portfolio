<template lang="pug">
  .admin-content

    //- login component
    .login
      .login__content
        a(href="#").btn.btn--close-login-window
        h1.login__title Авторизация
        form.login__form
          .login__form-row
            .login__form-col
              login-input
          .login__form-row
            .login__form-col
              login-input
          .login__form-row
            .login__form-col
              button(type="button").btn.btn__login-submit Отправить
    
    // include ./admin-template.pug
      
</template>

<script>
import { Validator } from "simple-vue-validator";
import axios from "axios";


export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите имя пользователя");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите пароль");
    }
  },
  data() {
    return {
      disableSubmit: false,
      user: {
        name: "",
        password: ""
      }
    };
  },
  components: {
    loginInput: () => import("./components/login/loginInput")
  },
  methods: {
    async login() {
      if ((await this.$validate()) === false) return;
      this.disableSubmit = true;
      try {
        axios
          .post("//jsonplaceholder.typicode.com/posts", {
            name: this.user.name,
            password: this.user.password
          })
          .then(response => {
            const report = JSON.stringify(response, null, 2);
            console.log(report);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800&subset=cyrillic');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "./styles/base.pcss";
@import "./styles/blocks/*.pcss";
</style>
