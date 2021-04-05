<template>
  <!--<div class="container">
    <img src="../assets/logo2.1.jpg" alt="">
  </div>-->
   <div>
    <h2 class="login">Login</h2>
   </div> 
    
    
  <div class="login">
        <div class="container ">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div >
              <div id="formContent">
            <!-- Icono-->
             
            <!-- Login Form -->
              <form @submit.prevent="login">
                <input type="text" v-model="usuario" id="email" class="firts"  placeholder="Correo Electrónico">
                <input type="password" v-model="contrasena" id="password" class="seconds" placeholder="Contraseña">
                <input type="submit" class="third" value="Login">
              </form>
            <!--   <p>have an acocount? <router-link to="/register"> Register here </router-link> </p>-->
            <div id="formFooter">
              <a class="underlineHover" href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>     
  </div>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
      return {
        usuario: '',
        contrasena: '',
      }
  },
  methods: {
      login(){
        firebase.auth().signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(() => alert('Ususario logo'), (error) => console.log(error));
      }
  }
}
</script>

<style>

.login {
    color: #797979;
    text-align: center;
    margin-top: 5%;
}

img {
  border-radius: 8px;
  -webkit-box-shadow: 0 25px 50px 0 rgba(0,0,0,0.3);
  box-shadow: 0 25px 50px 0 rgba(0,0,0,0.3);
  justify-content: center;
  width: 30%;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
  font-family: 'Mulish', sans-serif; 
}

</style>