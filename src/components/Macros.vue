<template>
  <div class="macros">
    <span aria-label="" title="" class="red">{{ red }}</span>
    <span aria-label="" title="" class="blue">{{ blue }}</span>
    <span aria-label="" title="" class="gold">{{ gold }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red: "20g",
      blue: "16g",
      gold: "6g"
    };
  }
}
</script>

<style lang="scss" scoped>
.macros {
  margin-top: 12px;
  margin-bottom: 12px;

  span {
    padding-right: 3px;
  }

  .red:before,
  .blue:before,
  .gold:before {
    display: inline-block;
    content: "•";
    padding-right: 5px;
    font-size: 16px;
    height: 6px;
    width: 6px;
  }
  .red:before {
    color: #f94642;
  }
  .blue:before {
    color: #3177bb;
  }
  .gold:before {
    color: #fda120;
  }
}
</style>
