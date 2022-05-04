<template>
    <div>
        {{ props.bar }}
        <button @click="addProperty">add Property</button>
    </div>
</template>

<script setup>
import { toRef } from 'vue';


const props = reactive({
    foo: 1,
})

function addProperty() {
    // handleRefBar(props.bar)    //props.bar : undefined
    handleRefBar(toRef(props, 'bar')) // toRef(props, 'bar') : 生成空的ref对象，ref.value = undefined
}

function handleRefBar(bar) {
    bar.value = 2
}


</script>

<style scoped>
</style>