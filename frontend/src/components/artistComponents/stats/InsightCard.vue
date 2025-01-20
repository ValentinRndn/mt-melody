<template>
    <div 
      class="p-4 rounded-xl border border-border bg-background hover:shadow-lg transition-all duration-300"
      :class="{ 
        'border-green-500/20': insight.trend === 'positive',
        'border-red-500/20': insight.trend === 'negative'
      }"
    >
      <div class="flex items-start gap-4">
        <div 
          class="w-10 h-10 rounded-lg flex items-center justify-center"
          :class="{ 
            'bg-green-500/10 text-green-500': insight.trend === 'positive',
            'bg-red-500/10 text-red-500': insight.trend === 'negative',
            'bg-hover text-primary': insight.trend === 'neutral'
          }"
        >
          <i :class="['fas', insight.icon]"></i>
        </div>
        <div>
          <h4 class="font-medium mb-1">{{ insight.title }}</h4>
          <p class="text-sm text-text-secondary">{{ insight.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    insight: {
      type: Object,
      required: true
    }
  })
  </script>