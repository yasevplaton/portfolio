<template lang="pug">
  header.header
    .container.header__container
      .header__col.header__col--first
        .user-info.header__col-content
          .user-info__avatar-wrapper
            img(src="~images/content/avatar.jpg" alt="Аватар пользователя").avatar
          .user-info__name Платон Ясев
        .window-desc Панель администрирования
      .header__col.header__col--last
        a(
          href="#"
          @click="logout"
        ).exit-btn Выйти
</template>

<script>
import { removeToken } from '@/helpers/token';

export default {
  methods: {
    logout() {
      removeToken();
      this.$router.replace('/login');
    }
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.header {
  grid-area: header;
  background-image: linear-gradient(to right, #3e3e59, #454573);
  padding: 20px 0;
}

.header__container {
  display: grid;
  grid-template: "first last" 1fr / 1fr 1fr;

  @include phones {
    grid-template: "first last" 1fr / 2fr 1fr;
  }
}

.header__col {
  display: flex;
  align-items: center;

  &--first {
    grid-area: first;
    align-self: center;
  }

  &--last {
    grid-area: last;
    justify-self: end;
  }
}

.header__col-content {
  margin-right: 25px;

  @include phones {
    margin-right: 0;
  }
}

.exit-btn {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
  transition: color .3s;

  &:hover {
    color: #fff;
  }
}

.avatar {
  border-radius: 50%;
}

.window-desc {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);

  @include phones {
    display: none;
  }
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info__avatar-wrapper {
  width: 44px;
  height: 44px;
  margin-right: 20px;
  flex-shrink: 0;
}

.user-info__name {
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}
</style>

