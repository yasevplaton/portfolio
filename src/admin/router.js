import Vue from 'vue';
import VueRouter from 'vue-router';

// import components for routing
import login from "./components/login/login.vue";
import about from "./components/about/about.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    component: login
  },
  {
    path: "/about",
    component: about
  }
];

export default new VueRouter({ routes, mode: 'history' });