<template>
    <div>
        <my-button :title="title"></my-button>
        <button @click="handleClick">change title</button>
    </div>
</template>

<script>
import myButton from './my-button'

const title = ref('title')

const handleClick = () => {
    title.value = 'new title'
}

export default {
    components: {
        myButton,
    },
    methods: {
        handleClick
    },
    setup() {

        return {
            title,
        }
    }

}
</script>

<style lang="scss" scoped>
</style>