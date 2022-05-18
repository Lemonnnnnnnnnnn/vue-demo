<template>
    <div>
        <add :ref="el => refAdd = el"></add>
    </div>
</template>

<script setup lang="ts">
import Add from './add.vue';

const refAdd = ref(null)

onMounted(() => {
    refAdd.value.increment()
    console.log(refAdd.value.count); // undefined
    
})

</script>

<style scoped>
</style>