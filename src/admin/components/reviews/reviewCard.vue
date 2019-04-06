<template lang="pug">
  .review-card
    .review-card__header
      .review-author
        .review-author__photo-block
          img(src="~images/content/avatar.jpg" alt="Фотография автора отзыва").review-author__img
        .review-author__desc
          .review-author__name Владимир Сабанцев
          .review-author__position Преподаватель
    .review-card__content
      .review-card__desc
        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
      .review-card__btns
        button(type="button").btn.btn--card-edit Править
        button(type="button").btn.btn--card-remove Удалить
</template>

<script>
export default {
  components: {
    
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.review-card {
  padding: 30px;
  position: relative;

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
}

.review-author__img {
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
