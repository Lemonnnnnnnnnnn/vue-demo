<template>
    <div>
        {{ foo }}
    </div>
</template>

<script setup lang="ts">
const foo = ref(1)
watchEffect(() => {
    console.log(foo.value); // 将foo添加进更新依赖项
})

setTimeout(() => {
    foo.value++; // 再次执行依赖函数
}, 1000)

</script>

<style scoped>
</style>