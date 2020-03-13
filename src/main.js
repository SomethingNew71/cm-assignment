import Vue from "vue";
import App from "./App.vue";
// Decided to use moment for the duration formatting since I am sure we would be using
// more time and duration confiuguration tooling in the larger app.

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
