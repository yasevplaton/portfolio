<template lang="pug">
  .skill-card(
    :class="{ 'skill-card--edit': editMode }"
  )
    pre {{category}}
    .skill-card__heading-row
      input(type="text" placeholder="Название новой группы" v-model="editedCategory.category").skill-card__title
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
      skill-table
    footer.skill-card__footer
      input(type="text" placeholder="Новый навык").skill__input.skill__input--title.skill__input--new-title
      .skill__percent-block.skill__percent-block--new-skill
        input(type="text" placeholder="100").skill__input.skill__input--percent.skill__input--new-percent
        span.skill__percent-prefix.skill__percent-prefix--new-skill %
      button(type="button").btn.btn--add-skill +
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {
    skillTable: () => import("components/about/skillTable.vue")
  },
  props: {
    category: Object
  },
  data() {
    return {
      editMode: false,
      editedCategory: {...this.category}
    }
  },
  methods: {
    ...mapActions("skillCategories", ['removeSkillGroup', 'editSkillGroup']),

    async removeCurrSkillCard(skillCardId) {
      try {
        await this.removeSkillGroup(skillCardId);
      } catch (error) {
        console.log(error.message);
      }
    },

    async editCurrSkillCard(skillCard) {
      try {
        await this.editSkillGroup(skillCard);
        this.editMode = false;
      } catch (error) {
        console.log(error.message);
      }
    },

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
