<template>
    <div>
        <button @click="$emit('parentMethod', 5)">enlarge button ts</button>
    </div>
</template>

<script setup lang="ts">


defineEmits<{
  (e: 'parentMethod', num: number): void,
}>()

</script>

<style lang="scss" scoped>
</style>