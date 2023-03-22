<template>
    
    <div class="footer col-12  ">
    <div class="container">
        
      <div class="d-lg-flex justify-content-between">
        <div>
          <img src="../assets/Logo.png" alt="" width="100" height="60">
        </div>
        <div class="copyright pt-3">
          <p id="footp1">Developed and maintained by @SonicAutoMotive</p>
        </div>
        <div>
          <ul class="d-flex gap-3 list-unstyled pt-3">
          
            <li><a href="#"><i class="fa-brands fa-square-facebook " id="Fb"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-tiktok" id="Tk"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-square-twitter" id="Tk"></i></a></li>
           
          </ul>
        </div>
      </div>
   
</div>
</div>


</template>
<script>
export default{
    name:'foot'
}
</script>
<style scoped>
#Fb{
  color: white;
}
#Tk{
  color: white;
}
#footp1{
  color: white;
  
}
.footer {
    width: 100%;
    background-color: #3f3f3f;
  
    bottom: 0;
}

</style>