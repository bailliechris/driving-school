<template>
    <div class="container">
        <p><call-icon /> 01782 899008 </p>
        <p><facebook-icon /> Behind the Wheel </p>
        <p><strong>Behind the Wheel Driving School 2020</strong></p>
        <div v-if="auth">
          <button class="button is-white" @click="logout">Logout</button>
        </div>
        <div v-else-if="!auth">
          <Modals :title="title" :body="body" />
        </div>     
    </div>
</template>

<script>
import Modals from './Modals.vue'
import cookie from 'js-cookie'
import {mapState} from 'vuex'

export default {
  name: 'Footer',
  components: {
    Modals
  },
  data() {
    return {
      title: "Logon Page",
      body: "Please enter your details",
      loggedin: false
    }
  },
  methods: {
    passauth: function(authval) {
    //  v-on:auth-update="passauth"

    // Remove this later if we don't need this function at all due to vuex
        this.loggedin = authval;
 //     this.$emit('auth-update', authval);
 //     this.loggedin = true;
 //     cookie.set('auth', 'true', { expires: 7 });
    },
    logout: function() {
      cookie.remove('auth');
 //     this.loggedin = false;
      this.$store.commit('toggleauth');
    }
  },
  computed: {
    ...mapState(['auth'])
  }
}

</script>

<style scoped>

</style>