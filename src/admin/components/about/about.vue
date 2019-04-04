<template lang="pug">
  .content-wrapper
    section.section.about
      .container.about__container
        .heading-row.about__heading-row
          h1.title.about__title Блок "Обо мне"
          button(type='button').btn.btn--add-skills-group Добавить группу
        .about__cards

          //- skill-cards
          .skill-cards
            ul.skill-cards__list
              //- skill-card
              li.skill-cards__item
                .skill-card.skill-card--edit
                  .skill-card__heading-row
                    input(type="text" placeholder="Название новой группы").skill-card__title
                    .skill-card__heading-btns
                      .skill-card__edit-mode-btns
                        button(type='button').btn.btn--save-skill-card
                        button(type='button').btn.btn--remove-skill-card
                      .skill-card__read-mode-btns
                        button(type='button').btn.btn--edit-skill-card
                  .skill-card__table
                    table.skill-table
                  footer.skill-card__footer
                    input(type="text" placeholder="Новый навык").skill__input.skill__input--title.skill__input--new-title
                    .skill__percent-block.skill__percent-block--new-skill
                      input(type="text" placeholder="100").skill__input.skill__input--percent.skill__input--new-percent
                      span.skill__percent-prefix.skill__percent-prefix--new-skill %
                    button(type="button").btn.btn--add-skill +

              //- skill-card
              li.skill-cards__item
                .skill-card.skill-card--edit
                  .skill-card__heading-row
                    input(type="text" placeholder="Название новой группы" value="Workflow").skill-card__title
                    .skill-card__heading-btns
                      .skill-card__edit-mode-btns
                        button(type='button').btn.btn--save-skill-card
                        button(type='button').btn.btn--remove-skill-card
                      .skill-card__read-mode-btns
                        button(type='button').btn.btn--edit-skill-card
                  .skill-card__table
                    table.skill-table
                      tr.skill__row
                        td.skill__col.skill__col--title
                          input(type="text" placeholder="Новый навык" value="GIT").skill__input.skill__input--table.skill__input--title
                        td.skill__col.skill__col--percent
                          .skill__percent-block
                            input(type="text" placeholder="100" value="100").skill__input.skill__input--table.skill__input--percent
                            span.skill__percent-prefix %
                        td.skill__col.skill__col--btns
                          .skill__btns-block
                            .skill__edit-mode-btns
                              button(type='button').btn.btn--save-skill
                              button(type='button').btn.btn--remove-skill
                            .skill__read-mode-btns
                              button(type='button').btn.btn--edit-skill
                              button(type='button').btn.btn--trash-skill
                      tr.skill__row
                        td.skill__col.skill__col--title
                          input(type="text" placeholder="Новый навык" value="Terminal").skill__input.skill__input--table.skill__input--title
                        td.skill__col.skill__col--percent
                          .skill__percent-block
                            input(type="text" placeholder="100" value="100").skill__input.skill__input--table.skill__input--percent
                            span.skill__percent-prefix %
                        td.skill__col.skill__col--btns
                          .skill__btns-block
                            .skill__edit-mode-btns
                              button(type='button').btn.btn--save-skill
                              button(type='button').btn.btn--remove-skill
                            .skill__read-mode-btns
                              button(type='button').btn.btn--edit-skill
                              button(type='button').btn.btn--trash-skill
                      tr.skill__row
                        td.skill__col.skill__col--title
                          input(type="text" placeholder="Новый навык" value="Gulp").skill__input.skill__input--table.skill__input--title
                        td.skill__col.skill__col--percent
                          .skill__percent-block
                            input(type="text" placeholder="100" value="100").skill__input.skill__input--table.skill__input--percent
                            span.skill__percent-prefix %
                        td.skill__col.skill__col--btns
                          .skill__btns-block
                            .skill__edit-mode-btns
                              button(type='button').btn.btn--save-skill
                              button(type='button').btn.btn--remove-skill
                            .skill__read-mode-btns
                              button(type='button').btn.btn--edit-skill
                              button(type='button').btn.btn--trash-skill
                      tr.skill__row
                        td.skill__col.skill__col--title
                          input(type="text" placeholder="Новый навык" value="Webpack").skill__input.skill__input--table.skill__input--title
                        td.skill__col.skill__col--percent
                          .skill__percent-block
                            input(type="text" placeholder="100" value="100").skill__input.skill__input--table.skill__input--percent
                            span.skill__percent-prefix %
                        td.skill__col.skill__col--btns
                          .skill__btns-block
                            .skill__edit-mode-btns
                              button(type='button').btn.btn--save-skill
                              button(type='button').btn.btn--remove-skill
                            .skill__read-mode-btns
                              button(type='button').btn.btn--edit-skill
                              button(type='button').btn.btn--trash-skill
                  footer.skill-card__footer
                    input(type="text" placeholder="Новый навык").skill__input.skill__input--title.skill__input--new-title
                    .skill__percent-block.skill__percent-block--new-skill
                      input(type="text" placeholder="100").skill__input.skill__input--percent.skill__input--new-percent
                      span.skill__percent-prefix.skill__percent-prefix--new-skill %
                    button(type="button").btn.btn--add-skill +


              //- skill-card
              li.skill-cards__item
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
                    table.skill-table
                      tr.skill__row
                        td.skill__col.skill__col--title
                          input(type="text" placeholder="Новый навык" value="HTML5").skill__input.skill__input--table.skill__input--title
                        td.skill__col.skill__col--percent
                          .skill__percent-block
                            input(type="text" placeholder="100").skill__input.skill__input--table.skill__input--percent
                            span.skill__percent-prefix %
                        td.skill__col.skill__col--btns
                          .skill__btns-block
                            .skill__edit-mode-btns
                              button(type='button').btn.btn--save-skill
                              button(type='button').btn.btn--remove-skill
                            .skill__read-mode-btns
                              button(type='button').btn.btn--edit-skill
                              button(type='button').btn.btn--trash-skill
                      tr.skill__row.skill__row--edit
                        td.skill__col.skill__col--title
                          input(type="text" placeholder="Новый навык" value="CSS3").skill__input.skill__input--table.skill__input--title
                        td.skill__col.skill__col--percent
                          .skill__percent-block
                            input(type="text" placeholder="100").skill__input.skill__input--table.skill__input--percent
                            span.skill__percent-prefix %
                        td.skill__col.skill__col--btns
                          .skill__btns-block
                            .skill__edit-mode-btns
                              button(type='button').btn.btn--save-skill
                              button(type='button').btn.btn--remove-skill
                            .skill__read-mode-btns
                              button(type='button').btn.btn--edit-skill
                              button(type='button').btn.btn--trash-skill
                      tr.skill__row
                        td.skill__col.skill__col--title
                          input(type="text" placeholder="Новый навык" value="JavaScript").skill__input.skill__input--table.skill__input--title
                        td.skill__col.skill__col--percent
                          .skill__percent-block
                            input(type="text" placeholder="100").skill__input.skill__input--table.skill__input--percent
                            span.skill__percent-prefix %
                        td.skill__col.skill__col--btns
                          .skill__btns-block
                            .skill__edit-mode-btns
                              button(type='button').btn.btn--save-skill
                              button(type='button').btn.btn--remove-skill
                            .skill__read-mode-btns
                              button(type='button').btn.btn--edit-skill
                              button(type='button').btn.btn--trash-skill
                      tr.skill__row
                        td.skill__col.skill__col--title
                          input(type="text" placeholder="Новый навык" value="jQuery & Vue.js").skill__input.skill__input--table.skill__input--title
                        td.skill__col.skill__col--percent
                          .skill__percent-block
                            input(type="text" placeholder="100").skill__input.skill__input--table.skill__input--percent
                            span.skill__percent-prefix %
                        td.skill__col.skill__col--btns
                          .skill__btns-block
                            .skill__edit-mode-btns
                              button(type='button').btn.btn--save-skill
                              button(type='button').btn.btn--remove-skill
                            .skill__read-mode-btns
                              button(type='button').btn.btn--edit-skill
                              button(type='button').btn.btn--trash-skill
                  footer.skill-card__footer
                    input(type="text" placeholder="Новый навык").skill__input.skill__input--title.skill__input--new-title
                    .skill__percent-block.skill__percent-block--new-skill
                      input(type="text" placeholder="100").skill__input.skill__input--percent.skill__input--new-percent
                      span.skill__percent-prefix.skill__percent-prefix--new-skill %
                    button(type="button").btn.btn--add-skill +
</template>

<script>
export default {
  
}
</script>


<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.about {
  grid-area: content-area;
  background-image: linear-gradient(rgba(#fff, 0.9), rgba(#fff, 0.9)),
    url("../../../images/bg/mountain-baloon.jpg");
  background-position: center center, center center;
  background-repeat: repeat, no-repeat;
  background-size: cover, cover;
  min-height: 100vh;
}

.about__container {
  @include phones {
    margin: 0;
    width: 100%;
  }
}

.about__heading-row {
  display: flex;
  align-items: center;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.about__title {
  margin-right: 60px;

  @include phones {
    margin-right: 0;
    margin-bottom: 8%;
  }
}
</style>
