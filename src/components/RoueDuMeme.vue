<template>
  <div class="hello">
    <!-- ROUE DU MEME AU CLICK -->

    <div class="rdm-click">
      <button @click="previousMeme(randomMeme)">Précédent</button>
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
          <img :src="randomMeme.image || previousIndexMeme.image " alt="" />
        </div>
        <div class="audio-container">
          <audio
            id="monAudio"
            ref="monAudio"
            :src="randomMeme.audio"
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
// import memes from '/memebox'

const memes = [
  {
    id: "1",
    image: "static/img/memes/bruce_le_S.jpg",
    audio: "static/audio/memes/death1.wav",
    isDejaPasse: false
  },
  {
    id: "2",
    image: "static/img/memes/chevre_miel.jpg",
    audio: "static//audio/memes/emp_1.wav",
    isDejaPasse: false
  },
  {
    id: "3",
    image: "static/img/memes/fry.png",
    audio: "static/audio/memes/goal_1.wav",
    isDejaPasse: false
  },
  {
    id: "4",
    image: "static/img/memes/mainun.png",
    audio: "static/audio/memes/saveme1.wav",
    isDejaPasse: false
  },
  {
    id: "5",
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
      alreadyStoredNumber: [],
      monAudio: "",
      actualNumber: 0
    };
  },

  computed: {
    randomMeme: {
        get: function() {
            return this.getRandomMeme() || {};
        },
        set: function() {
            return memes[0];
        },
    },

    previousIndexMeme: {
        get: function(e) {
            return this.previousMeme(e) ;
        },
        set: function() {
            return this.previousMeme(e);
        }
    }
    },

  methods: {
    getRandomMeme() {
      // this.setVolumeSound()
      let randomNumber = Math.floor(Math.random() * memes.length);
      this.actualNumber = randomNumber;

      if (this.alreadyStoredNumber.includes(randomNumber) ) {
              
        // a bossé
        // randomNumber = Math.floor(Math.random() * memes.length);
        // memes[randomNumber]['isDejaPasse'] = true;
         
         return   null
        
      } else {
        this.alreadyStoredNumber.push(randomNumber);
        return memes[randomNumber];
      }
    },

    previousMeme(e) {
 
        // console.log('actual id :',e.id);
        // let previousIndex = this.actualNumber - 1;
        // console.log(previousIndex - 1);
        //  return memes.filter(m => {
        // if(m.id === previousIndex) {
        //         console.log(m)
        //     }
        // })
    
     },
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
