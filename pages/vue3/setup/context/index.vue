<template>
    <div>
        <div :style="{ fontSize: fontSize + 'px' }">title</div>
        <myButtonVue @parentMethod="handleClick"></myButtonVue>
    </div>
</template>

<script setup lang="ts">
// import enlargeButton from './enlarge-button.vue';
// import propsButton from './props.vue';
import myButtonOldVue from './my-button-old.vue';
import myButtonVue from './my-button.vue';

const fontSize = ref(10)

const handleClick = (num) => {
    fontSize.value += num
}

</script>

<style scoped>
</style>