<template>
    

        <br>
        
     
    <div class="container ">
      <div class="container "> 
        <router-link to="/admin/create"><a
        class="btn btn-success">Create</a></router-link>
      </div>
        <div class="row row-col-2">
            <div class="card mb-3" style="max-width: 540px;" v-for="item in Carlist" :key="item.id">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="item.ImageCar" class="img-fluid rounded-start" alt="...">
    </div>
    
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ item.Brand }}</h5>
        <h6>{{ item.Model }}</h6>
        <p class="card-text">{{ item.Description }}</p>
        <p class="card-text"><small class="text-muted">{{ item.Price }}</small></p>
      </div>
      <div class="ed">
      <a
        class="btn btn-danger"
              @click="deleteProduct(item.id)"
              >Delete</a>  
<router-link :to="'/admin/'  + item.id"><a href="#" class="btn btn-primary">Edit</a> </router-link></div>
    </div>
  </div>
</div>
    </div>
    </div>
    <br />
</template>
<style scoped>

/* .container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
}

.card {
    width: 300px;
    background-color: #fff;
    list-style: none;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7px;
} */
.ed{
  justify-content: space-between;
}
.row{
    justify-content: space-around;
}
</style>
<script>
import axios from "axios";

export default {
    name: "CarTable",
    data() {
        return {
            Carlist: [],
            
        };
    },

    created() {
        this.getProducts();
       
    },

    methods: {
    
        // Get All Products
        async getProducts() {
            try {
                const response = await axios.get("http://localhost:5000/products");
                this.Carlist = response.data;
            } catch (err) {
                console.log(err);
            }
        },

        async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    }

    },
};
</script>
