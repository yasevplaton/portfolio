<template lang="pug">
  .form-block
    h2.form-block__title Новый отзыв

    form.form.review-form.form-block__content.form-block__content--review

      .form__photo.form__photo--review
        .form__upload-photo-container--review
        button(type="button").btn.btn--upload-review-photo Добавить фото

      .form__text.form__text--review
        .form__row.form__row--review-author-info
          .form__col.form__col--review
            label.form__text-block(for="name")
              span.form__label Имя автора
              input.form__input.form__input--name#name(type="text" name="name" placeholder="Введите имя автора")
          .form__col.form__col--review
            label.form__text-block(for="position")
              span.form__label Титул автора
              input.form__input.form__input--position#position(type="text" name="position" placeholder="Введите титул автора")
        .form__row.form__row--textarea
          .form__col
            label.form__text-block.form__text-block--textarea(for="review")
              span.form__label Отзыв
              textarea.form__textarea#review(name="review" rows="4" placeholder="Введите отзыв")

        .form__row.form__row--btns
          .form__col
            .form__btns.form__btns--review
              button(type="button").btn.btn--cancel-edit Отмена
              button(type="button").btn.btn--save-edit Сохранить
</template>

<script>
export default {

};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";


</style>
