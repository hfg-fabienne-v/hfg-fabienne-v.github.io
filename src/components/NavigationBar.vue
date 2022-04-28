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
  text-decoration: none;
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
    color: rgb(59, 135, 115);
}

.nav-links ul li{
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
    color: rgb(59, 135, 115);
}

.nav-links ul li:hover{
    color: rgb(59, 135, 115);
}


.nav-links ul li::after{
    content: "";
    width: 0%;
    height: 2px;
    background: rgb(0, 0, 0);
    display: block;
    margin: auto;
    transition: 0.5s;
    color: rgb(59, 135, 115);
}

.nav-links ul li:hover:after{
  color: rgb(59, 135, 115);
  width: 100%;
}

a{
  text-decoration: none;
}

a:hover{
  color: rgb(59, 135, 115);
}
</style>
