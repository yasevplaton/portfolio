import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from './modules/auth';
import skillCategories from './modules/skillCategories';
import skills from './modules/skills';
import works from './modules/works';

export default new Vuex.Store({
  modules: {
    auth,
    skillCategories,
    skills,
    works
  }
});