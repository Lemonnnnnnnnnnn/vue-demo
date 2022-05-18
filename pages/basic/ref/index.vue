<template>
    <div>
        <input type="text" ref="input">
        <my-button ref="my-button"></my-button>
        <button :ref="el => buttonRef = el" @click="print2">button</button> 
    </div>
</template>

<script>
import myButton from './my-button'

export default {
    components: {
        myButton
    },
    data() {
        return {
            buttonRef: null
        }
    },
    methods: {
        focusInput() {
            this.$refs.input.focus()
        },
        print() {
            this.$refs['my-button'].$refs.button.click()
        },
        print2(){
            console.log('world');
        }
    },
    mounted() {
        this.focusInput()
        this.print()
        this.$data.buttonRef.click()
    }
}
</script>

<style lang="scss" scoped>
</style>