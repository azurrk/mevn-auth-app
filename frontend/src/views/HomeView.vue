<template>
  <div v-if="data" class="">
    <div class="gradient pt-8 pb-5 flex justify-between items-end">
      <img class="w-28 h-28 mx-[1.1rem] rounded-full" src="https://avatars.dicebear.com/api/adventurer-neutral/bla.svg" alt="">
      <div class="mr-8 flex items-center space-x-5">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>

          <span class="text-white text-sm">Zamijeni racun</span>
        </div>
        <div @click="signout" class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          <span class="text-white text-sm">Odjava</span>
        </div>
      </div>
    </div>
    <div class="mx-[1.1rem]">
      <div class="mt-8 font-bold text-3xl">{{data.firstName}} {{data.lastName}}</div>
      <div>{{data.email}}</div>
      <div class="mt-4 font-normal flex items-center space-x-2 text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
        <span>Racun kreiran 29. lis.</span>
      </div>


      <div class="cards mt-12 space-y-5">

<div v-if="mainBtn" class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <svg class="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
</div>

<div v-for="(opt, i) in options" :key="i" @click="redirect(opt.atClick)" class="p-6 max-w-sm bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">

<h5 class="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{opt.title}}</h5>

<p class="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">{{opt.desc}}</p>
<svg v-if="opt.icon == 'user'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<svg v-if="opt.icon == 'lock'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>
<svg v-if="opt.icon == 'payment-method'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>




</div>

<div class="pt-20"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import router from '@/router'
export default {
  setup() {
    const mainBtn = ref(false)
    const options = [
      {
        title: 'Osnovne informacije',
        desc: 'Ime • Prezime • Adresa e-pošte • Broj telefona i slicno',
        icon: 'user',
        atClick: 'manage-accdetails'
      },
      {
        title: 'Lozinka i sigurnost',
        desc: 'Zadnja promjena lozinke: 12. sij. Dvofaktorska autentifikacija je ukljucena.',
        icon: 'lock',
        atClick: 'manage-sec'
      },
      {
        title: 'Nacini placanja',
        desc: 'Dodajte nacin placanja',
        icon: 'payment-method'
      },
      {
        title: 'Nacini placanja',
        desc: 'Dodajte nacin placanja',
        icon: 'payment-method'
      },
      {
        title: 'Pretplate',
        desc: 'Upravljajte pretplatama',
      },
    ]
    const data = ref(null)

    onMounted(() => {
      const authId = localStorage.getItem('authId')
      if (!authId) {
        router.push({name: 'login', query: {continue: "http://192.168.1.102:8080/"}})
        return
      }
      else {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", authId);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        };

        fetch("http://192.168.1.102:8000/manageaccountpage", requestOptions)
        .then(response => response.json())
        .then(r => {
          console.log(r)
          data.value = r
        })
        .catch(error => console.log('error', error));
      }
      
    })

    const signout = () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", localStorage.getItem('authId'));

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      };

      fetch("http://192.168.1.102:8000/v2/signout", requestOptions)
      .then(response => response.json())
      .then(() => {
        setTimeout(() => {
          window.location.href = 'http://192.168.1.102:8080/login'
        }, 2000);
      })
      .catch(error => console.log('error', error));

      
    }

    const redirect = (name) => {
      router.push({name})
    }

    return {
      mainBtn,
      options,
      data,
      redirect,
      signout
    }
  },
}
</script>

<style scoped>
.gradient {
background: rgb(9,7,43);
background: linear-gradient(150deg, rgba(9,7,43,1) 24%, rgba(26,57,78,1) 44%, rgba(41,128,185,1) 84%);
}
</style>