<template>
    <div class="container">
        <article class="message is-black" v-show="isVisible">
            <div class="message-header">
                <p>{{title}}</p>
                <button class="delete" aria-label="delete" @click="toggle_message"></button>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'Messages',

    props: {
        title: {type: String, required: true, default: "No Title", }, 
        body: {type: String, required: true, default: "No Body", },
    },

    data(){
        return{
            isVisible: true
        }
    },

    methods: {
      toggle_message: function () {
          this.isVisible = !this.isVisible;
      }
    },

    created(){
        this.isVisible = true;

    }
}
</script>

<style>

</style>