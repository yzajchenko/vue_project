<template>
  <li v-on:click="$emit('list_comment', index, issue)">
    <p>Title: {{ issue["node"]["title"] }}</p>
    <p>State: {{ issue["node"]["state"] }}</p>
    <p>Description: {{ issue["node"]["bodyText"] }}</p>
  </li>
</template>

<script>
export default {
  props: ["issue", "index"],
  name: "Issue",
};
</script>
