
<template>
        <br>

 <div class="container ">
       

       <div class="row row-col-4">
           <div class="card" style="width: 18rem; margin-top: 20px;" v-for="item in car" :key="item.id">
               <img :src="item.ImageCar" alt="..." height="144" style="padding-top: 13px;">
               <div class="card-body">
                   <h5 class="card-title">{{ item.Brand }}</h5>

                   <p class="card-text">{{ item.Model }}</p>
                  
                   <div class="row row-cols-2 "> <router-link :to="'/Buy'  + '/' + item.id"><a href="#"  class="btn" style="background-color: rgb(245, 88, 12);"><i
                               class="fa-solid fa-basket-shopping"></i> Buy</a></router-link>
                               <router-link :to="'/' +item.Brand +'/'+ item.id"><a href="#" class="btn btn-primary"><i class="fa-solid fa-circle-info"></i> Info</a> </router-link>
                   </div>

               </div>
               <div class="card-footer">
                   <small class="text" style="color: whitesmoke ;">{{ item.Price }} $</small>
               </div>

               
           </div>
       </div>
   </div>
   <br />
  
  </template>
  <style></style>
  <script>
  import axios from "axios";
  
  export default {
    name: "Carsearch",
    components: {},
    data: function () {
      return {
        car: [],
       
      };
      
    },
  
    created: async function () {
  
      if (this.$route.params.Model) {
      
        axios.get(`http://localhost:5000/${this.$route.params.Model}`).then(response => {
          this.car = response.data;
      
        });
      }
    },
    
    
  };
  </script>
  <style scoped>
  .container1 {
    margin-top: 2vh;
    justify-content: center;
    align-items: center;
    
  
  }
  .row{
    justify-content: space-around;
}
.card{
    background-color: rgb(63, 63, 63);
    color: beige;
}
a:hover{
    color: white;
}
  </style>