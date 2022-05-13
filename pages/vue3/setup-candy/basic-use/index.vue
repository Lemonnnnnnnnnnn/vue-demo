<template>
    <div>
        {{ title }}
        <my-button></my-button>
    </div>
</template>

<script setup lang="ts">
import myButton from './my-button.vue';
const title = ref('title')

</script>
