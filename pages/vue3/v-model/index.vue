<template>
    <div>
        <myComponentVue v-model:title.myDecorator="title" />
    </div>
</template>

<script setup >
import myComponentVue from './my-component.vue';

const title = ref('title')

</script>