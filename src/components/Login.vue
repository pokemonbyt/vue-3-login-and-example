<template>
  <div class="card">
    <div class="card-header">
      Đăng nhập
    </div>
    <div class="card-body">
      <form @submit.prevent="loginAction">
        <label>Tên đăng nhập</label>
        <input
          type="text"
          v-model="users.username"
          name="username"
          id="username"
          class="form-control"
        />
        <label>Mật khẩu</label>
        <input
          type="password"
          v-model="users.password"
          name="pasword"
          id="password"
          class="form-control"
        />
        <input type="submit" value="Đăng nhập" class="btn btn-success" />
      </form>
    </div>
    <div>
        <button @click="goBack">Go back home page</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      result: {},
      users: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    loginAction() {
      console.log(this.users);
      axios.post("http://192.168.126.130:89/api/v1/auth/login", this.users).then(({data}) => {
            console.log(data);
            try {
                if(data.status === 'success') {
                    alert(`Đăng nhập thành công! Xin chào ${this.users.username}`);
                    localStorage.setItem('bearer_token', data.data);
                    this.$router.push('/auth-info')
                
                }
                else alert("Tài khoản hoặc mật khẩu không đúng!");
            }
            catch (err) {
                alert("Đăng nhập thất bại!");
            }
      });
    },
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
.card {
  text-align: left;
}
</style>
