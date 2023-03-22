<template>
    <div>
        <div class="field">
            <label class="label">Product Brand</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Product Brand"
                v-model="productName"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Model</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Model"
                v-model="productModel"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Price"
                v-model="productPrice"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Img</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Image"
                v-model="productImg"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">DeScription</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Description"

                v-model="productD"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Detail</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Detail"

                v-model="productDe"
              />
            </div>
          </div>
          <br />
   
      <div class="control">
        <button class="btn btn-success" @click="saveProduct">SAVE</button>
      </div>
    </div>
  </template>
   
  <script>
  // import axios
  import axios from "axios";
   
  export default {
    name: "AddProduct",
    data() {
      return {
        productName: "",
        productModel:"",
        productPrice: "",
        productImg:"",
        productD:"",
        productDe:"",

      };
    },
    methods: {
      // Create New product
       saveProduct() {
        try {
          axios.post("http://localhost:5000/products", {
            Brand: this.productName,
              Price: this.productPrice,
              ImageCar: this.productImg,
              Model: this.productModel,
              Description: this.productD,
              Detail: this.productDe,
          });
          this.productName = "";
          this.productModel = "";
          this.productImg = "";
        
          this.productPrice = "";
          this.productD = "";
          this.productDe = "";
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