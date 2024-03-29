const { createApp } = Vue;

createApp({
  data(){

    return{
      arrayEmailTotali: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      numeroEmail: 0
    }
  },
  
  methods:{

    getApi(){
      // gli passo solo apiUrl, non concateno nulla
      axios.get(this.apiUrl)
      // risposta
      .then((response) => {
        // la risposta a cosa corrrisponde?
        // response. si riferisce all'oggetto restituito dalla chiamata axios all'API
        // All'interno di questo oggetto di risposta, data è una proprietà che contiene i dati restituiti dall'API
        this.arrayEmailTotali.push(response.data.response);
        console.log(response)
        this.numeroEmail++
        console.log(this.numeroEmail, '------>>>>')
        this.checkNumeriTotali()
        
      })
      // errore
      .catch( (errore) => {
        console.log(errore)
      })
    },

    // 1. ciclo for generare 10 email
    numeroMaxEmail(){
      for(let i = 0; i < 10; i++){
        if(this.arrayEmailTotali.length < 10){
          // devo richiamare getApi non il contrario
          this.getApi()
        }
      }
      console.log(this.arrayEmailTotali)
    },

    checkNumeriTotali(){
      if(this.numeroEmail === 10){
        if(this.arrayEmailTotali.length = 10){
          console.log('ciao')
        }else{
          this.numeroEmail = 'Loading...'
        }
      }
    },
  
  },

  mounted(){
    // generare 10 email al caricamento 
    this.numeroMaxEmail();
  }
}).mount('#app')