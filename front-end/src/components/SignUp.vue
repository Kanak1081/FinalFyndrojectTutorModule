<template>
  <!-- <img id="logo" src="../assets/fyndLogo.png" alt="" srcset="" />
  <h1 id="registerheading" class="fw-bold text-white">Register</h1> -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4"></div>
      <div class="col-lg-4">
          <form novalidate @submit.prevent="registerUser()">
            <div class="mt-4 form-group">
              <label class="fs-5 fw-bold text-white">Username</label>
              <input class="border-rounded" :class="`form-control ${errors.username ? 'is-invalid' : ''}`" type="text" v-model="username" placeholder="Enter Username"/>
              <div class="invalid-feedback">{{ errors.username }}</div>
            </div>
            <div class="mt-4 form-group">
          <label class="fs-5 fw-bold text-white">Email</label>
          <input :class="`form-control ${errors.email ? 'is-invalid' : ''}`" type="text" v-model="email" placeholder="Enter Email" />
          <div class="invalid-feedback">{{ errors.email }}</div>
        </div>
        <div class="mt-4 form-group">
          <label class="fs-5 fw-bold text-white">Password</label>
          <input :class="`form-control ${ errors.password ? 'is-invalid' : ''}`" type="password" v-model="password" placeholder="Enter Password" />
          <div class="invalid-feedback">{{ errors.password }}</div>
        </div>
        <div class="mt-4 form-group">
          <label class="fs-5 fw-bold text-white">Confirm Password</label>
          <input :class="`form-control ${ errors.password2 ? 'is-invalid' : ''}`" type="password" v-model="password2" placeholder="Confirm Password" />
          <div class="invalid-feedback">{{ errors.password2 }}</div>
        </div>
        
        <div class="mt-4">
          <button id="registerBTN" v-on:click="signUp" class="btn btn-rounded form-control">
            Sign Up
          </button>
        </div>
        <div class="mt-4">
          <router-link to="/login" id="loginID"
            >Already have an account? Log In</router-link
          >
        </div>
          </form>
          
        
      </div>
      <div class="col-lg-4"></div>
    </div>
  </div>
  
</template>

<script>
import validateRegisterInput from "../validation/validateRegisterInput";
//import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      users: [],
    };
  },
  // beforeCreate() {
  //   document.querySelector("body").setAttribute("style", "background:black");
  // },

  // methods: {
  //   async signUp() {
  //     let result = await axios.post(
  //       "https://thawing-reaches-79225.herokuapp.com/tutor/user",
  //       {
  //         name: this.name,
  //         email: this.email,
  //         password: this.password,
  //       }
  //     );
  //     if (result.status == 201) {
  //       console.log("HELLO FROM VUE SIGN UP");
  //       this.$router.push("/login");
  //       console.log(result.data.user);
  //       localStorage.setItem("user-info", JSON.stringify(result.data));

  //       localStorage.setItem("userId", result.data.user._id);
  //     }
  //     else if(result.status == 409){
  //       console.log("Email ID already registered!!")
  //       alert("Email Id already registered!!")
  //     }
  //     else{

  //       alert("Some error occurred")
  //     }
  //   },
  // },
  methods: {
    registerUser() {
      // let user = {
      //   username: this.username,
      //   email: this.email,
      //   password: this.password,
      //   password2: this.password2,
      // };
    

      let user = await axios.post("https://thawing-reaches-79225.herokuapp.com/tutor/user",
        {
          username: this.username,
          email: this.email,
          password: this.password,
          password2:this.password2
        }
      );
      const { isInvalid, errors } = validateRegisterInput(user);

      if (isInvalid) {
        this.errors = errors;
      } 
      else {
        this.errors = {};
        // store user in local storage
        if (localStorage.users) {
          let lsUsers = localStorage.users;
          this.users = JSON.parse(lsUsers);
        }
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.username = "";
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.$router.push("/home");
      }
      // if (result.status == 201) {
      //   console.log("HELLO FROM VUE SIGN UP");
      //   this.$router.push("/login");
      //   console.log(result.data.user);
      //   localStorage.setItem("users", JSON.stringify(result.data));

      //   localStorage.setItem("username", result.data.username);
      // }
    },

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