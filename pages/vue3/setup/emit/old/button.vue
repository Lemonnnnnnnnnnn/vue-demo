<template>
    <div>
        <button @click="$emit('parentMethod', 5)">enlarge button</button>
    </div>
</template>

<script>

export default {
    emits : ['parentMethod'] 
}

</script>

<style lang="scss" scoped>
</style>