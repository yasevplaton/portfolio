<template lang="pug">
  .skill-cards
    ul.skill-cards__list
      li.skill-cards__item
        skill-card-new
      li.skill-cards__item
        skill-card
</template>

<script>
export default {
  components: {
    skillCardNew: () => import("components/about/skillCardNew.vue"),
    skillCard: () => import("components/about/skillCard.vue"),
  }
}
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
