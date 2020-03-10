import { shallowMount } from "@vue/test-utils";
import PremiumRecipeCard from "../../src/components/PremiumRecipeCard.vue";

describe("PremiumRecipeCard.vue", () => {
  test("Validate the Kj value", () => {
    const caloriesTestVal = 930;
    const kjConversion = parseInt(caloriesTestVal * 4.184);

    const wrapper = shallowMount(PremiumRecipeCard, {
      propsData: {
        energyUnits: "Kj",
        calories: caloriesTestVal,
        favorite: false,
        length: "PT3500S"
      }
    });
    const DOMValue = parseInt(wrapper.find("#energy-value").text());
    console.log("DOM Value", DOMValue);
    console.log("Test Value", kjConversion);
    expect(DOMValue).toEqual(kjConversion);
  });
});
