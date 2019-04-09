<template lang="pug">
  .review-card
    .review-card__header
      .review-author
        .review-author__photo-block(
          :style="{'backgroundImage' : `url(${this.remotePhotoPath})`}"
        )
        .review-author__desc
          .review-author__name {{review.author}}
          .review-author__position {{review.occ}}
    .review-card__content
      .review-card__desc
        p {{review.text}}
      .review-card__btns
        button(
          type="button"
          @click="editReview"
        ).btn.btn--card-edit Править
        button(
          type="button"
          @click="removeReview(review.id)"
        ).btn.btn--card-remove Удалить
</template>

<script>
import { BASE_URL } from "@/helpers/consts";
import { mapActions, mapMutations } from 'vuex';

export default {
  props: {
    review: Object
  },
  computed: {
    remotePhotoPath() {
      return `${BASE_URL}/${this.review.photo}`;
    },
  },
  methods: {
    ...mapActions('reviews', ['removeReview']),
    ...mapMutations('reviews', ['SHOW_FORM', 'TURN_EDIT_MODE_ON', 'SET_EDITED_REVIEW']),

    showFormAndTurnEditModeOn() {
      this['TURN_EDIT_MODE_ON']();
      this['SHOW_FORM']();
    },

    setEditedReview() {
      this['SET_EDITED_REVIEW'](this.review);
    },

    editReview() {
      this.setEditedReview();
      this.showFormAndTurnEditModeOn();
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.review-card {
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;

  &--edit {
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.5);
    }
  }
}

.review-card__header {
  padding-bottom: 30px;
  border-bottom: 1px solid rgba($text-color, 0.15);
  margin-bottom: 30px;
}

.review-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.review-card__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.review-card__desc {
  color: rgba(65, 76, 99, 0.7);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.88;
  margin-bottom: 60px;
}

.review-author {
  display: flex;
  align-items: center;
}

.review-author__photo-block {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  flex-shrink: 0;
  background: center center no-repeat;
  background-size: cover;
  border-radius: 50%;
}

.review-author__name {
  font-size: 18px;
  font-weight: bold;
  color: $text-color;
}

.review-author__position {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);
}
</style>
