<template>

    <div class="box">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    {{post.title}}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    {{post.text}}
                    <figure class="image is-256x256">
                        <img src="../assets/logosmall.jpg">
                    </figure>
                    {{post.image}}
                </div>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    Time/Date Posted: {{post.time}}
                </p>
            </footer>
        </div>
    </div>

</template>

<script>
export default {
    name: "Post",
    props: ["post"],
    data() {
        return {
            img: ""
        }
    },
    methods: {
        markComplete(){
            this.post.completed = !this.post.completed;
        }
    },
    created() {
        this.img = "../assets/logosmall.jpg" ;
    }
}
</script>

<style scoped>

</style>