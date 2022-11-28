<template>
  <div class="">
    <LoginPage v-if="!isAuth" />
    <!-- <Beranda v-else @auth="cek"/> -->
    <!-- <Beranda v-else @auth="cek"/> -->
    <div v-else @auth="cek">HOME</div>
    
  </div>
</template>

<script>
import LoginPage from "./views/LoginPage.vue";
// import Beranda from "../src/components/Beranda.vue"
import Beranda from "./components/Beranda.vue"
export default {
  data: () => ({
    isAuth: false,
  }),
  components: { LoginPage ,Beranda},
  methods:{
      cek(data){
        console.log(data)
        if (data.status==true) {
           this.isAuth= false;
        }else{
          
          this.isAuth= true;
        }
        console.log(data,"data");
        
      }
  }
};
</script>

<style>
</style>