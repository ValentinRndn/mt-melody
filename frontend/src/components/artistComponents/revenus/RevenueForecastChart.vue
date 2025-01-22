<template>
  <div class="relative" style="height: 300px">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      actual: {
        labels: [],
        data: []
      },
      forecast: {
        labels: [],
        data: []
      }
    })
  }
})

const chartRef = ref(null)
let chart = null

const getChartData = () => {
  // Vérifier si les données sont valides
  const actualLabels = Array.isArray(props.data?.actual?.labels) ? props.data.actual.labels : []
  const actualData = Array.isArray(props.data?.actual?.data) ? props.data.actual.data : []
  const forecastLabels = Array.isArray(props.data?.forecast?.labels) ? props.data.forecast.labels : []
  const forecastData = Array.isArray(props.data?.forecast?.data) ? props.data.forecast.data : []

  return {
    labels: [...actualLabels, ...forecastLabels],
    datasets: [
      {
        label: 'Revenus actuels',
        data: actualData,
        borderColor: 'var(--primary)',
        backgroundColor: 'rgba(var(--primary-rgb), 0.1)',
        tension: 0.4,
        fill: true
      },
      {
        label: 'Prévisions',
        data: [...Array(actualData.length).fill(null), ...forecastData],
        borderColor: 'rgba(var(--primary-rgb), 0.5)',
        borderDash: [5, 5],
        tension: 0.4,
        fill: false
      }
    ]
  }
}

const updateChart = () => {
  if (chart) {
    const newData = getChartData()
    chart.data.labels = newData.labels
    chart.data.datasets = newData.datasets
    chart.update()
  }
}

const createChart = () => {
  if (!chartRef.value) return

  const ctx = chartRef.value.getContext('2d')
  
  chart = new Chart(ctx, {
    type: 'line',
    data: getChartData(),
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              return new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: 'EUR'
              }).format(context.raw || 0)
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(var(--border-rgb), 0.1)'
          },
          ticks: {
            callback: (value) => {
              return new Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                notation: 'compact'
              }).format(value)
            }
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

// Nettoyage du chart lors de la destruction du composant
onUnmounted(() => {
  if (chart) {
    chart.destroy()
    chart = null
  }
})
</script>