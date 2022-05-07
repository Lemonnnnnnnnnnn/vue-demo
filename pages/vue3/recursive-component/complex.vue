<template>
    <div v-for="child in data">
        <complex-vue v-if="Array.isArray(child)" :data="child"></complex-vue>
        <div :style="{ fontSize: (5 - child.dep) * 10 + 'px' }" v-else>{{ child.title }}</div>
    </div>
</template>

<script setup >
import complexVue from './complex.vue'

const props = defineProps({
    data: Array
})

const dealData = (data, dep = 0) => {
    if (data.dep) return
    if (Array.isArray(data)) {
        data.forEach(item => dealData(item, dep + 1))
    } else {
        data.dep = dep
        console.log(data);
    }
}
dealData(props.data)

</script>

<style scoped>
</style>