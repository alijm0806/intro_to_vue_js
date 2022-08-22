/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello Vue!",
      todos: [],
    };
  },
  methods: {
    // ...
    loadTodos: function () {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
          console.log(response.data);
          this.todos = response.data;
        });
    }
  }, postTodos: function () {
    axios.post('/https://jsonplaceholder.typicode.com/todos', {
      userId: '1',
      title: 'fugiat veniam minus',
      completed: true
    }).then(response => {
      console.log(response);
      this.todos = response;
    })
  }
};

Vue.createApp(App).mount('#app');