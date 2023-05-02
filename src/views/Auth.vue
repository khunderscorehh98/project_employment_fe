<template>
    <div>
        <v-container>
            <v-row
            align="center">
                <v-col align-self="center">
                    <h1>Login</h1>
                </v-col>
            </v-row>
            <inline-svg
            src="../assets/svg/login.svg"
            ></inline-svg>
            <form action="">
                <v-text-field placeholder="Email Address" outlined />
                <v-text-field placeholder="Password" outlined />
            </form>
            <v-btn block color="primary">LOGIN</v-btn>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>