<template>
    <div>
        <!-- <simple :arr="data"></simple> -->
        <complex-vue :data="complex_data"></complex-vue>
    </div>
</template>

<script setup lang="ts">
import simple from './simple.vue'
import complexVue from './complex.vue';

const data = [
    1,
    [
        2,
        [
            3, [
                4
            ]
        ]
    ]
]

const complex_data = [
    {title : '一级标题'},
    [
        {title : '二级标题'},
        [
            {title : '三级标题'},
            [
                {title : '四级标题'}
            ]
        ]
    ]
]

</script>

<style scoped>
</style>