
<template>
<fragment>
    <HeaderView/>
    <h1 style="font-size:3rem;color:white;"> Welcome to Add Courses Page</h1>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4"></div>
            <div class="col-lg-4">
                <form>
        <div class="mt-3">
            <label class="fs-5 fw-bold text-white text-right">Enter Name</label>
            <input  v-model="course.name" type="text" name="name" placeholder="Enter Name of the Course">
        </div>
        <div class="mt-3">
            <label class="fs-5 fw-bold text-white text-right">Enter Description</label>
            <input v-model="course.description"  type="text" name="description" placeholder="Enter Description" >
        </div>
        <div class="mt-3">
            <label class="fs-5 fw-bold text-white text-right">Enter Video ID</label><br>
            <label>(https://www.youtube.com/watch?v=<span style="color:#069ba2">V7LwfY5U5WI</span> )</label>
            <input v-model="course.videoId" type="text" name="videoId" placeholder="Enter Video Id" >
        </div>
        <div class="mt-4">
            <button id="addBTN" v-on:click="addCourse" class="btn btn-rounded">Add the Course +</button>
        </div>
    </form>
            </div>
            <div class="col-lg-4"></div>
        </div>
    </div>
</fragment>  
</template>

<script>


import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default{
    name:'AddCourses',
    components:{
        HeaderView,
    },
    data(){
        return{
            course:{
                name:'',
                description:'',
                videoId:''
            }
        }
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background:black')
    },
    methods:{  
        addCourse(){
            axios.post(`https://thawing-reaches-79225.herokuapp.com/tutor/add-course/${localStorage.getItem('userId')}`,{
                //userId:this.course.userId,
                name:this.course.name,
                description:this.course.description,
                videoId:this.course.videoId
                
            })
            .then((result)=>{
                alert("Course Added Successfully!!")
                localStorage.setItem("course-info",JSON.stringify(result.data))
                this.$router.push({name:'DisplayCourses'})
            })
            .catch(err=>{
                console.log(err)
            })

        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!(user)){
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>

<style scoped>
input{
    display: block;
    width:100%;
    padding:1%;
}
label{
    float:left;
}
#addBTN{
    background:#774c9e;
    display:block;
    width:100%;
    padding:2%;
    color: black;
    font-weight: 800;
}
</style>