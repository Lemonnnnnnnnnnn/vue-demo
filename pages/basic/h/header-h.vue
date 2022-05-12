<script>
export default {
    render() {
        // this.$slots.default()是具名插槽的node实例，因为我们没有提供插槽名，所以名字是default ，如果提供了名字，则可以通过this.$slot.foo()来获取实例
        const text = String(this.$slots.default()[0].children).trim() 
        const aNode = h('a', { 
            name: text, //props上的属性会通过attribute继承到组件的根节点上
            href: `#${text}`
        },
            this.$slots.default() 
        )
        const rootNode = h('h' + this.level, {}, [aNode])
        return rootNode
    },
    props: {
        level: Number
    }
}
</script>