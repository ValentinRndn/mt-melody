r<template>
    <div class="relative">
      <button 
        @click="isOpen = !isOpen"
        class="flex items-center gap-2 px-4 py-2 bg-card-bg border border-border rounded-lg hover:bg-hover transition-colors"
      >
        <i class="fas fa-calendar"></i>
        <span>{{ formatDateRange }}</span>
        <i class="fas fa-chevron-down ml-2"></i>
      </button>
  
      <div 
        v-if="isOpen"
        class="absolute top-full mt-2 left-0 z-10 bg-card-bg border border-border rounded-lg shadow-lg p-4 min-w-[300px]"
      >
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm text-text-secondary mb-2">Date de début</label>
            <input 
              type="date"
              v-model="localRange.start"
              class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            >
          </div>
          <div>
            <label class="block text-sm text-text-secondary mb-2">Date de fin</label>
            <input 
              type="date"
              v-model="localRange.end"
              class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            >
          </div>
        </div>
  
        <div class="flex justify-end gap-2">
          <button 
            @click="cancel"
            class="px-4 py-2 text-sm hover:bg-hover rounded-lg transition-colors"
          >
            Annuler
          </button>
          <button 
            @click="apply"
            class="px-4 py-2 text-sm bg-primary text-background rounded-lg hover:opacity-90 transition-opacity"
          >
            Appliquer
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    modelValue: {
      type: Object,
      required: true
    }
  })
  
  const emit = defineEmits(['update:modelValue', 'update'])
  
  const isOpen = ref(false)
  const localRange = ref({ ...props.modelValue })
  
  const formatDateRange = computed(() => {
    const start = new Date(localRange.value.start).toLocaleDateString()
    const end = new Date(localRange.value.end).toLocaleDateString()
    return `${start} - ${end}`
  })
  
  const apply = () => {
    emit('update:modelValue', { ...localRange.value })
    emit('update')
    isOpen.value = false
  }
  
  const cancel = () => {
    localRange.value = { ...props.modelValue }
    isOpen.value = false
  }
  </script>