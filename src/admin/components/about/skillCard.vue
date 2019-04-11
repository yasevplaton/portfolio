<template lang="pug">
  .skill-card(
    :class="{ 'skill-card--edit': editMode }"
  )
    .skill-card__heading-row(
      :class="{'error' : validation.firstError('editedCategory.category')}"
    )
      input(type="text" placeholder="Название новой группы" v-model="editedCategory.category").skill-card__title
      .skill-card__title-error
        error-tooltip(
          :errorText="validation.firstError('editedCategory.category')"
        )
      .skill-card__heading-btns
        .skill-card__edit-mode-btns
          button(
            type='button'
            @click="editCurrSkillCard(editedCategory)"
          ).btn.btn--save-skill-card
          button(
            type='button'
            @click="removeCurrSkillCard(category.id)"
          ).btn.btn--remove-skill-card
        .skill-card__read-mode-btns
          button(
            type='button'
            @click="editMode = true"
          ).btn.btn--edit-skill-card
    .skill-card__table
      skill-table(
        :skills="skills"
      )
    footer.skill-card__footer
      .skill__input--new-title-wrapper(
        :class="{'error' : validation.firstError('skill.title')}"
      )
        input(type="text" placeholder="Новый навык" v-model="skill.title").skill__input.skill__input--title.skill__input--new-title
        .skill__input-error
          error-tooltip(
            :errorText="validation.firstError('skill.title')"
          )
      .skill__percent-block.skill__percent-block--new-skill(
        :class="{'error' : validation.firstError('skill.percent')}"
      )
        input(type="text" placeholder="100" v-model="skill.percent").skill__input.skill__input--percent.skill__input--new-percent
        span.skill__percent-prefix.skill__percent-prefix--new-skill %
        .skill__input-error
          error-tooltip(
            :errorText="validation.firstError('skill.percent')"
          )
      button(
        type="button"
        @click="addNewSkill"
      ).btn.btn--add-skill +
</template>

<script>
import { mapActions } from "vuex";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "editedCategory.category": value => {
      return Validator.value(value).required("Введите название группы");
    },
    "skill.title": value => {
      return Validator.value(value).required("Введите название навыка");
    },
    "skill.percent": value => {
      return Validator.value(value).required("Введите значение").digit("Тут должно быть число").between(0, 100, "Значение должно быть между 0 и 100");
    },
  },
  components: {
    skillTable: () => import("components/about/skillTable.vue"),
    errorTooltip: () => import("components/common/errorTooltip.vue")
  },

  props: {
    category: Object,
    skills: Array
  },

  data() {
    return {
      editMode: false,
      editedCategory: {...this.category},
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    }
  },

  methods: {

    ...mapActions("skillCategories", ['removeSkillGroup', 'editSkillGroup']),
    ...mapActions("skills", ['addSkill']),

    async removeCurrSkillCard(skillCardId) {
      try {
        await this.removeSkillGroup(skillCardId);
      } catch (error) {
        console.log(error.message);
      }
    },

    async editCurrSkillCard(skillCard) {
      if ((await this.$validate("editedCategory.category")) === false) return;
      try {
        await this.editSkillGroup(skillCard);
        this.editMode = false;
      } catch (error) {
        console.log(error.message);
      }
    },

    async addNewSkill() {
      if ((await this.$validate()) === false) return;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        console.log(error.message);
      }
    }



  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "./styles/skill-card.pcss";
@import "./styles/skill.pcss";

.skill-card__title {
  pointer-events: none;
}
</style>
