

const messages = {
  name:'messages',
  template:'#hometemplate',

  template:`
    <div id=hometemplate>
      <headers></headers>
    </div>
  `,

  es:{
    navbar:{
      home:'Inicio',
      about:'Nosotros',
      services:'Aplicaciones',
      downloads:'Descargas',
      idiom:'Idioma',
    }
  },

  por:{
    navbar:{
      home:'Home',
      about:'Nós',
      services:'Serviços',
      downloads:'Recursos',
      idiom:'Idioma',
    }
  },

  data(){
    return{
    };
  },
}

Vue.component('headers',{
  template:`
  <div>
    <header>
      <div class="head">
          <img id="open" v-if="btnopen" @click="upmenu" src="./assets/images/open.svg">
          <img id="open" v-if="btnclose" @click="downmenu" src="./assets/images/close.svg">
          <div id="title">
            <div id="logo-animado" v-if="activetfk" @click="modeluna()">
              <svg id="letras-animadas"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1204.46 499.27">                       
                  <path class="letras-tfk" d="M397.4,204.9H231.21V661.54H183.52V204.9H18.06V163H397.4Z" transform="translate(-18.06 -162.27)"/>
                  <path class="letras-tfk" d="M771,202.73H578q-52,0-52,52.75V383.37H742.77v38.29H526V661.54H478.32V246.81q0-39,24.21-61.78t63.94-22.76q140.89,0,207.37,4.34Z" transform="translate(-18.06 -162.27)"/>
                  <path class="letras-tfk" d="M979.76,420.94H910.4a389.91,389.91,0,0,1,4.33,56.36V661.54h-47V163h47V324.12a379.47,379.47,0,0,1-4.33,57.8h69.36L1139.44,163h52.75L1039,374.7q-8,12.29-23.12,26v2.17a169.69,169.69,0,0,1,25.29,28.18L1203,661.54h-53.47Z" transform="translate(-18.06 -162.27)"/>
              </svg>              
            </div>
            <div id="logo-animado" v-if="disabletfk" @click="modesol()">
              <svg id="letras-animadas" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1204.46 499.27">                       
                  <path class="letras-tfk" d="M397.4,204.9H231.21V661.54H183.52V204.9H18.06V163H397.4Z" transform="translate(-18.06 -162.27)"/>
                  <path class="letras-tfk" d="M771,202.73H578q-52,0-52,52.75V383.37H742.77v38.29H526V661.54H478.32V246.81q0-39,24.21-61.78t63.94-22.76q140.89,0,207.37,4.34Z" transform="translate(-18.06 -162.27)"/>
                  <path class="letras-tfk" d="M979.76,420.94H910.4a389.91,389.91,0,0,1,4.33,56.36V661.54h-47V163h47V324.12a379.47,379.47,0,0,1-4.33,57.8h69.36L1139.44,163h52.75L1039,374.7q-8,12.29-23.12,26v2.17a169.69,169.69,0,0,1,25.29,28.18L1203,661.54h-53.47Z" transform="translate(-18.06 -162.27)"/>
              </svg>              
            </div>
          </div>
          
          <div class="staticmenu">
            <nav>
              <ul>
                <li><a>{{$t("navbar.home")}}</a></li>
                <li><a>{{$t("navbar.about")}}</a></li>
                <li><a>{{$t("navbar.services")}}</a></li>
                <li><a>{{$t("navbar.downloads")}}</a></li>
                <li><a @click="showModalidiom = true">{{$t("navbar.idiom")}}</a></li>
              </ul>
            </nav>
          </div>
      </div>
      <transition name="bounce">
      <div class="modalidiom" v-if="showModalidiom">
          <div class="btnmodal">
              <i class="far fa-times-circle" @click="showModalidiom = false"></i>
            </div>
            <div>
              <a id="lbra" v-on:click="toport()" v-if="lbra">
              </a>
              <a id="lmex" v-on:click="tomex()" v-if="lmex">
               </a>
            </div>
      </div>
      </transition>
      <div class="overlay" v-if="showModalidiom" @click="showModalidiom = false"></div>
      <transition name="fade">
      <div class="mobmenu" v-if="btnclose" >
        <nav>
          <ul >
            <li @click="byeidiom()">{{$t("navbar.home")}}</li>
            <li @click="byeidiom()">{{$t("navbar.about")}}</li>
            <li @click="byeidiom()">{{$t("navbar.services")}}</li>
            <li @click="byeidiom()">{{$t("navbar.downloads")}}</li>
            <li id="afdown" @click="downidiom()">{{$t("navbar.idiom")}} <i class="fas fa-chevron-circle-down"></i></li>
          </ul>

          <transition name="bounce">
            <div class="downidiom" v-if="btndownidiom" >
              <a v-on:click="toport()"></a>
              <a v-on:click="tomex()"></a>
            </div>
        </transition>
        </nav>
      </div>

    </transition>
    </header>
    <banner :modenight="modenight" :nightcolor="nightcolor"></banner>
    </div>
  `,
  
  data() {
    return {
      modenight:false,
      nightcolor:false,
      btnopen:true,btnclose:false,btndownidiom:false,showModalidiom:false,lmex:false,lbra:true,
      activetfk:true,
      disabletfk:false,
    };
  },

  mounted(){
    // setTimeout(()=>{     //Vue SetTimeout
    //   this.logoanimado = false;
    // },4000)
  },
 
  computed: {
    // changecolor(){return{color:'blue !important'};},
  },

  methods: {

    modeluna(){
      this.activetfk=false,
      this.modenight=true,
      this.nightcolor=true,
      this.disabletfk=true
    },

    modesol(){
      this.disabletfk=false,
      this.modenight=false,
      this.nightcolor=false,
      this.activetfk=true
    },
    
    toport(){
      this.byeidiom(); 
      this.showModalidiom = false,this.lbra = false,this.lmex = true
      if (this.$i18n.locale === 'es') {
        return this.$i18n.locale = 'por'
      }
    },
    tomex(){
      this.byeidiom();
      this.showModalidiom = false,this.lbra = true,this.lmex = false
      if (this.$i18n.locale === 'por') {
        return this.$i18n.locale = 'es'
      }
    },
    upmenu(){this.btnopen = false;this.btnclose = true;
    },
    downmenu(){this.btnclose = false;this.btnopen = true;
    },
    downidiom(){this.btndownidiom = true;},

    byeidiom(){this.btnclose = false;this.btnopen = true;this.btndownidiom = false;
    },

  },
  
})

