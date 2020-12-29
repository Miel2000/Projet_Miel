<template>
  <div>
    <div class="card" :class="color + ' cityCard'" style="width: 18rem;">
      <p>Ville : {{ city.name }}</p>
      <p v-if="!loading">Qualité de l'air {{ city.iqa }}</p>
      <span class="sr-only">
        <div
          v-if="loading == true"
          class="spinner-border text-primary "
          role="status"
        ></div>
      </span>
      <button
        type="button"
        @click="deleteCityEvent(city)"
        class="btn btn-light"
      >
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
import { AirQualityService } from "@/services/AirQuality.service";

export default {
  name: "City",
  props: {
    city: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      color: "",
      loading: false
    };
  },

  methods: {
    deleteCityEvent() {
      this.$emit("deleteCity", this.city);
    }
  },
  computed: {},
  async mounted() {
    this.loading = true;
    const infosCity = await AirQualityService.getAirQuality(this.city.name);
    this.loading = false;

    this.city.iqa = infosCity.aqi;
    console.log(this.city.iqa);

    //  console.log(infosCity.aqi)

    if (this.city.iqa <= 30) this.color = "pollution-faible";

    if (this.city.iqa > 30 && this.city.iqa <= 50)
      this.color = "pollution-medium";

    if (this.city.iqa > 50) this.color = "pollution-forte";
    if (this.city.iqa === undefined) this.color = "pollution-null";
  }
};
</script>

<style scoped>
.cityCard {
  margin-bottom: 20px;
}

.pollution-faible {
  background: green;
}
.pollution-medium {
  background: orange;
}
.pollution-forte {
  background: red;
}
.pollution-null {
  background: gray;
}
</style>
