<template>
  <div class="register">
        Register
  </div>
    
  <div class="login">
        <div class="container ">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <div >
              <div id="formContent">
             
            <!-- Login Form -->
              <form @submit.prevent="register">
                <input type="text" v-model="usuario" id="user" class="firts"  placeholder="Usuario">
                <input type="text" v-model="email" id="email" class="four"  placeholder="Correo Electrónico">
                <input type="text" v-model="contrasena" id="password" class="seconds" placeholder="Contraseña">
                <input type="submit" class="third" value="Register">
              </form>
          </div>
        </div>
      </div>
    </div>     
  </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { ref } from 'vue'

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(user => {
          alert(user);

        })
        .catch(err => alert(err.message))
    }
    return {
      Register,
      email,
      password
    }
  }
}
</script>

<style>

.register {
    
    
    color: #797979;
    text-align: center;
    margin-top: 5%;
    font-size: 200%;
}

</style>