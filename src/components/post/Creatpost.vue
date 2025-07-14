<script setup>

import { ref, reactive } from 'vue'
let userNameErorr = ref('')
let TitleErorr = ref('')
let bodyErorr = ref('')



const form = reactive({
    username: '',
    Title: '',
    Body: ''

})


function validate() {
    if (form.username == '')
        userNameErorr.value = 'username is required !'
    else
        userNameErorr.value = ""
    if (form.Title == '')
        TitleErorr.value = 'Title is required !'
    else
        TitleErorr.value = ""
    if (form.Title == '')
        bodyErorr.value = 'Body is required !'
    else
        bodyErorr.value = ""
    if (form.username !== "" && form.Title !== "" && form.body !== "") {
        alert('send')
    }
}
</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"> Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name">
                        <span> {{ userNameErorr }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Title textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <span> {{ TitleErorr }}</span>

                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea2" class="form-label">body textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <span> {{ bodyErorr }}</span>

                    </div>
                    <RouterLink :to="{ name: 'indexPost' }" class="btn btn-secondery">
                        cancel
                    </RouterLink>
                    <button @click.prevent="validate" class="btn btn-primary">save</button>
                </form>
            </div>
        </div>
    </div>
</template>