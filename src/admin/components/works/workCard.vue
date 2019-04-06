<template lang="pug">
  .work-card
    .work-card__header
      img(src="~images/content/work-previews/1.jpg" alt="Превью работы").work-card__img
      .work-card__tags
        .tags
          ul.tags__list
            li.tags__item HTML
            li.tags__item CSS
            li.tags__item JavaScript
    .work-card__content
      h3.work-card__title Сайт школы образования
      .work-card__desc
        p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
      a(href="//google.com").work-card__link //google.com
      .work-card__btns
        button(type="button").btn.btn--card-edit Править
        button(type="button").btn.btn--card-remove Удалить
</template>

<script>
export default {
  
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.work-card {
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

.work-card__header {
  position: relative;
}

.work-card__tags {
  position: absolute;
  right: 0;
  bottom: 0;
}

.work-card__content {
  padding: 40px 30px;
}

.work-card__title {
  font-size: 18px;
  font-weight: bold;
  color: $text-color;
  margin-bottom: 25px;
}

.work-card__desc {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.7);
  line-height: 1.88;
  margin-bottom: 30px;
}

.work-card__link {
  font-size: 16px;
  font-weight: 600;
  color: $links-color;
  margin-bottom: 40px;
  display: inline-block;
}

.work-card__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tags__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.tags__item {
  border-radius: 14.9px;
  padding: 7px 13px;
  background: #fff;
  font-size: 13px;
  font-weight: 600;
  color: rgba(40, 51, 64, 0.7);
  margin-right: 8px;
  margin-bottom: 5px;
}
</style>
