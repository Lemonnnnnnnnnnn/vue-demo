<template>
    <div>
        <button :ref="el=>refButton = el" @click="handleClick">button</button>
    </div>
</template>

<script setup lang="ts">

const refButton = ref(null)

const handleClick = () =>{
    console.log('hello');
    
}

onMounted(()=>{
    refButton.value.click()
})

</script>
