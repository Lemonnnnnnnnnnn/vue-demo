<template>
    <button @click="handleClick">enlarge button</button>
</template>

<script>
export default {
    emits: ['parentMethod'],
    setup(props, { emit }) {
        // 这里的emit等于模板中的this.$emit
        const handleClick = () => {
            emit('parentMethod', 5) // 如果要使用ts的类型推断功能，请使用deineEmits
        }

        return {
            handleClick
        }
    },
}
</script>

<style lang="scss" scoped>
</style>