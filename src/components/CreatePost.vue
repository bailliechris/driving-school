<template>
    <div class="box">
        <form>
          <b-field label="Testimonial Title">
            <b-input v-model="title"
              minlength="2"
              maxlength="20">
            </b-input>
          </b-field>
          <b-field label="Text">
            <b-input v-model="text"
              minlength="10"
              maxlength="200">
            </b-input>
          </b-field>
          <b-field label="Image">
            <b-input v-model="image"
              minlength="2"
              maxlength="20">
            </b-input>
          </b-field>
          <button type="submit" class="button is-medium is-success" @click="sendData">
            Add Testimonial
          </button>
          
          <Messages v-if="showmessage" :title="mtitle" :body="mbody" />
          
        </form>
    </div>
</template>

<script>
import axios from "axios"
import Messages from './Messages.vue'

export default {
    name:"CreatePost",
    components: {
        Messages
    },

    data() {
        return {
            title: "",
            text: "",
            image: "",
            showmessage: false,
            mtitle: "",
            mbody: ""
        }
    },

    methods: {
        sendData: function(e) {
            e.preventDefault();
            let now = new Date();
            let data = {
            "title": this.title, 
            "text": this.text, 
            "image": this.image,
            "time": now.toDateString()
            };

            axios.post("http://localhost:5000/api/testi/", data)
              .then(this.successSend())
              .catch(this.failedSend());
        },

        successSend: function(){
            this.showmessage = true;
            this.mtitle = "Success!";
            this.mbody = "Testimonial Added";
        },

        failedSend: function(){
            this.showmessage = true;
            this.mtitle = "Error!";
            this.mbody = "Failed to Send";
        }
    },

    created() {
  }
}
</script>

<style scoped>

</style>