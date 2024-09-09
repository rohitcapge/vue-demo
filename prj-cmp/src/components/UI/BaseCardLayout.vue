<template>
  <div class="baseCard">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.baseCard {
  padding: 10px;
  border: solid 1px;
  box-shadow: 2px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>