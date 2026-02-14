<template>
  <div>
    <!-- Loading -->
<transition enter-active-class="transition-opacity duration-75" enter-from-class="opacity-0">
    <div v-if="loading">
      <div class="line-loading"></div>
      <div class="bg-[#ffffff7e] mt-[-50px] h-screen absolute w-screen z-50">
      </div>
    </div>
</transition>

    <div class="login">
      <div class="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-5 mb-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <span>Upravljanje racunom</span>
      </div>

      <h1 class="heading-1 mb-2">Dodaj broj telefona</h1>
      <div class="flex items-center space-x-2 mb-9">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
      <div class="accMail">foo@bar.com</div>
      </div>



      <div class="flex space-x-2">
      <div
        :style="error ? 'border-color: red' : ''"
        class="maininput-scoped w-fit flex items-center space-x-3"
        disabled
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
      <span>+385</span>

      </div>

      
      <input
        v-model="mail"
        type="number"
        :placeholder="'Broj telefona'"
        :style="error ? 'border-color: red' : ''"
        class="maininput-scoped w-full"
      />
      </div>



        <MainBtn
        class="mt-5"
        title="Nastavi"
        
        :arrow="true"
        :disabled="true"

        />

      <div class="mt-10 text-gray-400">
        <span>Nakon sto nastavite, na unijeti broj telefona cemo poslati kôd za potvrdu.</span>
      </div>


    </div>

    <div>
      <FooterView/>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import FooterView from '@/components/FooterView.vue';

import isEmail from 'validator/lib/isEmail';
import { watch } from '@vue/runtime-core';
import router from '@/router';
import MainBtn from '@/components/MainBtn.vue';
export default {
  components: { FooterView, MainBtn },
  setup() {
    const error = ref(null);
    const mail = ref(null);

    const loading = ref(false)

    const validateForm = () => {
      // TODO: Determine is email or phone, than validate

      if (!mail.value) {
        // no email?
        error.value = 'Unesite adresu e-pošte ili broj telefona za nastavak'
        return
      }

      // ! Important: Only validate if email is provided (ignore on phone)
      if (!isEmail(mail.value)) {
        // email not formatted correctly
        error.value = 'Unesite ispravnu adresu e-pošte ili broj telefona'
        return
      }

      error.value = null
    } 

    const submit = (ev) => {
      validateForm()
      if (error.value) return
      
      loading.value = true;
      setTimeout(() => {
          router.push({name: 'register-pw'})
      }, 2000);


      console.log(ev)
    }

    watch(mail, () => {
      if (error.value) {
        validateForm()
      }
    })

    return {
      error,
      mail,
      submit,
      loading
    };
  },
};
</script>

<style scoped>
.maininput-scoped {


  padding: 4.9% 18px;
  
  font-size: 15px;
  background-color: #ffffff;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  font-family: Montserrat, sans-serif;
}
</style>


