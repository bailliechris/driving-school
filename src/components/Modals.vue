<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title"> {{title}} </p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                {{body}}

                <b-field label="Username">
                    <b-input v-model="username"></b-input>
                </b-field>
                <b-field label="Password">
                    <b-input v-model="password"></b-input>
                </b-field>

            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="$emit('close')">Logon</button>
            </footer>
        </div>
    </div>
</template>

<script>
//#### Change this to a Buefy modal! ####
export default {
    name: 'Modals',

    props: {
        title: {type: String, required: true, default: "No Title", }, 
        body: {type: String, required: true, default: "No Body", },
    },

    data(){
        return{
            username: "",
            password: ""
        }
    },

    methods: {

    },

    created(){

    }
}
</script>

<style>

</style>