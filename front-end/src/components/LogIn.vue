<template>
    <img id="loginLogo" src="../assets/fyndLogo.png" alt="" srcset="">
    <h1 id="loginheading" class="fw-bold text-white">Log In</h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 col-lg-4"></div>
            <div class="col-md-2 col-lg-4">
                <div class="mt-4">
                    <label class="fs-5 fw-bold text-white">Email</label>
                    <input type="text" v-model="email" placeholder="Enter Email">
                </div>
                <div class="mt-4">
                    <label class="fs-5 fw-bold text-white">Password</label>
                    <input type="text" v-model="password" placeholder="Enter Password">
                </div>
                <div class="mt-4">
                    <button id="loginBTN" v-on:click="login" class="btn btn-rounded">Log In</button>
                </div>
                <div class="mt-4">
                    <router-link id="signUpId" to="/sign-up" style="color:green">Create an account? Sign Up</router-link>
                </div>    
            </div>
            <div class="col-md-2 col-lg-4"></div>
        </div>
        
    </div>
   
</template>

<script>
import axios from 'axios'
export default {
    name:'LoginIn',
    data(){
        return{
            email:'',
            password:''
        }
    },
     beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background:black')
    },
    methods:{
        async login(){
            let result = await axios.get(`https://thawing-reaches-79225.herokuapp.com/tutor/user/${this.email}`,{
                email:this.email,
                password:this.password,
                
            })
            if(result.status==200){
                console.log("Hello from vue login")
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push('/home')
            }
            
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'HomeView'})
        }
    }
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