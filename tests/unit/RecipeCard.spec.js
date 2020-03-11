import { shallowMount } from "@vue/test-utils";
import RecipeCard from "../../src/components/RecipeCard.vue";

describe("RecipeCard.vue", () => {
  test("Validate the Kj value", () => {
    const caloriesTestVal = 930;
    const kjConversion = parseInt(caloriesTestVal * 4.184);

    const wrapper = shallowMount(RecipeCard, {
      propsData: {
        energyUnits: "Kj",
        calories: caloriesTestVal,
        favorite: false,
        length: "PT3500S"
      }
    });
    const DOMValue = parseInt(wrapper.find("#energy-value").text());
    // You will notice a console error regarding the duration filter I use. I felt as though
    // it shouldnt be included in this test so I decided to omit it form the top level imports.
    console.log("DOM Value", DOMValue);
    console.log("Test Value", kjConversion);
    expect(DOMValue).toEqual(kjConversion);
  });
});
