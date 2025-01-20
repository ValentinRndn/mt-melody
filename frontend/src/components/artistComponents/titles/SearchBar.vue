<template>
    <div class="relative">
      <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"></i>
      <input
        type="text"
        placeholder="Rechercher un titre..."
        class="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg bg-card-bg border border-border focus:outline-none focus:border-primary transition-colors"
        v-model="query"
        @input="handleSearch"
      >
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const query = ref('')
  const emit = defineEmits(['search'])
  
  const handleSearch = () => {
    emit('search', query.value)
  }
  </script>