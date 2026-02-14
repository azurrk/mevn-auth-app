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

        <h1 class="heading-1">Prijava uredjajem</h1>

        <div class="">
            <div class="account">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
                <div class="accMail">{{email}}</div>
            </div>
            <div @click="changeAccount" class="switch-acc">Promijeni racun</div>
            <form @submit.prevent="submit" class="flex flex-col justify-center items-center">
            <svg width="120" height="120" viewBox="0 0 1299 1299" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1038 1170.05C1196.44 1051.61 1299 862.531 1299 649.5C1299 290.791 1008.21 0 649.5 0C290.791 0 0 290.791 0 649.5C0 862.531 102.561 1051.61 261 1170.05V415.001C261 391.805 279.805 373.001 303 373.001L996 373C1019.2 373 1038 391.805 1038 415V1170.05ZM1026 1178.81V809.7V415C1026 398.432 1012.57 385 996 385L303 385.001C286.432 385.001 273 398.432 273 415.001V809.7V1178.81C379.203 1254.49 509.154 1299 649.5 1299C789.846 1299 919.797 1254.49 1026 1178.81Z" fill="#2980B9"/>
            <path d="M681.25 589.25V562.375C681.25 553.822 677.852 545.619 671.804 539.571C665.756 533.523 657.553 530.125 649 530.125C640.447 530.125 632.244 533.523 626.196 539.571C620.148 545.619 616.75 553.822 616.75 562.375V589.25M611.375 669.875H686.625C690.902 669.875 695.003 668.176 698.027 665.152C701.051 662.128 702.75 658.027 702.75 653.75V605.375C702.75 601.098 701.051 596.997 698.027 593.973C695.003 590.949 690.902 589.25 686.625 589.25H611.375C607.098 589.25 602.997 590.949 599.973 593.973C596.949 596.997 595.25 601.098 595.25 605.375V653.75C595.25 658.027 596.949 662.128 599.973 665.152C602.997 668.176 607.098 669.875 611.375 669.875Z" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h4 class="mt-10 mb-4 text-sm text-center">
                Kako bi ste se prijavili, možete koristiti jedan od načina za otkljucavanje vašeg uredjaja, poput biometrije ili unosa PIN-a
            </h4>

              <div class="errAlert" v-if="error">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="red"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                  <div class="warnText">{{error}}</div>
              </div>
 
              <MainBtn
              :arrow="false"
              textcenter
              type="submit"
              title="Koristite zakljucavanje ekrana "
              class="mb-6 mt-4"
              />
              <div class="font-bold mb-9 text-sm text-[#2980b9]">Umjesto toga, prijavi se koristeci lozinku</div>
            </form>
        </div>
        <div v-if="true" class="flex space-x-2 mb-5 mt-4 items-center text-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
            </svg>
            <div>Prijava ce vas preusmjeriti na</div>
        </div>



      <div class="noteText">
        Ovu stranicu stiti reCaptcha. Primjenjuju se <a class='tosLink'>Uslovi koristenja</a> i <a class='tosLink'>Pravila privatnosti</a> tvrtke Google.
      </div>

    </div>
 </div>

</template>

<script>
import MainBtn from "@/components/MainBtn.vue"
import router from '@/router'
import { ref } from '@vue/reactivity'
import { onBeforeMount } from '@vue/runtime-core'
import { startAuthentication } from '@simplewebauthn/browser';
export default {
  components: { MainBtn },

  setup() {
    const email = ref(null)
    const error = ref(null)
    const loading = ref(false)
    const changeAccount = () => {
        localStorage.clear()
        router.push({name: 'login'})
    }

    onBeforeMount(() => {
      const mail = localStorage.getItem('email')
      if (!mail) router.push({name: 'login'})
      email.value = mail
    })


    async function _fetch(url, data, method = 'POST') {
      const response = await fetch(url, {
      method,
      headers: {
      'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(data) 
      });
      return response.json(); 
    }


    const submit = async () => {

        const options = await _fetch("http://192.168.1.102:8000/v2/signin/webauthn/createcredentials", {email: email.value})
        if (options.error) {
        router.push({name: 'err-suspendedacc'})
        return
        }

        let response;
        
        try {
            
            response = await startAuthentication(options)
        } catch (error) {
          console.log(error)
          return
        }

        _fetch('http://192.168.1.102:8000/v2/signin/withwebauthn', {
          authResponse: response,
          email: email.value
        })
        .then(r => {
          if (r.error) {
            router.push({name: 'err-suspendedacc'})
            return
          }

          localStorage.setItem('authId', r.authId)
          const uri = JSON.parse(sessionStorage.getItem('login-meta')).redirectURI
          setTimeout(() => {
            window.location.href = uri
          }, 900);
        })
        .catch(console.error)

    }

    return {
        changeAccount,
        submit,
        error,
        loading,
        email
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