<template>
    <div>
        {{ props.title }}
    </div>
</template>

<script setup lang="ts">

interface IProps {
    title?: string
}

const props = withDefaults(defineProps<IProps>(), {
    title: 'default title' // 会提供对title的类型检查
})


</script>

<style scoped>
</style>