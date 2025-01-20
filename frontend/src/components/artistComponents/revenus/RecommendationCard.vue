<template>
    <div 
      class="p-4 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
      :class="{
        'border-green-500/20 bg-green-500/5': recommendation.impact === 'high',
        'border-yellow-500/20 bg-yellow-500/5': recommendation.impact === 'medium',
        'border-blue-500/20 bg-blue-500/5': recommendation.impact === 'low'
      }"
    >
      <div class="flex items-start gap-4">
        <div 
          class="w-10 h-10 rounded-lg flex items-center justify-center"
          :class="{
            'bg-green-500/10 text-green-500': recommendation.impact === 'high',
            'bg-yellow-500/10 text-yellow-500': recommendation.impact === 'medium',
            'bg-blue-500/10 text-blue-500': recommendation.impact === 'low'
          }"
        >
          <i :class="['fas', recommendation.icon]"></i>
        </div>
        <div>
          <div class="flex items-center gap-2 mb-1">
            <h4 class="font-medium">{{ recommendation.title }}</h4>
            <span 
              class="text-xs px-2 py-0.5 rounded-full"
              :class="{
                'bg-green-500/10 text-green-500': recommendation.impact === 'high',
                'bg-yellow-500/10 text-yellow-500': recommendation.impact === 'medium',
                'bg-blue-500/10 text-blue-500': recommendation.impact === 'low'
              }"
            >
              {{ formatImpact(recommendation.impact) }}
            </span>
          </div>
          <p class="text-sm text-text-secondary">{{ recommendation.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    recommendation: {
      type: Object,
      required: true
    }
  })
  
  const formatImpact = (impact) => {
    const impacts = {
      high: 'Impact élevé',
      medium: 'Impact moyen',
      low: 'Impact faible'
    }
    return impacts[impact] || impact
  }
  </script>