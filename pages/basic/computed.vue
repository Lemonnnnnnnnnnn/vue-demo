<template>
    <div>
        {{num}}
        {{double}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                num : 1,
            }
        },
        computed:{
            double(){
                return this.num * 2
            }
            // double : ()=> this.num * 2 // 访问不到this指向
        }
    }
</script>

<style lang="scss" scoped>

</style>