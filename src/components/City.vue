<template>
    <div>
        <div class="card" :class="color" style="width: 18rem;">
    
            <p> Ville : {{ city.name }}</p>
            <p> Qualité de l'air {{ city.iqa }}</p>
        </div>
    </div>
</template>

<script>

import { AirQualityService } from '@/services/AirQuality.service'

    export default {
        name:"City",
        props: {
            city: {
                type: Object,
                default: null
            }
       },
       data() {
           return {
               color: ""
           }
       },
       async mounted () {
          const infosCity = await AirQualityService.getAirQuality(this.city.name);

          this.city.aqi = infosCity.aqi
          console.log(this.city.aqi)
         
        //   console.log(infosCity.aqi)

            if(this.city.iqa <= 30) this.color = "pollution-faible";
            
            if(this.city.iqa > 30 && this.city.iqa <= 50) this.color = "pollution-medium";

            if(this.city.iqa > 50) this.color = "pollution-forte";

        },
 
    }
</script>

<style  scoped>

.pollution-faible {
    background: green;
}
.pollution-medium {
    background: orange;
}
.pollution-forte {
    background: red;
}
</style>