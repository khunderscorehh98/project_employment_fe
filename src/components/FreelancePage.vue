<template>
    <div>
        <v-container>
            <div v-for="list in list" :key="list.id">
                <v-row>
                    <v-col>
                      <v-card class="cardPadStretchedVert">
                        <h1>
                            {{ list.name }}
                        </h1>
                        <h2>
                          Major in {{ list.major }}
                        </h2>
                        <br />
                        <hr />
                        <br />
                        <h3>
                          Introduction
                        </h3>
                        <p>
                            {{ list.description }}
                        </p>

                      </v-card>
                    </v-col>
                    <v-col>
                        <v-img src="https://placehold.co/4"></v-img>
                    </v-col>
                </v-row>
                <v-row>
                  <v-card class="cardPadStretchedHori">
                    <h2>
                      Skills offered
                    </h2>
                    <ul>
                      <li></li>
                    </ul>
                  </v-card>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      list: {}
    }
  },
  methods: {

  },
  mounted() {
    axios.get()
  },
  created() {
    const listId = this.$route.params.id;
    axios.get(`http://localhost:5000/people/${listId}`)
      .then(res => {
        this.list = res.data.data;
        console.log(this.list)
      });
  }  
}
</script>

<style lang="scss" scoped>
.cardPadStretchedVert{
  padding: 3%;
  min-height: 100%;
}
.cardPadStretchedHori{
  padding: 3%;
  min-width: 100%;
}
</style>
