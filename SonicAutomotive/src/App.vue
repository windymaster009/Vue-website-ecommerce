<template>
  <div class="test col-12">
  <Header></Header>
  <Navbar></Navbar>
  </div>
 

 <br>
 <br>
 <br>
 <br>
 <br>
 

  <router-view />
  <FootTer/>
</template>

<script>
import Header from './components/Header.vue';
import Navbar from './components/navbar.vue';
import FootTer from '@/components/foot.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    FootTer
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(104, 104, 104);
 
}
.test {
  position: fixed;
  z-index: 1;
}
</style>
