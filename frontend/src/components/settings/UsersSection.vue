<!-- components/settings/UsersSection.vue -->
<template>
    <div class="bg-card-bg rounded-2xl p-6 border border-border">
      <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 class="text-xl font-semibold">Gestion des Utilisateurs</h2>
        <button 
          @click="showCreateUserModal"
          class="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background transition-all duration-300 hover:opacity-90"
        >
          <i class="fas fa-plus"></i> Créer un utilisateur
        </button>
      </div>
  
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="text-text-secondary border-b border-border">
              <th 
                v-for="header in tableHeaders"
                :key="header"
                class="py-4 px-4 text-left font-normal"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="user in users"
              :key="user.id"
              class="border-b border-border"
            >
              <td class="py-4 px-4">{{ user.name }}</td>
              <td class="py-4 px-4">{{ user.email }}</td>
              <td class="py-4 px-4">
                <span :class="getRoleClass(user.role)">
                  {{ user.role }}
                </span>
              </td>
              <td class="py-4 px-4">
                <label class="relative inline-block w-[60px] h-[34px]">
                  <input 
                    type="checkbox"
                    v-model="user.active"
                    class="opacity-0 w-0 h-0"
                  >
                  <span class="absolute cursor-pointer inset-0 bg-text-secondary rounded-full transition-all duration-300 before:content-[''] before:absolute before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-white before:rounded-full before:transition-all before:duration-300" 
                    :class="{ 'bg-primary': user.active, 'before:translate-x-[26px]': user.active }"
                  ></span>
                </label>
              </td>
              <td class="py-4 px-4">
                <div class="flex gap-2">
                  <button 
                    @click="editUser(user)"
                    class="p-2 hover:bg-hover rounded-lg transition-colors duration-200"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button 
                    @click="deleteUser(user)"
                    class="p-2 hover:bg-hover rounded-lg transition-colors duration-200"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UsersSection',
    data() {
      return {
        tableHeaders: ['Utilisateur', 'Email', 'Rôle', 'Statut', 'Actions'],
        users: [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            role: 'Admin',
            active: true
          },
          {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'Artiste',
            active: true
          },
          {
            id: 3,
            name: 'Mike Johnson',
            email: 'mike@example.com',
            role: 'Utilisateur',
            active: true
          }
        ]
      }
    },
    methods: {
      getRoleClass(role) {
        const baseClasses = 'px-3 py-1 rounded-full text-sm'
        const roleClasses = {
          'Admin': 'bg-danger/10 text-danger',
          'Artiste': 'bg-primary/10 text-primary',
          'Utilisateur': 'bg-warning/10 text-warning'
        }
        return `${baseClasses} ${roleClasses[role]}`
      },
      showCreateUserModal() {
        // Implémenter la logique
      },
      editUser(user) {
        // Implémenter la logique
      },
      deleteUser(user) {
        // Implémenter la logique
      }
    }
  }
  </script>