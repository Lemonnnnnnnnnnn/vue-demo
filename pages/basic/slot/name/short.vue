<template>
    <div>
        <pageVue>
            <template #header>
                <div>Header</div>
            </template>

            <template #default>content</template>

            <template #footer>
                <div>footer</div>
            </template>
        </pageVue>
    </div>

</template>

<script setup lang="ts">
import pageVue from './page.vue';

</script>

<style scoped>
</style>