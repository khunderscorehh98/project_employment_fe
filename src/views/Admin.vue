<template>
    <div>
      <v-container>
        <v-row>
          <v-col>
            <h1>Admin</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="setActiveTab('tab1')" class="btnPad" color="primary">Freelancers</v-btn>
            <v-btn @click="setActiveTab('tab2')" class="btnPad" color="primary" outlined>Clients</v-btn>
          </v-col>
        </v-row>
        <br />
        <br />
        <div v-if="activeTab === 'tab1'">
          <Freelancers />
        </div>
        <div v-if="activeTab === 'tab2'">
          <Clients />
        </div>
      </v-container>
    </div>
  </template>
  
  <script>
  import Freelancers from '../components/FreelancersList.vue'
  import Clients from '../components/ClientList.vue'
  
  export default {
    components: {
      Freelancers,
      Clients
    },
    data() {
      return {
        activeTab: 'tab1'
      }
    },
    methods: {
      setActiveTab(tab) {
        this.activeTab = tab;
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .btnPad{
    margin: 1%;
  }
  </style>
  