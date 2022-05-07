<template>
    <div>
        <blog-post v-for="post in data" :title="post.title"></blog-post>
    </div>
</template>

<script setup lang="ts">
import blogPost from './blog-post.vue'

const data = [
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' }
]
</script>

<style scoped>
</style>