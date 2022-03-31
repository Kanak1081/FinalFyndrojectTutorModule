
<template>
<HeaderView/>
    
    <div class="container" id="homeviewID">
        <h1 class="mt-4 text-left text-white fs-1" style="font-weight:900">😊 Welcome To Your Dashboard.</h1>
        <div class="row mt-3">
            <div class="col-md-4 card" style="width:350px" >
                <img class="card-img-top" src="../assets/dashboard.jpg" alt="Card image" style="height:80%">
                <h4 class="centered">Courses Uploaded</h4>
                <h2 class="centered-heading">  {{count}}</h2>
            </div>
            <div class="col-md-4 card" style="width:350px" >
                <img class="card-img-top" src="../assets/dashboard.jpg" alt="Card image" style="height:80%">
                <h4 class="centered">Courses Left to Upload</h4>
                <h2 class="centered-heading">  {{30-count}}</h2>
            </div>
            <div class=" col-md-4 card" style="width:350px">
                <img class="card-img-top" src="../assets/dashboard.jpg" alt="Card image" style="height:80%">
                <h4 class="centered">Utilisation</h4>
                <h2 class="centered-percent">{{percent}} %</h2>
            </div>
        </div>

        <div class="row mt-3">
            <h1 style="color:white;font-weight:500">✌ Check your uploaded courses<a style="text-decoration:none;color:green" href="/display-courses"> here</a></h1>
        </div>
    </div>
    
    
</template>

<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default{
    name:'HomeView',
    data(){
        return{
            name:'',
            count:this.count,
            percent:this.percent
        }
    },
    
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background:black')
    },
    components:{
        HeaderView
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        
    },
    async created(){
        const response = await axios.get("http://localhost:5000/tutor/count");
        this.count = response.data.count
        this.percent = ((this.count*100)/30).toFixed(2)
        //console.log("COUNT FROM VUE",this.count)
    }
}
</script>


<style scoped>
h1{
    font-weight: 500;
    font-size: 3rem;
}

#homeviewID{
    margin-left: 200px;
    overflow-x: hidden;
}
#dashboardIMG{
    height: 25%;
    opacity: 0.5;
}
.card{
    background: black;
    margin:1%;
    border-radius: 20px;
}
.card-img-top{
    opacity: 0.8;
}
.centered {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  color:black;
}
.centered-heading{
    position: absolute;
    top: 50%;
    left: 50%;
    color:black;
    font-weight: 800;
}
.centered-percent{
    position: absolute;
    top:50%;
    left:40%;
    color:black;
    font-weight: 800;
}
</style>