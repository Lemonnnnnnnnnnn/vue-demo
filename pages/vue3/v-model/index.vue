<template>
    <div>
        <!-- <myComponentVue v-model:title="title" /> -->
        <myComponentVue :title="title" @update:title="updateTitle" />
    </div>
</template>

<script setup lang="ts">
import myComponentVue from './my-component.vue';

const title = ref('title')

const updateTitle = (value :string) =>{
    title.value = value
}

</script>