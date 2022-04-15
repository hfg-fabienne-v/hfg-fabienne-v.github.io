<template>
  <div class="work">
    <NavigationBar />
    <h1>This is the work page</h1>
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
