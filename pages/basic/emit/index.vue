<template>
    <div>
        <div :style="{ fontSize: fontSize + 'px' }">title</div>
        <enlarge-button @parentMethod="handleClick"></enlarge-button>
        <propsButton :parentMethod="handleClick"></propsButton>
    </div>
</template>

<script setup lang="ts">
import enlargeButton from './enlarge-button.vue';
import propsButton from './props.vue';

const fontSize = ref(10)

const handleClick = (num) => {
    fontSize.value += num
}

</script>

<style scoped>
</style>