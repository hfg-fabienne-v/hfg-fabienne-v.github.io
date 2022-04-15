<template>
  <div class="home">
    <NavigationBar />
    <h1>This is the main page</h1>
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
