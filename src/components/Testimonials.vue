<template>
    <div>
       <div  v-for="post in testimonials" v-bind:key="post.id">
           <Post v-bind:post="post" />

        </div>
    </div>
</template>

<script>
import Post from "./Post.vue"
import axios from "axios"

export default {
    name:"Testimonials",
    components: {
        Post
    },

    data() {
        return {
            testimonials: []
        }
    },

    created() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(res => this.testimonials = res.data);
  }
}
</script>

<style scoped>

</style>