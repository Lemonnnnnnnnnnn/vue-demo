<template>
    <button @click="handleClick">
        <slot>Submit</slot>
    </button>
</template>

<script setup >
const handleClick = () => {
    console.log('click!');
}

</script>

<style scoped>
</style>