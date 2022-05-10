<template>
    <div>
        {{ num }}
        <button @[eventName]="handleClick">add</button>
    </div>
</template>

<script setup>

const num = ref(0)
const eventName = 'click'
const handleClick = () => {
    num.value += 1
}

</script>

<style scoped>
</style>