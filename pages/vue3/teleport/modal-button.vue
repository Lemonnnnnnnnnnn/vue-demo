<template>
    <div>
        <button @click="handleClick">open modal</button>
        <teleport to="body">
            <div v-if="openModal" class="mask">
            </div>
            <div v-if="openModal" class="modal">
                <div>
                    modal content
                </div>
                <button @click="handleClick"> close modal</button>
            </div>
        </teleport>

    </div>
</template>

<script setup lang="ts">
const openModal = ref(false)

const handleClick = () => {
    openModal.value = !openModal.value
}



</script>

<style scoped>
.mask {
    position: absolute;
    z-index: 50;
    background: #000;
    opacity: 0.5;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
}

.modal {
    width: 20rem;
    z-index: 100;
    height: 15rem;
    position: absolute;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
</style>