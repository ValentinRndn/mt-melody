<template>
    <div class="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-8">
      <div 
        v-for="stat in stats"
        :key="stat.id"
        class="bg-card-bg rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1"
      >
        <div class="flex justify-between items-center mb-4">
          <div class="w-12 h-12 rounded-xl bg-hover flex items-center justify-center text-primary">
            <i :class="stat.icon"></i>
          </div>
        </div>
        <div class="text-2xl font-bold mb-2">{{ stat.value }}</div>
        <div class="text-text-secondary text-sm">{{ stat.label }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    stats: {
      type: Array,
      required: true
    }
  })
  </script>