<template>
    <div>
    </div>
</template>

<script setup>
const data = { foo: { bar: 1 } }
const stateReactive = reactive(data)
const stateRef = ref(data)

console.log('stateReactive' , stateReactive);
console.log('stateReactive.foo' , stateReactive.foo);
console.log('stateReactive.foo.bar' , stateReactive.foo.bar);
console.log('stateRef' , stateRef);
console.log('stateRef.value' , stateRef.value);
</script>

<style lang="scss" scoped>
</style>