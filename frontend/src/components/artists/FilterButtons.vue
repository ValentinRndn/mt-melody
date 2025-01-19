<template>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="filter in filters"
        :key="filter.id"
        @click="$emit('filter', filter.id)"
        :class="[
          'px-4 py-2 rounded-lg transition-all duration-200',
          'border border-border',
          activeFilter === filter.id 
            ? 'bg-primary text-background'
            : 'bg-card-bg hover:bg-hover text-text'
        ]"
      >
        {{ filter.label }} ({{ filter.count }})
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    filters: {
      type: Array,
      required: true
    },
    activeFilter: {
      type: String,
      required: true
    }
  })
  
  defineEmits(['filter'])
  </script>