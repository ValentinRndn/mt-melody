<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border mb-8">
      <!-- Search Bar -->
      <div class="flex items-center bg-background rounded-lg px-4 py-2 mb-4 border border-border">
        <i class="fas fa-search text-text-secondary"></i>
        <input 
          type="text"
          v-model="searchQuery"
          @input="$emit('search', searchQuery)"
          placeholder="Rechercher un album, un single ou un artiste..."
          class="w-full bg-transparent border-none focus:outline-none text-text ml-2 p-2"
        >
      </div>
  
      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-3">
        <button 
          v-for="filter in filters"
          :key="filter.id"
          @click="setActiveFilter(filter.id)"
          :class="[
            'px-4 py-2 rounded-lg transition-all duration-200',
            'border border-border',
            activeFilter === filter.id 
              ? 'bg-primary text-background' 
              : 'bg-background hover:bg-hover'
          ]"
        >
          {{ filter.label }} ({{ filter.count }})
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const searchQuery = ref('')
  const activeFilter = ref('all')
  
  const filters = [
    { id: 'all', label: 'Tous', count: 350 },
    { id: 'album', label: 'Albums', count: 150 },
    { id: 'single', label: 'Singles', count: 200 },
    { id: 'pending', label: 'En attente', count: 25 },
    { id: 'reported', label: 'Signalés', count: 5 }
  ]
  
  const setActiveFilter = (filterId) => {
    activeFilter.value = filterId
    emit('filter', filterId)
  }
  
  const emit = defineEmits(['search', 'filter'])
  </script>