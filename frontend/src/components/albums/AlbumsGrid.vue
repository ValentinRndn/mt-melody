<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div 
        v-for="album in albums"
        :key="album.id"
        class="bg-card-bg rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1"
      >
        <div class="relative h-48 bg-background">
          <span class="absolute top-3 left-3 px-3 py-1 bg-black bg-opacity-70 text-white rounded-full text-sm">
            {{ album.type }}
          </span>
          <span 
            class="absolute top-3 right-3 px-3 py-1 rounded-full text-sm"
            :class="getStatusClass(album.status)"
          >
            {{ album.status }}
          </span>
        </div>
  
        <div class="p-6">
          <div class="mb-4">
            <h2 class="text-lg font-semibold mb-2">{{ album.title }}</h2>
            <p class="text-primary mb-2">{{ album.artist }}</p>
            <p class="text-text-secondary text-sm">
              {{ album.genres.join(', ') }} • {{ album.tracks }} titres • {{ album.duration }}
            </p>
          </div>
  
          <div class="grid grid-cols-3 gap-4 py-4 border-y border-border">
            <div class="text-center">
              <div class="text-primary font-semibold">{{ album.stats.listens }}</div>
              <div class="text-text-secondary text-sm">Écoutes</div>
            </div>
            <div class="text-center">
              <div class="text-primary font-semibold">{{ album.stats.rating }}</div>
              <div class="text-text-secondary text-sm">Note</div>
            </div>
            <div class="text-center">
              <div class="text-primary font-semibold">{{ album.stats.revenue }}</div>
              <div class="text-text-secondary text-sm">Revenus</div>
            </div>
          </div>
  
          <div class="flex gap-2 mt-4">
            <button 
              @click="$emit('edit', album)"
              class="flex-1 px-4 py-2 bg-hover rounded-lg hover:bg-primary hover:text-background transition-all"
            >
              <i class="fas fa-edit mr-2"></i> Éditer
            </button>
            <button 
              @click="$emit('showStats', album)"
              class="flex-1 px-4 py-2 bg-hover rounded-lg hover:bg-primary hover:text-background transition-all"
            >
              <i class="fas fa-chart-line mr-2"></i> Stats
            </button>
            <button 
              @click="$emit('moderate', album)"
              class="px-4 py-2 bg-hover rounded-lg hover:bg-warning hover:text-background transition-all"
            >
              <i class="fas fa-shield-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const getStatusClass = (status) => {
    const classes = {
      'Tendance': 'bg-primary bg-opacity-20 text-primary',
      'Nouveau': 'bg-warning bg-opacity-20 text-warning',
      'Signalé': 'bg-danger bg-opacity-20 text-danger'
    }
    return classes[status] || ''
  }
  
  defineProps({
    albums: {
      type: Array,
      required: true
    }
  })
  
  defineEmits(['edit', 'showStats', 'moderate'])
  </script>