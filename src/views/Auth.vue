<template>
  <div>
    <v-container>
      <!-- <icon name="login" /> -->
      <!-- Login -->
      <div v-show="field == 1">
        <v-row align="center">
          <v-col align-self="center">
            <h1>Login</h1>
          </v-col>
        </v-row>

        <form action="">
          <v-text-field
            placeholder="Email Address"
            outlined
            append-icon="mdi-email"
            v-model="emailL"
          />
          <v-text-field
            placeholder="Password"
            outlined
            :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="password = !password"
            :type="password ? 'password' : 'type'"
            v-model="passwordL"
          />
        </form>
        <v-btn block color="primary" @click="loginUser">LOGIN</v-btn>
      </div>

      <!-- Register -->
      <div v-show="field == 0">
        <h1>Register</h1>
        <form action="">
          <v-text-field
            placeholder="Email Address..."
            outlined
            append-icon="mdi-email"
            v-model="emailR"
          ></v-text-field>
          <v-text-field
            placeholder="Password"
            outlined
            :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="password = !password"
            :type="password ? 'password' : 'text'"
            v-model="passwordR"
          ></v-text-field>

          <v-text-field
            placeholder="Confirm Password"
            outlined
            :append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="password = !password"
            :type="password ? 'password' : 'text'"
            v-model="passwordRR"
          ></v-text-field>
          <v-btn block color="primary" @click="registerUser" v-on="on">
            Register
          </v-btn>
        </form>
      </div>
      <br />
      <v-btn @click="field = 0" v-show="field == 1" block text>
        New member? click here to register
      </v-btn>
      <v-btn @click="field = 1" v-show="field == 0" block text>
        Already a member? click here to login
      </v-btn>
    </v-container>
  </div>
</template>

<script>
// import Icon from '../components/LoginSVG.vue'
import axios from "axios";
import auth0 from 'auth0-js'

export default {
  components: {},
  methods: {
    async registerUser() {
      if (!this.passwordR && !this.passwordRR && !this.emailR) {
        alert("Please fill out the form!");
      } else {
        if (this.passwordR !== this.passwordRR) {
          alert("Check your registeration form please!");
        } else {
          axios.post("http://localhost:5000/login", {
            login: this.emailR,
            password: this.passwordR,
          });
          await this.$router.push("/");
        }
      }
    },
    async loginUser() {
      if (!this.emailL && !this.passwordL) {
        alert("Please enter your login details!");
      } else {
        try {
          const response = await axios.post("http://localhost:5000/login", {
            login: this.emailL,
            password: this.passwordL,
          });

          // Check if user is found
          if (response.data.exists) {
            // If login is successful, redirect to dashboard page
            this.$router.push("/");
          } else {
            // If user is not found, display an error message
            alert("User not found");
          }
        } catch (error) {
          // If login is unsuccessful, display a generic error message
          alert("Login failed");
        } finally {
          const auth0Client = new auth0.WebAuth({
            domain: "YOUR_DOMAIN",
            clientID: "YOUR_CLIENT_ID",
            redirectUri: "http://localhost:8080/callback",
            responseType: "token id_token",
            scope: "openid profile email",
          });

          auth0Client.authorize();
        }
      }
    },
  },
  data() {
    return {
      field: 1,
      password: true,
      showDialog: false,
    };
  },
};
</script>

<style scoped>
</style>