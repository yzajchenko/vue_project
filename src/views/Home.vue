<template>
  <div>
    <Loader v-if="repositories.length < 1" />
    <div v-else class="repositories">
      <div class="dropdown">
        <div id="myDropdown" class="dropdown-content">
          <ReposList
            v-bind:reposList="repositories"
            v-on:item_click="itemClick"
          />
        </div>
      </div>
      <ReposCard v-if="issues" v-bind:issues="issues" />
      <div v-else></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "@/components/Loader";
import ReposList from "@/components/ReposList";
import ReposCard from "@/components/ReposCard";
export default {
  name: "Home",
  computed: mapGetters(["repositories"]),
  data() {
    return {
      issues: "",
    };
  },
  methods: {
    itemClick(repos) {
      this.issues = repos["issues"]["edges"];
    },
  },
  async mounted() {
    this.$store.dispatch("fetchRepo", "octocat");
  },
  components: {
    Loader,
    ReposList,
    ReposCard,
  },
};
</script>

<style scoped>
.repositories {
  display: flex;
}

#myInput {
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
}

#myInput:focus {
  outline: 3px solid #ddd;
}

.dropdown {
  position: relative;
  width: 25%;
}

.dropdown-content {
  display: block;
  background-color: #f6f6f6;
  min-width: 230px;
  border: 1px solid #ddd;
}
</style>
