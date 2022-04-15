<template>
  <grid-component :column="$mq | mq({
    phone: 2,
    tablet: 3,
    laptop: 4
  })">
  <div class="work">
    <NavigationBar />

    <div class="wrapper">
      <div class="maincontent">
        <div class="box">
          <div class="content">
                <h2>WiWa</h2>
                <p> Ein Wildwechselwarnsystem für die Sicherheit von Tier und Autofahrer an Gefahrenstellen 
                </p>
              </div>
          <img src="../assets/wiwa.png" alt="">
        </div>

        <div class="box">
          <div class="image-text">
            <div class="content">
              <h2>Remote Gardening</h2>
              <p> Ein modulares Bewässerungssystem, dass remote angesteuert werden kann
              </p>
            </div>
          </div>
          <img src="../assets/remotegardening.png" alt="">
        </div>

        <div class="box">
          <div class="image-text">
            <div class="content">
              <h2>Plantanical</h2>
              <p> Eine App zur Pflanzenüberwachung
              </p>
            </div>
          </div>
          <img src="../assets/plantanical.png" alt="">
        </div> 

        <div class="box">
          <div class="image-text">
            <div class="content">
              <h2>User Journey Map</h2>
              <p> Die Darstellung eines Nutzererlebnis während der Interaktion mit einem Wecker
              </p>
            </div>
          </div>
          <img src="../assets/userjourney.png" alt="">
        </div>
      </div>
    </div>
  </div>
  </grid-component>
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
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    min-height: 100vh;
    color: rgb(11, 109, 83);
    text-align: center;
}

.wrapper .maincontent{
    padding-left: 80px;
    padding-right: 80px;
    grid-column-gap: 15px;
}

.content{
    padding: 5%;
}

.content h2{
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.content p{
    line-height: 1.5;
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