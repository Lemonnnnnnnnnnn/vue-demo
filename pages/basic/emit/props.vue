<template>
    <div>
        <button @click="props.parentMethod(5)">enlarge button</button>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    parentMethod : Function
})

</script>

<style scoped>
</style>