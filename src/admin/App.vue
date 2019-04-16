<template lang="pug">
  .content-wrapper
    template
      admin-header(v-if="userIsLogged")
      admin-nav(v-if="userIsLogged")
      router-view
    query-tooltip
      
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: "app",
  components: {
    adminHeader: () => import("components/common/adminHeader.vue"),
    adminNav: () => import("components/common/adminNav.vue"),
    queryTooltip: () => import("components/common/queryTooltip.vue")
  },
  computed: {
    ...mapGetters('auth', ['userIsLogged'])
  }
};
</script>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800&subset=cyrillic');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "./styles/base.pcss";
@import "./styles/common-blocks/*.pcss";

</style>
