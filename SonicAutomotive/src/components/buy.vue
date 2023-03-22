<template>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
<h1 style="color: white;">Do you want to buy {{PBrand}} {{Pmodel}}?</h1>
<img :src="PImg" class="img-fluid" alt="..." width="420" height="236" >
<div class="hide1">
              <div class="field">
    
      <div class="control">
        <input class="input" type="hidden" placeholder="Model" v-model="PBrand" />
      </div>
    </div>
    <div class="field">
      
      <div class="control">
        <input class="input"  type="hidden" placeholder="Model" v-model="Pmodel" />
      </div>
    </div>
    <div class="field">
     
      <div class="control">
        <input class="input"  type="hidden" placeholder="Price" v-model="PPrice" />
      </div>
    </div>
    <div class="field">
      
      <div class="control">
        <input class="input"  type="hidden" placeholder="Image" v-model="PImg" />
      </div>
    </div>
            </div>
            <br>
            <div class="control" style="justify-content: space-between;">
        <button class="btn btn-success" @click="saveProduct"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Buy</button>       <router-link :to="'/' "><a href="#" class="btn btn-danger"><i class="fa fa-ban" aria-hidden="true"></i> Cancel</a> </router-link>
        
      </div>
      <br>
</template>
<script>
import axios from "axios";
export default {
    name: 'product',
    
    data() {
        return {
          PBrand: "",
          Pmodel:"",
          PPrice: "",
          PImg:"",
          

        };
      },

      created: function () {
        this.getProductById();
      },
      methods: {
        // Get Product By Id
        async getProductById() {
          try {
            const response = await axios.get(
              `http://localhost:5000/products/${this.$route.params.id}`
            );
            this.PBrand= response.data.Brand;
            this.Pmodel = response.data.Model;
           
          this.PPrice = response.data.Price;
          this.PImg = response.data.ImageCar;
       

        } catch (err) {
          console.log(err);
        }
      },
      async saveProduct() {
        try {
          await axios.post("http://localhost:5000/order", {
            Brands: this.PBrand,
              Prices: this.PPrice,
              Images: this.PImg,
              Models: this.Pmodel,
          });
          this.PBrand = "";
          this.Pmodel = "";
          this.PImg = "";
          this.PPrice = "";
          

          this.$router.push({name:'Home'});
          location.assign("/")
          
        } catch (err) {
          console.log(err);
        }
      },


    }
}
</script>