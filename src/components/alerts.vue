<template>
    <div role="alert">
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Danger
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>{{pesan}}</p>
  </div>
</div>
</template>


<script>
export default {
    props:["judul","pesan"],
  data: () => ({
    input:{
      email:"",
      password:"",
    }

  }),

};
</script>

<style>
</style>