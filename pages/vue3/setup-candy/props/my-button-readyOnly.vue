<template>
    <div>
        {{ title }}
        <button @click="handleClick">change title</button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String
})


const { title } = toRefs(props)

const handleClick = () => {
    title.value = 'new title'
}

</script>

<style scoped>
</style>