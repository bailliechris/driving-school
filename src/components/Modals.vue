<template>
    <section>
        <button class="button is-white" @click="toggleModal">Admin</button> 

        <b-modal :active.sync="isCardModalActive">
            <form action="post">
                <div class="modal-card is-active" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Logon</p>
                    </header>
                    <section class="modal-card-body">
                    <Messages v-if="showmessage" :title="mtitle" :body="mbody" />
                        <b-field label="Username">
                            <b-input
                                type="username"
                                v-model="username"
                                placeholder="Your username"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                v-model="password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>

                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="toggleModal">Close</button>
                        <button class="button is-primary" @click="sendData">Login</button>
                    </footer>
                </div>
            </form>
        </b-modal>
    </section>
</template>

<script>
import axios from 'axios'
import Messages from './Messages.vue'

export default {
    name: 'Modals',

    components: {
        Messages
    },

    props: {
        title: {type: String, required: false, default: "No Title", }, 
        body: {type: String, required: false, default: "No Body", },
    },

    data(){
        return{
            username: "",
            password: "",
            isCardModalActive: false,
            showmessage: false,
            mtitle: "",
            mbody: ""
        }
    },

    methods: {
        toggleModal: function() {
            this.isCardModalActive = !this.isCardModalActive;
        },

        sendData: async function(e) {
            e.preventDefault();

            var config = {
                method: 'get',
                url: 'http://localhost:5000/api/user/login',
                headers: { 
                    'Authorization': 'Basic' // anJvdGg6ZHJpdmluZzIwMjA='
                },
                auth: {
                        username: this.username,
                        password: this.password
                }
            };

            //const res = await axios.post("http://localhost:5000/api/user/login", {
            await axios(config)
            //        auth: {
             //           username: this.username,
              //          password: this.password
              //      }
              //  })
                .then((res) => {
                    if (res.status == 200) {
                        this.successSend();
                    }
                })
                .catch(this.failedSend());
        },

        successSend: function(){
            this.showmessage = false;
            this.toggleModal();
            this.$store.commit('toggleauth');
          //  this.$emit('auth-update', true);           
        },

        failedSend: function(){
            this.showmessage = true;
            this.mtitle = "Error!";
            this.mbody = "Incorrect details, please try again.";
            this.$emit('auth-update', false);
        },

        toggleAuth() {
            this.$store.commit('toggleauth');
        }
    }
}
</script>

<style>

</style>