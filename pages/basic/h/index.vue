<template>
    <div>
        <div style="height : 100vh"></div>
        <header-template :level="3">
            header
        </header-template>
        <header-h :level="3">
            header-h
        </header-h>
        <div style="height : 100vh"></div>
    </div>
</template>

<script setup lang="ts">
import headerTemplate from './header-template.vue'
import headerH from './header-h.vue';


</script>

<style scoped>
</style>