<template>
    <div>
        <v-text-field
        outlined
        label="Search Job..."
        append-inner-icon="mdi-magnify"
        rounded
        append-icon="mdi-magnify"
        @click:append="searchBar"
      ></v-text-field>
    </div>
</template>

<script>
  export default {
    data: () => ({
      
    }),

    methods: {
      searchBar() {
        console.log('Testing')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>