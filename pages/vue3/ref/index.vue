<template>
    <div>
        {{ num }}
        {{ refNum }}
        {{ obj.a }}
        {{ refObj.a }}
    </div>
</template>

<script setup lang="ts">

let num = 1;
let refNum = ref(num)

let obj = { a: 1 }
let refObj = ref(obj)

num++
refNum.value += 1

obj.a++;
refObj.value.a++;

</script>

<style scoped>
</style>