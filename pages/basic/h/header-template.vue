<template>
    <div>
        <h1 v-if="level === 1">
            <a :name="anchor" :href="`#${anchor}`">
                <slot></slot>
            </a>
        </h1>
        <h2 v-else-if="level === 2">
            <a :name="anchor" :href="`#${anchor}`">
                <slot></slot>
            </a>
        </h2>
        <h3 v-else-if="level === 3">
            <a :name="anchor" :href="`#${anchor}`">
                <slot></slot>
            </a>
        </h3>
        <h4 v-else-if="level === 4">
            <a :name="anchor" :href="`#${anchor}`">
                <slot></slot>
            </a>
        </h4>
        <h5 v-else-if="level === 5">
            <a :name="anchor" :href="`#${anchor}`">
                <slot></slot>
            </a>
        </h5>
        <h6 v-else-if="level === 6">
            <a :name="anchor" :href="`#${anchor}`">
                <slot></slot>
            </a>
        </h6>
    </div>
</template>

<script setup lang="ts">
const slots = useSlots() // 获取slot实例
const anchor = String(slots.default()[0].children).trim() // 


const { level } = defineProps({
    level: Number,
})
</script>

<style scoped>
</style>