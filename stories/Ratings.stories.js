import { withKnobs, number } from "@storybook/addon-knobs";

import Ratings from "../src/components/Ratings.vue";

export default {
  title: "Ratings",
  component: Ratings,
  decorators: [withKnobs]
};
export const Main = () => ({
  components: { Ratings },
  props: {
    rating: {
      default: number("Amount of Calories", 4.0)
    }
  },
  template: "<ratings :rating='rating'></ratings>"
});
