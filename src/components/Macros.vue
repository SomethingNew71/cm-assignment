<template>
  <ul class="macros">
    <!-- With the Aria Labels and the titles you will get browser based tooltips providing
    the complete name of the element when you hover. -->
    <li aria-label="Carbs" title="Carbs" class="icon carbs">
      {{ carbs }}
    </li>
    <li aria-label="Protien" title="Protien" class="icon protein">
      {{ protein }}
    </li>
    <li aria-label="Fats" title="Fats" class="icon fats">
      {{ fats }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    carbs: String,
    protein: String,
    fats: String
  }
};
</script>

<style lang="scss" scoped>
.macros {
  // Normalized the padding and margin to allow card to determine sizing.
  margin: 0;
  padding-left: 0;
  font-size: 12px;

  .icon {
    display: inline;
    list-style: none;

    // Same thing here with padding
    &:nth-child(-n + 2) {
      padding-right: 5px;
    }

    &:before {
      display: inline-block;
      content: "•";
      padding-right: 5px;
      font-size: 28px;
      height: 6px;
      width: 6px;
      position: relative;
      top: 3px;
    }

    // Created global app varibales to normalize colors
    &.carbs:before {
      color: $carbs;
    }
    &.protein:before {
      color: $protein;
    }
    &.fats:before {
      color: $fats;
    }
  }
}
</style>
