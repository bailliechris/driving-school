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
            testimonials: [],
            msg: ""
        }
    },

    created() {
        axios.get("http://localhost:5000/api/testi/")
        .then((res) => {
            if (res.status == 200){
                this.testimonials = res.data;
            }
            else {
                this.msg = res.data;
            }           
        });
  }
}
</script>

<style scoped>

</style>