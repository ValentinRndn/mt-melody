<template>
  <div>
    <h3 class="text-lg font-semibold mb-6">Démographie des auditeurs</h3>
    
    <div class="space-y-8">
      <!-- Distribution par âge -->
      <div>
        <h4 class="text-sm text-text-secondary mb-4">Distribution par âge</h4>
        <div class="space-y-3">
          <div 
            v-for="item in data.age"
            :key="item.group"
            class="space-y-1"
          >
            <div class="flex justify-between text-sm">
              <span>{{ item.group }}</span>
              <span>{{ item.value }}%</span>
            </div>
            <div class="h-2 bg-hover rounded-full overflow-hidden">
              <div 
                class="h-full bg-primary transition-all duration-300"
                :style="{ width: `${item.value}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Distribution par genre -->
      <div>
        <h4 class="text-sm text-text-secondary mb-4">Distribution par genre</h4>
        <div class="relative" style="height: 200px">
          <canvas ref="genderChartRef"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

const genderChartRef = ref(null)
let genderChart = null

const updateGenderChart = () => {
  if (genderChart) {
    genderChart.data.labels = props.data.gender.map(item => item.label)
    genderChart.data.datasets[0].data = props.data.gender.map(item => item.value)
    genderChart.update()
  }
}

const createGenderChart = () => {
  const ctx = genderChartRef.value.getContext('2d')
  
  genderChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: props.data.gender.map(item => item.label),
      datasets: [{
        data: props.data.gender.map(item => item.value),
        backgroundColor: [
          'rgba(var(--primary-rgb), 0.8)',
          'rgba(var(--primary-rgb), 0.5)',
          'rgba(var(--primary-rgb), 0.3)'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  })
}

onMounted(() => {
  createGenderChart()
})

watch(() => props.data, updateGenderChart, { deep: true })
</script>