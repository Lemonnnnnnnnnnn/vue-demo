<template>
    <div>
        <UserRepositories :user="user" />
    </div>
</template>

<script setup>
import UserRepositories from "./components/UserRepositories"

const user = ref({
    type: "111",
    required: true
})

</script>

<style lang="scss" scoped>
</style>