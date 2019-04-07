import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from './modules/auth';
import skillCategories from './modules/skill-categories';
import skills from './modules/skills';

export default new Vuex.Store({
  modules: {
    auth,
    skillCategories,
    skills
  }
});