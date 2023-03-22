<template>
 
  <br>
  <br>
  <br>
  <div>
    <div class="field">
      <label class="label">Brand</label>
      <div class="control">
        <input class="input" type="text" placeholder="Model" v-model="PBrand" />
      </div>
    </div>
    <div class="field">
      <label class="label">Model</label>
      <div class="control">
        <input class="input" type="text" placeholder="Model" v-model="Pmodel" />
      </div>
    </div>
    <div class="field">
      <label class="label">Price</label>
      <div class="control">
        <input class="input" type="text" placeholder="Price" v-model="PPrice" />
      </div>
    </div>
    <div class="field">
      <label class="label">Img</label>
      <div class="control">
        <input class="input" type="text" placeholder="Image" v-model="PImg" />
      </div>
    </div>
    <div class="field">
      <label class="label">DeScription</label>
      <div class="control">
        <input class="input" type="text" placeholder="Description" v-model="PD" />
      </div>
    </div>
    <div class="field">
      <label class="label">Detail</label>
      <div class="control">
        <input class="input" type="text" placeholder="Detail" v-model="PDe" />
      </div>
    </div>
    <br />
    <div class="control">
      <button class="btn btn-success" @click="updateProduct">UPDATE</button>
    </div>
  </div>
  <br />
</template>
   
  <script>
    // import axios
    import axios from "axios";
   
    export default {
      name: "EditProduct",
      data() {
        return {
          PBrand: "",
          Pmodel:"",
          PPrice: "",
          PImg:"",
          PD:"",
          PDe:"",

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
          this.PD = response.data.Description;
          this.PDe = response.data.Detail;

        } catch (err) {
          console.log(err);
        }
      },
   
      // Update product
      async updateProduct() {
        try {
          await axios.put(
            `http://localhost:5000/products/${this.$route.params.id}`,
            {
              Brand: this.PBrand,
              Model: this.Pmodel,
              Price: this.PPrice,
              ImageCar: this.PImg,
              Description: this.PD,
              Detail: this.PDe,
              
            }
          );
          this.PBrand = "";
          this.Pmodel = "";
          this.PPrice= "";
          this.PImg = "";
          this.PD = "";
          this.PDe = "";
          this.$router.push("/Admin");
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
  </script>
   
  <style>
  </style>
   