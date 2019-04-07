<template lang="pug">
  ul.work-cards__list
    li.work-cards__item.work-cards__item--new-card
      button(
        type="button"
        @click="$emit('openWorkForm')"
      ).btn.btn--add-new-card
        span.btn__new-card-icon
        span.btn__new-card-title Добавить работу
    li.work-cards__item
      work-card
    li.work-cards__item
      work-card
</template>

<script>
export default {
  components: {
    workCard: () => import("components/works/workCard.vue"),
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.work-cards__list {
  display: grid;
  grid-template:
    "card card card" max-content / 1fr 1fr 1fr;
  grid-gap: 30px;

  @include tablets {
    grid-template:
    "card card" max-content / 1fr 1fr;
    grid-gap: 20px;
  }

  @include big-phones {
    grid-template: "card" max-content / 1fr;
    grid-gap: 10px;
  }
}

.work-cards__item {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
</style>
