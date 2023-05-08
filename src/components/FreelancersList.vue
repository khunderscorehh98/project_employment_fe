<template>
  <div>
    <v-card class="cardPadMain">
      <h1>Freelancers</h1>
      <v-text-field
        outlined
        placeholder="Search For Freelancers..."
        append-icon="mdi-magnify"
        v-model="search"
      ></v-text-field>
      <v-card
        class="cardPad"
        v-for="list in lists"
        :key="list.id"
        v-ripple
        @click="showDetail(list.user_id)"
      >
        <v-row>
          <v-col>
            <h1>
              {{ list.name }}
            </h1>
            <hr />
            <br />
            <h2>Major in {{ list.major }}</h2>
          </v-col>
          <v-spacer></v-spacer>
          <v-img src="https://placehold.co/4"></v-img>
        </v-row>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lists: [],
      search: ''
    };
  },
  methods: {
    showDetail(listId) {
      this.$router.push(`/detail/${listId}`)
    }
  },
  computed: {
    filteredItems() {
      if (!this.search) {
        return this.lists; // return all items if search query is empty
      }
      return this.lists.filter(list => {
        // return items that match the search query
        return list.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  mounted() {
    axios.get('http://localhost:5000/people')
    .then(response => {
        this.lists = response.data.data
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
.cardPadMain {
  padding: 3%;
  min-height: 100vh;
}
.cardPad {
  padding: 3%;
  margin-bottom: 2%;
}
ul {
  list-style-type: none;
}
</style>