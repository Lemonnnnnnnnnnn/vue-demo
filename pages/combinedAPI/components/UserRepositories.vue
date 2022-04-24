<template>
    <div>
        <!-- <RepositoriesFilters :search-key="filters" />
        <RepositoriesSortBy  />
        <RepositoriesList :list="repositories"  /> -->
    </div>
</template>

<script>
export default {
//   components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: { 
      type: String,
      required: true
    }
  },
  data () {
    return {
      repositories: [], 
      filters: { id: 1 }, 
      searchQuery: '' 
    }
  },
  computed: {
    filteredRepositories () { 

     }, // 3
    repositoriesMatchingSearchQuery () { 

     }, // 2
  },
  watch: {
    user: 'getUserRepositories' // 1
  },
  methods: {
    getUserRepositories () {
      // 使用 `this.user` 获取用户仓库
    }, // 1
    updateFilters () { 

     }, // 3
  },
  mounted () {
    this.getUserRepositories() // 1
  }
}
</script>

<style lang="scss" scoped>

</style>