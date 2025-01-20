<template>
    <div>
      <h3 class="text-lg font-semibold mb-6">Top Titres</h3>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-border">
              <th class="text-left py-3 px-4">#</th>
              <th class="text-left py-3 px-4">Titre</th>
              <th class="text-left py-3 px-4">Écoutes</th>
              <th class="text-left py-3 px-4">Durée</th>
              <th class="text-left py-3 px-4">Tendance</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(track, index) in tracks"
              :key="track.id"
              class="border-b border-border last:border-0 hover:bg-hover transition-colors"
            >
              <td class="py-3 px-4">{{ index + 1 }}</td>
              <td class="py-3 px-4">{{ track.title }}</td>
              <td class="py-3 px-4">{{ formatNumber(track.plays) }}</td>
              <td class="py-3 px-4">{{ track.duration }}</td>
              <td class="py-3 px-4">
                <div 
                  class="flex items-center gap-1"
                  :class="track.trend > 0 ? 'text-green-500' : 'text-red-500'"
                >
                  <i :class="['fas', track.trend > 0 ? 'fa-arrow-up' : 'fa-arrow-down']"></i>
                  <span>{{ Math.abs(track.trend) }}%</span>
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
  
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }
  </script>