<template>
    <div>
        <div class="contactPad">
            <v-card>
                <div class="formPad">
                    <Contact />

                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
import Contact from '../components/ContactForm.vue'
    export default {
        components: {
            Contact
        }
    }
</script>

<style lang="scss" scoped>
.contactPad{
padding-left: 30%;
padding-right: 30%;
padding-top: 3%;
padding-bottom: 10%;
}
.formPad{
    padding: 5%;
}
</style>