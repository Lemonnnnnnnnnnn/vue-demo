<template>
    <div>
        {{ title }}
        <my-button></my-button>
    </div>
</template>

<script>
import myButton from './my-button'

export default {
    components:{
        myButton
    },
    setup() {
        const title = ref('title')

        return {
            title,
        }
    }

}
</script>

<style lang="scss" scoped>
</style>