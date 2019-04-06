<template lang="pug">
  .content-wrapper
    template
      admin-header
      admin-nav
      router-view
      
</template>

<script>

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    adminHeader: () => import("components/common/adminHeader.vue"),
    adminNav: () => import("components/common/adminNav.vue")
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
