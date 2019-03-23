<template>
  <v-container>
    <v-layout row wrap justify-space-between >
      <v-flex xs12 sm6 d-flex>
         <v-select
           v-model="album"
           :items="albums"
           item-text="title"
           item-value="id"
           @change="$emit('openAlbum', album.id)"
           persistent-hint
           return-object
           box
           label="Select an album"
         ></v-select>
       </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-carousel v-if="visible" :cycle="false" hide-delimiters>
      <v-carousel-item
        v-for="photo in photos"
        :key="photo.id"
        :src="photo.url"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  props: {
    albums:{
      type: Array,
      default: () => []
    },
    photos:{
      type: Array,
      default: () => []
    },
    visible:{
      type: Boolean,
      default: () => false
    }
  },
  data(){
    return {
      album: { title:"", id: ""}
    }
  },
}
</script>
