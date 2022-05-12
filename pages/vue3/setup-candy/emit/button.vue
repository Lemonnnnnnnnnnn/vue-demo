<template>
    <div>
        <button @click="$emit('parentMethod', 5)">enlarge button</button>
    </div>
</template>

<script setup>
import { emitName } from './constants'
defineEmits([emitName])

</script>

<style lang="scss" scoped>
</style>