<!-- /* credit: https://github.com/Emodot/Creating-Modal-Components/blob/main/components/SavedModal.vue */ -->
<template>
    <div class="modal-overlay">
      <div class="modal">
        <img class="icon" src="../assets/error-icon.png" alt="" />
        <h6>Error!</h6>
        <h7>Please Try Again</h7>
        <p>Refresh this page and try agian. Make sure you are using Mozilla Firefox web browser.</p>
        <p>If this continues to occur, please contact us regarding this issue. 
            Make sure to mention the Store Closure Application, include the query you were trying to run, and a short description as well. 
            A developer will look into this issue and reach out to you. 
        </p> 
        <p>Thank you for your patience.</p>
        <button class="button" @click="goToICICLEDiscuss()">Contact Us</button>
      </div>
    </div>
</template>
  
  <script>
    export default {
        name: 'ResultsModal',
        props: {
            msg: String
        },
        methods: {
            goToICICLEDiscuss() {
              window.open("https://lists.osu.edu/mailman/listinfo/icicle-discuss", "_blank").focus();
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
  z-index: 10000;
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

.modal-backdrop {
  z-index: -1;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.icon {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
h7 {
  font-weight: 500;
  font-size: 20px;
  margin: 20px 0;
}
p {
  font-size: 16px;
  margin: 20px 0;
}

.button {
  background-color: #992222;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>