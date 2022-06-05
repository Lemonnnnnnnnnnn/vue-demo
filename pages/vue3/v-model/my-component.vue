<template>
    <div>
        <input :value="props.title" type="text" @input="inputValue">
    </div>
</template>

<script setup>

const emit = defineEmits(['update:title'])

const props = defineProps({
    title : String,
    titleModifiers : {
        default : ()=>({})
    }
    // modelModifiers : {
    //     default : ()=>({})
    // }
})

const inputValue = (e )=>{
    if(props.titleModifiers.myDecorator){
        console.log('do something');
    }
    emit('update:title' , e.target.value)
}


</script>