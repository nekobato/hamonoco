import Vue from "vue";
import Router from "vue-router";
import Maps from "./views/Maps.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/maps",
      name: "maps",
      component: Maps
    },
    {
      path: "/auth",
      name: "auth"
    }
  ]
});
