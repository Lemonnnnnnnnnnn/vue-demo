<template>
    <div>
        {{ foo }}
        <button @click="editFoo">edit foo</button>
    </div>
</template>

<script setup lang="ts">
import { customRef } from 'vue';

function generateRef(value) {
    return customRef((track, trigger) => (
        {
            get() {
                track();
                console.log('收集依赖');
                return value

            },
            set(newVal) {
                trigger();
                value = newVal
                console.log('触发依赖');
            }
        }
    ))
}

const foo = generateRef('foo')
function editFoo(){
    foo.value = 'bar'
}

</script>

<style scoped>
</style>