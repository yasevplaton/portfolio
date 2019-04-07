<template lang="pug">
  .skill-cards
    ul.skill-cards__list
      li.skill-cards__item(v-if="showAddingForm")
        skill-card-new(@closeNewSkillCard="$emit('closeNewSkillCard')")
      li.skill-cards__item(
        v-for="category in categories"
        :key="category.id"
      )
        skill-card(
          :category="category"
          :skills="filterSkillsByCard(category.id)"
        )
</template>

<script>
import { mapActions, mapState } from "vuex";
import $axios from "@/requests";

export default {
  components: {
    skillCardNew: () => import("components/about/skillCardNew.vue"),
    skillCard: () => import("components/about/skillCard.vue")
  },
  props: {
    showAddingForm: Boolean
  },
  computed: {
    ...mapState('skillCategories', {
      categories: state => state.categories
    }),
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions("skillCategories", ["fetchCategories"]),
    ...mapActions("skills", ["fetchSkills"]),

    filterSkillsByCard(skillGroupId) {
      return this.skills.filter(skill => skill.category === skillGroupId);
    }
  },
  async created() {
    try {
      await this.fetchCategories();
    } catch (error) {
      console.log(error.message);
    }

    try {
      await this.fetchSkills();
    } catch (error) {
      console.log(error.message);
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.skill-cards__list {
  display: grid;
  grid-template: "card card" max-content / 1fr 1fr;
  grid-gap: 30px;

  @include mini-tablets {
    grid-template: "card" max-content / 1fr;
    grid-gap: 10px;
  }
}

.skill-cards__item {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
</style>
