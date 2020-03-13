// Import my duration filter to ensure the time is rendered properly
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import RecipeCard from "../src/components/RecipeCard.vue";

export default {
  title: "RecipeCard",
  component: RecipeCard,
  decorators: [withKnobs]
};

export const Main = () => ({
  components: { RecipeCard },
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
      default: text("Time in total minutes", "87")
    }
  },
  // I have this @click configured to their documentation however I was not able to get the action to trigger.
  // I am thinking I am missing something very obvious here.
  template: `
    <RecipeCard
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
