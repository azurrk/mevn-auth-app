<template>
  <div>
    <div class="login">
      <h1 class="heading-1 mb-1">Hvala na registraciji!</h1>
      <h4 class="mb-4 text-sm">
        Poslali smo e-poštu na adresu {{data.email}} za potvrdu registracije.
      </h4>
    <MainBtn
      type="submit"
      title="Nastavi na prijavu"
      class="mb-9 mt-10"
      :disabled="loading"
      :arrow="false"
      :textcenter="true"
      />

      <div class="mb-8"></div>

    

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
import { onBeforeMount, ref } from 'vue';
import router from '@/router';
import MainBtn from '@/components/MainBtn.vue';
export default {
  components: { MainBtn },
    setup() {
        const data = ref(null)
        onBeforeMount(() => {
          data.value = JSON.parse(sessionStorage.getItem('register'));
          if (!data.value) {
            router.push({ name: "login" });
          }
        })
        return {
            data
        }
    }
}
</script>

<style>

</style>