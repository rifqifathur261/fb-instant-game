<template>
  <div class="">
    <!-- <LoginPage v-if="!isAuth" /> -->
    <!-- <Beranda v-else @auth="cek"/> -->
    <!-- <Beranda /> -->
    <!-- <div @auth="cek">HOME</div> -->
    <div>{{ response }}</div>
  </div>
</template>

<script>
import LoginPage from "./views/LoginPage.vue";
// import Beranda from "../src/components/Beranda.vue"
import Beranda from "./components/Beranda.vue";
export default {
  data: () => ({
    isAuth: false,
    response: [],
  }),
  components: { LoginPage, Beranda },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.response = json;
      });
  },

  methods: {
    cek(data) {
      console.log(data);
      if (data.status == true) {
        this.isAuth = false;
      } else {
        this.isAuth = true;
      }
      console.log(data, "data");
    },
  },
};
</script>

<style>
</style>