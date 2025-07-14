<script setup>
import { onMounted, ref } from "vue";
import Table from "./Table.vue";
import axios from "axios";
const all_users = ref(null);
const myRouter=roter()
onMounted(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      // handle success
      all_users.value = response.data;
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
});

</script>
<template>
  <div class="container">
    <button class="btn btn-primary" >create user</button>
    <Table :users="all_users"/>
    <router-view></router-view>
  </div>
</template>