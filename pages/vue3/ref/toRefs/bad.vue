<template>
    <div>
        {{ foo }}
        <button @click="editState">edit state</button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

function generateState() {
    const state = reactive({
        foo: 1,
    })
    return state
}

let { foo } = generateState()

function editState() {
    foo = 2;
}



</script>

<style scoped>
</style>