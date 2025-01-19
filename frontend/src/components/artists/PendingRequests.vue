<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border mb-8">
      <h3 class="text-lg font-semibold mb-4">
        Demandes en attente ({{ requests.length }})
      </h3>
      
      <div class="space-y-4">
        <div 
          v-for="request in requests"
          :key="request.id"
          class="flex items-center gap-4 p-4 bg-background rounded-xl border border-border"
        >
          <div 
            class="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary"
            :style="{ backgroundImage: `url(${request.avatarImage})` }"
          ></div>
          
          <div class="flex-grow">
            <h4 class="font-semibold">{{ request.name }}</h4>
            <p class="text-text-secondary text-sm">
              Genre: {{ request.genres.join(', ') }} • Rejoint le: {{ request.joinDate }}
            </p>
          </div>
          
          <div class="flex gap-2">
            <button 
              @click="$emit('approve', request.id)"
              class="px-4 py-2 bg-primary text-background rounded-lg hover:opacity-90 transition-opacity"
            >
              Approuver
            </button>
            <button 
              @click="$emit('reject', request.id)"
              class="px-4 py-2 bg-red-500 text-white rounded-lg hover:opacity-90 transition-opacity"
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
    requests: {
      type: Array,
      required: true
    }
  })
  
  defineEmits(['approve', 'reject'])
  </script>