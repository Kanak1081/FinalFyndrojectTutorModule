<template>
    <HeaderView />
    <h1 class="text-left text-white fs-1" style="font-weight:900">❤ See your courses</h1>
    <div class="container">
        <div class="row">
            <div id="displayCard" class="mt-4 col-md-4" v-for="item in courses" :key="item._id">
                <iframe class="embed-responsive-item" v-bind:src="'https://www.youtube.com/embed/'+item.videoId"></iframe>
                <h4>{{item.name}}</h4>
                <p>{{item.description}}</p>
                <div>
                    <a class="operation" style="color:green" v-bind:href="'/update-course/'+item._id">EDIT</a>
                    <a class="operation" style="color:red" v-bind:href="'/delete-course/'+item._id">DELETE</a>
                </div>
            </div>
            <hr style="color:white">
        </div>
    </div>
    <!-- <table style="margin-left:250px;margin-top:4%">
        <tr>
            <th>S. No. </th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>VIDEO</th>
        </tr>
        <tr v-for="item in courses" :key="item.name">
            <td>{{ item.num }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>  
            <td><iframe class="embed-responsive-item" v-bind:src="'https://www.youtube.com/embed/'+item.videoId"></iframe></td>  
        </tr>   
    </table>  -->
</template>
<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default{
    name:'DisplayCourses',
    components:{
        HeaderView
    },
    
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background:black')
    },
    async created(){
        const response = await axios.get(`https://thawing-reaches-79225.herokuapp.com/tutor/view-courses/${localStorage.getItem('userId')}`)
        this.courses = response.data.courses
        console.log(this.courses)
        
    },
    data(){
        return{
            courses:[]
        }
    }
}
</script>

<style scoped>
/* table,tr,th,td{
    border:3px solid #da388d;
    color:white;
} */
.row{
    margin-top:5%;
}
#displayCard p{
    color:white;
    font-weight:500;
}
#displayCard h4{
    color:#da388d;
    font-weight:700;
}
.container{
    margin-left:200px;
}
.operation{
    text-decoration:none;
    margin-right: 3%;
}
</style>