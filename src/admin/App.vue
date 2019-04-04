<template lang="pug">
  .admin-content

    //- login component
    .login
      .login__content
        a(href="#").btn.btn--close-login-window
        h1.login__title Авторизация
        form.login__form(@submit.prevent="login")
          .login__form-row
            .login__form-col
              login-input(
                title="Логин"
                v-model="user.name"
                type="text"
                class="login-input__block--login"
                name="login"
                :errorText="validation.firstError('user.name')"
              )
          .login__form-row
            .login__form-col
              login-input(
                title="Пароль"
                v-model="user.password"
                type="password"
                class="login-input__block--password"
                name="password"
                :errorText="validation.firstError('user.password')"
              )
          .login__form-row
            .login__form-col
              button(
                type="submit"
                :disabled="disableSubmit"
              ).btn.btn__login-submit Отправить
    
    include ./admin-template.pug
      
</template>

<script>
import { Validator } from "simple-vue-validator";
import axios from "axios";
import loginInput from "./components/login/loginInput";


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
    loginInput
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

/* login component */

.login {
  background-image: linear-gradient(rgba(#2d3c4e, 0.9), rgba(#2d3c4e, 0.9)),
    url("../images/bg/mountain-baloon.jpg");
  background-position: center center, center center;
  background-repeat: repeat, no-repeat;
  background-size: cover, cover;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;

  @include phones {
    background: #fff;
  }
}

.login__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 50px 75px;

  @include phones {
    padding: 20% 15%;
  }
}

.login__title {
  font-size: 36px;
  font-weight: 600;
  color: $text-color;
  margin-bottom: 30px;
  text-align: center;

  @include phones {
    font-size: 30px;
  }
}

.login__form {
  width: 100%;
}

.login__form-row {
  width: 100%;
  display: flex;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
}

.login__form-col {
  flex: 1;
}
</style>
