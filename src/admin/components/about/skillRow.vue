<template lang="pug">
  tr.skill__row
    td.skill__col.skill__col--title
      input(type="text" placeholder="Новый навык" v-model="editedSkill.title").skill__input.skill__input--table.skill__input--title
    td.skill__col.skill__col--percent
      .skill__percent-block
        input(type="text" placeholder="100" v-model="editedSkill.percent").skill__input.skill__input--table.skill__input--percent
        span.skill__percent-prefix %
    td.skill__col.skill__col--btns
      .skill__btns-block
        .skill__edit-mode-btns
          button(type='button').btn.btn--save-skill
          button(type='button').btn.btn--remove-skill
        .skill__read-mode-btns
          button(type='button').btn.btn--edit-skill
          button(type='button').btn.btn--trash-skill
</template>

<script>
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editedSkill: {...this.skill}
    }
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "./styles/skill.pcss";


.skill__input {
  pointer-events: none;
}
</style>
