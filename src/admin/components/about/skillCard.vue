<template lang="pug">
  .skill-card
    .skill-card__heading-row
      input(type="text" placeholder="Название новой группы" value="Frontend").skill-card__title
      .skill-card__heading-btns
        .skill-card__edit-mode-btns
          button(type='button').btn.btn--save-skill-card
          button(type='button').btn.btn--remove-skill-card
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
export default {
  components: {
    skillTable: () => import("components/about/skillTable.vue")
  }
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
@import "./styles/skill-card.pcss";
@import "./styles/skill.pcss";

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
