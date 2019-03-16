
Vue.component('banner',{
    template:`
      <div class="banner" :class="{'fondonight' : modenight}">
        <div class="media">
          <video ref="VideoRef" src="" id="video-banner" 
            autoplay 
            playsinline
            poster="/assets/images/post.png">
          </video>
        </div>
        <div class="next">
        <div class="flecha-home" @click="modenight = true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.3 40">
  
  
            <g id="Flecha1">
                <polygon class="flecha-grande" points="30.05 36.5 33.72 36.5 56.92 13 54.48 13 33.72 34.03 30.05 34.03 10.51 13 8.07 13 30.05 36.5"/>
            </g>
            <g id="Flecha2">
                <polygon class="flecha-chica" points="30.52 22.5 33.48 22.5 52.24 3.5 50.27 3.5 33.48 20.5 30.52 20.5 14.72 3.5 12.74 3.5 30.52 22.5"/>
            </g>
        </svg>
    </div>
        </div>
      </div>
    `, 
    data() {
      return {
        modenight:false,
      }
    },
  
    mounted() {
      // this.$refs.VideoRef.src ="/assets/images/vid.mp4";
      //   this.$refs.VideoRef.play();
  
      
    },
  
    methods:{
  
    }
  
  })