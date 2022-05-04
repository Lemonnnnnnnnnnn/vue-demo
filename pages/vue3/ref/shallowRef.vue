<template>
    <div>
        state.foo : {{ state.foo }}
        <div>
            <button @click="editStateBad">edit 【state.value.foo】</button>
        </div>
        <div>
            <button @click="editStateGood">edit 【state.value】</button>
        </div>
    </div>
</template>

<script setup>
const state = shallowRef({ foo: 1 })
function editStateBad() {
    state.value.foo = 2
}

function editStateGood() {
    state.value = {
        foo: 2
    }
}

</script>

<style scoped>
</style>