<template lang="pug">
  tr.skill__row(
    :class="{ 'skill__row--edit': editMode }"
  )
    td.skill__col.skill__col--title
      input(type="text" placeholder="Новый навык" v-model="editedSkill.title").skill__input.skill__input--table.skill__input--title
    td.skill__col.skill__col--percent
      .skill__percent-block
        input(type="text" placeholder="100" v-model="editedSkill.percent").skill__input.skill__input--table.skill__input--percent
        span.skill__percent-prefix %
    td.skill__col.skill__col--btns
      .skill__btns-block
        .skill__edit-mode-btns
          button(
            type='button'
            @click="editCurrentSkill"
          ).btn.btn--save-skill
          button(
            type='button'
            @click="removeCurrentSkill"
          ).btn.btn--remove-skill
        .skill__read-mode-btns
          button(
            type='button'
            @click="editMode = true"
          ).btn.btn--edit-skill
          button(
            type='button'
            @click="removeCurrentSkill"
          ).btn.btn--trash-skill

</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editMode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions('skills', ['removeSkill', 'editSkill']),

    async removeCurrentSkill() {
      try {
        
        await this.removeSkill(this.skill.id);

      } catch (error) {
        console.error(error.message);
      }

    },

    async editCurrentSkill() {
      try {
        
        await this.editSkill(this.editedSkill);
        this.editMode = false;

      } catch (error) {
        console.error(error.message);
      }

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
