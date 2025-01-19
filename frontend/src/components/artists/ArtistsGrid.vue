<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ArtistCard
        v-for="artist in artists"
        :key="artist.id"
        :artist="artist"
        @edit="$emit('edit', artist)"
        @showStats="$emit('showStats', artist)"
        @showOptions="$emit('showOptions', artist)"
      />
    </div>
  </template>
  
  <script setup>
  import ArtistCard from './ArtistCard.vue'
  
  defineProps({
    artists: {
      type: Array,
      required: true
    }
  })
  
  defineEmits(['edit', 'showStats', 'showOptions'])
  </script>