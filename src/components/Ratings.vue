<template>
  <div class="ratings">

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
  },
  created() {
  }
};
</script>

<style lang="scss" scoped>

</style>
