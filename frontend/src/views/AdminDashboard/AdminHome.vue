<template>
    <div class="admin-home-container flex w-full h-[150vh] overscroll-y-auto">
    <Navbar class=""/>

    <div class="admin-home-right-container w-full m-5">
    <div class="user-container flex h-fit w-fit items-center gap-4 mb-12">
        <div class="profil-picture-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-green-500 p-2 rounded-full" width="40" height="40" viewBox="0 0 24 24"><path fill="#0D151C" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/></svg>
        </div>
        <div class="profil-text-container text-white flex flex-col">
            <span class="text-xl font-bold">Admin Principal</span>
            <span>Super administrateur</span>
        </div>
    </div>

    <div class="stats-container flex gap-8 w-full">
        <div class="stat-container border border-lightgrey border-opacity-20 rounded-[10px] p-4 flex flex-col gap-2 w-full bg-backcard">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M7.5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M2 10.768C2 9.79 2.791 9 3.768 9h4.767A4 4 0 0 0 8 11a4 4 0 0 0 1.354 3H8.268a2.77 2.77 0 0 0-2.593 1.796c-1.498-.366-2.427-1.183-2.974-2.093C2 12.536 2 11.336 2 11.127zM16 11a4 4 0 0 0-.535-2h4.767C21.21 9 22 9.791 22 10.768v.36c0 .207 0 1.408-.7 2.575c-.548.91-1.477 1.727-2.975 2.093A2.77 2.77 0 0 0 15.732 14h-1.086A4 4 0 0 0 16 11m3.5-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-13 11.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zM12 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
            <span class="text-white text-3xl font-semibold">1,234</span>
            <p class="text-lightgrey text-lg font-semibold">Artistes actifs</p>
        </div>

        <div class="stat-container border border-lightgrey border-opacity-20 rounded-[10px] p-4 flex flex-col gap-2 w-full bg-backcard">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 20 20"><g fill="#00FF66"><path fill-rule="evenodd" d="M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995z" clip-rule="evenodd"/><ellipse cx="14.75" cy="15" rx="3" ry="2.5"/><ellipse cx="5.75" cy="16" rx="3" ry="2.5"/><path fill-rule="evenodd" d="M15.75 5h2v10h-2zm-9 1h2v10h-2z" clip-rule="evenodd"/></g></svg>                        
            <span class="text-white text-3xl font-semibold">1,234</span>
            <p class="text-lightgrey text-lg font-semibold">Titres publiés</p>
        </div>

        <div class="stat-container border border-lightgrey border-opacity-20 rounded-[10px] p-4 flex flex-col gap-2 w-full bg-backcard">
            <svg xmlns="http://www.w3.org/2000/svg"  width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"/></svg>
            <span class="text-white text-3xl font-semibold">1,234</span>
            <p class="text-lightgrey text-lg font-semibold">Ecoutes ce mois</p>
        </div>

        <div class="stat-container border border-lightgrey border-opacity-20 rounded-[10px] p-4 flex flex-col gap-2 w-full bg-backcard">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M14 11h-1V7h2a1 1 0 0 1 1 1a1 1 0 0 0 2 0a3 3 0 0 0-3-3h-2V3a1 1 0 0 0-2 0v2h-1a4 4 0 0 0 0 8h1v4H9a1 1 0 0 1-1-1a1 1 0 0 0-2 0a3 3 0 0 0 3 3h2v2a1 1 0 0 0 2 0v-2h1a4 4 0 0 0 0-8m-3 0h-1a2 2 0 0 1 0-4h1Zm3 6h-1v-4h1a2 2 0 0 1 0 4"/></svg>
            <span class="text-white text-3xl font-semibold">1,234</span>
            <p class="text-lightgrey text-lg font-semibold">Revenus ce mois</p>
        </div>
    </div>

            <!-- Performance Line Chart -->
             <div class="graphs-container w-full flex gap-8 my-12">
            <div class="chart-container border border-lightgrey border-opacity-20 rounded-[10px] p-4 w-3/4 h-[500px] bg-backcard mx-auto">
                <h3 class="text-white text-xl font-semibold mb-4">Performances mensuelles</h3>
                <canvas class="mx-auto w-full h-full" id="performanceChart"></canvas>
              </div>
      
        <!-- Genre Distribution Doughnut Chart -->
        <div class="chart-container border border-lightgrey border-opacity-20 rounded-[10px] p-4 w-1/3 h-[500px] bg-backcard">
            <h3 class="text-white text-xl font-semibold mb-4">Distribution des genres</h3>
            <canvas class="mx-auto w-full h-full" id="genreChart"></canvas>
          </div>
        </div>

        <div class="activities-container border border-lightgrey border-opacity-20 rounded-[10px] p-4 w-full bg-backcard">
            <span class="text-xl text-white font-bold ">Activités récentes</span>
            <div class="album-container flex gap-4 items-center w-full border-b border-lightgrey py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M7.5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M2 10.768C2 9.79 2.791 9 3.768 9h4.767A4 4 0 0 0 8 11a4 4 0 0 0 1.354 3H8.268a2.77 2.77 0 0 0-2.593 1.796c-1.498-.366-2.427-1.183-2.974-2.093C2 12.536 2 11.336 2 11.127zM16 11a4 4 0 0 0-.535-2h4.767C21.21 9 22 9.791 22 10.768v.36c0 .207 0 1.408-.7 2.575c-.548.91-1.477 1.727-2.975 2.093A2.77 2.77 0 0 0 15.732 14h-1.086A4 4 0 0 0 16 11m3.5-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-13 11.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zM12 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
                <div class="album-right-container">
                    <span class="text-white font-semibold">Nouvel album uploadé</span>
                    <p class="text-white">Il y a 2 heures - par Artiste XYZ</p>
                </div>
            </div>

            <div class="album-container flex gap-4 items-center w-full border-b border-lightgrey py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M7.5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M2 10.768C2 9.79 2.791 9 3.768 9h4.767A4 4 0 0 0 8 11a4 4 0 0 0 1.354 3H8.268a2.77 2.77 0 0 0-2.593 1.796c-1.498-.366-2.427-1.183-2.974-2.093C2 12.536 2 11.336 2 11.127zM16 11a4 4 0 0 0-.535-2h4.767C21.21 9 22 9.791 22 10.768v.36c0 .207 0 1.408-.7 2.575c-.548.91-1.477 1.727-2.975 2.093A2.77 2.77 0 0 0 15.732 14h-1.086A4 4 0 0 0 16 11m3.5-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-13 11.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zM12 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
                <div class="album-right-container">
                    <span class="text-white font-semibold">Nouvel album uploadé</span>
                    <p class="text-white">Il y a 2 heures - par Artiste XYZ</p>
                </div>
            </div>

            <div class="album-container flex gap-4 items-center w-full border-b border-lightgrey py-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M7.5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M2 10.768C2 9.79 2.791 9 3.768 9h4.767A4 4 0 0 0 8 11a4 4 0 0 0 1.354 3H8.268a2.77 2.77 0 0 0-2.593 1.796c-1.498-.366-2.427-1.183-2.974-2.093C2 12.536 2 11.336 2 11.127zM16 11a4 4 0 0 0-.535-2h4.767C21.21 9 22 9.791 22 10.768v.36c0 .207 0 1.408-.7 2.575c-.548.91-1.477 1.727-2.975 2.093A2.77 2.77 0 0 0 15.732 14h-1.086A4 4 0 0 0 16 11m3.5-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-13 11.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zM12 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
                <div class="album-right-container">
                    <span class="text-white font-semibold">Nouvel album uploadé</span>
                    <p class="text-white">Il y a 2 heures - par Artiste XYZ</p>
                </div>
            </div>
        </div>
