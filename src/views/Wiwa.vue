<template>
    <div class="home">
        <NavigationBar />
         <h1>This is the wiwa page</h1>
    </div>  
</template>

<script>
import NavigationBar from '../components/NavigationBar.vue'

export default {
  name: 'wiwaView',
  components: {
    NavigationBar
  },
}
</script>
