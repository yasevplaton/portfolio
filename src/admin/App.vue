<template lang="pug">
  .content-wrapper
    template
      admin-header(v-if="userIsLogged")
      admin-nav(v-if="userIsLogged")
      router-view
      
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "app",
  components: {
    adminHeader: () => import("components/common/adminHeader.vue"),
    adminNav: () => import("components/common/adminNav.vue")
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
