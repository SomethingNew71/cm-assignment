import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

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
  template: `
    <PremiumRecipeCard
      :energyUnits="energyUnits"
      :calories="calories"
      :favorite="favorite"
      :length="length"
    />`,
  methods: { action: action("clicked") }
});
