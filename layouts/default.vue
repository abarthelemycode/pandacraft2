<template>
  <v-app id="app">
    <Menu :pages="pages"/>
    <v-content>
      <div class="container">
        <nuxt/>
      </div>
    </v-content>
  </v-app>
</template>

<style scoped lang="scss">
  @font-face {
    font-family: "Nunito";
    src: url("~assets/fonts/Nunito-Regular.ttf");
  }
  #app {
    font-family: 'Nunito', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $black;
  }
  .container {
    min-height: 100vh;
    justify-content: center;
  }
</style>

<script>
import Menu from "~/components/Menu.vue"

export default {
  components:{
    Menu
  },
  data () {
     return {
       pages: [
        { name: "Dashboard", link:"/dashboard" },
        { name: "About", link:"/about" }
      ],
    }
  },
}
</script>
