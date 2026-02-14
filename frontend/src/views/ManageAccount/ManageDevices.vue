<template>
  <div class="mx-4 mt-10">
    <div class="font-bold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 mb-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      <span>Upravljanje prijavljenim uredjajima</span>
    </div>


<div v-if="!devices" role="status" class="max-w-sm mt-10 animate-pulse">
    <span class="sr-only">Loading...</span>
</div>

    

    <transition
      enter-active-class="transition-opacity duration-75"
      enter-from-class="opacity-0"
    >
        <ul
        v-if="devices"
          class="
            w-full
            mt-10
            text-sm
            font-medium
            text-gray-900
            bg-white
            rounded-lg
            border border-gray-200
            dark:bg-gray-700 dark:border-gray-600 dark:text-white
          "
        >
          <li
            v-for="(device, i) in devices"
            :key="i"
            class="
              py-5
              flex
              justify-between
              items-center
              px-4
              w-full
              rounded-t-lg
              border-b border-gray-200
              dark:border-gray-600
            "
          >
            <div>
              <div class="font-bold">{{ device.name }}</div>
              <div>{{ device.ip }}</div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </li>
        </ul>
    </transition>
  </div>
</template>

<script>
import router from "@/router";
import { ref } from "@vue/reactivity";
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    const redirect = (name) => {
      router.push({ name });
    };

    const devices = ref(null);
    
    onMounted(() => {
        getDevices()
    })

    const getDevices = () => {
      setTimeout(() => {
        devices.value = [
          { name: "iPhone 12", ip: "192.168.1.71" },
          { name: "iPhone 12", ip: "192.168.1.71" },
          { name: "iPhone 12", ip: "192.168.1.71" },
        ];
      }, 1400);
    };

    return {
      redirect,
      devices,
    };
  },
};
</script>

<style>
</style>