<!-- components/settings/SecuritySection.vue -->
<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-6">Paramètres de Sécurité</h2>
        
        <!-- 2FA Section -->
        <div class="mb-8">
          <div class="flex justify-between items-start mb-2">
            <div>
              <h3 class="font-semibold mb-1">Authentification à deux facteurs</h3>
              <p class="text-text-secondary text-sm">
                Exiger l'authentification à deux facteurs pour tous les administrateurs
              </p>
            </div>
            <label class="relative inline-block w-[60px] h-[34px]">
              <input 
                type="checkbox"
                v-model="security.twoFactorEnabled"
                class="opacity-0 w-0 h-0"
              >
              <span class="absolute cursor-pointer inset-0 bg-text-secondary rounded-full transition-all duration-300 before:content-[''] before:absolute before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all before:duration-300" 
                :class="{ 'bg-primary': security.twoFactorEnabled, 'before:translate-x-[26px]': security.twoFactorEnabled }"
              ></span>
            </label>
          </div>
        </div>
  
        <!-- Password Policy -->
        <div class="mb-8">
          <h3 class="font-semibold mb-4">Politique de mot de passe</h3>
          <div class="space-y-3">
            <label v-for="(policy, key) in security.passwordPolicies" 
                   :key="key" 
                   class="flex items-center gap-2">
              <input 
                type="checkbox"
                v-model="policy.enabled"
                class="w-4 h-4 rounded border-border"
              >
              <span>{{ policy.label }}</span>
            </label>
          </div>
        </div>
  
        <!-- Session Settings -->
        <div class="mb-8">
          <h3 class="font-semibold mb-4">Sessions</h3>
          <div class="max-w-md">
            <label class="block text-sm mb-2">
              Durée maximum de session (heures)
            </label>
            <input 
              type="number"
              v-model="security.sessionDuration"
              class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            >
          </div>
        </div>
  
        <!-- Save Button -->
        <button 
          @click="saveSecuritySettings"
          class="px-6 py-3 bg-primary text-background rounded-lg hover:opacity-90 transition-all duration-300"
        >
          Sauvegarder les modifications
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SecuritySection',
    data() {
      return {
        security: {
          twoFactorEnabled: false,
          passwordPolicies: {
            minLength: { label: 'Minimum 8 caractères', enabled: true },
            uppercase: { label: 'Au moins une majuscule', enabled: true },
            number: { label: 'Au moins un chiffre', enabled: true },
            special: { label: 'Au moins un caractère spécial', enabled: true }
          },
          sessionDuration: 24
        }
      }
    },
    methods: {
      saveSecuritySettings() {
        // Implémenter la logique de sauvegarde
      }
    }
  }
  </script>