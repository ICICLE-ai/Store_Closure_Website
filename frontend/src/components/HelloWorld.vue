import axios from 'axios'

<template>
  <div class="row">
    <div class="column">
      <div class = "form-group">
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" v-model="firstName" class = "input-feild">
      </div>
      <div class = "form-group">
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="lastName" class = "input-feild">
      </div>
      <div class = "form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" v-model="emailAddress" class = "input-feild">
      </div>
      <div class = "form-group">
        <label for="query">Query:</label>
        <input type="text" id="query" v-model="queryText" class = "area-feild">
      </div>
      <div class = "form-group">
        <button @click="submitForm" class = "button-feild">Submit</button>
      </div> 
    </div>
      <div id ="map"></div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      queryText: '',
      emailAddress: '',
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.column {
  float: left;
  width: 50%;
    flex: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.row {
  display: flex;
}


.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  
  align-items: center;
  
}
.button-feild {
  width: 10%;
}
.area-feild {
  height: 50px;
  width: 20%;
  text-align: left;
}
.input-feild {
  width: 20%;
}
.map {
  height: 100%;
  width: 100%;
}

</style>

