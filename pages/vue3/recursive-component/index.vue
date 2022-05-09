<template>
    <div>
        <complex-vue :data="complex_data"></complex-vue>
    </div>
</template>

<script setup lang="ts">
import complexVue from './complex.vue';

//#region data
const complex_data = [
    { title: '一级标题' },
    [
        { title: '二级标题' },
        [
            { title: '三级标题' },
            [
                { title: '四级标题' }
            ]
        ]
    ]
]
//#endregion data

</script>

<style scoped>
</style>