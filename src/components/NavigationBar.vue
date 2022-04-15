<template>
  <nav>
    <router-link to="/"><img src="../assets/logo.png"></router-link>
    <div class="nav-links">
      <ul>
        <li><router-link to="/aboutme">About me</router-link></li>
        <li><router-link to="/work">Work</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </nav>
  <!-- </nav>
    <div class="nav-links">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <router-link to="/home"><img src="../assets/logo.png"></router-link>
      <div class="container-fluid">
        <router-link to="/modules" class="navbar-brand">Work</router-link>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">About me</router-link>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Contact</router-link>
          </li>
        </ul>
      </div>
     -->
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
nav{
    display: flex;
    padding: 2% 6%;
    justify-content: space-between;
    align-items: center;
}

nav img{
    width: 50px;
}

.nav-links{
    flex: 1;
    text-align: right;
}

.nav-links ul li{
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
}

/* .nav-links ul li a{
    color: rgb(11, 109, 83);
    text-decoration: none;
    font-size: 13px;
} */

.nav-links ul li::after{
    content: "";
    width: 0%;
    height: 2px;
    background: rgb(0, 0, 0);
    display: block;
    margin: auto;
    transition: 0.5s;
}

.nav-links ul li:hover::after{
    width: 100%;
}
</style>
