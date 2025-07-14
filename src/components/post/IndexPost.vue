<script setup>
import axios from 'axios';
import { onMounted,ref } from 'vue';
import Table from './Table.vue'
import Creatpost from './Creatpost.vue';
import { useRouter } from 'vue-router';
let all_posts=ref(null)
const myRouter=useRouter()
function get_posts(){
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      // handle success
      all_posts.value = response.data;
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
onMounted(()=>{
    get_posts()
})
function gotoCreatuser(){
  myRouter.push({name:'Createpost'})
}
</script>
<template>
  <button @click="gotoCreatuser" class="btn btn-primary"> create Post</button>
    <Table :posts="all_posts"/>
</template>