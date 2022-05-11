<template>
    <div>
        {{ num }}
        <buttonVue @click="handleClick"></buttonVue>
    </div>
</template>

<script setup lang="ts">
import buttonVue from './button.vue';

const num = ref(0)

const handleClick = () => {
    num.value += 1
}

</script>

<style scoped>
</style>