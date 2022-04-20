<template>
    <!-- <img id="loginLogo" src="../assets/fyndLogo.png" alt="" srcset="">
    <h1 id="loginheading" class="fw-bold text-white">Log In</h1> -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4" >
                <form novalidate @submit.prevent="loginUser" >
                    <div class="mt-4 form-group" >
                    <label class="fs-5 fw-bold text-white">Username</label>
                    <input type="text" :class="`form-control ${errors.username ? 'is-invalid' : ''}`" v-model="username" placeholder="Enter Username">
                    <div class="invalid-feedback">{{ errors.username }}</div>
                </div>
                <div class="mt-4 form-group" >
                    <label class="fs-5 fw-bold text-white">Email</label>
                    <input type="text" :class="`form-control ${errors.email ? 'is-invalid' : ''}`" v-model="email" placeholder="Enter Email">
                    <div class="invalid-feedback">{{ errors.email }}</div>
                </div>
                <div class="mt-4 form-group">
                    <label class="fs-5 fw-bold text-white">Password</label>
                    <input type="password" :class="`form-control ${errors.password ? 'is-invalid' : ''}`" v-model="password" placeholder="Enter Password">
                    <div class="invalid-feedback">{{ errors.password }}</div>
                </div>
                <div class="mt-4">
                    <button id="loginBTN" v-on:click="login" class="btn btn-rounded form-control">Log In</button>
                </div>
                <div class="mt-4">
                    <router-link id="signUpId" to="/sign-up" style="color:green">Create an account? Sign Up</router-link>
                </div>  
                </form>
                  
            </div>
            <div class="col-lg-4"></div>
        </div>
        
    </div>
   
</template>

<script>
import validateLoginInput from "../validation/validateLoginInput";
//import axios from 'axios'
export default {
    name:'LoginIn',
    data(){
        return{
            username: "",
            password: "",
            errors: {},
        }
    },
    //  beforeCreate () {
    //     document.querySelector('body').setAttribute('style', 'background:black')
    // },
    // methods:{
    //     async login(){
    //         let result = await axios.post("https://thawing-reaches-79225.herokuapp.com/tutor/login",{
    //             email:this.email,
    //             password:this.password
    //         })
    //         if(result.status==200){
    //             console.log("Hello from vue login")
    //             console.log(result.data.user)
    //             localStorage.setItem("user-info",JSON.stringify(result.data))
    //             localStorage.setItem("userId",result.data.user[0]._id)
    //             this.$router.push('/home')
    //         }
    //         else{
    //             alert("Password is incorrect!!")
    //         }
            
    //     }
    // },
    // mounted(){
    //     let user = localStorage.getItem('user-info');
    //     if(user){
    //         this.$router.push({name:'HomeView'})
    //     }
    // }
    methods: {
    loginUser() {
      let credentials = {
        username: this.username,
        password: this.password,
      };

      const { isInvalid, errors } = validateLoginInput(credentials);

      if (isInvalid) {
        this.errors = errors;
      } else {
        this.errors = {};
        // login code goes here
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        let usernameIndex = lsUsers.findIndex(
          (user) => user.username === credentials.username
        );
        if (usernameIndex > -1) {
          let passwordIndex = lsUsers.findIndex(
            (user) => user.password === credentials.password
          );

          if (passwordIndex > -1) {
            let activeUser = lsUsers.find(
              (user) => user.username === credentials.username
            );
            localStorage.setItem("activeUser", JSON.stringify(activeUser));
            this.$router.push("/dashboard");
            window.location.reload();
          } else {
            this.errors.password = "Password does not match!";
          }
        } else {
          this.errors.username = "Username does not exist!";
        }
      }
    },
  },
}
</script>

<style scoped>
#loginLogo{
    width: 10%;
    margin-top: 5%;
}
#loginheading{
    font-size: 3rem;
}

input{
    display: block;
    width:100%;
    padding:1%;
}
label{
    float: left;
}
#loginBTN{
    background:#774c9e;
    display:block;
    width:100%;
    padding:2%;
    color: black;
    font-weight: 800;
}
#signUpId{
    color: green;
    font-weight: 600;
    text-decoration: none;
}
</style>