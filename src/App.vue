<template>
  <div id="app">
    <img src="./assets/vumc_small.jpg"><br>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'insulin-carb'}">Insulin/Carb Calculator</router-link>
    <router-link :to="{name: 'insulin-sliding-scale'}">Sliding Scale</router-link>
    <router-view></router-view>
    <footer>&copy;2018 VUMC</footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>