<template lang="pug">
  table.skill-table
    skill-row
    skill-row
</template>

<script>
export default {
  components: {
    skillRow: () => import("components/about/skillRow.vue"),
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
