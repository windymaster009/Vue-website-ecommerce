
<template>
  <div class="container1">
    <div class="card mb-3" style="max-width: 100%; ">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="car.ImageCar" class="img-fluid rounded-start" alt="..." >
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ car.Brand }}</h5>
            <h6 class="card-title">{{ car.Model }}</h6>
            <p class="card-text">{{ car.Description }}</p>
            <p class="card-text"><small class="text-muted">{{ car.Price }}$</small></p>
            <h5>Detail</h5>
            <p>{{ car.Detail }}</p>

           

          </div>
        </div>
      </div>
    </div>
  </div>


  

</template>
<style></style>
<script>
import axios from "axios";

export default {
  name: "MusicDetail",
  components: {},
  data: function () {
    return {
      car: {},
     
    };
    
  },

  created: async function () {

    if (this.$route.params.id) {
    
      axios.get(`http://localhost:5000/products/${this.$route.params.id}`).then(response => {
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



</style>