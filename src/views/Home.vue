<template>
  <div class="home">
    <NavigationBar />
    <div class="text-box">
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="4" class="text1">
            <h1>Hi, I'm Fabienne</h1>
            <h1>and I work as a dedicated</h1>
            <h1 class="typing"></h1>
          </b-col>
          <b-col cols="8"><img src="../assets/banner.png" fluid alt="Responsive image"></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'
import '../assets/tailwind.css'

export default {
  name: 'homeView',
  data(){
    return {

    }
  },
  components: {
    NavigationBar
  },
  props: {},
  mounted(){
    let text = ['Creative Coder', 'Digital Product Designer', 'Artist', 'Invention Designer', 'UX Designer'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type(){
      if(count === text.length){
        count = 0;
      }
      currentText = text[count];
      letter = currentText.slice(0, ++index);

      document.querySelector('.typing').textContent = letter;
      if(letter.length === currentText.length){
        count++;
        index = 0; 
      }
      setTimeout(type, 300); //delay 1s
    })();
  }

}
</script>

<style scoped>
.typing{
    position: relative;
    margin-top: 20px;
    font-size: 40px;
    font-weight: lighter;
    color: rgb(59, 135, 115);
}
.text-box{
  padding-left: 50px;
  padding-top: 50px;
  width: 90%;
  color: rgb(0, 0, 0);
}
img{
  width: 100%;
  height: auto;
}
h1{
  font-size: 20px;
  color: rgb(0, 0, 0);
}
.b-col{
  background-color: aqua;
}
.text1{
  padding-top: 100px;
  padding-left: 25px;
  text-align: left;
}

</style>
