<template>
  <div class="bg-card-bg rounded-2xl p-6 border border-border">
    <h3 class="text-lg font-semibold mb-4">Distribution des genres</h3>
    <div id="genreChart" class="w-full h-[350px]"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ApexCharts from 'apexcharts'

onMounted(() => {
  const options = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: 'donut',
      height: 350,
      background: 'transparent',
      foreColor: 'var(--text-secondary)'
    },
    labels: ['Pop', 'Hip-Hop', 'Rock', 'Électro', 'Autres'],
    colors: ['#00FF66', '#00CC52', '#009933', '#006622', '#003311'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              color: 'var(--text-primary)'
            },
            value: {
              color: 'var(--text-primary)'
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => a + b, 0)
              },
              color: 'var(--text-primary)',
              fontSize: '16px',
              fontFamily: 'inherit',
            }
          }
        }
      }
    },
    stroke: {
      width: 0
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: 'var(--text-primary)'
      },
      markers: {
        width: 8,
        height: 8,
        radius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    theme: {
      mode: 'dark'
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px'
      }
    }
  }

  const chart = new ApexCharts(document.querySelector("#genreChart"), options)
  chart.render()
})
</script>