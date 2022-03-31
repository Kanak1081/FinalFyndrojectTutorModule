<template>
<!-- eslint-disable -->
 <div class="container-fluid">
     <div class="row">
    <div class="col-sm-4 col-md-4 col-lg-4"></div>
    <div class="col-sm-4 col-md-4 col-md-4">
        <img class="h-75" :src="logoFynd">
    </div> 
    <div class="col-sm-4 col-md-4 col-lg-4"></div>
</div>

<div class="row" >
    <div class="col-md-1 col-lg-1"></div>
    <div class="col-xs-8 col-sm-8 col-md-6 col-lg-4">
        <h1 class="fs-1 text-start fw-bold">
            <span id="closerID" class="d-block">One step closer to</span>
            <span id="empower" class="d-block">empower engineers </span>
        </h1>
        <p id="fyndDescription" class="fs-5 text-start fw-bold">
            Fynd Academy sets up engineers on a lifelong growth path. Learn what our Trainee dream and work towards, and prepare to start your programming career with the best.
        </p>
        <div class="text-start">
            <a  href="/sign-up" class="btn btn-success btn-lg btn-block" style="margin-right:2%">
                Register
            </a>
            <a  href="/login" class="btn btn-success btn-lg btn-block">
                Login
            </a>
        </div>
    </div> 
    <div class="col-md-1 col-lg-2"></div>
    <div class="ccol-xs-12 col-sm-12 col-md-3 col-lg-4">
        <img class="h-100" src="../assets/fyndAcademy.png" alt="" />
    </div>
    <div class="col-md-1 col-lg-1"></div>
</div>
 </div>


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

<style>
body{
    overflow-x:hidden;
}
#empower{
    color:#da388d;
}
/* #getStartedBtn{
    background:#da388d;
    color:black;
} */
#fyndDescription{
    color:#069ba2;
}
#closerID{
    color:#069ba2;
}
</style>