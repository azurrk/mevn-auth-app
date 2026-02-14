<template>
  <div>
    <div class="login">
      <h1 class="heading-1 mb-2">Imate li poteskoca s prijavom?</h1>
      <h4 class="mb-4 text-sm font-semibold">Oporavak izgubljene ili zaboravljene lozinke.</h4>
        <div class="account">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"/></svg>
        <div class="accMail">foo@bar.com</div>
        </div>
      <div class="mt-16 mx-2 space-y-7">
        <div class="flex items-center space-x-4">
          <OptionBox
          :isSelected="false"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <div class="text-sm font-semibold">
            Pošalji email sa instrukcijama za promjenu lozinke
            <br>
            <span class="text-[14px] font-light">foo@bar.com</span>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <OptionBox
          :isSelected="false"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
          </svg>

          <div class="text-sm font-semibold">
            Pošalji poruku na broj telefona
            <br>
            <span class="text-[14px] font-light">06••••••••41</span>
          </div>
        </div>
      </div>
      
      <MainBtn
      class="mt-16 mb-9"
      title="Nastavi"
      :arrow="false"
      textcenter
      />
      <div class="font-bold text-[#2980b9] flex justify-center">Odustani</div>

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
import OptionBox from '@/components/OptionBox.vue';
export default {
  components: { FooterView, OptionBox, MainBtn },

  setup() {
    const emailInput= ref(false)

    return {
        emailInput
    }
  }
}
</script>

<style scoped>
.account {
    display: flex;

}
.accMail {
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  margin-left: 9px;
}
</style>