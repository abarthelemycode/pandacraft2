<template>
  <v-container >
    <v-layout row wrap>
      <v-card class="card" v-for="post in posts" :key="post.id">
        <v-card-title primary>
          <h3 class="headline mb-0">{{ post.title }}</h3>
        </v-card-title>
        <v-card-text>{{ post.body }}</v-card-text>
        <v-card-actions v-if="!isCommentsLoaded(post.id)">
          <v-btn @click="checkComments(post.id)" align-end flat color="blue" >See Comments</v-btn>
        </v-card-actions>
        <v-expansion-panel v-show="isCommentsLoaded(post.id)" expand>
          <v-expansion-panel-content>
            <template v-slot:header>
              <div>Views Comments</div>
            </template>
            <v-card v-for="comment in comments.filter(comment => post.id === comment.postId)" :key="comment.id">
              <v-card-text>
                <h3 >Name : {{ comment.name }}</h3>
                <h4 >Email : {{ comment.email }}</h4>
                <v-spacer></v-spacer>
                <p>{{ comment.body }}</p>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-card>
    </v-layout>
    <v-divider></v-divider>
  </v-container>
</template>

<style scoped lang="scss">
  .card {
    margin:0.5em;
    padding:0.5em;
    border: 1px solid $grey;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
</style>

<script>
export default {
  props: {
    posts:{
      type: Array,
      default: () => []
    },
    comments:{
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      loadComments: [],
    }
  },
  methods: {
    checkComments(postId) {
      this.loadComments.push(postId)
      this.$emit("checkComments", postId)
    },
    isCommentsLoaded(postId){
      return this.loadComments.includes(postId)
    }
  }
}
</script>
