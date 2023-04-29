import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Welcome from '@/components/Welcome.vue'
import AuthInfo from '@/components/AuthInfo.vue'

const routes = [
  {
          path: "/",
          name: "HelloWorld",
          component: HelloWorld
        },
        {
          path: "/register",
          name: "Register",
          component: Register
        },
        {
          path: "/login",
          name: "Login",
          component: Login
        },
        {
          path: "/welcome",
          name: "Welcome",
          component: Welcome
        },
        {
          path: "/auth-info",
          name: "AuthInfo",
          component: AuthInfo
        }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router