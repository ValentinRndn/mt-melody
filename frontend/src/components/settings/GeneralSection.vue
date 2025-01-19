<!-- components/settings/GeneralSection.vue -->
<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-6">Paramètres Généraux</h2>
  
        <form @submit.prevent="saveGeneralSettings" class="max-w-2xl space-y-6">
          <!-- Site Name -->
          <div>
            <label class="block text-sm mb-2">Nom du site</label>
            <input 
              type="text"
              v-model="general.siteName"
              class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            >
          </div>
  
          <!-- Description -->
          <div>
            <label class="block text-sm mb-2">Description</label>
            <textarea 
              v-model="general.description"
              rows="3"
              class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            ></textarea>
          </div>
  
          <!-- Contact Email -->
          <div>
            <label class="block text-sm mb-2">Email de contact</label>
            <input 
              type="email"
              v-model="general.contactEmail"
              class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            >
          </div>
  
          <!-- Default Language -->
          <div>
            <label class="block text-sm mb-2">Langue par défaut</label>
            <select 
              v-model="general.defaultLanguage"
              class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            >
              <option v-for="lang in languages" 
                      :key="lang.code" 
                      :value="lang.code">
                {{ lang.name }}
              </option>
            </select>
          </div>
  
          <!-- Save Button -->
          <button 
            type="submit"
            class="px-6 py-3 bg-primary text-background rounded-lg hover:opacity-90 transition-all duration-300"
          >
            Sauvegarder les modifications
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GeneralSection',
    data() {
      return {
        general: {
          siteName: 'MT Melody',
          description: 'Plateforme de streaming musical',
          contactEmail: 'contact@mtmelody.com',
          defaultLanguage: 'fr'
        },
        languages: [
          { code: 'fr', name: 'Français' },
          { code: 'en', name: 'English' },
          { code: 'es', name: 'Español' }
        ]
      }
    },
    methods: {
      saveGeneralSettings() {
        // Implémenter la logique de sauvegarde
      }
    }
  }
  </script>