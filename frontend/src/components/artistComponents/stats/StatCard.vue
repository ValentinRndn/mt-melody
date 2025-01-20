<template>
    <div class="bg-card-bg rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300">
      <div class="flex justify-between items-start mb-4">
        <div class="w-12 h-12 rounded-xl bg-hover flex items-center justify-center text-primary">
          <i :class="['fas', stat.icon]"></i>
        </div>
        <div 
          class="flex items-center gap-1 text-sm"
          :class="stat.trend > 0 ? 'text-green-500' : 'text-red-500'"
        >
          <i :class="['fas', stat.trend > 0 ? 'fa-arrow-up' : 'fa-arrow-down']"></i>
          <span>{{ Math.abs(stat.trend) }}%</span>
        </div>
      </div>
      
      <div class="text-2xl font-bold mb-1">{{ stat.value }}</div>
      <div class="text-text-secondary">{{ stat.label }}</div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    stat: {
      type: Object,
      required: true
    }
  })
  </script>