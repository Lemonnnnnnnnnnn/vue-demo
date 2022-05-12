<template>
    <div>
        <myButtonVue :title="title"></myButtonVue>
    </div>
</template>

<script setup lang="ts">
import myButtonVue from './my-button.vue';

const title = ref('title')

</script>

<style scoped>
</style>