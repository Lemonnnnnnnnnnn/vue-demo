<template>
    <div>
        {{ foo }}
        <button @click="editState">edit state</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'

function generateState() {
    const state = reactive({
        foo: 1,
    })
    return toRefs(state)
}

let { foo } = generateState()

function editState() {
    foo.value = 2;
}



</script>

<style scoped>
</style>