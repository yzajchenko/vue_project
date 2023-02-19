<template>
  <div>
    <h3>Comments</h3>
    <ul v-for="(comment, index) in comments" :key="index">
      <p>Create time:{{ comment["node"]["createdAt"] }}</p>
      <p>Description:{{ comment["node"]["bodyText"] }}</p>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["comments"],
  name: "ListComments",
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: justify;
}
</style>
