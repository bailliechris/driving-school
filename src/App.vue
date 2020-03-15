<template>
  <div id="app">
    <Nav v-on:next="displayItem" />
    <Header />
    <Stripes />
    <b-button type="is-light" rounded @click="swapMission" expanded>Mission</b-button>
    <div v-if="mission">
      <Mission />
    </div>
    <b-button type="is-light" rounded @click="swapFeed" expanded>Updates from Facebook</b-button>
    <div v-if="feed">
      <div class="box">
        <FacebookFeed />
      </div>
    </div>
    <b-button type="is-light" rounded @click="swapGallery" expanded>Gallery</b-button>
    <div v-if="gallery">
      <Gallery />
    </div>
    <Stripes />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Stripes from './components/Stripes.vue'
import Gallery from './components/Gallery.vue'
import FacebookFeed from './components/FacebookFeed.vue'
import Mission from './components/Mission.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Stripes,
    Gallery,
    FacebookFeed,
    Mission,
    Footer
  },
  data() {
      return {
        mission: false,
        gallery: false,
        feed: false
      }
  },
  methods: {
    displayItem: function(i) {
      if (i == 1) {
        this.mission = !this.mission;
      } 
      else if (i == 2) {
        this.gallery = !this.gallery;
      }
      else if (i == 3) {
        this.feed = !this.feed;
      }
      else if (i == 0) {
        this.resetAll();
      }
    },
    swapMission: function() {
      this.mission = !this.mission;
    },
    swapGallery: function() {
      this.gallery = !this.gallery;
    },
    swapFeed: function() {
      this.feed = !this.feed;
    },
    resetAll: function() {
      this.feed = false;
      this.gallery = false;
      this.mission = false;
    }
  }
}
</script>

<style>

</style>
