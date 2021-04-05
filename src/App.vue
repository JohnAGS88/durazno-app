<template>
  <!--<img class="imagen" src="./assets/logo4.png" alt="">
    <h3 class="titulo">Durazno-App</h3>
    <p class="titulo2"> <router-link to="/login"> LogIn here </router-link> </p>
    <p class="titulo2"> <router-link to="/register"> Register here </router-link> </p>-->
  <router-view/>
</template>

<script>

import { onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase';

export default {
  setup () {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login');
        }else if (route.path ==  "/register" || route.path == "/register"){
          router.replace('/');
        }
      })
    });
  }
}
</script>


<style>

body {
  font-family: 'Mulish', sans-serif !important;
  
}

.container {
  margin-left: 10%;
  margin-top: 10%;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
  font-family: 'Mulish', sans-serif; 
}

input[type=button], input[type=submit], input[type=reset]  {
  background-color: #f0afa3;
  border: none;
  color: white;
  padding: 15px 110px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  margin: 5px 20px 40px 20px;
  border-radius: 3px;
  
}

input[type=text], input[type=password] {
  
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 70%;
  border: 2px solid #f6f6f6;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  outline: 0;
  border-width: 0 0 1px ;
  border-color: #000;
}

input.firts{

  font-family: 'Mulish', sans-serif !important; 
}

input.seconds{
  font-family: 'Mulish', sans-serif !important; 
  margin-bottom: 40px;
}

img{
  width: 15%;
  height: 10%;
  margin-left: 43%;
  margin-top: 10%;

  
}

.titulo{ 
  margin-left: 43%;
  font-family:'Mulish', sans-serif !important;
  font-size: 190%;
}

.titulo2{ 
  
  font-family:'Mulish', sans-serif !important;
  font-size: 100%;
  text-align: center;

}
</style>
