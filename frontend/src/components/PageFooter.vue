<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-column">
        <h3 class="footer-heading">About Us</h3>
        <p class="footer-text">Add footer text. </p>
      </div>
      <div class="footer-column">
        <h3 class="footer-heading">Contact Us</h3>
        <p class="footer-text">1234 Main Street, City, State 12345</p>
        <p class="footer-text">Phone: (123) 456-7890</p>
        <p class="footer-text">Email: info@example.com</p>
      </div>
      <div class="footer-column">
        <h3 class="footer-heading">Follow Us</h3>
        <ul class="social-media-list">
          <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        </ul>
      </div>
    </div>
    <p class="copy-right">&copy; Your Site Name, All rights reserved.</p>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: #780d0d;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-column {
  flex-basis: 30%;
  margin-bottom: 0.5rem;
}

.footer-heading {
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}

.footer-text {
  margin-bottom: 0rem;
  margin-top: 0;
  color: white;
}

.social-media-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  color: white;
  
}

.social-media-list li {
  margin-right: 1rem;
}

.social-media-list li:last-child {
  margin-right: 0;
}

.social-media-list a {
  color: white;
}

.copy-right {
  font-size: 0.8rem;
  text-align: center;
  color: white;

}
</style>
