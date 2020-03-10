import Vue from "vue";
import App from "./App.vue";
// Decided to use moment for the duration formatting since I am sure we would be using
// more time and duration confiuguration tooling in the larger app.
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
typeof moment.duration.format === "function";

Vue.filter("duration", value => {
  return moment.duration(value).format("h [hrs], m [min]");
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
