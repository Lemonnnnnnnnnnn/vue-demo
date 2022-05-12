<template>
    <div>
        <div :style="{ fontSize: fontSize + 'px' }">title</div>
        <my-button @click="handleClick"></my-button>
    </div>
</template>

<script setup lang="ts">
import myButton from './button.vue'

const fontSize = ref(10)

const handleClick = (num) => {
    console.log('执行', num);

    fontSize.value += num
}

</script>

<style scoped>
</style>