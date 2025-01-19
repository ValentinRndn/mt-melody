<template>
    <div class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-col-1 gap-6 mb-8">
      <div 
        v-for="stat in stats"
        :key="stat.id"
        class="bg-card-bg rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1"
      >
        <div class="w-12 h-12 rounded-xl bg-hover flex items-center justify-center text-primary mb-4">
          <i :class="['fas', stat.icon, 'text-xl']"></i>
        </div>
        <div class="text-2xl font-bold text-primary mb-2">
          {{ stat.value }}
        </div>
        <div class="text-text-secondary text-sm">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    stats: {
      type: Array,
      default: () => [
        { 
          id: 1, 
          icon: 'fa-music', 
          value: '350', 
          label: 'Total des Sorties' 
        },
        { 
          id: 2, 
          icon: 'fa-play', 
          value: '1.2M', 
          label: 'Écoutes ce mois' 
        },
        { 
          id: 3, 
          icon: 'fa-star', 
          value: '4.8', 
          label: 'Note moyenne' 
        },
        { 
          id: 4, 
          icon: 'fa-euro-sign', 
          value: '25.4K', 
          label: 'Revenus ce mois' 
        }
      ]
    }
  })
  </script>