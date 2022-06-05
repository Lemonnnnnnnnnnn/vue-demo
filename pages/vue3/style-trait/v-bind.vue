<template>
    <div>
        <p class="text">text</p>
    </div>
</template>

<script setup >
const theme = {color :'red'}

</script>

<style scoped>
.text{
    color: v-bind('theme.color')
}
</style>