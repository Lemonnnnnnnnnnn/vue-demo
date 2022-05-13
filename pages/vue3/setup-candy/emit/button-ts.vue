<template>
    <div>
        <button @click="handleClick">enlarge button ts</button>
    </div>
</template>

<script setup lang="ts">


const emit = defineEmits<{
  (e: 'parentMethod', num: number): void,
}>()

const handleClick = () =>{
  emit('parentMethod' , 5)
}

</script>

<style lang="scss" scoped>
</style>