<template>
  <div
    role="link"
    tabindex="0"
    class="card"
    :class="{ compact: cardType === 'compact' }"
  >
    <div class="overlay"></div>
    <div class="card-image p-l-10">
      <!-- <div
        class="card-image"
        v-bind:style="{
          background: `linear-gradient(
            0deg,
            rgba(64, 64, 64, 0.3),
            rgba(64, 64, 64, 0.3)
          ),
          url(${previewImage})`
        }"
      > -->
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
      <div v-else-if="cardType === 'compact'" class="card-image-header">
        <h1 class="text-uppercase">Recipe of the Day</h1>
        <h2 class="truncate">{{ title }}</h2>
        <ratings name="Test"/>
        <div class="stats">
          <p class="time">{{ prettyDuration }}</p>
          <p class="energy-units" v-if="energyUnits === 'Kj'">
            <span id="energy-value">{{ calories * 4.184 }}</span>
            {{ energyUnits }}
          </p>
          <p class="energy-units" v-else>
            <span id="energy-value">{{ calories }} </span> {{ energyUnits }}
          </p>
        </div>
      </div>

      <!-- Full card Link layout for premium recipe card -->
      <div
        v-if="cardType === 'full'"
        class="card-image-footer row p-l-15 p-b-15 "
      >
        <div class="premium-recipe brand-button light">
          <img src="../assets/trophy.svg" alt="Image of Trophy" />
          <span> Premium Recipe</span>
        </div>
      </div>

      <!-- Compact card Link layout for recipe of the day card -->
      <div v-else-if="cardType === 'compact'" class="card-image-footer">
        <macros :carbs="carbs" :protein="protein" :fats="fats" />
        <a href="#"> Learn More</a>
      </div>
    </div>

    <!-- Only show the bottom contents if its the full card -->
    <div v-if="cardType === 'full'" class="card-content p-l-10 p-t-10">
      <div class="row text-left">
        <h1 class="truncate">{{ title }}</h1>
      </div>
      <div class="row">
        <ratings name="Test" />
      </div>
      <div class="row stats p-b-15 p-r-10">
        <p class="icon time">{{ prettyDuration }}</p>
        <p class="icon energy-units p-l-10" v-if="energyUnits === 'Kj'">
          <span id="energy-value">{{ convertedCalories }}</span>
          {{ energyUnits }}
        </p>
        <p class="energy-units" v-else>
          <span id="energy-value">{{ calories }}</span> {{ energyUnits }}
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
    energyUnits: {
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
    background: linear-gradient(
        0deg,
        rgba(64, 64, 64, 0.3),
        rgba(64, 64, 64, 0.3)
      ),
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
  }

  &.compact {
    color: $white;

    .card-image {
      .card-image-header {
        h1 {
          font-size: 16px;
          color: $brandColor;
        }
        h2 {
          font-size: 20px;
        }

        .stats {
          display: flex;
          align-items: flex-start;

          .time,
          .energy-units {
            display: flex;
            flex-flow: row;
            justify-content: space-between;
            font-size: 14px;
          }
          .time {
            &:before {
              background-image: url(../assets/clock-white.svg);
            }
          }
          .energy-units {
            padding-left: 5px;
            &:before {
              background-image: url(../assets/flame-white.svg);
            }
          }
        }
      }
      .card-image-footer {
        display: flex;
        background-color: rgba(64, 64, 64, 0);
        width: 100%;
        flex-flow: row;
        align-items: baseline;
        justify-content: space-between;

        a,
        .macros {
          color: $white;
          display: flex;
        }
      }
    }
  }
}
</style>
