import { createApp } from 'vue'
import App from './App.vue'
import LoginPage from './components/pages/LoginPage.vue'
import signup from './components/pages/signup.vue'
import MainPage from './components/pages/MainPage.vue'
import PostPage from './components/pages/PostPage.vue'
import forgotPasswordCheck from "./components/pages/forgotPasswordCheck.vue"
import forgotPasswordRoute from "./components/pages/forgotPasswordRoute.vue"
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'


const routes=[
    {
        path:'/',
        component:LoginPage,
        
    },
    {
        path:'/signup',
        component:signup,
    },
    {
        path:'/mainpage',
        component:MainPage
    },
    {
        path:'/postpage',
        component:PostPage
    },
    {
        path:'/forget-password',
        component:forgotPasswordCheck,
        
    },
    {
        path:'/reset-password',
        component:forgotPasswordRoute
    }
    
];
const store=createStore({
   state(){
      
        return{
            check: localStorage.getItem('check')==='true'||false
        }
        
   },
   mutations:{
      change(state,v){
          state.check=v 
          localStorage.setItem('check',v)
      }
   }
   
  
})

const router=createRouter({
    history:createWebHistory(),
    routes:routes,
    linkActiveClass:'active',
    
})
const app=createApp(App)
app.use(store);
app.use(router);
app.mount('#app')