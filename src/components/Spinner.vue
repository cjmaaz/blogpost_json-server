<template>
  <div class="spin"></div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.spin {
  display: block;
  width: 40px;
  height: 40px;
  margin: 30px auto;
  border: 3px solid transparent;
  border-top-color: salmon;
  border-radius: 50%;
  animation: spin 1s ease infinite;
}
@keyframes spin {
  to {
    transform: rotateZ(360deg);
  }
}
</style>