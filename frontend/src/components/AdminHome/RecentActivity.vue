<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <h3 class="text-lg font-semibold mb-4">Activités Récentes</h3>
      
      <div class="space-y-4">
        <div 
          v-for="activity in activities"
          :key="activity.id"
          class="flex items-center gap-4 py-4 border-b border-border last:border-0"
        >
          <div class="w-10 h-10 rounded-xl bg-hover flex items-center justify-center text-primary">
            <i :class="activity.icon"></i>
          </div>
          <div>
            <h4 class="font-medium">{{ activity.title }}</h4>
            <small class="text-text-secondary">{{ activity.description }}</small>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    activities: {
      type: Array,
      required: true
    }
  })
  </script>