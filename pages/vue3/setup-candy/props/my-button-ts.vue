<template>
    <div>
        {{ props.title }}
    </div>
</template>

<script setup lang="ts">
interface IProps {
    title: string
}

const props = defineProps<IProps>()

</script>

<style scoped>
</style>