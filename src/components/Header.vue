<template>
  <section class="hero is-white">
    <div class="container">
      <div class="hero-body">
        <div class="tile is-ancestor">
          <div class="tile is-2 is-vertical is-parent">
            <div class="tile is-child">
              <span class="container has-text-centered">
                <img alt="BTW Logo" src="../assets/logosmall.jpg" width="100">
              </span>
            </div>
          </div>

          <div class="tile is-vertical is-parent">
            <div class="tile is-child">
              <h1 class="title">
                Behind the Wheel Driving School
              </h1>
              <h2 class="subtitle">
                <call-icon /> 01782 899008 
                <facebook-icon /> Behind the Wheel
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//Use Level instead of tiles?

export default {
  name: 'Header',
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
