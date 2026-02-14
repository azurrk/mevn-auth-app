<template>
    <div>

    <div class="login mt-10">

     <h1 class="heading-1 mb-1">Prijava nije uspjela</h1>
                      <div class="flex space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
                <div class="accMail">{{ email }}</div>
            </div>


        <div class="justify-center flex mt-10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-24 h-24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        

        <div class="mt-5 text-center font-bold text-xl">
          Ovom računu više nije moguće pristupiti
        </div>

        <div class="text-center mt-10">
          Racun je privremeno disablovan bla bla bla as on bla bla
        </div>

            <MainBtn
            title="Kontaktiraj podrsku"
            class="mt-10 mb-7"
            :arrow="false"
            textcenter
            />
            <div class="font-bold text-[#2980b9] flex justify-center">Prijava na drugi racun</div>







    </div>
 </div>

</template>

<script>
import MainBtn from "@/components/MainBtn.vue"
import { onBeforeMount, ref } from '@vue/runtime-core'
import router from '@/router'

export default {
  components: { MainBtn },

  setup() {
    const email = ref(null)
    const redirectNote = ('nestoo.com')
    onBeforeMount(() => {
        const mail = localStorage.getItem('email')
        if (!mail) router.push({name: 'login'})
        email.value = mail
    })

    const changeAccount = () => {
        localStorage.removeItem('email')
        router.push({name: 'login'})
    }

    return {
        email,
        changeAccount,
        redirectNote
    }
  }

}
</script>

<style>

</style>