<!-- views/AdminDashboard/AdminSettings.vue -->
<template>
    <div class="flex min-h-screen bg-background text-text transition-all duration-300">
      <Navbar />
      
      <main class="flex-1 ml-[280px] p-8">
        <Header />
        
        <!-- Navigation des paramètres -->
        <nav class="flex gap-4 mb-8 border-b border-border pb-4 overflow-x-auto">
          <button 
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap',
              activeTab === tab.id ? 'bg-hover text-primary' : 'text-text-secondary hover:bg-hover hover:text-primary'
            ]"
          >
            <i :class="['fas', tab.icon]"></i>
            {{ tab.label }}
          </button>
        </nav>
  
        <!-- Sections des paramètres -->
        <UsersSection v-if="activeTab === 'users'" />
        <SecuritySection v-if="activeTab === 'security'" />
        <NotificationsSection v-if="activeTab === 'notifications'" />
        <GeneralSection v-if="activeTab === 'general'" />
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from '../../components/Navbar.vue'
  import Header from '../../components/Header.vue'
  import UsersSection from '../../components/settings/UsersSection.vue'
  import SecuritySection from '../../components/settings/SecuritySection.vue'
  import NotificationsSection from '../../components/settings/NotificationsSection.vue'
  import GeneralSection from '../../components/settings/GeneralSection.vue'
  
  export default {
    name: 'AdminSettings',
    components: {
      Navbar,
      Header,
      UsersSection,
      SecuritySection,
      NotificationsSection,
      GeneralSection
    },
    data() {
      return {
        activeTab: 'users',
        tabs: [
          { id: 'users', label: 'Utilisateurs', icon: 'fa-users' },
          { id: 'security', label: 'Sécurité', icon: 'fa-shield-alt' },
          { id: 'notifications', label: 'Notifications', icon: 'fa-bell' },
          { id: 'general', label: 'Général', icon: 'fa-cog' }
        ]
      }
    }
  }
  </script>