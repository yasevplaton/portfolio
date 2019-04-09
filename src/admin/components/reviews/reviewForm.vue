<template lang="pug">
  .form-block
    h2.form-block__title {{formTitle}}

    form.form.review-form.form-block__content.form-block__content--review

      .form__photo.form__photo--review
        label.form__upload-photo-wrapper.form__upload-photo-wrapper--review
          .form__upload-photo-container--review(
            :class="{'filled' : this.renderedPhotoUrl.length}"
            :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
          )
            input(
              type="file"
              @change="appendFileAndRenderPhoto"
            ).form__upload-photo-input
          .btn.btn--upload-review-photo Добавить фото

      .form__text.form__text--review
        .form__row.form__row--review-author-info
          .form__col.form__col--review
            label.form__text-block(for="name")
              span.form__label Имя автора
              input.form__input.form__input--name#name(type="text" name="name" placeholder="Введите имя автора" v-model="review.author")
          .form__col.form__col--review
            label.form__text-block(for="position")
              span.form__label Титул автора
              input.form__input.form__input--position#position(type="text" name="position" placeholder="Введите титул автора" v-model="review.occ")
        .form__row.form__row--textarea
          .form__col
            label.form__text-block.form__text-block--textarea(for="review")
              span.form__label Отзыв
              textarea.form__textarea#review(name="review" rows="4" placeholder="Введите отзыв" v-model="review.text")

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

export default {
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
      try {
        const reviewFormData = this.createReviewFormData();
        await this.addReview(reviewFormData);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
      }
    },

    setEditedReview() {
      this.review = { ...this.editedReview };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },

    async saveEditedReview() {
      try {
        const reviewData = {
          id: this.review.id,
          data: this.createReviewFormData()
        };
        await this.editReview(reviewData);
        this['CLOSE_FORM']();
      } catch (error) {
        console.error(error.message);
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
