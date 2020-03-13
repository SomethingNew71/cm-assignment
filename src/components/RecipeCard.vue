<template>
  <div
    role="link"
    tabindex="0"
    class="card"
    :class="{
      compact: cardType === 'compact',
      'text-color-white': cardType === 'compact'
    }"
  >
    <div class="overlay"></div>
    <div class="card-image p-l-10">
      <!-- Full card image layout for premium recipe card -->
      <div v-if="cardType === 'full'" class="card-image-header">
        <div class="row">
          <img
            v-if="favorite"
            class="favorite p-t-15 p-r-15"
            src="../assets/heart.svg"
            alt="Heart Icon"
          />
          <img
            v-else
            class="favorite p-t-15 p-r-15"
            src="../assets/heart-empty.svg"
            alt="Heart Icon"
          />
        </div>
      </div>
      <!-- Compact card image layout for recipe of the day card -->
      <div
        v-else-if="cardType === 'compact'"
        class="card-image-header p-t-25 p-l-10 text-left"
      >
        <h1 class="text-uppercase text-color-brand">Recipe of the Day</h1>
        <h2 class="truncate">{{ title }}</h2>
        <ratings :rating="rating" />
        <a href="#" class="total-review-count" v-if="showReviewCount">
          {{ reviewAmount }} Reviews
        </a>
        <div class="stats">
          <p class="icon time">{{ prettyDuration }}</p>
          <p class="icon energy-units" v-if="energyMeasurement === 'Kj'">
            <span>{{ convertCaloriesToKJ }}</span>
            {{ energyMeasurement }}
          </p>
          <p class="icon energy-units" v-else>
            <span class="p-r-5">{{ calories }}</span>
            {{ energyMeasurement }}
          </p>
        </div>
      </div>

      <!-- Full card Link layout for premium recipe card -->
      <div v-if="cardType === 'full'" class="card-image-footer row p-l-5 p-b-5">
        <div class="premium-recipe brand-button light">
          <img src="../assets/trophy.svg" alt="Image of Trophy" />
          <span> Premium Recipe</span>
        </div>
      </div>

      <!-- Compact card Link layout for recipe of the day card -->
      <div
        v-else-if="cardType === 'compact'"
        class="card-image-footer p-l-20 p-b-20 p-r-30"
      >
        <macros :carbs="carbs" :protein="protein" :fats="fats" />
        <a href="#" class="brand-button light m-r-40">
          Learn More
        </a>
      </div>
    </div>

    <!-- Only show the bottom contents if its the full card -->
    <div v-if="cardType === 'full'" class="card-content p-l-10 p-t-10">
      <div class="row text-left">
        <h1 class="truncate">{{ title }}</h1>
      </div>
      <div class="row p-t-10">
        <ratings :rating="rating" />
        <a href="#" class="total-review-count p-l-10" v-if="showReviewCount">
          {{ reviewAmount }} Reviews
        </a>
      </div>
      <div class="row stats p-b-15 p-r-10">
        <p class="icon time">{{ prettyDuration }}</p>
        <p class="icon energy-units p-l-10" v-if="energyMeasurement === 'Kj'">
          <span>{{ convertedCalories }}</span>
          {{ energyMeasurement }}
        </p>
        <p class="icon energy-units" v-else>
          <span class="p-r-5">{{ calories }}</span>
          {{ energyMeasurement }}
        </p>
        <macros :carbs="carbs" :protein="protein" :fats="fats" />
      </div>
    </div>
  </div>
</template>

<script>
import macros from "./Macros";
import ratings from "./Ratings";
import { convertCaloriesToKJ, calculateDuration } from "@/utils";

export default {
  components: {
    macros,
    ratings
  },
  props: {
    cardType: {
      type: String,
      validator: value => {
        return value === "compact" || value === "full";
      }
    },
    energyMeasurement: {
      type: String,
      validator: value => {
        return value === "calories" || value === "Kj";
      }
    },
    calories: Number,
    favorite: Boolean,
    length: String,
    title: String,
    rating: Number,
    reviewAmount: Number,
    showReviewCount: Boolean,
    carbs: String,
    protein: String,
    fats: String,
    previewImage: String
  },
  computed: {
    convertedCalories() {
      // Compute this value at the beginning instead of in the template
      return convertCaloriesToKJ(this.calories);
    },
    prettyDuration() {
      // Compute a pretty verision of duration. Must take in minute value
      // I think in a larger applicaiton ISO would be better long term since
      // its used as a standard across front end apps.
      return calculateDuration(this.length);
    }
    // computeBackgrounds() {
    // Super interesting behavior I have found here regarding the way Webpack
    // decides to import images. If you allow Webpack to treeshake, you have to
    // require() an image in order to use it in a bound property. Even more
    // interestingly thge first require works while the second doesnt, even
    // though they are both strings.

    //   console.log(this.previewImage);
    //   return require('../assets/meal.png');
    //   return require(`${this.previewImage}`);
    // }
  }
};
</script>

<style lang="scss" scoped>
.card {
  /* Margin is only here to center element for test */
  margin: auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  position: relative;
  max-width: 340px;

  .stats {
    font-size: 12px;
    text-align: center;

    .icon {
      &:before {
        display: inline-block;
        content: " ";
        background-size: 15px 15px;
        background-repeat: no-repeat;
        padding-right: 5px;
        height: 15px;
        width: 15px;
        position: relative;
        top: 3px;
      }
      &.time:before {
        background-image: url(../assets/clock.svg);
      }
      &.energy-units:before {
        background-image: url(../assets/flame.svg);
      }
    }
    .macros {
      margin-left: auto;
    }
  }
  .card-image {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(../assets/meal.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    position: relative;

    .favorite {
      position: absolute;
      right: 0;
    }

    .card-image-footer {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .card-content {
    h1 {
      font-size: 18px;
    }
    .total-review-count {
      font-size: 14px;
      margin-right: auto;
    }
  }

  &.compact {
    .card-image {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(../assets/ketobeef.jpg);
      background-position: right;

      .card-image-header {
        h1 {
          font-size: 16px;
        }
        h2 {
          font-size: 20px;
        }

        .stats {
          display: flex;
          align-items: flex-start;

          .icon {
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            font-size: 14px;

            &.time:before {
              background-image: url(../assets/clock-white.svg);
            }
            &.energy-units {
              padding-left: 5px;
              &:before {
                background-image: url(../assets/flame-white.svg);
              }
            }
          }
        }
      }
      .card-image-footer {
        display: flex;
        background-color: rgba(0, 64, 64, 0);
        width: 100%;
        flex-flow: row;
        align-items: baseline;
        justify-content: space-between;

        a,
        .macros {
          font-size: 16px;
          display: flex;
        }
      }
    }
  }
}
</style>
