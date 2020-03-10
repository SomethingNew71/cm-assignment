import { shallowMount } from "@vue/test-utils";
import Ratings from "../../src/components/Ratings.vue";

describe("Ratings.vue", () => {
  test("Ensure correct value appears for review count", () => {
    const testReviewCount = 350;

    const wrapper = shallowMount(Ratings, {
      propsData: {
        config: {
          rating: 3.7,
          amountOfReviews: testReviewCount,
          style: {
            fullStarColor: "#ed8a19",
            emptyStarColor: "#737373"
          }
        }
      }
    });
    const DOMValue = parseInt(wrapper.find("#review-count").text());
    console.log("DOM Value", DOMValue);
    console.log("Test Value", testReviewCount);
    expect(DOMValue).toEqual(testReviewCount);
  });
});
