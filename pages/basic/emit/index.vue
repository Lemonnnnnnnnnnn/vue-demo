<template>
    <div>
        <div :style="{ fontSize : fontSize + 'px' }">title</div>
        <enlarge-button @parentMethod="handleClick"></enlarge-button>
    </div>
</template>

<script setup lang="ts">
import enlargeButton from './enlarge-button.vue';

const fontSize = ref(10)

const handleClick = () => {
    fontSize.value +=1
}

</script>

<style scoped>
</style>