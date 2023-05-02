<template>
  <div>
    <v-card class="cardPad">
      <h1>Clients</h1>
      <v-text-field
        outlined
        placeholder="Search For Clients..."
        append-icon="mdi-magnify"
        @click:append="searchClients"
      ></v-text-field>
    </v-card>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        searchClients() {
            console.log('Pass Client')
        }
    }
};
</script>

<style lang="scss" scoped>
.cardPad{
    padding: 3%;
}
</style>