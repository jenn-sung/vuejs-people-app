/* global Vue, VueRouter, axios */



var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "SUP",
      people: [],
      newPerson: {name: "", bio: "",bioVisible: true}
    };
  },
  created: function() {
    axios.get('/people').then(function(response) {
      console.log(this);
      console.log(response.data);
      this.people = response.data;
    }.bind(this));
  },
  methods: {
    addPerson: function() {
      console.log(this.newPerson);
      this.people.push(this.newPerson);
    },
    removePerson: function(inputPerson) {
      console.log(inputPerson);
      var index = this.people.indexOf(inputPerson);
      console.log(index);
      this.people.splice(index, 1);
    },
    toggleBio: function(inputPerson) {
      inputPerson.bioVisible = !inputPerson.bioVisible;
    }
  },

  computed: {}
};
var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});
