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
    cardType: {
      default: text("full or compact", "full")
    },
    energyMeasurement: {
      default: text("Kj or calories", "Kj")
    },
    calories: {
      default: number("Amount of Calories", "900")
    },
    favorite: {
      default: boolean("Is a favorite", "true")
    },
    length: {
      default: number("Duration in mins", "69")
    },
    title: {
      default: text("Name of Food", "Yummy tastey dish")
    },
    rating: {
      default: number("Rating value", 4.5)
    },
    reviewAmount: {
      default: number("Total amount of views", 200)
    },
    showReviewCount: {
      default: boolean("Show total reviews", "true")
    },
    carbs: {
      default: text("Amount of carbs", "6g")
    },
    protein: {
      default: text("Amount of Protein", "30g")
    },
    fats: {
      default: text("Amount of Fats", "10g")
    },
    previewImage: {
      default: text("Image URL (not working *see notes in file*)", "url/to/thing")
    }
  },
  // I have this @click configured to their documentation however I was not able to get the action to trigger.
  // I am thinking I am missing something very obvious here.
  template: `
    <RecipeCard
      :cardType="cardType"
      @click.native="$emit('test-click')"
      :energyMeasurement="energyMeasurement"
      :calories="calories"
      :favorite="favorite"
      :length="length"
      :title="title"
      :rating="rating"
      :reviewAmount="reviewAmount"
      :showReviewCount="showReviewCount"
      :macros="macros"
      :carbs="carbs"
      :protein="protein"
      :fats="fats"
      :previewImage="previewImage"
    />`,
  methods: {
    log: action("click")
  }
});
