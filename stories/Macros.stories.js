import { withKnobs } from "@storybook/addon-knobs";

import Macros from "../src/components/Macros.vue";

export default {
  title: "Macros",
  component: Macros,
  decorators: [withKnobs]
};
export const Main = () => ({
  components: { Macros },
  template: "<macros></macros>"
});
