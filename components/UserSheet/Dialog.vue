<template>
  <div>
    <v-dialog v-model="visible" scrollable persistent width="800" >
      <v-card>
        <v-card-title  class="headline grey lighten-2" primary-title>
          <h3>{{ user.id }} - {{ user.username }}</h3>
          <v-layout align-end justify-end>
            <v-btn icon ripple @click="$emit('closeDialog')" ><v-icon>close</v-icon></v-btn>
          </v-layout>
        </v-card-title>

        <v-card-text>
          <UserInfos :user="user" :readonly="readonly"/>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="$emit('goToDetails', user.id)" >
           See details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style scoped lang="scss">
  .close {
    display:flex;
    justify-content: right;
  }
</style>

<script>
import UserInfos from "./Infos.vue"

export default {
  components: {
    UserInfos
  },
  props: {
    visible:{
      type: Boolean,
      default: () => false
    },
    user:{
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      readonly: true
    }
  }
}
</script>
