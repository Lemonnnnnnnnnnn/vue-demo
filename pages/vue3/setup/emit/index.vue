<template>
    <div>
        <div :style="{ fontSize: fontSize + 'px' }">title</div>
        <my-button @parentMethod="handleClick"></my-button>
        <buttonTsVue @parentMethod="handleClick"></buttonTsVue>
    </div>
</template>

<script setup lang="ts">
import myButton from './button.vue';
import buttonTsVue from './button-ts.vue';

const fontSize = ref(10)

const handleClick = (num) => {
    fontSize.value += num
}

</script>

<style scoped>
</style>