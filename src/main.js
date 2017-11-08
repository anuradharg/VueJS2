import Vue from 'vue'
import App from './App.vue'

/*
//This block will register the component globally (begin)
import Ninjas from './Ninjas.vue'

Vue.component('ninjas',Ninjas);
//This block will register the component globally (end)
*/

new Vue({
  el: '#app',
  render: h => h(App)
})
