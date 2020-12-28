<template>

  <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">VueJS SandBox</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <router-link  to="/About" exact>About</router-link>
            <router-link  to="/Calculateur" exact>Calculateur</router-link>
            <router-link  to="/air" exact>Air Quality</router-link>
            <router-link  to="/ajax" exact>Ajax</router-link>

            </li>
            
        </ul>
    
        </div>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>

export default {

  name: "App"


};
</script>

<style>
#app {
  text-align: center;
}

.card-container {

  display:flex;
}

.card {

    margin: 0 50px;
}

img {

width: 200px;
}
</style>
