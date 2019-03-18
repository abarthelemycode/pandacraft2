<template>
  <section class="dashboard">
    <UserDatatable :users="users" @clickUser="openDialog" @goToDetails="goToDetails"/>
    <UserDialog :user="user" :visible="dialogDisplay" @closeDialog="closeDialog" @goToDetails="goToDetails"/>
  </section>
</template>

<script>
import UserDatatable from "~/components/UserSheet/Datatable.vue"
import UserDialog from "~/components/UserSheet/Dialog.vue"

export default {
  components: {
    UserDatatable,
    UserDialog,
  },
  async asyncData({ $axios }) {
    const users = await $axios.$get(`/api/users`)
    return { users }
  },

  data () {
     return {
       user : {
         address: {},
         company: {},
       },
       dialogDisplay : false,
     }
  },
  methods :{
    openDialog(user) {
      this.user = user
      this.dialogDisplay = true
    },
    closeDialog() {
      this.dialogDisplay = false
    },
    goToDetails(id) {
      this.dialogDisplay = false
      this.$router.push({ path: `dashboard/users/${id}` })
    },
  }
}
</script>
