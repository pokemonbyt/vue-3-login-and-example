<template>
  <div class="card">
    <div class="card-header">Form đăng ký tài khoản</div>

    <div class="card-body">
      <form @submit.prevent="saveData">
        <label>Tài khoản</label>
        <input
          type="text"
          v-model="users.username"
          name="username"
          id="username"
          class="form-control"
        />

        <label>Tên</label>
        <input
          type="text"
          v-model="users.name"
          name="name"
          id="name"
          class="form-control"
        />

        <label>Phân loại người dùng</label>
        <input
          type="text"
          v-model="users.types"
          name="types"
          id="types"
          class="form-control"
        />

        <label>Mật khẩu</label>
        <input
          type="password"
          v-model="users.password"
          name="password"
          id="password"
          class="form-control"
        />

        <input type="submit" value="Save" class="btn btn-success btnSave" />
      </form>
      <div class="backDiv">
        <button @click="goBack">Go back homepage</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      result: {},
      users: {
        username: "",
        name: "",
        types: "",
        password: ""
      }
    };
  },
  created() {}, //Gọi api trước lúc load trang ở đây
  mounted() { //Gọi api sau khi load trang ở đây
    console.log("Đã gọi tới hàm mounted........");
  },
  methods: {
    saveData() {
      console.log(this.users);
      axios
        .post(
          "http://192.168.126.130:89/api/v1/user/create-account",
          this.users
        )
        .then(({ data }) => {
          console.log(data);
          try {
            if (data.data === true) {
              alert("Tạo người dùng thành công");
              this.$router.push("/");
            }
            else {
              alert("Tạo người dùng Không thành công");
            }
          } catch (err) {
            alert("Tạo người dùng thất bại");
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
  color: red;
}

.backDiv {
  float: left;
}
.backDiv button {
  margin-top: 5px;
  background-color: green;
  color: white;
  border: 0px;
  border-radius: 5px;
}

.btnSave {
  margin-top: 5px;
}
</style>
