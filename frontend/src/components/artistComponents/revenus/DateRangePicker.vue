<template>
    <div class="relative">
      <button 
        @click="toggleDropdown"
        class="flex items-center gap-2 px-4 py-2 bg-card-bg border border-border rounded-lg hover:bg-hover transition-colors"
      >
        <i class="fas fa-calendar"></i>
        <span>{{ formatDateRange }}</span>
        <i class="fas fa-chevron-down text-xs"></i>
      </button>
  
      <div 
        v-if="isOpen"
        class="absolute right-0 top-full mt-2 p-4 bg-card-bg border border-border rounded-xl shadow-lg z-50 w-[300px]"
        v-click-outside="closeDropdown"
      >
        <!-- Raccourcis -->
        <div class="flex gap-2 mb-4">
          <button
            v-for="preset in presets"
            :key="preset.label"
            @click="applyPreset(preset)"
            class="px-3 py-1 text-sm rounded-lg transition-colors"
            :class="isActivePreset(preset) ? 'bg-primary text-background' : 'hover:bg-hover'"
          >
            {{ preset.label }}
          </button>
        </div>
  
        <!-- Sélecteur personnalisé -->
        <div class="space-y-4">
          <div>
            <label class="text-sm text-text-secondary mb-1 block">Date de début</label>
            <input
              type="date"
              v-model="tempRange.start"
              class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
  
          <div>
            <label class="text-sm text-text-secondary mb-1 block">Date de fin</label>
            <input
              type="date"
              v-model="tempRange.end"
              class="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
            />
          </div>
  
          <div class="flex justify-end gap-2">
            <button
              @click="closeDropdown"
              class="px-4 py-2 text-sm rounded-lg hover:bg-hover transition-colors"
            >
              Annuler
            </button>
            <button
              @click="applyCustomRange"
              class="px-4 py-2 text-sm bg-primary text-background rounded-lg hover:opacity-90 transition-opacity"
            >
              Appliquer
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { format, subDays, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns'
  import { fr } from 'date-fns/locale'
  
  const props = defineProps({
    modelValue: {
      type: Object,
      required: true
    }
  })
  
  const emit = defineEmits(['update:modelValue', 'update'])
  
  const isOpen = ref(false)
  const tempRange = ref({
    start: props.modelValue.start,
    end: props.modelValue.end
  })
  
  const presets = [
    {
      label: '7 jours',
      getValue: () => ({
        start: subDays(new Date(), 7),
        end: new Date()
      })
    },
    {
      label: '30 jours',
      getValue: () => ({
        start: subDays(new Date(), 30),
        end: new Date()
      })
    },
    {
      label: 'Ce mois',
      getValue: () => ({
        start: startOfMonth(new Date()),
        end: endOfMonth(new Date())
      })
    },
    {
      label: 'Cette année',
      getValue: () => ({
        start: startOfYear(new Date()),
        end: endOfYear(new Date())
      })
    }
  ]
  
  const formatDateRange = computed(() => {
    const start = format(new Date(props.modelValue.start), 'dd MMM yyyy', { locale: fr })
    const end = format(new Date(props.modelValue.end), 'dd MMM yyyy', { locale: fr })
    return `${start} - ${end}`
  })
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
    if (isOpen.value) {
      tempRange.value = {
        start: props.modelValue.start,
        end: props.modelValue.end
      }
    }
  }
  
  const closeDropdown = () => {
    isOpen.value = false
  }
  
  const applyPreset = (preset) => {
    const range = preset.getValue()
    emit('update:modelValue', range)
    emit('update')
    closeDropdown()
  }
  
  const applyCustomRange = () => {
    if (new Date(tempRange.value.start) > new Date(tempRange.value.end)) {
      // Optionnel : ajouter une notification d'erreur
      return
    }
    
    emit('update:modelValue', {
      start: new Date(tempRange.value.start),
      end: new Date(tempRange.value.end)
    })
    emit('update')
    closeDropdown()
  }
  
  const isActivePreset = (preset) => {
    const range = preset.getValue()
    return format(new Date(props.modelValue.start), 'yyyy-MM-dd') === format(range.start, 'yyyy-MM-dd') &&
           format(new Date(props.modelValue.end), 'yyyy-MM-dd') === format(range.end, 'yyyy-MM-dd')
  }
  
  // Directive click-outside
  const vClickOutside = {
    mounted(el, binding) {
      el.clickOutsideEvent = (event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value()
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  }
  </script>