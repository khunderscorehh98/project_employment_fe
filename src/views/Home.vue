<template>
  <div>
    <Jumbotron />
    <v-container>
      <Searchbar />
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue'
import Searchbar from '../components/SearchPeople.vue'
import Footer from '../components/Footer.vue'

  export default {
    components: {
      Jumbotron,
      Searchbar,
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>