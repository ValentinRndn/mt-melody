<template>
    <div class="bg-card-bg rounded-2xl border border-border overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-border">
              <th class="p-4 text-left">#</th>
              <th class="p-4 text-left">Titre</th>
              <th class="p-4 text-left">Genre</th>
              <th class="p-4 text-left">Durée</th>
              <th class="p-4 text-left">Écoutes</th>
              <th class="p-4 text-left">Revenus</th>
              <th class="p-4 text-left">Statut</th>
              <th class="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(track, index) in tracks" 
              :key="track.id"
              class="border-b border-border last:border-0 hover:bg-hover transition-colors"
            >
              <td class="p-4">{{ index + 1 }}</td>
              <td class="p-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg overflow-hidden bg-hover">
                    <img 
                      :src="track.coverUrl" 
                      :alt="track.title"
                      class="w-full h-full object-cover"
                    >
                  </div>
                  <div>
                    <div class="font-medium">{{ track.title }}</div>
                    <div class="text-sm text-text-secondary">
                      {{ new Date(track.uploadDate).toLocaleDateString() }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="p-4">{{ track.genre }}</td>
              <td class="p-4">{{ track.duration }}</td>
              <td class="p-4">{{ formatNumber(track.listens) }}</td>
              <td class="p-4">{{ track.revenue }}</td>
              <td class="p-4">
                <span 
                  :class="[
                    'px-2 py-1 rounded-full text-sm',
                    getStatusClass(track.status)
                  ]"
                >
                  {{ getStatusLabel(track.status) }}
                </span>
              </td>
              <td class="p-4">
                <div class="flex gap-2">
                  <button 
                    @click="$emit('play', track)"
                    class="p-2 hover:text-primary transition-colors"
                    title="Lire"
                  >
                    <i class="fas fa-play"></i>
                  </button>
                  <button 
                    @click="$emit('edit', track)"
                    class="p-2 hover:text-primary transition-colors"
                    title="Modifier"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button 
                    @click="$emit('delete', track)"
                    class="p-2 hover:text-red-500 transition-colors"
                    title="Supprimer"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    tracks: {
      type: Array,
      required: true
    }
  })
  
  defineEmits(['play', 'edit', 'delete'])
  
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }
  
  const getStatusClass = (status) => {
    const classes = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-gray-100 text-gray-800',
      archived: 'bg-red-100 text-red-800'
    }
    return classes[status] || ''
  }
  
  const getStatusLabel = (status) => {
    const labels = {
      published: 'Publié',
      draft: 'Brouillon',
      archived: 'Archivé'
    }
    return labels[status] || status
  }
  </script>