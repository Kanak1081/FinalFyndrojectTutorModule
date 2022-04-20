<template>
<fragment>
    <HeaderView />

  <section  id="pricing">

    <h1 class="text-left text-white fs-1" style="font-weight:900">😊 See your courses</h1>
    

    <div class="row" style="margin-left:5%;">

      <div class="pricing-column col-lg-4 col-md-6" id="displayCard" v-for="item in courses" :key="item._id">
        <div class="card">
          
            <iframe class="embed-responsive-item" v-bind:src="'https://www.youtube.com/embed/'+item.videoId"></iframe>
                <h4>{{item.name}}</h4>
                <p>{{item.description}}</p>
                <div>
                    <button class="btn btn-rounded btn-success" style="margin-right:3%"><a style="text-decoration:none;color:white;font-weight:600" v-bind:href="'/update-course/'+item._id">EDIT</a></button>
                    <button class="btn btn-rounded btn-danger" ><a style="text-decoration:none;color:white;font-weight:600" v-bind:href="'/delete-course/'+item._id">DELETE</a></button>
                </div>
          
        </div>
      </div>

    </div>

    

  </section>
</fragment> 
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

.row{
    margin-top:5%;
}
#displayCard{
    background: black;
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


.card{
    background: black;
    box-shadow: 5px 5px 5px 5px #da388d;
    padding-bottom:3%;
}
#pricing {
  padding: 100px;
}

.price-text {
  font-size: 3rem;
  line-height: 1.5;
}

.pricing-column {
  padding: 3% 2%;
}
</style>