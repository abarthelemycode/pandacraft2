<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="users"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      class="elevation-1"
    >
      <template  v-slot:items="props" >
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.username }}</td>
          <td>{{ props.item.email }}</td>
          <td>{{ props.item.company.name }}</td>
          <td>
            <v-tooltip bottom>
              <v-btn slot="activator" icon @click="$emit('clickUser', props.item)" flat color="blue" ripple>
                <v-icon>search</v-icon>
              </v-btn>
              <span>View infos</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn slot="activator"  icon @click="$emit('goToDetails', props.item.id)" flat color="blue" ripple>
                <v-icon>list_alt</v-icon>
              </v-btn>
              <span>Check user sheet</span>
            </v-tooltip>
          </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {

  props :{
    users : {
      type: Array,
      default: () => []
    },
  },
  data () {
     return {
       rowsPerPageItems: [ 10, 20, 50, {"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}],
       pagination: {
           rowsPerPage: 10
       },
       headers: [
         {
           text: 'Id', // traduction
           // align: 'left',
           value: 'id'
         },
         { text: 'Username', value: 'username' },
         { text: 'Email', value: 'email' },
         { text: 'Company Name', value: 'company.name' },
         { text: 'Actions', value: 'company.name' },
       ],
     }
  },
}
</script>
