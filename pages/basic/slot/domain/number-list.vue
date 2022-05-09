<template>
    <div>
        <div v-for="item in list" :key="item">
            <slot :num="item"></slot>
        </div>
    </div>
</template>

<script setup >


const list = new Array(10).fill(1).map((_, key) => key + 1)

</script>

<style scoped>
</style>