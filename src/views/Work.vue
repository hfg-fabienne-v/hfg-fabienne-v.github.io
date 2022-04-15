<template>
  <div class="work">
    <NavigationBar />
    <h1>This is the work page</h1>
  
    <div class="wrapper">
      <div class="maincontent">
        <div class="box">
          <img src="../assets/wiwa.png" alt="">
            <div class="image-text">
              <div class="content">
                <h2>WiWa</h2>
                <p> Ein Wildwechselwarnsystem für die Sicherheit von Tier und Autofahrer an Gefahrenstellen 
                </p>
              </div>
            </div>
        </div>

        <div class="box">
          <img src="../assets/remotegardening.png" alt="">
          <div class="image-text">
            <div class="content">
              <h2>Remote Gardening</h2>
              <p> Ein modulares Bewässerungssystem, dass remote angesteuert werden kann
              </p>
            </div>
          </div>
        </div>

        <div class="box">
          <img src="../assets/plantanical.png" alt="">
          <div class="image-text">
            <div class="content">
              <h2>Plantanical</h2>
              <p> Eine App zur Pflanzenüberwachung
              </p>
            </div>
          </div>
        </div> 

        <div class="box">
          <img src="../assets/userjourney.png" alt="">
          <div class="image-text">
            <div class="content">
              <h2>User Journey Map</h2>
              <p> Die Darstellung eines Nutzererlebnis während der Interaktion mit einem Wecker
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'workView',
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
.wrapper{
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    color: rgb(11, 109, 83);
    width: 80%;
    padding: 30px 0;
    text-align: center;
}

.wrapper .maincontent{
    padding-left: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 25px;
    grid-column-gap: 25px;
}

.content{
    padding: 10%;
}

.content h2{
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 15px;
}

.content p{
    line-height: 1.5;
}

.wrapper .maincontent .box{
    position: relative;
    cursor: pointer;
    margin-bottom: 15px;
    box-shadow: 15px 15px 40px rgba(0,0,0,0.15);
    height: 250px;
    overflow: hidden;
}

.wrapper .maincontent .box img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

img{
    width: 800px;
}

</style>