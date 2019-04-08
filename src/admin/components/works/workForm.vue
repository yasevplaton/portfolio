<template lang="pug">
  .form-block
    h2.form-block__title Редактирование работы

    form.form.work-form.form-block__content.form-block__content--work

      .form__photo.form__photo--work
        label.form__upload-photo-wrapper
          .form__upload-photo-container(
            :class="{'filled' : this.renderedPhotoUrl.length}"
            :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
          )
            input(
              type="file"
              @change="appendFileAndRenderPhoto"
            ).form__upload-photo-input
            .form__upload-photo-content
              span.form__upload-photo-desc Перетащите или загрузите для загрузки изображения
              .btn.btn--upload-work-photo Загрузить

      .form__text.form__text--work
        .form__row
          .form__col
            label.form__text-block(for="title")
              span.form__label Название
              input.form__input.form__input--title#title(type="text" name="title" placeholder="Введите название работы")
        .form__row
          .form__col
            label.form__text-block(for="link")
              span.form__label Ссылка
              input.form__input.form__input--link#link(type="text" name="link" placeholder="Вставьте ссылку")
        .form__row.form__row--textarea
          .form__col
            label.form__text-block.form__text-block--textarea(for="description")
              span.form__label Описание
              textarea.form__textarea#description(name="description" rows="4" placeholder="Введите описание работы")
        .form__row.form__row--tags
          .form__col
            label.form__text-block(for="tags")
              span.form__label Добавление тега
              input.form__input.form__input--tags#tags(type="text" name="tags" placeholder="Если хотите, добавьте теги")
        .form__row
          .form__col
            ul.form__tags-list
              form-tag

        .form__row.form__row--btns
          .form__col
            .form__btns
              button(
                type="button"
                @click="$emit('closeWorkForm')"
              ).btn.btn--cancel-edit Отмена
              button(type="button").btn.btn--save-edit Сохранить
</template>

<script>
export default {
  components: {
    formTag: () => import("./formTag.vue")
  },
  data() {
    return {
      renderedPhotoUrl: "",
      work: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      }
    }
  },
  methods: {
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhotoUrl = reader.result;
        };
      } catch (error) {
        console.error(error.message);
      }
    }
  }
}
</script>



<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

</style>
