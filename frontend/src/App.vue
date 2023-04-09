<template>
<div class= "row"> 
<div class= "column1"> 
  <QueryForm msg="Welcome to Your Vue.js App from Vue"/>
  </div>
  <div class= "column2"> 
  <OpenStreetMap msg="below is the map"/>
</div>
</div>

</template>

<script>
import QueryForm from './components/QueryForm.vue'
import OpenStreetMap from "./components/OSMap.vue";

export default {
  name: 'App',
  components: {
    QueryForm,
    OpenStreetMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#OpenStreetMap {
  height: 600px;
  width: 900px;
}
.column1 {
  float: left;
  width: 30%;
    flex: 30%;
}
.column2 {
  float: left;
  width: 50%;
    flex: 50%;
}
</style>
