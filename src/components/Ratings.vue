<template>
  <div class="ratings">
    <div v-for="(star, index) in stars" :key="index" class="star-container">
      <!-- I chose to hard code the SVG's directly into the template to give me fine tooth control
      over the colors -->
      <!-- Full star -->
      <svg
        width="12"
        height="12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 9.644L9.66 12l-.971-4.44 3.234-2.987-4.26-.386L6 0 4.335 4.187l-4.259.386L3.31 7.56 2.34 12 6 9.644z"
          :fill="fullColor"
        />
      </svg>
      <!-- Half star -->
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0V0z" fill="#fff" />
        <path
          opacity=".5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 18.074L18.18 22l-1.64-7.4L22 9.621l-7.19-.642L12 2 9.19 8.979 2 9.62 7.46 14.6 5.82 22 12 18.074z"
          :fill="emptyColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 18.074V2L9.19 8.979 2 9.62 7.46 14.6 5.82 22 12 18.074z"
          :fill="fullColor"
        />
      </svg>
      <!-- Empty star -->
      <svg
        width="20"
        height="20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity=".5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10 16.074L16.18 20l-1.64-7.4L20 7.621l-7.19-.642L10 0 7.19 6.979 0 7.621 5.46 12.6 3.82 20 10 16.074z"
          :fill="emptyColor"
        />
      </svg>
    </div>
    <div class="total">
      <a href="#">
        <span id="review-count">{{ reviewAmount }}</span> Reviews
      </a>
    </div>
  </div>
</template>

<script>
export default {
  // For the dynamic configuration of the stars I used some code I found online.
  // So the code below this line is pulled form https://codesandbox.io/s/9846q4oz4r for reference
  props: {
    rating: {
      type: Number,
      validator: value => {
        return value >= 0 || value <= 5;
      }
    },
    reviewAmount: Number,
    fullColor: {
      type: String,
      default: "#FDA01E"
    },
    emptyColor: {
      type: String,
      default: "#D4D6D9"
    },
    showRating: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    determineStars() {
      const starPercentage = (this.rating / 5) * 100;

      console.log(starPercentage);
    }
  },
  created() {
    this.determineStars();
  }
};
</script>

<style lang="scss" scoped>
.ratings {
  font-size: 14px;
  display: flex;
  align-items: center;

  .star-container {
    display: flex;
  }

  .star-container:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
