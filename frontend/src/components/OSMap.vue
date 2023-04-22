<template>
  <div id ="OpenStreetMap"></div>
</template>

<script>
  import axios from 'axios'
  import L from 'leaflet'
  export default {
    mounted () {
      //add
      axios.get('http://localhost:8000/store_closure/api/homedata/locations/')
      .then(response => {
        this.homedataLocations = response.data
        //console.log(this.homedataLocations)
        this.displayMap()
      })
      .catch(error => {
        console.log(error)
      })
      },

  methods: {
    displayMap () {
      
      // Initialize the map
      let mapOptions = {
        center:[40.0171, -83.0168],
        zoom:12
      }
      let map = new L.map('OpenStreetMap' , mapOptions);
      let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      map.addLayer(layer);
  
      // Add markers for each location
      this.homedataLocations.forEach(location => {
        L.marker([location.latitude, location.longitude]).addTo(map)
      })

    }
  }
  }
</script>
