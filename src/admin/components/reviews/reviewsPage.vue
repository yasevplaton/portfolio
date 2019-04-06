<template lang="pug">
  section.section.reviews
    .container.reviews__container
      .heading-row.reviews__heading-row
        h1.title.reviews__title Блок "Отзывы"
      review-form
      review-cards
</template>

<script>
export default {
  components: {
    reviewForm: () => import("components/reviews/reviewForm.vue"),
    reviewCards: () => import("components/reviews/reviewCards.vue"),
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.reviews {
  grid-area: content-area;
  background-image: linear-gradient(rgba(#fff, 0.9), rgba(#fff, 0.9)),
    url("~images/bg/mountain-baloon.jpg");
  background-position: center center, center center;
  background-repeat: repeat, no-repeat;
  background-size: cover, cover;
  min-height: 100vh;
}

.reviews__container {
  @include phones {
    margin: 0;
    width: 100%;
  }
}
</style>
