<template>
    <div>
        <v-container>
            <h1>Admin</h1>
            <v-btn @click="tab = 1">Freelancers</v-btn>
            <v-btn @click="tab = 2">Clients</v-btn>
            <br />
            <br />
            <div v-show="tab == 1">
            <Freelancers />
            </div>
            <div v-show="tab == 2">
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
                tab: 1
            }
        },
        mounted:{
            
        },
        methods: {
            debug() {
                console.log('Pass Here')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>