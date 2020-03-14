import { shallowMount } from "@vue/test-utils";
import Ratings from "../../src/components/Ratings.vue";

describe("Ratings.vue", () => {
  test("Ensure array always has 5 values", () => {
    const testValues = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    testValues.forEach(value => {
      const component = shallowMount(Ratings, {
        propsData: {
          rating: value
        }
      });
      expect(component.vm.computedArray.length).toEqual(5);
    });
  });
});
