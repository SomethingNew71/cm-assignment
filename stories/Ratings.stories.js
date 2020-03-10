import { withKnobs, object } from "@storybook/addon-knobs";

import Ratings from "../src/components/Ratings.vue";

export default {
  title: "Ratings",
  component: Ratings,
  decorators: [withKnobs]
};
export const Main = () => ({
  components: { Ratings },
  props: {
    config: {
      default: object("Values", {
        rating: 2.5,
        amountOfReviews: 740,
        style: {
          fullStarColor: "#ed8a19",
          emptyStarColor: "#737373"
        }
      })
    }
  },
  template: "<ratings :config='config'></ratings>"
});
