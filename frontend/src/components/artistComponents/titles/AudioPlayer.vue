<template>
    <div class="fixed bottom-0 left-0 right-0 bg-card-bg border-t border-border p-4">
      <div class="max-w-screen-xl mx-auto flex items-center gap-4">
        <div class="flex items-center gap-3 flex-1">
          <div class="w-12 h-12 rounded-lg overflow-hidden bg-hover">
            <img 
              :src="track.coverUrl" 
              :alt="track.title"
              class="w-full h-full object-cover"
            >
          </div>
          <div>
            <div class="font-medium">{{ track.title }}</div>
            <div class="text-sm text-text-secondary">{{ track.genre }}</div>
          </div>
        </div>
  
        <div class="flex-1">
          <div class="flex items-center justify-center gap-4">
            <button class="p-2 hover:text-primary transition-colors">
              <i class="fas fa-step-backward"></i>
            </button>
            <button 
              @click="isPlaying = !isPlaying"
              class="w-10 h-10 rounded-full bg-primary text-background flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <i :class="['fas', isPlaying ? 'fa-pause' : 'fa-play']"></i>
            </button>
            <button class="p-2 hover:text-primary transition-colors">
              <i class="fas fa-step-forward"></i>
            </button>
          </div>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-sm">{{ formatTime(currentTime) }}</span>
            <div class="flex-1 h-1 bg-hover rounded-full">
              <div 
                class="h-full bg-primary rounded-full"
                :style="{ width: `${(currentTime / duration) * 100}%` }"
              ></div>
            </div>
            <span class="text-sm">{{ formatTime(duration) }}</span>
          </div>
        </div>
  
        <div class="flex items-center gap-4">
          <button class="p-2 hover:text-primary transition-colors">
            <i class="fas fa-volume-up"></i>
          </button>
          <button 
            @click="$emit('close')"
            class="p-2 hover:text-primary transition-colors"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  defineProps({
    track: {
      type: Object,
      required: true
    }
  })
  
  defineEmits(['close'])
  
  const isPlaying = ref(false)
  const currentTime = ref(0)
  const duration = ref(180) // 3 minutes en secondes
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }
  </script>