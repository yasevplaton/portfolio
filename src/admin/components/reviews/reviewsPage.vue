<template lang="pug">
  section.section.reviews
    .container.reviews__container
      .heading-row.reviews__heading-row
        h1.title.reviews__title Блок "Отзывы"
      review-form(
        v-if="reviewForm.show"
      )
      review-cards
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    reviewForm: () => import("components/reviews/reviewForm.vue"),
    reviewCards: () => import("components/reviews/reviewCards.vue"),
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState("reviews", {
      reviewForm: state => state.reviewForm,
      editedReview: state => state.editedReview
    })
  },
  created() {
    this.reviewForm.show = false;
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
  /* min-height: 100vh; */
}

.reviews__container {
  @include phones {
    margin: 0;
    width: 100%;
  }
}
</style>
