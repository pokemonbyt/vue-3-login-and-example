<template>
  <div class="hello">
  XIN CHÀO 
  <div>

    <button @click="goToRegister">Đăng ký tài khoản</button>
  
  </div>
  <div>
    <button @click="gotoLogin">Đăng nhập</button>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  methods: {
    goToRegister() {
      this.$router.push('/register')
    },
    gotoLogin() {
      this.$router.push('/login')
    }
  },
};
</script>
