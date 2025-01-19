<template>
    <div class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div 
        class="w-full max-w-lg bg-card-bg p-8 rounded-2xl border border-border"
        @dragover.prevent
        @drop.prevent="handleDrop"
      >
        <div class="text-center">
          <i class="fas fa-cloud-upload-alt text-6xl text-primary mb-4"></i>
          <h3 class="text-xl font-semibold mb-2">Déposez vos fichiers audio ici</h3>
          <p class="text-text-secondary mb-4">ou</p>
          
          <input
            type="file"
            ref="fileInput"
            multiple
            accept="audio/*"
            class="hidden"
            @change="handleFileSelect"
          >
          
          <button 
            @click="$refs.fileInput.click()"
            class="bg-primary text-background px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-200"
          >
            Parcourir les fichiers
          </button>
        </div>
  
        <!-- Upload Progress -->
        <div v-if="uploads.length > 0" class="mt-8">
          <div 
            v-for="upload in uploads" 
            :key="upload.id"
            class="mb-4"
          >
            <div class="flex justify-between text-sm mb-1">
              <span>{{ upload.name }}</span>
              <span>{{ upload.progress }}%</span>
            </div>
            <div class="h-1 bg-hover rounded-full">
              <div 
                class="h-full bg-primary rounded-full transition-all duration-200"
                :style="{ width: `${upload.progress}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const uploads = ref([])
  const fileInput = ref(null)
  
  const handleFileSelect = (event) => {
    handleFiles(Array.from(event.target.files))
  }
  
  const handleDrop = (event) => {
    const files = Array.from(event.dataTransfer.files)
      .filter(file => file.type.startsWith('audio/'))
    handleFiles(files)
  }
  
  const handleFiles = (files) => {
    files.forEach(file => {
      const upload = {
        id: Date.now() + Math.random(),
        name: file.name,
        progress: 0
      }
      uploads.value.push(upload)
      
      // Simuler l'upload
      simulateUpload(upload)
    })
  }
  
  const simulateUpload = (upload) => {
    const interval = setInterval(() => {
      upload.progress += Math.random() * 10
      if (upload.progress >= 100) {
        upload.progress = 100
        clearInterval(interval)
        
        // Vérifier si tous les uploads sont terminés
        if (uploads.value.every(u => u.progress === 100)) {
          setTimeout(() => {
            uploads.value = []
            emit('upload', uploads.value)
            emit('close')
          }, 1000)
        }
      }
    }, 200)
  }
  
  const emit = defineEmits(['close', 'upload'])
  </script>