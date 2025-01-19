<!-- components/stats/ChartsGrid.vue -->
<template>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-6 mb-8">
      <div 
        v-for="chart in charts" 
        :key="chart.id"
        class="bg-card-bg rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <h3 class="text-lg font-semibold mb-6">{{ chart.title }}</h3>
        <div :id="chart.id" class="w-full h-[350px]"></div>
      </div>
    </div>
  </template>
  
  <script>
  import ApexCharts from 'apexcharts'
  
  export default {
    name: 'ChartsGrid',
    data() {
      return {
        charts: [
          {
            id: 'performanceChart',
            title: 'Évolution des Écoutes et Revenus',
            instance: null,
            config: {
              series: [{
                name: 'Écoutes',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
              }, {
                name: 'Revenus',
                data: [25, 35, 32, 45, 42, 55, 62, 85, 110]
              }],
              chart: {
                height: 350,
                type: 'line',
                toolbar: { show: false }
              },
              colors: ['#00FF66', '#FFA500'],
              xaxis: {
                categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep']
              },
              stroke: { curve: 'smooth' }
            }
          },
          {
            id: 'genreDistChart',
            title: 'Distribution par Genre Musical',
            instance: null,
            config: {
              series: [44, 55, 13, 43, 22],
              chart: {
                type: 'donut',
                height: 350
              },
              labels: ['Pop', 'Hip-Hop', 'Rock', 'Électro', 'Autres'],
              colors: ['#00FF66', '#00CC52', '#009933', '#006622', '#003311']
            }
          },
          {
            id: 'artistActivityChart',
            title: 'Activité des Artistes',
            instance: null,
            config: {
              series: [{
                name: 'Nouvelles Sorties',
                data: [44, 55, 41, 67, 22, 43, 21]
              }, {
                name: 'Artistes Actifs',
                data: [23, 41, 32, 45, 31, 43, 26]
              }],
              chart: {
                type: 'bar',
                height: 350,
                stacked: true
              },
              colors: ['#00FF66', '#FFA500'],
              xaxis: {
                categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
              }
            }
          },
          {
            id: 'supportChart',
            title: 'Support et Satisfaction',
            instance: null,
            config: {
              series: [{
                name: 'Satisfaction',
                data: [90, 88, 92, 95, 89, 93, 91]
              }],
              chart: {
                type: 'area',
                height: 350
              },
              colors: ['#00FF66'],
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.7,
                  opacityTo: 0.3
                }
              },
              xaxis: {
                categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
              }
            }
          }
        ]
      }
    },
    mounted() {
      this.initializeCharts()
    },
    beforeDestroy() {
      this.destroyCharts()
    },
    methods: {
      initializeCharts() {
        this.charts.forEach(chart => {
          chart.instance = new ApexCharts(
            document.querySelector(`#${chart.id}`),
            this.getChartOptions(chart.config)
          )
          chart.instance.render()
        })
      },
      destroyCharts() {
        this.charts.forEach(chart => {
          if (chart.instance) {
            chart.instance.destroy()
          }
        })
      },
      getChartOptions(config) {
        return {
          ...config,
          theme: {
            mode: this.isDarkMode ? 'dark' : 'light'
          },
          chart: {
            ...config.chart,
            foreColor: this.isDarkMode ? '#ffffff' : '#1a1a1a',
            background: 'transparent'
          }
        }
      }
    },
    computed: {
      isDarkMode() {
        return !document.documentElement.hasAttribute('data-theme')
      }
    }
  }
  </script>