<template>
    <nav class="navbar fixed-bottom navbar-light bg-light" v-for="item in Order2" :key="item.No">
        <div class="container">
            <div class="col meng">
                <h5>Price: {{ item.t }}$</h5>
                <h5>Quantity: {{ item.total_record }}</h5>
            </div>
            <div class="col srun">
                <button type="button" @click="route" class="btn btn-success"><i class="fa-solid fa-dumpster">Pre-Order</i>
                </button>
                <button type="button" class="btn btn-danger " @click="deleteProductall()"><i
                        class="fa-solid fa-dumpster">Clear</i>
                </button>
            </div>
        </div>
    </nav>
</template>
<script>
import axios from "axios";

export default {
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
    route(){
      this.$router.push("/Ordered");
    }

  },
};
</script>
<style scoped>
.navbar{
    width: 52vh;
    margin-left: 154vh;
}
</style>