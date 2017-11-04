new Vue({
  el: '#vue-app',
  data: {
    name: 'The Net Ninja',
    job: 'Ninja',
    website: 'http://www.thenetninja.co.uk'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ', ' + this.name;
    }
  }
});
