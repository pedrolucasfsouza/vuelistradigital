<template>
  <header>
    <img v-bind:src="require('../assets/logo.png')" />
  </header>
</template>

<script>
export default {
  name: "HeaderVue",
  components: {},
};
</script>

<style scoped>
*,
body,
html {
  border: 0;
  margin: 0;
}

header {
  width: 100%;
  background: #7d28f7;
  display: flex;
  justify-content: center;
  padding: 10px 0px 10px 0px;
}
</style>
