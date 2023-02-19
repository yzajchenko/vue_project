<template>
  <ReposItem
    v-for="repos in reposList"
    v-bind:repos="repos"
    v-on:item_click="itemClick"
    :key="repos.name"
  />
</template>

<script>
import ReposItem from "@/components/ReposItem";
export default {
  props: ["reposList"],
  name: "ReposList",
  components: {
    ReposItem,
  },
  methods: {
    itemClick(repos) {
      this.$emit("item_click", repos);
    },
  },
};
</script>
