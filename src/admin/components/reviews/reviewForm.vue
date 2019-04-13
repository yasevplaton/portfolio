<template lang="pug">
  .form-block
    h2.form-block__title {{formTitle}}

    form.form.review-form.form-block__content.form-block__content--review

      .form__photo.form__photo--review
        label.form__upload-photo-wrapper.form__upload-photo-wrapper--review
          .form__upload-photo-container--review(
            :class="{'filled' : this.renderedPhotoUrl.length, 'error' : validation.firstError('renderedPhotoUrl')}"
            :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
          )
            input(
              type="file"
              @change="appendFileAndRenderPhoto"
            ).form__upload-photo-input
            .form__upload-photo-error
              error-tooltip(
                :errorText="validation.firstError('renderedPhotoUrl')"
              )
          .btn.btn--upload-review-photo Добавить фото

      .form__text.form__text--review
        .form__row.form__row--review-author-info
          .form__col.form__col--review
            label.form__text-block(
              for="name"
              :class="{'error' : validation.firstError('review.author')}"
            )
              span.form__label Имя автора
              input.form__input.form__input--name#name(type="text" name="name" placeholder="Введите имя автора" v-model="review.author")
              .form__text-block-error
                error-tooltip(
                  :errorText="validation.firstError('review.author')"
                )
          .form__col.form__col--review
            label.form__text-block(
              for="position"
              :class="{'error' : validation.firstError('review.occ')}"
            )
              span.form__label Титул автора
              input.form__input.form__input--position#position(type="text" name="position" placeholder="Введите титул автора" v-model="review.occ")
              .form__text-block-error
                error-tooltip(
                  :errorText="validation.firstError('review.occ')"
                )
        .form__row.form__row--textarea
          .form__col
            label.form__text-block.form__text-block--textarea(
              for="position"
              :class="{'error' : validation.firstError('review.text')}"
            )
              span.form__label Отзыв
              textarea.form__textarea#review(name="review" rows="4" placeholder="Введите отзыв" v-model="review.text")
              .form__text-block-error
                error-tooltip(
                  :errorText="validation.firstError('review.text')"
                )

        .form__row.form__row--btns
          .form__col
            .form__btns.form__btns--review
              button(
                type="button"
                @click="CLOSE_FORM"
              ).btn.btn--cancel-edit Отмена
              button(
                type="button"
                @click="addNewReview"
                v-if="!reviewForm.editMode"
              ).btn.btn--save-edit Сохранить
              button(
                type="button"
                v-if="reviewForm.editMode"
                @click="saveEditedReview"
              ).btn.btn--save-edit Сохранить
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { BASE_URL } from "@/helpers/consts";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "renderedPhotoUrl": value => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "review.author": value => {
      return Validator.value(value).required("Введите имя");
    },
    "review.occ": value => {
      return Validator.value(value).required("Введите титул");
    },
    "review.text": value => {
      return Validator.value(value).required("Введите отзыв");
    }
  },
  components: {
    errorTooltip: () => import("components/common/errorTooltip.vue")
  },
  data() {
    return {
      renderedPhotoUrl: "",
      review: {
        photo: "",
        author: "",
        occ: "",
        text: ""
      }
    };
  },
  computed: {
    ...mapState("reviews", {
      reviewForm: state => state.reviewForm,
      editedReview: state => state.editedReview
    }),

    formTitle() {
      switch (this.reviewForm.editMode) {
        case true:
          return "Редактирование отзыва";
          break;
        case false:
          return "Новый отзыв";
          break;
      }
    },

    remotePhotoPath() {
      return `${BASE_URL}/${this.review.photo}`;
    }
  },
  methods: {
    ...mapMutations('reviews', ['CLOSE_FORM']),
    ...mapActions('reviews', ['addReview', 'editReview']),
    ...mapMutations('tooltip', ['SHOW_TOOLTIP']),

    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhotoUrl = reader.result;
        };
      } catch (error) {
        console.error(error.message);
      }
    },

    createReviewFormData() {
      const formData = new FormData();
      formData.append("author", this.review.author);
      formData.append("occ", this.review.occ);
      formData.append("text", this.review.text);
      formData.append("photo", this.review.photo);
      return formData;
    },

    async addNewReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewFormData = this.createReviewFormData();
        await this.addReview(reviewFormData);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Отзыв добавлен'
        });
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    },

    setEditedReview() {
      this.review = { ...this.editedReview };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },

    async saveEditedReview() {
      if ((await this.$validate()) === false) return;
      try {
        const reviewData = {
          id: this.review.id,
          data: this.createReviewFormData()
        };
        await this.editReview(reviewData);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Отзыв обновлен'
        });
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    }

  },

  created() {
    if (this.reviewForm.editMode) {
      this.setEditedReview();
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";


</style>
