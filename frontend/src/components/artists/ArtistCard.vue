<template>
    <div class="bg-card-bg rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1">
      <div 
        class="h-40 bg-cover bg-center relative"
        :style="{ backgroundImage: `url(${artist.coverImage})` }"
      >
        <span 
          :class="[
            'absolute top-3 right-3 px-3 py-1 rounded-full text-sm backdrop-blur-md',
            statusClasses[artist.status]
          ]"
        >
          {{ statusLabels[artist.status] }}
        </span>
      </div>
  
      <div class="p-6">
        <div class="flex items-center gap-4 mb-4">
          <div 
            class="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary"
            :style="{ backgroundImage: `url(${artist.avatarImage})` }"
          ></div>
          <div>
            <h3 class="text-lg font-semibold">{{ artist.name }}</h3>
            <p class="text-text-secondary">{{ artist.genres.join(', ') }}</p>
          </div>
        </div>
  
        <div class="grid grid-cols-3 gap-4 py-4 border-y border-border">
          <div class="text-center">
            <div class="text-primary font-semibold">{{ artist.stats.listens }}</div>
            <div class="text-text-secondary text-sm">Écoutes</div>
          </div>
          <div class="text-center">
            <div class="text-primary font-semibold">{{ artist.stats.albums }}</div>
            <div class="text-text-secondary text-sm">Albums</div>
          </div>
          <div class="text-center">
            <div class="text-primary font-semibold">{{ artist.stats.rating }}</div>
            <div class="text-text-secondary text-sm">Note</div>
          </div>
        </div>
  
        <div class="flex gap-2 mt-4">
          <button 
            @click="$emit('edit', artist)"
            class="flex-1 px-4 py-2 bg-hover rounded-lg hover:bg-primary hover:text-background transition-all flex items-center justify-center gap-2"
          >
            <i class="fas fa-edit"></i> Éditer
          </button>
          <button 
            @click="$emit('showStats', artist)"
            class="flex-1 px-4 py-2 bg-hover rounded-lg hover:bg-primary hover:text-background transition-all flex items-center justify-center gap-2"
          >
            <i class="fas fa-chart-line"></i> Stats
          </button>
          <button 
            @click="$emit('showOptions', artist)"
            class="px-4 py-2 bg-hover rounded-lg hover:bg-primary hover:text-background transition-all"
          >
            <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    artist: {
      type: Object,
      required: true
    }
  })
  
  const statusClasses = {
    active: 'bg-green-500/20 text-green-500',
    pending: 'bg-yellow-500/20 text-yellow-500',
    inactive: 'bg-red-500/20 text-red-500'
  }
  
  const statusLabels = {
    active: 'Actif',
    pending: 'En attente',
    inactive: 'Inactif'
  }
  
  defineEmits(['edit', 'showStats', 'showOptions'])
  </script>