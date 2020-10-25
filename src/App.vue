<template>
  <div id="app">
    <Nav v-on:next="displayItem" />
    <Header />
    <Stripes />
    <b-button type="is-light" rounded @click="swapMission" expanded>Mission</b-button>
    <div v-if="mission">
      <Mission />
    </div>
    <b-button type="is-light" rounded @click="swapGallery" expanded>Gallery</b-button>
    <div v-if="gallery">
      <Gallery />
    </div>
    <b-button type="is-light" rounded @click="swapContact" expanded>Contact</b-button>
    <div v-if="contact">
      <Contact />
    </div>
    <b-button type="is-light" rounded @click="swapAbout" expanded>About</b-button>
    <div v-if="about">
      <About />
    </div>
    <b-button type="is-light" rounded @click="swapTesti" expanded>Testimonials</b-button>
    <div v-if="testimonials">
      <Testimonials />
    </div>
    <div v-if="auth">
      <b-button type="is-light" rounded @click="swapCreate" expanded>Create Testimonial</b-button>
      <div v-if="showcreate">
        <CreatePost />
      </div>
    </div>
    <Stripes />
    <Footer v-on:auth-update="passauth" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Stripes from './components/Stripes.vue'
import Gallery from './components/Gallery.vue'
import Testimonials from './components/Testimonials.vue'
import Mission from './components/Mission.vue'
import Footer from './components/Footer.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import CreatePost from './components/CreatePost.vue'
import cookie from 'js-cookie'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Stripes,
    Gallery,
    Testimonials,
    Mission,
    Footer,
    Contact,
    About,
    CreatePost
  },
  data() {
      return {
        mission: false,
        gallery: false,
        feed: false,
        contact: false,
        testimonials: false,
        about: false,
        showcreate: false
      }
  },
  watch: {
    authval: function () {
      if(this.authval) {
        if(cookie.get('auth') == true) {
          this.showcreate = true;
        }
      }
    }
  },
  methods: {
    testauth: function() {
      if(cookie.get('auth') == true) {
        this.testauthv = cookie.get('auth');
        this.authval = true;
        //return true;
      } 
      else {
        this.testauthv = cookie.get('auth');
        this.authval = false;
        //return false;
      }
    },
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
      else if (i == 4) {
        this.contact = !this.contact;
      }
      else if (i == 5) {
        this.about = !this.about;
      }
      else if (i == 6) {
        this.testimonials = !this.testimonials;
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
    swapContact: function() {
      this.contact = !this.contact;
    },
    swapAbout: function() {
      this.about = !this.about;
    },
    swapTesti: function() {
      this.testimonials = !this.testimonials;
    },
    swapCreate: function() {
      this.showcreate = !this.showcreate;
    },
    resetAll: function() {
      this.feed = false;
      this.gallery = false;
      this.mission = false;
      this.testimonials = false;
      this.contact = false;
      this.about = false;
      this.showcreate = false;
    },
    passauth: function(authstatus) {
      this.authval = authstatus;
    }
  },
  computed: {
    ...mapState(['auth'])
  }
}
</script>

<style>

</style>
