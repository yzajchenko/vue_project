<template>
  <div class="reposCard">
    <h2 class="cardTitle">Issues</h2>
    <ul v-for="(issue, index) in issues" :key="index">
      <Issue
        v-bind:issue="issue"
        v-bind:index="index"
        v-on:list_comment="listComment"
      />
      <ListComments v-show="index === id" v-bind:comments="comments" />
    </ul>
  </div>
</template>

<script>
import Issue from "@/components/Issue";
import ListComments from "@/components/ListComments";
export default {
  props: ["issues"],
  name: "ReposCard",
  data() {
    return {
      id: "",
      comments: "",
    };
  },
  methods: {
    listComment(index, issue) {
      (this.id = index), (this.comments = issue["node"]["comments"]["edges"]);
    },
  },
  components: {
    ListComments,
    Issue,
  },
};
</script>

<style scoped>
.reposCard {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 30px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: justify;
}
</style>
