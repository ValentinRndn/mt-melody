<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border mb-8">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-semibold">Sorties en attente</h3>
        <span class="px-2 py-1 bg-primary bg-opacity-20 text-primary rounded-full text-sm">
          3 nouveaux
        </span>
      </div>
  
      <div class="space-y-4">
        <div 
          v-for="release in pendingReleases"
          :key="release.id"
          class="flex items-center gap-4 p-4 bg-background rounded-xl border border-border"
        >
          <div class="w-20 h-20 bg-card-bg rounded-xl flex-shrink-0"></div>
          <div class="flex-grow">
            <h4 class="font-semibold mb-1">{{ release.title }}</h4>
            <p class="text-text-secondary text-sm">
              {{ release.artist }} • {{ release.type }} • {{ release.tracks }} titres • 
              {{ release.genres.join(', ') }}
              <br>
              Soumis le {{ release.submitDate }}
            </p>
          </div>
          <div class="flex gap-2">
            <button 
              @click="$emit('approve', release.id)"
              class="px-4 py-2 bg-success text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Approuver
            </button>
            <button 
              @click="$emit('reject', release.id)"
              class="px-4 py-2 bg-danger text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Rejeter
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    pendingReleases: {
      type: Array,
      required: true
    }
  })
  
  defineEmits(['approve', 'reject'])
  </script>