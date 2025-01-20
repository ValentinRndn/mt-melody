<template>
    <div class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div 
        class="w-full max-w-2xl bg-card-bg rounded-2xl border border-border p-8"
        @dragover.prevent="isDragging = true"
        @dragleave.prevent="isDragging = false"
        @drop.prevent="handleDrop"
        :class="{ 'border-primary border-2': isDragging }"
      >
        <!-- Étape 1: Sélection des fichiers -->
        <div v-if="currentStep === 1">
          <div class="text-center">
            <i class="fas fa-cloud-upload-alt text-6xl text-primary mb-4"></i>
            <h3 class="text-xl font-semibold mb-2">Déposez vos fichiers audio ici</h3>
            <p class="text-text-secondary mb-6">Formats acceptés: MP3, WAV (Max 50MB)</p>
            
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
              <i class="fas fa-folder-open mr-2"></i>
              Parcourir les fichiers
            </button>
          </div>
        </div>
  
        <!-- Étape 2: Informations des titres -->
        <div v-if="currentStep === 2" class="space-y-6">
          <h3 class="text-xl font-semibold mb-4">Informations des titres</h3>
          
          <div 
            v-for="(track, index) in selectedTracks" 
            :key="index"
            class="bg-background rounded-lg p-4 space-y-4"
          >
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-hover rounded-lg flex items-center justify-center">
                <i class="fas fa-music text-2xl text-primary"></i>
              </div>
              <div class="flex-1">
                <input
                  v-model="track.title"
                  type="text"
                  :placeholder="track.file.name"
                  class="w-full px-4 py-2 rounded-lg bg-card-bg border border-border focus:outline-none focus:border-primary mb-2"
                >
                <div class="flex gap-4">
                  <select 
                    v-model="track.genre"
                    class="px-4 py-2 rounded-lg bg-card-bg border border-border focus:outline-none focus:border-primary"
                  >
                    <option value="">Genre</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                    <option value="hip-hop">Hip-Hop</option>
                    <option value="electronic">Electronic</option>
                    <option value="jazz">Jazz</option>
                    <option value="classical">Classical</option>
                  </select>
                  <select 
                    v-model="track.status"
                    class="px-4 py-2 rounded-lg bg-card-bg border border-border focus:outline-none focus:border-primary"
                  >
                    <option value="draft">Brouillon</option>
                    <option value="published">Publier</option>
                  </select>
                </div>
              </div>
              <button 
                @click="removeTrack(index)"
                class="p-2 hover:text-red-500 transition-colors"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Étape 3: Progression de l'upload -->
        <div v-if="currentStep === 3">
          <h3 class="text-xl font-semibold mb-6">Upload en cours...</h3>
          
          <div 
            v-for="track in selectedTracks" 
            :key="track.id"
            class="mb-6"
          >
            <div class="flex justify-between items-center mb-2">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-hover rounded-lg flex items-center justify-center">
                  <i class="fas fa-music text-primary"></i>
                </div>
                <div>
                  <div class="font-medium">{{ track.title || track.file.name }}</div>
                  <div class="text-sm text-text-secondary">{{ formatFileSize(track.file.size) }}</div>
                </div>
              </div>
              <div class="text-sm" :class="track.status === 'error' ? 'text-red-500' : 'text-primary'">
                {{ track.progress }}%
              </div>
            </div>
            
            <div class="h-2 bg-hover rounded-full overflow-hidden">
              <div 
                class="h-full bg-primary transition-all duration-200"
                :class="{ 'bg-red-500': track.status === 'error' }"
                :style="{ width: `${track.progress}%` }"
              ></div>
            </div>
          </div>
  
          <div class="text-center mt-8" v-if="isUploadComplete">
            <i class="fas fa-check-circle text-4xl text-primary mb-4"></i>
            <p class="text-lg font-medium">Upload terminé avec succès !</p>
          </div>
        </div>
  
        <!-- Actions -->
        <div class="flex justify-end gap-4 mt-8">
          <button
            v-if="currentStep !== 3 || isUploadComplete"
            @click="$emit('close')"
            class="px-6 py-2 rounded-lg border border-border hover:bg-hover transition-colors"
          >
            {{ isUploadComplete ? 'Fermer' : 'Annuler' }}
          </button>
          <button
            v-if="currentStep === 2"
            @click="startUpload"
            :disabled="!isFormValid"
            class="px-6 py-2 rounded-lg bg-primary text-background hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Démarrer l'upload
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const currentStep = ref(1)
  const isDragging = ref(false)
  const selectedTracks = ref([])
  const isUploadComplete = ref(false)
  
  const emit = defineEmits(['close', 'upload-complete'])
  
  const isFormValid = computed(() => {
    return selectedTracks.value.every(track => 
      track.title && track.genre && track.status
    )
  })
  
  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files)
    addFiles(files)
  }
  
  const handleDrop = (event) => {
    isDragging.value = false
    const files = Array.from(event.dataTransfer.files).filter(file => 
      file.type.startsWith('audio/')
    )
    addFiles(files)
  }
  
  const addFiles = (files) => {
    const newTracks = files.map(file => ({
      id: Date.now() + Math.random(),
      file,
      title: '',
      genre: '',
      status: 'draft',
      progress: 0
    }))
    
    selectedTracks.value = [...selectedTracks.value, ...newTracks]
    currentStep.value = 2
  }
  
  const removeTrack = (index) => {
    selectedTracks.value.splice(index, 1)
    if (selectedTracks.value.length === 0) {
      currentStep.value = 1
    }
  }
  
  const startUpload = () => {
    currentStep.value = 3
    
    // Simuler l'upload pour chaque fichier
    selectedTracks.value.forEach(track => {
      simulateUpload(track)
    })
  }
  
  const simulateUpload = (track) => {
    const interval = setInterval(() => {
      if (track.progress >= 100) {
        clearInterval(interval)
        checkIfComplete()
        return
      }
      
      track.progress += Math.random() * 10
      if (track.progress > 100) track.progress = 100
    }, 500)
  }
  
  const checkIfComplete = () => {
    const allComplete = selectedTracks.value.every(track => track.progress === 100)
    if (allComplete) {
      isUploadComplete.value = true
      emit('upload-complete', selectedTracks.value)
    }
  }
  
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  </script>
  
  <style scoped>
  .upload-enter-active,
  .upload-leave-active {
    transition: all 0.3s ease;
  }
  
  .upload-enter-from,
  .upload-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  </style>