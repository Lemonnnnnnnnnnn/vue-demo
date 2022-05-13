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

    setup(props) {
        const { title } = toRefs(props)

        const mixinTitle = computed(() => 'hi ' + title.value)

        return {
            mixinTitle
        }
    }
}
</script>

<style lang="scss" scoped>
</style>