<template>
    <button @click="handleClick">enlarge button</button>
</template>

<script>
export default {
    setup(props, { emit }) {
        // 这里的emit等于模板中的this.$emit
        const handleClick = () => {
            emit('parentMethod', 5)
        }

        return {
            handleClick
        }
    },
    emits: ['parentMethod']
}
</script>

<style lang="scss" scoped>
</style>