</div>
</div>
</template>



<script>
import Navbar from '../../components/Navbar.vue';
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'AdminHome',
  components: {
    Navbar,
  },
  setup() {
    onMounted(() => {
      // Line Chart for Performances Mensuelles
      const performanceCtx = document.getElementById('performanceChart').getContext('2d');
      new Chart(performanceCtx, {
        type: 'line',
        data: {
          labels: ['Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep'],
          datasets: [
            {
              label: 'Performances',
              data: [35, 50, 49, 60, 70, 91, 125],
              borderColor: '#00FF66',
              backgroundColor: 'rgba(0, 255, 102, 0.2)',
              tension: 0.4,
              fill: true,
              pointBackgroundColor: '#00FF66',
              pointBorderColor: '#ffffff',
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      // Doughnut Chart for Genre Distribution
      const genreCtx = document.getElementById('genreChart').getContext('2d');
      new Chart(genreCtx, {
        type: 'doughnut',
        data: {
          labels: ['Pop', 'Hip-Hop', 'Rock', 'Électro', 'Autres'],
          datasets: [
            {
              data: [31.1, 24.9, 24.3, 7.3, 12.4],
              backgroundColor: ['#00FF66', '#28A745', '#155724', '#1A9E68', '#58D68D'],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                color: '#FFFFFF',
                usePointStyle: true,
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || '';
                  if (label) {
                    label += ': ';
                  }
                  label += context.raw + '%';
                  return label;
                },
              },
            },
          },
          cutout: '60%', // Adjust the hole size
        },
      });
    });
  },
};

</script>