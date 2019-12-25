import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../i18n";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Inspection from "../views/Inspection.vue";
// import Register from "../views/Register.vue";
// import Inspections from "../views/Inspections.vue";
// import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "Register",
        name: "/Register",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/Register.vue")
      },
      {
        path: "Inspection",
        name: "/Inspection",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/Inspection.vue")
      },
      {
        path: "Inspections",
        name: "/Inspections",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/Inspections.vue")
      },
      {
        path: "Service",
        name: "/Service",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/Service.vue")
      },
      {
        path: "User",
        name: "/User",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/User.vue")
      },
      {
        path: "Login",
        name: "/Login",
        component: () =>
          import(/* webpackChunkName: "contact" */ "../views/Login.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
