<!-- views/AdminDashboard/AdminFinance.vue -->
<template>
    <div class="flex min-h-screen bg-background text-text transition-all duration-300">
      <Navbar />
      
      <main class="flex-1 ml-[280px] p-8">
        <Header />
        
        <!-- Vue d'ensemble financière -->
        <FinanceOverview />
        
        <!-- Actions rapides -->
        <QuickActions />
        
        <!-- Transactions récentes -->
        <RecentTransactions />
        
        <!-- Graphiques -->
        <ChartsSection />
        
        <!-- Paramètres de paiement -->
        <PayoutSettings />
      </main>
    </div>
  </template>
  
  <script>
  import Navbar from '../../components/Navbar.vue'
  import Header from '../../components/Header.vue'
  import FinanceOverview from '../../components/finance/FinanceOverview.vue'
  import QuickActions from '../../components/finance/QuickActions.vue'
  import RecentTransactions from '../../components/finance/RecentTransactions.vue'
  import ChartsSection from '../../components/finance/ChartsSection.vue'
  import PayoutSettings from '../../components/finance/PayoutSettings.vue'
  
  export default {
    name: 'AdminFinance',
    components: {
      Navbar,
      Header,
      FinanceOverview,
      QuickActions,
      RecentTransactions,
      ChartsSection,
      PayoutSettings
    }
  }
  </script>