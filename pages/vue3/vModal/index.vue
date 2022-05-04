<template>
    <div>
        <input v-model="data" type="text" />
        <input :value="data" @input="data = $event.target.value" />
        <button @click="submit">submit</button>

    </div>
</template>

<script setup >
const data = ref('')

function submit() {
    console.log(data);
}

</script>

<style scoped>
</style>