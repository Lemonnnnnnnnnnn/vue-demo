<template>
    <div>
        <button ref="button" @click="handleClick">my button</button>
    </div>
</template>

<script>
export default {
    methods:{
        handleClick(){
            console.log('hello');
        }
    }
}
</script>

<style lang="scss" scoped>

</style>