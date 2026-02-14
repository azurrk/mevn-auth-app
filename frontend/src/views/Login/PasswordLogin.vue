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

        <h1 class="heading-1">Prijavite se koristeci lozinku</h1>

        <div class="">
            <div class="account">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
                <div class="accMail">{{ email }}</div>
            </div>
            <div @click="changeAccount" class="switch-acc">Promijeni racun</div>
            <form @submit.prevent="submit">
              <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Lozinka" class="maininput" :style="error ? 'border-color: red' : ''">
              <div class="errAlert" v-if="error">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="red"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                  <div class="warnText">{{error}}</div>
              </div>
              <CheckboxInput
              value="Prikazi lozinku"
              :active="showPassword"
              class="mt-1 mb-8"
              @click="showPassword = !showPassword"
              />  
              <MainBtn
              type="submit"
              title="Prijava"
              class="mb-6"
              />
            </form>
        </div>
        <div v-if="redirectNote" class="flex space-x-2 items-center text-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
            </svg>
            <div>Prijava ce vas preusmjeriti na <strong>{{redirectNote}}</strong></div>
        </div>



        <div class="mb-8 mt-8">
        <div class="forgotLink">Zaboraljena lozinka?</div>
        <div v-if="loginMethods.includes('magiclink')" class="forgotLink mt-3">Prijava magicnim linkom</div>
        </div>


      <div class="noteText">
        Ovu stranicu stiti reCaptcha. Primjenjuju se <a class='tosLink'>Uslovi koristenja</a> i <a class='tosLink'>Pravila privatnosti</a> tvrtke Google.
      </div>

    </div>
 </div>

</template>

<script>
import MainBtn from "@/components/MainBtn.vue"
import { onBeforeMount, ref } from '@vue/runtime-core'
import router from '@/router'
import CheckboxInput from '@/components/CheckboxInput.vue'

export default {
  components: { MainBtn, CheckboxInput },

  setup() {
    const email = ref(null)
    const loading = ref(false);
    const loginMethods = ref([])
    const redirectNote = ('nestoo.com')
    const error = ref(null)
    const password = ref(null)
    const showPassword = ref(false)
    onBeforeMount(() => {
        const mail = localStorage.getItem('email')
        if (!mail) router.push({name: 'login'})
        email.value = mail


        const loginmethodsvalue = localStorage.getItem('loginmethods')
        if (loginmethodsvalue) {
          loginMethods.value = loginmethodsvalue
          console.log(loginMethods.value)
        }
    })

    const changeAccount = () => {
        localStorage.clear()
        router.push({name: 'login'})
    }

    const submit = () => {
      if (!password.value) {
        error.value = 'Unesite lozinku'
        return
      }
      loading.value = true
      error.value = null

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        email: email.value,
        password: password.value
      });

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      };

      fetch("http://192.168.1.102:8000/v2/signin/withemailandpassword", requestOptions)
      .then(response => response.json())
      .then(r => {
        console.log(r)
        if (r.error) {
          loading.value = false
          switch(r.err) {
            case 'err.account-not-exist': {
              error.value = "Greska prilikom prijave! Kontaktirajte podrsku"
              break
            }
            case 'err.password-not-match': {
              error.value = "Neispravna lozinka! Pokusajte ponovo ili je promijenite tipkom 'Zaboravljena lozinka'."
              break
            }
          }
          return
        }

        localStorage.setItem('authId', r.authId)
        const uri = JSON.parse(sessionStorage.getItem('login-meta')).redirectURI
        setTimeout(() => {
          window.location.href = uri
        }, 900);
      })
      .catch(error => console.log('error', error));
    }

    return {
        email,
        changeAccount,
        redirectNote,
        loginMethods,
        error,
        submit,
        loading,
        password,
        showPassword
    }
  }

}
</script>

<style scoped>
.account {
    display: flex;
    justify-content: center;
    align-items: center;


}
.accMail {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  margin-left: 9px;
}
.forgotLink {
    font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  color: #2980b9;
  cursor: pointer;
  
}

.switch-acc {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    color: #2980b9;
    cursor: pointer;
    text-align: center;
    margin: 18px;
}

</style>