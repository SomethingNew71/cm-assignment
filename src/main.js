import Vue from "vue";
import App from "./App.vue";
// Decided to use moment for the duration formatting since I am sure we would be using
// more time and duration confiuguration tooling in the larger app.
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

Vue.config.productionTip = false;

momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
typeof moment.duration.format === "function";

new Vue({
  render: h => h(App)
}).$mount("#app");

// If there were more filters I would likely move these into their own file.
Vue.filter("duration", value => {
  return moment.duration(value).format("h [hrs], m [min]");
});
