<template>
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-border">
            <th v-for="header in headers" 
                :key="header.value" 
                class="text-left py-3 px-4"
            >
              {{ header.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="transaction in transactions" 
              :key="transaction.id"
              class="border-b border-border last:border-0 hover:bg-hover transition-colors"
          >
            <td class="py-3 px-4">
              {{ formatDate(transaction.date) }}
            </td>
            <td class="py-3 px-4">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full"
                      :class="getTypeColor(transaction.type)">
                </span>
                {{ formatType(transaction.type) }}
              </div>
            </td>
            <td class="py-3 px-4">{{ transaction.description }}</td>
            <td class="py-3 px-4 font-medium">
              {{ formatCurrency(transaction.amount) }}
            </td>
            <td class="py-3 px-4">
              <span class="px-2 py-1 text-xs rounded-full"
                    :class="getStatusStyle(transaction.status)">
                {{ formatStatus(transaction.status) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  const headers = [
    { label: 'Date', value: 'date' },
    { label: 'Type', value: 'type' },
    { label: 'Description', value: 'description' },
    { label: 'Montant', value: 'amount' },
    { label: 'Statut', value: 'status' }
  ]
  
  defineProps({
    transactions: {
      type: Array,
      required: true
    }
  })
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR')
  }
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount)
  }
  
  const formatType = (type) => {
    const types = {
      streams: 'Streams',
      sales: 'Ventes',
      licenses: 'Licences'
    }
    return types[type] || type
  }
  
  const formatStatus = (status) => {
    const statuses = {
      completed: 'Complété',
      pending: 'En attente',
      failed: 'Échoué'
    }
    return statuses[status] || status
  }
  
  const getTypeColor = (type) => {
    const colors = {
      streams: 'bg-blue-500',
      sales: 'bg-green-500',
      licenses: 'bg-purple-500'
    }
    return colors[type] || 'bg-gray-500'
  }
  
  const getStatusStyle = (status) => {
    const styles = {
      completed: 'bg-green-500/10 text-green-500',
      pending: 'bg-yellow-500/10 text-yellow-500',
      failed: 'bg-red-500/10 text-red-500'
    }
    return styles[status] || 'bg-gray-500/10 text-gray-500'
  }
  </script>