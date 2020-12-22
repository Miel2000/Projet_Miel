<template>
    <div>
        <div class="card" style="width: 18rem;">
                <img class="card-img-top" :src="'static/img/memes/' + image" alt="Image to extract">
                <div class="card-body">
                <h5 class="card-title">{{ titre }}</h5>
                <p class="card-text"> {{ contenu }}</p>
                <a :href="href" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>


    </div>
</template>

<script>
    export default {
        name:"CardMeme",
      
        props: {
            contenu: {
                type: String,
                default: ""
            },
            titre: {
                type: String,
                default: ""
            },
            image: {
                type: String,
                default: ""
            },
            href: {
                type: String,
                default: ""
            }
        },
        mounted () {
            console.log({
                title: this.titre,
                content: this.contenu,
                img: this.image,
            });
        },
        
    }
</script>

<style scoped>

</style>