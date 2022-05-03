<template>
    <div>
        {{ realA }}
        {{ realB }}
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

const a = 1;
let b = ref(a)

function getRealValue(val: number | Ref<number>) {
    return unref(val)
}

const realA = getRealValue(a)
const realB = getRealValue(b)

</script>

<style scoped>
</style>