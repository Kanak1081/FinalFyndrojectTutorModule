
<template>
    <HeaderView/>
    
    <div class="container" id="ViewCoursesID">
        <h1 class="text-left text-black fs-1 fw-bold">😊 {{name}} See Your Courses</h1>
         <!-- <div class="row mt-3">
            <div class="col-md-4 mt-5 card" style="width:300px" v-for="item in course" :key="item.num" >
              <iframe class="embed-responsive-item" v-bind:src="'https://www.youtube.com/embed/' + item.videoId" allowfullscreen></iframe>
              <div class="card-body">
                <h5 class="card-title"> {{item.name}}</h5>
                <p class="card-text"> {{item.description}}</p>
                <button class="btn "><router-link id="routerLinkID1" :to="`/update-course/${item.num}`">Edit</router-link></button>
                <button class="btn"><router-link id="routerLinkID2" :to="`/delete-course/${item.num}`">Delete</router-link></button>
              </div>
            </div>
        </div>  -->
        <table border="3">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Video ID</th>
            <th>{{courses.name}}</th>
          </tr>
          <tr v-for="course in courses" :key="course._id">
            <td>{{course.num}}</td>
            <td>{{course.name}}</td>
            <td>{{course.description}}</td>
            <td><iframe src="'https://www.youtube.com/embed/'+{item.videoId}" allowfullscreen></iframe></td>
          </tr> 
        </table>
    </div>
</template>

<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default{
    name:'ViewCourses',
    data(){
        return{
            name:'',
            courses:[]
        }
    },
    // beforeCreate () {
    //     document.querySelector('body').setAttribute('style', 'background:black')
    // },
    components:{
        HeaderView
    },
    created(){
      axios.get("http://localhost:5000/tutor/view-courses")
      .then(res=>{
        this.courses = res.data;
        console.log(this.courses)
      })
      .catch(error => {
        console.log(error)
      });
    },
    mounted(){ 
      let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        
    }
}
</script>


<style scoped>
h1{
    font-weight: 500;
    font-size: 3rem;
}
.card-title{
  font-size: 1.5rem;
  color:white;
}
.card{
  background: black;
    margin:1%;
    border-radius: 20px;
}
#ViewCoursesID{
    margin-left: 250px;
}
.btn{
  background: #d51987;
  color: black;
  margin-right: 3%;
}
#routerLinkID1{
  color:black;
  font-size: 1rem;
  text-decoration: none;
}
#routerLinkID2{
  color:black;
  font-size: 1rem;
  text-decoration: none;
}
tr,th,td{
  border:1px solid black;
}
</style>