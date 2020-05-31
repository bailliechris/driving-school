<template>
    <div class = "post-item" v-bind:class="{'is-complete':post.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{post.title}}
        </p>
    </div>
</template>

<script>
export default {
    name: "Post",
    props: ["post"],
    methods: {
        markComplete(){
            this.post.completed = !this.post.completed;
        }
    }
}
</script>

<style scoped>
.post-item{
    background:cornsilk;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-complete {
    text-decoration:line-through;
}

.del {
    background: red;
    color:white;
    border:none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>