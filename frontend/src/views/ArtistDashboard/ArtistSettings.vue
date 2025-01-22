    <template>
        <div class="flex min-h-screen bg-background text-text">
        <Sidebar />
        
        <main class="flex-1 ml-[280px] p-8 max-w-7xl">
            <Header :user="user" />
    
            <div class="mb-8">
            <h1 class="text-2xl font-bold mb-2">Paramètres</h1>
            <p class="text-text-secondary">Gérez vos préférences et informations de compte</p>
            </div>
    
            <!-- Navigation des paramètres -->
            <div class="flex gap-8 mb-8 border-b border-border">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="currentTab = tab.id"
                class="px-4 py-3 text-sm font-medium transition-colors relative"
                :class="currentTab === tab.id ? 'text-primary' : 'text-text-secondary hover:text-text'"
            >
                {{ tab.label }}
                <div
                v-if="currentTab === tab.id"
                class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                ></div>
            </button>
            </div>
    
            <!-- Contenu des paramètres -->
            <div class="space-y-8">
            <!-- Profil -->
            <div v-if="currentTab === 'profile'" class="space-y-8">
                <!-- Photo de profil -->
                <div class="bg-card-bg border border-border rounded-xl p-6">
                    <h3 class="text-lg font-semibold mb-4">Photo de profil</h3>
                    <div class="flex items-center gap-6">
                    <div class="relative group">
                        <img
                        :src="profile.avatar"
                        alt="Photo de profil"
                        class="w-24 h-24 rounded-full object-cover"
                        />
                        <div class="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button @click="triggerFileInput" class="text-white text-sm">Modifier</button>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex gap-3">
                        <input
                            type="file"
                            ref="fileInput"
                            @change="handleFileUpload"
                            accept="image/png, image/jpeg"
                            class="hidden"
                        />
                        <button 
                            @click="triggerFileInput"
                            class="px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Télécharger
                        </button>
                        <button 
                            @click="removeAvatar"
                            class="px-4 py-2 border border-border rounded-lg hover:bg-hover transition-colors"
                        >
                            Supprimer
                        </button>
                        </div>
                        <p class="text-sm text-text-secondary">
                        Format JPG, PNG. Max 2Mo.
                        </p>
                        <p v-if="uploadError" class="text-sm text-red-500">
                        {{ uploadError }}
                        </p>
                    </div>
                    </div>
                </div>
    
                <!-- Informations personnelles -->
                <form @submit.prevent="saveProfile" class="bg-card-bg border border-border rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-4">Informations personnelles</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label class="block text-sm font-medium mb-2">Nom d'artiste</label>
                    <input
                        v-model="profile.artistName"
                        type="text"
                        class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                    </div>
    
                    <div>
                    <label class="block text-sm font-medium mb-2">Email</label>
                    <input
                        v-model="profile.email"
                        type="email"
                        class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                    </div>
    
                    <div>
                    <label class="block text-sm font-medium mb-2">Téléphone</label>
                    <input
                        v-model="profile.phone"
                        type="tel"
                        class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                    </div>
    
                    <div>
                    <label class="block text-sm font-medium mb-2">Site web</label>
                    <input
                        v-model="profile.website"
                        type="url"
                        class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                    </div>
    
                    <div class="md:col-span-2">
                    <label class="block text-sm font-medium mb-2">Biographie</label>
                    <textarea
                        v-model="profile.bio"
                        rows="4"
                        class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    ></textarea>
                    </div>
                </div>
    
                <div class="mt-6">
                    <button
                    type="submit"
                    class="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                    Enregistrer les modifications
                    </button>
                </div>
                </form>
            </div>
    
            <!-- Notifications -->
            <div v-if="currentTab === 'notifications'" class="bg-card-bg border border-border rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-6">Préférences de notification</h3>
                <div class="space-y-6">
                <div v-for="(category, index) in notificationSettings" :key="index" class="space-y-4">
                    <h4 class="font-medium">{{ category.title }}</h4>
                    <div class="space-y-3">
                    <div
                        v-for="(setting, settingIndex) in category.settings"
                        :key="settingIndex"
                        class="flex items-center justify-between py-2"
                    >
                        <div>
                        <p class="font-medium">{{ setting.label }}</p>
                        <p class="text-sm text-text-secondary">{{ setting.description }}</p>
                        </div>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            v-model="setting.enabled"
                            class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    </div>
                    <div v-if="index < notificationSettings.length - 1" class="border-b border-border my-6"></div>
                </div>
                </div>
            </div>
    
            <!-- Sécurité -->
            <div v-if="currentTab === 'security'" class="space-y-6">
                <!-- Mot de passe -->
                <div class="bg-card-bg border border-border rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-6">Changer le mot de passe</h3>
                <form @submit.prevent="changePassword" class="space-y-4 max-w-md">
                    <div>
                    <label class="block text-sm font-medium mb-2">Mot de passe actuel</label>
                    <input
                        v-model="passwordForm.current"
                        type="password"
                        class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                    </div>
                    <div>
                    <label class="block text-sm font-medium mb-2">Nouveau mot de passe</label>
                    <input
                        v-model="passwordForm.new"
                        type="password"
                        class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                    </div>
                    <div>
                    <label class="block text-sm font-medium mb-2">Confirmer le nouveau mot de passe</label>
                    <input
                        v-model="passwordForm.confirm"
                        type="password"
                        class="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
                    />
                    </div>
                    <button
                    type="submit"
                    class="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
                    >
                    Mettre à jour le mot de passe
                    </button>
                </form>
                </div>
    
                <!-- Authentification à deux facteurs -->
                <div class="bg-card-bg border border-border rounded-xl p-6">
                <div class="flex items-center justify-between mb-6">
                    <div>
                    <h3 class="text-lg font-semibold">Authentification à deux facteurs</h3>
                    <p class="text-text-secondary mt-1">Ajouter une couche de sécurité supplémentaire à votre compte</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        v-model="security.twoFactor"
                        class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                </div>
                <div v-if="security.twoFactor" class="space-y-4">
                    <div class="p-4 bg-hover rounded-lg">
                    <p class="text-sm">Scannez le QR code avec votre application d'authentification</p>
                    <div class="mt-4 w-40 h-40 bg-white p-2 rounded-lg mx-auto">
                        <!-- QR Code placeholder -->
                        <div class="w-full h-full bg-gray-200 rounded"></div>
                    </div>
                    </div>
                    <div>
                    <label class="block text-sm font-medium mb-2">Code de vérification</label>
                    <div class="flex gap-4">
                        <input
                        type="text"
                        maxlength="6"
                        class="w-40 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-center tracking-widest"
                        />
                        <button class="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
                        Vérifier
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    
            <!-- Facturation -->
            <div v-if="currentTab === 'billing'" class="space-y-6">
                <!-- Plan actuel -->
                <div class="bg-card-bg border border-border rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-6">Plan actuel</h3>
                <div class="flex items-center justify-between">
                    <div>
                    <p class="font-medium">Plan Pro</p>
                    <p class="text-text-secondary">Facturé mensuellement</p>
                    </div>
                    <button class="px-4 py-2 border border-border rounded-lg hover:bg-hover transition-colors">
                    Changer de plan
                    </button>
                </div>
                </div>
    
                <!-- Méthode de paiement -->
                <div class="bg-card-bg border border-border rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-6">Méthode de paiement</h3>
                <div class="space-y-4">
                    <div
                    v-for="(card, index) in paymentMethods"
                    :key="index"
                    class="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-8 bg-hover rounded flex items-center justify-center">
                        <i class="fas fa-credit-card"></i>
                        </div>
                        <div>
                        <p class="font-medium">•••• •••• •••• {{ card.last4 }}</p>
                        <p class="text-sm text-text-secondary">Expire le {{ card.expiry }}</p>
                        </div>
                    </div>
                    <button class="text-text-secondary hover:text-text transition-colors">
                        <i class="fas fa-ellipsis-v"></i>
                    </button>
                    </div>
                    <button class="flex items-center gap-2 text-primary">
                    <i class="fas fa-plus"></i>
                    Ajouter une carte
                    </button>
                </div>
                </div>
    
                <!-- Historique de facturation -->
                <div class="bg-card-bg border border-border rounded-xl p-6">
                <h3 class="text-lg font-semibold mb-6">Historique de facturation</h3>
                <div class="overflow-x-auto">
                    <table class="w-full">
                    <thead>
                        <tr class="text-left border-b border-border">
                        <th class="pb-4 font-medium">Date</th>
                        <th class="pb-4 font-medium">Montant</th>
                        <th class="pb-4 font-medium">Statut</th>
                        <th class="pb-4 font-medium text-right">Facture</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="(invoice, index) in billingHistory"
                        :key="index"
                        class="border-b border-border last:border-0"
                        >
                        <td class="py-4">{{ invoice.date }}</td>
                        <td class="py-4">{{ invoice.amount }}</td>
                        <td class="py-4">
                            <span
                            class="px-2 py-1 text-xs rounded-full"
                            :class="{
                                'bg-green-500/10 text-green-500': invoice.status === 'Payé',
                                'bg-yellow-500/10 text-yellow-500': invoice.status === 'En attente'
                            }"
                            >
                            {{ invoice.status }}
                            </span>
                        </td>
                        <td class="py-4 text-right">
                            <button class="text-primary hover:opacity-80 transition-opacity">
                            <i class="fas fa-download"></i>
                            </button>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </main>
        </div>
    </template>
    
    <script setup>
    import { ref } from 'vue'
        import Sidebar from '../../components/Sidebar.vue'
        import Header from '../../components/Header.vue'
    
    const tabs = [
        { id: 'profile', label: 'Profil' },
        { id: 'notifications', label: 'Notifications' },
        { id: 'security', label: 'Sécurité' },
        { id: 'billing', label: 'Facturation' }
    ]
    
    const currentTab = ref('profile')
    
    // Données du profil
    const profile = ref({
        avatar: '/placeholder-avatar.jpg',
        artistName: 'John Doe',
        email: 'john@example.com',
        phone: '+33 6 12 34 56 78',
        website: 'https://johndoe.com',
        bio: 'Artiste passionné de musique électronique...'
    })
    
    // Paramètres de notification
    const notificationSettings = ref([
        {
        title: 'Activité du compte',
        settings: [
            {
            label: 'Nouvelles connexions',
            description: 'Notifications lors des connexions depuis un nouvel appareil',
            enabled: true
            },
            {
            label: 'Mises à jour de sécurité',
            description: 'Alertes concernant la sécurité de votre compte',
            enabled: true
            }
        ]
        },
        {
        title: 'Statistiques et revenus',
        settings: [
            {
            label: 'Rapports hebdomadaires',
            description: 'Résumé hebdomadaire de vos performances',
            enabled: true
            },
            {
            label: 'Alertes de paiement',
            description: 'Notifications lors des nouveaux paiements',
            enabled: true
            }
        ]
        }
    ])
    
    // Sécurité
    const security = ref({
        twoFactor: false
    })
    
    const passwordForm = ref({
        current: '',
        new: '',
        confirm: ''
    })
    
    // Facturation
    const paymentMethods = ref([
        {
        last4: '4242',
        expiry: '12/24'
        }
    ])
    
    const billingHistory = ref([
        {
        date: '20 Jan 2024',
        amount: '29.99 €',
        status: 'Payé'
        },
        {
        date: '20 Déc 2023',
        amount: '29.99 €',
        status: 'Payé'
        },
        {
        date: '20 Nov 2023',
        amount: '29.99 €',
        status: 'Payé'
        }
    ])

    const fileInput = ref(null)
    const uploadError = ref('')

    const triggerFileInput = () => {
    fileInput.value.click()
    }

    const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    // Vérifications de type et taille...

    try {
        const formData = new FormData()
        formData.append('avatar', file)

        const token = localStorage.getItem('token')
        if (!token) {
        throw new Error('Non authentifié')
        }

        const response = await fetch('http://localhost:5000/api/users/upload-avatar', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
        })

        const data = await response.json()

        if (!data.success) {
        throw new Error(data.message)
        }

        // Mettre à jour l'avatar
        profile.value.avatar = data.avatarUrl

    } catch (error) {
        console.error('Erreur upload:', error)
        uploadError.value = error.message || 'Erreur lors du téléchargement'
        profile.value.avatar = '/placeholder-avatar.jpg'
    }
    }

    const removeAvatar = async () => {
    try {
        // Appel API pour supprimer l'avatar
        const response = await fetch('votre-api/remove-avatar', {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        }
        })

        if (!response.ok) {
        throw new Error('Erreur lors de la suppression')
        }

        // Remettre l'avatar par défaut
        profile.value.avatar = '/placeholder-avatar.jpg'

    } catch (error) {
        console.error('Erreur suppression:', error)
        uploadError.value = 'Erreur lors de la suppression. Veuillez réessayer.'
    }
    }

    
    // Méthodes
    const saveProfile = () => {
        // Logique de sauvegarde du profil
        console.log('Saving profile...')
    }
    
    const changePassword = () => {
        // Logique de changement de mot de passe
        console.log('Changing password...')
    }
    </script>