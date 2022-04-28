<template>
  <grid-component :column="$mq | mq({
    phone: 2,
    tablet: 3,
    laptop: 4
  })">
  <div class="work">
    <NavigationBar />
    <div class="body">
      <div class="wrapper">
        <!-- <img src="../assets/wiwa.png" alt="">
        <img src="../assets/remotegardening.png" alt="">
        <img src="../assets/plantanical.png" alt=""> -->
        <div class="maincontent">
          <div class="box">
            <img src="../assets/wiwa.png" alt="">
            <div class="img-text">
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
*{
  margin: 0;
  padding: 0;
  box-shadow: border-box;
  outline: none;
}
.body{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
}
.wrapper{ 
    width: 80%;
    color: rgb(11, 109, 83);
    text-align: center;
}

.wrapper .maincontent{
    padding-left: 20px;
    padding-right: 20px;
    grid-column-gap: 15px;
}

.content{
    padding: 10%;
}

.content h2{
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.content p{
    line-height: 1.5;
}

.maincontent{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 25px;
  grid-column-gap: 25px;
}

.maincontent .box{
  position: relative;
  cursor: pointer;
  margin-bottom: 15px;
  box-shadow: 15px 15px 40px rgba(0,0,0,0.15);
  height: 250px;
  overflow: hidden;
}

.maincontent .box::before{
  content: '';
  position: absolute;

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