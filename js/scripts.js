var app = new Vue({
  el: '#app',
  data:{
      dimensions: [],
      localStorageKeyName: "dimensions"
  },
  methods:{
     addDimension(event){
        this.dimensions.push({
            name: this.$refs.dimensionInput.value
        });
        this.saveToLocalStorage();
     },
     saveToLocalStorage(){
       localStorage.setItem(this.localStorageKeyName, JSON.stringify(this.dimensions));
     },
     removeAll(event){
       localStorage.clear()
       this.dimensions = []
     },
  },
  created: function(){
       if (localStorage.getItem(this.localStorageKeyName) !== null){
         this.dimensions = JSON.parse(localStorage.getItem(this.localStorageKeyName))
       }
    }
})
