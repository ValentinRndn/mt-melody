<template>
  <div class="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-col-1 gap-6 mb-8">
    <div 
      v-for="stat in stats"
      :key="stat.id"
      class="bg-card-bg rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1"
    >
      <div class="w-12 h-12 rounded-xl bg-hover flex items-center justify-center text-primary mb-4">
        <i :class="stat.icon"></i>
      </div>
      <div class="text-2xl font-bold text-primary mb-2">
        {{ stat.value }}
      </div>
      <div class="text-text-secondary text-sm">
        {{ stat.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  stats: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>