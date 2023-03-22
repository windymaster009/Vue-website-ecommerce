<template>
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel" style="z-index: 0;">
      <div class="carousel-indicators" style="z-index: 0;">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
          <img src="@/assets/nav-Logo/BMW1.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>BMW M5</h5>
            <p>The Best Germeny Car!</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="@/assets/nav-Logo/305172.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>GR supra</h5>
            <p>It is not a car It is Ak47</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="@/assets/nav-Logo/wp6148767.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>GTR35</h5>
            <p>Legendary Godzila</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="@/assets/nav-Logo/m7dypn.jpg" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Mazda Rx-7</h5>
            <p>Legendary Rotatry Engine</p>
          </div>
        </div>
      </div>
  <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> -->
</div>
<br>

<h1 style="text-align: center;text-decoration: underline;color: white;">See All Car Here</h1>

        <br>
    <div class="container ">
       

        <div class="row row-col-4">
            <div class="card" style="width: 18rem; margin-top: 20px;" v-for="item in Carlist" :key="item.id">
                <img :src="item.ImageCar" alt="..." height="144" style="padding-top: 13px;">
                <div class="card-body">
                    <h5 class="card-title">{{ item.Brand }}</h5>

                    <p class="card-text">{{ item.Model }}</p>
                   
                    <div class="row row-cols-2 "> <router-link :to="'/Buy'  + '/' + item.id"><a href="#" class="btn" style="background-color: rgb(245, 88, 12); " ><i
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
<script>
import axios from "axios";

export default {
    name: "CarTable",
    data() {
        return {
            Carlist: [],
            search1: "",
            Carlist1: [],
        };
    },

    created() {
        this.getProducts();
       
    },

    methods: {


        // Get All Products
      async getProducts() {
          try {
              const response1 = await axios.get(`http://localhost:5000/products`);

             this.Carlist = response1.data;
        
          } catch (err) {
                console.log(err);
           }
        },
       





        

    },
};
</script>
