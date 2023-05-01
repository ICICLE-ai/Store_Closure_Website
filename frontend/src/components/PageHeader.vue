<template>
  <header class="main-header">
    <div class="logo-container">
      <img src="../assets/ICCLE.jpeg" alt="Logo" class="logo">
      <h1 class="site-title">Store Closure</h1>
    </div>
    <nav class="main-navigation">
      <ul class="nav-list">
        <!-- li class="nav-item"><a href="/">Home</a></li -->
        <!-- li class="nav-item"><a href="/about">About</a></li -->
        <!-- li class="nav-item"><a href="/services">Services</a></li -->
        <!-- li class="nav-item"><a href="/contact">Contact Us</a></li -->
      </ul>

    </nav> 
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #780d0d;
}

.logo-container {
  display: flex;
  align-items: center;
  padding: 2px ;
}

.logo {
  width: 100px;
  height: 50px;
}

.site-title {
  margin-left: 1rem;
  color: white;
}

.main-navigation {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-left: 1rem;
}

.nav-item:first-child {
  margin-left: 0;
}
</style>
