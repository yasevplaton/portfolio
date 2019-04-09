<template lang="pug">
  .work-card
    .work-card__header
      img(:src="remotePhotoPath" alt="Превью работы").work-card__img
      .work-card__tags
        work-tags(
          :tags="tagsArray"
        )
    .work-card__content
      .work-card__text-content
        h3.work-card__title {{work.title}}
        .work-card__desc
          p {{work.description}}
        a(:href="work.link").work-card__link {{work.link}}
      .work-card__btns
        button(
          type="button"
          @click="editWork"
        ).btn.btn--card-edit Править
        button(
          type="button"
          @click="removeCurrentWork"
        ).btn.btn--card-remove Удалить
</template>

<script>
import { BASE_URL } from "@/helpers/consts";
import { mapActions, mapMutations } from "vuex";

export default {
  components: {
    workTags: () => import("./workTags.vue")
  },
  props: {
    work: Object
  },
  data() {
    return {
      
    }
  },
  computed: {
    remotePhotoPath() {
      return `${BASE_URL}/${this.work.photo}`;
    },
    tagsArray() {
      return this.work.techs.split(',');
    }
  },
  methods: {
    ...mapActions("works", ['removeWork']),
    ...mapMutations("works", ['SHOW_FORM', 'TURN_EDIT_MODE_ON', 'SET_EDITED_WORK']),

    async removeCurrentWork() {
      try {
        await this.removeWork(this.work.id);
      } catch (error) {
        console.error(error.message);
      }
    },

    showFormAndTurnEditModeOn() {
      this['TURN_EDIT_MODE_ON']();
      this['SHOW_FORM']();
    },

    setEditedWork() {
      this['SET_EDITED_WORK'](this.work);
    },

    editWork() {
      this.setEditedWork();
      this.showFormAndTurnEditModeOn();
    }
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.work-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
