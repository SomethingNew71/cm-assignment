<template>
  <div
    role="link"
    tabindex="0"
    class="card"
    v-bind:class="{ compact: cardType === 'compact' }"
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
        <h2>{{ title | truncate(66, "...") }}</h2>
        <ratings :config="ratings"></ratings>
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
        <macros></macros>
        <a href="#"> Learn More</a>
      </div>
    </div>

    <!-- Only show the bottom contents if its the full card -->
    <div v-if="cardType === 'full'" class="card-content">
      <div class="row">
        <h1>
          {{ title | truncate(66, "...") }}
        </h1>
      </div>
      <div class="row">
        <ratings :config="ratings"></ratings>
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
        <macros></macros>
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
    ratings: Object
  },
  filters: {
    truncate(text, length, suffix) {
      return text.substring(0, length) + suffix;
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
          color: #1ba677;
          margin: 0;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          text-align: left;
        }
        h2 {
          margin: 0;
          color: #fff;
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
            color: #fff;
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
          color: #fff;
          display: flex;
        }

        .macros {
          padding-left: 15px;
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

  .overlay {
    background: rgba(255, 255, 255, 0.2);
    z-index: 1;
    height: 100%;
    width: 100%;
    opacity: 0;
    top: 0;
    left: 0;
    position: absolute;
    padding: 0;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.9;
      transition: opacity 0.5s;
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
      color: #fff;
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
      line-height: 20px;
    }
  }
}
</style>
