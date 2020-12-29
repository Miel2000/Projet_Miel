<template>
  <div class="container">
    <h1>Qualité de l'air</h1>
    <ul v-if="cities">
      <div class="row">
        <div v-for="citie of cities" :key="citie.id" class="col-sm-4">
          <city :city="citie" @deleteCity="deleteCityEvent" />
        </div>
        <alert
          v-if="showAlert"
          :type="typeAlert"
          :message="messageAlert"
        ></alert>
      </div>
    </ul>
    <city-form @cityAddEvent="addCityAction"></city-form>
  </div>
</template>

<script>
import City from "@/components/City";
import CityForm from "@/components/CityForm";
import Alert from "@/components/Alert";

import { AirQualityService } from "@/services/AirQuality.service.js";
import { CitiesService } from "@/services/Cities.service.js";

export default {
  name: "AirQuality",
  components: {
    City,
    CityForm,
    Alert
  },

  data() {
    return {
      cities: [],
      typeAlert: "",
      messageAlert: "",
      showAlert: ""
    };
  },
  mounted() {
    this.cities = CitiesService.getCities();
  },

  methods: {
    async addCityAction(cityName) {
      const dataForNewCity = await AirQualityService.getAirQuality(cityName);

      if (dataForNewCity !== "Unknown station") {
        this.cities.push({
          name: cityName,
          iqa: 30
        });

        this.typeAlert = "success";
        this.messageAlert = "Ville ajoutée avec success";
        this.showAlert = true;
      } else {
        this.typeAlert = "danger";
        this.messageAlert = "Ville inconnue";
        this.showAlert = true;
      }

      console.log(dataForNewCity);
    },

    deleteCityEvent(city) {
      const indexToDelete = this.cities.findIndex(
        cityItem => cityItem.name === city.name
      );
      this.cities.splice(indexToDelete, 1);
    }
  }
};
</script>

<style scoped></style>
