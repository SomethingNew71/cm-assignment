<template>
  <div class="ratings">
    <span v-for="stars in starRating" :key="stars">
      <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M10 16.074L16.18 20l-1.64-7.4L20 7.621l-7.19-.642L10 0 7.19 6.979 0 7.621 5.46 12.6 3.82 20 10 16.074z" fill="#FDA01E"/></svg>
    </span>
    <span v-for="notStars in (5 - starRating)" :key="notStars">
      <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M10 16.074L16.18 20l-1.64-7.4L20 7.621l-7.19-.642L10 0 7.19 6.979 0 7.621 5.46 12.6 3.82 20 10 16.074z" fill="#AAAEB3"/></svg>
    </span>
    <span> {{ amountOfReviews }} Reviews</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starRating: 3,
      amountOfReviews: 200
    };
  }
}
</script>

<style lang="scss" scoped>
.ratings {
  font-size: 14px;
}
</style>
