<template>
    <div>
        <p>{{ num }}</p>
        <p>{{ doubleNum }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 1,
        }
    },
    computed: {
        doubleNum: function () {
            return this.num * 2
        }
    }
}
</script>
