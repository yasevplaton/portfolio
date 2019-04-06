<template lang="pug">
  .nav__wrapper
    .container.nav__container
      nav.nav
        ul.nav__list
          - var navItems = ["Обо мне", "Работы", "Отзывы"];
          each item in navItems
            - var activeClass = item === "Обо мне" ? "nav__item--active" : "";
            li(class=`nav__item ${activeClass}`)
              a(href="#").nav__link #{item}
</template>

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
  padding: 30px;
  cursor: pointer;

  &--active {
    font-weight: 600;
    color: #383bcf;
    border-bottom: 3px solid #383bcf;
  }

  &:not(&--active):hover {
    font-weight: 600;
    color: #383bcf;
    border-bottom: 3px solid #383bcf;
  }

  @include phones {
    padding: 30px 20px;
  }
}
</style>
