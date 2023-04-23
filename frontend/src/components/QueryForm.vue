
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
        <button @click="submitForm()" class = "button-feild">Submit</button>
      </div> 
    </div>
  </div>

</template>

<script>
import axios from 'axios'

  export default {
    name: 'QueryForm',
    props: {
      msg: String
    },
    data() {
      return {
        firstName: '',
        lastName: '',
        emailAddress: '',
        queryText: '',
      }
    },
   
    methods: {
      submitForm() {
        //console.log(this.firstName);
        axios
        .post("submit-form/", {
          firstName: this.firstName,
          lastName: this.lastName,
          emailAddress: this.emailAddress,
          queryText: this.queryText,
        }, 
        {
          xsrfCookieName: 'csrftoken',
          xsrfHeaderName: 'X-CSRFTOKEN',
        })
        
        .then((response) => {
          console.log(response.data);
          this.firstName = '';
          this.lastName = '';
          this.emailAddress = '';
          this.queryText = '';
          window.alert('Query submitted successfully');

        })
        .catch((error) => {
          console.log(error);
        });
       
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
  width: 15%;
}
.area-feild {
  height: 50px;
  width: 35%;
  text-align: left;
}
.input-feild {
  width: 35%;
}


</style>

