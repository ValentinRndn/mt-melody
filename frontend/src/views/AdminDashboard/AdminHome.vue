<template>
    <div class="admin-home-container flex">
    <Navbar class="mr-5"/>

    <div class="admin-home-right-container">
    <div class="user-container flex h-fit w-fit items-center gap-4">
        <div class="profil-picture-container">
            <svg xmlns="http://www.w3.org/2000/svg" class="bg-green-500 p-2 rounded-full" width="40" height="40" viewBox="0 0 24 24"><path fill="#0D151C" fill-rule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clip-rule="evenodd"/></svg>
        </div>
        <div class="profil-text-container text-white flex flex-col">
            <span class="text-xl font-bold">Admin Principal</span>
            <span>Super administrateur</span>
        </div>
    </div>

    <div class="stats-container flex gap-8 w-full">
        <div class="stat-container border border-lightgrey rounded-[10px] p-4 flex flex-col gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M7.5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M2 10.768C2 9.79 2.791 9 3.768 9h4.767A4 4 0 0 0 8 11a4 4 0 0 0 1.354 3H8.268a2.77 2.77 0 0 0-2.593 1.796c-1.498-.366-2.427-1.183-2.974-2.093C2 12.536 2 11.336 2 11.127zM16 11a4 4 0 0 0-.535-2h4.767C21.21 9 22 9.791 22 10.768v.36c0 .207 0 1.408-.7 2.575c-.548.91-1.477 1.727-2.975 2.093A2.77 2.77 0 0 0 15.732 14h-1.086A4 4 0 0 0 16 11m3.5-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-13 11.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zM12 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
            <span class="text-white text-3xl font-semibold">1,234</span>
            <p class="text-lightgrey text-lg font-semibold">Artistes actifs</p>
        </div>

        <div class="stat-container border border-lightgrey rounded-[10px] p-4 flex flex-col gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M7.5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M2 10.768C2 9.79 2.791 9 3.768 9h4.767A4 4 0 0 0 8 11a4 4 0 0 0 1.354 3H8.268a2.77 2.77 0 0 0-2.593 1.796c-1.498-.366-2.427-1.183-2.974-2.093C2 12.536 2 11.336 2 11.127zM16 11a4 4 0 0 0-.535-2h4.767C21.21 9 22 9.791 22 10.768v.36c0 .207 0 1.408-.7 2.575c-.548.91-1.477 1.727-2.975 2.093A2.77 2.77 0 0 0 15.732 14h-1.086A4 4 0 0 0 16 11m3.5-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-13 11.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zM12 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
            <span class="text-white text-3xl font-semibold">1,234</span>
            <p class="text-lightgrey text-lg font-semibold">Artistes actifs</p>
        </div>

        <div class="stat-container border border-lightgrey rounded-[10px] p-4 flex flex-col gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M7.5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M2 10.768C2 9.79 2.791 9 3.768 9h4.767A4 4 0 0 0 8 11a4 4 0 0 0 1.354 3H8.268a2.77 2.77 0 0 0-2.593 1.796c-1.498-.366-2.427-1.183-2.974-2.093C2 12.536 2 11.336 2 11.127zM16 11a4 4 0 0 0-.535-2h4.767C21.21 9 22 9.791 22 10.768v.36c0 .207 0 1.408-.7 2.575c-.548.91-1.477 1.727-2.975 2.093A2.77 2.77 0 0 0 15.732 14h-1.086A4 4 0 0 0 16 11m3.5-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-13 11.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zM12 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
            <span class="text-white text-3xl font-semibold">1,234</span>
            <p class="text-lightgrey text-lg font-semibold">Artistes actifs</p>
        </div>

        <div class="stat-container border border-lightgrey rounded-[10px] p-4 flex flex-col gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="bg-lightgreen bg-opacity-20  rounded-[10px] p-2" viewBox="0 0 24 24"><path fill="#00FF66" d="M7.5 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6M2 10.768C2 9.79 2.791 9 3.768 9h4.767A4 4 0 0 0 8 11a4 4 0 0 0 1.354 3H8.268a2.77 2.77 0 0 0-2.593 1.796c-1.498-.366-2.427-1.183-2.974-2.093C2 12.536 2 11.336 2 11.127zM16 11a4 4 0 0 0-.535-2h4.767C21.21 9 22 9.791 22 10.768v.36c0 .207 0 1.408-.7 2.575c-.548.91-1.477 1.727-2.975 2.093A2.77 2.77 0 0 0 15.732 14h-1.086A4 4 0 0 0 16 11m3.5-6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-13 11.768C6.5 15.79 7.291 15 8.268 15h7.464c.977 0 1.768.791 1.768 1.768v.36c0 .207 0 1.408-.7 2.575C16.057 20.937 14.613 22 12 22s-4.058-1.063-4.8-2.297c-.7-1.167-.7-2.367-.7-2.576zM12 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/></svg>
            <span class="text-white text-3xl font-semibold">1,234</span>
            <p class="text-lightgrey text-lg font-semibold">Artistes actifs</p>
        </div>
    </div>
</div>
</div>
</template>



<script>
import Navbar from '../../components/Navbar.vue';
export default {
    name: 'AdminHome',
    components: {
        Navbar
    }
}

</script>