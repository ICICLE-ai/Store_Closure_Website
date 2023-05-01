<template>
  <div id="app">
    <input type="hidden" name="csrfmiddlewaretoken" :value="csrfToken" />
    <div>    
      <PageHeader msg="header"/>
    </div>
    <div class= "row"> 
      <div class= "column1"> 
        <QueryForm msg="Welcome to Your Vue.js App from Vue"/>
      </div>
      <div class= "column2"> 
        <OpenStreetMap msg="below is the map"/>
      </div>
      <div class = "column3">
        <img src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" class="marker-icon"> LRHC<br>
        <img src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png" class="marker-icon"> ERHC<br>
        <img src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" class="marker-icon"> ERLC<br>
        <img src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png" class="marker-icon"> LRLC<br>
        <img src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png" class="marker-icon"> SPM<br>
        <img src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png" class="marker-icon"> CSPM<br>
  
      </div>
    </div>
    <div class= "footer">
    <PageFooter msg="footer"/>
  </div>
</div>
  
</template>

<script>
import QueryForm from './components/QueryForm.vue'
import OpenStreetMap from "./components/OSMap.vue"
import PageHeader from "./components/PageHeader.vue"
import PageFooter from "./components/PageFooter.vue"

export default {
  name: 'App',
  components: {
    PageHeader,
    QueryForm,
    OpenStreetMap,
    PageFooter
  },
   mounted(){
       this.csrfToken = this.getCookie("csrftoken");
    },
      methods: {
      getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === name + "=") {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    },
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
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #333;
  color: white;
  text-align: center;
  padding-bottom: 3rem;
}

#OpenStreetMap {
  height: 600px;
  width: 1100px;
}

.row{
  padding-top: 3rem;

}

.column1 {
  float: left;
  width: 30%;
  flex: 30%;
}

.column2 {
  float: left;
  width: 60%;
  flex: 60%;
}

.column3 {
  float: left;
  width: 10%;
  flex: 10%;
  
}
  .marker-icon {
    width: 20px;
    height: 30px;
  }
.footer{
position: fixed;
  bottom: 0;
  width: 100%;
  height: 168px;
  background-color: #333;
  color: black;
  text-align: center;
}

</style>


