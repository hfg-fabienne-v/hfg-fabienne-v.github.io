<template>
  <div class="contact">
    <NavigationBar />
    <h1>This is the contact page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'contactView',
  components: {
    NavigationBar
  }
}
</script>