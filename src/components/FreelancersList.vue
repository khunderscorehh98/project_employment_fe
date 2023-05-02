<template>
  <div>
    <v-card class="cardPad">
      <h1>Freelancers</h1>
      <v-text-field
        outlined
        placeholder="Search For Freelancers..."
        append-icon="mdi-magnify"
        @click:append="searchFree"
      ></v-text-field>
      <v-card>
        <div v-for="list in lists" :key="list.id">
          <ul>
            <li>{{ list.name }}</li>
          </ul>
        </div>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lists: [
      ],
    };
  },
  methods: {},
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        this.lists = response.data
        console.log('Success')
    })
    .catch(error => {
            console.error(error)
            console.log('Here')
        }
    )
  },
};
</script>

<style lang="scss" scoped>
.cardPad {
  padding: 3%;
}
</style>