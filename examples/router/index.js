import Vue from "vue";
import VueRouter from "vue-router";
import button from "../views/button.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "button",
    component: button,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
