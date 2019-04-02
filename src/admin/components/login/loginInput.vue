<template lang="pug">
  label(
    :class="{'error' : errorText}"
  ).login-input__block
    span.login-input__label {{title}}
    input(
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    ).login-input__input

    .login-input__error-tooltip
      error-tooltip(
        :errorText="errorText"
      )
</template>

<script>
import errorTooltip from "./errorTooltip";

export default {
  inheritAttrs: false,
  props: {
    title: String,
    errorText: {
      type: String,
      default: ""
    },
    value: String | Number
  },
  components: {
    errorTooltip
  }
};
</script>

<style lang="postcss" scoped>
.login-input__error-tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.login-input__block {
  border-bottom: 1px solid rgba(#000, 0.3);
  width: 100%;
  padding-bottom: 10px;
  position: relative;

  &--login {
    .login-input__input {
      background: svg-load(
          "user.svg",
          fill=rgba($text-color, 0.3),
          width=100%,
          height=100%
        )
        0 0 no-repeat;
    }
  }

  &--password {
    .login-input__input {
      background: svg-load(
          "key.svg",
          fill=rgba($text-color, 0.3),
          width=100%,
          height=100%
        )
        0 0 no-repeat;
    }
  }

  &.error {
    .login-input__error-tooltip {
      display: block;
    }
  }
}

.login-input__label {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.3);
  padding-left: 30px;
  margin-bottom: 10px;
}

.login-input__input {
  border: none;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: $text-color;
  padding: 3px 0;
  padding-left: 30px;
}
</style>
