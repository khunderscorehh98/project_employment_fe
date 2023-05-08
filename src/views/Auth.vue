<template>
  <div>
    <div class="padCenter">
      <v-card>
        <Login />
      </v-card>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
  export default {
    components: {
      Login
    }
  }
</script>

<style scoped>
.padCenter{
  padding-left: 30%;
  padding-right: 30%;
  padding-top: 9%;
  padding-bottom: 3%;
}
</style>