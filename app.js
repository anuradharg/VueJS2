/*Vue.component('greeting', {
  template: '<p>I am a reusable component</p>',

  data: function(){
    name: 'Ryu'
  }
});
*/

/*
 * Instead of directly using the JSON as a parameter,
 * have the JSON separately in a variable 
 * and pass the  variable as a parameter
 */

var data = {
  name: 'Yoshi'
}

var jsonObj = {
  template: '<p>My name is {{name}}. <button v-on:click="changeName">Change Name</button></p>',

  data: function () {
    return data
    /*{
         name: 'Yoshi'
       }*/
  },

  methods: {
    changeName: function () {
      this.name = "Mario";
    }
  }
};

Vue.component('greeting', jsonObj);

var one = new Vue({
  el: '#vue-app-one'

});

var two = new Vue({
  el: '#vue-app-two',

});