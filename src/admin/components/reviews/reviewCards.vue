<template lang="pug">
  .review-cards
    ul.review-cards__list
      li.review-cards__item.review-cards__item--new-card
        button(type="button").btn.btn--add-new-card
          span.btn__new-card-icon
          span.btn__new-card-title Добавить отзыв
      li.review-cards__item
        review-card
      li.review-cards__item
        review-card
</template>

<script>
export default {
  components: {
    reviewCard: () => import("components/reviews/reviewCard.vue")
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.review-cards__list {
  display: grid;
  grid-template:
    "card card card" max-content / 1fr 1fr 1fr;
  grid-gap: 30px;

  @include tablets {
    grid-template:
    "card card" max-content / 1fr 1fr;
    grid-gap: 20px;
  }

  @include big-phones {
    grid-template: "card" max-content / 1fr;
    grid-gap: 10px;
  }
}

.review-cards__item {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
</style>
