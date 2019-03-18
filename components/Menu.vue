<template>
  <v-toolbar class="nav-toolbar" :dark="true">
    <v-toolbar-title>Pandacraft Test 2</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
       <v-btn v-for="page in pages" :key="page.name" :to="page.link"> {{ page.name }}</v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="page in pages" :key="page.name">
          <v-list-tile-content >
            <v-list-tile-title>
              <nuxt-link  class="menu-link" :to="page.link">{{ page.name }}</nuxt-link>
            </v-list-tile-title>
           </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<style scoped lang="scss">
  .menu {
    text-decoration: none;
  }

  .menu-link {
    text-decoration: none;
    color: $black;
    &.router-link-exact-active {
      color: $blue;
    }
  }
</style>

<script>
export default {
  props: {
    pages:{
      type: Array,
      default: () => []
    }
  }
}
</script>
