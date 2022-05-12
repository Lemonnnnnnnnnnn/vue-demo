<template>
    <div>
        {{ title }}
    </div>
</template>

<script setup lang="ts">
const { title } = defineProps({
    title: String
})
</script>

<style scoped>
</style>