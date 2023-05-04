<template>
    <v-dialog v-model="isOpen">
      <!-- Dialog content goes here -->
      <template v-slot:activator="{ on }">
        <v-btn v-on="on">Open Dialog</v-btn>
      </template>
      <v-btn @click="$emit('close')">Close</v-btn>
    </v-dialog>
  </template>
  
  <script>
  import { VDialog } from 'vuetify/lib'
  
  export default {
    components: {
      VDialog
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  