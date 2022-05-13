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
    computed: {
        mixinTitle() {
            return 'hi ' + this.title
        }
    }
}
</script>

<style lang="scss" scoped>
</style>