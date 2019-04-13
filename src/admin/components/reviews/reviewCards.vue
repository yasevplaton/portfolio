<template lang="pug">
  .review-cards
    ul.review-cards__list
      li.review-cards__item.review-cards__item--new-card
        button(
          type="button"
          @click="showFormAndTurnEditModeOff"
        ).btn.btn--add-new-card
          span.btn__new-card-icon
          span.btn__new-card-title Добавить отзыв
      li.review-cards__item(
        v-for="review in reviews"
        :key="review.id"
      )
        review-card(
          :review="review"
        )
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    reviewCard: () => import("components/reviews/reviewCard.vue")
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapMutations("reviews", ["SHOW_FORM", "TURN_EDIT_MODE_OFF"]),
    ...mapActions("reviews", ["fetchReviews"]),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),

    showFormAndTurnEditModeOff() {
      this["TURN_EDIT_MODE_OFF"]();
      this["SHOW_FORM"]();
    }
  },

  async created() {
    try {
      await this.fetchReviews();
      this["SHOW_TOOLTIP"]({
        type: "success",
        text: "Отзывы загружены"
      });
    } catch (error) {
      console.error(error.message);
      this["SHOW_TOOLTIP"]({
        type: "error",
        text: "Произошла ошибка"
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.review-cards__list {
  display: grid;
  grid-template: "card card card" max-content / 1fr 1fr 1fr;
  grid-gap: 30px;

  @include tablets {
    grid-template: "card card" max-content / 1fr 1fr;
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
