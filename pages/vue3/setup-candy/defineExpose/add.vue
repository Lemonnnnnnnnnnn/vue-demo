<template>
    <div>
        {{ count }}
        <button @click="increment">add</button>
    </div>
</template>

<script setup lang="ts">

const count = ref(0)
const increment = () => {
    count.value += 1
}

defineExpose({
    increment
})

</script>

<style scoped>
</style>