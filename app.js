new Vue({
  el: '#vue-app',

  data:{
    output: 'Your fav food'
  },

  methods:{
    readRefs: function(){
      console.log(this.$refs.testDiv.innerText);
      this.output=this.$refs.input.value;
    }
  }

});

