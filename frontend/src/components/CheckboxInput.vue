<template>
  <div class="flex space-x-4 items-center text-[11px] text-gray-600">
        <div class="" v-if="active" id="c-active">
        <svg width="28" height="28" viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="11" y="11" width="362" height="362" rx="29" fill="#2980B9" stroke="#2980B9" stroke-width="22"/>
        <path d="M86 200.116L149.035 263.217C150.207 264.39 152.107 264.391 153.279 263.219L297.5 118.998" stroke="white" stroke-width="35" stroke-linecap="round"/>
        </svg>

        </div>
        <div v-if="!active" id="c-inactive">
        <svg width="28" height="28" viewBox="0 0 384 384" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 8.5H344C361.397 8.5 375.5 22.603 375.5 40V344C375.5 361.397 361.397 375.5 344 375.5H40C22.603 375.5 8.5 361.397 8.5 344V40C8.5 22.603 22.603 8.5 40 8.5Z" fill="#F4F4F4" stroke="#CBCBCB" stroke-width="17"/>
        </svg>

        
        </div>

        <span>{{value}}</span>



  </div>
</template>

<script>
export default {
    props: {
        active: Boolean,
        value: String
    }
}
</script>

<style>

</style>