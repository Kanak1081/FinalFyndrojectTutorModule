<template>

    <div class="navbar">
        <a  href="/home"> Dashboard</a>
        <a href="/add-course"> Add Courses</a>
        <a href="/display-courses"> View Courses</a>
        <a v-on:click="logout" href="#"> Logout</a>
    </div>

    
</template>

<script>
export default {
    name:'HeaderView',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'LogIn'})
        }
    }
}
</script>

<style>

.navbar {
  margin: 0;
  padding: 0;
  width: 10%;
  position: fixed;
  height: 100%; 
  overflow: auto;
  background:#069ba2;
}

.navbar a {
  display: block;
  color: white;
  padding: 16px; 
  font-weight:600;
  text-decoration: none;
}
 


.navbar a:hover{
  display: block;
  font-weight:600;
  cursor: pointer;
  color: black;
}



@media screen and (max-width: 700px) {
  .navbar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .navbar a {float: left;}
}

@media screen and (max-width: 400px) {
  .navbar a {
    text-align: center;
    float: none;
  }
}
</style>
