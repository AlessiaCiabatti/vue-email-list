const { createApp } = Vue;

createApp({
  data(){

    return{
      arrayEmailTotali: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }
  },
  
  methods:{
    
    // 1. ciclo for generare 10 email
    numeroMaxEmail(){
      for(let i = 0; i <= 10; i++){
        if(this.arrayEmailTotali.length < 10){
          this.arrayEmailTotali.push(data.response);
        }
      }
      console.log(this.numeroMaxEmail)
    }
  },

  mounted(){
  }
}).mount('#app')