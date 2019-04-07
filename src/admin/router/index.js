import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import routes from "@/router/routes";
import store from "@/store";
import { getToken, removeToken } from "@/helpers/token";

Vue.use(VueRouter);

const baseURL = "https://webdev-api.loftschool.com";
const guard = axios.create({ baseURL });

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["auth/userIsLogged"];

  if (isPublicRoute === false && isUserLogged === false) {
    const token = getToken();
    guard.defaults.headers['Authorization'] = `Bearer ${token}`;

    try {
      const response = await guard.get('/user');
      store.commit('auth/SET_USER', response.data.user);
      next(); 
    } catch (error) {
      router.replace('/login');
      removeToken();
    }

  } else {
    next();
  }
});

export default router;