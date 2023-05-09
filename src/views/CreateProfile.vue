<template>
    <div>
        <v-container>
            <v-card class="cardPad">
                <CreateForm />
            </v-card>
        </v-container>
    </div>
</template>

<script>
import CreateForm from '../components/CreateProfile.vue'
    export default {
        components: {
            CreateForm
        },
        data() {
            return {

            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
.cardPad{
    padding: 3%;
    margin: 10%;
}
</style>