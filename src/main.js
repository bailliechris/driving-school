import Vue from 'vue'
import Vuex from 'vuex'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';

import CallIcon from 'vue-material-design-icons/Phone.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Facebook from 'vue-material-design-icons/Facebook.vue';
 
//Add logo options
Vue.component('call-icon', CallIcon);
Vue.component('twitter-icon', Twitter);
Vue.component('facebook-icon', Facebook);

Vue.use(Buefy)
Vue.use(Vuex);

// Create a store
const store = new Vuex.Store({
  state: {
    // variables go here
    auth: false
  },
  mutations: {
    // functions to run go here
    toggleauth(state) {
      state.auth = !state.auth
    }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app');
