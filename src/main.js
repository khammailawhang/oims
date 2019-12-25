import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import i18n from "./i18n";
import axios from "axios";

import { store } from "./store/store";
import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);

Vue.config.productionTip = false;
// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {
  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = "la";
  }

  // set the current language for i18n.
  i18n.locale = language;
  next();
});

new Vue({
  i18n,
  axios,
  router,
  store: store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
