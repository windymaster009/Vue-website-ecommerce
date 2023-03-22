<template>
  <div class="card mb-3" style="max-width: auto;" v-for="item in Order1" :key="item.No">
    <div class="row g-0">


      <cart/>
      <!-- <nav class="navbar fixed-bottom navbar-light bg-light" v-for="item in Order2" :key="item.No">
        <div class="container">


          <div class="col meng">
            <h5>Price: {{ item.t }}$</h5>
            <h5>Quantity: {{ item.total_record }}</h5>
          </div>

          <div class="col srun">
            <button type="button" class="btn btn-success" ><i
                class="fa-solid fa-dumpster">Pre-Order</i>
            </button>

            <button type="button" class="btn btn-danger " @click="deleteProductall()"><i
                class="fa-solid fa-dumpster">Clear</i>
            </button>
          </div>



        </div>
      </nav> -->

      <div class="col-md-4">

        <img :src="item.Images" class="img-fluid rounded-start" alt="...">

      </div>

      <div class="col-md-8">
        <div class="card-body">
          <tr>

            <td>{{ item.Brands }}</td>
            <td>{{ item.Models }}</td>
            <td>{{ item.Prices }}$</td>
          </tr>
          <button type="button" class="btn btn-danger btn-sm" style="border-radius: 100%;"
            @click="deleteProduct(item.No)"><i class="fa-solid fa-dumpster"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
td {
  padding-right: 4px;
}
</style>

<script>
import axios from "axios";
import cart from "@/components/cart.vue"
export default {
  components: {
    cart,
  },
  
  name: "Order",
  
  data() {
    return {
      Order1: [],
      Order2: []

    };
  },

  created() {
    this.getProducts();
    this.getSum();

  },

  methods: {

    // Get All Products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/order");
        this.Order1 = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async deleteProduct(No) {
      try {
        await axios.delete(`http://localhost:5000/order/${No}`);
        this.getProducts();
        location.reload();

      } catch (err) {
        console.log(err);
      }
    },
    async getSum() {
      try {
        const response = await axios.get("http://localhost:5000/order/sum");
        this.Order2 = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    async deleteProductall() {
      try {
        await axios.delete(`http://localhost:5000/order`);
        this.getProducts();
        location.reload();

      } catch (err) {
        console.log(err);
      }
    },

  },
};
</script>
<style scoped>
.navbar {
  height: 12vh;
  width: 50vh;
  margin-left: 158.5vh;
  padding-right: 8vh;
  
}

.reaksa {
  display: flex;
  align-items: center;
}
.meng{
  display: flex;
  margin-left: 36px;

  /* align-items: center; */
}
.srun{
  margin-left: 3vh;
}

</style>