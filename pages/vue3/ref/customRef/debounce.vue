<template>
    <div>
        <input v-model="data" type="text" />
    </div>
</template>

<script setup lang="ts">

function useDebounceRef(value, delay = 200) {
    let timer;
    return customRef((trace, trigger) => {
        return {
            get() {
                trace()
                return value
            },
            set(newValue) {
                clearTimeout(timer) // 重新计时
                timer = setTimeout(()=>{
                    value = newValue
                    trigger()
                },delay)
            }
        }
    })
}

const data = useDebounceRef('foo')

</script>

<style scoped>
</style>