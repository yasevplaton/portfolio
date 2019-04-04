<template lang="pug">
  .admin-content
    router-view
      
</template>

<script>
import login from "./components/login/login.vue";
import about from "./components/about/about.vue";

export default {
  name: "app",
  data() {
    return {}
  },
  components: {
    login,
    about
  }
};
</script>


<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,600,700,800&subset=cyrillic');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "./styles/base.pcss";
@import "./styles/blocks/*.pcss";

</style>
