<template>
  <div>
    <transition
      enter-active-class="transition-opacity duration-75"
      enter-from-class="opacity-0"
    >
      <div v-if="loading">
        <div class="line-loading"></div>
        <div
          class="bg-[#ffffff7e] mt-[-50px] h-screen absolute w-screen z-50"
        ></div>
      </div>
    </transition>

    
    <div class="login">
      <h1 class="heading-1 mb-1">Kreiranje racuna</h1>
      
     
     <div class="flex">
         <span class="font-semibold mb-4">{{data.email}}</span>
     </div>
      <form @submit.prevent="submit">
        <div class="flex items-center justify-center space-x-4">
          <input
            v-model="form.firstName"
            type="text"
            :placeholder="'Ime'"
            :style="error ? 'border-color: red' : ''"
            class="maininput w-[50%]"
          />
          <input
            v-model="form.lastName"
            type="text"
            :placeholder="'Prezime'"
            :style="error ? 'border-color: red' : ''"
            class="maininput w-[50%]"
          />
        </div>
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

          <input
            v-model="form.username"
            type="text"
            :placeholder="'Korisnicko ime (opcionalno)'"
            :style="error ? 'border-color: red' : ''"
            class="maininput"
          />

          <CheckboxInput
          :active="form.checkbox"
          value="(Opcionalno) Slazem se da mi na e-postu saljete obavijesti o novostima i posebnim ponudama. Mozete se odjaviti bilo kada."
          class="my-8"
          @click="form.checkbox=!form.checkbox"
          />
          
      <MainBtn
      type="submit"
      :title="!loading ? 'Kreiraj racun' : 'Kreiranje racuna...'"
      class="mb-9"
      :disabled="loading"
      :arrow="!loading"
      />
      <div class="mb-20 font-medium text-sm text-gray-400">
        Kreiranjem korisnickog racuna prihvatate nase <span class="text-blue-400 underline">Uslove koristenja</span> i <span class="text-blue-400 underline">Pravila o privatnosti</span>
      </div>
      </form>

      <div class="noteText">
        Ovu stranicu stiti reCaptcha. Primjenjuju se
        <a class="tosLink">Uslovi koristenja</a> i
        <a class="tosLink">Pravila privatnosti</a> tvrtke Google.
      </div>

      </div>

    <div>
      <FooterView />
    </div>
  </div>
</template>

<script>
import FooterView from '@/components/FooterView.vue';
import { ref } from '@vue/reactivity';
import MainBtn from '@/components/MainBtn.vue';
import CheckboxInput from '@/components/CheckboxInput.vue';
import { onBeforeMount } from '@vue/runtime-core';
import router from '@/router';
export default {
    components: { FooterView, MainBtn, CheckboxInput },

    setup() {
        const error = ref(null)
        const form = ref({
          firstName: null,
          lastName: null,
          checkbox: false,
          username: null
        })
        const data = ref(null)
        const loading = ref(null)

        onBeforeMount(() => {
          data.value = JSON.parse(sessionStorage.getItem('register'));
          if (!data.value) {
            router.push({ name: "login" });
          }
        })

        const submit = () => {
          const { firstName, lastName, username } = form.value

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        email: data.value.email,
        password: data.value.password,
        username: username || undefined,
        firstName,
        lastName
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        };

        loading.value = true
        fetch("http://192.168.1.102:8000/v2/signup/createaccount", requestOptions)
        .then(response => response.text())
        .then(r => {
          loading.value = false
          console.log(r)
          router.push({name: 'register-done'})
        })
        .catch(error => console.log('error', error));


        }

        return {
            error,
            form,
            data,
            loading,
            submit
        }
    }
};
</script>

<style>
</style>