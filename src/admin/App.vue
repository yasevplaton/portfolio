<template lang="pug">
  .content-wrapper

    //- header
    header.header
      .container.header__container
        .header__col.header__col--first
          .user-info.header__col-content
            .user-info__avatar-wrapper
              img(src="../images/content/avatar.jpg" alt="Аватар пользователя").avatar
            .user-info__name Платон Ясев
          .window-desc Панель администрирования
        .header__col.header__col--last
          a(href="#").exit-btn Выйти

    //- nav
    .nav__wrapper
      .container.nav__container
        nav.nav
          ul.nav__list
            - var navItems = ["Обо мне", "Работы", "Отзывы"];
            each item in navItems
              - var activeClass = item === "Обо мне" ? "nav__item--active" : "";
              li(class=`nav__item ${activeClass}`)
                a(href="#").nav__link #{item}

    //- content-block
    .content-block

      //- about section
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
      
      //- works section
      section.section.works
        .container.works__container
          .heading-row.works__heading-row
            h1.title.works__title Блок "Работы"
          
          .work-form-block
            .work-form-block__heading-row Редактирование работы

            form.work-form.work-form-block__content

              .work-form__photo
                .work-form__upload-container
                  .work-form__upload-content
                    span.work-form__upload-desc Перетащите или загрузите для загрузки изображения
                    button(type="button").btn.btn--upload-work-photo Загрузить

              .work-form__text
                  .work-form__row
                    .work-form__col
                      label.work-form__text-block(for="title")
                        span.work-form__label Название
                        input.work-form__input.work-form__input--title#title(type="text" name="title" placeholder="Введите название работы")
                  .work-form__row
                    .work-form__col
                      label.work-form__text-block(for="link")
                        span.work-form__label Ссылка
                        input.work-form__input.work-form__input--link#link(type="text" name="link" placeholder="Вставьте ссылку")
                  .work-form__row.work-form__row--textarea
                    .work-form__col
                      label.work-form__text-block.work-form__text-block--textarea(for="description")
                        span.work-form__label Описание
                        textarea.work-form__textarea#description(name="description" rows="4" placeholder="Введите описание работы")
                  .work-form__row.work-form__row--tags
                    .work-form__col
                      label.work-form__text-block(for="tags")
                        span.work-form__label Добавление тега
                        input.work-form__input.work-form__input--tags#tags(type="text" name="tags" placeholder="Если хотите, добавьте теги")
                  .work-form__row
                    .work-form__col
                      ul.work-form__tags-list
                        li.work-form__tags-item
                          span.work-form__tags-name HTML
                          button(type="button").btn.btn--remove-work-tag
                        li.work-form__tags-item
                          span.work-form__tags-name CSS
                          button(type="button").btn.btn--remove-work-tag
                        li.work-form__tags-item
                          span.work-form__tags-name JavaScript
                          button(type="button").btn.btn--remove-work-tag

                  .work-form__row.work-form__row--btns
                    .work-form__col
                      .work-form__btns
                        button(type="button").btn.btn--cancel-edit-work Отмена
                        button(type="button").btn.btn--save-edit-work Сохранить

          .work-cards
            ul.work-cards__list
              li.work-cards__item.work-cards__item--new-works
                button(type="button").btn.btn--add-new-work
                  span.btn__new-work-icon
                  span.btn__new-work-title Добавить работу
              li.work-cards__item
                .work-card.work-card--edit
                  .work-card__header
                    img(src="../images/content/work-previews/1.jpg" alt="Превью работы").work-card__img
                    .work-card__tags
                      .tags
                        ul.tags__list
                          li.tags__item HTML
                          li.tags__item CSS
                          li.tags__item JavaScript
                  .work-card__content
                    h3.work-card__title Сайт школы образования
                    .work-card__desc
                      p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a(href="//google.com").work-card__link //google.com
                    .work-card__btns
                      button(type="button").btn.btn--work-card-edit Править
                      button(type="button").btn.btn--work-card-remove Удалить
              li.work-cards__item
                .work-card
      
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800&subset=cyrillic');
@import "normalize.css";
@import "./styles/base.pcss";
@import "./styles/blocks/*.pcss";
</style>
