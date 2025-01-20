<template>
  <div>
    <h3 class="text-lg font-semibold mb-6">Tendances d'écoute</h3>
    <div class="relative" style="height: 300px">
      <canvas ref="chartRef"></canvas>
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

const chartRef = ref(null)
let chart = null

const updateChart = () => {
  if (chart) {
    chart.data.labels = props.data.labels
    chart.data.datasets[0].data = props.data.datasets[0].data
    chart.update()
  }
}

const createChart = () => {
  const ctx = chartRef.value.getContext('2d')
  
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: props.data.labels,
      datasets: [{
        label: 'Écoutes',
        data: props.data.datasets[0].data,
        borderColor: 'var(--primary)',
        backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(var(--border-rgb), 0.1)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  })
}

onMounted(() => {
  createChart()
})

watch(() => props.data, updateChart, { deep: true })
</script>