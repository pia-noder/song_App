<template>
  <div class="register">
    <h1>Formulaire d'enregistrement</h1>
    <input v-model="email" type="email" name="email" placeholder="email" />
    <br>
    <input v-model="password" type="password" name="password" placeholder="password" />
    <br>
    <button @click="register">Register</button>      
      
  </div>
</template>

<script>

import AuthentificationService from '@/services/AuthentificationService'
//Grosso modo tout ce qu'il y a dans le script correspond au controller
export default {
    data () {
        return {
            email: '',
            password: ''
        }
    },
    
    methods: {
       async register () {
           //Appel de l'endpoint register auquel on passe email & password
          const response = await  AuthentificationService.register({
                email: this.email,
                password: this.password
            });
            console.log(response.data)
        }
    },
}
</script>

<style>

</style>