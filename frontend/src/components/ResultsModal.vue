<!-- /* credit: https://github.com/Emodot/Creating-Modal-Components/blob/main/components/SavedModal.vue */ -->
<template>
    <div class="modal-overlay">
      <div class="modal">
        <img class="check" src="../assets/check-icon.png" alt="" />
        <h6>Done!</h6>
        <p>Please download your results.</p>
        <button @click="downloadPDF()" class="download-button">Download</button>
      </div>
      <div class="close" @click="$emit('close')">
        <img class="close-img" src="../assets/close-icon.svg" alt="" />
      </div>
    </div>
</template>
  
  <script>
    export default {
        name: 'ResultsModal',
        props: {
            file_name: String
        },
        methods: {
            downloadPDF() {
              const a = document.createElement("a");
              a.href = '/results/'+ this.file_name;
              a.download = this.file_name
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            }
        }
  }
  </script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 10000; /* The maps z-index is 1000 */
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

.download-button {
  background-color: #992222;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>