Vue.component('banner',{
  template:`
  <div class="fondo" :class="{'fondonight' : modenight}">
    <div class="banner">
      <div class="media">
        <video ref="VideoRef" src="" id="video-banner" 
          autoplay 
          playsinline
          poster="./assets/images/completa.svg">
        </video>
      </div>
      <div class="next">
      <div class="flecha-home">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.3 40">


          <g id="Flecha1">
              <polygon class="flecha-grande" :class="{'night-color' : nightcolor}" points="30.05 36.5 33.72 36.5 56.92 13 54.48 13 33.72 34.03 30.05 34.03 10.51 13 8.07 13 30.05 36.5"/>
          </g>
          <g id="Flecha2">
              <polygon class="flecha-chica" :class="{'night-color' : nightcolor}" points="30.52 22.5 33.48 22.5 52.24 3.5 50.27 3.5 33.48 20.5 30.52 20.5 14.72 3.5 12.74 3.5 30.52 22.5"/>
          </g>
      </svg>
  </div>
      </div>
    </div>
  </div>
  `,

  props:['modenight','nightcolor'],

  data() {
    return {
      
    }
  },

  mounted() {
    // this.$refs.VideoRef.src ="/assets/images/vid.mp4";
    // this.$refs.VideoRef.play();
  },

  methods:{

  }

})


//VueI18n
const i18n = new VueI18n({
  locale: 'es', // set locale
  messages,
})

var router = new VueRouter({
  //mode:'history',
  routes:[
    {path:'/', component:messages},
  ]
});

new Vue({
    element:'#app',
    i18n,
  
    router,
    template:'#templates',
  
  }).$mount('#app')

