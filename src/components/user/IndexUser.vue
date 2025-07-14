<script setup>
import { onMounted, ref } from "vue";
import Table from "./Table.vue";
import axios from "axios";
import { useRouter } from "vue-router";
const all_users = ref(null);
const myRouter = useRouter()
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
function gotoCreateUser() {
  myRouter.push({ name: 'createUser' })
}
</script>
<template>
  <div class="container">
    <button @click="gotoCreateUser" class="btn btn-primary mt-2">Create User</button>
    <hr>
    <Table :users="all_users" />
    <router-view></router-view>
  </div>
</template>