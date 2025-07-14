import './assets/main.css'
import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import NotFound from './components/popular/NotFound.vue'
import HomePage from './components/popular/HomePage.vue'
import IndexUser from './components/user/IndexUser.vue'
import IndexPost from './components/post/IndexPost.vue'
import ShowUser from './components/user/ShowUser.vue'
import GeneralTemplate from './components/popular/generalTemplate.vue'
import CreatUser from './components/user/CreatUser.vue'
import Creatpost from './components/post/Creatpost.vue'
const routes = [
    { path: '/', component: HomePage, name:"Home" },
    {
      path:'/user',
      component:GeneralTemplate,
      children:[
        {
          path:'',
          component:IndexUser,
          name:'indexUser'
        },
        {
          path:':id',
          component:ShowUser,
          name:'showUser'
        },
          {
          path:'/creat',
          component:CreatUser,
          name:'creatuser'
        },
      ]
    },

     {
      path:'/post',
      component:GeneralTemplate,
      children:[
        {
          path:'',
          component:IndexPost,
          name:'indexPost'
        },
        {
          path:'create',
          component:Creatpost,
          name:'Createpost'
        },
      ]
    },
    
    {
      path:'/post',
      component:IndexPost,
      name:'indexPost'
    },
    { path: '/:pathMatch(.*)*', component: NotFound,name: 'NotFound' },
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')