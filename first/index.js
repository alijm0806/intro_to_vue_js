/* global Vue */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!!!!",
      name: 'henry',
      city: 'san francisco',
      fruits: ['mangosteen', 'sumo mandarin', 'rose gold pineapple', 'dragonfruit'],
      newFruit: "",
      showInfo: true
    };
  },
  methods: {
    changeMessage: function () {
      console.log('in change message');
      this.name = 'george';

    },
    addFruit: function () {
      console.log('adding fruit...');
      // make a new variable (newFruit)
      // push it in to the array
      this.fruits.push(this.newFruit);

    },
    toggleMessage: function () {
      console.log('toggling message...');
      // if (this.showInfo === true) {
      //   this.showInfo = false;
      // } else {
      //   this.showInfo = true;
      // }
      this.showInfo = !this.showInfo;
    }
  }
};

Vue.createApp(App).mount('#app');