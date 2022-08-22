/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Die hard", "titanic", "taken", "Zoolander"],
      newMovie: "",
      image: "https://i.ibb.co/59C7PD9/zoolander.jpg",
      name: "ALI"
    };
  },
  methods: {
    addMovie: function () {
      console.log("in add movie...");
      this.movies.push(this.newMovie)
    }
  }
};

Vue.createApp(App).mount('#app');