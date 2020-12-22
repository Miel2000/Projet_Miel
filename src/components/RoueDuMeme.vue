<template>
  <div class="hello">
    <!-- ROUE DU MEME AU CLICK -->

    <div class="rdm-click">
      <button  @click="previousMeme(randomMeme)">Précédent</button>
      <button :randomHandler="alreadyStoredNumber" @click="getRandomMeme()">
        Random Meme
      </button>
      <button>Suivant</button>
    </div>

    <!-- ROUE DU MEME SELECT OPTION -->
    <!-- <div v-if="memes">
            <select v-model="randomMeme"  id="meme_select">
                <label for="meme_select"></label>
                <option  value="">Choisissez un meme</option>
                <option  v-for="meme in memes" :value="meme"  :key="meme.id" placeholder="yeet"></option>
            </select>
        </div> -->

    <br />
    <div v-if="randomMeme">
    
        <div class="image-container">
          <img :src="randomMeme.image" alt="" />
        </div>
        <div class="audio-container">
          <audio
            id="monAudio"
            ref="monAudio"
            :src="randomMeme.audio"
            volume="0.2"
            autoplay
            controls
          ></audio>
        </div>
    </div>
    <div v-else>
        <div class="random-container">
            <p>Randomization</p>
            <img :src="randomMeme.image" alt="" />
        </div>
    </div>
  </div>
</template>

<script>


const memes = [
  {
    id: "0",
    image: "static/img/memes/bruce_le_S.jpg",
    audio: "static/audio/memes/death1.wav",
    isDejaPasse: false
  },
  {
    id: "1",
    image: "static/img/memes/chevre_miel.jpg",
    audio: "static//audio/memes/emp_1.wav",
    isDejaPasse: false
  },
  {
    id: "2",
    image: "static/img/memes/fry.png",
    audio: "static/audio/memes/goal_1.wav",
    isDejaPasse: false
  },
  {
    id: "3",
    image: "static/img/memes/mainun.png",
    audio: "static/audio/memes/saveme1.wav",
    isDejaPasse: false
  },
  {
    id: "4",
    image: "static/img/memes/pikachu_en_Y.jpg",
    audio: "static/audio/memes/turrset.wav",
    isDejaPasse: false
  }
];

export default {
  name: "RoueDuMeme",
  
  data() {
    return {
      memes,
      actualNumber: 0,
      alreadyStoredNumber: [],
      monAudio: ""
    };
  },

  computed: {
    randomMeme: {
        get: function() {
            return this.getRandomMeme() || {};
        },
        set: function() {
            return   {
            id: "100",
            image: "static/img/memes/relance.jpg",
            audio: "static/audio/memes/turrset.wav",
            isDejaPasse: false
          };
        },
    },
    previousMeme:{
      get: function() {
          
        return this.previousMeme();
      },
      set: function(){
      //  return this.previousMeme();
      }
    }
   
    
    },


  methods: {
    getRandomMeme() {
      let randomNumber = Math.floor(Math.random() * memes.length);
      this.actualNumber = randomNumber;

        this.alreadyStoredNumber.push(randomNumber);
        return memes[randomNumber];

     
    },

 

    previousMeme(e){
 
     
     let previousIndex = e.id - 1;
     console.log('dans la event')
     return memes[previousIndex];
    
    }
    
  },
  
  mounted: () => {
    this.memes = memes;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    margin: 0 auto;
    width: 200px;
}
</style>
