<template>
  <div>
    <div class="login">
      <h1 class="heading-1">Imate li poteskoca s prijavom?</h1>

        <div class="mx-3 mt-20 space-y-14">
         <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="font-semibold">Zaboravljena adresa e-pošte</div>
            </div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 0 24 24"
                width="28px"
                fill="black"
                >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </div>

         <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>

                <div class="font-semibold">Zaboravljena lozinka</div>
            </div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 0 24 24"
                width="28px"
                fill="black"
                >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </div>
         <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>


                <div class="font-semibold">Izgubljen pristup dvofaktorskoj metodi</div>
            </div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 0 24 24"
                width="28px"
                fill="black"
                >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </div>
         <div class="flex justify-between items-center">
            <div class="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>



                <div class="font-semibold">Nesto drugo?</div>
            </div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 0 24 24"
                width="28px"
                fill="black"
                >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </div>
        </div>

      </div>

    
    <div v-if="emailInput" class="login">
      <h1 class="heading-1">Imate li poteskoca s prijavom?</h1>
      <!-- Find -->
      <form @submit.prevent="submit" novalidate>
      <input
        v-model="mail"
        type="email"
        :placeholder="'Adresa e-pošte ili broj telefona'"
        :style="error ? 'border-color: red' : ''"
        class="maininput"
      />
      <div class="errAlert" v-if="error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="red"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
          />
        </svg>
        <div class="warnText">{{ error }}</div>
      </div>

 
        <MainBtn
        type='submit'
        title="Nastavi"
        />
      </form>


      </div>

    <div class="mt-40">
      <FooterView/>
    </div>
  </div>
</template>
<script>
import FooterView from '@/components/FooterView.vue';
import MainBtn from '@/components/MainBtn.vue';
import { ref } from '@vue/reactivity';
export default {
  components: { FooterView, MainBtn },

  setup() {
    const emailInput= ref(false)

    return {
        emailInput
    }
  }
}
</script>

<style>

</style>