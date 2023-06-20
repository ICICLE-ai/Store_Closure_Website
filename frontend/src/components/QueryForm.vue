<template>
  <div class="row">
    <div class="column">
      <div class="form-group">
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" v-model="firstName" class="input-field">
      </div>
      <div class="form-group">
        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" v-model="lastName" class="input-field">
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" v-model="emailAddress" class="input-field">
      </div>
      <div class="form-group">
        <label for="query">Query:</label>
        <textarea id="query" v-model="queryText" class="textarea-field"></textarea>
      </div>
      <div class="form-group">
        <button @click="submitForm()" class="submit-button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QueryForm',
  props: ['msg', 'client'],
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
      // Show the loading modal
      this.$root.showLoadingModal();

      // Send the form data to the server
      this.client
        .post("store-closure/submit-form/", {
          firstName: this.firstName,
          lastName: this.lastName,
          emailAddress: this.emailAddress,
          queryText: this.queryText,
        })
        .then((response) => {
          window.alert('Done!');
          // Grab the file name from the response
          let file_name = response.data.file_name;

          // Show the results modal
          this.$root.showResultsModal(file_name);

          // Clear the form
          this.firstName = '';
          this.lastName = '';
          this.emailAddress = '';
          this.queryText = '';
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
}
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
}

.column {
  width: 50%;
  margin: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.label {
  margin-bottom: 0.5rem;
}

.input-field {
  height: 2rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
}

.textarea-field {
  height: 10rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  resize: vertical;
}

.submit-button {
  height: 2.5rem;
  width: 8rem;
  background-color: #992222;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 25%;
}

.submit-button:hover {
  background-color: #780d0d;
}

@media (max-width: 768px) {
  .column {
    width: 100%;
    margin: 1rem 0;
  }
}
</style>
