<template>
  <v-container>
    <h2 class="title" >Infos</h2>
    <v-layout row wrap>
      <v-flex>
        <v-text-field class="field" :value="user.username" label="Username" :readonly="readonly"></v-text-field>
        <v-text-field class="field" :value="user.email" label="Email" :readonly="readonly"></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field class="field" :value="user.name" label="Name" :readonly="readonly"></v-text-field>
        <v-text-field class="field" :value="user.phone" label="Phone" :readonly="readonly"></v-text-field>
      </v-flex>
    </v-layout>

    <h2 class="title" >Company</h2>
    <v-layout row justify-space-between>
      <v-flex>
        <v-text-field class="field" :value="user.company.name" label="Name" :readonly="readonly"></v-text-field>
        <v-text-field class="field" :value="user.company.bs" label="Bs" :readonly="readonly"></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field class="field" :value="user.company.catchPhrase" label="Catch Phrase" :readonly="readonly"></v-text-field>
      </v-flex>
    </v-layout>

    <h2 class="title" >Address</h2>
    <v-layout row>
      <v-flex>
        <v-text-field class="field" :value="user.address.street" label="Street" :readonly="readonly"></v-text-field>
        <v-text-field class="field" :value="user.address.city" label="City" :readonly="readonly"></v-text-field>
      </v-flex>
      <v-flex>
        <v-text-field class="field" :value="user.address.suite" label="Suite" :readonly="readonly"></v-text-field>
        <v-text-field class="field" :value="user.address.zipcode" label="Zipcode" :readonly="readonly"></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex sm6>
        <v-text-field class="field" :value="user.website" label="Website" :readonly="readonly"></v-text-field>
      </v-flex>
    </v-layout>

  </v-container>
</template>
<style scoped lang="scss">
  .title {
    margin-bottom:1em;
  }

  .field {
    margin:1em;
  }
</style>

<script>
export default {
  props: {
    user:{
      type: Object,
      default: () => {}
    },
    readonly:{
      type: Boolean,
      default: () => true
    },
  },
}
</script>
