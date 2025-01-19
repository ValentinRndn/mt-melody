<template>
    <div class="relative w-full max-w-md">
      <div class="flex items-center bg-card-bg rounded-lg px-4 py-2 border border-border">
        <i class="fas fa-search text-text-secondary"></i>
        <input 
          type="text"
          v-model="searchQuery"
          @input="$emit('search', searchQuery)"
          placeholder="Rechercher un artiste..."
          class="w-full bg-transparent border-none focus:outline-none text-text ml-2 p-2"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const searchQuery = ref('')
  defineEmits(['search'])
  </script>