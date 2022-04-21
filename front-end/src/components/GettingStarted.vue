<template>
<fragment>
<div class="container-fluid" id="title">
    <div class="row">
        <div class="col-lg-12">
            <img class="h-75" :src="logoFynd">
        </div> 
    </div>

    <div class="row" >
        <div class="col-lg-7" id="title_description">
            <h1 class="fw-bold">
                <span id="closerID" class="d-block">One step closer to</span>
                <span id="empower" class="d-block">empower engineers </span>
            </h1>
            <p id="fyndDescription" class="fw-bold mt-3">
                Fynd Academy sets up engineers on a lifelong growth path. Learn what our Trainee dream and work towards, and prepare to start your programming career with the best.
            </p>
            <div class="text-start mt-3">
                <a  href="/sign-up" class="btn btn-success btn-lg btn-block" style="margin-right:2%">
                    Register
                </a>
                <a  href="/login" class="btn btn-success btn-lg btn-block">
                    Login
                </a>
            </div>
        </div> 
        <div class="col-lg-5">
            <img class="d-none d-sm-block d-sm-none d-md-block" src="../assets/fyndAcademy.png" alt="" />
        </div>
    </div>
</div>
<footer style="color:white;font-weight:500;text-align:center;position:fixed;bottom:0;left:auto;right:auto">
    <p>Made with ❤ by Kanak Yadav</p>
</footer>
</fragment>
</template>

<script>
import logoFynd from '../assets/fyndLogo.png'

export default {
name: 'GettingStarted' ,
beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:black')
  },
  data(){
    return {
      logoFynd:logoFynd
    }
  }

}
</script>

<style scoped>
.container-fluid{
  padding: 0% 15%;
}
h1{
    font-size: 3rem;
    text-align: left;
    font-family: "Montserrat-Bold";
}
#empower{
    color:#da388d;
}

#fyndDescription{
    color:#069ba2;
    text-align: left;
    font-family: "Montserrat";
    font-size: 1rem;
}
#closerID{
    color:#069ba2;
}
#title{
    text-align: center;
}

</style>