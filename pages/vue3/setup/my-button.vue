<script>
export default {
    setup() {
        const text = ref('button')
        return () => h('button', {  } , text.value)
    }
}

</script>