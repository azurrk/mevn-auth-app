<template>
  <div class="mx-4 mt-10">
    <div class="font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mb-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <span>Upravljanje lozinkom i sigurnosti racuna</span>
    </div>

    <div class="mt-10"></div>
    <div class="py-4 px-4 max-w-sm flex items-center justify-between bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center space-x-4">
            <svg width="62" height="62" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="94.5" cy="94.5" r="94.5" fill="#2980B9"/>
            <path d="M67.2 72.0769V64.7692C67.2 62.4435 66.2834 60.213 64.6518 58.5684C63.0203 56.9239 60.8074 56 58.5 56C56.1926 56 53.9797 56.9239 52.3482 58.5684C50.7166 60.213 49.8 62.4435 49.8 64.7692V72.0769M48.35 94H68.65C69.8037 94 70.9101 93.5381 71.7259 92.7158C72.5417 91.8935 73 90.7783 73 89.6154V76.4615C73 75.2987 72.5417 74.1834 71.7259 73.3611C70.9101 72.5389 69.8037 72.0769 68.65 72.0769H48.35C47.1963 72.0769 46.0899 72.5389 45.2741 73.3611C44.4583 74.1834 44 75.2987 44 76.4615V89.6154C44 90.7783 44.4583 91.8935 45.2741 92.7158C46.0899 93.5381 47.1963 94 48.35 94Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="48.5" cy="127.5" r="7.5" fill="white"/>
            <circle cx="73.5" cy="127.5" r="7.5" fill="white"/>
            <circle cx="98.5" cy="127.5" r="7.5" fill="white"/>
            <circle cx="123.5" cy="127.5" r="7.5" fill="white"/>
            <circle cx="148.5" cy="127.5" r="7.5" fill="white"/>
            </svg>
            <div>
                <div class="font-bold text-lg">Promjena lozinke</div>
                <div class="text-sm">Zadnja promjena: 17. lis.</div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
    <div @click="redirect('manage-devices')" class="py-4 px-4 max-w-sm flex items-center justify-between mt-7 bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center space-x-4">
            <svg width="62" height="62" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="94.5" cy="94.5" r="94.5" fill="#C4C4C4"/>
            <path d="M51 73H46.5C45.3065 73 44.1619 73.4741 43.318 74.318C42.4741 75.1619 42 76.3065 42 77.5V110.5C42 111.693 42.4741 112.838 43.318 113.682C44.1619 114.526 45.3065 115 46.5 115H61.5C62.6935 115 63.8381 114.526 64.682 113.682C65.5259 112.838 66 111.693 66 110.5V77.5C66 76.3065 65.5259 75.1619 64.682 74.318C63.8381 73.4741 62.6935 73 61.5 73H57M51 73V76H57V73M51 73H57M51 110.5H57" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M120.8 114.769H129.2M110.3 121H139.7C141.371 121 142.973 120.344 144.155 119.175C145.336 118.007 146 116.422 146 114.769V73.2308C146 71.5783 145.336 69.9934 144.155 68.8249C142.973 67.6565 141.371 67 139.7 67H110.3C108.629 67 107.027 67.6565 105.845 68.8249C104.664 69.9934 104 71.5783 104 73.2308V114.769C104 116.422 104.664 118.007 105.845 119.175C107.027 120.344 108.629 121 110.3 121Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div>
                <div class="font-bold text-lg">Prijavljeni uredjaji</div>
                <div class="text-sm">4 uredjaja imaju pristup racunu</div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
    <div class="py-4 px-4 max-w-sm flex items-center justify-between mt-7 bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center space-x-4">
            <svg width="62" height="62" viewBox="0 0 1299 1299" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1038 1170.05C1196.44 1051.61 1299 862.531 1299 649.5C1299 290.791 1008.21 0 649.5 0C290.791 0 0 290.791 0 649.5C0 862.531 102.561 1051.61 261 1170.05V415.001C261 391.805 279.805 373.001 303 373.001L996 373C1019.2 373 1038 391.805 1038 415V1170.05ZM1026 1178.81V809.7V415C1026 398.432 1012.57 385 996 385L303 385.001C286.432 385.001 273 398.432 273 415.001V809.7V1178.81C379.203 1254.49 509.154 1299 649.5 1299C789.846 1299 919.797 1254.49 1026 1178.81Z" fill="#2F2C2C"/>
            <path d="M681.25 589.25V562.375C681.25 553.822 677.852 545.619 671.804 539.571C665.756 533.523 657.553 530.125 649 530.125C640.447 530.125 632.244 533.523 626.196 539.571C620.148 545.619 616.75 553.822 616.75 562.375V589.25M611.375 669.875H686.625C690.902 669.875 695.003 668.176 698.027 665.152C701.051 662.128 702.75 658.027 702.75 653.75V605.375C702.75 601.098 701.051 596.997 698.027 593.973C695.003 590.949 690.902 589.25 686.625 589.25H611.375C607.098 589.25 602.997 590.949 599.973 593.973C596.949 596.997 595.25 601.098 595.25 605.375V653.75C595.25 658.027 596.949 662.128 599.973 665.152C602.997 668.176 607.098 669.875 611.375 669.875Z" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <div>
                <div class="font-bold text-lg">Koristi telefon za prijavu</div>
                <div class="text-sm">Nije aktivirano</div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
    <div class="py-4 px-4 max-w-sm flex items-center justify-between mt-7 bg-white rounded-lg border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center space-x-4">
        <svg width="62" height="62" viewBox="0 0 189 189" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="94.5" cy="94.5" r="94.5" fill="#BDC3C7"/>
        <path d="M81.3333 96.9556L90.8333 106.362L106.667 84.4141M94 55C84.4398 63.9891 71.7078 68.9193 58.5249 68.7372C56.848 73.7955 55.9957 79.086 56 84.4099C56 107.787 72.1458 127.427 94 133C115.854 127.432 132 107.792 132 84.4141C132 78.9376 131.113 73.666 129.475 68.733H128.833C115.339 68.733 103.078 63.5157 94 55Z" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


            <div>
                <div class="font-bold text-lg">Dvofaktorska autentifikacija</div>
                <div class="text-sm">Nije aktivirano</div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
    setup() {
    const redirect = (name) => {
    
      router.push({name})
    }

    return {
        redirect
    }
    }
}
</script>

<style>

</style>