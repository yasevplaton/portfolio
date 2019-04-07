<template lang="pug">
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
</template>

<script>
import { Validator } from "simple-vue-validator";
import $axios from "@/requests";
import loginInput from "./loginInput";
import { setToken } from "@/helpers/token";

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
        $axios
          .post("/login", {
            name: this.user.name,
            password: this.user.password
          })
          .then(response => {
            setToken(response.data.token);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.login {
  background-image: linear-gradient(rgba(#2d3c4e, 0.9), rgba(#2d3c4e, 0.9)),
    url("~images/bg/mountain-baloon.jpg");
  background-position: center center, center center;
  background-repeat: repeat, no-repeat;
  background-size: cover, cover;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;

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
