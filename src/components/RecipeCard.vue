<template>
  <div
    role="link"
    tabindex="0"
    class="card"
    :class="{ compact: cardType === 'compact' }"
  >
    <div class="overlay"></div>
    <div class="card-image">
      <!-- Full card image layout for premium recipe card -->
      <div v-if="cardType === 'full'" class="card-image-header">
        <img
          v-if="favorite"
          class="favorite"
          src="../assets/heart.svg"
          alt="Heart Icon"
        />
        <img
          v-else
          class="favorite"
          src="../assets/heart-empty.svg"
          alt="Heart Icon"
        />
      </div>
      <!-- Compact card image layout for recipe of the day card -->
      <div v-else-if="cardType === 'compact'" class="card-image-header">
        <h1>RECIPE OF THE DAY</h1>
        <h2 class="truncate-overflow">{{ title }}</h2>
        <ratings
          :rating="rating"
          :reviewAmount="reviewAmount"
          :emptyRatingColor="'$whitefff'"
        />
        <div class="stats">
          <p class="time">{{ length | duration }}</p>
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
      <div v-if="cardType === 'full'" class="card-image-footer">
        <img src="../assets/trophy.svg" alt="Image of Trophy" />
        <span> Premium Recipe</span>
      </div>
      <!-- Compact card Link layout for recipe of the day card -->
      <div v-else-if="cardType === 'compact'" class="card-image-footer">
        <macros :carbs="carbs" :protein="protein" :fats="fats" />
        <a href="#"> Learn More</a>
      </div>
    </div>

    <!-- Only show the bottom contents if its the full card -->
    <div v-if="cardType === 'full'" class="card-content">
      <div class="row">
        <h1 class="truncate-overflow">
          {{ title }}
        </h1>
      </div>
      <div class="row">
        <ratings :rating="rating" :reviewAmount="reviewAmount" />
      </div>
      <div class="row stats">
        <p class="time">{{ length | duration }}</p>
        <p class="energy-units" v-if="energyUnits === 'Kj'">
          <span id="energy-value">{{ calories * 4.184 }}</span>
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

export default {
  components: {
    macros,
    ratings
  },
  props: {
    cardType: String,
    energyUnits: String,
    calories: Number,
    favorite: Boolean,
    length: String,
    title: String,
    rating: Number,
    reviewAmount: Number,
    carbs: String,
    protein: String,
    fats: String
  }
};
</script>

<style lang="scss" scoped>
.card {
  /* Margin is only here to center element for test */
  margin: auto;
  border-radius: 12px;
  overflow: hidden;
  max-width: 340px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
  position: relative;

  .row {
    display: flex;
    justify-content: space-between;
  }

  .stats {
    font-size: 12px;
    text-align: center;

    .time:before,
    .energy-units:before {
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
    .time:before {
      background-image: url(../assets/clock.svg);
    }
    .energy-units:before {
      background-image: url(../assets/flame.svg);
    }
  }

  &.compact {
    .card-image {
      background: linear-gradient(
          0deg,
          rgba(64, 64, 64, 0.6),
          rgba(64, 64, 64, 0.6)
        ),
        url(../assets/meal.png);

      .card-image-header {
        padding-top: 15px;
        padding-left: 15px;

        h1 {
          color: $brandColor;
          margin: 0;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          text-align: left;
        }
        h2 {
          margin: 0;
          color: $white;
          text-align: left;
          font-size: 20px;
        }

        .stats {
          display: flex;
          align-items: flex-start;

          .time,
          .energy-units {
            margin-top: 0;
            padding-top: 5px;
            color: $white;
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
        margin: 0;
        width: 100%;
        padding: 0;
        flex-flow: row;
        align-items: baseline;
        justify-content: space-between;

        a,
        .macros {
          color: $white;
          display: flex;
        }

        a {
          background-color: rgba(255, 255, 255, 0.4);
          padding: 5px 15px;
          border-radius: 15px;
          margin-right: 15px;
          margin-bottom: 10px;
        }
      }
    }
  }

  .card-image {
    background: linear-gradient(
        0deg,
        rgba(64, 64, 64, 0.3),
        rgba(64, 64, 64, 0.3)
      ),
      url(../assets/meal.png);
    height: 200px;
    width: 340px;
    position: relative;

    .favorite {
      position: absolute;
      right: 0;
      padding-right: 15px;
      padding-top: 15px;
    }

    .card-image-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(64, 64, 64, 0.3);
      border-radius: 12px;
      padding: 2px 10px 2px 10px;
      margin: 12px;
      color: $white;
    }
  }

  .card-content {
    padding-left: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    text-align: left;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
