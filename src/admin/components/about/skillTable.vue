<template lang="pug">
  table.skill-table
    skill-row(
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
    )
</template>

<script>
export default {
  components: {
    skillRow: () => import("components/about/skillRow.vue"),
  },
  props: {
    skills: Array
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.skill-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 5px;
  overflow: auto;
}
</style>
