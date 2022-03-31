<template>
    <div class="nav">
        <a href="/home"> Home</a>
        <a href="/add-course"> Add Courses</a>
        <!-- <a href="/update-course">Update Courses</a> -->
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
    // props:['count']
}
</script>

<style>
 .nav{
    background: #49b6c4;
    overflow:auto;
    height: 100%;
    width: 200px;
    position: fixed;
    margin: 0;
    padding: 0;
} 
.nav a{
    display: block;
    text-decoration: none;
    font-size: 20px;
    padding: 5%;
    color: black;
    font-weight: 600;
}


.nav a:hover {
    display: inline;
  background: #5474a7;
  color:black;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 10%;
  z-index:-1;
}

</style>