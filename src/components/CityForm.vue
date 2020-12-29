<template>
  <div>
    <br />
    <h1>City Form</h1>
    <form v-on:submit.prevent="onSubmit" class="row form-group ajouterVille">
      <div class="col-sm-2">
        Ajouter une ville :
      </div>
      <div class="col-sm-3">
        <input
          type="text"
          class="form-control"
          id="cityField"
          v-model="newCity"
        />
      </div>
      <div class="col-sm-2">
        <button @click="addCityAction" class="btn btn-primary">Ajouter</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newCity: null
    };
  },

  methods: {
    addCityAction() {
      if (this.newCity) {
        this.$emit("cityAddEvent", this.newCity);
        console.log("Ajouter", this.newCity);
      }
    },

    onSubmit(e) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.ajouterVille {
  margin-top: 2em;
}
</style>
