import Vue from 'vue'
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

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
