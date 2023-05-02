<template>
    <v-footer>
        <v-container>
            <v-row>
                <v-col>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </v-col>
                <v-col>
                    <ul>
                        <li><a href="">Page1</a></li>
                        <li><a href="">Page2</a></li>
                        <li><a href="">Page3</a></li>
                    </ul>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum totam aut fugit velit, deleniti praesentium repudiandae molestiae harum pariatur aliquid, qui dolor veritatis inventore. Earum totam ratione doloremque eveniet dolor!
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
}
a, ul{
    list-style-type: none;
}
a, ul, li{
    padding: 2%;
}
</style>