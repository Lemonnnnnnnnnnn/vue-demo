<template>
    <div>
        <div>
            props :
            {{ title }}
        </div>
        <div>
            computed :
            {{ mixinTitle }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },

    setup(props) { // props是一个响应式对象
        const mixinTitle = computed(() => 'hi ' + props.title)

        return {
            mixinTitle
        }
    }
}
</script>

<style lang="scss" scoped>
</style>