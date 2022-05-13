<template>
    <div>
        {{ title }}
        <my-button></my-button>
    </div>
</template>

<script setup lang="ts">
import myButton from '../export-property./basic-use./basic-use/my-button.vue';
const title = ref('title')

</script>
