import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./../node_modules/bulma/css/bulma.css";
import "vue-multiselect/dist/vue-multiselect.min.css";
import Multiselect from "vue-multiselect";

Vue.component("multiselect", Multiselect);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
