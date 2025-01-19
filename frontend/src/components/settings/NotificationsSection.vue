<!-- components/settings/NotificationsSection.vue -->
<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-6">Paramètres des Notifications</h2>
  
        <!-- Email Notifications -->
        <div class="mb-8">
          <h3 class="font-semibold mb-4">Notifications Email</h3>
          <div class="space-y-3">
            <label v-for="(setting, key) in notifications.email" 
                   :key="key"
                   class="flex items-center gap-2">
              <input 
                type="checkbox"
                v-model="setting.enabled"
                class="w-4 h-4 rounded border-border"
              >
              <span>{{ setting.label }}</span>
            </label>
          </div>
        </div>
  
        <!-- Push Notifications -->
        <div class="mb-8">
          <h3 class="font-semibold mb-4">Notifications Push</h3>
          <div class="space-y-3">
            <label v-for="(setting, key) in notifications.push" 
                   :key="key"
                   class="flex items-center gap-2">
              <input 
                type="checkbox"
                v-model="setting.enabled"
                class="w-4 h-4 rounded border-border"
              >
              <span>{{ setting.label }}</span>
            </label>
          </div>
        </div>
  
        <!-- Save Button -->
        <button 
          @click="saveNotificationSettings"
          class="px-6 py-3 bg-primary text-background rounded-lg hover:opacity-90 transition-all duration-300"
        >
          Sauvegarder les modifications
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotificationsSection',
    data() {
      return {
        notifications: {
          email: {
            newRegistrations: { label: 'Nouvelles inscriptions', enabled: true },
            newAlbums: { label: 'Nouveaux albums', enabled: true },
            activityReports: { label: "Rapports d'activité", enabled: true }
          },
          push: {
            securityAlerts: { label: 'Alertes de sécurité', enabled: true },
            systemUpdates: { label: 'Mises à jour système', enabled: false }
          }
        }
      }
    },
    methods: {
      saveNotificationSettings() {
        // Implémenter la logique de sauvegarde
      }
    }
  }
  </script>