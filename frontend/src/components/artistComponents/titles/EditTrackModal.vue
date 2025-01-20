<template>
    <div class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="w-full max-w-lg bg-card-bg p-8 rounded-2xl border border-border">
        <h3 class="text-xl font-semibold mb-6">Modifier le titre</h3>
        
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium mb-2">Titre</label>
            <input 
              v-model="form.title"
              type="text"
              class="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
            >
          </div>
  
          <div>
            <label class="block text-sm font-medium mb-2">Genre</label>
            <select 
              v-model="form.genre"
              class="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
            >
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="hip-hop">Hip-Hop</option>
              <option value="electronic">Electronic</option>
              <option value="jazz">Jazz</option>
              <option value="classical">Classical</option>
            </select>
          </div>
  
          <div>
            <label class="block text-sm font-medium mb-2">Statut</label>
            <select 
              v-model="form.status"
              class="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:border-primary"
            >
              <option value="draft">Brouillon</option>
              <option value="published">Publié</option>
              <option value="archived">Archivé</option>
            </select>
          </div>
  
          <div class="flex justify-end gap-4">
            <button
              type="button"
              @click="$emit('close')"
              class="px-6 py-2 rounded-lg border border-border hover:bg-hover transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              class="px-6 py-2 rounded-lg bg-primary text-background hover:opacity-90 transition-opacity"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    track: {
      type: Object,
      required: true
    }
  })
  
  const emit = defineEmits(['close', 'save'])
  
  const form = ref({
    title: props.track.title,
    genre: props.track.genre,
    status: props.track.status
  })
  
  const handleSubmit = () => {
    emit('save', {
      ...props.track,
      ...form.value
    })
  }
  </script>