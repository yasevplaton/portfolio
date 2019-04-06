export default [
  {
    path: "/",
    name: "about",
    component: () => import("components/about/aboutPage.vue")
  },
  {
    path: "/works",
    name: "works",
    component: () => import("components/works/worksPage.vue")
  },
  {
    path: "/reviews",
    name: "reviews",
    component: () => import("components/reviews/reviewsPage.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("components/login/loginPage.vue"),
    meta: {
      public: true
    }
  }
];