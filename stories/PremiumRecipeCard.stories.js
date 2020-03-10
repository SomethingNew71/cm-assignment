// Import my duration filter to ensure the time is rendered properly
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);
typeof moment.duration.fn.format === "function";
typeof moment.duration.format === "function";

import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import Vue from "vue";
Vue.filter("duration", value => {
  return moment.duration(value).format("h [hrs], m [min]");
});
import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Main = () => ({
  components: { PremiumRecipeCard },
  props: {
    energyUnits: {
      default: text("Energy Unit(Kj or calories)", "Kj")
    },
    calories: {
      default: number("Amount of Calories", 483)
    },
    favorite: {
      default: boolean("Is favorite?", false)
    },
    length: {
      default: text("ISO_8601 Timestamp", "PT3500S")
    }
  },
  // I have this @click configured to their documentation however I was not able to get the action to trigger.
  // I am thinking I am missing something very obvious here.
  template: `
    <PremiumRecipeCard
      @click="log"
      :energyUnits="energyUnits"
      :calories="calories"
      :favorite="favorite"
      :length="length"
    />`,
  methods: {
    log: action("click")
  }
});
