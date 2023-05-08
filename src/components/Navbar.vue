<template>
  <v-app-bar app color="transparent" dark elevation="0">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      
      <v-btn
      text
      router-link
      to="/auth">
        LOGIN
      </v-btn>
    </v-app-bar>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bgNo{
  background-color: rgba(0, 0, 0, 0.1);
}
</style>