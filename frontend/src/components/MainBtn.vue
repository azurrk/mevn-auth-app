<template>
        <button :disabled="disabled" :type="type" :class="`mainbtn transition-all bg-[#2980b9]`">
        <div :class="`btnText ${textcenter && 'block w-full'} `">{{ title }}</div>
        <svg
        v-if="arrow"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="white"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>


      </button>
</template>

<script>
export default {
props: {
    type: String,
    title: String,
    arrow: {type: Boolean, default: true},
    textcenter: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false}
}
}
</script>

<style>

</style>