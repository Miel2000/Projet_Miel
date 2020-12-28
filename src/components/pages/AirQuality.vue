<template>
    <div>
        <h1>Qualité de l'air</h1>
        <ul v-if="cities">
            <div class="row">
                <div v-for="citie of cities" :key="citie.id"  class="col-sm-4">

                    <city :city="citie" />

                </div>
            </div>
        </ul>
    </div>
</template>

<script>

import City from '@/components/City';

export default {
    name: "AirQuality",
    components:{
        City
    },
    
    data() {
        return {
            cities: [
                {name:'Marseille', iqa: 10},
                {name:'Nantes', iqa: 35},
                {name:'Paris', iqa: 70},
            ]
        }
    },
}

</script>

<style scoped>

</style>