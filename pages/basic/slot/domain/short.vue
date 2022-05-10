<template>
    <div>
        <number-list v-slot="{ num }">
            <h1 v-if="num === 5">{{ num }}</h1>
            <div v-else>{{ num }}</div>
        </number-list>
    </div>
</template>

<script setup lang="ts">

import numberList from './number-list.vue';


</script>

<style scoped>
</style>