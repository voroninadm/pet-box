export default [
  {
    path: "",
    name: "home",
    component: () => import("../views/HomePage.vue"),
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/spage",
    name: "secondPage",
    component: () => import("../views/SecondPage.vue"),
    meta: { layout: "DefaultLayout" },
  },
];
