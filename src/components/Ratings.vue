<template>
  <div class="star-rating" ref="starRating">
    <!-- This is visually hidden but availble to screen readers and crawlers -->
    <p class="visually-hidden">Rating of {{ rating }} out of 5 stars</p>
    <template v-for="(star, index) in computedArray">
      <!-- Full star -->
      <img
        v-if="star === 'full'"
        :key="index"
        src="../assets/star-full.svg"
        alt="Image of a full star"
      />
      <!-- Half Full Star -->
      <!-- For some reason no matter how I exported the SVG from Figma it always seems a bit visually
      off. I did my best to fix this but couldnt find a solution.-->
      <img
        v-if="star === 'half'"
        :key="index"
        src="../assets/star-half.svg"
        alt="Image of a half-full star"
      />
      <!-- Empty Star -->
      <img
        v-if="star === 'empty'"
        :key="index"
        src="../assets/star.svg"
        alt="Image of a empty star"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      validator: value => {
        return value >= 0 || value <= 5;
      }
    }
  },
  computed: {
    computedArray() {
      // Find out the rounded value
      const roundedRating = Math.floor(this.rating);
      const starArray = [];

      // Determine the amount of full stars
      for (let index = 0; index < roundedRating; index++) {
        starArray.push("full");
      }
      // If it was a half rating push a half star in
      if (this.rating.toString().match(/.5/g)) {
        starArray.push("half");
      }
      // Determine the amount of empty stars
      if (starArray.length < 5) {
        // eslint-disable-next-line

        for (let index = 0; starArray.length < 5; index++) {
          starArray.push("empty");
        }
      }
      // Return the final reference array to loop through
      return starArray;
    }
  }
};
</script>

<style lang="scss" scoped>
.star-rating {
  img {
    width: 12px;
    height: 12px;
  }
}
</style>
