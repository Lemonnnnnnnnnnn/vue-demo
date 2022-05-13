<template>
    <div>
        {{ title }}
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    title : string
}>()

const { title = 123 } = props // 不会提供对title的类型检查

</script>

