<template>
    <div class="flex gap-2 flex-wrap">
      <button
        v-for="filter in filters"
        :key="filter.id"
        @click="$emit('filter-change', filter.id)"
        :class="[
          'px-4 py-2 rounded-lg transition-all duration-200',
          'border border-border',
          activeFilter === filter.id 
            ? 'bg-primary text-background'
            : 'bg-card-bg hover:bg-hover text-text'
        ]"
      >
        {{ filter.label }}
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
  
  defineEmits(['filter-change'])
  </script>