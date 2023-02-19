<template>
  <Home />
</template>

<script>
import Home from "@/views/Home";
export default {
  name: "app",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px auto;
  width: 1200px;
}
</style>
