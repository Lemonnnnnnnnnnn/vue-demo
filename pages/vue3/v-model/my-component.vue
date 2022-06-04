<template>
    <div>
        <input :value="props.title" type="text" @input="inputValue">
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['update:title'])

const props = defineProps({
    title : String
})

const inputValue = (e )=>{
    emit('update:title' , e.target.value)
}

</script>