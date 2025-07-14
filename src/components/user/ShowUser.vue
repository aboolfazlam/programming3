
<script setup>
import { onMounted,ref, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
let user=ref([])
const route = useRoute();
function get_user(id) {
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(function (response) {
      // handle success
      user.value = response.data;
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
onMounted(() => {
  get_user(route.params.id);
});
watch(()=>route.params.id,(new_id)=>{
  get_user(new_id)
})
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.username }}</p>
            <p class="card-text">{{ user.phone }}</p>
            <p class="card-text">{{ user.email }}</p>
            <router-link :to="{name:'indexUser'}" class="btn btn-primary">Back</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import IndexUser from "./IndexUser.vue";
let user = ref([]);
const route = useRoute();
function get_user(id) {

  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(function (response) {
      // handle success
      user.value = response.data;
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
onMounted (() => {
  get_user(route.params.id)
})
watch(()=>route.params.id,(new_id)=>{
  get_user(new_id)
})
</script>
<template>
  <div class="container">

     <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ user.name}}</h5>
        <p class="card-text">{{user.username}}</p>
        <p class="card-text">{{user.phone}}</p>
        <p class="card-text">{{user.email}}</p>
        <router-link :to="{name:IndexUser}"> </router-link>
  
      </div>
    </div>
  </div>


  </div>
</template>