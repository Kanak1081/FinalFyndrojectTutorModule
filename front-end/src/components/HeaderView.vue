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
}

.navbar a {
  display: block;
  color: white;
  padding: 16px; 
  text-decoration: none;
}
 


.navbar a:hover{
  display: block;
   box-shadow:5px 5px 5px 5px 5px green; 
  color: white;
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

//  .nav{
//     background: #49b6c4;
//     overflow:auto;
//     height: 100%;
//     width: 200px;
//     position: fixed;
//     margin: 0;
//     padding: 0;
// } 
// .nav a{
//     display: block;
//     text-decoration: none;
//     font-size: 20px;
//     padding: 5%;
//     color: black;
//     font-weight: 600;
// }

// .nav a:hover {
//     display: inline;
//   background: #5474a7;
//   color:black;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   width: 100%;
//   height: 10%;
//   z-index:-1;
// } 

