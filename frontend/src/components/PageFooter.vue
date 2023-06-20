<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-column">
        <h3 class="footer-heading">About Us</h3>
        <p class="footer-text">The ICICLE project is funded by the National Science Foundation (NSF) under grant number OAC-2112606.

 </p>
      </div>
      <div class="footer-column">
        <h3 class="footer-heading">Contact Us</h3>
        <p class="footer-text">2015 Neil Ave, Columbus, Ohio 43202</p>
        <p class="footer-text">Phone: (614) 292-5813</p>
        <p class="footer-text">Email: etshelp@osu.edu</p>
      </div>
      <div class="footer-column">
        <h3 class="footer-heading">Follow Us</h3>
        <div class="icicle-link">
          <a href="https://icicle.ai/">ICICLE</a>
        </div>
      </div>
    </div>
    <p class="copy-right">&copy; 2023 The Ohio State University, All rights reserved.</p>
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
  color: white;
}

.social-media-list li:last-child {
  margin-right: 0;
}

.social-media-list a {
  color: white;
} 

.social-media-list a[href="https://icicle.ai/"] {
  text-decoration: none;
  color: white;
}
.icicle-link {
  margin-top: 0.5rem;
  color: white;
}
.copy-right {
  font-size: 0.8rem;
  text-align: center;
  color: white;

}
</style>