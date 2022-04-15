<template>
  <div class="home">
    <NavigationBar />
    <div class="text-box">
      <img src="../assets/banner.png">
      <div class="middle">
        <h1>Hi, I'm Fabienne</h1>
        <h1>and I work as a dedicated</h1>
        <h1 class="typing"></h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'homeView',
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
.middle{
    padding-top: 50px;
}
.typing{
    position: relative;
    margin-top: 20px;
    font-size: 40px;
    font-weight: lighter;
    color: rgb(59, 135, 115);
}
.text-box{
    padding-left: 100px;
    padding-top: 100px; 
    width: 90%;
    color: rgb(0, 0, 0);
}
img{
  display: flex;
  padding: 2% 6%;
  flex: 1;
  text-align: right;
  width: 100%;
  max-width: 800px;
  height: auto;
  padding-right: 10px;
}
</style>
