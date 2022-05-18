<template>
    <div>
        {{count}}
        <button @click="increment">add</button>
    </div>
</template>

<script>
export default {
    expose: ['increment'],
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
}
</script>

<style lang="scss" scoped>
</style>