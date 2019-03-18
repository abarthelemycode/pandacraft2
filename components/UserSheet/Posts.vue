<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-space-between>
      <v-card class="card" v-for="post in postsDisplay" :key="post.id">
        <v-card-title primary>
          <h3 class="headline mb-0">{{ post.title }}</h3>
        </v-card-title>
        <v-card-text>{{ post.body }}</v-card-text>
        <v-card-actions>
          <v-btn flat color="blue">View Comments</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    <v-divider></v-divider>

    <div class="text-xs-center">
      <v-pagination
        v-if="posts.length > nbElementByPage"
        v-model="page"
        :length="totalPage"
        :total-visible="visiblePage"
        circle
        @input="changePage"
      ></v-pagination>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
  .card {
    width:20em;
    margin:0.5em;
    padding:0.5em;
    flex: 1 0 auto;
    border: 1px solid $grey;
    text-align:left;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    h3{
      min-height:2em;
    }
  }
</style>

<script>
export default {
  props: {
    posts:{
      type: Array,
      default: () => []
    },
  },
  data (){
    return {
      page: 1,
      totalPage : 0,
      nbElementByPage : 9,
      visiblePage: 10,
      postsDisplay: []
    }
  },
  mounted(){
    this.totalPage = Math.ceil(this.posts.length / this.nbElementByPage)
    this.changePage(1)
  },
  methods:{
    changePage (page) {
      this.postsDisplay = this.posts.slice((page - 1) * this.nbElementByPage, page * this.nbElementByPage)
    }
  }
}
</script>
