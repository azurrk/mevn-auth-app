<template>
  <div>
    <div class="login">
      <h1 class="heading-1 mb-1">Promijenite lozinku</h1>
      <h4 class="mb-4 text-sm">
        Koristite minimalno 8 znakova, uključujući velika slova, mala slova i
        brojeve.
      </h4>
     <div class="flex space-x-2">
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
         <span class="font-semibold mb-4">test@dev.com</span>
     </div>

      <div class="mb-8"></div>

      <form @submit.prevent="submit">
        <input
          v-model="password"
          type="password"
          :placeholder="'Lozinka'"
          :style="error ? 'border-color: red' : ''"
          class="maininput"
        />
        <input
          v-model="passwordVerify"
          type="password"
          :placeholder="'Ponovni unos lozinke (opcionalno)'"
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

        <MainBtn class="mb-7" title="Ažuriraj lozinku" type="Submit" />
        <div class="font-bold mb-8 text-[#2980b9]">Preskoci za sada</div>
      </form>

      <div class="noteText">
        Ovu stranicu stiti reCaptcha. Primjenjuju se
        <a class="tosLink">Uslovi koristenja</a> i
        <a class="tosLink">Pravila privatnosti</a> tvrtke Google.
      </div>
    </div>

    <div>
      <FooterView/>
    </div>
  </div>
</template>

<script>
import MainBtn from '@/components/MainBtn.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  components: { MainBtn, FooterView },
    setup() {

        const submit = () => {
            return
        }

        return {
            submit
        }
    }
}
</script>

<style>

</style>