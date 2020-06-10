<template>
    <div>
       <div  v-for="post in testimonials" v-bind:key="post._id">
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
        axios.get("http://localhost:5000/api/testi/")
        .then((res) => {
            this.testimonials = res.data;
        });
  }
}
</script>

<style scoped>

</style>