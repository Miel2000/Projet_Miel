<template>
    <div>

      <img src="../../../static/img/poring.png">
    <div class="container">
      <div class="card-container">
        <card-meme contenu="le cactus" titre="Cactus Jack" image="cactus.jpg"  href="/posts/moutain"></card-meme>
        <card-meme contenu="Fry de futurama" titre="Fry" image="fry.png" href="/posts/bike"></card-meme>
        
      </div>
    </div>
    
    </div>
</template>

<script>
import CardMeme from '@/components/CardMeme'

    export default {
    name:"Acceuil",
    components:{
     CardMeme
     },


    }
</script>

<style scoped>

</style>