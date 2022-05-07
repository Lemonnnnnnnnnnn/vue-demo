<template>
    <div v-for="son in props.arr" >
        <simple v-if="Array.isArray(son)" :arr="son"></simple>
        <div v-else>{{son}}</div>
    </div>
</template>

<script setup lang="ts">
import Simple from './simple.vue'

const props = defineProps({
    arr : Number || Array
})

</script>

<style scoped>

</style>
