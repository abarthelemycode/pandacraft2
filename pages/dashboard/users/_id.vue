<template>
  <section class="dashboard-user">
    <div class="return-link">
      <nuxt-link  to="/dashboard">Return to dashboard</nuxt-link>
    </div>
    <h1>User sheet - {{ user.username }}</h1>
    <v-tabs>
      <v-tab>Infos</v-tab>
      <v-tab>Todos</v-tab>
      <v-tab>Albums</v-tab>
      <v-tab>Posts</v-tab>
      <v-tab-item>
        <UserInfos :user="user" :readonly="true" />
      </v-tab-item>
      <v-tab-item>
        <UserTodos :todos="todos" />
      </v-tab-item>
      <v-tab-item>
        <UserAlbums :albums="albums" />
      </v-tab-item>
      <v-tab-item>
        <UserPosts :posts="posts" />
      </v-tab-item>
    </v-tabs>
  </section>
</template>

<style scoped lang="scss">
  .return-link, h1 {
    margin-bottom:1em;
  }
</style>

<script>
import UserInfos from "~/components/UserSheet/Infos.vue"
import UserTodos from "~/components/UserSheet/Todos.vue"
import UserAlbums from "~/components/UserSheet/Albums.vue"
import UserPosts from "~/components/UserSheet/Posts.vue"

export default {
  components:{
    UserInfos,
    UserTodos,
    UserAlbums,
    UserPosts
  },
  validate ({ params }) {
    // Doit être un nombre
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(`/api/users/${ params.id }`)
    const posts = await $axios.$get(`/api/users/${ params.id }/posts`)
    const todos = await $axios.$get(`/api/users/${ params.id }/todos`)
    const albums = await $axios.$get(`/api/users/${ params.id }/albums`)
    return { user, posts, todos, albums }
  },
}
</script>
