<template>
  <div>
    <h1>Xin chào, đăng nhập thành công</h1>
    <div>
    <button @click="goBack">Go back home page</button>
  </div>
  </div>
  
</template>

<script>
export default {
    name: "Welcome",
    methods: {
    goBack() {
        this.$router.push("/");
    }
}
}

</script>

<style>

</style>