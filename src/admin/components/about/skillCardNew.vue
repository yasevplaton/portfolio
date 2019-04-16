<template lang="pug">
  .skill-card.skill-card--edit
    .skill-card__heading-row(
      :class="{'error' : validation.firstError('title')}"
    )
      input(type="text" placeholder="Название новой группы" v-model="title").skill-card__title
      .skill-card__title-error
        error-tooltip(
          :errorText="validation.firstError('title')"
        )
      .skill-card__heading-btns

        .skill-card__edit-mode-btns
          button(
            type='button'
            @click="addSkillCard"
          ).btn.btn--save-skill-card

          button(
            type='button'
            @click="$emit('closeNewSkillCard')"
          ).btn.btn--remove-skill-card

        .skill-card__read-mode-btns
          button(type='button').btn.btn--edit-skill-card
    .skill-card__table
      skill-table
    footer.skill-card__footer
      input(type="text" placeholder="Новый навык").skill__input.skill__input--title.skill__input--new-title
      .skill__percent-block.skill__percent-block--new-skill
        input(type="text" placeholder="100").skill__input.skill__input--percent.skill__input--new-percent
        span.skill__percent-prefix.skill__percent-prefix--new-skill %
      button(type="button").btn.btn--add-skill +
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "title": value => {
      return Validator.value(value).required("Введите название группы");
    }
  },
  components: {
    skillTable: () => import("components/about/skillTable.vue"),
    errorTooltip: () => import("components/common/errorTooltip.vue")
  },
  data() {
    return {
      title: ""
    }
  },
  methods: {
    ...mapActions("skillCategories", ['addNewSkillGroup']),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),

    async addSkillCard() {
      if ((await this.$validate()) === false) return;
      try {
        await this.addNewSkillGroup(this.title);

        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Группа добавлена'
        });

        this.title = "";
        this.$emit('closeNewSkillCard');
      } catch (error) {
        console.error(error.message);

        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    }
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "./styles/skill-card.pcss";
@import "./styles/skill.pcss";


</style>
