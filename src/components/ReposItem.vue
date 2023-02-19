<template>
  <p v-on:click="$emit('item_click', repos)">
    {{ repos.name }}
  </p>
</template>

<script>
export default {
  props: ["repos"],
  name: "ReposItem",
};
</script>

<style scoped>
p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: justify;
}

p:hover {
  background-color: #a39d9d;
  cursor: pointer;
}
</style>
