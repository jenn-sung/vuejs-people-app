/* global Vue, VueRouter, axios */



var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "SUP",
      people: [

        {
          name: "Aaron Rodgers",
          bio: "Packers QB",
          biovisible: true
        },
        {
          name: "Odell Beckham Jr.",
          bio: "Giants WR",
          biovisible: true
        },
        {
          name: "Antonio Brown",
          bio: "Steelers WR",
          biovisible: true
        },
        {
          name: "Deshaun Watson",
          bio: "Texans QB",
          biovisible: true
        },
        {
          name: "Emmanuel Sanders",
          bio: "Broncos WR",
          biovisible: true
        },
        {
          name: "Juju Smith-Schuster",
          bio: "Steelers WR",
          biovisible: true
        }
        
      ],
      personName: "",
      personBio: ""
    };
  },
  created: function() {},
  methods: {},
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
