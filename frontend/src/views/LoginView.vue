<template>
  <div>
    
    <!-- Loading -->
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
      
      <h1 class="heading-1">Prijavi se ili kreiraj racun</h1>
      <!-- Sign In -->
      <form @submit.prevent="submit" novalidate>
        <input
          v-model="mail"
          type="email"
          :placeholder="'Adresa e-pošte ili broj telefona'"
          :style="error ? 'border-color: red' : ''"
          class="maininput"
          :disabled="loading"
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
          type="submit"
          title="Dalje"
          :arrow="!loading"
          :disabled="btnDisabled"
        />
      </form>

      <div class="noteText">
        Ovu stranicu stiti reCaptcha. Primjenjuju se
        <a class="tosLink">Uslovi koristenja</a> i
        <a class="tosLink">Pravila privatnosti</a> tvrtke Google.
      </div>

      <div class="orLine">
        <span>ili se prijavi koristeci</span>
      </div>

      <div class="loginMethods flex items-center space-x-5">
        <div class="thirdpartybtn">
          <img
            src="../assets/googleLogo.png"
            width="21px"
            height="21px"
            alt=""
          />
          <div class="thirdpartybtnText">Google</div>
        </div>
        <div class="thirdpartybtn">
          <img
            src="../assets/appleLogo.png"
            width="17.5px"
            height="21px"
            alt=""
          />
          <div class="thirdpartybtnText">Apple</div>
        </div>
      </div>
    </div>

    <div>
      <FooterView />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import FooterView from "@/components/FooterView.vue";
import MainBtn from "@/components/MainBtn.vue";
import isEmail from "validator/lib/isEmail";
import { onBeforeMount, watch } from "@vue/runtime-core";
import router from "@/router";
export default {
  components: { FooterView, MainBtn },
  setup() {
    const error = ref(null);
    const mail = ref(null);

    const btnDisabled = ref(false);

    const loading = ref(false);

    onBeforeMount(() => {
      if (localStorage.getItem("email")) router.push({ name: "pw-login" });

      if (router.currentRoute.value.query) {
        const meta = {
          redirectURI: router.currentRoute.value.query.continue
        }
        sessionStorage.setItem('login-meta', JSON.stringify(meta))
      }
    });

    const validateForm = () => {
      // TODO: Determine is email or phone, than validate

      if (!mail.value) {
        // no email?
        error.value = "Unesite adresu e-pošte ili broj telefona za nastavak";
        btnDisabled.value = true;
        return;
      }

      // ! Important: Only validate if email is provided (ignore on phone)
      if (!isEmail(mail.value)) {
        // email not formatted correctly
        btnDisabled.value = true;
        error.value = "Unesite ispravnu adresu e-pošte ili broj telefona";
        return;
      }

      btnDisabled.value = false;
      error.value = null;
    };

    const submit = () => {
      validateForm();
      if (error.value) return;

      loading.value = true;
      btnDisabled.value = true;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        type: "email",
        value: mail.value.toLowerCase(),
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      setTimeout(() => {
        fetch("http://192.168.1.102:8000/v2/signin/findacc", requestOptions)
          .then((response) => response.json())
          .then((r) => {
            switch (r.next) {
              case "PASSWORD_INPUT": {
                localStorage.setItem("email", mail.value);
                localStorage.setItem("loginmethods", r.availableLoginMethods);
                router.push({ name: "pw-login" });
                break;
              }
              case "REGISTER_PASSWORD": {
                sessionStorage.setItem(
                  "register",
                  JSON.stringify({ email: mail.value })
                );
                router.push({ name: "register-pw" });
                break;
              }
            }
          })
          .catch((err) => {
            console.error("ReqErr: ", err)
            error.value = "Povezivanje sa serverom za autentifikaciju nije uspjelo! Pokusajte ponovo kasnije, a ako se problem nastavi, kontaktirajte podrsku. "
            loading.value = false
            btnDisabled.value = false;
          });
      }, 900);
    };

    watch(mail, () => {
      if (error.value) {
        validateForm();
      }
    });

    return {
      error,
      mail,
      submit,
      loading,
      btnDisabled
    };
  },
};
</script>

<style>
.loginMethods {
  margin-top: 48px;
  display: flex;
}
.thirdpartybtn {
  display: flex;
  padding-top: 14px;
  padding-right: 18px;
  padding-bottom: 14px;
  padding-left: 18px;
  border: #ababab;
  border-style: solid;
  align-items: center;
  border-radius: 99px;

  margin-bottom: 18px;
}
.thirdpartybtnText {
  margin-left: 18px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
}

.orLine {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #bebebe;
  line-height: 0.1em;
  margin: 10px 0 20px;
  font-family: Montserrat;
  font-weight: 200;
}

.orLine span {
  background: #fff;
  padding: 0 10px;
  color: #bebebe;
}

.login {
  margin-left: 1.1rem;
  margin-right: 1.1rem;
}

.tosLink {
  color: #008893;
  font-weight: 300;
}
.heading-1 {
  margin-top: 40px;
  margin-bottom: 38px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 24px;
}

.noteText {
  font-family: Montserrat;
  font-weight: 200;
  font-size: 12px;
  color: #7f8c8d;
  margin-bottom: 10vh;
}

.maininput {
  width: -webkit-fill-available;

  padding: 4.9% 18px;
  margin-bottom: 14px;
  font-size: 15px;
  background-color: #ffffff;
  border: 1px solid #c0c0c0;
  border-radius: 2px;
  font-family: Montserrat, sans-serif;
}

.mainbtn {
  display: flex;
  width: 100%;
  padding-top: 5.5%;
  padding-right: 12px;
  padding-bottom: 5.5%;
  padding-left: 18px;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  background-color: hsla(203.75, 63.72%, 44.31%, 1);
  margin-bottom: 45px;
}
.mainbtn:hover {
  background-color: rgb(41, 100, 185);
}
.mainbtn:disabled {
  background-color: #9ca3af;
}

.btnText {
  font-family: Montserrat;
  color: hsla(0, 0%, 100%, 1);
  font-size: 16px;
  font-weight: 700;
}

.errAlert {
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-weight: 500;
  color: red;
  margin-bottom: 30px;
  font-size: 14px;
}

.warnText {
  padding-left: 12px;
  width: fit-content;
}
.textfont {
  font-family: Montserrat;
}

</style>