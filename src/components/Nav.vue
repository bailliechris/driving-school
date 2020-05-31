<template>
    <b-navbar type="is-white" fixed-top>
        <template slot="brand">
            <b-navbar-item>
                <img
                    src="../assets/logosmall.jpg" height="80"
                    alt="Behind the Wheel Driving School"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#" @click="reset">
                Home
            </b-navbar-item>
            <b-navbar-item href="#" @click="contact">
                Contact Us
            </b-navbar-item>
            <b-navbar-dropdown label="More">
                <b-navbar-item href="#" @click="feedSelect">
                    Facebook Updates
                </b-navbar-item>
                <b-navbar-item href="#" @click="gallerySelect">
                    Gallery
                </b-navbar-item>
                <b-navbar-item href="#" @click="missionSelect">
                    Mission
                </b-navbar-item>
                <b-navbar-item href="#" @click="about">
                    About
                </b-navbar-item>
                <b-navbar-item href="#" @click="testi">
                    Testimonials
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
    //  image: mdiPhone
    }
  },
  methods: {
      missionSelect: function() {
          this.$emit("next", 1);
      },
      feedSelect: function() {
          this.$emit("next", 3);
      },
      gallerySelect: function() {
          this.$emit("next", 2);
      },
      contact: function() {
          this.$emit("next", 4);
      },
      about: function() {
          this.$emit("next", 5);
      },
      testi: function() {
          this.$emit("next", 6);
      },
      reset: function() {
          this.$emit("next", 0);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
