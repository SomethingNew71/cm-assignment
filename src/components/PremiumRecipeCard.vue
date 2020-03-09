<template>
  <div class="card">
    <div class="card-image">
      <img class="favorite" src="../assets/heart.svg" alt="Heart Icon" />
      <div class="card-image-footer">
        <img src="../assets/trophy.svg" alt="Image of Trophy" />
        <span>Premium Recipe</span>
      </div>
    </div>
    <div class="card-content">
      <div class="row">
        <h1>
          {{ title }}
        </h1>
      </div>
      <div class="row">
        <div class="ratings">
          ***** 200 Ratings
        </div>
      </div>
      <div class="row stats">
        <p class="time">{{ length }}</p>
        <p class="calories">{{ calories }} Calories</p>
        <div class="macros">
          <span aria-label="" title="" class="red">{{ red }}</span>
          <span aria-label="" title="" class="blue">{{ blue }}</span>
          <span aria-label="" title="" class="yellow">{{ gold }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
      length: "12H30M5S",
      calories: "489",
      red: "",
      blue: "",
      gold: ""
    };
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

  .row {
    display: flex;
    justify-content: space-between;
  }

  .card-image {
    background: linear-gradient(
        0deg,
        rgba(64, 64, 64, 0.3) rgba(64, 64, 64, 0.3)
      ),
      url(../assets/meal.png);
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
    text-align: left;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 20px;
    }

    .stats {
      font-size: 12px;

      .time:before,
      .calories:before {
        display: inline-block;
        content: " ";
        background-size: 15px 15px;
        height: 15px;
        width: 15px;
      }
      .time:before {
        background-image: url(../assets/clock.svg);
      }
      .calories:before {
        background-image: url(../assets/flame.svg);
      }
    }
  }
}
</style>
