<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import {useRouter} from 'vue-router'
const router=useRouter()
let usernameError = ref('')
let emailError = ref('')
let form = reactive({
  name: '',
  phone: '',
  email: '',
  username: ''
})
function saveNewUser() {
  axios
    .post(`https://jsonplaceholder.typicode.com/users`, {
      name: form.name,
      username: form.username,
      email: form.email,
      phone: form.phone,
    })
    .then(function (response) {
      // handle success
      Swal.fire({
        title: "User Created!",
        icon: "success",
        draggable: true
      });
      router.push({name:'indexUser'})

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}
function validator() {
  if (form.username == '')
    usernameError.value = "Username is required!"
  else
    usernameError.value = ""

  if (form.email == '')
    emailError.value = "email is required!"
  else
    emailError.value = ""

  if (form.username !== "" && form.email !== "") {
    saveNewUser()
  }

}
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input v-model="form.name" type="text" class="form-control" id="exampleFormControlInput1"
              placeholder="Name">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label">phone</label>
            <input v-model="form.phone" type="text" class="form-control" id="exampleFormControlInput2"
              placeholder="Phone">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label">Username</label>
            <input v-model="form.username" type="text" class="form-control" id="exampleFormControlInput3"
              placeholder="username">
            <span class="text-danger">{{ usernameError }}</span>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput4" class="form-label">Email address</label>
            <input v-model="form.email" type="email" class="form-control" id="exampleFormControlInput4"
              placeholder="name@example.com">
            <span class="text-danger">{{ emailError }}</span>

          </div>
          <router-link :to="{ name: 'indexUser' }" class="btn btn-secondary">Cancel</router-link>
          <button @click.prevent="validator" class="btn btn-success ms-2">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>