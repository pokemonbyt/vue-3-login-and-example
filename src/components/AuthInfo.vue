<template>
  <div class="auth-info-container">
    <div class="auth-info-header">Xin chào</div>
    <div class="auth-info-content">
      <p>Username: {{ data?.username }}</p>
      <p>Name: {{ data?.name }}</p>
      <p class="p-cv">Chức vụ: {{ getChucVu }}</p>
      <p>Cấp trên: {{ data?.pid_name }}</p>
    </div>
  </div>

  <div>
    <button @click="getAllUsers">Danh sách toàn bộ người dùng</button>
  </div>

  <div v-show="isVisible">
    <table class="table1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Name</th>
          <th>Types</th>
          <th>Name cha</th>
          <th>Username cha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="userList in usersList" :key="userList.id">
          <td>{{ userList.id }}</td>
          <td>{{ userList.username }}</td>
          <td>{{ userList.name }}</td>
          <td>{{ userList.types }}</td>
          <td>{{ userList.pid_name }}</td>
          <td>{{ userList.pid_username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AuthInfo",
  data() {
    return {
      data: null,
      usersList: null,
      isVisible: false,
    };
  },
  mounted() {
    // get token
    const token = localStorage.getItem("bearer_token");

    axios
      .get("http://192.168.126.130:89/api/v1/auth/info", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        this.data = response.data.data;
        console.log(this.data.data);
      })
      .catch();
  },
  
  methods: {
    getAllUsers() {
        this.isVisible = !this.isVisible;
        console.log(this.isVisible);
        const token = localStorage.getItem("bearer_token");
      axios
        .get("http://192.168.126.130:89/api/v1/user/all", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          this.usersList = response.data.data;
        
        })
        .catch();
    },
  },
  computed: {
    getChucVu() {
      let chuc_vu = "";
      if (this.data) {
        if (this.data.types === 99) chuc_vu = "Ông chủ";
        else chuc_vu = "Lính quèn";
      }
      return chuc_vu;
    },
  },
};
</script>

<style scoped>
.auth-info-container {
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f8f8f8;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  width: 80%;
  max-width: 30rem;
}

.auth-info-header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.auth-info-content p {
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.auth-info-content p:first-child {
  margin-top: 0;
}

.auth-info-content p:last-child {
  margin-bottom: 0;
}

.p-cv {
  color: red;
  font-weight: bold;
}

.table1 {
    color:blue;
    background-color: blanchedalmond;

}
.table1 tr:nth-child(even) {
    background-color: rgb(248, 39, 255);
}

.table1 tr:hover {
    background-color: rgb(19, 252, 108);
}
</style>
