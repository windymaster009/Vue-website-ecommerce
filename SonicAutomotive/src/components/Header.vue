<template>
  <header class="header">
    <img src="../assets/Logo.png" alt="" width="100" height="60">

    <nav class="nav ">
      <ul class="nav-links">
        <li class="link">
          <router-link to="/"><i class="fa-solid fa-shop"></i> Home</router-link>
        </li>
        <li class="link">
          <router-link to="/contact"><i class="fa-solid fa-envelope"></i> Contact</router-link>
        </li>
        <li class="link">
          <router-link to="/about"><i class="fa-solid fa-user"></i> About</router-link>
        </li>
        <div class="field">
      
      <div class="control">
        <input class="input"  type="Text" placeholder="Find"  v-model="search1" />      <Button class="btn btn-sm" @click="search" style="color: white;"><i class="fa fa-search" aria-hidden="true"></i></button>
      </div>
    </div>
      </ul>
      
    </nav>
    <slot></slot>
    <button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><i class="fa-solid fa-cart-shopping" style="color: white;"></i><h6 style="color: white;">addcart</h6> </button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel" >Pre-OrderList</h5>
    
    
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
   

  </div>
  
  <div class="offcanvas-body">
   
    <off/>
    
  </div>
 
</div>

    

    <!-- Add to cart button -->

    <!-- <router-link class="srun" to="/btn"><button type="button" class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span class="visually-hidden">unread messages</span>
        </span>
      </button></router-link> -->
      <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Order</button>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">ADD TO CART</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div> -->

  </header>
</template>
  
<script>
import off from '@/order/Offc.vue'


export default {
  components: {
   off
},
data(){
  return{
    search1:''
  }
},
create(){

},
methods:{
  search(){
    // this.$router.push(`/${this.search1}`)
location.assign(`/${this.search1}`)

     

   
  }
}

}

</script>
  
<style scoped>
.btn{
  background-color: orange;
}
.offcanvas{
    height: 92.5vh !important;
    width: 52vh !important;
}
.header {
  width: 100%;
  height: 70px;
  background-color: #3f3f3f;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

}

.nav {
  width: 100%;
  
}

.nav-links {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline-start: 0 !important;
  margin-left: -86px;
  margin-top: 15px;
}

.link {
  width: 150px;
  height: 40px;
  list-style: none;
  margin-left: 150px;
}

a {
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.link:hover {
  background-color: orange;
  color: black;
  border-radius: 25px;
}

.link a:hover {
  color: black;
  border-radius: 25px;
}

.srun {
  margin-right: 5vh;
}

.mengsrun {
  margin-left: 5vh;
}
</style>
  