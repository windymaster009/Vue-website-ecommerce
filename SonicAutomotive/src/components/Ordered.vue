<template>
 
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <h1 style="color: orange;">Please Fill Your Information</h1>
  <div>
    <br/>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <i class="fa-solid fa-signature"></i> <input class="input" type="text" placeholder="Please Input your name" v-model="Customer" />
      </div>
    </div>
    <br/>
    <div class="field">
      <label class="label">PhoneNumber</label>
      <div class="control">
        <i class="fa-solid fa-phone"></i> <input class="input" type="text" placeholder="Phone Number" v-model="Phone" />
      </div>
    </div>
    <br/>
    <div class="field">
     <label class="label">Location</label>
      <div class="control">
        <i class="fa-solid fa-location-dot"></i> <input class="input" type="text" placeholder="Location" v-model="locat" />
      </div>
    </div>
    <br/>
  </div>
  <br/>
  <div class="control">
        <button class="btn btn-success" @click="saveProduct" ><i class="fa-solid fa-money-bill-wave" style="color: white;"></i>OK</button>
      </div>
      <br/>
</template>
<script>
import axios from "axios";
 export default {
    name: "AddOrder",
    data() {
      return {
        Customer:'',
        Phone: "",
        locat: "",
      };
    },
    created() {
    this.getProducts();
   

  },
    methods: {
       getProducts() {
      try {
        const response =  axios.get("http://localhost:5000/order");
        response.data;
      } catch (err) {
        console.log(err);
      }
    },

      // Create New product
       saveProduct() {
        try {
          axios.put(
            "http://localhost:5000/order",
            
            { custumer: this.Customer,
              phone: this.Phone,
              location:this.locat
              
            }
          );
          axios.post("http://localhost:5000/ordered", {
            
          
            
          });
        // axios.delete(`http://localhost:5000/order`);
        // this.getProducts();
          
          
          // this.$router.push("/Admin");
          location.assign("/")
       
        } catch (err) {
          console.log(err);
        }
        
      },
     
    },

}

</script>
<style scoped>
i{
  color: orange;
  size: 30px;
}
</style>