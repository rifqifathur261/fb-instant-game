<template>
  <div class="h-screen flex justify-center items-center flex-col">
    <!-- <LoginPage v-if="!isAuth" /> -->
    <!-- <Beranda v-else @auth="cek"/> -->
    <!-- <Beranda /> -->
    <!-- <div @auth="cek">HOME</div> -->
    <img src="./assets/logo.svg" alt="" />
    <div class="grid grid-cols-2 gap-6 mt-20">
      <div
        class="
          w-40
          h-40
          shadow-xl
          rounded-xl
          text-slate-600
          flex
          justify-center
          items-center
          p-4
          text-center text-xl
        "
      >
        Popularity
      </div>
      <div
        class="
          w-40
          h-40
          shadow-xl
          rounded-xl
          text-slate-600
          flex
          justify-center
          items-center
          p-4
          text-center text-xl
        "
      >
        Politician Look A Like
      </div>
      <div
        class="
          w-40
          h-40
          shadow-xl
          rounded-xl
          text-slate-600
          flex
          justify-center
          items-center
          p-4
          text-center text-xl
        "
      >
        Want to be Politician
      </div>
      <div
        class="
          w-40
          h-40
          shadow-xl
          rounded-xl
          text-slate-600
          flex
          justify-center
          items-center
          p-4
          text-center text-xl
        "
      >
        Peer Meter
      </div>
      <div
        class="
          w-40
          h-40
          shadow-xl
          rounded-xl
          text-slate-600
          flex
          justify-center
          items-center
          p-4
          text-center text-xl
        "
      >
        Probability Meter
      </div>
      <div
        class="
          w-40
          h-40
          shadow-xl
          rounded-xl
          text-slate-600
          flex
          justify-center
          items-center
          p-4
          text-center text-xl
        "
      >
        Custom Badge
      </div>
    </div>
    <!-- <h1 class="text-8xl">Insocio</h1> -->
    <!-- <div>{{ response }}</div> -->
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