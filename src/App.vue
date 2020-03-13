<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <p><strong>Assignment completed by Cole Gentry</strong></p>

      <div class="premium-recipe-wrapper">
        <RecipeCard
          v-for="(recipe, index) in recipes"
          :key="index"
          :cardType="recipe.cardType"
          @click.native="$emit('test-click')"
          :energyUnits="recipe.energyUnits"
          :calories="recipe.calories"
          :favorite="recipe.favorite"
          :length="recipe.length"
          :title="recipe.title"
          :rating="recipe.rating"
          :reviewAmount="recipe.reviewAmount"
          :macros="recipe.macros"
          :carbs="recipe.carbs"
          :protein="recipe.protein"
          :fats="recipe.fats"
          :previewImage="recipe.previewImage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RecipeCard from "./components/RecipeCard.vue";

export default {
  name: "App",
  components: {
    RecipeCard
  },
  data() {
    return {
      recipes: [
        {
          cardType: "full",
          energyUnits: "Kj",
          calories: 483,
          favorite: false,
          length: "59",
          title: "Low Carb Thai Chicken Curry with Coconut Cauliflower Rice",
          rating: 2.5,
          reviewAmount: 200,
          carbs: "20g",
          protein: "16g",
          fats: "6g",
          previewImage: "../assets/meal.png"
        },
        {
          cardType: "compact",
          energyUnits: "calories",
          calories: 483,
          favorite: false,
          length: "74",
          title: "Keto Italian Beef With Cabbage Noodles",
          rating: 4.5,
          reviewAmount: 200,
          carbs: "40g",
          protein: "200g",
          fats: "5g",
          previewImage: "../assets/meal.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

/** Remove these styles when done */
.premium-recipe-wrapper {
  display: flex;
  flex-flow: wrap;
  margin-top: 100px;
  border: 2px dashed red;
  padding: 16px;
}
</style>
