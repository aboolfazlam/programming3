<script setup>
import { defineProps } from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.css'
const props = defineProps({
   posts:Object
})
</script>
<template>
  <table class="table table-striped mt-4">
    <thead>
      <tr>
        <th scope="col">userId</th>
        <th scope="col">title</th>
        <th scope="col">body</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post,index) in posts" :key="post.id">
        <td scope="row">{{index + 1}}</td>
        <td v-text="post.title"></td>
        <td v-text="post.body"></td>
        <td>
            <a href="#" class="p-2">
                <i class="bi bi-eye-fill"></i>
            </a>
            <a href="#" class="text-success p-2">
                <i class="bi bi-pencil-fill"></i>
            </a>
            <a href="#" class="text-danger p-2">
                <i class="bi bi-trash-fill"></i>
            </a>
        </td>
      </tr>
      
    </tbody>
  </table>
</template>
<style scoped>
thead th{
    background-color: black;
    color: white;
}
</style>