export default {
  actions: {
    async fetchRepo({ commit }, login = octocat) {
      const token = "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";
      const oauth = { Authorization: "bearer " + token };
      const query = `
  query {
    search(query: "user:octocat ", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
          name
          url
            issues(last:5, states:[OPEN,CLOSED]) {
            edges {
              node {
                title
                state
                bodyText
                comments(first:5){
                  edges{
                    node{
                      bodyText
                      createdAt
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }`;
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: oauth,
      });
      const data = await res.json();
      const repositories = data["data"]["search"]["nodes"];

      commit("updateRepo", repositories);
    },
  },
  mutations: {
    updateRepo(state, repositories) {
      state.repositories = repositories;
    },
  },
  state: {
    repositories: [],
  },
  getters: {
    repositories(state) {
      return state.repositories;
    },
  },
};
