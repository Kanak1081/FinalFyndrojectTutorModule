<template>
<fragment>
  <img id="logo" src="../assets/fyndLogo.png" alt="" srcset="" />
  <h1 id="registerheading" class="fw-bold text-white">Register</h1>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <div class="mt-4">
          <label class="fs-5 fw-bold text-white">Name</label>
          <input
            class="border-rounded"
            type="text"
            v-model="name"
            placeholder="Enter Name"
          />
        </div>
        <div class="mt-4">
          <label class="fs-5 fw-bold text-white">Email</label>
          <input type="text" v-model="email" placeholder="Enter Email" />
        </div>
        <div class="mt-4">
          <label class="fs-5 fw-bold text-white">Password</label>
          <input type="password" v-model="password" placeholder="Enter Password" />
        </div>
        <div class="mt-4">
          <button id="registerBTN" v-on:click="signUp" class="btn btn-rounded">
            Sign Up
          </button>
        </div>
        <div class="mt-4">
          <router-link to="/login" id="loginID"
            >Already have an account? Log In</router-link
          >
        </div>
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
</fragment>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:black");
  },

  methods: {
    async signUp() {
      let result = await axios.post(
        "https://thawing-reaches-79225.herokuapp.com/tutor/user",
        {
          name: this.name,
          email: this.email,
          password: this.password,
        }
      );
      if (result.status == 201) {
        console.log("HELLO FROM VUE SIGN UP");
        this.$router.push("/login");
        console.log(result.data.user);
        localStorage.setItem("user-info", JSON.stringify(result.data));

        localStorage.setItem("userId", result.data.user._id);
      }
      else if(result.status == 409){
        console.log("Email ID already registered!!")
        alert("Email Id already registered!!")
      }
      else{

        alert("Some error occurred")
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
#logo {
  width: 10%;
}
#registerheading {
  font-size: 3rem;
}
input {
  display: block;
  width: 100%;
  padding: 1%;
}
label {
  float: left;
}
#registerBTN {
  background: #774c9e;
  display: block;
  width: 100%;
  padding: 2%;
  color: black;
  font-weight: 800;
}
#loginID {
  color: green;
  font-weight: 600;
  text-decoration: none;
}
</style>