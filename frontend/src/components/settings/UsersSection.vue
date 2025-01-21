<!-- components/settings/UsersSection.vue -->
<template>
  <div class="bg-card-bg rounded-2xl p-6 border border-border">
    <!-- En-tête -->
    <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
      <h2 class="text-xl font-semibold">Gestion des Utilisateurs</h2>
      <button 
        @click="showCreateUserModal = true"
        class="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background transition-all duration-300 hover:opacity-90"
      >
        <i class="fas fa-plus"></i> Créer un utilisateur
      </button>
    </div>

    <!-- Table des utilisateurs -->
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
            :key="user._id"
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
                  :checked="user.active"
                  @change="toggleUserStatus(user)"
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
                  @click="confirmDelete(user)"
                  class="p-2 hover:bg-hover rounded-lg transition-colors duration-200 text-danger"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal de création/édition d'utilisateur -->
    <div v-if="showCreateUserModal || editingUser" 
         class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-card-bg rounded-2xl p-8 w-full max-w-md">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-semibold">
            {{ editingUser ? 'Modifier' : 'Créer' }} un utilisateur
          </h3>
          <button @click="closeModal" class="text-text-secondary hover:text-primary">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <form @submit.prevent="saveUser" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">Nom</label>
            <input 
              v-model="userForm.name"
              type="text"
              required
              class="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input 
              v-model="userForm.email"
              type="email"
              required
              class="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label class="block text-sm font-medium mb-2">Rôle</label>
            <select 
              v-model="userForm.role"
              required
              class="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
            >
              <option value="admin">Admin</option>
              <option value="artist">Artiste</option>
            </select>
          </div>

          <div v-if="!editingUser">
            <label class="block text-sm font-medium mb-2">Mot de passe</label>
            <input 
              v-model="userForm.password"
              type="password"
              required
              class="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none"
            />
          </div>

          <button 
            type="submit"
            class="w-full bg-primary text-background py-2 rounded-lg hover:opacity-90 transition-opacity"
            :disabled="loading"
          >
            {{ loading ? 'Chargement...' : (editingUser ? 'Modifier' : 'Créer') }}
          </button>
        </form>
      </div>
    </div>

    <!-- Modal de confirmation de suppression -->
    <div v-if="showDeleteModal" 
         class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div class="bg-card-bg rounded-2xl p-8 w-full max-w-md">
        <h3 class="text-xl font-semibold mb-4">Confirmer la suppression</h3>
        <p>Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
        <div class="flex gap-4 mt-6">
          <button 
            @click="showDeleteModal = false"
            class="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-hover"
          >
            Annuler
          </button>
          <button 
            @click="deleteUser"
            class="flex-1 px-4 py-2 rounded-lg bg-danger text-white hover:opacity-90"
            :disabled="loading"
          >
            {{ loading ? 'Suppression...' : 'Supprimer' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsersSection',
  data() {
    return {
      tableHeaders: ['Utilisateur', 'Email', 'Rôle', 'Statut', 'Actions'],
      users: [],
      showCreateUserModal: false,
      showDeleteModal: false,
      editingUser: null,
      userToDelete: null,
      loading: false,
      userForm: {
        name: '',
        email: '',
        role: 'admin',
        password: ''
      }
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    getRoleClass(role) {
      const baseClasses = 'px-3 py-1 rounded-full text-sm'
      const roleClasses = {
        'admin': 'bg-danger/10 text-danger',
        'artist': 'bg-primary/10 text-primary'
      }
      return `${baseClasses} ${roleClasses[role]}`
    },

    async fetchUsers() {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:5000/api/users', {
          headers: {
            'Authorization': token
          }
        })
        const data = await response.json()
        if (data.success) {
          this.users = data.users
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error)
      }
    },

    closeModal() {
      this.showCreateUserModal = false
      this.editingUser = null
      this.userForm = {
        name: '',
        email: '',
        role: 'admin',
        password: ''
      }
    },

    editUser(user) {
      this.editingUser = user
      this.userForm = {
        name: user.name,
        email: user.email,
        role: user.role
      }
      this.showCreateUserModal = true
    },

    async saveUser() {
      try {
        this.loading = true
        const token = localStorage.getItem('token')
        const url = this.editingUser 
          ? `http://localhost:5000/api/users/${this.editingUser._id}`
          : 'http://localhost:5000/api/users'
        
        const response = await fetch(url, {
          method: this.editingUser ? 'PUT' : 'POST',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.userForm)
        })

        const data = await response.json()
        if (data.success) {
          await this.fetchUsers()
          this.closeModal()
        }
      } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error)
      } finally {
        this.loading = false
      }
    },

    confirmDelete(user) {
      this.userToDelete = user
      this.showDeleteModal = true
    },

    async deleteUser() {
      try {
        this.loading = true
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:5000/api/users/${this.userToDelete._id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': token
          }
        })

        const data = await response.json()
        if (data.success) {
          await this.fetchUsers()
          this.showDeleteModal = false
          this.userToDelete = null
        }
      } catch (error) {
        console.error('Erreur lors de la suppression:', error)
      } finally {
        this.loading = false
      }
    },

    async toggleUserStatus(user) {
      try {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:5000/api/users/${user._id}/toggle-status`, {
          method: 'PUT',
          headers: {
            'Authorization': token
          }
        })

        const data = await response.json()
        if (data.success) {
          await this.fetchUsers()
        }
      } catch (error) {
        console.error('Erreur lors du changement de statut:', error)
      }
    }
  }
}
</script>