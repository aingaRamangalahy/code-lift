<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="title">CodeLift</div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 64px;
  width: 100vw;
  background: $accent-background-color;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  .title {
    font-size: 20px;
    cursor: pointer;
    font-weight: bolder;
  }
}
</style>