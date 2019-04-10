<template lang="pug">
  section.section.works
    .container.works__container
      .heading-row.works__heading-row
        h1.title.works__title Блок "Работы"
      work-form(
        v-if="workForm.show"
      )
      work-cards
        
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    workForm: () => import("components/works/workForm.vue"),
    workCards: () => import("components/works/workCards.vue"),
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState('works', {
      workForm: state => state.workForm
    })
  },
  methods: {

  },
  created() {
    this.workForm.show = false;
  }
}
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";

.works {
  grid-area: content-area;
  background-image: linear-gradient(rgba(#fff, 0.9), rgba(#fff, 0.9)),
    url("~images/bg/mountain-baloon.jpg");
  background-position: center center, center center;
  background-repeat: repeat, no-repeat;
  background-size: cover, cover;
  min-height: 100vh;
}

.works__container {
  @include phones {
    margin: 0;
    width: 100%;
  }
}
</style>
