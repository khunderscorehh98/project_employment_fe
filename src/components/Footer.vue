<template>
  <v-footer>
    <v-container>
      <v-row>
        <v-col>
          <v-col>
            <v-btn text router-link to="/">Home</v-btn>
          </v-col>
          <v-col>
            <v-btn text router-link to="/about">About</v-btn>
          </v-col>
          <v-col>
            <v-btn text router-link to="/contact">Contact</v-btn>
          </v-col>
        </v-col>
        <v-col>
          <v-col>
            <p class="text-uppercase font-weight-bold">
                Created By: Haziq Halidi (Coding.Bn Cohort 2)
            </p>
          </v-col>
          <v-col>
            <p class="text-uppercase font-weight-bold">
                <v-icon>mdi-phone</v-icon>
                Phone: +673 820 9664
            </p>
          </v-col>
          <v-col>
            <p class="text-uppercase font-weight-bold">
                <v-icon>mdi-email</v-icon>
                Email: haziqimac@gmail.com
            </p>
          </v-col>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam aut
          fugit velit, deleniti praesentium repudiandae molestiae harum pariatur
          aliquid, qui dolor veritatis inventore. Earum totam ratione doloremque
          eveniet dolor!
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
a,
ul {
  list-style-type: none;
}
a,
ul,
li {
  padding: 2%;
}
</style>