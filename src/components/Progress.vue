<template>
  <div class="text-center">
    <v-progress-circular
      :size="70"
      :width="10"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: 'Progress',
}
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
  position:absolute;
  z-index: 1;
  top: 20%
}
</style>