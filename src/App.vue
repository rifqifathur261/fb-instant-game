<template>
  <div class="">
    <LoginPage v-if="!isAuth" />
    <div v-else>HOME</div>
  </div>
</template>

<script>
import LoginPage from "./views/LoginPage.vue";
export default {
  data: () => ({
    isAuth: false,
  }),
  components: { LoginPage },
};
</script>

<style>
</style>