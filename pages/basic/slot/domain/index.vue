<template>
    <div>
        <number-list>
            <template v-slot:default="item">
                <h1 v-if="item.num === 5">{{ item.num }}</h1>
                <div v-else>{{ item.num }}</div>
            </template>
        </number-list>
    </div>
</template>

<script setup lang="ts">

import numberList from './number-list.vue';

</script>

<style scoped>
</style>