<template>
  <div id ="OpenStreetMap"></div>
</template>

<script>
  import axios from 'axios'
  import L from 'leaflet'
  export default {
    data() {
      return {
        homedataLocations: [],
        marketdataLocations: [],
      }
    },
    mounted () {
      //add 
      axios.get('http://localhost:8000/store_closure/api/homedata/locations/')
      .then(response => {
        this.homedataLocations = response.data
        this.displayMap();

        // this.homedataLocations = response.data
        // console.log(this.homedataLocations)
        // this.displayMap()
      })
      .catch(error => {
        console.log(error)
      });
      axios.get('http://localhost:8000/store_closure/api/marketdata/locations/')
      .then(response => {
        this.marketdataLocations = response.data

        //this.marketdataLocations = response.data
        //console.log(this.marketdataLocations)
        //this.displayMap()
      })
      .catch(error => {
        console.log(error)
      });
    },

    methods: {
      displayMap () {
        
        // Initialize the map
        let mapOptions = {
          //center:[40.0171, -83.0168],
          center:[40.0363228657714, -82.98385714469946],
          zoom:14
        }
        let map = new L.map('OpenStreetMap' , mapOptions);
        let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        map.addLayer(layer);

        let categoryIcons = {
          LRHC : L.icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          }),
          ERHC : L.icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          }),
          ERLC : L.icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          }),
          LRLC : L.icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          }),
          SPM : L.icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          }),
          CSPM : L.icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        };

        // Add markers for each location
        this.homedataLocations.forEach(location => {

          let categoryIcon = categoryIcons[location.category];
          L.marker([location.latitude, location.longitude], {icon: categoryIcon}).addTo(map);

        })
        // Add markers for each location
        this.marketdataLocations.forEach(location => {

          let categoryIcon = categoryIcons[location.category];
          L.marker([location.latitude, location.longitude], {icon: categoryIcon}).addTo(map);

        })
      }
    }
  }
</script>
