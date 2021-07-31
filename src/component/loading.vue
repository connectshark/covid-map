<template>
<div class="loader loading-container">
  <div class="line-scale-pulse-out">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.loading-container{
  width: 50px;
  margin: auto;
}
.line-scale-pulse-out > div {
  background-color: #6e6e6e;
}
</style>