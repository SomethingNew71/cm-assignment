import { shallowMount } from "@vue/test-utils";
import { calculateDuration } from "../../src/utils";
import RecipeCard from "../../src/components/RecipeCard.vue";

describe("RecipeCard.vue", () => {
  test("Validate the Kj value", () => {
    const caloriesTestVal = 930;
    const kjConversion = parseInt(caloriesTestVal * 4.184);

    const component = shallowMount(RecipeCard, {
      propsData: {
        cardType: "full",
        energyMeasurement: "Kj",
        calories: caloriesTestVal,
        favorite: false,
        length: 59,
        title: "Low Carb Thai Chicken Curry with Coconut Cauliflower Rice",
        rating: 2.5,
        reviewAmount: 200,
        showReviewCount: true,
        carbs: "20g",
        protein: "16g",
        fats: "6g",
        previewImage: "../assets/meal.png"
      }
    });
    expect(component.vm.convertedCalories).toEqual(kjConversion);
  });

  test("Confirm the length is printed correctly", () => {
    const lengthTestValue = 69;
    const lengthParsed = calculateDuration(lengthTestValue);

    const component = shallowMount(RecipeCard, {
      propsData: {
        cardType: "full",
        energyMeasurement: "Kj",
        calories: 900,
        favorite: false,
        length: lengthTestValue,
        title: "Low Carb Thai Chicken Curry with Coconut Cauliflower Rice",
        rating: 2.5,
        reviewAmount: 200,
        showReviewCount: true,
        carbs: "20g",
        protein: "16g",
        fats: "6g",
        previewImage: "../assets/meal.png"
      }
    });
    expect(component.vm.prettyDuration).toEqual(lengthParsed);
  });
});
