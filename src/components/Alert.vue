<template>
  <div>
    <div :class="'alert alert-' + type" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
