<template>
    <div>
        <button @click="handleClick">enlarge button</button>
    </div>
</template>

<script setup>
import { emitName } from './constants'
const emit = defineEmits([emitName])

const handleClick = () =>{
  emit('parentMethod' , 5)
}

</script>

<style lang="scss" scoped>
</style>