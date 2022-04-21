
<template>
<fragment>
<HeaderView/>

    
  <!-- Pricing -->

  <section  id="pricing">

    <h1 class="text-left text-white fs-1" style="font-weight:900">😊 Welcome To Your Dashboard.</h1>
    

    <div class="row" style="margin-left:5%;">

      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card">
          <div class="card-body">
            <img class="card-img-top" src="../assets/dashboard.jpg" alt="Card image" style="height:80%">
            <h4 class="centered">Courses Uploaded</h4>
            <h2 class="centered-heading">  {{count}}</h2>
          </div> 
        </div>
      </div>

      <div class="pricing-column col-lg-4 col-md-6">
        <div class="card"> 
          <div class="card-body">
            <img class="card-img-top" src="../assets/dashboard.jpg" alt="Card image" style="height:80%">
            <h4 class="centered">Courses Left to Upload</h4>
            <h2 class="centered-heading">  {{30-count}}</h2>
          </div>
        </div>
      </div>

      <div class="pricing-column col-lg-4">
        <div class="card">
          <div class="card-body">
            <img class="card-img-top" src="../assets/dashboard.jpg" alt="Card image" style="height:80%">
            <h4 class="centered">Utilisation</h4>
            <h2 class="centered-percent">{{percent}} %</h2>
          </div>
        </div>
      </div>



    </div>

    <div class="row">
        <h3 style="color:white;font-weight:500">✌ Check your uploaded courses<a style="text-decoration:none;color:#069ba2;font-weight:600;" href="/display-courses"> here</a></h3>
    </div>

  </section>

</fragment>
</template>

<script>
import HeaderView from './HeaderView.vue'
import axios from 'axios'
export default{
    name:'HomeView',
    data(){
        return{
            
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
        
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        
    },
    async created(){
        const response = await axios.get(`https://thawing-reaches-79225.herokuapp.com/tutor/count/${localStorage.getItem('userId')}`);
        this.count = response.data.count
        this.percent = ((this.count*100)/30).toFixed(2)
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
    background:black;
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

/* Pricing Section */

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