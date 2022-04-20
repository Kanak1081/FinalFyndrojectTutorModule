
<template>
<fragment>
    <HeaderView/>
    
    <div class="container-fluid">
        <h1 style="font-size:3rem;color:white;">Welcome to Delete Courses Page</h1>
        <div class="row">
            <div class=" col-lg-4"></div>
            <div class="col-lg-4">
                <form>
        <div class="mt-3">
            <label class="fs-5 fw-bold text-white text-right">Enter Name</label>
            <input v-model="course.name" type="text" name="name" placeholder="Enter Name of the Course">
        </div>
    
        <div class="mt-4">
            <button id="deleteBTN" @click.prevent="deleteCourse" class="btn btn-rounded">Delete the Course</button>
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
    name:'DeleteCourses',
    components:{
        HeaderView
    },
    data(){
        return{
            course:{}
        }
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background:black')
    },
    methods: {
            deleteCourse(){
                let apiURL = `https://thawing-reaches-79225.herokuapp.com/tutor/delete-course/${this.$route.params.id}`;
                
                axios.delete(apiURL, this.course).then((res) => {
                    alert("Course Deleted Successfully!!")
                    console.log(res)
                    this.$router.push({name:'DisplayCourses'})
                }).catch(error => {
                    console.log(error)
                });
            }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
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
#deleteBTN{
    background:#774c9e;
    display:block;
    width:100%;
    padding:2%;
    color: black;
    font-weight: 800;
}
</style>