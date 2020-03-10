<template>
  <div class="macros">
    <!-- With the Aria Labels and the titles you will get browser based tooltips providing
    the complete name of the element when you hover. -->
    <span aria-label="Carbs" title="Carbs" class="carbs">
      {{ carbs }}
    </span>
    <span aria-label="Protien" title="Protien" class="protein">
      {{ protein }}
    </span>
    <span aria-label="Fats" title="Fats" class="fats">
      {{ fats }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carbs: "20g",
      protein: "16g",
      fats: "6g"
    };
  }
}
</script>

<style lang="scss" scoped>
.macros {
  span {
    padding-right: 3px;
  }

  .carbs:before,
  .protein:before,
  .fats:before {
    display: inline-block;
    content: "•";
    padding-right: 5px;
    font-size: 28px;
    height: 6px;
    width: 6px;
  }
  .carbs:before {
    color: #f94642;
  }
  .protein:before {
    color: #3177bb;
  }
  .fats:before {
    color: #fda120;
  }
}
</style>
