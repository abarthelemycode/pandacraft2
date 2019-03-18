<template>
  <v-container>
    <v-list subheader>
      <v-subheader inset>Your Tasks</v-subheader>
      <v-list-tile  class="card" v-for="todo in todosDisplay" :key="todo.id">
        <v-list-tile-content>
          <v-list-tile-title>{{ todo.id }} - {{ todo.title }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-tooltip bottom v-if="todo.completed === true">
            <v-btn slot="activator" icon ripple >
              <v-icon color="green">done</v-icon>
            </v-btn>
            <span>Completed</span>
          </v-tooltip>
          <v-tooltip bottom v-else>
            <v-btn slot="activator" icon ripple>
              <v-icon color="red">close</v-icon>
            </v-btn>
            <span>Not completed</span>
          </v-tooltip>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <v-divider></v-divider>

    <div class="text-xs-center">
      <v-pagination
        v-if="todos.length > nbElementByPage"
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
    todos:{
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
      todosDisplay: []
    }
  },
  mounted(){
    this.totalPage = Math.ceil(this.todos.length / this.nbElementByPage)
    this.changePage(1)
  },
  methods:{
    changePage (page) {
      this.todosDisplay = this.todos.slice((page - 1) * this.nbElementByPage, page * this.nbElementByPage)
    }
  }
}
</script>
