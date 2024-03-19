const { createApp } = Vue;

createApp({
  data(){

    return{
      arrayEmailTotali: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  }
}).mount('#app')