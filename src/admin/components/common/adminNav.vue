<template lang="pug">
  .nav__wrapper
    .container.nav__container
      nav.nav
        ul.nav__list
          router-link.nav__item(
            v-for="(route, index) in routes"
            :key="index"
            tag="li"
            :to="route.path"
            )
            a(href="").nav__link {{route.title}}
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          title: "Обо мне",
          path: "/"
        },
        {
          title: "Работы",
          path: "/works"
        },
        {
          title: "Отзывы",
          path: "/reviews"
        }
      ]
    };
  }
};
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.nav__wrapper {
  grid-area: nav;
}

.nav__list {
  display: flex;
  align-items: center;
  color: $text-color;

  @include phones {
    justify-content: center;
  }
}

.nav__item {
  cursor: pointer;

  &:hover {
    font-weight: 600;
    color: #383bcf;
    border-bottom: 3px solid #383bcf;
  }
}

.nav__link {
  padding: 30px;
  display: inline-block;
  width: 100%;
  height: 100%;

  @include phones {
    padding: 30px 20px;
  }
}

.router-link-exact-active {
  font-weight: 600;
  color: #383bcf;
  border-bottom: 3px solid #383bcf;
}
</style>
