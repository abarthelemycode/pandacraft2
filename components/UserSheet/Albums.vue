<template>
  <v-container>
    <v-list subheader>
      <v-subheader inset>Your Albums</v-subheader>
      <v-list-tile class="card" v-for="album in albumsDisplay" :key="album.id">
        <v-list-tile-content>
          <v-list-tile-title>{{ album.id }} - {{ album.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-divider></v-divider>
    <div class="text-xs-center">
      <v-pagination
        v-if="albums.length > nbElementByPage"
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
    padding:0.5em;
    border: 1px solid $grey;
    text-align:center;
    margin:0.5em;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
</style>

<script>
export default {
  props: {
    albums:{
      type: Array,
      default: () => []
    },
  },
  data (){
    return {
      page: 1,
      totalPage : 0,
      nbElementByPage : 10,
      visiblePage: 10,
      albumsDisplay: []
    }
  },
  mounted(){
    this.totalPage = Math.ceil(this.albums.length / this.nbElementByPage)
    this.changePage(1)
  },
  methods:{
    changePage (page) {
      this.albumsDisplay = this.albums.slice((page - 1) * this.nbElementByPage, page * this.nbElementByPage)
    }
  }
}
</script>
