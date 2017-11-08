<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
  //Register Ninjas component locally.
  import Ninjas from './Ninjas.vue'


  export default {
    components: {
      'ninjas': Ninjas
    },

    data: function () {
      //data() {
      return {
        title: 'Ninja App'
      }
    }

  }
</script>

<style>

</style>