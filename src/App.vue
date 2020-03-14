<template>
  <div id="app">
    <Nav />
    <Header />
    <Stripes />
    <Mission />
    <FacebookFeed />
    <Gallery />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Stripes from './components/Stripes.vue'
import Gallery from './components/Gallery.vue'
import FacebookFeed from './components/FacebookFeed.vue'
import Mission from './components/Mission.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Stripes,
    Gallery,
    FacebookFeed,
    Mission
  }
}
</script>

<style>

</style>
