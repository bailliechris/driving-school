<template>
    <b-navbar type="is-white" fixed-top>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="../assets/logosmall.jpg" height="80"
                    alt="Behind the Wheel Driving School"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Contact
            </b-navbar-item>
            <b-navbar-dropdown label="More">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Mission
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Nav',
  data:
  function () {
    return {
    //  image: mdiPhone
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
