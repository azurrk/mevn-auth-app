<template>
  <div>
    <div class="login">
      <h1 class="heading-1 mb-1">Kreirajte lozinku</h1>
      <h4 class="mb-4 text-sm">
        Koristite minimalno 8 znakova, uključujući velika slova, mala slova i
        brojeve.
      </h4>

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
          :placeholder="'Ponovni unos lozinke za potvrdu (opcionalno)'"
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

        <MainBtn title="Nastavi" type="Submit" />
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
import FooterView from "@/components/FooterView.vue";
import { ref } from "@vue/reactivity";
import MainBtn from "@/components/MainBtn.vue";
import router from "@/router";
import { onBeforeMount } from "@vue/runtime-core";
export default {
  components: { FooterView, MainBtn },

  setup() {
    const error = ref(null);
    const password = ref(null);
    const passwordVerify = ref(null);
    
    const pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/m

    const getEmail = () => {
      const mail = sessionStorage.getItem("register");
      if (!mail) router.push({ name: "login" });
    };
    onBeforeMount(() => {
      getEmail();
    });

    const submit = () => {
      if (password.value != passwordVerify.value) {
        if (passwordVerify.value) {
        error.value = "Lozinke se ne podudaraju";
        return;
        }
      }

      
      if (!password.value.match(pwRegex)) {
        error.value = "Slaba lozinka! Koristite minimalno 8 znakova, uključujući velika slova, mala slova i brojeve";
        return;
      }

      const data = JSON.parse(sessionStorage.getItem("register"));
      data.password = password.value;
      sessionStorage.setItem("register", JSON.stringify(data))
      router.push({ name: "register-summary" });
    };

    return {
      error,
      submit,
      password,
      passwordVerify,
    };
  },
};
</script>

<style>
</style>