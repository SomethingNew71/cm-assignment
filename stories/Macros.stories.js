import { withKnobs, text } from "@storybook/addon-knobs";

import Macros from "../src/components/Macros.vue";

export default {
  title: "Macros",
  component: Macros,
  decorators: [withKnobs]
};
export const Main = () => ({
  components: { Macros },
  props: {
    carbs: {
      default: text("Energy Unit(Kj or calories)", "400g")
    },
    protein: {
      default: text("Amount of Calories", "220g")
    },
    fats: {
      default: text("Is favorite?", "6g")
    }
  },
  template: `
    <macros
      :carbs="carbs"
      :protein="protein"
      :fats="fats"
    ></macros>`
});
