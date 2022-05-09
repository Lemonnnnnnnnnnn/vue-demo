<template>
    <div>
        <pageVue>
            <template v-slot:header>
                <div>Header</div>
            </template>

            <template v-slot:default>content</template>

            <template v-slot:footer>
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