import Vue from "vue";
import Router from "vue-router";
import Settings from "./views/Settings.vue";
import Logs from "./views/Logs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "manual",
      component: () => import("./views/Manual"),
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
    },
    {
      path: "/auto",
      name: "auto",
      component: () => import("./views/Auto"),
    },
    {
      path: "/standby",
      name: "standby  ",
      component: () => import("./views/Standby"),
    },
    
    {
      path: "/logs",
      name: "logs",
      component: Logs,
    },
  ],
});
