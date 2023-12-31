import { isLoggedIn } from "@/middlewares/isLoggedIn";
import { isBoxInStore } from "../middlewares/isBoxInStore"; 

export default [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomePage.vue"),
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () => import("../views/ErrorPage.vue"),
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/product",
    name: "productPage",
    component: () => import("../views/ProductPage.vue"),
    meta: { layout: "DefaultLayout", middlewares: [isLoggedIn] },
    children: [
      {
        path: "create",
        name: "createProduct",
        component: () => import("@/views/ProductCreate.vue"),
      },
      {
        path: "edit/:id",
        name: "editProduct",
        component: () => import("@/views/ProductEdit.vue"),
        meta: { middlewares: [isBoxInStore] },
      },
    ],
  },
];
