<template>
  <div class="ratings">
    <div v-for="(star, index) in stars" :key="index" class="star-container">
      <svg
        class="star-svg"
        :style="[
          { fill: `url(#gradient${star.raw})` },
          { width: style.starWidth },
          { height: style.starHeight }
        ]"
      >
        <polygon :points="getStarPoints" style="fill-rule:nonzero;" />
        <defs>
          <linearGradient :id="`gradient${star.raw}`">
            <stop
              id="stop1"
              :offset="star.percent"
              stop-opacity="1"
              :stop-color="getFullFillColor(star)"
            ></stop>
            <stop
              id="stop2"
              :offset="star.percent"
              stop-opacity="0"
              :stop-color="getFullFillColor(star)"
            ></stop>
            <stop
              id="stop3"
              :offset="star.percent"
              stop-opacity="1"
              :stop-color="style.emptyStarColor"
            ></stop>
            <stop
              id="stop4"
              offset="100%"
              stop-opacity="1"
              :stop-color="style.emptyStarColor"
            ></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="total" v-if="config.showReviewCount">
      <a href="#">
        <span id="review-count">{{ config.amountOfReviews }}</span> Reviews
      </a>
    </div>
  </div>
</template>

<script>
export default {
  // For the dynamic configuration of the stars I used some code I found online.
  // So the code below this line is pulled form https://codesandbox.io/s/9846q4oz4r for reference
  props: ["config"],
  data() {
    return {
      stars: [],
      emptyStar: 0,
      fullStar: 1,
      totalStars: 5,
      style: {
        fullStarColor: "#FDA01E",
        emptyStarColor: "#D4D6D9",
        starWidth: 14,
        starHeight: 14
      }
    };
  },
  computed: {
    getStarPoints() {
      let centerX = this.style.starWidth / 2;
      let centerY = this.style.starHeight / 2;
      let innerCircleArms = 5;
      let innerRadius = this.style.starWidth / innerCircleArms;
      let innerOuterRadiusRatio = 2.5;
      let outerRadius = innerRadius * innerOuterRadiusRatio;

      return this.calcStarPoints(
        centerX,
        centerY,
        innerCircleArms,
        innerRadius,
        outerRadius
      );
    }
  },
  methods: {
    calcStarPoints(
      centerX,
      centerY,
      innerCircleArms,
      innerRadius,
      outerRadius
    ) {
      let angle = Math.PI / innerCircleArms;
      let angleOffsetToCenterStar = 60;

      let totalArms = innerCircleArms * 2;
      let points = "";
      for (let i = 0; i < totalArms; i++) {
        let isEvenIndex = i % 2 == 0;
        let r = isEvenIndex ? outerRadius : innerRadius;
        let currX = centerX + Math.cos(i * angle + angleOffsetToCenterStar) * r;
        let currY = centerY + Math.sin(i * angle + angleOffsetToCenterStar) * r;
        points += currX + "," + currY + " ";
      }
      return points;
    },
    initStars() {
      for (let i = 0; i < this.totalStars; i++) {
        this.stars.push({
          raw: this.emptyStar,
          percent: this.emptyStar + "%"
        });
      }
    },
    setStars() {
      let fullStarsCounter = Math.floor(this.config.rating);
      for (let i = 0; i < this.stars.length; i++) {
        if (fullStarsCounter !== 0) {
          this.stars[i].raw = this.fullStar;
          this.stars[i].percent = this.calcStarFullness(this.stars[i]);
          fullStarsCounter--;
        } else {
          let surplus = Math.round((this.config.rating % 1) * 10) / 10;
          let roundedOneDecimalPoint = Math.round(surplus * 10) / 10;
          this.stars[i].raw = roundedOneDecimalPoint;
          return (this.stars[i].percent = this.calcStarFullness(this.stars[i]));
        }
      }
    },
    setConfigData() {
      if (this.config) {
        this.setBindedProp(this.style, this.config.style, "fullStarColor");
        this.setBindedProp(this.style, this.config.style, "emptyStarColor");
        this.setBindedProp(this.style, this.config.style, "starWidth");
        this.setBindedProp(this.style, this.config.style, "starHeight");
        if (this.config.isIndicatorActive) {
          this.isIndicatorActive = this.config.isIndicatorActive;
        }
      }
    },
    getFullFillColor(starData) {
      return starData.raw !== this.emptyStar
        ? this.style.fullStarColor
        : this.style.emptyStarColor;
    },
    calcStarFullness(starData) {
      let starFullnessPercent = starData.raw * 100 + "%";
      return starFullnessPercent;
    },
    setBindedProp(localProp, propParent, propToBind) {
      if (propParent[propToBind]) {
        localProp[propToBind] = propParent[propToBind];
      }
    }
  },
  created() {
    this.initStars();
    this.setStars();
    this.setConfigData();
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
