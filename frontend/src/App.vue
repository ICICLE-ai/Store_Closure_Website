<template>
  <div id="app">
    <div>
      <PageHeader msg="header" />
    </div>
    <div class="row">
      <div class="column1">
        <QueryForm msg="Welcome to Your Vue.js App from Vue" ref="QueryForm" />
      </div>
      <div class="column2">
        <OpenStreetMap msg="below is the map" />
      </div>
      <div class="column3">
        <img
          src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
          class="marker-icon"
        />
        LRHC<br />
        <img
          src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
          class="marker-icon"
        />
        ERHC<br />
        <img
          src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
          class="marker-icon"
        />
        ERLC<br />
        <img
          src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png"
          class="marker-icon"
        />
        LRLC<br />
        <img
          src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png"
          class="marker-icon"
        />
        SPM<br />
        <img
          src="https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png"
          class="marker-icon"
        />
        CSPM<br />
      </div>
    </div>
    <div class="footer">
      <PageFooter msg="footer" />
    </div>
  </div>
  <div class="modal">
    <LoadingModal v-show="show_loading_modal" />
    <ErrorModal v-show="show_error_modal" />
    <ResultsModal
      v-show="show_results_modal"
      @close="closeResultsModal()"
      :file_name="file_name"
    />
  </div>
</template>

<script>
import QueryForm from "./components/QueryForm.vue";
import OpenStreetMap from "./components/OSMap.vue";
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
import ResultsModal from "./components/ResultsModal.vue";
import LoadingModal from "./components/LoadingModal.vue";
import ErrorModal from "./components/ErrorModal.vue";
import axios from "axios";


export default {
  name: "App",
  components: {
    PageHeader,
    QueryForm,
    OpenStreetMap,
    PageFooter,
    ResultsModal,
    LoadingModal,
    ErrorModal,
  },
  data() {
    return {
      show_results_modal: false,
      show_loading_modal: false,
      show_error_modal: false,
      csrfToken: null,
      file_name: null,
    };
  },
  mounted() {
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
    showLoadingModal() {
      this.show_loading_modal = true;
    },
    showErrorModal() {
      this.show_loading_modal = false;
      this.show_error_modal = true;
    },
    showResultsModal(file_name) {
      this.show_loading_modal = false;
      this.show_results_modal = true;
      this.file_name = file_name;
    },
    closeResultsModal() {
      // call the server to delete the file
      axios
      .delete("https://storeclosureapi.pods.icicle.tapis.io/store-closure/delete-file/",
          {
            file_name: this.file_name,
          },

        )
        .then((response) => {
          if (!response.data.success ) {
            this.showErrorModal();
          }
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
          this.showErrorModal();
        });
      // Close the modal
      this.show_results_modal = false;
    },
  },
};
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

.row {
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

.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 168px;
  background-color: #333;
  color: black;
  text-align: center;
}
</style>
