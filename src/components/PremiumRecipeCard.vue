<template>
  <div role="link" tabindex="0" class="card" v-on:click="handleClick()">
    <div class="overlay"></div>
    <div class="card-image">
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
      <div class="card-image-footer">
        <img src="../assets/trophy.svg" alt="Image of Trophy" />
        <span> Premium Recipe</span>
      </div>
    </div>
    <div class="card-content">
      <div class="row">
        <h1>
          {{ title | truncate(66, "...") }}
        </h1>
      </div>
      <div class="row">
        <ratings :config="config"></ratings>
      </div>
      <div class="row stats">
        <p class="time">{{ length | duration }}</p>
        <p class="EnergyUnits" v-if="energyUnits === 'Kj'">
          <span id="energy-value">{{ calories * 4.184 }}</span> {{ energyUnits }}
        </p>
        <p class="EnergyUnits" v-else>
          <span id="energy-value">{{ calories }}</span> {{ energyUnits }}</p>
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
    energyUnits: String,
    calories: Number,
    favorite: Boolean,
    length: String
  },
  data() {
    return {
      title: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
      config: {
        rating: 3.7,
        amountOfReviews: 200,
        style: {
          fullStarColor: "#ed8a19",
          emptyStarColor: "#737373"
        }
      }
    };
  },
  methods: {
    handleClick() {
      // If there was specific click handling I would run it here.
      console.log("You clicked the card!");
    }
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

  .overlay {
    background: rgba(66, 66, 66, 0.4);
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

  .row {
    display: flex;
    justify-content: space-between;
  }

  .card-image {
    background: linear-gradient(0deg, rgba(64, 64, 64, 0.3), rgba(64, 64, 64, 0.3)), url(../assets/meal.png);
    height: 200px;
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

    .stats {
      font-size: 12px;
      text-align: center;

      .time:before,
      .EnergyUnits:before {
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
      .EnergyUnits:before {
        background-image: url(../assets/flame.svg);
      }
    }
  }
}
</style>
